router.add('/', renderHome);
router.add('/lesson', renderLesson);
router.add('/bank-sample', () => renderBank('sample'));
router.add('/bank-custom', () => renderBank('custom'));
router.add('/quiz', renderQuizSetup);

function renderHome() {
    document.getElementById('app-container').innerHTML = `
        <div style="padding: 1rem 0; text-align:center;">
            <h1 style="color:var(--color-primary); margin-bottom: 0.5rem;">داشبورد MedEx</h1>
            <p style="color:var(--color-text-light); margin-bottom: 2rem;">پلتفرم جامع آموزش و آزمون پزشکی</p>
            
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                <div class="card" onclick="router.navigate('/lesson')">
                    <h2 style="color:#164C63">📚 خلاصه و مایندمپ</h2>
                    <p>مرور سریع تمام مباحث روماتولوژی (شب امتحان)</p>
                </div>
                <div class="card" onclick="router.navigate('/bank-sample')">
                    <h2 style="color:#164C63">📝 نمونه سوالات</h2>
                    <p>بررسی تعاملی سوالات امتحانات قبلی</p>
                </div>
                <div class="card" onclick="router.navigate('/bank-custom')">
                    <h2 style="color:#164C63">🧠 سوالات تالیفی</h2>
                    <p>سوالات طراحی شده برای تسلط بیشتر</p>
                </div>
                <div class="card" onclick="router.navigate('/quiz')" style="background:#e2f0d9; border: 1px solid #c3e6cb;">
                    <h2 style="color:#155724">🎯 آزمون جامع</h2>
                    <p>آزمون با نمره‌دهی، درصد و کارنامه</p>
                </div>
            </div>
        </div>
    `;
}

function renderLesson() {
    document.getElementById('app-container').innerHTML = `
        <button onclick="router.navigate('/')" class="btn btn-outline" style="margin-bottom:1rem;">&rarr; بازگشت</button>
        <h2 style="color:var(--color-primary); margin-bottom: 1rem;">خلاصه جامع روماتولوژی</h2>
        <div class="summary-container">
            ${rheumatologyData.summary}
        </div>
    `;
}

// نمایش بانک سوالات (تعاملی)
function renderBank(type) {
    const allQs = rheumatologyData.questions;
    // فیلتر بر اساس منبع (sample یا custom)
    const filteredQs = allQs.filter(q => q.source === type);
    
    const title = type === 'sample' ? 'نمونه سوالات امتحانی' : 'سوالات تالیفی';
    
    let html = `
        <button onclick="router.navigate('/')" class="btn btn-outline" style="margin-bottom:1rem;">&rarr; بازگشت</button>
        <h2 style="color:var(--color-primary); margin-bottom: 1rem;">${title} (${filteredQs.length} سوال)</h2>
        <p style="margin-bottom: 1.5rem; color:var(--color-text-light);">برای مشاهده پاسخ صحیح و توضیحات، روی گزینه‌ها کلیک کنید.</p>
    `;

    if (filteredQs.length === 0) {
        html += `<p style="text-align:center; color:red;">هیچ سوالی در این بخش یافت نشد. لطفاً فایل داده را بررسی کنید.</p>`;
    } else {
        filteredQs.forEach((q, index) => {
            html += `
                <div class="question-bank-item" id="q-${q.id}">
                    <div class="q-text">${index + 1}. ${q.text}</div>
                    <div class="q-options">
                        ${q.options.map((opt, i) => `
                            <div class="q-option" onclick="revealAnswer('${q.id}', ${i}, this)">${opt}</div>
                        `).join('')}
                    </div>
                    <div class="q-explanation" id="exp-${q.id}">
                        <strong>پاسخ صحیح: ${q.options[q.correctAnswer]}</strong><br>
                        <strong>توضیح:</strong> ${q.explanation}
                    </div>
                </div>
            `;
        });
    }

    document.getElementById('app-container').innerHTML = html;
}

// تابع تعاملی نمایش جواب در بانک سوال
window.revealAnswer = function(qId, selectedIndex, element) {
    const q = rheumatologyData.questions.find(x => x.id === qId);
    const parent = element.parentElement;
    const options = parent.querySelectorAll('.q-option');
    const explanation = document.getElementById('exp-' + qId);

    // اگر قبلا جواب داده شده، کاری نکن
    if (explanation.style.display === 'block') return;

    // علامت زدن گزینه‌ها
    options.forEach((opt, i) => {
        if (i === q.correctAnswer) opt.classList.add('correct');
        if (i === selectedIndex && i !== q.correctAnswer) opt.classList.add('wrong');
    });

    // نمایش توضیح
    explanation.style.display = 'block';
};

function renderQuizSetup() {
    document.getElementById('app-container').innerHTML = `
        <button onclick="router.navigate('/')" class="btn btn-outline" style="margin-bottom:1rem;">&rarr; بازگشت</button>
        <div class="quiz-settings">
            <h2 style="color:var(--color-primary); margin-bottom: 1.5rem; text-align:center;">تنظیمات آزمون</h2>
            
            <label>منبع سوالات:</label>
            <select id="quiz-source">
                <option value="all">ترکیبی (نمونه + تالیفی)</option>
                <option value="sample">فقط نمونه سوالات</option>
                <option value="custom">فقط سوالات تالیفی</option>
            </select>

            <label>تعداد سوالات:</label>
            <select id="quiz-count">
                <option value="10">۱۰ سوال</option>
                <option value="20">۲۰ سوال</option>
                <option value="30">۳۰ سوال</option>
                <option value="50">۵۰ سوال</option>
                <option value="120">تمام سوالات (۱۲۰ سوال)</option>
            </select>

            <button onclick="startQuiz()" class="btn btn-primary" style="width:100%;">شروع آزمون</button>
        </div>
    `;
}

window.startQuiz = function() {
    const source = document.getElementById('quiz-source').value;
    const count = parseInt(document.getElementById('quiz-count').value);
    
    let selectedQs = [];
    if (source === 'all') {
        selectedQs = [...rheumatologyData.questions];
    } else {
        selectedQs = rheumatologyData.questions.filter(q => q.source === source);
    }
    
    // تصادفی سازی
    selectedQs = selectedQs.sort(() => 0.5 - Math.random());
    
    // برش بر اساس تعداد
    if (selectedQs.length > count) {
        selectedQs = selectedQs.slice(0, count);
    }

    // رندر آزمون
    let html = `
        <div style="position:sticky; top:70px; background:var(--color-bg); padding:1rem 0; z-index:10; display:flex; justify-content:space-between; align-items:center;">
            <h2 style="color:var(--color-primary); margin:0;">آزمون در جریان...</h2>
            <span id="progress-text" style="font-weight:bold; color:#555;"></span>
        </div>
        <div id="quiz-container"></div>
        <button id="submit-btn" class="btn btn-primary" style="width:100%; margin-top: 1rem; padding:1.2rem; font-size:1.2rem;">پایان آزمون و مشاهده کارنامه</button>
    `;
    document.getElementById('app-container').innerHTML = html;

    // مقداردهی موتور آزمون
    QuizEngine.init(selectedQs, 'quiz-container');
    
    document.getElementById('submit-btn').addEventListener('click', () => {
        QuizEngine.submit();
    });
};
