define(function(require) {

	"use strict";
	
	var $					= require('jquery'),
		Handlebars			= require('handlebars'),
		exhibitHtml			= require('text!tpl/Exhibit.html'),
		sectionHtml 	= require('text!tpl/ExhibitSectionListItem.html'),
		
		exhibitsAdapter = require('adapters/exhibits'),
		
		sectionTpl		= Handlebars.compile(sectionHtml),
		exhibitTpl		= Handlebars.compile(exhibitHtml);
		
		
		return function(exhibit) {
		
			this.initialize = function() {
				this.$el = $('<div/>');
				
			};
			
			this.render = function() {
				
				this.$el.html(exhibitTpl(exhibit));
				
				return this;
			};
			
			this.loadExhibitSections = function() {
				
				exhibitsAdapter.getExhibitSections(exhibit.id).done(function(sections) {
					$('.load-info').remove();
					
					/*
					for(var i = 0; i < sections.length; i++)
					{
						var htmlItem = sectionTpl(sections[i])
						$('.sections-list').append(htmlItem);
					}*/
					$('.sections-list').html(sectionTpl(sections));
			
				});
			};
		
		this.initialize();
		
		};
		return {
			loadExhibitSections: loadExhibitSections
		}

});