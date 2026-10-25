// تعریف مسیرها
router.add('/', renderHome);
router.add('/lesson', renderLesson);
router.add('/quiz', renderQuiz);

// صفحه اصلی (داشبورد)
function renderHome() {
    document.getElementById('app-container').innerHTML = `
        <div style="padding: 1rem 0;">
            <h1 style="color:var(--color-primary); margin-bottom: 1rem;">داشبورد MedEx</h1>
            <p style="color:var(--color-text-light); margin-bottom: 2rem;">به پلتفرم مرور سریع و آزمون‌های پزشکی خوش آمدید.</p>
            
            <div class="card" onclick="router.navigate('/lesson')">
                <h2>${rheumatologyData.title}</h2>
                <p>${rheumatologyData.description}</p>
                <button class="btn btn-primary" style="margin-top: 1rem;">مشاهده خلاصه و مایندمپ</button>
            </div>
            
            <div class="card" onclick="router.navigate('/quiz')">
                <h2>آزمون جامع روماتولوژی</h2>
                <p>شامل ${rheumatologyData.questions.length} سوال (نمونه + تالیفی)</p>
                <button class="btn btn-primary" style="margin-top: 1rem;">شروع آزمون</button>
            </div>
        </div>
    `;
}

// صفحه خلاصه درس و مایندمپ
function renderLesson() {
    document.getElementById('app-container').innerHTML = `
        <div style="padding: 1rem 0;">
            <button onclick="router.navigate('/')" style="background:none; border:none; color:var(--color-primary); cursor:pointer; margin-bottom:1rem; font-family:inherit;">&rarr; بازگشت به داشبورد</button>
            <h2 style="color:var(--color-primary); margin-bottom: 1rem;">${rheumatologyData.title} - مرور سریع</h2>
            <div class="summary-container">
                ${rheumatologyData.summary}
            </div>
        </div>
    `;
}

// صفحه آزمون
function renderQuiz() {
    document.getElementById('app-container').innerHTML = `
        <div style="padding: 1rem 0;">
            <button onclick="router.navigate('/')" style="background:none; border:none; color:var(--color-primary); cursor:pointer; margin-bottom:1rem; font-family:inherit;">&rarr; بازگشت به داشبورد</button>
            <h2 style="color:var(--color-primary); margin-bottom: 1rem;">آزمون جامع روماتولوژی</h2>
            <div id="quiz-container"></div>
            <button id="submit-btn" class="btn btn-primary" style="width:100%; margin-top: 1rem; padding:1.2rem; font-size:1.2rem;">پایان آزمون و مشاهده نتیجه</button>
        </div>
    `;
    
    QuizEngine.init(rheumatologyData.questions, 'quiz-container');
    
    document.getElementById('submit-btn').addEventListener('click', () => {
        QuizEngine.submit();
    });
}

// شروع برنامه
document.addEventListener('DOMContentLoaded', () => {
    router.handleRoute();
});
