const router = {
    routes: {},
    add: function(path, viewFunc) { this.routes[path] = viewFunc; },
    navigate: function(path) {
        window.history.pushState({}, "", path);
        this.handleRoute();
    },
    handleRoute: function() {
        // دریافت مسیر فعلی
        let path = window.location.pathname;
        
        // بررسی اگر در گیت‌هاب پیجز زیر پوشه MedEx هستیم
        const basePath = window.location.pathname.includes('/MedEx') ? '/MedEx' : ''; 
        
        // حذف نام ریپازیتوری از مسیر برای تطابق با کلیدهای روتر
        if (basePath && path.startsWith(basePath)) {
            path = path.replace(basePath, '');
        }
        
        // اگر مسیر خالی بود یا به index.html ختم می‌شد، آن را به '/' تبدیل کن
        if (path === '' || path === '/index.html') {
            path = '/';
        }
        
        // پیدا کردن ویو مناسب
        const view = this.routes[path] || this.routes['/'];
        const container = document.getElementById('app-container');
        
        if (container) {
            container.innerHTML = ''; // پاک کردن محتوای قبلی
            view(); // اجرای تابع رندر
        } else {
            console.error("app-container not found!");
        }
    }
};

// مدیریت دکمه‌های عقب و جلو مرورگر
window.onpopstate = () => router.handleRoute();
