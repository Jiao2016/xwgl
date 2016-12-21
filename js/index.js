/* 
* @Author: Marte
* @Date:   2016-12-02 14:20:44
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-02 16:33:23
*/

var app=angular.module("app",["ctrl","ngRoute"]);
app.config(['$routeProvider',function($r) {
    $r.when("/",{
        templateUrl:"tpls/list.html",
        controller:"home"
    }).when("/add",{
        templateUrl:"tpls/add.html"
    }).when("/edit/:id",{
        templateUrl:"tpls/edit.html"
    }).when("/show/:id",{
        templateUrl:"tpls/show.html",
        controller:"show"
    })
}])