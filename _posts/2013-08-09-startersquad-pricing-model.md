---
layout: post
title: Estimating development cost - The StarterSquad model
author: Iwein Fuld
tags:
- pricing model
- software development estimation
---

If you are charging money for software development you either have been or are going to be in trouble for it. There is a
 model that I use to explain how StarterSquad projects are priced, which I've found the hard way. Feel free to use it
 (reference appreciated). Or tell us what can be improved.

First a list of what the model should do:

- make the costs transparent to the client (where does the money go)
- predict velocity
- quantify how much work remains

If you have a modern car, it has a displays that tells you:

- how much fuel is used for 100km on average and right now
- how fast you're going on average and right now
- what distance you can make go on current tank of gas

If you have a gps navigation system, it tells you how much time and distance you have to go to the destination. I want to
give clients the overview they have in their cars, translated to software development.

What's the mileage
----------
With a car you know the mileage, or the kilometrage if you're not scared of SI. Software development is different in
some ways, but usually if you have a team on familiar ground it is surprisingly easy to teach them to estimate well.
Just as long as you give the right feedback. SCRUM traditionally computes velocity, but for us that's not enough,
because startersquad doesn't have a fixed team of fulltime employees working on the same project for a long time. Your
mileage may vary and I need a way to explain and estimate that. Cars are great for this.

The problem also with cars is that if you know the mileage on a typical road at 120 km/h. You still really don't know
much about the mileage on your particular trip. If you're planning a rally through the mountains, or to pick up kids for
a party, you're going to be in for a surprise if you don't expect it. If you know how much a development team can do on
a certain stack you can predict how what the mileage is on that stack, but doing it for different stacks and problem
areas is tricky. Make sure you have a way to measure the current mileage and the running average of it for each project.

*But what is a liter of fuel, or a kilometer in this analogy?*

At StarterSquad we measure capacity. You can buy capacity units with money. Capacity units are decoupled from hours:
one of my hours spent on Scala is very different from one of my hours spent on CSS3. The generic term of capacity is a
facade of a more complicated process of making sure that the right people are involved in each task. If that process
goes well, we might get to take a day off, or make some extra profit. If that process goes bad, [we work in the weekend][3].

We measure the progress in complexity points, which are estimated based on experience and understanding of the work that
needs to be done. [Estimating is hard][2], but there are some tricks that you can use to get into the right mode. More on
that later.

Once you work on estimated work for a while, it becomes relatively easy to calculate the mileage.

### What is our velocity
Velocity is just complexity points per time frame. Like with a car, it is possible to go slow and fast by using the
throttle (set a weekly budget).
This has an effect on the mileage. Each car has an optimal velocity;
teams are similar. Other than with cars with teams there is a lot of things you can alter in the team behavior to adapt
to a different velocity. The trick is to get optimal mileage at high velocity and then keep the velocity high.

Then a the client wants to make sudden turns, or slows down decisions it becomes easier to explain that it's lowering the
mileage and if we'd just make up our mind together there could get more bang for the buck.

### How to estimate
At some point you have to baseline the meaning of a complexity point. Typically in SCRUM this happens by chosing a
reference story and setting it at say 3 points. Then you estimate everything against that. Theory is that if the team
gets faster, they keep assigning the same points to similar stories. In that way you can detect changes in velocity.

But there are some tricky effects to this. The most obvious one is that as you learn, the implementation strategy will
 change. Meaning you'd pick a different solution to a problem, thereby making the problem less complex. Solved differently
 the problem will get less complexity points, and more importantly, it's relative complexity to other stories might
  change.

Another way I often use is to norm against how much time you think it would take. This is frowned upon in the Agile
community, but in the end, I'd rather know what my costs are going to be than have a historic record of the velocity
changes within projects and teams. Problem with this is that if a developer says 1 hour, it means he can do about 4 of those
tasks per day. If he says 8 hours he cannot do two of those tasks in 3 days. The reason for this is that creative work
doesn't happen linearly like the production of minced meat. The relationship between input and result is more decoupled
like with marketing, or planting seeds. This process differs between tasks, so it's very hard to model.

To cut this short, I've come up with a strange mind game that seems to work well. I ask the estimators to imagine a
perfect day. They're pair programming. No disturbances. Immediate answers to clarifying questions. Then I ask them how
many of these tasks they could do in that perfect day. A perfect day is 20 complexity points. So if the answer is 4, the
complexity is 5. If the answer is 7 or 8 the complexity is 3 if the answer is 10, the complexity is 2. You get the point.

After doing that for about 10 minutes, I never mention the perfect day again. I never norm again. I just let it slide
and measure. It's totally unscientific but it works better than everything else I've tried.

Message to your client
------------------
> Our team is like a car.
> You can buy capacity at X money / capacity unit.
> On average we do Y complexity points/ capacity unit.
> Your project is Z complexity points, so we can calculate the cost.
> Your mileage may vary.

Simple isn't it. If you have to change your prices, you change the price of a capacity unit. This is basically a change
in fuel price. This model incidentally also explains very well [why we charge money up-front][1]. If you don't put fuel in
in the car, you will get stranded in the middle of nowhere. Fill her up before you go.

Most elements of this model has been invented by other people, much smarter than me. This is just the way I use them.
 What's yours?

[1]: http://iweinfuld.tumblr.com/post/56964886619/the-inception-of-startersquad
[2]: http://www.jamesshore.com/Agile-Book/estimating.html
[3]: http://www.amazon.com/The-Seven-Day-Weekend-Changing-Works/dp/1591840260