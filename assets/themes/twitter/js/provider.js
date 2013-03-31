function listProviders()
    {
    	
    var html = '';
    	
    $.getJSON('data/tags.json', function(data) {
    	
    	 $.each(data['tags'], function(key, val) {
			
			var template = $('#providerTagListingTemplate').html();
			var title = Mustache.to_html(template, val);
			
			html += title;
			
			//$('#providerListing').append(html);   
			
			$category = val['tag'];
			
		    $.getJSON('data/providers.json', function(providerdata) {
		    	
		    	 $.each(providerdata['serviceprovider'], function(key2, val2) {
		    	 	
		    	 	$tags = val2['tags'];
		    	 	
		    	 	$inside = $tags.indexOf($category);
		    	 	
					//alert($category + ' in (' + $tags + ') ' + $inside);
					
					if($inside!=-1){
						
						var template2 = $('#providerListingTemplate').html();
						
						logo = Mustache.to_html(template2, val2);
						
						html += logo;
						
						alert(html);
						 
						}
					 						
			        });
		        });		
				
	        });
	        
	        alert(html);
	        
	        $('#providerListing').append(html);  
	        
        });     

    }    
     