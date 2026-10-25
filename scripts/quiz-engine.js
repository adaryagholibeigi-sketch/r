const QuizEngine = {
    questions: [],
    userAnswers: {},
    containerId: '',
    
    init: function(questions, containerId) {
        this.questions = questions;
        this.userAnswers = {};
        this.containerId = containerId;
        this.render();
    },
    
    render: function() {
        const container = document.getElementById(this.containerId);
        let html = '';
        this.questions.forEach((q, index) => {
            html += `<div class="question-box" data-qid="${q.id}">
                        <p>سوال ${index + 1}: ${q.text}</p>
                        <div class="options">`;
            q.options.forEach((opt, optIndex) => {
                html += `<label class="option" onclick="QuizEngine.selectOption('${q.id}', ${optIndex}, this)">${opt}</label>`;
            });
            html += `</div></div>`;
        });
        container.innerHTML = html;
    },
    
    selectOption: function(qId, optIndex, element) {
        // حذف انتخاب قبلی در همان سوال
        const parent = element.parentElement;
        Array.from(parent.children).forEach(child => child.classList.remove('selected'));
        
        // ثبت انتخاب جدید
        element.classList.add('selected');
        this.userAnswers[qId] = optIndex;
    },
    
    submit: function() {
        let correctCount = 0, wrongCount = 0, unansweredCount = 0;
        
        this.questions.forEach(q => {
            const userAnswer = this.userAnswers[q.id];
            const questionBox = document.querySelector(`.question-box[data-qid="${q.id}"]`);
            const options = questionBox.querySelectorAll('.option');
            
            // نمایش گزینه صحیح
            options[q.correctAnswer].classList.add('correct');
            
            if (userAnswer === undefined) {
                unansweredCount++;
            } else if (userAnswer === q.correctAnswer) {
                correctCount++;
                // اگر کاربر درست زده بود، تیک سبز
                if(!options[userAnswer].classList.contains('correct')) {
                   options[userAnswer].classList.add('correct'); 
                }
            } else {
                wrongCount++;
                options[userAnswer].classList.add('wrong');
            }
            
            // افزودن توضیح
            const expl = document.createElement('div');
            expl.style.cssText = 'margin-top:1rem; padding:1rem; background:#f8f9fa; border-right:4px solid var(--color-primary); border-radius:8px; font-size:0.95rem;';
            expl.innerHTML = `<strong>پاسخ تشریحی:</strong> ${q.explanation}`;
            questionBox.appendChild(expl);
        });
        
        const total = this.questions.length;
        const score = total > 0 ? ((correctCount / total) * 20).toFixed(2) : 0;
        
        // اسکرول به بالا و نمایش نتیجه
        const resultHtml = `
            <div class="card" style="background-color: #e2f0d9; border: 1px solid #c3e6cb; text-align:center; cursor:default;">
                <h2 style="color:#155724;">نتیجه آزمون</h2>
                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap; margin: 1.5rem 0;">
                    <div><strong>کل:</strong> ${total}</div>
                    <div style="color:var(--color-success)"><strong>صحیح:</strong> ${correctCount}</div>
                    <div style="color:var(--color-danger)"><strong>غلط:</strong> ${wrongCount}</div>
                    <div><strong>بی‌پاسخ:</strong> ${unansweredCount}</div>
                </div>
                <h1 style="color:var(--color-primary); font-size: 3rem; margin: 1rem 0;">${score} <span style="font-size:1.2rem; color:#666;">از ۲۰</span></h1>
                <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 1rem;">آزمون مجدد</button>
                <button class="btn btn-primary" onclick="router.navigate('/')" style="background:#555; margin-top: 1rem;">بازگشت به داشبورد</button>
            </div>
        `;
        document.getElementById('app-container').innerHTML = resultHtml;
        window.scrollTo(0, 0);
    }
};
