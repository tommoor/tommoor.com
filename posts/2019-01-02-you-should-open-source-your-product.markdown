---
layout: post
title: "You should open source your product"
date: 2019-01-01 21:00
tags:
- open source
- startups
---

From the start, we knew we wanted to open source our team knowledge base, [Outline](https://getoutline.com). One of the main reasons it exists is because several startups in the space had shut down and we felt that the need remained. During this past year of open development, many other benefits of open sourcing a product have become increasingly clear – both through my own experiences and talking with founders of other companies.


## Peace of mind

In this age of low cost of entry and abundant startups, products are more likely to disappear after a couple of years than succeed. One of the biggest reasons potential customers will never even try your product is the reluctance to invest time and data into something that might not be around tomorrow.

Open source provides some peace of mind – if for whatever reason the product becomes unmaintained then the community can fork the source code (see [The Storybook Story](https://medium.com/storybookjs/the-storybook-story-dd3c1ab0d2ce) for a great example), run their own version in-house, or more easily build tooling to export data in a worst-case scenario.


## Market positioning

A couple of years ago It felt like [GitLab](http://gitlab.com) became a realistic contender for git hosting seemingly overnight. While it has since come a long way, the first version of the product was almost a direct clone of GitHub. 

One of the core reasons that developers flocked to the platform despite this was the [open core nature of the project](https://about.gitlab.com/2016/07/20/gitlab-is-open-core-github-is-closed-source/). For developer tools and platforms, in particular, simply embodying the philosophies of OSS can be enough to differentiate a new product from the crowd.


## Customer acquisition

Open source could be thought of as a subset of content marketing – every commit, pull request, and issue is public content indexed and often keyword-rich. It provides a number of channels for new customer acquisition – the code repositories themselves of course, but also the ecosystem of publications, websites, listicles, and newsletters that cover OSS development.

[Sentry](http://sentry.io), an open source error tracking service, was a project for several years before it spun out into an actual company – today around ~65% of their inbound referral traffic is still from their source code repositories, hosted on GitHub.


## Best practices & documentation

Building in public is a uniquely satisfying experience. Personally, I often find myself performing to a higher standard when I know that all the work I produce is publicly visible. Defaulting to more judicious comments, ensuring full test coverage, and putting extra effort into being a clear communicator.

If you can't go all-in, consider open sourcing components and individual libraries. Once a high-level concept is abstracted and decoupled from the specifics of a codebase it often becomes both easier to reason about and will inevitably lead to better defined API's and public interfaces.


## Community & contributors

At the time of writing, [Sidekiq](https://sidekiq.org), an open source background processing implementation for Ruby, has more than [380 individual contributors](https://github.com/mperham/sidekiq/graphs/contributors) to its repository on GitHub. These people have fixed bugs, filed issues, written documentation, contributed to feature discussions, and generally done the types of things you’d pay a six-figure salary for in the bay area!

Although Sidekiq does offer commercial licenses (and makes a [nice profit doing so](https://www.indiehackers.com/podcast/016-mike-perham-of-sidekiq)) this doesn’t stop community members from donating their time and skills to help improve the software for everyone.


## Hiring pipeline

Wordpress ([famously?](https://hbr.org/2014/04/the-ceo-of-automattic-on-holding-auditions-to-build-a-strong-team)) replaced white-boarding exercises and code challenges with a “try out” period as part of their hiring process, paying candidates to undertake issues in their actual codebase. This is made possible because the code is public, for a closed source team it would generally be out of the question to provide access to the codebase before a hiring decision is made.

While using open source contributions in a general sense as a hiring decision maker is generally considered problematic – *specific* experience with your product’s codebase is an ideal way to gauge both a potential hires technical and communication skills in a realistic way.


## Free tools & services

At the beginning of a project, every dollar matters and spending hundreds on infrastructure before the product is making any money is a difficult hurdle for many to overcome. Luckily, lots of tools have free or heavily discounted plans for OSS projects as a way of giving back – whether it’s CI, server hosting, error tracking, or mailing lists.

This is a great list that covers many freebies: [opensource candies](https://github.com/velikanov/opensource-candies).


## But it’s not all roses…

So at this point, you’re probably ready to hit the big red button and publish all your code… right?! While you’ll find that many things are improved with an open codebase it’s important to note that there are some downsides to take into consideration…

#### Licenses and agreements
It’s a good idea to make sure that outside contributors sign agreements such as a [CLA](http://oss-watch.ac.uk/resources/cla) before their code is merged into the project. In the event of a future acquisition or change of ownership you’ll thank your past self.

#### Competitors get insight into feature development and roadmap
I believe that for most startup companies today this is a non-issue, founders tend to be overly protective of their ideas and roadmap when in reality they’d be better off getting this information in front of potential users as soon as possible.

But of course, some ideas have a wider moat than others and this insight into your companies plans might be something you need to avoid.

#### No security through obscurity
Open source software is generally considered more secure in the long term – more eyes on an application’s code can help identify and fix security holes. However, opening up your code to scrutiny also provides would-be attackers with direct insight into potential loopholes and security problems. 

It also means that even more care has to be taken than usual for sins like accidentally committing API keys into git or adding customer details into public issues.

#### Increased overhead of documentation
It’s even more important when code is public that documentation is thorough, clear, and makes as few assumptions of the reader as possible. Writing this level of documentation takes a lot of time and effort that in the early stages of a product might be time better spent on core business problems.

#### Community maintenance
Similarly, a vibrant open source community doesn’t come for free. Issues need to be triaged, questions answered, and pull requests reviewed. If the issues and unfinished branches begin to pile up then this is an immediate warning flag to users and those considering contributing.

As well, the more popular your open source project becomes the more work there is to do shepherding and maintaining the community – popularity may be a curse that only larger teams can manage…


**If you've had great success or failure making your companies code public I'd love to hear about it in the comments.**
