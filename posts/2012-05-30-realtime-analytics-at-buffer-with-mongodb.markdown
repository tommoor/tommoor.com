---
layout: post
title: Realtime Analytics at Buffer with MongoDB
date: 2012-05-30 00:00 -0800
tags:
- mongodb
- mongo
- statistics
- buffer
- startups
---

<p>At <a href="http://bufferapp.com">Buffer</a> we try our best to be a data-driven startup, it can be hard work measuring, testing, correctly reading the data and then acting on these results - we definitely still have a lot to learn. Currently we use a combination of third party tools such as <a href="http://kissmetrics.com">Kissmetrics</a> and <a href="http://www.google.com/analytics">Google Analytics</a> as well as our own hand-rolled metrics for internal data.</p>

<p>The area where we are most happy with our approach is in measuring internal statistics, for example how many people used the latest Firefox extension last week, or how many API requests to which endpoints were there in the last 2 hours or which website with the Buffer widget provided the most signups last week?</p>

<p><strong>To make informed product decisions we need to easily access and visualise key business data in realtime.</strong></p>

<h3>Using MongoDB to measure realtime stats</h3>

<p>Our current tool of choice is <a href="http://www.mongodb.org">MongoDB</a>, using a combination of <a href="http://www.mongodb.org/display/DOCS/Atomic+Operations">atomic &#8216;inc&#8217; methods</a> and &#8216;unsafe&#8217; saves we can update key metrics in the database blindingly fast with a negligible affect on performance of the front end (as the driver doesn&#8217;t wait for save success before continuing).</p>

<p>By storing these statistics in minutely, weekly or hourly batches we can also limit data growth to a predictable rate and increase read speeds in the admin area.</p>

<pre>
<code class="javascript">
    db.clients_by_time.update({
        'hour': $hour,
        'client_id': $client_id
    }, {
        '$inc' =&gt; array(
            'requests' =&gt; 1,
            'statuses.'.$status_code =&gt; 1,
            'endpoints.'.$endpoint =&gt; 1,
            'response_time' =&gt; round($response_time)
        )
    }, true);
</code>
</pre>

<p>The code snippet above is inspired by <a href="http://blog.mongodb.org/post/171353301/using-mongodb-for-real-time-analytics">this post</a> on the mongodb blog and is used to record the performance usage of Buffer API clients. It allows us to produce detailed graphs like the following in realtime and with upto the second data.</p>

<p><img src="http://media.tumblr.com/tumblr_m4qii3RgVa1qz7mjl.png" alt="Buffer API graph"/></p>

<p class="caption">A typical API client</p>

<p>Several individual values are incremented, one for the total requests as well as individual status codes and endpoints.</p>

<p>Sometimes tricks can be used to allow the use of incrementing values where you might not usually, for example in the above code &#8216;response_time&#8217; is incremented with the response time of each API request - the value becomes the sum total of all API requests in the hour. It is then easy to calculate the average when we return the document by dividing by the total requests. To store the average in the document itself would require an extra query for every request and this is well worth avoiding!</p>

<p><img src="http://media.tumblr.com/tumblr_m4rw5fQ6ad1qz7mjl.png" alt="Buffer extensions graph"/></p>

<p class="caption">Buffer update sources</p>

<h3>Where to go from here</h3>

<p>We believe that this approach scales exceptionally well and it has certainly done us proud so far.</p>

<p>As the dataset grows it is inevitable that we will want to automate weekly, monthly and eventually yearly rollups and with only 168 documents created per collection, per week for data recorded hourly this is a task that can be easily performed in code rather than requiring map reduce.</p>

<p>By far the biggest area for improvement is in our display of all the data we are gathering. At the moment this is largely using simple line graphs with raw values over time (we don&#8217;t even have a way to go back to previous weeks yet!). Some of the analytics would also be much better expressed as percentages of a total, stacked graphs or one of the many other types of charts.</p>

<p><strong>Have any thoughts on our approach? Have you tackled things differently in your company? I would love to hear them in the comments.</strong></p>

<h3>Further Reading</h3>

<ul><li><a href="http://blog.mongodb.org/post/171353301/using-mongodb-for-real-time-analytics">Using MongoDB for Real-time Analytics</a> 
The original mongodb blog post that inspired this approach.</li>
<li><a href="http://www.slideshare.net/dacort/mongodb-realtime-data-collection-and-stats-generation">MongoDB Real-time Data Collection and Stats Generation</a></li>
<li><a href="http://blog.getspool.com/2011/11/29/fast-easy-realtime-metrics-using-redis-bitmaps/">Fast, easy, realtime metrics using Redis bitmaps</a>
Not a method we are currently using, but a very interesting approach to the problem solved using redis bitmaps.</li>
</ul>
