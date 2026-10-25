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
                html += `<label class="option" onclick="QuizEngine.selectOption('${q.id}', ${optIndex}, this, ${index + 1})">${opt}</label>`;
            });
            html += `</div></div>`;
        });
        container.innerHTML = html;
        this.updateProgress();
    },
    
    selectOption: function(qId, optIndex, element, qNumber) {
        const parent = element.parentElement;
        Array.from(parent.children).forEach(child => child.classList.remove('selected'));
        element.classList.add('selected');
        this.userAnswers[qId] = optIndex;
        this.updateProgress();
    },

    updateProgress: function() {
        const answered = Object.keys(this.userAnswers).length;
        const total = this.questions.length;
        document.getElementById('progress-text').innerText = `پاسخ داده شده: ${answered} از ${total}`;
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
        const percent = total > 0 ? ((correctCount / total) * 100).toFixed(0) : 0;
        const score = total > 0 ? ((correctCount / total) * 20).toFixed(2) : 0;
        
        // کارنامه
        const resultHtml = `
            <div class="card" style="background-color: #e2f0d9; border: 1px solid #c3e6cb; text-align:center; cursor:default; margin-bottom:2rem;">
                <h2 style="color:#155724; font-size:1.8rem;">کارنامه آزمون</h2>
                <div style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap; margin: 1.5rem 0; font-size:1.1rem;">
                    <div style="background:white; padding:10px 20px; border-radius:8px;"><strong>کل:</strong> ${total}</div>
                    <div style="background:white; padding:10px 20px; border-radius:8px; color:var(--color-success)"><strong>صحیح:</strong> ${correctCount}</div>
                    <div style="background:white; padding:10px 20px; border-radius:8px; color:var(--color-danger)"><strong>غلط:</strong> ${wrongCount}</div>
                    <div style="background:white; padding:10px 20px; border-radius:8px;"><strong>بی‌پاسخ:</strong> ${unansweredCount}</div>
                </div>
                <h1 style="color:var(--color-primary); font-size: 3.5rem; margin: 1rem 0;">${percent}%</h1>
                <p style="font-size:1.2rem; color:#333;">نمره شما از ۲۰: <strong>${score}</strong></p>
                
                <div style="margin-top: 2rem; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
                    <button class="btn btn-primary" onclick="router.navigate('/quiz')">آزمون جدید</button>
                    <button class="btn btn-primary" onclick="router.navigate('/')" style="background:#555;">بازگشت به داشبورد</button>
                </div>
            </div>
            <h3 style="color:var(--color-primary); margin-bottom:1rem;">مرور پاسخ‌ها:</h3>
        `;
        
        // جایگزینی محتوا (کارنامه بالای صفحه + سوالات با جواب)
        const container = document.getElementById('app-container');
        container.innerHTML = resultHtml + container.innerHTML;
        
        // حذف دکمه ثبت و هدر آزمون
        document.getElementById('submit-btn').remove();
        document.querySelector('div[style*="position:sticky"]').remove();
        
        window.scrollTo(0, 0);
    }
};
