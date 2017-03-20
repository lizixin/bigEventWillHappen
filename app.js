var app =  angular.module('myApp', ['ui.router'])	 
	 //配置路由
	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		//路由重定向
		// $urlRouterProvider.otherwise('/home');
		// //配置相关路由
		$stateProvider
			.state('home', {
				url : 'home',
				templateUrl : '/home/home.html'
			})
			.state('direct', {
				url : '/direct',
				templateUrl : '/direct/direct.html'
			})
			.state('find', {
				url : '/find',
				templateUrl : '/find/find.html'
			})
			.state('cart', {
				url : '/cart',
				templateUrl : '/cart/cart.html'
			})
			.state('mine', {
				url : '/mine',
				templateUrl : '/mine/mine.html'
			})
			.state('home.shop', {
				url : '/home.shop',
				templateUrl : '/home/shop/shop.html'
			})
			.state('home.goods', {
				url : '/home.goods',
				templateUrl : '/home/goods/goods.html'
			})
			.state('home.shop.goods', {
				url : '/home.shop.goods',
				templateUrl : '/home/shop/goods/goods.html'
			})
	}])