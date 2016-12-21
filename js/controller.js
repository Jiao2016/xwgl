/* 
* @Author: Marte
* @Date:   2016-12-02 12:43:04
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-02 20:22:25
*/
var data=[
    {
        "id":"1",
        "title":"银行里那些冰冷的规章制度，都是无数血的教训堆砌而成",
        "time":"2016-12-02",
        "content":"没错，客户与银行产生的诸多纠纷都是因为这一个现实的问题。目前一部分人（只是一部分）对银行业的看法依然是“银行=公益机构”，但实际上银行与任何一家商业公司都没有实际上的区别，最终目的都是为了盈利。为了达成商业目的，就需要各种条款、制度来对当事人进行约束。在商业活动中通常是以合同的形式出现，而在银行业则是“有背书合同的申请表”。客户如果想要办理任何业务，那么必须认可这些所谓的“强制规定”，或者签字，或者盖章，或者按手印。这样看起来似乎客户是弱势的一方，是被强迫的一方，是上当受骗的一方，实则不然。",
        "url":"#/show/1"
    },
    {
        "id":"2",
        "title":"与任何一家商业公司都没有实与任何一家商业公司都没有实",
        "time":"2016-12-02",
        "content":"没错，客户与银行产生的诸多纠纷都是因为这一个现实的问题。目前一部分人（只是一部分）对银行业的看法依然是“银行=公益机构”，但实际上银行与任何一家商业公司都没有实际上的区别，最终目的都是为了盈利。为了达成商业目的，就需要各种条款、制度来对当事人进行约束。在商业活动中通常是以合同的形式出现，而在银行业则是“有背书合同的申请表”。客户如果想要办理任何业务，那么必须认可这些所谓的“强制规定”，或者签字，或者盖章，或者按手印。这样看起来似乎客户是弱势的一方，是被强迫的一方，是上当受骗的一方，实则不然。",
        "url":"#/show/2"
    },
    {
        "id":"3",
        "title":"就需要各种条款、制度来对当事人进行约束。",
        "time":"2016-12-02",
        "content":"没错，客户与银行产生的诸多纠纷都是因为这一个现实的问题。目前一部分人（只是一部分）对银行业的看法依然是“银行=公益机构”，但实际上银行与任何一家商业公司都没有实际上的区别，最终目的都是为了盈利。为了达成商业目的，就需要各种条款、制度来对当事人进行约束。在商业活动中通常是以合同的形式出现，而在银行业则是“有背书合同的申请表”。客户如果想要办理任何业务，那么必须认可这些所谓的“强制规定”，或者签字，或者盖章，或者按手印。这样看起来似乎客户是弱势的一方，是被强迫的一方，是上当受骗的一方，实则不然。",
        "url":"#/show/3"
    }
]
var ctrl=angular.module("ctrl",[]);
ctrl.controller("home",function($scope,$http) {
    // $http({
    //     method:"get",
    //     url:"data/data.json"
    // }).then(function(res){
        
    // },function(){})
    $scope.list=data;
})
ctrl.controller("show",function($scope,$routeParams,$http){
    // $http({
    //     method:"get",
    //     url:"data/data.json"
    // }).then(function(res){
        // $scope.list=data;
        // var l=res.data;
        $scope.list=data;
        for(var i=0;i<$scope.list.length;i++){
            if($scope.list[i].id==$routeParams.id){
                $scope.one=$scope.list[i];
                return;
            }
        }
    // },function(){})
})
ctrl.controller("edit",function($scope,$location,$routeParams){
    var l=data;
    console.log(l)
    for(var i=0;i<l.length;i++){
        if(l[i].id==$routeParams.id){
            $scope.sub=function(){
                $location.url('/')
            }
            $scope.one=l[i];
            return;
        }
    }
    console.log($scope.one)
})
ctrl.controller("add",function($scope,$location){
    $scope.list=data;
    $scope.tit="";
    $scope.con="";
    $scope.add=function(){
        var id=data[data.length-1].id+1;
        if(!$scope.tit||!$scope.con){
            return false;
        }
        $scope.obj={
            id:id,
            title:$scope.tit,
            content:$scope.con,
            url:'#/show/'+this.id
        }
        $scope.list.push($scope.obj)
        console.log($scope.list)
        $location.url('/')
    }
    
})
