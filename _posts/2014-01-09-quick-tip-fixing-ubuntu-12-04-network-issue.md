---
layout: post
title: 'Quick Tip: Fixing Ubuntu 12.04 network issue'
date: 2014-01-09 19:00:00
categories:
- Tip
tags:
- Ubuntu
summary: Resoling a common network issue in Ubuntu 12.04 that occurs after an LTS upgrade.
status: publish
type: post
published: true
---
<p>While upgrading an Ubuntu virtual machine from Version 10 LTs to 12.04 LTS, I ran into networking issues with the static IP address and DNS servers. The web server was accessible on the network, however, the virtual machine was not able to ping Google, or download any updates.<!--more--></p>
<p>Errors encountered with this issue:</p>
<ul>
<li>waiting for 60 more seconds for ...</li>
<li>Booting without full network capability</li>
<li>Network .... not compatible with this version of Ubuntu.</li>
</ul>
<p>To fix this, I first I tried reconfiguring the networking, then adding DNS servers into the network interfaces with no luck. Also, tried editing various files mentioned in other posts.</p>
<p>Finally I ran across a post from <a href="http://ubuntuforums.org/showthread.php?t=2001421&amp;p=12197022#post12197022" target="_blank" rel="nofollow">Ask Ubuntu Forums</a>.  So, here are the steps mentioned to resolve this issue:</p>
<ol>
<li>Create a copy of the following file: /etc/network/interfaces:<br><code>sudo cp /etc/network/interfaces /etc/network/iBKUp</code></li>
<li>Edit the network interface file as root:<br><code>sudo nano /etc/network/interfaces</code></li>
<li>Make sure the file only has the following:<br><code>auto lo<br />
iface lo inet loopback</code></li>
<li>Reboot the machine</li>
</ol>
<p>After these steps, the machine will hopefully boot normally and the networking centre should have resolved itself as well.</p>
<p>In the Network centre, you re-add the static IP information into your wired connection and lastly reboot again.</p>
<p>Hope this helps others! </p>
