define(function(require) {

	"use strict";
	
	var $					= require('jquery'),
		Handlebars			= require('handlebars'),
		exhibitsHtml		= require('text!tpl/Exhibits.html'),
		exhibitItemHtml		= require('text!tpl/ExhibitsListItem.html'),
		
		exhibitsAdapter		= require('adapters/exhibits'),
		
		exhibitsListItemTpl = Handlebars.compile(exhibitItemHtml),
		exhibitsTpl			= Handlebars.compile(exhibitsHtml);
		
		return function() {
		
			this.initialize = function() {
				this.$el = $('<div/>');
			};
			
			this.render = function() {
			
				this.$el.html(exhibitsTpl());
				
				return this;
			};
			
			this.loadExhibits = function() {
				exhibitsAdapter.getExhibits().done(function(exhibits) {
					$('.load-info').remove();
					$('.exhibits-list').html(exhibitsListItemTpl(exhibits));
				});
			};
			
		this.initialize();
		
		};
		
		return {
			loadExhibits: loadExhibits
		
		}

});