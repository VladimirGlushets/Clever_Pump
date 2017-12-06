let homeView = "<h1>Home view</h1>"

let configurationViewHtml = "<h1>Configuration view</h1>";

export default class HtmlService{
    configurationView(){
        return configurationViewHtml;
    }

    homeView(){
        return homeView;
    }
}