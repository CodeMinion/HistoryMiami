define(function(require){

	"use strict";
	
	var $					= require('jquery'),
		Handlebars			= require('handlebars'),
		contactHtml			= require('text!tpl/Contact.html'),
		
		contactTpl			= Handlebars.compile(contactHtml);
		
		
	return function() {
	
		this.initialize = function() {
		
			this.$el = $('<div/>');
		};
		
		this.render = function() {
			
			this.$el.html(contactTpl());
			
			this.$el.find('#callBtn').click( function(){
				window.location.href="tel:+1-305-375-1492";
				alert('Calling Museum');
			
			});
			
			
			return this;
		
		};
		
		this.initialize();
	
	};


});