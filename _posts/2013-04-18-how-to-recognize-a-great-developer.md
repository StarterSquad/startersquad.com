---
layout: post
title: How to recognize a great developer
author: Iwein Fuld
tags:
- startups
- development
- teams
- scaling teams
---

Many organizations struggle with getting high quality developers on board. Especially when building a team, the cost
effects of hiring the wrong guy at first are dazzling. I've interviewed and worked with quite a few developers and I've
taken a lot of lessons from some of the greats like [Joel *smart-and-get-things-done* Spolsky][1]. But most of these
lessons revolve around *hiring* and *interviewing* and in this blog I'll focus on *recognizing* great developers.

Before you hire a developer for a long term, you should be absolutely sure that he can do the job. That doesn't mean you
cannot work with them extensively, way past a day of interviewing before you make a decision. Maybe you hire them as a
freelancer for a month or two and then decide. During that time you can assess if there is a match, but what should you
be looking for?

As Aristotle already said: "We are what we repeatedly do. Excellence, therefore, is not an act, but a habit." In fact
there are many [habits that make better programmers][2]. You can find tell tale signs of these habits in all the output.
Obviously you should look at commits, but also emails, chat messages, whiteboard drawings are great sources of
information. Here are the things I look for.

###Communication and collaboration
Many people in the software industry forget that the job of a developer is to let a user make the computer do something.
That means excellent communication skills are vital to the job. The more layers between the algorithm and the user, the
more complex the software is. That is not a good thing. Also, to make code that can be maintained by other human
developers, developers need excellent communication skills.

Great developers are:

0. **Actively looking for feedback**. They run tests, measure performance; but also ask questions to business people and
   look for pre-alpha users.
1. **Learning all the time**. If you ask a great developer what he has learned today, you will *always* get an
   interesting answer
2. **Teaching all the time**. Whether it is the new keyboard shortcut for indenting code blocks, or the latest trick to
   mock up a REST api in nginx, it should take no effort to get a great developer explaining you a new trick in a clear
   way.
3. **Not going off the grid for long periods of time**. I love my communication asynchronous and infrequent when I'm
    cracking a hard nut (more later). But if a developer goes under water for more than a day without looking for
    feedback or having something to teach, I'm unimpressed.

###Cracking hard nuts###

Sometimes (it doesn't happen that often unfortunately) as a developer you bump into a Really Hard Problem. It takes a
bit of time to identify such a problem as real. If you have such a problem you're really lucky, because it is the best
way to flush out the great from the mediocre. The mediocre developers, when facing a hard problem, they tend to walk
around it. Move it around through the code base, or just pick up something else. Great developers know that Really Hard
Problems don't go away, so they take them by the horns and solve them. If a developer is not smart enough to solve
Really Hard Problems, you can still see good habits emerge when they ask for help.

Great developers are:

0. **Attacking hard problems successfully**. A solution comes out with reasonable effort (no days of silence, late
   night hacking, or lost weekends). You can't fake this one.
1. **Not pretending to be smarter than they are**. It is a good exercise to take on a problem even if you have no idea
   if you're going to succeed in fixing it. If you learn something, for example that your assumptions about the problem
   are flawed, you should share it and look for feedback.

###Working smart, not hard###

Some people think that if you do your best and work hard, good things will come to you. This is not true. Focus and
dedication are important, but looking for cheats and shortcuts can save a lot of money as well. I'm referring to the
ability to find the balance between just doing it yourself because it's easy (or never done before) and finding
a library or service that does it for you to save a few days of coding. It could also well be that if you talk to a
business owner and explain that having a slider that can be updated by different users at the same time is more than
1000 times more expensive than an input field, this business person thinks implementing the fancy slider isn't good
business after all. To spot the occasions where you need to pull this trick, instead of going for the
Really Hard Problem is what sets apart great developers.

Great developers are:

0. **Looking for ways to do less work**. Without shying away from hard problems: "It'd be fun to do it, but it's going to
   take some serious effort. Are you sure you want it?"
1. **Looking for ways to reuse existing libraries**. You know the [Not Invented Here Syndrome][3], right? I'm not
   looking for people wanting to turn anything into a library, but PLEASE don't write your own thread pool or something
   silly like that.

Looking for these habits consciously should teach you a lot about the developers you work with. If you're a developer of
sorts, I think that it also helps to be conscious about your own habits. I'm trying real hard every day.


[1]: http://www.joelonsoftware.com/articles/GuerrillaInterviewing3.html
[2]: http://blog.milotodorovich.com/2012/12/13-habits-to-becoming-excellent.html
[3]: http://onlinelibrary.wiley.com/doi/10.1111/j.1467-9310.1982.tb00478.x/abstract