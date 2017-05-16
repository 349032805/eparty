'use strict';

angular.module('eparty')
  .controller('DownloadCtrl', function ($scope,$location) {

  		//判断是安卓还是ios手机扫码
		var browser = {
			versions: function () {
				var u = navigator.userAgent;
				return { //移动终端浏览器版本信息 
					ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
					android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
					iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
					iPad: u.indexOf('iPad') > -1, //是否iPad 
					};
				}(),
		}
		
	   	//根据参数判断要下载的是哪一个应用
		var appParam  = $location.search().app;
		$scope.appParam = appParam;
		$scope.way = "";

		//判断是否是微信扫描进入的页面,如果是,根据参数显示对应的图片,并给出提示.
		var userAgent = navigator.userAgent;
		if (userAgent.indexOf("MicroMessenger") > 0) {
			$scope.way = "weixin";
		}

		if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
			var app = $scope.appParam;
			if(app =="boss"){
				window.location.href="https://itunes.apple.com/us/app/id1209812970?l=zh&ls=1&mt=8";
			}

			if(app =="fastfood"){
				window.location.href="https://itunes.apple.com/us/app/id1218142762?l=zh&ls=1&mt=8";
			}

			if(app =="dinner"){
				window.location.href="https://itunes.apple.com/us/app/id1209812954?l=zh&ls=1&mt=8";
			}
		}

		
	    $scope.downloadAndroid = function () {
			var app = $scope.appParam;
			if(app =="boss"){
				window.location.href="http://image.51eparty.com/ypyzg.apk";
			}

			if(app =="fastfood"){
				window.location.href="http://image.51eparty.com/ypyxefast.apk";
			}

			if(app =="dinner"){
				window.location.href="http://image.51eparty.com/ypyct.apk";
			}
	    }
      
 });