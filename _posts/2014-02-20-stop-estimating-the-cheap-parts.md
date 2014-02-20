---
layout: post
title: 'Estimating for Viable Business'
author: Iwein Fuld
tags:
- startups
- product development
- estimation
- time to market
---
A week ago I stumbled on an interesting article by Petri Kainulainen about estimations. It argues that because
estimations are invariably going to be wrong, you should stop doing them. In fact they can be counterproductive
because they trigger gaming instead of adding value. I believe this is true to some extent, although I also believe you
can do [valuable estimations of risk and effort](estimating-risk), as long as you don't let them interfere with your
goals by letting them cause gaming.

The thing that Petri didn't mention, but is all important in my opinion is that development cost are only a marginal
part of the equation. In other words, we're estimating only a small part of the costs.

## The cost benefit analysis of your business
In a generic sense a business case is a simple equation. There is an initial investment (I),
then there are accumulated
costs (c) and ongoing revenue (r). c and r are functions of time, the initial investment is not. The total result of
the business (ROI) can always be written as a function ROI = -I - c(t) + r(t)). If both costs and revenue grow
linearly, it's clear to see that there will only be ROI if r is larger than c and that way r(t) - c(t) grows past I at
some point. Now risk comes into play as well, because both I, c and r are subject of fluctuation based on risk. What
should be very clear here though is that the risk on I is limited in time, and after the investment is made,
the viability of the business case depends solely on c and r.

 ## The problem with estimating development costs
 When developing development costs, only the initial investment I is estimated. As I've just explained, this doesn't
 reflect the viability of the business case in any way. What is more interesting is the costs later on (c). Most
 interesting is r. If by a faster increase in costs, you can generate exponential growth in r, then you're really on
 to something. In other words, c and r tell you if it is even possible to return on investment; I only controls how
 long you have to wait for that. Consequently, estimating the initial development disregards the most essential
 drivers for business viability and ROI.

 ## How to estimate properly
 Staking out a sizable project and estimating the full cost of initial development isn't a good idea. Instead you
 should look for a business model first, and then start automating it with small optimizations. For each optimization
  in the business processes, you figure out what the effects on c and r are going to be. You pick the improvement
  with the best metrics and start with that one.

## The StarterSquad example
StarterSquad sells development capacity from teams. These teams need to be formed, and capacity needs
 to be sold to clients. These processes you can do manually. The initial investment for StarterSquad therefor was zero.
 Now doing all that manually is a lot of work, so there is room for optimization. That's how we came up with the idea
 for the StarterSquad self service platform. If we optimize the way clients buy capacity and the cashflow is
 distributed to the teams and team members, it frees up someone (yours truly) from manual work doing the accounting.
 We've started scoping out the entire platform with ordering, planning, reconciliation, payments, security,
 etc. We could estimate the, but we've decided against that. The point is that for c and r to develop in a healthy
 way, we _need to automate_ whatever the total costs are. Instead I started tracking my time and listing the problems
  in massively scaling the StarterSquad model. It turns out I spend about 30% of my time on clients directly,
  10% on dealing with invoices and deals, 30% dealing with moving work around between teams and the rest on
  marketing, sales, and picking my nose. Before I measured I thought I needed to build the client facing part of our
  platform first, but after doing the measurements, I found that the rules of the game between teams needed to be
  automated first. We've estimated that if we solve the problem of moving work around,
  we can scale exponentially (not that we should, but it's a nice option, right?). Now if that happens,
  the next bottleneck is going to be with deals and invoices, but we only have to solve that if we've grown by a
  factor of three it seems. By then the investments made will have been forgotten, and we can make another one.

You should read [Petri Kainulainen's two arguments against estimations]
(http://www.petrikainulainen.net/software-development/processes/two-reasons-why-estimates-arent-worth-it/) and
consider this a third one. I think it's the most important one actually, but I'm very curious about your thoughts.

Interested in our approach? [Contact us](/contact) to discuss what StarterSquad can do for you!