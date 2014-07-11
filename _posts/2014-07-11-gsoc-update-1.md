---
layout: post
title: GSoC Update #1
date: 2014-07-11 12:30:00 -04:00
tags:
- debian
- debian-soc
---

It has been a couple of months since my last GSoC update and a lot has happened since then.

You can [view the web interface at metrics.debian.net](http://metrics.debian.net). There is a dynamic interface viewable with JavaScript enabled, and a static interface viewable with JS disabled. I am currently working on the dynamic interface.

In the weeks since my last blog post I have accomplished a lot. There is support for pull and push metrics. Pull metrics run on the debmetrics server and pull data from some source. Push metrics run on a remote server and push data to the debmetrics server via HTTP POST. There is flask code and the static interface portion uses a general route, so that the flask code does not need to be modified every time a metric is added. There is a makefile that runs manifest2index.py and manifest2orm.py to generate the index page of the web interface and the SQLAlchemy model code respectively. I have a config file that allows the user to set the location of the manifest, pull_scripts, and graph_scripts directories. I have a debmetrics.wsgi file for easy deployment of debmetrics.

There is a single layout.html that is the base layout for all the other pages.

Nosetests is used for tests. Sphinx and readthedocs are used for the documentation. I wrote a minified_grabber script that downloads all the JS and css files that are not included with debmetrics itself. That helps make deployment easy.

If you want to take a look at the code you can [view the repository](http://anonscm.debian.org/gitweb/?p=users/josephbisch-guest/debmetrics.git;a=summary).

I still have more work to do before the end of GSoC, mostly with the dynamic web interface and packaging of debmetrics.

To keep up to date on my progress, you can either read this blog, or you can read the [soc-corrdination mailing list](http://lists.alioth.debian.org/mailman/listinfo/soc-coordination).
