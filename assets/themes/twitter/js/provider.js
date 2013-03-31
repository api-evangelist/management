function listProviders()
    {
    	
    var html = '';
    	
    $.getJSON('data/tags.json', function(data) {
    	
    	 var $tagArray = [];
    	 var $tagCount = 0;
    	
    	 $.each(data['tags'], function(key, val) {
			
			var template = $('#providerTagListingTemplate').html();
			var title = Mustache.to_html(template, val);
			
			html += title;
			
			$tagArray[$tagCount] = val['tag'];	        	        		
					
			$tagCount++;
				
	        });
	        
        }); 
        
	for (var i = 0; i < $tagArray.length; i++) {
	    alert($tagArray[i]);
	    //Do something
	}            

    }    
     