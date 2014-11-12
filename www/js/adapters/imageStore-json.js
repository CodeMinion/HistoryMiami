define(function (require) {

	"use strict";
	
	var $			= require('jquery'),
	
		url = "http://www.GameDevelopersGuild.com/j4h", 
		
		loadAllAlbums = function () {
		
			var results = $.ajax({url: url+"/image_store.php", dataType:"json"});
			return results;
		},
		
		loadImagesInAlbum = function(albumId) {
		
			var results = $.ajax({url: url+"/image_store.php?id="+albumId, dataType:"json"});
			
			return results;
		};
		
		return {
			loadAllAlbums: loadAllAlbums,
			loadImagesInAlbum: loadImagesInAlbum
		};
});