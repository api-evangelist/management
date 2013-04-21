---
layout: post
title: Implementing Scalable Search on a NoSQL Backend
url: http://blog.parse.com/2013/03/19/implementing-scalable-search-on-a-nosql-backend/
source: http://blog.parse.com/2013/03/19/implementing-scalable-search-on-a-nosql-backend/
domain: blog.parse.com
---
{% include JB/setup %}<p>Search is really easy to implement for a quick and dirty prototype, but really hard to implement in a scalable way for production usage.The patterns that work most conveniently for prototyping are often the direct cause of scalability problems later in an application’s life cycle.Simplistic search algorithms simply scan through all the documents and execute the query on each one. If it sounds like this can take a long time, that’s because it does.The key to making searches run efficiently is to minimize the number of documents that have to be examined when executing each query by using an index.</p>
<center><p><a href="http://blog.parse.com/2013/03/19/implementing-scalable-search-on-a-nosql-backend/" style='padding:25px; font-sze:18px; font-weight: bold;'>Read Full Story</a></p></center>
