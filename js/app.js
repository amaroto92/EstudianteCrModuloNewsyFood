angular
	.module('estudiantecr', [
		'ui.router'
	])
	.config(function($urlRouterProvider, $stateProvider){
		$stateProvider.state("home", {
			url: '/',
			views: {
				"news": {
					templateUrl: 'modules/news/views/news.html'
				},
				"bus": {
					templateUrl: 'modules/bus/views/bus.html'
				},
				"food": {
					templateUrl: 'modules/food/views/food.html'
				},
				"calendar": {
					templateUrl: 'modules/calendar/views/calendar.html'
				}
			}
		});
		$urlRouterProvider.otherwise('/');
	})
	.run(function(){
		setTimeout(function(){
			$('ul.tabs').tabs();
		}, 50);
	});