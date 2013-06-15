---
layout: post
title: stripe/poncho · GitHub
url: https://github.com/stripe/poncho
source: https://github.com/stripe/poncho
domain: github.com
image: http://kinlane-productions.s3.amazonaws.com/ap-evangelist-site/curated/screenshots/9352_api500_com.png
---
{% include JB/setup %}<p>class ChargeResource < Poncho : :Resource   param :amount , :type => :integer   param :currency    def currency     super|USD   end end  class ChargeCreateMethod < Poncho : :JSONMethod   param :amount , :type => :integer , :required => true   param :currency , :in => [ USD , GBP ]    def invoke     charge = Charge.new     charge.amount = param ( :amount )     charge.currency = param ( :currency )     charge.</p>
<center><p><a href="https://github.com/stripe/poncho" style='padding:25px; font-sze:18px; font-weight: bold;'>Read Full Story</a></p></center>
