define(function(require) {

	"use strict";
	
	var $					= require('jquery'),
		Handlebars			= require('handlebars'),
		imageStoreHtml		= require('text!tpl/ImageStore.html'),
		imageStoreItemHtml	= require('text!tpl/ISAlbumsListItem.html'),
		
		imageStoreAdapter 	= require('adapters/imageStore'),

		imageStoreItemTpl	= Handlebars.compile(imageStoreItemHtml),
		imageStoreTpl		= Handlebars.compile(imageStoreHtml);
		
		
		return function() {
		
			this.initialize = function() {
			
				this.$el = $('<div/>');
			};
			
			this.render = function() {
			
				this.$el.html(imageStoreTpl());
				
				this.loadAlbums();
				
				return this;
			
			};
			
			this.loadAlbums = function() {
				imageStoreAdapter.loadAllAlbums().done(function(albums){
					$('.load-info').remove();
					$('.albums-list').html(imageStoreItemTpl(albums));
				
				});
			
			}
			
			this.initialize();
		
		};
		
		return {
			loadAlbums: loadAlbums
		
		}

});