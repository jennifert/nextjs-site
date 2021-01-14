---
layout: post
title: A look at Raspmbc video streaming
date: 2013-09-05 19:00:00
categories:
- Tutorial
tags:
- raspmbc
- video streaming
- Raspberry Pi
summary: An initial dive into streaming content on the Raspberry Pi device.
status: publish
type: post
published: true
---
<p>The <a href="http://www.raspberrypi.org/faqs" target="_blank" rel="nofollow">Raspberry Pi Foundation</a> described the pi as "The Raspberry Pi is a credit-card sized computer that plugs into your TV and a keyboard. It’s a capable little PC which can be used for many of the things that your desktop PC does, like spreadsheets, word-processing and games. It also plays high-definition video.". This post is to assist in setting up your Raspberry Pi With an XMBC build called Raspmbc.<!--more--></p>
<p><strong>Choosing the Modal</strong></p>
<p>If you are going to be doing video streaming (especially over HDMI), it is recommended to buy the Version B. This is because. the modal has more memory than previous model, and has better video streaming. It can be purchased at any of the following sites:</p>
<ul>
<li><a href="http://www.amazon.ca/gp/product/B00AKQA0X6/ref=as_li_ss_tl?ie=UTF8&amp;camp=15121&amp;creative=390961&amp;creativeASIN=B00AKQA0X6&amp;linkCode=as2&amp;tag=jennisportf-20" target="_blank" rel="nofollow">Amazon.ca</a></li>
<li><a href="http://www.farnell.com/pi/" target="_blank" rel="nofollow">Element 14</a></li>
<li><a href="http://uk.rs-online.com/web/generalDisplay.html?id=raspberrypi" target="_blank" rel="nofollow">RS</a></li>
<li>Also, be sure to check your local computer shop. While these are currently not being sold in big box stores, other smaller computer shops may have some in.</li>
</ul>
<p><strong>Storage/Operating System "Drive"</strong></p>
<p>This mini computer does not have a traditional hard drive. Instead, it uses SD cards to house the operating system. It is also recommended to pick up a class 10 SD card (if you do not opt for the <a href="http://www.element14.com/community/docs/DOC-55184/l/raspberry-pi-8gb-sd-card-pre-installed-with-noobs" target="_blank" rel="nofollow">noob package</a>). If your just using the machine for streaming, an 8 GB one should suffice, otherwise I believe the highest supported is 32 GB.</p>
<p>Like me, you may have luck finding the other components needed to use the device around your house - the key is to mix and match. For example,  I found an old mini USB cable to USB port from an old hard drive, then connected that to my iPhone USB to wall plug (but for safely, when not in use, I power down the machine).</p>
<p>Here is a list of all components.</p>
<p>Analog Tv Use:</p>
<ul>
<li>Composite video cable</li>
<li>RCA audio cable</li>
</ul>
<p>With HDMI:</p>
<ul>
<li>HDMI cable only</li>
<li>HDMI (to __ device sold separately)</li>
</ul>
<p>Everything:</p>
<ul>
<li>Ethernet cable or Wireless USB</li>
<li>MicroUSB Cord</li>
<li>Optional: Usb to wall outlet</li>
</ul>
<p><strong>First step install Raspmbc on your card.</strong></p>
<p>Adding Raspmbc to your SD Card: <a href="http://www.raspbmc.com/wiki/user/windows-installation/" target="_blank" rel="nofollow">Windows</a> or <a href="http://www.raspbmc.com/wiki/user/os-x-linux-installation/" target="_blank" rel="nofollow">Os X/Linux</a>.</p>
<p>Now, plug your ad card into the slot on your Pi, and let it run. For some reason it did no like the mouse, so I went through the install steps with just a keyboard - USB worked great after.</p>
<p>Now, for initial set-up, its r<a href="http://www.raspbmc.com/wiki/user/using-ssh/" target="_blank" rel="nofollow">ecommended to use ssh</a> to make initial configurations.</p>
<p><strong>Initial commands to run in remote computer ssh</strong> (in order)</p>
<p>sudo apt-get update<br />
sudo apt-get upgrade<br />
sudo apt-get install ffmpeg</p>
<p><strong>Optional</strong></p>
<p>Add your <a href="http://www.raspberrypi.com/license-keys/">license keys</a> to <a href="http://htpcbuild.com/hardware/standalone-htpc-build/raspberry-pi-htpc/raspberry-pi-codec-license-install/">config.txt</a>.</p>
<p><strong>Some other settings to tweak on raspmbc are:</strong></p>
<p>Video resolution: Settings &gt; System &gt; Video Output &gt; Resolution<br />
Over clock: rograms &gt; Raspbmc Settings &gt; System Configuration &gt; System Performance Profile &gt; Fast<br />
Enable airplay: System &gt; Network &gt; “Allow XBMC to receive <em>AirPlay</em> content<br />
Turn of thumbnails: Settings &gt; Video &gt; File lists &gt; disable “Extract thumbnail and video information</p>
<p><strong>Set-up PlayOn</strong></p>
<p>Unfortunately, <a href="http://forum.xbmc.org/showthread.php?pid=1375570" target="_blank" rel="nofollow">plex media centre</a> did not work with my set up, so for Netflix and other channels, I used playOn. It was around $50 (CAD) (about 30 US) and can work well on an XP virtual machine. I recommend testing only my media (free) before purchasing. The below is based on <a href="http://www.playon.tv/support/playon-for-mac" target="_blank" rel="nofollow">playOn's parallel's guide</a>.</p>
<p>Need:</p>
<p><a href="http://www.vmware.com/products/fusion/" target="_blank" rel="nofollow">VmWare Fusion</a> (be sure to update software) Feel free to try <a href="https://www.virtualbox.org/" target="_blank" rel="nofollow">Virtual Box</a>, which is free virtualization software.<br />
<a href="http://www.hotspotshield.com/‎" target="_blank" rel="nofollow">Hotspot Shield</a> (for outside of US)</p>
<p>Set up Virtual Machine:</p>
<ol>
<li>Create an XP machine with 2GB RAM in "bridge Networking - Auto-detect" Mode and a static virtual disk (not expanding). Use at least a 16GB virtual disk. Playon Suggests utilizing 2 cores to stream.</li>
<li>Once XP is loaded, uninstall everything you don't need (MSN Browser, paint, games, etc.).</li>
<li>Right click on "My computer", select Advanced settings - and set your settings to "Best performance"</li>
<li>Install the latest service packs and windows updates</li>
<li>Stop and disable indexing service.</li>
<li>Install PlayOn with default settings.</li>
<li>Restart your machine</li>
</ol>
<p>Enable in Raspmbx:</p>
<ol>
<li>Basic: Files &gt; Add Videos... &gt; Browse &gt; UPnP Devices &gt; PlayOn... &gt; OK</li>
<li>Advanced (seamless channels): <a href="http://mymediaexperience.com/integrate-netflix-and-hulu-into-xbmc/" target="_blank" rel="nofollow">http://mymediaexperience.com/integrate-netflix-and-hulu-into-xbmc/</a></li>
</ol>
<!-- <p>Optional:</p>
<p>Once it works with "myMedia", stop playOn, and install Hotspot Shield into the virtual server. Restart your machine, and try the settings. If everything works and you like the product, purchase a full license.</p> -->
<p>That's it. Hope it helps someone.</p>
<p><strong>Resources for this post and further research<br />
</strong></p>
<ul>
<li>Book: <a href="http://www.packtpub.com/raspberry-pi-media-center/book" target="_blank" rel="nofollow">Raspberri Pi: Media Centre</a></li>
<li><a title="Used for extra info" href="http://elinux.org/RPi_Hardware_Basic_Setup#Typical_Hardware_You_Will_Need" target="_blank" rel="nofollow">Equipment</a></li>
<li><a href="http://www.raspberrypi.org/quick-start-guide" target="_blank" rel="nofollow">Quick start guide</a></li>
<li><a href="http://www.raspberrypi.org/faqs" target="_blank" rel="nofollow">FAQ</a></li>
<li><a href="http://rasplex.com/" target="_blank" rel="nofollow">Rasplex</a></li>
<li><a href="http://www.raspbmc.com/" target="_blank" rel="nofollow">Raspmbc</a></li>
<li><a href="http://www.macocd.com/styled/styled-4/index.html" target="_blank" rel="nofollow">Setting up a Raspberry Pi as an XBMC Device using RaspBMC</a></li>
<li><a href="http://www.raspberrypi.org/phpBB3/viewtopic.php?f=35&amp;t=31102&amp;start=25" target="_blank" rel="nofollow">Discussion: Netflix on Raspbmc</a></li>
<li><a href="http://www.makeuseof.com/tag/the-raspberry-pi-home-theater-what-you-can-and-cannot-do/" target="_blank" rel="nofollow">The Raspberry Pi Home Theater: What You Can And Cannot Do</a></li>
<li><a href="http://wiki.xbmc.org/?title=Add-on%3aPleXBMC" target="_blank" rel="nofollow">Raspmbc add on: plexmbx</a></li>
<li><a href="http://www.playon.tv/" target="_blank" rel="nofollow">PlayOn: For RaspMBC netflix and hulu Streaming (without Plex)</a></li>
<li><a href="http://mymediaexperience.com/raspberry-pi-xbmc-with-raspbmc/" target="_blank" rel="nofollow">RaspMBC set-up Guide</a></li>
<li><a href="http://lifehacker.com/5900626/create-a-kickass-seamless-play+everything-media-center-the-complete-guide" target="_blank" rel="nofollow">Create a Kickass, Seamless, Play-Everything Media Center: The Complete Guide</a></li>
</ul>
