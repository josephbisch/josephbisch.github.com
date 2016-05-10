---
layout: post
title: New Laptop
date: 2015-12-13 20:23:00 -05:00
tags:
- laptops
- arch
- linux
---

I got a new laptop. It is the HP Pavilion 15t. The model number is 15t-ab100 and the SKU is L8V46AV.

I got the i5 processor with 8 GB RAM and 1 TB HDD. It was a big upgrade over my old laptop, because I had a first gen i3 in the old one and this has a Skylake processor.

I initially tried running Debian via LiveCD on the laptop, but it was an uphill battle getting the newer hardware working. I could have built the latest kernel myself on Debian, but I opted to install Arch. Most of the hardware ended up working fine with the 4.3.1 kernel that was in Arch testing at the time. I still ended up compiling the 4.4.0-rc3 kernel to get the very last outstanding hardware working, such as HDMI output.

Don't forget to enable the virtualization option in the UEFI if you are going to use KVM.
