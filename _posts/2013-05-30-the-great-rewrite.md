---
layout: post
title: The Great Rewrite
author: iwein
tags:
- development
- code quality
- time to market
- risk reduction
todo: links
---

The Great Rewrite (or maybe not)
-----------------------

Every developer of some experience has seen it at least once. The evil beast of an application that should be killed 
with fire to rise from the ashes as a beautifully crafted phoenix. Business people dread the moment when they need to
scale their team and the best new developer explains that the application is beyond maintenance and new features 
can only be added after a complete rewrite. If they payed attention they know that listening to this type of advice 
can kill their company, but they also know that not listening might do the same. When should they give in? How 
can you predict the outcome of such a decision?

Technology evolves, faster than ever. Today's highly productive framework is tomorrows legacy system that you're locked
 into. If you choose to rewrite, it could very well be that the next new developer you hire after you're done will
 sing the same song. [If you have something that already works, why would you throw away all the investments you've
 already done?](http://www.joelonsoftware.com/articles/fog0000000069.html)

Any development team working on a product establishes some velocity of development that stabilises after some time. 
What this velocity is, is determined by many factors. For example process, skills, availability and focus have a 
large impact, but also technology stack and code quality of the product itself play a major role. Skills can be trained,
processes can be optimized and availability and focus can be maximized. Code quality can be improved incrementally,
although this can be very time consuming in a large project of poor quality. Changing technology stack is unlikely to 
be possible in small increments. A rewrite can only improve things if the problem is in code quality or technology stack.

Let's look for some ways to quantify the decision.

### Estimations
If developers complain about quality or stack (and they often do) it is important to come up with an estimation to
quantify the costs involved of doing or not doing the rewrite. There are two things that you need to know: 

1. the velocity gain so you can calculate the new cost of adding features, and 
2. the cost of the rewrite itself.

#### Estimating velocity gain

Before you choose between technology stacks, you should take them for a spin. Invest a bit in several candidates, 
including the existing stack and build a small but non-trivial application with them in a spike. Having these spikes 
done by the same team increases the accuracy of the measurements, but it increases the time to come to a decision. 
This can never be hard science, because the conditions of each experiment are naturally different. Once all candidates
have been spiked, you should have a rough idea about the resulting code quality, the time spent, and the learning curve
of the candidate. It gives you information on the relative development speed and the team needed to build on this stack.

#### Estimating the cost of the rewrite

After you've measured the velocity gain, you know the relative velocity of each candidate. The best candidate is 
not necessarily the one with the highest velocity. Code quality, scalability, security, future proofing should also 
be weighed. Since you've also spiked the existing technology, and you've built the application before, you can extrapolate 
the total effort needed. It is usually the case that rewriting is faster than doing it the first time, but for large and 
complex applications the gain is small. Especially if the team has changed, which is often the case.

In addition you will need to assess how much a higher velocity is going to matter business wise. If your product is
feature complete and needs no new features, you might not care at all. But if the product needs regular
maintenance, increased velocity will linearly cut maintenance costs, while giving you more business flexibility.
Unfortunately, experiments to measure this require the full rewrite anyway, so you'll have to use your gut for this one.

After doing these estimations, doing the rewrite becomes a (somewhat) quantified business decision.

### Taking the decision to rewrite or not

First of all, listen to the warnings against a rewrite. Often, especially if you're committed to the development team
yourself, a rewrite seems appealing. The annoying part of your work will suddenly be gone. You won't have to dig around
that crazy code that you wrote when you should have been sleeping. This annoying part however is probably what is
bringing in the cash and the fact that you wrote that code is the reason you have those (ever complaining) users now.
[Rewriting is probably not as appealing as it seems now](http://onstartups.com/tabid/3339/bid/2596/Why-You-Should-Almost-Never-Rewrite-Your-Software.aspx).
But if you are already aware of the risk, still it is important to make a well founded decision, instead of shying away
from the problem.

#### Are you making money?

If so, you have time. The only risk of not doing the rewrite is making less money, which might be unfortunate,
but not catastrophic. The time gives you the option to make reservations to keep the option of a rewrite.
The more you save up, the higher the chances are you can push the rewrite through if you find you need it later. It also
gives you time to slowly refactor the code, if that is still an option.

If you're not making money, these questions are important:

1. **do you have enough money for the rewrite?**
2. **will having different features make your business profitable?**
3. **can you afford building the needed features on the existing stack?**

Estimate the features you need on the current stack carefully. If you can turn the business profitable without a rewrite,
it's very sensible to do that first, and only then consider the rewrite. Doing an operation like a rewrite on a
finite deadline is stressful and risky. What will happen in the not so unlikely even that the rewrite takes longer than
planned? Estimating the risk is a good idea, but erring on the side of safety is usually good advice. There is enough
uncertainty as it is.

Sometimes, after the estimations in your spikes, you will find that doing the rewrite including the new features, is 
less expensive than doing the new features on the existing stack. In that case it seems sensible to go for the rewrite 
immediately. Take a generous safety margin in this calculation. Accuracy of established velocity is always much higher than
estimated velocity based on a spike. But it does happen that the existing stack and code is slowing down development so 
unreasonably, that a rewrite is cheaper than a new feature.

How can such a thing happen you ask? I've used an established stack, we've built it with experienced developers who 
seemed to know what they're doing. Can they have screwed up this bad? The answer is, unfortunately: yes, it happens a lot.

#### Code Supernova

> Code bases grow with each new feature.

> When they grow bugs are introduced.

> When bugs get fixed code bases grow further.

> Larger code bases grow bugs faster.

> Until this exponentially spirals out of control.

> And the code base goes supernova and implodes into a black hole.

This is the natural life of a code base, but the speed of this process is controlled by many variables.
[Great developers](/blog/how-to-recognize-a-great-developer/)
can slow down, and sometimes temporarily reverse this process. But as your feature set increases, this eventually 
destroys the maintainability of the code.

Under the pressure of the first delivery, this process of degeneration accelerates earlier. A conscious rewrite
can create a code base that shows this problem much later. During the rewrite, new frameworks are available, which 
reduce the amount of code that might cause this problem. It could very well be that a rewrite is the only viable option. 
But measure first, before you act. It is by no means a safe or easy way out, it can sometimes be safer and easier than 
continuing on the existing code.

You might find that you're not in a position that demands a rewrite, for example because you're just getting started, 
your problems don't relate to stack and code quality, or the quality can be improved incrementally. If so, you should be
interested in how you can avoid painting yourself in a corner like that. Let me share some ideas on that.

### Avoiding the rewrite

Perfect code doesn't need to be rewritten often. But perfection comes at the price of speed. Balance between perfection and 
speed is something that great developers and great business guys have to find together. Even perfect code sometimes 
needs to be rewritten. As an illustration, imagine a perfect stack of COBOL code running in the bank. At some point 
you might want to run this on commodity hardware at 1% of the price and then it needs to be rewritten in a modern language.

Hopefully in your startup you doesn't have this problem, but it could be that you're trying to scale a Ruby application, and
find that running it in Scala in the JVM is the sensible thing to do. Preventing these kinds of rewrites is not as important
because if you find yourself in such a position, you're very likely already making money, or at least very interesting to
investors. The rewrite you really want to avoid is the one before you have an MVP that actually turns out to be viable.

#### Just barely good enough
Scott Ambler introduced the concept of *[just barely good enough](http://www.agilemodeling.com/essays/barelyGoodEnough.html)*. It's not about making crap and putting it live, it is about finding
exactly what the minimum in MVP means technologically. And then doing the bare minimum, but no less. This is **hard**. If
you do less than the bare minimum in any area, you'll have to make up for it with extra code in another. This extra code 
speeds up the code supernova process. It's better to do a little more than the bare minimum where it counts. 

The [rules of eXtreme Programming](http://www.extremeprogramming.org/rules.html) are awesome at helping developers to
[hug that wall](http://speeddemosarchive.com/quake/qdq/articles/WallHug/). Especially test driven development
and reviewing and refactoring help a lot to keep sailing close to the wind. The good thing about
TDD is that it keeps the option of fixing the code by refactoring open a lot longer. 

The other thing that really helps is modularity. It pays off to cut the code into modules and keep as many stateless as you 
can and keep only one or a few stateful modules. If the API's between modules are clean, you can do modular replacements,
and if the stateful modules are few and simple, it cuts down the migration problems when you have to change them. Be mindful 
that the effect of modularity is not to make a rewrite easier, but to allow less drastic continuous changes to prevent
needing a rewrite at all.

If you're a business person, hopefully it has become clear that decisions to do a rewrite, but also decisions to prevent it,
are as critical to business as the decision to add that new killer feature. If you're a developer, I hope that you'll have 
more patience if you don't get budget for a rewrite yet. Sometimes it is actually smarter to suck it up and stick with the 
program. Understanding the equation and doing the measurements is the mature thing to do here.

[Tweet](https://twitter.com/intent/tweet?screen_name=StarterSquad) if you have an opinion.