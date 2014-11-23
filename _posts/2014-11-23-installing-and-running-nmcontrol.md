---
layout: post
title: Installing and Running nmcontrol
date: 2014-11-23 03:25:00 -05:00
tags:
- namecoin
- cryptocurrency
---

I recently installed the program nmcontrol. Doing so was non-trivial, so I am documenting the process I took here.

For those that don't know, nmcontrol is a daemon that communicates with namecoind and provides services. In particular, I wanted to use the DNS service it provides for accessing .bit domain names. The .bit TLD is used by Namecoin. Namecoin is a decentalized key-value store and among its uses is decentalized DNS.

1. Run `git clone https://github.com/namecoin/nmcontrol.git`.
2. `cd nmcontrol`
3. Make sure namecoind is running in the background. You can do so by running `namecoind -daemon`. Also make sure you have a namecoin.conf file in ~/.namecoin/namecoin.conf prior to running namecoind.
4. You need to run nmcontrol as root for the DNS server to run on port 53, but you probably have Namecoin installed for your non-root user. So you need to link /root/.namecoin to point to ~/.namecoin. So run `sudo ln -s ~/.namecoin /root/.namecoin`.
5. Run nmcontrol by entering `sudo python nmcontrol.py`.
6. Now you need to make sure your DNS is configured to use 127.0.0.1. You only need 127.0.0.1, because nmcontrol will use Google DNS servers to resolve non-.bit domain names. The exact instructions depend on which method of managing your network connections you use. I use Network Manager, so I right-clicked on the Network Manager applet and selected "Edit Connections...". Next I clicked on "Wireless", selected my network, and clicked on "Edit...". I went to "IPv4 Settings", and changed the "Method" to "Automatic (DHCP) addresses only". In "DNS servers" I entered 127.0.0.1 and clicked on the "Save..." button. Then I clicked on "Close".
7. Now you need to restart Network Manager so that the changes will take effect. On Debian Wheezy, go to the terminal and type `sudo service network-manager restart`.
8. Now go ahead and browse .bit domain names!
