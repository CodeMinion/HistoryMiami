define(function (require) {

	"use strict";
	
	var findById = function(id) {
		var deferred = $.Deferred(),
			tour = null,
			l = tours.length;
			
		for (var i = 0; i < l; i ++)
		{
			if(tours[i].id === id){
				tour = tours[i];
				break;
			}
		}
		deferred.resolve(tour);
		return deferred.promise();
	},
	
		findByName = function(searchKey) {
		var deferred = $.Deferred();
		var results = tours.filter(function(element){
			return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
			});
			
		deferred.resolve(results);
		return deferred.promise();
	},
	
		findByCategory = function(category){
		var deferred = $.Deferred();
		var results = tours.filter(function(element){
			return element.category.toLowerCase() === category.toLowerCase();
			}); 
			
		deferred.resolve(results);
		return deferred.promise();
	},
	
		findByCategoryId = function(categoryId){
		var deferred = $.Deferred();
		var results = tours.filter(function(element){
			return element.categoryId === categoryId;
			});
			
		deferred.resolve(results);
		return deferred.promise();
	},
	
	tours = [
		{
			"id": 1,
			"name": "Stiltsville, Key Biscayne, & Cape FL Lighthouse Boat",
			"category": "Boat Tours",
			"categoryId": 1,
			"priceMember": "44",
			"priceNonMember": "55",
			"priceChild": "25",
			"date": "December 28, 9:00am - 11:30am",
			"address": "Bayside Marketplace, 401 Biscayne Blvd, Miami, FL 33132",
			"description" : "Delight in this relaxing boat ride to one of Miami's most hidden gems! Museum historian Dr. Paul George takes you to Stiltsville where you will learn how this once vivacious community was transformed into the seven houses that remain amidst the turquoise waters of Biscayne Bay. Known in the 1940's, 50's and 60's as a playground for wealthy and well-connected Miamians, Stiltsville was once home to the now infamous Crawfish Eddies and Bikini Club. Cruise past the Cape Florida Lighthouse, while listening to the history of Stiltsville, Key Biscayne and the city of Miami. This tour is a must see for any resident or visitor!",
			"registrationLink": "https://historymiami.wufoo.com/forms/december-city-tours/",
			"registrationCall": "305-375-5792",
			"registrationEmail": "citytours@historymiami.org"
		},
		
		{
			"id": 2,
			"name": "Rock & Roll Bus Tour",
			"category": "Coach Tours",
			"categoryId": 2,
			"priceMember": "54",
			"priceNonMember": "64",
			"priceChild": "N/A",
			"date": "November 22, 10:00am - 1:00pm",
			"address": "HistoryMiami, 101 West Flagler Street, Miami, FL",
			"description" : "Explore Miami's rich music legacy on a City Tour with HistoryMiami historian Dr. Paul George. Hop on a bus tour and relive some of Miami's legendary moments. Sip on a signature cocktail as you hear behind-the-scenes stories of the arrival of The Beatles, Elvis Presley and others to Miami. Along the way, you will see some of Miami's iconic music venues such as the beautiful Olympia Theater, Fontainebleau, Deauville and the Alfred I. DuPont Building, home to Miami's first radio station, WQAM. \"Twist and Shout\" as you sing along to lyrics of the hits from the 50s and the 60s. Tour price includes admission to the exhibition Ladies & Gentlemen...The Beatles!, curated by The Grammy Museum and Fab Four exhibits. ",
			"registrationLink": "https://historymiami.wufoo.com/forms/november-city-tours/",
			"registrationCall": "305-375-5792",
			"registrationEmail": "citytours@historymiami.org"
		},
		
		{
			"id": 3,
			"name": "Miami City Cemetery Tours",
			"category": "Walking Tours",
			"categoryId": 3,
			"priceMember": "20",
			"priceNonMember": "30",
			"priceChild": "N/A",
			"date": "October 30, 6:00pm - 9:30pm",
			"address": "1800 NE 2 Avenue, Miami, FL 33132",
			"description" : "The ghost of Julia Tuttle, the \"Mother of Miami\" might be encountered on this tour, as you join HistoryMiami historian Dr. Paul George and lurk through Miami's oldest cemetery. Visit the final resting places of Miami's notables, famous and infamous. Bring a flashlight. Halloween costume optional. Limited parking inside the cemetery. Advanced reservations and payment recommended.",
			"registrationLink": "https://historymiami.wufoo.com/forms/october-tours/",
			"registrationCall": "305-375-5792",
			"registrationEmail": "citytours@historymiami.org"
		},
		
		{
			"id": 4,
			"name": "Wynwood Walk: A History of Street Art",
			"category": "Walking Tours",
			"categoryId": 3,
			"priceMember": "20",
			"priceNonMember": "30",
			"priceChild": "N/A",
			"date": "November 01, 11:00am - 1:00pm",
			"address": "Panther Coffee, 2390 NW 2 Avenue, Miami, FL 33127",
			"description" : "Explore one of Miami's trendiest and most dynamic neighborhoods, the Wynwood Art District. Learn the story of how this textile warehouse and immigrant neighborhood, formerly known as \"Little San Juan,\" is quickly becoming the world's largest outdoor art gallery. Stroll past huge murals and various street art displays as you listen to the history of graffiti from the advent of written language to today. Hear stories of the artists, residents and developers who made Wynwood home to over seventy galleries, five museums, and seven art complexes. Walk-ups welcome.",
			"registrationLink": "https://historymiami.wufoo.com/forms/november-city-tours/",
			"registrationCall": "305-375-5792",
			"registrationEmail": "citytours@historymiami.org"
		},
		
		{
			"id": 5,
			"name": "Downtown Miami Archaeology & Architecture Tour",
			"category": "Walking Tours",
			"categoryId": 3,
			"priceMember": "20",
			"priceNonMember": "30",
			"priceChild": "N/A",
			"date": "November 30, 1:00pm - 3:00pm",
			"address": "HistoryMiami, 101 West Flagler Street, Miami, FL",
			"description" : "Walk along the confluence of the Miami River and Biscayne Bay and learn about Miami's history, from the Tequesta people to early pioneers and modern times. View the art and architecture along the walk to the Miami Circle archaeological site. Advanced reservations are encouraged. Walk-ups welcomed! Tour ticket includes museum admission.",
			"registrationLink": "https://historymiami.wufoo.com/forms/november-city-tours/",
			"registrationCall": "305-375-5792",
			"registrationEmail": "citytours@historymiami.org"
		},
		
		{
			"id": 6,
			"name": "Downtown Miami Archaeology & Architecture Tour",
			"category": "Walking Tours",
			"categoryId": 3,
			"priceMember": "20",
			"priceNonMember": "30",
			"priceChild": "N/A",
			"date": "December 20, 11:00am - 1:00pm",
			"address": "HistoryMiami, 101 West Flagler Street, Miami, FL",
			"description" : "Walk along the confluence of the Miami River and Biscayne Bay and learn about Miami's history, from the Tequesta people to early pioneers and modern times. View the art and architecture along the walk to the Miami Circle archaeological site. Advanced reservations are encouraged. Walk-ups welcomed! Tour ticket includes museum admission.",
			"registrationLink": "https://historymiami.wufoo.com/forms/november-city-tours/",
			"registrationCall": "305-375-5792",
			"registrationEmail": "citytours@historymiami.org"
		},
		
		{
			"id": 7,
			"name": "Little Havana Arts & Culture Walk",
			"category": "Walking Tours",
			"categoryId": 3,
			"priceMember": "20",
			"priceNonMember": "30",
			"priceChild": "N/A",
			"date": "December 27, 10:00am - 12:00pm",
			"address": "Los Pinarenos Fruteria, 1334 SW 8 Street, Miami, FL 33135",
			"description" : "See Little Havana like a native! Join our HistoryMiami guide on a fascinating tour of the world’s largest and best known Cuban neighborhood outside of Cuba. Sample cafe cubano as you mingle with the locals, visit a botanica and a cigar shop. Along the way, view mural art, visit galleries and the Walkway of the Stars, paying homage to Latin American artist and musicians. Tour includes a stop at the Cuba Ocho Art and Research Center, where visitors will admire rare Cuban art from early 19th and 20th century. Tour ticket includes admission to the museum.",
			"registrationLink": "https://historymiami.wufoo.com/forms/november-city-tours/",
			"registrationCall": "305-375-5792",
			"registrationEmail": "citytours@historymiami.org"
		},
	
	/*
		{
			"id": 8,
			"name": "Biscayne Bay Eco-History Boat Tour",
			"category": "Eco-History Tours",
			"categoryId": 3,
			"priceMember": "20",
			"priceNonMember": "30",
			"priceChild": "N/A",
			"date": "September 14, 12:00pm - 2:30pm",
			"address": "Bayside Marketplace, 401 Biscayne Blvd, Miami, FL 33132",
			"description" : "Have you ever wanted to learn more about Miami’s early history, its residents and the Tequesta Indians? Join HistoryMiami resident historian, Dr. Paul George and a Miami-Dade Parks guide on an excursion through Biscayne Bay. Cruise past lush islands, Stiltsville and the Cape Florida Lighthouse, where you may be able to catch a glimpse of dolphins, manatees and other sea life. Learn about the beautiful ecosystems of our area, current conservation efforts and our place in the natural landscape of South Florida. Boat departs from Miamarina at Bayside Marketplace. Limited seating available, advanced reservations and payment required.",
			"registrationLink": "https://historymiami.wufoo.com/forms/november-city-tours/",
			"registrationCall": "305-375-5792",
			"registrationEmail": "citytours@historymiami.org"
		}, */
		
		{
			"id": 9,
			"name": "Little Havana Bike Tour",
			"category": "Bike Tours",
			"categoryId": 3,
			"priceMember": "20",
			"priceNonMember": "30",
			"priceChild": "N/A",
			"date": "November 09, 10:00am - 12:00pm",
			"address": "Los Pinarenos Fruteria, 1334 SW 8 Street, Miami, FL",
			"description" : "Join HistoryMiami historian Dr. Paul George on this picturesque tour through one of Miami’s most colorful neighborhoods. Ride past a Tequesta settlement on the Miami River, see some of the oldest homes in Greater Miami dating back over one hundred years, and visit the site of the old Ku Klux Klan building. You will also marvel at the old-fashioned cigar hand rollers and mingle with the locals playing dominoes at Domino Park",
			"registrationLink": "https://historymiami.wufoo.com/forms/november-city-tours/",
			"registrationCall": "305-375-5792",
			"registrationEmail": "citytours@historymiami.org"
		},
		
		{
			"id": 10,
			"name": "Little Havana Bike Tour",
			"category": "Bike Tours",
			"categoryId": 3,
			"priceMember": "20",
			"priceNonMember": "30",
			"priceChild": "N/A",
			"date": "December 13, 9:00am - 11:00am",
			"address": "No Boundaries Sport, 220 Aragon Ave., Coral Gables, FL",
			"description" : "Hop on two wheels for a scenic ride along the back roads and lush tree-lined streets of Coral Gables with HistoryMiami historian Dr. Paul George. Explore \"The City Beautiful\" built by George Merrick from oolitic limestone in the early 1920s. Learn about the Mediterranean-style architecture and meticulously preserved historic landmarks. Visit the French Normandy Village, Merrick House, Venetian Pool and the celebrated fountains and entrances. Advanced reservations and payment recommended.",
			"registrationLink": "https://historymiami.wufoo.com/forms/december-city-tours/",
			"registrationCall": "305-375-5792",
			"registrationEmail": "citytours@historymiami.org"
		},
	];
	
	return {
		findById: findById,
		findByName: findByName,
		findByCategory: findByCategory,
		findByCategoryId: findByCategoryId
	};
});