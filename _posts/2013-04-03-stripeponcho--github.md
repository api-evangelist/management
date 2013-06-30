---
layout: post
title: stripeponcho · GitHub
url: https://github.com/stripe/poncho
source: https://github.com/stripe/poncho
domain: github.com
image: http://kinlane-productions.s3.amazonaws.com/ap-evangelist-site/curated/screenshots/7357_github_com.png
---
{% include JB/setup %}<p>class ChargeResource &lt; Poncho : :Resource param :amount , :type =&gt; :integer param :currency def currency super|USD end end class ChargeCreateMethod &lt; Poncho : :JSONMethod param :amount , :type =&gt; :integer , :required =&gt; true param :currency , :in =&gt; [ USD , GBP ] def invoke charge = Charge.new charge.amount = param ( :amount ) charge.currency = param ( :currency ) charge.</p>
<center><p><a href="https://github.com/stripe/poncho" style='padding:25px; font-sze:18px; font-weight: bold;'>Read Full Story</a></p></center>
