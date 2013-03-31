function listProviders()
    {
    	
    $.getJSON('data/tags.json', function(data) {
    	       	        					
	        }).done(function(data){ 
	        	
		    	 $.each(data['tags'], function(key, val) {
					
				    $.getJSON('data/providers.json', val, function(providerdata) {
				    	
				        }).done(function(providerdata){ 
				        	
							$category = val['tag'];
							$slug = val['slug'];					        	
				        	
							var template = $('#providerTagListingTemplate').html();
							var title = Mustache.to_html(template, val);
							
							$('#providerListing').append(title);  	
				        	
				    	 $.each(providerdata['serviceprovider'], function(key2, val2) {			    	 	
						    	 	
				    	 	$name = val2['name'];
				    	 	$tags = val2['tags'];
				    	 	
				    	 	$inside = $tags.indexOf($category);
				    	 	
				    	 	alert($category + ' in (' + $tags + ') ' + $name + ' - ' + $inside);
		
							if($inside!=-1){
								
								var template2 = $('#providerListingTemplate').html();
								
								logo = Mustache.to_html(template2, val2);
								
								$('#providerListing').append(logo);  
								 
								}
							 						
					        });		        	
				        	
				        	
				        });	 	       	        
	        	
	        });
	        
        });     

    }    
     