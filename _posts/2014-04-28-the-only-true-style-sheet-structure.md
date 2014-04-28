---
layout: post
title: 'The Only True Style Sheet Structure'
author: Vadim Borodean
---

## Preface

### Strictness Pattern

[Strictness Pattern](http://tohtml.it/post/34285787881/mcss-unstrict-mode) by Robert Haritonov...

## Paradigm

Paradigms:

- [SMACSS](http://smacss.com/) (Scalable and Modular Architecture for CSS),
- [OOCSS](http://oocss.org/) (Object-Oriented CSS),
- [BEM](http://bem.info/) (Block, Element, Modifier),
- [MCSS](http://operatino.github.io/MCSS/en/) (Multilayer CSS).

### Naming Conventions

### Modifiers

### Reset/Foundation Layer

**Reset layer** (also known as **foundation layer** or **zero layer**) is the very essence...

Default style sheets:

- Chromium: [html.css](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css);
- Firefox:
  [html.css](http://hg.mozilla.org/mozilla-central/file/tip/layout/style/html.css),
  [forms.css](http://hg.mozilla.org/mozilla-central/file/tip/layout/style/forms.css);
- WebKit: [html.css](http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css).

Resets:

- [Normalize](https://github.com/necolas/normalize.css/),
- [Eric Meyer’s Reset](http://meyerweb.com/eric/tools/css/reset/),
- [HTML5 Doctor Reset](http://html5doctor.com/html-5-reset-stylesheet/),
- [Yahoo! (YUI 3) Reset](https://github.com/yui/yui3/blob/master/src/cssreset/css/cssreset.css).

Frameworks:

- [Bootstrap](http://getbootstrap.com/),
- [Foundation](http://foundation.zurb.com/),
- [Topcoat](http://topcoat.io/).

{% highlight scss %}
*,
::before,
::after {
  box-sizing: border-box;
}
{% endhighlight %}

### Base Layer

**Base layer** or **first layer** is...

{% highlight scss %}
.ic {
  @include size(16px);
  background: inline-asset('base/icon/background.png');
}

.btn {
  height: 24px;
  padding: 8px 12px;

  .ic {
    margin: -8px 0;
  }
}
{% endhighlight %}

{% highlight jade %}
ul.menu
  li.menu_i: a.menu_a(href="/tags") Tags
  li.menu_i: a.menu_a(href="/about") About
{% endhighlight %}

{% highlight scss %}
.menu {
  @extend %clearfix;
  list-style: none;
  margin: 0;
  padding: 0;

  &_i {
    float: left;

    + & {
      margin-left: 12px;
    }
  }

  &_a {
    display: block;
  }
}
{% endhighlight %}

### Project Layer

**Project layer** or **second layer** is...

{% highlight scss %}
.header {
  background: #FFF;
  height: 70px;

  &_menu {
    float: right;
  }
}
{% endhighlight %}

{% highlight jade %}
.header
  ul.header_menu.menu
    li.menu_i: a.menu_a(href="/tags") Tags
    li.menu_i: a.menu_a(href="/about") About
{% endhighlight %}

{% highlight scss %}
.header {
  background: #FFF;
  height: 70px;

  &_menu {
    float: right;

    .menu_a {
      color: #000;
    }
  }
}
{% endhighlight %}

### Cosmetic Layer

**Cosmetic layer** or **third layer** is...

{% highlight scss %}
.valign-baseline {
  vertical-align: baseline !important;
}

.valign-middle {
  vertical-align: middle !important;
}
{% endhighlight %}

{% highlight scss %}
@include cosmetic(valign, vertical-align, (baseline, middle));
{% endhighlight %}

### Context Layer

**Context layer** is...

{% highlight scss %}
.backdrop {
  opacity: 0.67;

  .ie8 & {
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
  }
}
{% endhighlight %}

{% highlight scss %}
.hidden-phone {

  @media (min-width: 480px) {
    display: none !important;
  }
}
{% endhighlight %}

## Code Style

[Idiomatic CSS](https://github.com/necolas/idiomatic-css)

## Tools

Tools:

- [Autoprefixer](https://github.com/ai/autoprefixer)
- Data-uri
- [Sass](http://sass-lang.com/)
- SVG
- Web Fonts
