---
layout: post
title: 'Updated: Raspberry Pi Media Server'
date: 2014-11-08 19:00:00
categories:
- Tutorial
tags:
- plex
- video streaming
- Raspberri Pi
summary: An updated guide to streaming content to your Raspberry Pi.
status: publish
type: post
published: true
---
<p>After trying quite a few Raspberry Pi operating systems and configurations, the new <a title="Official site for the operating system" href="http://www.rasplex.com/" target="_blank" rel="nofollow">RasPlex</a> is my choice for my home media centre. RasPlex was the best system which supports out of the box: WiFi, Bluetooth, hdmi monitor with analog speakers, and more. The best thing is the entire process took only 15 minutes!<!--more--></p>
<p><small>Note: This is an update to the <a title="A look at Raspmbc video streaming" href="http://jenntesolin.com/blog/2013/09/05/a-look-at-raspmbc-video-streaming/" target="_blank" rel="nofollow">Raspmbc set-up article</a>. RasPlex also requires the use of Plex Media Server which is also free, and easily connects to iTunes and various channels.<br /></small></p>
<p><strong>Set-up the SD card</strong></p>
<p>The first step is to <a title="Rasplex installer download page" href="http://www.rasplex.com/get-started/rasplex-installers.html" target="_blank" rel="nofollow">download the installer</a> for your Operating System onto your computer. They have installers available for Mac, Linux, and Windows, please be sure to read the notes on how to mount the installer.</p>
<p>Now, you select the version of RasPlex you want, and then select your SD card drive (check disk utility for the name if your not sure). Finally, press "update links", and when that is down "click download". It will ask you the location of the download, then when will display the download progress in the terminal. Once your all set-up, then press "Write SD card".</p>
<p><a href="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2014-04-24-at-10.51.40-PM.png"> <img class="alignnone size-medium wp-image-609" src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2014-04-24-at-10.51.40-PM-300x298.png" alt="Screen Shot Rasplex Installer" width="300" height="298" /></a></p>
<p><strong>Set-Up your Raspberry Pi</strong></p>
<p>Make sure all your devises (even Bluetooth and Wi-Fi) are connected, then boot your machine. Let it run the initial set-up, and reboot itself.</p>
<p>Once it reboots, follow the on screen instructions for set-up (note that only your keyboard will work so far). Some of the set-up options include: Blue-tooth, WI-Fi, your Plex Media Server.</p>
<p>When you see the menu, press the left keyboard arrow to get to your settings, this is where you can set-up your audio settings, ssh access, and more. At set-up it will choose HDMI audio, just select analog to use stereo speakers.</p>
<p><a href="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/IMG_1982.jpg"><img class="alignnone size-medium wp-image-608" src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/IMG_1982-300x199.jpg" alt="Rasplex in action!" width="300" height="199" /></a></p>
<p>That's it! This this helps other people as well.</p>
<p><strong>RasPlex Resources:</strong></p>
<ul>
<li><a href="https://github.com/RasPlex/RasPlex/wiki/Guides" target="_blank" rel="nofollow">RasPlex Github Guides Pages</a></li>
<li><a href="http://www.rasplex.com/documentation/rasplex-setup-basics.html" target="_blank" rel="nofollow">RasPlex Set-Up Basics Documentation Page</a></li>
</ul>
<p><strong>Check out their YouTube Trailer</strong></p>

{% youtube C-A4Kxq3V0I "16by9" %}
