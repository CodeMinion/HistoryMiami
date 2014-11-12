define(function (require){

	"use strict";
	
	var $						= require('jquery'),
		Handlebars				= require('handlebars'),
		toursCatAdapter			= require('adapters/toursCat'),
		toursCatHtml			= require('text!tpl/TourCat.html'),
		toursCatListItemHtml 	= require('text!tpl/TourCatListItem.html'),
		
		
		toursCatTpl	= Handlebars.compile(toursCatHtml),
		toursCatListItemTpl = Handlebars.compile(toursCatListItemHtml);
		
		return function () {
		
			this.initialize = function() {
				
				this.$el = $('<div/>');
				
			};
			
			this.render = function() {
					
				this.$el.html(toursCatTpl());
				
				return this;
			};
			
			this.loadList = function(){
				toursCatAdapter.findAll().done(
				function(tourCats) {
					$('.load-info').remove();
					$('.tour-cat-list').html(toursCatListItemTpl(tourCats));
				});
			};
			
		
		
		this.initialize();
		
		
		};
		

});