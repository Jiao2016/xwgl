/* 
* @Author: Marte
* @Date:   2016-12-02 12:43:21
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-02 15:37:26
*/
var service=angular.module("service",[]);
service.factory("getListData",function($http) {
    var d=null;
    $http({
        method:"get",
        url:"data/data.json"
    }).then(function(res){
        d=res.data;
    },function(){})
    return{
        data:d
    }
})