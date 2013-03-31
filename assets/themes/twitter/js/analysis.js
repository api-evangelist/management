function listAnalysis()
    {
    newscount = 0;
    $.getJSON('data/analysis.json', function(data) {
    	
    	 $.each(data['analysis'], function(key, val) {
	    	
			if(newscount<250){
				var template = $('#analysisListingTemplate').html();
				var html = Mustache.to_html(template, val);
				$('#analysisList').append(html);
				}
	        
	        newscount++;
	        });
        
        });
        
    }    
     