---
layout: post
title: Effective Distributed Software Development
author: iwein
tags:
- development
- outsourcing
- distributed teams
- online collaboration
---

Effective Distributed Software Development
-----------------------
Getting software development done effectively is hard. Distributing work over a team effectively is even harder.
Distributing work over a remote team, even one that isn't colocated seems impossible. However, this is exacly how
StarterSquad works. Read on if you want to know how we pull it off.

### Basic rules of distributed collaboration

Personally, I have a long history in distributed collaboration. I've worked with huge outsourcing teams, in several OSS
teams, with Agile Offshoring teams and now with StarterSquad. From my experience I've learned that distributed teams
are fragile. They're much easier to break early on than colocated teams, but if you get them working, the precarious
balance and the hard won skills to keep them running make them more resilient. I believe this is because members of a
well running distributed team are consciously aware of the hard work that went into it and therefore more careful with
each other. But enough phylosophy, let me explain some tricks.


#### Pull together

Decide who is in the team, who is out. Then whenever you have a question or doubt, ask a team member to look at it with
 you. There are plenty of cool tools to share your screen with, and audio connection shouldn't be a problem either.
 Do buy a good headset though, having a feedback loop while you're pairing isn't conducive to productivity at all.

 Apart from regular [pair programming](http://blog.xebia.com/2010/05/09/practical-styles-of-pair-programming/),
 pulling together with the client is also important. Especially if
 you're spending serious time honing details or programming the back-end, a client isn't going to have enough
 visibility into your hard work to appreciate what he's paying for. Involving the client in domain discussions is
 extremely helpful to prevent that, and it will also speed up the team. It's not weird at all to have a call with the
 client multiple times a day.

#### Establish a rythm

There is a powerful team building effect from dancing to the same beat. Don't underestimate primitive psychological
effects like these. All major benefits of colocation are directly caused by shared coffee/tea/smoke/lunch breaks. You
can provide a shared team rythm quite easily without colocation though. DO NOT create a schedule full of regular
meetings. As they say in the Rework book (great read btw): meetings are poison.

Some meetings are golden though. If there is anything you learn from SCRUM it is a regular retrospective. A self
improving system can only exist with regular introspection built into it. Each week, same day,
same time. Keep it short.

Get into a rythm by:

- regular pairing sessions
- sharing information from certain categories on certain days e.g:
-- wednesday = client demo day,
-- friday = test in Opera day
-- monday = share cool article day,
- demanding breaks at least every hour.

I don't like standups, they don't seem to add much value over pulling together throughout the day, but standups do tend
to provide a rythm. Try them some time if you never have.

#### Give everything a url

In a distributed team it's much harder to give clues about where time is spent. Every design, every bit of code,
every decision should be documented in a bookmarkable place. Commit a .md file to github, send a
[screencast.com](http://screencast.com/) around, or just use [piratepad](http://piratepad.net) or
[sket.sh](http://sket.sh) to capture brainstorming.

If you stick to this rule, you'll find that the client, and also your team members have a much higher appreciation of
 your work.

#### Asynchronize

A distributed team is also an asynchronous team. Even if our clocks say the same, we still live in very different time
zones. Establishing a rythm can only do so much. For example, I like to get up at 6am, work offline for an our or two,
then take my kids to school and swing by the gym. By the time I come online, it's 9:30 in London,
but almost lunch time in the Ukraine. One of my team mates works regularly until 5 in the morning,
sometimes there is time for a handover when I get up, sometimes not.

This is not a problem if you've given everything a url and communicated those asynchronously. If you don't,
you drift apart.

The rules above only cover how you should work together. They were in part inspired by [Ryan Tomayko's description of
how github works](http://tomayko.com/writings/adopt-an-open-source-process-constraints).

There is also a lot to say about how you should structure the team around client relationships. I'll go into that in
the next section.

### A team structure that works in distribution

There are three main team structures that you can choose from: local teams, distributed teams,
offshore teams. I'll go over each of them and highlight the pros and cons for each.

#### Local teams

A local team works really well if the team is small and the turnaround time is quick,
for example in maintenance mode. When things need to scale however, having a colocated local team is expensive and hard
to scale down again. The short lines and quick feedback advantages are quickly losing against the extra costs.

#### Offshore teams

If calculated by the hour, offshore teams are the cheapest option. The problem is that they can only work effectively
 with local management and very clearly specified requirements. Steering an offshore team in an Agile manner is
 hardly possible. Another problem is that
 [too large teams are typically not very effective](http://www.qsm.com/Blog/Productivity_and_Team_Size.pdf).
 Not many projects are large enough to allow effective offshoring. A
 distributed team might fit the scale better.

#### Distributed teams

 A distributed team is a team that is represented at the clients location, but also has a remote component. Splitting
  the team in this way, and sticking the basic rules laid out above, you will get several positive effects:

- the team closely relates to the client
- the process adapts to remote working (nice if you can't always make it to an office)
- it becomes easier to scale the team to the right size
- the costs are more attractive

We believe that with this recipe we are getting close to the sweet spot of distributed collaboration. Let us know if
you have interesting experience to share.
