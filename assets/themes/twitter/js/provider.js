function listProviders()
    {
    	
    var html = '';
    var $tagArray = [];
    	
    $.getJSON('data/tags.json', function(data) {
    	
    	 var $tagCount = 0;
    	
    	 $.each(data['tags'], function(key, val) {
			
			var template = $('#providerTagListingTemplate').html();
			var title = Mustache.to_html(template, val);
			
			html += title;
			
			$tagArray[$tagCount] = val['tag'];	        	        		
					
			$tagCount++;
				
	        });
	        
        })
        .done(function() {  
        
			for (var i = 0; i < $tagArray.length; i++) {
			    alert($tagArray[i]);
			    //Do something
			}            
	
		 });

    }    
     