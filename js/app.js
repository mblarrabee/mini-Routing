var app = angular.module("miniRouting", ['ngRoute']);

app.config(["$routeProvider", function (router) {
    router
        .when("/", {
            templateUrl: "js/home/homeTmpl.html",
            controller: "homeCtrl"
        })
        .when("/settings", {
            templateUrl: "js/settings/settingsTmpl.html",
            controller: "settingsCtrl"
        })
        .when("/products/:id", {
            templateUrl: "js/products/productTmpl.html",
            controller: "productsCtrl"
        })
        .otherwise({
            redirectTo: "/"
        })

    
}]);