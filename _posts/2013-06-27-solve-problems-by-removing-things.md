---
layout: post
title: Product pruning
author: Iwein Fuld
tags:
- development
- business development
- product development
- code quality
---

Solve problems by removing things
=============================

A very popular quote by Antoine de Saint-Exupery:

> “Perfection is achieved not when there is nothing left to add, but when there is nothing left to take away”

**That's nice, but what does it actually mean?**

![Grow your code like a bonsai tree](http://farm4.staticflickr.com/3620/3331458839_06190b8422_z.jpg?zz=1)

In a [presentation I often use when talking about solving problems with software](http://www.slideshare.net/slideshow/embed_code/12860990). I explain about finding the
balance
between affordable, richness and maintainability. The most important factor in having a
sustainably evolving code base, is the habit of removing things.

In our work with Lean Startups I found that the product *is* the code base. In this case, what goes for code,
goes just as well for the rest of a company.

Then it hit me: *many problems can be resolved by removing things, but it seems to be the last thing that we
naturally think of*.

The underlying cause here is that adding a little thing to make things a little better is dead easy,
but removing a large chunk to really solve the proble becomes harder and harder as the solution grows.

Let me give you a mathematical example. <small>I'm a geek. If that scares you, kindly wave your hands above your
head and run away screaming, it gets worse soon.</small>

Let's say you have the following plot of an unknown function.

![inverted s-curve](http://www.wolframalpha.com/share/img?i=d41d8cd98f00b204e9800998ecf8427egcvjbgdrni&f=HBQTQYZYGY4TOM3EMI3WENDEGMYDCM3GHA3DSZDEGE2WIMJRGMYQaaaa)

Let's also say that it is your objective to stay as close as possible to the function. You might try to follow the
line with a [taylor series](http://mathworld.wolfram.com/TaylorSeries.html). And you'll get close enough:

![taylor 3rd order](http://www.wolframalpha.com/share/img?i=d41d8cd98f00b204e9800998ecf8427ee1h5eqfm9v&f=HBQTQYZYGY4TMM3EMI3WENJVGQYDCM3GHA3DSYLGGEYTCMJQMRSAaaaa)

When you grow the application of your problem, the approximation might not be adequate anymore.

At this point your natural reaction will be to add more terms. The more terms you add the higher the complexity of
 the solution. You'll get closer to the solution when judged by the immediate result,
 but your implementation is drifting further and further from the simple and elegant solution to the problem.

![increasing error](http://www.wolframalpha.com/share/img?i=d41d8cd98f00b204e9800998ecf8427e5lu1u1nifi&f=HBQTQYZYGY4TQM3EMI3WENBWGUYDCM3GHA3GGNBSMNSWEMJQGM4Qaaaa)

You need to make a leap. And it's probably not going to be a trivial one. The function being used here is
actually quite simple. But in reality finding simple functions for behavior is not very common. Many large
corporations are also like this:
they've drifted away from the problem they were trying to solve by incremental optimization.

The simple pattern here is that whenever you add something you take a risk. The chance that the thing you're adding is
taking you further away from the perfect solution is usually quite large. The more of these little risks you take,
the higher the probability that you're getting lost entirely.

The solution: **take things away to solve problems**.

*(there used to be a section here with examples, I just took it away…)*