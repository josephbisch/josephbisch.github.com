---
layout: post
title: A Summer of Code
tags:
- debian
- debian-soc
---

Yesterday I found out that I was accepted into the Google Summer of Code program. I was accepted by Debian and will be working on a Metrics Portal. You can [view the announcement on the Debian blog](http://bits.debian.org/2014/04/welcome-gsoc-students-2014.html).

The Metrics Portal will have a database that stores historical data on Debian. It will have an interface to add/remove metrics and a web interface to show the metrics graphically. It will utilize cron jobs to update the metrics and generate graphs. The web interface will utilize JavaScript to allow the client to overlay graphs for comparison purposes. An optional task is for me to create a Debian Package of the portal code for easy deployment of the portal.

I have decided to use jinja2 as the templating language, flot.js as the JavaScript graphing library, JSON for data, SQLAlchemy for database access, and marshmallow to serialize Python objects to JSON for use with flot.

You can read more about the Metrics Portal by reading the [project listing](https://wiki.debian.org/SummerOfCode2014/Projects/DebianMetricsPortal) or by reading [my proposal](https://wiki.debian.org/SummerOfCode2014/StudentApplications/JosephBisch).

To keep up to date on my progress, you can either read this blog, or you can read the [soc-corrdination mailing list](http://lists.alioth.debian.org/mailman/listinfo/soc-coordination).
