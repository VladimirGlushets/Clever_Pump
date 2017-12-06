//import HtmlService from '../servisces/htmlService';

export default class ConfigController{
    getHomeView(){
        this.renderView(HtmlService.configurationView());
    }

    getConfigurationView(){
         this.renderView(HtmlService.configurationView());
    }

    renderView(view) {
        let container = document.getElementById('page-content');
        if (container) {
            container.innerHTML = '';
            container.appendChild(view);
        }
    }
}