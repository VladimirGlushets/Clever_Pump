window.configController = function() {

    function getHomeView(){
        renderView(window.htmlService.homeView());
    };

    function getConfigurationView(){
         renderView(window.htmlService.configurationView());
    };

    function postConfiguration(data){

    };

    function renderView(view) {        
        var container = $( "#page-content" );
        if (container) {            
            container.html("");
            container.append(view);
        }
    };

    // Expose API
    return {
        getHomeView: getHomeView,
        getConfigurationView: getConfigurationView,
        postConfiguration: postConfiguration
    }
}();