function listProviders()
    {
    $.getJSON('data/tags.json', function(data) {
    	toggle = 0;
    	 $.each(data['tags'], function(key, val) {
			var template = $('#providerTagListingTemplate').html();
			var html = Mustache.to_html(template, val);
			$('#providerListing').append(html);    						
	        });
        });

    }    
     