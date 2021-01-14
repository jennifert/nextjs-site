---
layout: post
title: Setting up Bluetooth on the raspberry pi
date: 2014-03-17 19:00:00
categories:
- Tutorial
tags:
- raspberry Pi
summary: Setting up a bluetooth dongle can be quite interesting when using Raspmbc. Here is a guide on setting up.
status: publish
type: post
published: true
---
<p>Setting up a bluetooth dongle can be quite interesting when using Raspmbc. Here is a guide on setting up.<!--more--></p>
<p><strong>Requirements:</strong></p>
<ul>
<li>Raspberry pi</li>
<li>Bluetooth dongle (<a href="https://www.modmypi.com/nano-bluethooth-dongle?filter_name=bluetooth" target="_blank" rel="nofollow">I used this one from ModMyPi</a>)</li>
<li>Wifi or ethernet connected</li>
</ul>
<p><strong>Steps:</strong></p>
<p>I found the <a href="http://www.ctheroux.com/2012/08/a-step-by-step-guide-to-setup-a-bluetooth-keyboard-and-mouse-on-the-raspberry-pi/" target="_blank" rel="nofollow">following guide</a> very helpful, however kept running into errors.</p>
<p>To fix it, run the following command after rebooting and before in place of installing bluetooth:</p>
<p><code>apt-get install obex-data-server<br />
apt-get ​install bluetooth bluez-utils blueman bluez-compat</code></p>
<p>If you have tried in the past to install bluetooth, but its still broken, run the below command:</p>
<p><code>sudo dpkg --configure -a</code></p>
<p>Unfortunately, there where problems pairing the device with the error message being:</p>
<code>Creating device failed: org.bluez.Error.AuthenticationRejected: Authentication Rejected</code>
<p>So following another article, it is recommended to type in:</p>
<p><code>sudo nano /usr/bin/bluez-simple-agent</code> </p>
<p>Now, in this file, change 'KeyboardDisplay' with 'DisplayYesNo'.</p>
<p><strong>Resources</strong></p>
<ul>
<li><a href="http://www.ctheroux.com/2012/08/a-step-by-step-guide-to-setup-a-bluetooth-keyboard-and-mouse-on-the-raspberry-pi/" target="_blank" rel="nofollow">Step by step Guide for setting up keyboard and mouse on Pi</a></li>
<li><a href="http://www.correlatedcontent.com/blog/bluetooth-keyboard-on-the-raspberry-pi/" target="_blank" rel="nofollow">Bluetooth keyboard on the Pi.</a></li>
</ul>
<p><strong>Note:</strong></p>
<p>Some bluetooth items will not work on Raspmbc such as audio. It has been suggested (Raspberry pi official forums) to instead use OpenELEC or Xbian. </p>
