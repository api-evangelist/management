function listProviders()
    {
    $.getJSON('data/tags.json', function(data) {
    	
    	 $.each(data['tags'], function(key, val) {
			
			var template = $('#providerTagListingTemplate').html();
			var html = Mustache.to_html(template, val);
			
			$('#providerListing').append(html);   
			
			$category = val['tag'];
			
			//alert(tag);
			
		    $.getJSON('data/providers.json', function(providerdata) {
		    	
		    	 $.each(providerdata['serviceprovider'], function(key2, val2) {
		    	 	
		    	 	$tags = val2['tags'];
		    	 	
		    	 	$inside = $tags.indexOf($category);
		    	 	
					alert($category + ' in (' + $tags + ') ' + $inside);
					
					if(inside!=-1){
						
						$name = val2['name'];
					
						var template2 = $('#providerListingTemplate').html();
						var html2 = Mustache.to_html(template2, val2);
					
						$('#providerListing').append(html2);  
						 
						}
					 						
			        });
		        });			
			 						
	        });
        });

    }    
     