import ConfigController from './controllers/configController';
//const myModule = require('./controllers/configController');
//let val = myModule.hello(); // val is "Hello" 

// var msg = require('./controllers/test');

// console.log(msg);


let navbarHome = document.getElementById('navbar-home');

if (navbarHome) {
    navbarHome.onclick = () => {        
        require(["./controllers/configController"],
            (Controller) => {
                let controller = new Controller.default();
                controller.getHomeView();                

                exports.controller = controller;
            });
    };
}