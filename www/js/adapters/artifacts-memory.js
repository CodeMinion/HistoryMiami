define(function (require) {

	"use strict";
	
	var $	= require('jquery'),
	
		
		getAllArtifacts = function() {
			var deferred = $.Deferred();
			
			var results = artifacts.filter(function() {return true});
			
			deferred.resolve(results);
			
			return deferred.promise();
		},
		
		
		artifacts = [
			{
				"id": 1,
				"name": "Archelogy Collection",
				"text": "HistoryMiami is the official repository for all archaeological materials collected by Miami-Dade County and also houses artifacts collected from archaeological sites in Broward, Collier, Miami-Dade and Monroe Counties.",
				"img": "http://www.historymiami.org/files/resources/bowl2-150w.jpg"
				
			},

			{
				"id": 2,
				"name": "Seminole Collection",
				"text": "The Seminole Indian artifacts include patchwork, dolls, beads, silverwork, basketry and wooden dugout canoes.",
				"img": "http://www.historymiami.org/files/resources/seminole-doll-basket-150w.jpg"
				
			},
			
			{
				"id": 3,
				"name": "Techonology of Home Furnishing Collection",
				"text": "This collection includes a cross-section of early to mid 20th century objects that reflect typical furnishings and appliances in South Florida homes, as well as tools and equipment used in businesses and trades in Miami.",
				"img": "http://www.historymiami.org/files/resources/deco-camera-150w.jpg"
				
			},
			
			{
				"id": 4,
				"name": "Aviation Collection",
				"text": "HistoryMiami houses one of the largest collections of Pan American Airways material in the U.S. The collection includes airplane models, uniforms, dinnerware, uniform insignia and airplane radio equipment.",
				"img": "http://www.historymiami.org/files/resources/airplane-model-150w.jpg"
				
			},
			
			{
				"id": 5,
				"name": "Maritime Collection",
				"text": "This unique collection includes motors and motorboats used for outboard motor racing in the region, dugout canoes, an early 20th century Bahamian sloop and rafts and boats used by Haitian and Cuban immigrants to travel to South Florida.",
				"img": "http://www.historymiami.org/files/resources/capone-compass-150w.jpg"
				
			},
			
			{
				"id": 6,
				"name": "Community Life Collection",
				"text": "HistoryMiami has been documenting the traditional culture of the region for over 25 years. This collection contains, among other things, large holdings in musical instruments, ritual items and accompanying documentation related to the Afro-Cuban Orisha religion (Santería) and the Haitian religion of Vodou, as practiced in Miami.",
				"img": "http://www.historymiami.org/files/resources/shekeres-150w.jpg"
				
			},
			
		
		];
		
		return {
			getAllArtifacts: getAllArtifacts
		};
		
		
});