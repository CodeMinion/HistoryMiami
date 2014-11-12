define(function(require) {

	"use strict";
	
	var $					= require('jquery'),
		Handlebars			= require('handlebars'),
		artifactsHtml		= require('text!tpl/Artifacts.html'),
		artifactItemHtml	= require('text!tpl/ArtifactsListItem.html'),
		
		artifactsAdapter	= require('adapters/artifacts'),
		
		artifactItemTpl		= Handlebars.compile(artifactItemHtml),
		
		artifactsTpl		= Handlebars.compile(artifactsHtml);
		
		return function() {
		
			this.initialize = function() {
				this.$el = $('<div/>');
			};
			
			this.render	= function() {
			
				this.$el.html(artifactsTpl());
				
				return this;
			};
			
			this.loadArtifacts = function() {
				// get artict information.
				artifactsAdapter.getAllArtifacts().done(function(artifacts) {
					$('.artifact-load-info').remove();
					$('.artifacts-list').html(artifactItemTpl(artifacts));
				
				});
				// $('.artifacts-list.).html()
			};
			
			this.initialize();
		
		};
		
		return {
			loadArtifacts: loadArtifacts
		};

});