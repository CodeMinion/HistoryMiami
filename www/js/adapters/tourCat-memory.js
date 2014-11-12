define(function(require) {

	"user strict";
	
	var findById = function(id) {
			var deferred = $.Deferred(),
				tourCat = null,
				l = tourCategories.length;
			for(var i =0; i < l; i++) {
				if(tourCategories[i].id ===id) {
					tourCat = tourCategories[i];
					break;
				}
			}
			deferred.resolve(tourCat);
			return deferred.promise();
						
		},
	
		findByName = function(searchKey){
			var deferred = $.Deferred();
			var results = tourCategories.filter(function(element) {
				return element.name.toLowerCase().indexOf(searchKey.toLowerCase())> -1;
			});
			deferred.resolve(results);
			return deferred.promise();
		},
		
		findAll = function() {
		
			var deferred = $.Deferred();
			
			results = tourCategories.filter(function(element){
				return true;
			});
			
			deferred.resolve(results);
			
			return deferred.promise();
		
		},
		
		tourCategories = [
			
			{
				"id": 1,
				"name": "Boat Tours",
				"smallPic": "boat_small.JPG",
				"description": "Take a ride along the historic waterways of Miami with our expert guides. Our tours blend historic and contemporary history about the people and places of Miami and its environs."
			},
			
			{
				"id": 2,
				"name": "Coach Tours",
				"smallPic": "coach_small.JPG",
				"description": "Come aboard deluxe motor coaches for day trips to Little Havana, the Everglades, and many more. Our tours offer the chance to explore this spectacular region."
			},
			
			{
				"id": 3,
				"name": "Walking Tours",
				"smallPic": "walking_small.JPG",
				"description": "Get up close and personal to some of the most famous and little-known neighborhoods of the Magic City. Walking tours take a more in-depth look at these landmarks, neighborhoods, and community. The casual atmosphere of the tours allows for more questions and interaction with our guides."
			},
			
			{
				"id": 4,
				"name": "Eco-History Tours",
				"smallPic": "eco_small.JPG",
				"description": "Learn the area's history -- but with an environmental and ecological twist. See the wildlife, flora and fauna along the way -- like a red-bellied woodpecker on a sabal palm tree."
			},
			
			{
				"id": 5,
				"name": "Bike Tours",
				"smallPic": "bike_small.JPG",
				"description": "Be green and explore the city on two wheels! Our bike tours delivers more than miles. Guests can enjoy the beauty of some of our charming neighborhoods as our guides share little-known secrets along the way."
			},
			
			{
				"id": 6,
				"name": "Private Tours",
				"smallPic": "private_small.JPG",
				"description": "There are plenty of options if you want to take a Miami guided tour, but HistoryMiami's City Tours are different from the rest. Our tours provide an exceptional opportunity to sightsee and take in Miami's beauty, while listening to the history of these beautiful locations at the same time. You can cruise down the Miami River, stroll through a cigar factory in Little Havana, stand before Al Capone's home or explore a Dominican market while amongst friends, co-workers or acquaintances. Tours are customizable to meet your group's needs, including tours in Spanish. Private tours include a one-time free admission pass to HistoryMiami for each member of your group."
			},
			
			{
				"id": 7,
				"name": "Gallery Tours",
				"smallPic": "gallery_small.JPG",
				"description": "Enjoy a series of gallery tours offered every Saturday and Sunday afternoon, including activities for children of all ages."
			}
			
		
		];
		
		
		return {
			findById: findById,
			findByName: findByName,
			findAll: findAll
		
		};
		
});