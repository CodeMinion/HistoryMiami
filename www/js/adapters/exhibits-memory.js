define(function(require) {

	"use strict";
	
	var getExhibitSections = function(id) {
		var deferred = $.Deferred();
		
		var results = exhibits.filter(function(element){
			return element.id === id && element.sectionNo !== 0;
			});
			
		deferred.resolve(results);
		return deferred.promise();
	
	},
	
		getSectionFromExhibit = function(exhibitId, sectionId) {
			var deferred = $.Deferred(),
				section = null,
				l = exhibits.length;
			
			for(var i = 0; i < l; i++){
				if(exhibits[i].id === exhibitId && exhibits[i].sectionNo === sectionId){
					section = exhibits[i];
					break;
				}
			}
		
		deferred.resolve(section);
		return deferred.promise();
	
	},
	
		getExhibits = function() {
		var deferred = $.Deferred();
		
		var results = exhibits.filter(function(element){
			return element.sectionNo === 0;
		});
		
		deferred.resolve(results);
		return deferred.promise();
	},
	
		getExhibitById = function(id) {
		var deferred = $.Deferred(),
			exhibit = null,
			l = exhibits.length;
			
			for(var i =0; i < l; i++) {
				if(exhibits[i].id === id && exhibits[i].sectionNo === 0) {
					exhibit = exhibits[i];
					break;
				}
			
			}
		
		
		deferred.resolve(exhibit);
		return deferred.promise();
		
	},
		
	exhibits = [
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 0,
			"sectionNext": 1,
			"sectionPrev": 0,
			"sectionTotal": 16,
			"imageUrl": "img/tropical_large.JPG",
			"imageUrlSmall": "img/tropical_small.JPG",
			"sectionName": "",
			"audioUrl": "Audio Tour",
			"description": "Tropical Dreams explores South Florida history from prehistoric times to the present day. Topics explored include First Arrivals, International Rivalry, Southward Expansion, New People - New Technology, and Gateway of the Americas. The history of South Florida is the story of humans in a unique environment. It began more than 10,000 years ago with the arrival of prehistoric Indians and continues to the multi-cultural metropolis of today. Throughout the ages, the story has been characterized by arrivals--the immigration of people from many different places and cultures into the region. These varied peoples brought their dreams with them, and remade South Florida over and over again to fulfill those dreams. They also adapted to the region's subtropical environment, interacted with other cultures in South Florida, and, in the process, changed into something new and unusual. This is their story."
		},
	
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 1,
			"sectionTotal": 16,
			"sectionNext": 2,
			"sectionPrev": 0,
			"imageUrl": "img/Tropical/Tropical_1.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_1_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO01.MP3",
			"sectionName": "Introduction",
			"description": "Welcome to Tropical Dreams, the permanent exhibition of The Museum of HistoryMiami"
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 2,
			"sectionTotal": 16,
			"sectionNext": 3,
			"sectionPrev": 1,
			"imageUrl": "img/Tropical/Tropical_2.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_2_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO02.MP3",
			"sectionName": "First Arrivals - 1",
			"description": "Are you hungry? This den was where animals feasted on their prey. Archaeologists unearthed the remains of more than a hundred species of different animals here. This included animals you can still find here today, such as lizards and frogs; animals that are no longer native to South Florida, such as California condors, and extinct creatures, including paleo-horses and mammoths. Not the woolly kind, even then it was way too hot to carry around that kind of fur coat in South Florida. Don't worry if you are a vegetarian, there were also plenty of plants. "
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 3,
			"sectionTotal": 16,
			"sectionNext": 4,
			"sectionPrev": 2,
			"imageUrl": "img/Tropical/Tropical_3.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_3_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO03.MP3",
			"sectionName": "First Arrivals - 2",
			"description": "We have arrived at our next destination, the dugout canoe. This canoe was found in mud in Central Florida. As early as five thousand years ago, residents of South Florida traveled around the wetlands now known as the Everglades in these canoes. "
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 4,
			"sectionTotal": 16,
			"sectionNext": 5,
			"sectionPrev": 3,
			"imageUrl": "img/Tropical/Tropical_4.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_4_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO04.MP3",
			"sectionName": "First Arrivals - 3",
			"description": "This turtle shell was uncovered in the Miami Circle, near the mouth of the Miami River, which winds its way through downtown Miami. The Miami Circle is one of the most important archeological sites in South Florida. Most experts believe it was the foundation of a Tequesta building that was either a chief's hut or a religious structure. After the feature was uncovered in 1998, the local and international community fought to preserve this site."
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 5,
			"sectionTotal": 16,
			"sectionNext": 6,
			"sectionPrev": 4,
			"imageUrl": "img/Tropical/Tropical_5.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_5_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO05.MP3",
			"sectionName": "International Rivalry - 1",
			"description": "Christopher Columbus' discovery of the New World in 1492 started a race between European powers to establish colonies. He set sail from Spain to reach India, but encountered the New World and its inhabitants instead. Spain then competed with the Portuguese, Dutch, French, and British for the Americas. These colonies generated great wealth in the form of goods such as gold, silver, tobacco, and sugar."
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 6,
			"sectionTotal": 16,
			"sectionNext": 7,
			"sectionPrev": 5,
			"imageUrl": "img/Tropical/Tropical_6.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_6_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO06.MP3",
			"sectionName": "International Rivalry - 2",
			"description": "Once Europeans established a stable presence in the New World, they needed labor to work in mines, on plantations, and in homes. Enslaved Africans made up much of this labor force. Slaves were transported here in brutal conditions, often shackled to each other, a journey many did not survive. A number of enslaved Africans did not accept their new lives and ran away from their so-called owners. Escaped slaves formed their own communities, where they fought the whites who tried to reclaim them, as they did at Fort Mose, which was established in 1739 near St. Augustine. Fort Mose was the first free black community in what is now the United States."
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 7,
			"sectionTotal": 16,
			"sectionNext": 8,
			"sectionPrev": 6,
			"imageUrl": "img/Tropical/Tropical_7.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_7_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO07.MP3",
			"sectionName": "Southward Expansion - 1",
			"description": "Didn't you hear him? Get in the boat. It's perfectly okay. I'll wait while you get settled. In the 1820s, boats were the only way to get to Key West. There was no road and no railroad. "
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 8,
			"sectionNext": 9,
			"sectionPrev": 7,
			"sectionTotal": 16,
			"imageUrl": "img/Tropical/Tropical_8.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_8_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO08.MP3",
			"sectionName": "Southward Expansion - 2",
			"description": "It's hot out there so let's stay here in the shade. Most of the Seminoles came to Florida from Georgia and Alabama. Just as many American Indians were pushed westward, the US army also chased the Seminoles south. We are standing under a Chickee, the kind of home that was made by the Seminoles of Florida. When they came here, they started building these structures because they could be put up and taken down quickly"
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 9,
			"sectionTotal": 16,
			"sectionNext": 10,
			"sectionPrev": 8,
			"imageUrl": "img/Tropical/Tropical_9.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_9_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO09.MP3",
			"sectionName": "Southward Expansion - 3",
			"description": " Do you smell that? Oh, look up; it's a pie safe. Don't worry about the pie safe dropping on you, this isn't a cartoon. Pie safes were kept up in the air to keep the pies and other food cool and the insects out. "
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 10,
			"sectionTotal": 16,
			"sectionNext": 11,
			"sectionPrev": 9,
			"imageUrl": "img/Tropical/Tropical_10.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_10_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO10.MP3",
			"sectionName": "New People - New Technology - 1",
			"description": "There were only about 20 families living in this area before 1896. That year, Henry Flagler extended the Florida East Coast Railway to the Miami River. Flagler paid laborers, the majority of whom were Black, to build miles of tracks from West Palm Beach to downtown Miami. "
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 11,
			"sectionTotal": 16,
			"sectionNext": 12,
			"sectionPrev": 10,
			"imageUrl": "img/Tropical/Tropical_11.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_11_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO11.MP3",
			"sectionName": "New People - New Technology - 2",
			"description": "The state began to encourage private developers to drain the wetlands known as the Everglades as early as the 1870s. Proponents of drainage claimed that it would make more cheap land available for farmers and settlers from other parts of the country. The state didn't get directly involved until the election of Governor Napoleon Bonaparte Broward. Broward touted the Everglades muck as \"The best soil in the world.\" The first state-sponsored dredges began working in 1906. In order to remove the water from the slow-moving river that is the Everglades, canals were built to drain the water from Lake Okeechobee directly into the Atlantic Ocean and Gulf of Mexico. "
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 12,
			"sectionTotal": 16,
			"sectionNext": 13,
			"sectionPrev": 11,
			"imageUrl": "img/Tropical/Tropical_12.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_12_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO12.MP3",
			"sectionName": "New People - New Technology - 3",
			"description": "Oh, it's a party on Miami Beach. In the 1920s, this was known as America's Winter Playground. Many people vacationed in sunny South Florida, while others who wanted to avoid the freezing temperatures elsewhere chose to make it their home a few months out of the year"
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 13,
			"sectionTotal": 16,
			"sectionNext": 14,
			"sectionPrev": 12,
			"imageUrl": "img/Tropical/Tropical_13.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_13_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO13.MP3",
			"sectionName": "New People - New Technology - 4",
			"description": "Miami expanded quickly and city leaders installed a new mass-transit system to help people get around: trolleys, like this one. Starting in 1925, they ran on the city streets with cars, just like in San Francisco. You can get on the trolley if you like. We won't even charge you the nickel that riders in the 1930s had to pay. "
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 14,
			"sectionTotal": 16,
			"sectionNext": 15,
			"sectionPrev": 13,
			"imageUrl": "img/Tropical/Tropical_14.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_14_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO14.MP3",
			"sectionName": "New People - New Technology - 5",
			"description": "During World War II, South Florida was an important training ground for the U.S. military. Used for training, this bomb never had any explosives in it, so don't worry, it's not going to explode over your head. It was dropped over undeveloped land near the suburb of Hialeah and was unearthed when the land was bought and developed. "
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 15,
			"sectionTotal": 16,
			"sectionNext": 16,
			"sectionPrev": 14,
			"imageUrl": "img/Tropical/Tropical_15.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_15_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO15.MP3",
			"sectionName": "Gateway of the Americas - 1",
			"description": "There's no doubt that air conditioning changed South Florida. At the end of World War II, Miami was not the bustling city it is today; many people lived here only during the wintertime. Large numbers of people moved here after the war ended in 1945, and the spread of A/C in the '50s and '60s made it comfortable for those people to live here year-round. Between 1940 and 1960, the population of the county nearly doubled every ten years. In 1960, there were close to one million residents. "
		},
		
		{
			"id": 1,
			"date":"Permanent Exhibition",
			"name": "Tropical Dreams",
			"sectionNo": 16,
			"sectionTotal": 16,
			"sectionNext": 0,
			"sectionPrev": 15,
			"imageUrl": "img/Tropical/Tropical_16.JPG",
			"imageUrlSmall": "img/Tropical/Tropical_16_small.JPG",
			"audioUrl": "MIAMIHISTORYMONO16.MP3",
			"sectionName": "Gateway of the Americas - 2",
			"description": "Modern Miami is a gateway of the Americas. It would not be what it is today without its incredible diversity, including people from all over the world. When Fidel Castro took power in Cuba in 1959, large numbers of Cubans came to Miami. Over the years, many people, especially from Latin American and Caribbean countries, took advantage of the foundation laid by the Cuban exile community. The most recent wave of immigrants came to South Florida for many of the same reasons as immigrant groups who came to the United States before them. "
		},
		
		{
			"id": 2,
			"date":"October 10, 2014 - January 18, 2015",
			"name": "Ladies and Gentlemen...The Beatles!",
			"sectionNo": 0,
			"sectionNext": 1,
			"sectionPrev": -1,
			"sectionTotal": 8,
			"imageUrl": "img/HMBeatles/_DSC1373.jpg",
			"imageUrlSmall": "img/HMBeatles/_DSC1373_small.jpg",
			"sectionName": "",
			"audioUrl": "",
			"description": "Fifty years ago The Beatles came to America. On Friday, February 7, 1964, John Lennon, Paul McCartney, George Harrison, and Ringo Starr arrived from the U.K. and stepped onto American soil for the first time as a band. After appearances in New York City and Washington, D.C., on Sunday, February 16, 1964, The Beatles flew to Miami Beach where they made their second television appearance on The Ed Sullivan Show, which this time was broadcast live from the Napoleon Ballroom of the Deauville Beach Resort in Miami Beach. Ladies and Gentlemen... The Beatles!, a traveling exhibition curated by The GRAMMY Museum and Fab Four Exhibits examines the musical and cultural impact of The Beatles' arrival on the U.S. and American culture. The exhibition covers the period from early 1964 through mid-1966-the years Beatlemania ran rampant in America. During this time, the band affected nearly every aspect of pop culture, including fashion, art, advertising, media, and, of course, music. On display are more than 400 items from private collectors and The GRAMMY Museum including memorabilia, records, rare photographs, tour artifacts, video footage, as well as correspondence, and instruments. Also included are interactive displays, and an oral history booth in which visitors can leave their own impressions of The Beatles."
		}
		
		/*
		{
			"id": 2,
			"date":"October 10, 2014 - January 18, 2015",
			"name": "Ladies and Gentlemen...The Beatles!",
			"sectionNo": 1,
			"sectionNext": 2,
			"sectionPrev": 1,
			"sectionTotal": 8,
			"imageUrl": "HMBeatles/_DSC1378.jpg",
			"imageUrlSmall": "HMBeatles/_DSC1378_small.jpg",
			"sectionName": "Ladies and Gentlemen...The Beatles!",
			"audioUrl": "",
			"description": "Ladies and Gentlemen... The Beatles!, a traveling exhibition curated by The GRAMMY Museum and Fab Four Exhibits examines the musical and cultural impact of The Beatles' arrival on the U.S. and American culture. The exhibition covers the period from early 1964 through mid-1966-the years Beatlemania ran rampant in America. During this time, the band affected nearly every aspect of pop culture, including fashion, art, advertising, media, and, of course, music."
		},
		
		{
			"id": 2,
			"date":"October 10, 2014 - January 18, 2015",
			"name": "Ladies and Gentlemen...The Beatles!",
			"sectionNo": 2,
			"sectionNext": 3,
			"sectionPrev": 1,
			"sectionTotal": 8,
			"imageUrl": "HMBeatles/_DSC1379.jpg",
			"imageUrlSmall": "HMBeatles/_DSC1379_small.jpg",
			"sectionName": "Meet...The Beatles!",
			"audioUrl": "",
			"description": "On display are more than 400 items from private collectors and The GRAMMY Museum including memorabilia, records, rare photographs, tour artifacts, video footage, as well as correspondence, and instruments. Also included are interactive displays, and an oral history booth in which visitors can leave their own impressions of The Beatles."
		},
		
		{
			"id": 2,
			"date":"October 10, 2014 - January 18, 2015",
			"name": "Ladies and Gentlemen...The Beatles!",
			"sectionNo": 3,
			"sectionNext": 4,
			"sectionPrev": 2,
			"sectionTotal": 8,
			"imageUrl": "HMBeatles/_DSC1384.jpg",
			"imageUrlSmall": "HMBeatles/_DSC1384_small.jpg",
			"sectionName": "The stage",
			"audioUrl": "",
			"description": "Fifty years ago The Beatles came to America. On Friday, February 7, 1964, John Lennon, Paul McCartney, George Harrison, and Ringo Starr arrived from the U.K. and stepped onto American soil for the first time as a band. After appearances in New York City and Washington, D.C., on Sunday, February 16, 1964, The Beatles flew to Miami Beach where they made their second television appearance on The Ed Sullivan Show, which this time was broadcast live from the Napoleon Ballroom of the Deauville Beach Resort in Miami Beach."
		},
		
		{
			"id": 2,
			"date":"October 10, 2014 - January 18, 2015",
			"name": "Ladies and Gentlemen...The Beatles!",
			"sectionNo": 4,
			"sectionNext": 5,
			"sectionPrev": 3,
			"sectionTotal": 8,
			"imageUrl": "HMBeatles/_DSC1387.jpg",
			"imageUrlSmall": "HMBeatles/_DSC1387_small.jpg",
			"sectionName": "The Beatles Bad Instruments!",
			"audioUrl": "",
			"description": "Ladies and Gentlemen... The Beatles!, a traveling exhibition curated by The GRAMMY Museum and Fab Four Exhibits examines the musical and cultural impact of The Beatles' arrival on the U.S. and American culture. The exhibition covers the period from early 1964 through mid-1966-the years Beatlemania ran rampant in America. During this time, the band affected nearly every aspect of pop culture, including fashion, art, advertising, media, and, of course, music."
		},
		
		{
			"id": 2,
			"date":"October 10, 2014 - January 18, 2015",
			"name": "Ladies and Gentlemen...The Beatles!",
			"sectionNo": 5,
			"sectionNext": 6,
			"sectionPrev": 4,
			"sectionTotal": 8,
			"imageUrl": "HMBeatles/_DSC1388.jpg",
			"imageUrlSmall": "HMBeatles/_DSC1388_small.jpg",
			"sectionName": "Outfits and Records",
			"audioUrl": "",
			"description": "On display are more than 400 items from private collectors and The GRAMMY Museum including memorabilia, records, rare photographs, tour artifacts, video footage, as well as correspondence, and instruments. Also included are interactive displays, and an oral history booth in which visitors can leave their own impressions of The Beatles."
		},
		
		{
			"id": 2,
			"date":"October 10, 2014 - January 18, 2015",
			"name": "Ladies and Gentlemen...The Beatles!",
			"sectionNo": 6,
			"sectionNext": 7,
			"sectionPrev": 5,
			"sectionTotal": 8,
			"imageUrl": "HMBeatles/_DSC1396.jpg",
			"imageUrlSmall": "HMBeatles/_DSC1396_small.jpg",
			"sectionName": "Rock and Roll Before...The Beatles!",
			"audioUrl": "",
			"description": "Fifty years ago The Beatles came to America. On Friday, February 7, 1964, John Lennon, Paul McCartney, George Harrison, and Ringo Starr arrived from the U.K. and stepped onto American soil for the first time as a band. After appearances in New York City and Washington, D.C., on Sunday, February 16, 1964, The Beatles flew to Miami Beach where they made their second television appearance on The Ed Sullivan Show, which this time was broadcast live from the Napoleon Ballroom of the Deauville Beach Resort in Miami Beach."
		},
		
		{
			"id": 2,
			"date":"October 10, 2014 - January 18, 2015",
			"name": "Ladies and Gentlemen...The Beatles!",
			"sectionNo": 7,
			"sectionNext": 8,
			"sectionPrev": 6,
			"sectionTotal": 8,
			"imageUrl": "HMBeatles/_DSC1398.jpg",
			"imageUrlSmall": "HMBeatles/_DSC1398_small.jpg",
			"sectionName": "Bob Bonis Gallery",
			"audioUrl": "",
			"description": "Ladies and Gentlemen... The Beatles!, a traveling exhibition curated by The GRAMMY Museum and Fab Four Exhibits examines the musical and cultural impact of The Beatles' arrival on the U.S. and American culture. The exhibition covers the period from early 1964 through mid-1966-the years Beatlemania ran rampant in America. During this time, the band affected nearly every aspect of pop culture, including fashion, art, advertising, media, and, of course, music."
		},
		
			
		{
			"id": 2,
			"date":"October 10, 2014 - January 18, 2015",
			"name": "Ladies and Gentlemen...The Beatles!",
			"sectionNo": 8,
			"sectionNext": 0,
			"sectionPrev": 7,
			"sectionTotal": 8,
			"imageUrl": "HMBeatles/_DSC1409.jpg",
			"imageUrlSmall": "HMBeatles/_DSC1409_small.jpg",
			"sectionName": "The Beatles!",
			"audioUrl": "",
			"description": "Fifty years ago The Beatles came to America. On Friday, February 7, 1964, John Lennon, Paul McCartney, George Harrison, and Ringo Starr arrived from the U.K. and stepped onto American soil for the first time as a band. After appearances in New York City and Washington, D.C., on Sunday, February 16, 1964, The Beatles flew to Miami Beach where they made their second television appearance on The Ed Sullivan Show, which this time was broadcast live from the Napoleon Ballroom of the Deauville Beach Resort in Miami Beach."
		},
		*/
		
	
	];
	
	return {
		getExhibitSections: getExhibitSections,
		getExhibits: getExhibits,
		getExhibitById: getExhibitById,
		getSectionFromExhibit: getSectionFromExhibit
	
	};
	
});