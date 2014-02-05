---
layout: post
title: How to build a rest server in less than a minute
author: Albert Sikkema
tags:
- development
- productivity
- javascript
---

Recently I needed to interact with a 3rd party webservice that wasn't finished yet. You've probably been there.
We decided to fake it until it is done. One option is to stub it away in the app, but we figured it would be nice
if we created a *real* webservice instead so we can test the complete interaction.

Now I'm a Scala guy and I usually would pick spray.io or something similar to quickly bootstrap a rest service.
However, even if you copy/paste it will still take a considerable amount of time to get the sbt and spray code in place
and have the service up and running. I wanted something faster to setup and more lightweight. I considered python and then
 also looked at Nodejs.
Since everyone in the team already has node setup (we use grunt for our builds) this makes a good candidate. I was blown away
by how easy and fast it is to get a rest server running in node. Here's what it takes:

    > nmp init
    // Creates a package.json (project file)
    > npm install express –save

Now create a index.js file with the following content:

    var express = require('express’);
    var app = express();

    // json object with some data to return.
    var ping = { “version”: “1.0”, “name”: “hello world rest service”};

    app.get('/ping', function(req, res) {
      res.json(ping);
    });

    app.listen(4730);

That's it, 6 lines of code! Run it with:

    > node index.js

Even better: Install supervisor with:

    >npm install supervisor and run it with:
    > supervisor index.js

This will reload changes directly.

###Takeaways

I cannot think of any other language/tool which is faster in terms of bootstrapping a rest server, can you?
Also if you work with json (who doesn't) javascript is a natural fit. Post/Put is also extremely easy.
Would I use it for a production rest server? Probably not, I'm sold on scala and prefer static typing.
Is that a good reason? Probably not.