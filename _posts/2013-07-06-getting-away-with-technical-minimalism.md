---
layout: post
title: Getting away with Cheap Software
author: iwein
tags:
- development
- mvp
- minimalism
---

How to get away with cheap software
=========================

Cheap software has a lot of advantages. On a first glance it seems that cheap means low risk (unless you're buying cheap explosives, but
software is usually not that dangerous). If you don't invest a lot in software you don't have to write off a lot of
money in case of a pivot. BUT, if you invest too little into software you do take risks. Possibilities are that
you:

- end up having a much higher TCO because of the poor maintainability,
- fail on execution because changes in strategy take too long to implement,
- users notice the poor quality and conversion is low or
- you cannot find developers that want to join and help scale the team.

So how do you find the balance between the dead cheap, but suboptimal on one side and the pristine solution that you pay
through the nose for?

## Lower the budget

It might seem trivial, but it's the most important step. If you want high quality, the last thing you should do is throw
with money. Budgets work the same as storage rooms. If there is more space, it will fill up before you know it with
stuff that you don't really need.

So set a low budget, and add more slowly and only once you know that you're on the right track.


## Focus your features

The stuff that you don't need is actually lowering the quality for your users. Instead of worrying about getting all the
features you dreamed up, worry about getting the next one exactly right.
[Ask why 5 times](http://en.wikipedia.org/wiki/5_Whys) and make sure you're solving the root cause, not peripherals and
more often than not, after doing the most important next feature exactly right, three other features become less important.

## Clean up

In an earlier blog I suggested to
[solve problems by removing features](/blog/solve-problems-by-removing-things). It's essential that
the set of features, the source code, the documentation etc stay clean. The cleaner you can keep things, the faster you
you can respond to change. This has a significant effect on the cost of change, which is the most important cost driver
in software development.

## Invest only in better working software

There are many technical people that will not like what they see when they look at your code. They will invariably
suggest that you [refactor, upgrade, or even rewrite](/blog/solve-problems-by-removing-things). They are not necessarily
wrong of course, but if you force the issue and only pay for improvements in your business implementation, you will end up
spending less on better software.

If the software is really that bad, there is always a business case for the technical improvements. To name some examples:

- if we do this we need less hardware
- after this refactoring we can run on multiple nodes
- by upgrading we can reduce the memory consumption an have a higher uptime

Forcing developers to come up with these business cases focusses the investment on advantages that pay off. Switching
from Java to Scala and back again doesn't bring anything else than developer targeted marketing. Which might be fine,
but you should know what you're signing up for in advance.