function listProviders($tag)
    {
    	
    $title = '<p><strong>' + $tag + '</strong></p>';	
    $('#providerListing').append($title); 	
    	
    $.getJSON('data/providers.json', function(providerdata) {
    	
    	 $.each(providerdata['serviceprovider'], function(key, val) {
    	 	
    	 	$tags = val['tags'];
    	 	
    	 	$inside = $tags.indexOf($tag);
    	 	
			if($inside!=-1){
				
				var template = $('#providerListingTemplate').html();
				
				html = Mustache.to_html(template, val);
				
				$('#providerListing').append(html);  	
				 
				}
			 						
	        });
        });
		          
    }   