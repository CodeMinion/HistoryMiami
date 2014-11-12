define(function(require){

	"use strict";
	
	var $				= require('jquery'),
		Handlebars 		= require('handlebars'),
		
		albumHtml		= require('text!tpl/ISAlbum.html'),
		albumItemHtml	= require('text!tpl/ISAlbumImageItem.html'),
		
		imageStoreAdapter		= require('adapters/imageStore'),
		
		albumItemTpl	= Handlebars.compile(albumItemHtml),
		albumTpl		= Handlebars.compile(albumHtml);
		
		
		return function(albumId) {
		
		this.initialize = function() {
				
				this.$el = $('<div/>');
				/*
				this.$el.on('click', '.small-pic', function() {
					$('#myModal', this.$el).show();
					//$('.large-pic', this.$el).show();
					//$('.modal-dialog', this.$el).show();
					//alert("click");
					
				});
				
				this.$el.on('click', '.large-pic', function() {
					$('large-pic', this.$el).hide();
					
				});
			*/
			};
			
			this.render = function() {
			
				this.$el.html(albumTpl());
				return this;
			};
			
			this.loadPictures = function() {
				imageStoreAdapter.loadImagesInAlbum(albumId).done(function(imagesInAlbum) {
					$('.load-info').remove();
					
					
					var l = imagesInAlbum.length;
					for(var i=0; i < l; i++){
						
						var image = imagesInAlbum[i];
						
						image.albumId= albumId;
						
						if(image.text){
							image.text = image.text.replace("Caption:", "");
						}
						var tpl = albumItemTpl(image);
						$('.albums-image-list').append(tpl);
						
						
						
						/*
						$('.action_'+image.id).click(function() {
						
						$('#myModal_'+image.id).modal('show');
						//$('.large-pic', this.$el).show();
						//$('.modal-dialog', this.$el).show();
						alert("click"+image.id);
						});
						*/
					}
					
					//$('.albums-image-list').html(albumItemTpl(imagesInAlbum));
				});
			
			};
			
			this.initialize();
		
		};
		
		return {
			loadPictures: loadPictures
		}
});