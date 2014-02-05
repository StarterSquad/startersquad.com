---
layout: post
title: The bare minimum you should know about images on the web
author: Iwein Fuld
tags:
- web design
-
---


Putting your images *online* in the *right format* can have a huge impact on your conversion. It is worth much more money
than you'd realize at a first glance. Page load times are almost primarily controlled by image load times and conversion
is mostly controlled by visual guides, supported by… you got it: images.

Everybody is on the web these days. The average quality of the content has been slowly dropping since the beginning of
the web. The fact that you're here means you're not part of this trend. Congratulations!

Of course you don't need to know anything about images if you're selling cookies, but if you're selling cookies online,
not knowing what images to upload will cut into your revenue harder than not knowing what flour to use, so if you do
anything with the web please read.

The three formats to remember are: **png**, **jpeg** and **gif**. The three drivers to remember are: looks, compression,
features. Of course there are other formats and drivers, but you don't need to bother with those details.

Size 'em right
-----
The first thing you need to do before publishing an image on the web is figure out it's _exact size_ in the browser. The
 reason for this is that compression causes artifacts, and if you resize after compression, these artifacts can be enlarged
 in relation to the rest of the image. Resizing should be done on the highest quality image, so that you know the exact
 pixel by pixel target image before you compress. This article doesn't describe vector formats that can scale to arbitrary
  resolutions.


PNG
---
The png format is the successor to gif. It improves the parts of gif that matter most, but it removes some features.

###looks
Png looks as good as gif, or better. Gif could sometimes reduce the quality when you saved a file multiple times. Png
 removes this problem. Because png is a lossless format, the image should look as sharp as the vector original. With the
 caveat that it doesn't scale of course.

###compression
The compression for png is similar to gif. It is based on a palette, which means that images with low color complexity
compress better than images with many different colors. Use [ImageOptim][2] to make sure you have
optimal compression of your png files.

###features
Like gif, png supports transparency. Unlike gif it also supports opacity. Png does not have animation like gif does.

GIF
---
Gif is the precursor for png. It has some quirks that were fixed in png, and it is supported by ancient browsers. If you
have a requirement other than animation that forces gif on you you're in for a treat. That said, modern browsers can
render gif's without problems and it has most of the advantages of png.

###looks
As png, images come out sharp from a gif compression, because it is lossless. Well… mostly lossless.
###compression
Like png gif uses a palette for compression, so images with few colors compress very well. Png compression is a bit
better (up to 25%)

Gif compression allows for some distortion of the image, and since the algorythm isn't open, different implementations
exist. When combining the right algorythms you can distort your image into a grey square iteratively by just
opening and saving it.
###features
Oh, the animated gifs. They bring back memories, and they are still used to market certain types of physical exercises
 because often ad- and flash blockers will happily pass through a harmless gif. Maybe you really need an animated gif
 it's surely smaller than a youtube video. But streaming some high quality video usually makes much more sense
 nowadays

Bottom line: gif is OK'ish but prefer png if you can.

JPEG
----
[JPEG uses wavelets][1] to compress images. There is some reasonably tricky math involved (1st year uni), which I won't go
into. I'll just describe the effects here.
###looks
The wavelet compression is lossy and it creates a sort of echo for sharply contrasted lines. So on an
edge of a black square the jpeg compression will show a lighter smudged line on the black, and a darker smudged line on
the white, both parallel to the squares edge. You can imagine this doesn't look great for diagrams, schematics, sketches.
On photographs it's usually less annoyingly visible, because it is unusual to have monotonous squares, straight lines and
hard edges in photographs. If you're creating architecture photographs, or you took a picture of a chess match, you
might find that jpeg compression is hardly tolerable. Probably jpeg is still the best format, but the compression factor
will be lower.
###compression
JPEG compression doesn't use a palette, so on images with few colors the compression factor is lower than of png. On
photographs however, the compression can be awesome. Usually jpeg is the better compression on photographs.

Decision table
--------------

<table style="width:350px">
<colgroup>
       <col style="width: 50%;"/>
       <col style="width: 50%;"/>
    </colgroup>
<thead>
<tr>
<th>type of visual</th><th>recommended format</th>
</tr>
</thead>
<tbody>
<tr>
<td>logo</td><td>png</td>
</tr>
<tr>
<td>diagram</td><td>png</td>
</tr>
<tr>
<td>icon</td><td>png</td>
</tr>
<tr>
<td>animation</td><td>gif</td>
</tr>
<tr>
<td>photograph</td><td>jpeg</td>
</tr>
</tbody>
</table>

[1]: http://www.whydomath.org/node/wavlets/jpeg2000wt.html
[2]: http://imageoptim.com/