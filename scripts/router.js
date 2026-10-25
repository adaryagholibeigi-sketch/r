const router = {
    routes: {},
    add: function(path, viewFunc) { this.routes[path] = viewFunc; },
    navigate: function(path) {
        window.history.pushState({}, "", path);
        this.handleRoute();
    },
    handleRoute: function() {
        let path = window.location.pathname;
        const basePath = window.location.pathname.includes('/MedEx') ? '/MedEx' : ''; 
        if (path.startsWith(basePath)) path = path.replace(basePath, '');
        if (path === '' || path === '/index.html') path = '/';
        
        const view = this.routes[path] || this.routes['/'];
        document.getElementById('app-container').innerHTML = '';
        view();
    }
};
window.onpopstate = () => router.handleRoute();
