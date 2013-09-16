---
layout: post
title: AngularJS + RequireJS
author: dmitry
tags:
- tdd
- javascript
- angular
- angularjs
- requirejs
- require
---

## Why?
Working with Angular you could worry about a good way to organize code. There are already great how-tos on that, check out this mainly theoretical [post][1] by very practial Brian Ford and this practical [guide][2] by Cliff Meyers if you haven't already.
I'm not going to talk about it more. I'll share the way I'm managing code in Angular applications with RequireJS.

Continue reading if you want:

  - not to worry about including script tags in the right order when building Angular apps;
  - to load your application asyncronously;
  - to be able to compile code into single minified js file;

## Who?
I assume that you already know what AngularJS is and at least heard about AMD and RequireJS. To illustrate approach I'll enable RequireJS for [Angular Seed][3] and explain process as much as possible. As Angular Seed structures code splitting files by type so I will do. It's also possible to apply this approach if you write modules by entities (you'll see it from `app.controllers` module implementation).

## How?

### Angular Seed Project
Let's check how Angular Seed structures code. Check out
example [in browser][4] and [on github][5] (copied from Seed):

  - `app.js` file to bootstrap and set app config;
  - actual implementation files - controllers, services, directives and filters;
  - `index.html` with all script tags included in right order;
  - or `index-async.html` that makes use of `angular-loader.js` and 3-rd party `$script` loader library to load dependencies asyncronously.

Let's start the party.

### Add RequireJS
Checkout example [in browser][6] and [on github][7].

#### Dependencies installation
I used [bower][8] to do this for me.
See `bower.json` file:

{% highlight json linenos %}
{
  "name": "AngularJS + RequireJS Example",
  "version": "0.1",
  "main": "index.html",
  "ignore": [
    "**/.*",
    "libs"
  ],
  "dependencies": {
    "angular": "~1.0.8",
    "requirejs": "~2.1.8",
    "requirejs-domready": "~2.0.1"
  }
}
{% endhighlight %}

Put `.bowerrc` file next to `bower.json`, run `bower install` and - puff, we have all we need under `libs` folder.

#### index.html
Destruction is a good start. Open Angular Seed's `index.html` and remove all the `<script>` tags. Looks cleaner, isn't it? Now switch to creation mode and add single script before closing `</body>` that will load RequireJS and instruct it to look for config in `js/main.js` with [data-main attribute][9]:

{% highlight html linenos %}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My AngularJS AngularJS + RequireJS App</title>
  <link rel="stylesheet" href="css/app.css">
</head>
<body>
  <ul class="menu">
    <li><a href="#/view1">view1</a></li>
    <li><a href="#/view2">view2</a></li>
  </ul>

  <div data-ng-view></div>

  <div>Angular Require seed app: v<span app-version></span></div>

  <script src="lib/requirejs/require.js" data-main="js/main.js"></script>
</body>
</html>
{% endhighlight %}

That's it. You can close `index.html` now, as there is nothing more we can add to it.

#### main.js
It's time to setup RequireJS config.

{% highlight javascript linenos %}
require.config({

	// alias libraries paths
    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
        'angular': '../lib/angular/angular'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        }
    },

    // kick start application
    deps: ['./bootstrap']
});
{% endhighlight %}

What just happened? In [paths][10] we set aliases for libraries and plugins used, then defined that angular should be [shimmed][11] and said that config should load `bootstrap.js` to start application.

#### bootstrap.js
We're bootstrapping angular manually now, that's what bootstrap.js is for. Note that you don't need `ng-app` in your html anymore.

{% highlight javascript linenos %}
/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'app'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
{% endhighlight %}

We use [domReady][12] RequireJS plugin to make sure that DOM is ready when we start app. Note that before doing that we're actually loading `app.js` dependency, there main application is defined.

#### app.js
It wraps definition of top-level app module and loads its submodules dependencies.

{% highlight javascript linenos %}
define([
    'angular',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.services',
        'app.controllers',
        'app.filters',
        'app.directives'
    ]);
});
{% endhighlight %}

We agreed to have 4 modules by files types: controllers, directives, filters, services - we require these modules to be loaded before defining main module.

#### Module structure
Module consists of 3 parts:

  - definition;
  - component;
  - loader.
  
  Let's use `app.controllers` module as example.

#### module definition (`controllers/module.js`)
It's just like top level `app.js` - defines module.

{% highlight javascript linenos %}
define(['angular'], function (ng) {
    'use strict';
    return ng.module('app.controllers', []);
});
{% endhighlight %}

This file will be used by module components to attach themselves to (see next section).

#### module loader (`controllers/index.js`)
That's just an empty define block with all module components included. You don't need to mention `module.js` here as it's already required by components. Loader is included as dependency of top level `app` module. And that's actually how RequireJS knows about files to load.

{% highlight javascript linenos %}
define([
    './my-ctrl-1',
    './my-ctrl-2'
], function () {});
{% endhighlight %}


#### module components (`controllers/my-ctrl-1.js`)
In case with `app.controllers` module it'll be controllers. Example of controller wrapped in define is:

{% highlight javascript linenos %}
define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl1', [function ($scope) {}]);
});
{% endhighlight %}

Note that we used reference to `./module.js` to attach component to its module.


## Conclusion
That's it. Now you have working Angular application powered by RequireJS. You can enjoy power of not tracking order of your scripts anymore.

In next articles I'll show you how to test this application properly, how to compile it into single file and automize workflows wiht grunt. All this is already enabled in [StarterSquad Angular + Require Seed][13] you can check it out if you can't wait (sorry I'm a slow typer).

Take care and don't forget to have rest from perpetuum coding.

[1]: http://briantford.com/blog/huuuuuge-angular-apps.html
[2]: http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript
[3]: https://github.com/angular/angular-seed
[4]: http://www.startersquad.com/examples/angularjs-requirejs-1/
[5]: http://TODO
[6]: http://www.startersquad.com/examples/angularjs-requirejs-2/
[7]: http://TODO
[8]: http://bower.io
[9]: http://requirejs.org/docs/api.html#data-main
[10]: http://requirejs.org/docs/api.html#config-paths
[11]: http://requirejs.org/docs/api.html#config-shim
[12]: https://github.com/requirejs/domReady
[13]: https://github.com/StarterSquad/angularjs-requirejs-seed/
