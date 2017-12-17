var navbarHome = document.getElementById('navbar-home');

if (navbarHome) {
    navbarHome.onclick = (e) => {
        e.preventDefault();
        window.configController.getHomeView();            
    };
}

var navbarConfig = document.getElementById('navbar-config');

if (navbarConfig) {
    navbarConfig.onclick = (e) => {
        e.preventDefault();
        window.configController.getConfigurationView();            
    };
}
