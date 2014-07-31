---
layout: post
title: How to behave as a developer in a Distributed Team
author: Iwein Fuld
tags:
- distributed teams
- online collaboration
- development
---

I wrote earlier about [our way of doing distributed development][1]. The learning continues. In this post I explain
 the rules that we apply to ourselves to keep the team flow and collaboration going.

These are the rules that make it possible for StarterSquad to deliver *high quality MVPs*.
The rules are short, and easy to remember.

If you're part of a distributed team, you can introduce these rules and you'll see that things get better quickly.
If you're managing a *startup* company's development and you're thinking of setting up a distributed team, you could
add these rules to the mix from day one. Adapt them to your needs and do let me know if you learn something interesting.

Rules of working with a *Distributed Team*
----------------------
These are the practical steps to follow to improve chances of success of yourself as a developer, your team, and
the *startup* you're building software for.

### 1. *Estimate* a task before you start
It's important to show progress to the rest of the team and the client. [Estimate the complexity][3] work you expect to be in
front of you. Make sure you can actually finish and commit before your time is up.

### 2. Uphold 4 eyes principle
No code can go to production before being looked at by at least two people. We all suffer from blind spots from time to
time. To ensure this:

- we use pull requests by default,
- we may merge without a PR only if we're pairing,
- when pairing just local feature branch is OK too
- when we create a pull request, make sure someone else **closes it in 24h**

We've made a conscious choice that merging immediately after pairing is OK. [Pairing does not fully replace a code review][2]
(the goals and results are very different),
but when working with startups, speed is often more important than avoiding risks. Usually getting quick feedback on the
feature is of higher value to the client than a potential snag in the implementation. Considering the fast turnaround
of StarterSquad we can usually fix an issue in a production application in a matter of hours.

If the code we're working resembles high business risk for the client, we tighten the rules and spend a bit more time.

### 3. Respect Work in progress (WIP) limits
We use a kanban board in our team for each client. In the lanes we uphold strict WIP limits to avoid clogging up the
flow. When a WIP is reached, communication in the team increases to resolve the blockage. This smokes out issues that
cause the clogs.

### 4. **Favor Pairing over working alone**
This is the most important rule of all. This rule means that to start work you:
1. look to help someone else first;
2. if nobody is available, then find a task of your own;
3. keep hailing to find a pair programming buddy

As you can see, communication is enforced from the beginning any developers workday. The knowledge sharing resulting
from pairing is invaluable.

[1]: /blog/work-distribution-sweet-spot/ "Distributed development"
[2]: http://prezi.com/_pmtf7noq3ur/?utm_campaign=share&utm_medium=copy&rc=ex0share
[3]: /blog/startersquad-pricing-model/