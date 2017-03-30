angular.module("loancalculator",["ionic","templates","toastr","ngAnimate"]);
angular.module("loancalculator").provider("appserver",function(){var n={HOST:""};return n.$get=["$q","$http","$log","session","$ionicLoading",function(t,e,o,r,u){function a(a,i){var l=i.url,c=i.data||{},d=i.args||{},p={"Content-Type":"application/json"};r.isAuthenticated()&&(p.Authorization="Token "+r.token);var s=n.HOST+l;return t(function(n,t){u.show({template:"Loading...",duration:3e3});var r={method:a,url:s,data:c,params:d,timeout:3e3,headers:p};o.log(a+" "+r.url),e(r).then(function(t){u.hide(),o.log(t),n(t)},function(n){u.hide(),o.log(n),t(n)})})}return{token:null,get:function(n){return a("GET",n)},post:function(n){return a("POST",n)},put:function(n){return a("PUT",n)},delete:function(n){return a("DELETE",n)}}}],n});
angular.module("loancalculator").factory("login",["$q","appserver","session",function(n,o,t){return{login:function(a,r){return n(function(n,u){o.post({url:"login/",data:{username:a,password:r}}).then(function(o){t.token=o.data.token,n(o)},function(n){u(n)})})}}}]);
angular.module("loancalculator").factory("session",["$q",function(n){var t={token:"",isAuthenticated:function(){return t.token&&""!=t.token}};return t}]);
angular.module("loancalculator").config(["appserverProvider",function(a){a.HOST="https://ec2-52-67-183-188.sa-east-1.compute.amazonaws.com:7004/"}]);
angular.module("loancalculator").config(["$stateProvider","$urlRouterProvider",function(e,l){e.state("home",{url:"/",authRequired:!1,templateUrl:"home/template",controller:"HomeCtrl",controllerAs:"vm"}).state("login",{url:"/login/",authRequired:!1,templateUrl:"login/template",controller:"LoginCtrl",controllerAs:"vm"}),l.otherwise("/")}]);
angular.module("loancalculator").controller("HomeCtrl",["$scope",function(o){var a={step:1,form:{capital:1e3,duration:3,property:5e4,chargeType:"1st",securityType:"residential",credit:"good"},loan:{total:0,arrangementFee:0,cost:0,rate:0,perMonth:0,exitFee:0,legalFee:"To be confirmed",valuationFee:"To be confirmed"},goToStep2:function(){a.loan.rate=.75,a.loan.total=a.form.capital*(1+a.loan.rate*a.form.duration/12),a.loan.cost=a.loan.total-a.form.capital,a.loan.perMonth=a.loan.total/a.form.duration,a.loan.arrangementFee=.02*a.loan.total,a.step=2},onLoad:function(){}};return a.onLoad(),a}]);
angular.module("loancalculator").controller("LoginCtrl",["$scope","login","$state","toastr",function(o,n,t,a){var e={username:"",password:"",doLogin:function(){n.login(e.username,e.password).then(function(o){a.success("Successfully logged in!"),t.transitionTo("home")},function(o){a.error("Authentication failed!")})},onLoad:function(){}};return e.onLoad(),e}]);
angular.module("loancalculator").run(["$ionicPlatform","$state","session","$rootScope",function(o,a,n,t){o.ready(function(){window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()}),t.$on("$stateChangeStart",function(o,t,r,e,i){t.authRequired&&!n.isAuthenticated()&&(a.transitionTo("login"),o.preventDefault())})}]);