---
layout: post
title: Namecoin Block Format
date: 2014-12-15 07:25:00 -05:00
tags:
- namecoin
- cryptocurrency
---

This article assumes familiarity with the Bitcoin block format.

Namecoin blocks starting with block 19200 may have some extra data in them. These blocks with extra data are called AuxPOW blocks for Auxiliary Proof of Work. The extra data appears between the nonce and txn_count. This extra data appears when a block has been merged-mined for both the Bitcoin and Namecoin networks.

It is important to note that a Namecoin block after block 19200 may not be merged-mined, though most are. An important thing to note is that the hash of the block header for an AuxPOW block does not necessarily need to start with leading zeros like a regular block header's hash (and generally it won't start with leading zeros).

Something that confused me for a while was how to determine whether a block from block 19200 on is merged-mined or not. It turns out that you can use the version in the block header to determine that. If a block is merged-mined, the 0x100 digit will be set. The digit 0x10000 is used to signal that the auxiliary chain being merged-mined is Namecoin.

For more information including helpful diagrams, see the [Bitcoin Wiki page on merged-mining](https://en.bitcoin.it/wiki/Merged_mining_specification).
