function listProviders()
    {
    	
    var $html = '';
    var $tagArray = [];
    var $providerArray = [];
    var $tag = '';
    var $logos = '';
    var $slot = 0;	
    var $NumberofTags = 0;
    var $NumberofTagsProcessed = 0;
    	
    $.getJSON('data/tags.json', function(data) {
    	
    	 var $tagCount = 0;
    	
    	 $.each(data['tags'], function(key, val) {
			
			$tagArray[$tagCount] = val['tag'];	        	        		
					
			$tagCount++;
				
	        });
	        
        })
        .done(function() {  
        	
        	$NumberofTags = $tagArray.length;
        	$ProcessedTags = 1;
        
			for (var i = 0; i < $tagArray.length; i++) {
				
				$tag = $tagArray[i];
				$slot = i;
				
				//alert($tag + ' - ' + $slot);

			    $.getJSON('data/providers.json', function(providerdata) {
			    	
			    	$Any = 0;
			    	$logos = '';
			    	
			    	 $.each(providerdata['serviceprovider'], function(key2, val2) {
			    	 	
			    	 	$tags = val2['tags'];
			    	 	$name = val2['name'];
			    	 	
			    	 	$inside = $tags.indexOf($tag);
			    	 	
						//alert($tag + ' in (' + $tags + ') for ' + $name + ' - ' + $inside + ' - ' + $slot);
						
						if($inside!=-1){
							
							var template2 = $('#providerListingTemplate').html();
							
							$logo = Mustache.to_html(template2, val2);
							
							$logos += $logo;
							 
							}
							
						$Any = 1;	
						 						
				       }) 
				       
				       alert('<p><strong>' + $tag + '</strong></p>' + $logos);
				        
				       $providerArray[$slot] = '<p><strong>' + $tag + '</strong></p>' + $logos; 
				        
			        }).done(function() { 
			        	
			        	$NumberofTagsProcessed++;
			        	
			        	if($NumberofTagsProcessed==$NumberofTags)
			        		{ 
				        	for (var x = 0; x < $tagArray.length; x++) {
				        		
				        		$Tag = $tagArray[x];
				        		$Images = $providerArray[x];
				        		
				        		alert($Tag + ' - ' + $Images);
				        		
				        	}
			        		}
			        	
			        });
			
				}   

		 });

    }    
     