---
title: Eddie's Back!
date: 2017-07-16 13:33:00
description: I finally picked up my blog again. After 2 years of blatant neglect, I picked up the shambles of the (now) previous version and started from scratch.
---

I finally picked up my blog again. After 2 years of blatant neglect, I picked up the shambles of the (now) previous version and started from scratch. To avoid rocking the boat too much and speed up its deployment, I decided to keep it as a static website and deployed with [GitHub Pages][github-pages]. My initial goal was to move away from [Jekyll][jekyll] and adopt a Python based static website generator. The ones I tested were:

* Combination of [Flask][flask] + [Flask-FlatPages][flask-flatpages] + [Frozen-Flask][frozen-flask]
* [Hyde][hyde]
* [Pelican][pelican]
* [Lektor][lektor]

I could've tried many more (e.g. Hexo, Hugo, Brunch, Middleman, Harp, Expose), but instead focused on these 4 options and none of them made things as easy as Jekyll to quickly deploy a site. The main goal of having this blog is to be able to write and not having to worry (too much) about making several changes in the underlying structure just to accommodate slight changes in the overall look and feel.

Alas, after many trial and errors, I moved back to Jekyll. And it took me just a couple of hours to create a new website from scratch and import the content and custom settings from the old blog. As I put everything together with the latest versions of [HTML5 Boilerplate][html5-boilerplate] and [Bootstrap][bootstrap], I made a few UI changes:

* Removed the Bat-signal ASCII art from the page header. I'll probably bring it back again, but not sure how
* Removed the vertical menu on the left side. It'll come back, but in a different format
* Removed the `border-radius` from the `div` elements with the post boxes
* Removed the footer from the post boxes
    * The permanent link to the post that was available under the "Follow the white rabbit" link has been migrated to the post title
    * The buttons to share the post in several social media outlets are gone as well. Honestly, they made me feel like a bit of an attention whore. I just want to write stuff and, if people choose to read it and share, that's fine. If not, that's fine as well

There are still quite a few changes I need to make. Migrating to Bootstrap 4 alpha seems to have led to an overall quirky layout, given that I barely touched the custom CSS file I brought over from the previous version of the blog. Font size, padding, margins... lots of stuff to review.

One additional thing I changed was the license. I moved to the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 Internacional License][by-nc-nd-4.0]. Still not sure if I chose the right license, as the more permissive [Creative Commons Attribution 4.0 International License][by-4.0] also seems quite friendly.

Going back to my last post (back in April 2016), I'm definitely going to be much more active than I've been so far by posting stuff about several topics. At least, I intend to.

[github-pages]: https://pages.github.com/
[jekyll]: https://jekyllrb.com/
[flask]: http://flask.pocoo.org/
[flask-flatpages]: https://pythonhosted.org/Flask-FlatPages/
[frozen-flask]: https://pythonhosted.org/Frozen-Flask/
[hyde]: https://hyde.github.io/
[pelican]: https://blog.getpelican.com/
[lektor]: https://www.getlektor.com/
[html5-boilerplate]: https://html5boilerplate.com/
[bootstrap]: https://getbootstrap.com/
[by-nc-nd-4.0]: https://creativecommons.org/licenses/by-nc-nd/4.0/
[by-4.0]: https://creativecommons.org/licenses/by/4.0/
