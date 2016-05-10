---
layout: post
title: My First Package
date: 2014-09-04 10:14:00 -04:00
tags:
- debian
---

I got my first package uploaded to Debian this week. That package is winetricks. It was orphaned and I adopted it. Now the lastest version (0.0+20140818+svn1202) is available in sid and should migrate to testing in nine days.

I moved the vcs from collab-maint to [a personal repo](http://anonscm.debian.org/cgit/users/josephbisch-guest/winetricks.git/), since I don't have access to collab-maint.

I also have a sponsor for slowaes. It is also a package that was orphaned that I am adopting. The changes I made are more minor than those for winetricks. Besides adding myself as a maintainer, I just fix some lintian warnings. Slowaes should be uploaded soon.
