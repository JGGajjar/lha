// Create an immediately invoked functional expression to wrap our code
(function() {

    // Define our constructor
    this.Modal = function() {

        // Define option defaults
        var defaults = {
            username: "test@liferay.com",
            password: "test",
            content: null,
            contentConfig: [{}]
        }

        // Create options by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

    }

    // Utility method to extend defaults with user options
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    // Private Method
    function make_base_auth(user, password) {
        var tok = user + ':' + password;
        var hash = btoa(tok);
        return "Basic " + hash;
    }

    function processUserDetailsResponse(userData, contentPlaceholder) {
        var contentJson = xmlToJSON.parseString(userData);
        if ($(contentPlaceholder)) {
            $(contentPlaceholder).html(contentJson.root[0]["dynamic-element"][0]["dynamic-content"][0]._text);
        }
    }

    function errorHandler(statusCode) {
        console.log("failed with status", status);
    }

    // Public Method
    Modal.prototype.featchData = function() {
        var _ = this;
        _.options.contentConfig.forEach(function(curObj) {
            $.ajax({
                url: curObj.requestUrl,
                dataType: "json",
                data: curObj.requestQuerydata,
                type: curObj.requestType,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', make_base_auth(_.options.username, _.options.password));
                }
            }).done(function(data) {
                processUserDetailsResponse(data.content, curObj.responcePlaceholder);
            }).fail(function(xhr) {
                errorHandler(xhr.statusText);
            });
        });
    }

}());

function setBanner() {
    var myModal = new Modal({
        contentConfig: [{
            requestUrl: "http://localhost:8080/api/jsonws/journal.journalarticle/get-article",
            requestQuerydata: {
                groupId: 34925,
                articleId: 35057
            },
            requestType: "get",
            responcePlaceholder: "#home_banner_area"
        }]
    });
    myModal.featchData();
}
// Set banner webcontent 
setBanner();

function setBlogSection() {
    var myModal = new Modal({
        contentConfig: [{
            requestUrl: "http://localhost:8080/api/jsonws/journal.journalarticle/get-article",
            requestQuerydata: {
                groupId: 34925,
                articleId: 36719
            },
            requestType: "get",
            responcePlaceholder: "#home_blog_area"
        }]
    });
    myModal.featchData();
}
// Set blog webcontent 
setBlogSection();

function setInstaSection() {
    var myModal = new Modal({
        contentConfig: [{
            requestUrl: "http://localhost:8080/api/jsonws/journal.journalarticle/get-article",
            requestQuerydata: {
                groupId: 34925,
                articleId: 37212
            },
            requestType: "get",
            responcePlaceholder: "#instagram_area"
        }]
    });
    myModal.featchData();
}
// Set blog webcontent 
setInstaSection();