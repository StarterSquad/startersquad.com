---
layout: post
title: Getting ready for Continuous Delivery
author: Iwein Fuld
tags:
- development
- continuous delivery
---

Several of the most successful startups of the last decade use Continuous Delivery. It is used for example by Facebook, Twitter, Github just to
name a few. There are huge benefits to it, so it might be a good choice for you too. In this post I'll describe what
you need to do to get ready for Continuous Delivery, and what it means for your organisation if you use it. If you're
too busy to read this and do it yourself, [just ask for our help](/contact) and we'll do it for you.

## What is Continuous Delivery?
Every project follows a release cycle. Changes are made to the source code, they are packaged tested and deployed to
production. This can be a fully manual process, but packaging, testing and deploying can all be automated. If they are,
and all changes flow to production automatically, Continuous Delivery is happening. There are some details to it, let's
examine them one by one.

### 1. Continuous Integration
Continuous Integration is about the automation of packaging and unit testing at a minimum. CI is well understood since
eXtreme Programming came about in the nineties. Since then many CI solutions have matured, like Jenkins, Bamboo, Trevor.

If code is developed rigorously using Test Driven Development, a green
build gives a lot of confidence that the code is not broken. It is not a guarantee however. Well tested code that
compiles, could still have behavior that is undesirable from a functional or business perspective. Also the application
 might not work with the technical infrastructure around it in production. To lower these risks
 we need to test the application fully deployed, in a production like setup. This can be automated as well.

### 2. Automated Acceptance Testing
Automated Acceptance Tests simulate user behavior on a production like system. This can be done with browser based
test frameworks (often built as an extension of Web Driver), or simulators on OS level. These tests are typically
harder to maintain and more expensive to run than unit tests, but they also mitigate many more risks. If you want to do
Continuous Delivery these tests are essential, unless of course you don't care if things break on production. The last
point may seem insane, but there could well be a valid business decision to have users do regression testing. This might
not be a good idea for a banking application, but for something like Facebook or Twitter, slowly rolling out the
app and measuring the problems on the new version in production is reasonable. You risk losing a few visits, or even
users, but you save a bunch in AAT maintenance.

### 3. Automated Deployment
When you're confident that you find all problems automatically in time, you can automate the deployment. The tools here
are a lot less mature than for CI, but there are some out there. At StarterSquad we use
[our own Continuous Delivery toolbox: Prudentia](https://github.com/StarterSquad/prudentia) (kudo's Tiziano Perrucci).
Prudentia is a collection of CI tools and it has a CLI for automating deployments. Xebia offers an enterprise grade system 
[Deployit](http://gallery.herokuapp.com/component/deployit) and there are a
couple of other competitors in that space. Some companies roll their own based on Puppet, Chef, Ansible, or just a bunch
of handcoded scripts.

### 4. Automated Non-Functional Testing
Of course not only functional requirements need to be verified. If scalability and performance are important, there
should be tests for that too. Again there are a lot of automation tools out there to do these types of tests, but for
for example security testing you theoretically can't do automation. If security is a large business risk, this might cancel
the whole CD plan for (parts of) your product. Let's hope you can still use it for most parts of your app.

## Bringing it all together
When you have automated all the steps you need, you need to orchestrate it so that everything is run in order, and
deployments only happen if the tests are positive. This can be done with dependent build from your CI server. Both
Jenkins and Bamboo have excellent support for this. If you set it up right, you can:

 1. kick off a CI build from a commit hook,
 2. then provision a test server,
 3. then run the AAT build targeting the test server,
 4. then run the non-functional tests targeting the test server,
 5. and finally deploy to production.

If you get there you'll be among the lucky few, a crowd that is rapidly expanding. But why is Continuous Delivery
so popular?

## Advantages of Continuous Delivery

Continuous Delivery is a serious investment. In some cases it can double the cost of a project. It is not something you
should do once and then forget about, it needs to grow with your organization and needs constant focus and attention.

On the upside, it makes some things possible that are very powerful:

1. Get features out one by one, in hours, not weeks.
2. Fast feedback from end users while developers are still into the code.
3. Less overhead of managing of multiple versions and branches of the software.
4. More robust deployment procedure.

The last point might deserve som elaboration. [_If it hurts, do it more often_](http://www.aaronsw.com/weblog/dalio)
is a well known Agile meme. This isn't always a good idea,
but just like training your running skills training production deployment is something you do by repetition. If you
deploy often, you must integrate often. And intermittent failures get spotted. This avoids nasty surprises when you
go live when it really counts and you have a killer feature to deliver.

When people say 'Put it out there', Continuous Delivery is what they want. Releasing blindly often is a recipe for
disaster, so make sure you have the infrastructure for it, and do it in a controlled way. If you need us, we're here to
help. [Get in touch](/contact)!