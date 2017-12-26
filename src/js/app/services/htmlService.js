window.htmlService = function() {
    var configurationViewHtml = 
    "<div class='row'>" + 
    "<div class='col-md-offset-2 col-md-8'>" +
    "<section id='loginForm'>" +
        "<form action='http://localhost:63549/api/config' class='form-horizontal' method='post' role='form' novalidate='novalidate'>" +
        "<h4>Configuration.</h4>" +
                "<hr>" +
                "<div class='form-group'>" +
                    "<label class='col-md-2 control-label' for='Ip'>IP:</label>" +
                    "<div class='col-md-10'>" +
                        "<input class='form-control' data-val='true' data-val-required='The Ip field is required.' id='Ip' name='Ip' type='text'>" +
                        "<span class='field-validation-valid text-danger' data-valmsg-replace='true'></span>" +
                    "</div>" +
                "</div>" +
                "<div class='form-group'>" +
                    "<label class='col-md-2 control-label' for='Port'>Port:</label>" +
                    "<div class='col-md-10'>" +
                        "<input class='form-control' data-val='true' data-val-required='The Port field is required.' id='Port' name='Port' type='text'>" +
                        "<span class='field-validation-valid text-danger' data-valmsg-for='Port' data-valmsg-replace='true'></span>" +
                    "</div>" +
                "</div>" +
                "<div class='form-group'>" +
                    "<label class='col-md-2 control-label' for='Gateway'>Gateway:</label>" +
                    "<div class='col-md-10'>" +
                        "<input class='form-control' data-val='true' data-val-required='The Gateway field is required.' id='Gateway' name='Gateway' type='text'>" +
                        "<span class='field-validation-valid text-danger' data-valmsg-for='Gateway' data-valmsg-replace='true'></span>" +
                    "</div>" +
                "</div>" +
                "<div class='form-group'>" +
                    "<label class='col-md-2 control-label' for='Submask'>Submask:</label>" +
                    "<div class='col-md-10'>" +
                        "<input class='form-control' data-val='true' data-val-required='The Submask field is required.' id='Submask' name='Submask' type='text'>" +
                        '<span class="field-validation-valid text-danger" data-valmsg-for="Submask" data-valmsg-replace="true"></span>' +
                    "</div>" +
                "</div>" +
                '<div class="form-group">' +
                    '<label class="col-md-2 control-label" for="Dns">DNS:</label>' +
                    '<div class="col-md-10">' +
                        '<input class="form-control" data-val="true" data-val-required="The Dns field is required." id="Dns" name="Dns" type="text">' +
                        '<span class="field-validation-valid text-danger" data-valmsg-for="Dns" data-valmsg-replace="true"></span>' +
                    '</div>' +
                '</div>' +
                '<div class="form-group">' +
                    '<label class="col-md-2 control-label" for="Dns2">DNS 2:</label>' +
                    '<div class="col-md-10">' +
                        '<input class="form-control" data-val="true" data-val-required="The Dns2 field is required." id="Dns2" name="Dns2" type="text">' +
                        '<span class="field-validation-valid text-danger" data-valmsg-for="Dns2" data-valmsg-replace="true"></span>' +
                    '</div>' +
                '</div>' +
                '<div class="form-group">' +
                    '<label class="col-md-2 control-label" for="Host">Host:</label>' +
                    '<div class="col-md-10">' +
                        '<input class="form-control" data-val="true" data-val-required="The Host field is required." id="Host" name="Host" type="text">' +
                        '<span class="field-validation-valid text-danger" data-valmsg-for="Host" data-valmsg-replace="true"></span>' +
                    '</div>' +
                '</div>' +
                 '<div class="form-group">' +
                    '<label class="col-md-2 control-label" for="Dhcp">DHCP:</label>' +
                    '<div class="col-md-10">' +
                        '<div class="checkbox">' +
                            '<input data-val="true" id="Dhcp" name="Dhcp" type="checkbox" value="true">' +
                            '<input name="Dhcp" type="hidden" value="false">' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                '<div class="form-group">' +
                    '<label class="col-md-2 control-label" for="Ssid">SSID:</label>' +
                    '<div class="col-md-10">' +
                        '<input class="form-control" data-val="true" data-val-required="The Ssid field is required." id="Ssid" name="Ssid" type="text">' +
                        '<span class="field-validation-valid text-danger" data-valmsg-for="Ssid" data-valmsg-replace="true"></span>' +
                    '</div>' +
                '</div>' +
                '<div class="form-group">' +
                    '<label class="col-md-2 control-label" for="Password">Password:</label>' +
                    '<div class="col-md-10">' +
                        '<input class="form-control" data-val="true" data-val-required="The Password field is required." id="Password" name="Password" type="password">' +
                        '<span class="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>' +
                    '</div>' +
                '</div>' +

                '<div class="form-group">' +
                    '<div class="col-md-offset-2 col-md-10">' +
                        '<input type="submit" value="Update configuration" class="btn btn-default">' +
                    '</div>' +
                '</div>' +
                
            '</form>' +
        '</section>' +
        '</div>' +
    '</div>';

    var homeViewHtml = "<h1>Home view</h1>";

    function configurationView(){
         return configurationViewHtml;
    };

    function homeView(){
        return homeViewHtml;
    };

    // Expose API
    return{
        homeView: homeView,
        configurationView: configurationView   
    }

}();