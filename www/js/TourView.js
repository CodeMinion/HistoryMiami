define(function(require) {

	"use strict";
	
	var $				= require('jquery'),
		Handlebars		= require('handlebars'),
		tourHtml		= require('text!tpl/Tour.html'),
		
		toursAdapter	= require('adapters/tours'),
		tourTpl			= Handlebars.compile(tourHtml);
		
		return function (tour) {
			
			this.initialize = function () {
			
				this.$el = $('<div/>');
			};
			
			this.render = function() {
			
				this.$el.html(tourTpl(tour));
				
				return this;
			};
			
		this.initialize();
		
		};

});