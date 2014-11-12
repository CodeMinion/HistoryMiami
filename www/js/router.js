define(function(require) {


	var $						= require('jquery'),
		HomeView				= require('app/HomeView'),
		ContactView				= require('app/ContactView'),
		ToursCatView			= require('app/ToursCatView'),
		ToursView				= require('app/ToursView'),
		TourView				= require('app/TourView'),
		ExhibitsView			= require('app/ExhibitsView'),
		ExhibitView				= require('app/ExhibitView'),
		ExhibitSectionView		= require('app/ExhibitSectionView'),
		ArtifactsView			= require('app/ArtifactsView'),
		ImageStoreView			= require('app/ImageStoreView'),
		ISAlbumView				= require('app/ISAlbumView'),
		
		PageSlider				= require('app/utils/PageSlider'),
		
		exhibitsAdapter			= require('adapters/exhibits'),
		toursCategoryAdapter	= require('adapters/toursCat'),
		tourAdapter				= require('adapters/tours'),
		
		toursCatDetailsUrl = /^#tours/,
		toursSpecCatDetailsUrl = /^#tours\/(\d{1,})/,
		tourDetailsUrl = /^#tour\/(\d{1,})/,
		
		exhibitsUrl	= /^#exhibits/,
		exhibitUrl	= /^#exhibit\/(\d{1,})/,
		
		artifactsUrl = /^#artifacts/
		
		exhibitSectionUrl = /^#exhibitSection\/(\d{1,})_(\d{1,})/,
		
		contactDetailsUrl = /^#contact/,
		
		imageStoreUrl		=	/^#imageStore/,
		imageStoreAlbumUrl	=	/^#albums\/(\d{1,})/,	
		
		homeView = new HomeView().render(),
		
		exhibitSectionView = null,
		
		slider = new PageSlider($("body")),
				
		
		
		
		route = function (){
		
			$("body").empty();
			
			var hash = window.location.hash,
				view,
				math;
				
			if(!hash)
			{
				//$("body").html(homeView.$el);
				slider.slidePage(homeView.$el);
				return;
			}
			
			match = hash.match(imageStoreAlbumUrl);
			
			if(match)
			{
				//albumImages = imageStoreAdapter.loadImagesInAlbum(Number(match[1]));
				view = new ISAlbumView(Number(match[1])).render();
				slider.slidePage(view.$el);
				view.loadPictures();
				
				return;
			}
			// Display the image store 
			match = hash.match(imageStoreUrl);
			if(match)
			{
				view = new ImageStoreView().render();
				slider.slidePage(view.$el);
				view.loadAlbums();
				return;
			}
			
			// Display a section of a given Exhibit
			match = hash.match(artifactsUrl);
			if(match)
			{
			
				view = new ArtifactsView().render();
				slider.slidePage(view.$el);
				view.loadArtifacts();
				
				return;
				
			}
			
			// Display a section of a given Exhibit
			match = hash.match(exhibitSectionUrl);
			if(match)
			{
				// If we reached the end then change back to the exbhit page
				if(match[2] <1)
				{
				/*
					if(exhibitSectionView) 
					{
					//exhibitSectionView.stopMedia()
					}*/
					// if we reached the end or went back from the start,
					// then go back to the exhibition.
					window.location.hash = '#exhibit/'+ match[1];
				}
				else
				{
				
				exhibitsAdapter.getSectionFromExhibit(Number(match[1]), Number(match[2])).done(function(exhibitSection) {
						
						exhibitSectionView = new ExhibitSectionView(exhibitSection).render();
						//view.render();
						
						slider.slidePage(exhibitSectionView.$el);
					
					});
					/*
					exhibitsAdapter.getExhibitById(1).done(function(exhibit) {
						view = new ExhibitSectionView(exhibit).render();
						slider.slidePage(view.$el);
					
					});
					*/
					return;
				}
			}
			
			// Display All the Exhibits
			match = hash.match(exhibitsUrl);
			if(match) {
				
				exhibitsView = new ExhibitsView().render();
				
				slider.slidePage(exhibitsView.$el);
				
				exhibitsView.loadExhibits();
				return;
				
			}
			
			// Handle Each Individual Exhibit With Sections
			match = hash.match(exhibitUrl);
			if(match) {
				
				exhibitsAdapter.getExhibitById(Number(match[1])).done(function(exhibit) {
				
				exhibitView = new ExhibitView(exhibit).render();
				
				slider.slidePage(exhibitView.$el);
				
				exhibitView.loadExhibitSections();
				});
				
				return;
				
			}
			
			match = hash.match(contactDetailsUrl);
			
			if(match) {
				//slider = new PageSlider($("body")),
		
				contactView = new ContactView().render();
				//$("body").html(contactView.$el);
				//contactView.$el.remove();
				
				slider.slidePage(contactView.$el);
				return;
			}
			
			match = hash.match(tourDetailsUrl);
			
			if(match) {
				
				tourAdapter.findById(Number(match[1])).done( function (tour) {
					
					view = new TourView(tour);
					view.render();
					slider.slidePage(view.$el);
					
				});
				return;
				
			}
			
			match = hash.match(toursSpecCatDetailsUrl);
			if(match)
			{
				toursCategoryAdapter.findById(Number(match[1])).done(function (category) {
					view = new ToursView(category);
					view.render();
					slider.slidePage(view.$el);
					view.loadTours();
				});
				
				return;
			}
			
			match = hash.match(toursCatDetailsUrl);
			
			if(match)
			{
				toursCatView = new ToursCatView().render();
				slider.slidePage(toursCatView.$el);
				
				toursCatView.loadList();
				
				
				return;
			}
			
			
			
		},
		
		start = function() {
			$(window).on('hashchange', route);
			document.addEventListener("deviceready", onDeviceReady, false);
            route();
		};
		
		function onDeviceReady()
		{
			document.addEventListener("backbutton", doNothing, false); 
			route();
		}
		
		function doNothing()
		{
		
			
			//alert("Back");
			hash = window.location.hash;
			if(!hash){
			   navigator.app.exitApp();
			}
			else if(hash.match(imageStoreAlbumUrl)){
				//window.location.href = "#";
				window.location.href = "#imageStore/";
			}
			else if(hash.match(imageStoreUrl) 
			|| hash.match(toursCatDetailsUrl)
			|| hash.match(contactDetailsUrl)
			|| hash.match(exhibitsUrl)){
				window.location.href = "#";
			}
			else if(hash.match(toursSpecCatDetailsUrl)){
				window.location.href = "#tours";
			}
			else if(hash.match(tourDetailsUrl)){
				window.location.href = "#tours";
			}
			else if(hash.match(exhibitUrl)){
				window.location.href = "#exhibits";
			}
			else {
				//alert("Else");
			   navigator.app.backHistory()
			}
		}
		
		return {
			start: start
		};
});

