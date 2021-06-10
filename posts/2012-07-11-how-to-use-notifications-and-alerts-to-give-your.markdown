---
layout: post
title: How to Use Notifications and Alerts to Give Your Startup an Edge
date: 2012-07-11 00:00 -0800
tags:
- startups
- buffer
- notifications
- monitoring
- metrics
---

<p><img src="http://media.tumblr.com/tumblr_m71l33t2qv1qz7mjl.jpg" alt="An alert deer" title="She&#8217;s alert, get it?" /></p>

<p>Recently I&#8217;ve come to realise what a critical role notifications and alerts can play in running an internet startup, enabling a small and scrappy team to stay on top of many things at once. By spending a small amount of time identifying and setting up alerts for key metrics you can give yourself a powerful weapon that can be used to minimise problems and wow customers.</p>

<p>At <a href="https://bufferapp.com">Buffer</a> we started with the very basics, using pingdom to send a text message if the website became unavailable - this works great for an MVP. Over the past year as the service has grown we have gradually built up and expanded the notifications to cover many more areas of the architecture and business to make sure we always know what is going on.</p>

<p>In my mind notifications are best split into two categories - active and passive. Active notifications are pushed through to email, sms or mobile apps and are used for emergencies or critical problems with the service. Passive notifications are displayed in our internal admin area, team chat or are sent in daily summary emails, these are things that we would ideally action but aren&#8217;t immediate emergencies.</p>

<p>The key notifications that we are using today include:</p>

<h3>Active Alerts</h3>

<h4>Macro business metrics</h4>

<p>With deploying code many times a day there is alway a chance that bugs will slip through unnoticed. It&#8217;s important that if this happens they are detected as fast as possible and don&#8217;t affect the things that really matter. We track the core metrics that are most important to our business every minute to ensure they are within preset acceptable bounds. Obviously these will be different for every business, for Buffer these are:</p>

<ul><li>Updates Sent</li>
<li>API requests</li>
<li>Signups</li>
<li>Upgrades</li>
</ul><p>If any one of these metrics steps outside of pre-defined bounds then we are immediately notified via push alerts and email, for example if for two consecutive minutes no updates are sent then there is clearly a problem somewhere in the chain that needs immediate attention.</p>

<h4>Brand sentiment</h4>

<p>Inspired by <a href="http://arstechnica.com/business/2012/04/exclusive-a-behind-the-scenes-look-at-facebook-release-engineering/1/">an interview with Chuck Rossi</a> of Facebook&#8217;s release engineering team we also track sentiment (currently only on Twitter) for people mentioning @<a href="http://twitter.com/bufferapp">bufferapp</a>. If there is a spike in negative tweets we are immediately notified that something may be wrong. This means we can jump into Twitter and both fix whatever the issue may be and also respond with very fast customer support when it&#8217;s needed most.</p>

<h4>Server status</h4>

<p>As an internet based business this is a bit of a no-brainer, but mentioned for the sake of completeness. We use <a href="http://www.serverdensity.com">Server Density</a> to perform minutely checks on all of our public facing services including the website, embeddable buttons and API. These are done in a round-robin fashion from multiple data centres around the world which means a more accurate average response time reading and ensures we are accessible from different regions of the internet.</p>

<h3>Passive Alerts</h3>

<h4>Upgrades and downgrades</h4>

<p>We display a list of the days upgrades and downgrades in the admin area which is visible to everyone on the team. We often reach out individually to users to thank them or in the case of a downgrade to try and trigger a discussion on why they left us and what we might have done differently to keep them..</p>

<h4>Influencer signups</h4>

<p>Obviously we would love to send a personal email to every new signup, but with this not being possible we thought it would still be nice to get in personal contact with influencers that signup for the service. At first this was an active notification, we setup the signup system so that <a href="https://twitter.com/joelgascoigne">Joel</a> would receive an individual email every time a user with a large number of followers signed up. This quickly became a burden and the emails we&#8217;re auto archived even after the trigger for an influencer was raised time and again.</p>

<p>In hindsight it is now obvious that this should have been a passive alert and in a similar fashion to upgrades we now display a list in the admin area of the days influencers and regularly get in contact with users to welcome them personally - this really helps to create the <a href="http://www.desk.com/blog/touchpoint-opportunity-customer-wow/">customer service wow factor</a>.</p>

<h4>Brand mentions</h4>

<p>Like many businesses and individuals we use <a href="http://www.google.com/alerts">Google Alerts</a> to inform us in a daily summary where Buffer is being talked about on the web. This lets us find posts that mention the service both in negative and positive ways. Often <a href="https://twitter.com/LeoWid">Leo</a> can jump into the comments to directly answer questions and provide support.</p>

<h4>Commits and deployments</h4>

<p>For the past few months we have used <a href="http://www.hipchat.com">HipChat</a> as the hub of day to day conversation at Buffer. In general HipChat has worked wonders at keeping the team motivated and upto date on what everyone else is working on. As part of this we push passive deployment and commit notifications into HipChat from Github, usually no action is required by anyone but this helps to keep the sense that other people are working and everything is always moving forward fast!</p>

<p>I hope some of these examples inspire you to think about how having more notifications and information at your disposal could give your startup an edge!</p>

<p><strong>What have I missed? Is there something you monitor at your business that has proved incredibly valuable? I&#8217;d love to hear how we might improve our approach or any aspects that we may be neglecting</strong></p>

<p>Image thanks to <a href="http://www.flickr.com/photos/rsteup/3876636138/">rsteup</a></p>
