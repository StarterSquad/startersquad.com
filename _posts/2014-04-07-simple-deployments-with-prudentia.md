---
layout: post
title: 'Automated deployment with Prudentia'
author: Tiziano Perrucci
tags:
- continuous delivery
- development
---

A few months ago Iwein wrote an article about Continuous Deployment and what it takes to get there. It's about time
to get practical about that. How do you do it? It's really simple. In this howto we'll show you how to deploy a
simple Jade application to Digital Ocean with Prudentia. But first let me explain the example a bit better.

## The Jade sample application
This application is a simple one pager built in Jade and Sass (we've actually used it for a client). Development is
done by running `gulp watch` and changing the jade templates and scss files as needed. The development cycle is just
change and refresh the browser (which can also be done automatically of course, but I digress).

##Step 1. Define the deployment
Create a directory called deployment in the project and add the following files to it:

- list here

That's it, now you're ready to deploy anywhere that prudentia has adapters for. Let's start with Digital Ocean,
because that comes out of the box.

##Step 2. Create a box

##Step 3. Deploy

##Step 4. Connect to an existing box with SSH

#Step 5. You're done
So what did you do? You just:

1. added a deployment description in the deployment directory,
2. you provisioned a brand new digital ocean box
3. you deployed your app there in a single command, and
4. you can do it again and again in a predictable manner

Later we might tell you about phoenixes and other mythological creatures. This will do for now. Happy hacking! Let us
know if you run into trouble!