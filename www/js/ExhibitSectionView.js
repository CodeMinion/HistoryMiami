define(function(require) {

	"use strict";
	
	var $						= require('jquery'),
		
		//Media					= require('Media'),
		//MediaError				= require('MediaError'),
		Handlebars				= require('handlebars'),
		sectionHtml				= require('text!tpl/ExhibitSection.html'),
		sectionAudioHtml		= require('text!tpl/ExhibitSectionAudio.html'),
		
		media = null,
		exhibitsAdapter			= require('adapters/exhibits'),
		
		sectionAudioTpl			= Handlebars.compile(sectionAudioHtml),
		sectionTpl				= Handlebars.compile(sectionHtml);
		
		return function(exhibitSection) {
		
			this.initialize = function() {
			
				this.$el = $('<div/>');
			};
			
			this.render = function() {
			
				if(exhibitSection.audioUrl.length <= 0)
				{
					this.$el.html(sectionTpl(exhibitSection));
				}
				else
				{
					var mp3URL = getMediaURL("audio/"+exhibitSection.audioUrl);
					
					
					media = new Media(mp3URL, null, mediaError);
					media.play();
					
					
					this.$el.html(sectionAudioTpl(exhibitSection));
					this.$el.find(".section_back").click(naviageAwayFromPage);
					this.$el.find(".section_forward").click(naviageAwayFromPage);
					
					document.addEventListener("backbutton", naviageAwayFromPage, false); 
					
				}
				return this;
			};
			
			
			function naviageAwayFromPage(){
				stopMedia();
				
				document.removeEventListener("backbutton", naviageAwayFromPage, false); 
				
			}
			/*
			function bindStopper() {
				//alert('Binding Media');
				
				$(window).bind('hashchange', this.stopMedia());
			}
			*/
			/*
			this.stopMedia = function() {
				alert('Stoping Media');
				
				if(media){
				alert('Stoping!!! Media');
					
					media.stop();
					media.release();
				}
			
			};
			*/
			
			function stopMedia() {
				//alert('Trying to Stop Media');
				
				if(media){
				//alert('Stoping Media');
					
					media.stop();
					media.release();
				}
			
			};
			
			this.backButtonPressed = function(){
			
				stopMedia();
			
			};
			
			function getMediaURL(s) {
				if(device.platform.toLowerCase() === "android") {
					return "/android_asset/www/" + s;
				}
			
			return s;
			
			}
			
			function mediaError(e) {
				alert('Media Error');
				alert(JSON.stringify(e));
				}
			
			
		this.initialize();
		
		};
		
		return {
			stopMedia: stopMedia,
			
		}
});