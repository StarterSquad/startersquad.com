---
layout: post
title: '3 ways to finance your dream Start-Up'
author: Iwein Fuld
tags:
- development
- product development
---

You're working on your product, the first version of your MVP is done and the learning starts. Suddenly you find that
your development team is so busy with the new features that they don't have time to continuously improve the existing
product. A customer calls you and shows you how he is not happy with your software. "That's not a bug!",
the developers go. As a product manager you have the tough choice to make between moving forward and gaining
traction. How can you keep the developers aligned with your customers? The answer is hiding in proper version
management, and this is something both developers and business people tend to get wrong. The most annoying symptom is
the discussion if something is a bug or a feature. I'm here to prevent this discussion.

## What's a bug?
A long time ago in a computer long forgotten, a bug performed seppuku on a pair of electrical conductors near a
logical gate. The bug's dead body conducted some electricity, but it would not always be enough to make the gate seem
 closed, but sometimes it would. This would coincide more with the weather than with if the gate was supposed to be
 closed, thereby causing erratic behavior. Since then computer programmers and later lay people have used the word bug
  in many different meanings, most of which are related with undesired behavior of computer programs,
  most of which related with actual insects.

> Bug: undesired behavior of computer program

## What is a feature?
There are many ways to describe what exactly a computer program is supposed to do. We can spec it out in detail as in a
typical _fixed price_ project, fighting an endless battle to avoid scope creep and strictly manage change requests.
We can also keep the features free and use ad hoc changes as they come up to evolve real time to a desired set of
features that comprise the behavior of our program. Or we can do something in between. The definition of a feature
seems simple:

> Feature: desired behavior of computer program

## Change
In some forms of dances, the french word changer is used to signal a change of partners. If product development is
thought of like a dance (in contrast to a walk to a clear destination), this analogy works for me. When you're
dancing, it takes a while to get comfortable with a partner, and when you have to change partners this feels like a
disruption. The reason I believe that people change partners in dancing is because it makes them better dancers in
the long term. In other words, the short term discomfort creates a long term benefit.

When developing a product, the desired set of features changes constantly. What users want a program to do is as
predictable as the weather. As a product manager, you will ask conflicting things from the development team. And as a
 developer you will always run behind the fact. Yesterday's feature is today's bug.

## It's not a bug, it's a feature
This is the thought of a hardworking developer, who sees the fruit of last weeks labor marked as a bug on monday
morning. He's wrong, but is it really fair to mark his hard work as a bug (with all the negativity associated with
that). What's the use of marking something as a bug.

## Bugs get fixed faster, right?
Some people seem to believe that if you can fault someone or something for it, they are supposed to fix it right
now, without taking time out of their schedule (those features need to be done too). This is unrealistic. On the
other hand some developers seem to believe that fixing bugs should take precedence over delivering features. This
might be really stupid from a business point of view. Fixing a bug might imply a huge risk,
over a small return. For this the term 'known issue' was invented. Ewww...

##Everything is a bug, everything is a feature
I've seen many ways of describing what a program should do. Some examples are user stories, job stories, use cases,
scenarios; there are many more. Funny enough, it is quite doable, and actually convenient from a developer's
perspective to describe functionality in terms of bug reports. A good bug report is precise and it follows an easy to
 read pattern describing what is now and what should be. The information in a bug report doesn't fundamentally differ
  from the information in a user story implying the same change. The only two things that are essential,
  are the information on what change needs to happen, and the priority the change has over other changes.

Marking something as a bug says nothing about its priority. Let's stop.

## Release management
Priority at StarterSquad (and many other agile organisations) is marked by positioning a change in a list. The top
has priority. This is a solved problem, and we don't need any special markings to assess priority beyond that. We do
have different release streams however. On the one hand we bundle larger sets of new behavior that only make sense
together in e.g. weekly releases, while we bundle low risk changes to existing functionality in daily or even more
frequent hotfix releases. But not all bugs should be hotfixes, nor should all features wait for the next major
release. So we just stopped marking bugs and started marking things with their target release strategy based on risk
return ratio. I can tell you its very liberating, and it improves the dialog between developers and product managers
by a landslide. Let me know if you have tried something similar, or if you don't believe that it will work!