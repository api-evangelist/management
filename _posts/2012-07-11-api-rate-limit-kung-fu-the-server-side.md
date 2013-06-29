---
layout: post
title: API Rate Limit Kung Fu: The Server Side
url: http://www.3scale.net/2012/07/api-rate-limit-kung-fu-the-server-side/
source: http://www.3scale.net/2012/07/api-rate-limit-kung-fu-the-server-side/
domain: www.3scale.net
image: http://kinlane-productions.s3.amazonaws.com/ap-evangelist-site/curated/screenshots/9352_api500_com.png
---
{% include JB/setup %}<p>Adam Green has a great post on programmableweb this morning about Twitter API Rate Limits – with great tips on how to get the most out of the Twitter API without hitting rate limits.Sharing API calls between your server side and the client’s browser is actually critical to making some Twitter integrations work and there’s a great tip on how to use server side caching: You can call the API from the browser, display the results, and then call your server with the data you got from the API.In effect you are using all of the user browsers as a large collection grid.This approach can be used to reduce the amount of API calls you have to do from the server.This type of technique highlights how important it is for API Providers to map out the use cases they aim to support with their APIs – since rate limits can typically completely handicap some usage scenarios – in particular for APIS which have server-side and end-user scenarios.</p>
<center><p><a href="http://www.3scale.net/2012/07/api-rate-limit-kung-fu-the-server-side/" style='padding:25px; font-sze:18px; font-weight: bold;'>Read Full Story</a></p></center>
