function listProviders()
    {
    	
    var $html = '';
    var $tagArray = [];
    var $tag = '';
    	
    $.getJSON('data/tags.json', function(data) {
    	
    	 var $tagCount = 0;
    	
    	 $.each(data['tags'], function(key, val) {
			
			$tagArray[$tagCount] = val['tag'];	        	        		
					
			$tagCount++;
				
	        });
	        
        })
        .done(function() {  
        
			for (var i = 0; i < $tagArray.length; i++) {
				
				$tag = $tagArray[i];
				
				alert($tag);				
				
			    $.getJSON('data/providers.json', function(providerdata) {
			    	
			    	$Any = 0;
			    	$logos = '';
			    	
			    	 $.each(providerdata['serviceprovider'], function(key2, val2) {
			    	 	
			    	 	$tags = val2['tags'];
			    	 	
			    	 	$inside = $tags.indexOf($tag);
			    	 	
						//alert($category + ' in (' + $tags + ') ' + $inside);
						
						if($inside!=-1){
							
							var template2 = $('#providerListingTemplate').html();
							
							$logo = Mustache.to_html(template2, val2);
							
							$logos += $logo;
							 
							}
							
						$Any = 1;	
						 						
				        }).done(function() {
				        
				       	$html +='<p><strong>' + $tag + '</strong></p>' + $logos; 
				       
				       }
				        
			        }).done(function() { 				
				
				
					alert($html);	
				
			   });
			}            
	
		 });

    }    
     