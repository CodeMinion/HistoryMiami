define(function(require){

	"use strict";
	
	var $					= require('jquery'),
		Handlebars			= require('handlebars'),
		toursHtml			= require('text!tpl/Tours.html'),
		toursItemHtml 		= require('text!tpl/ToursListItem.html'), 
		
		toursAdapter		= require('adapters/tours'),
		toursTpl			= Handlebars.compile(toursHtml),
		toursListItemTpl 	= Handlebars.compile(toursItemHtml);
		
		return function (tourCategory){
		
			this.initialize = function () {
			
				this.$el = $('<div/>');
				
			};
			
			this.render = function() {
				this.$el.html(toursTpl(tourCategory));
			
				return this;
			};
			
			
			this.loadTours = function () {
			
			toursAdapter.findByCategoryId(tourCategory.id).done(function(tours) {
					$(".load-info").remove();
					$('.tour-list').html(toursListItemTpl(tours));
				});
			};
			
			
		this.initialize();
		
			
		};
		
		return {
				loadTours: loadTours
			}
});