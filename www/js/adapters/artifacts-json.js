define(function (require) {

	"use strict";
	
	var $	= require('jquery'),
	
		url = "http://www.GameDevelopersGuild.com/j4h",
		
		getAllArtifacts = function() {
		
			return $.ajax({url: url +"/artifacts.php", dataType:"json"});
		};
		
		
		return {
			getAllArtifacts: getAllArtifacts
		};
		
		
});