window.htmlService = function() {
    var configurationViewHtml = 
    "<div class='row'>" + 
    "<div class='col-md-offset-2 col-md-8'>" +
    "<section id='loginForm'>" +
        "<form action='/Account/Login' class='form-horizontal' method='post' role='form' novalidate='novalidate'>" +
        "<h4>Configuration.</h4>" +
                "<hr>" +
                "<div class='form-group'>" +
                    "<label class='col-md-2 control-label' for='Email'>IP:</label>" +
                    "<div class='col-md-10'>" +
                        "<input class='form-control' data-val='true' data-val-email='The Email field is not a valid e-mail address' data-val-required='The Email field is required.' id='Email' name='Email' type='text'>" +
                        "<span class='field-validation-valid text-danger' data-valmsg-replace='true'></span>" +
                    "</div>" +
                "</div>" +
                "<div class='form-group'>" +
                    "<label class='col-md-2 control-label' for='Password'>Port:</label>" +
                    "<div class='col-md-10'>" +
                        "<input class='form-control' data-val='true' data-val-required='The Password field is required.' id='Password' name='Password' type='text'>" +
                        "<span class='field-validation-valid text-danger' data-valmsg-for='Password' data-valmsg-replace='true'></span>" +
                    "</div>" +
                "</div>" +
                "<div class='form-group'>" +
                    "<label class='col-md-2 control-label' for='Password'>Gateway:</label>" +
                    "<div class='col-md-10'>" +
                        "<input class='form-control' data-val='true' data-val-required='The Password field is required.' id='Password' name='Password' type='text'>" +
                        "<span class='field-validation-valid text-danger' data-valmsg-for='Password' data-valmsg-replace='true'></span>" +
                    "</div>" +
                "</div>" +
                "<div class='form-group'>" +
                    "<label class='col-md-2 control-label' for='Password'>Submask:</label>" +
                    "<div class='col-md-10'>" +
                        "<input class='form-control' data-val='true' data-val-required='The Password field is required.' id='Password' name='Password' type='text'>" +
                        '<span class="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>' +
                    "</div>" +
                "</div>" +
                '<div class="form-group">' +
                    '<label class="col-md-2 control-label" for="Password">DNS:</label>' +
                    '<div class="col-md-10">' +
                        '<input class="form-control" data-val="true" data-val-required="The Password field is required." id="Password" name="Password" type="text">' +
                        '<span class="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>' +
                    '</div>' +
                '</div>' +
                '<div class="form-group">' +
                    '<label class="col-md-2 control-label" for="Password">DNS 2:</label>' +
                    '<div class="col-md-10">' +
                        '<input class="form-control" data-val="true" data-val-required="The Password field is required." id="Password" name="Password" type="text">' +
                        '<span class="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>' +
                    '</div>' +
                '</div>' +
                '<div class="form-group">' +
                    '<label class="col-md-2 control-label" for="Password">Host:</label>' +
                    '<div class="col-md-10">' +
                        '<input class="form-control" data-val="true" data-val-required="The Password field is required." id="Password" name="Password" type="text">' +
                        '<span class="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>' +
                    '</div>' +
                '</div>' +
                 '<div class="form-group">' +
                    '<label class="col-md-2 control-label" for="Password">DHCP:</label>' +
                    '<div class="col-md-10">' +
                        '<div class="checkbox">' +
                            '<input data-val="true" data-val-required="The Remember me? field is required." id="RememberMe" name="RememberMe" type="checkbox" value="true">' +
                            '<input name="RememberMe" type="hidden" value="false">' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                '<div class="form-group">' +
                    '<label class="col-md-2 control-label" for="Password">SSID:</label>' +
                    '<div class="col-md-10">' +
                        '<input class="form-control" data-val="true" data-val-required="The Password field is required." id="Password" name="Password" type="text">' +
                        '<span class="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>' +
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