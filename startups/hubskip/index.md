---
layout: project
title: Hubskip
---

Hubskip sells city trips to all major destinations in world. They focus on a prediction system for flight prices.
StarterSquad developed the online shop, including search, payment and integration with several b2b providers.

Within 8 weeks we have built the full solution, right on time to [demo](http://blog.hubskip.com/post/45383254282/launch-festival-theres-nothing-quite-like-it) at [the Launch Festival 2013](http://festival.launch.co/).

### Front-end

The&nbsp;front-end is&nbsp;based on our [AngularJS](https://github.com/StarterSquad/angularjs-requirejs-seed)&nbsp;+&nbsp;RequireJS&nbsp;seed&nbsp;project. The&nbsp;combination of RequireJS and Angular allows us to&nbsp;build large code bases without worrying about ordering in&nbsp;the&nbsp;script tags. In&nbsp;addition it allows for compression of the&nbsp;javascript into a&nbsp;single or several minified files.

AngularJS helped us to&nbsp;keep the application code _really_ simple. Some&nbsp;metrics: max number of lines in a&nbsp;single controller is 257, average number is 91 lines and the median is less then 50 lines! You&nbsp;can&nbsp;say: "Yea,&nbsp;bla-bla... These guys moved most of their logic to services then". Nope. Maximum service file size is 129 lines and average is 51. Can&nbsp;you&nbsp;say&nbsp;[KISS](/_/images/posts/kiss.jpg)?

### Back-end

The REST backend was done in Scala with Spray.

It was a hard choice among various technologies, but in the end the deciding factor was the fact that both **S**cala and **S**pray begin with the letter **S**. As usual we were right - they made a perfect fit.
