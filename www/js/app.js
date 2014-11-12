require.config({

	baseUrl: 'lib',
	
	paths:{
		app: '../js',
		tpl: '../tpl'
	
	},
	
	map:{
		'*': {
			'adapters/exhibits'		: 'app/adapters/exhibits-memory',
			'adapters/tours'		: 'app/adapters/tours-memory',
			'adapters/toursCat' 	: 'app/adapters/tourCat-memory',
			'adapters/artifacts'	: 'app/adapters/artifacts-json',
			'adapters/imageStore'	: 'app/adapters/imageStore-json'
			
		}
	},
	
	shim: {
		'handlebars': {
			exports: 'Handlebars'
		}
	
	}
});

require(["fastclick", 'app/router'], function (FastClick, router) {

    "use strict";

    $(function () {
        FastClick.attach(document.body);
    });

    router.start();

});
