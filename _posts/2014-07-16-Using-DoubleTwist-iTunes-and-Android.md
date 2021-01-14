---
layout: post
title:  "How to use Double Twist to sync your iTunes library to a droid"
date:   2014-07-16 19:34:21
categories:
- Tutorial
tags:
- android
- iTunes
summary: A guide on syncing files from your iTunes library to an android device.
status: publish
type: post
published: true
---

This post describes how you can sync your current iTunes media files to your android device. This tutorial was written and tested on Mac os X mavericks and a Nexus 5.<!--more-->

## Clean up your current iTunes library.

Before moving any media files from an iTunes library to Android to play in any player, it's best to get unlocked copies. For me the fastest (and legal non time consuming way) was to get iTunes music match enabled. Once it has finished setting up,  [follow this article on creating playlists](http://computers.tutsplus.com/tutorials/how-to-remove-drm-from-your-music-with-itunes-match--mac-59271){: rel="nofollow"} to find locked files, and more.

#### Fix with iTunes Match playlists

All playlists had media kind music, then in the first one added I cloud status ineligible.  For music, this means that the bit rate used to import the media was under 92 kps and a match was not found in the iTunes Library. The best way to solve this error is to reimport from your CD if you want to keep using iCloud or iTunes.

The next two playlists are similar to each other. Once you have your playlists, select option and delete the files, but do NOT check delete from iCloud. Make sure to move those files to your trash. You can then select all songs and re-download.

With my music from iTunes being quite large I set the music to re-download files while I was at work.

Once you have those files re-downloaded, go to view > show duplicates. Make sure that they are indeed duplicates and then delete from iCloud and iTunes.

#### Remove duplicate songs

Next step is to find the duplicates in your music folder for iTunes using finder. 

Note: This did not help my duplicate music problem in the double twist desktop application, but its best to check anyways. As always, make sure you have a backup

Once your sure your duplicates are gone, set up double twist on your computer.

## Set-Up Double Twist on your computer.

#### Download applications to mobile and desktop devices.
You will need to download for both desktop/laptop and mobile device. The files for the desktop can be downloaded from [the official website](https://www.doubletwist.com/). The mobile version is available from the [play store](https://play.google.com/store/apps/details?id=com.doubleTwist.androidPlayer){: rel="nofollow"}. I just went ahead and the air sync add on since I do this often. With air sync go to mobile settings and get your four digit pin and enter on your desktop. You should now see your device their, if not, on you device select the option to broadcast. All add-ons are in-app purchases.

#### Set up desktop App

Once installed, open the DoubleTwist application. Choose your iTunes folder, the. Let it do its thing. A few times I had to close then reset program on desktop to see all playlists and files after editing in iTunes.

Now select your device, choose your settings and sync. Be sure to note and fix any issues. These are usually being your file is locked by apple.

That's it!  It works pretty well but just note any adjustments to your playlist needs to be made in iTunes. Edits from double twist do not carry over.

## Notes:

Con:

- when you purchase airplay add on, you can no longer sync wired even when its disabled.
- can ONLY use iTunes playlist. They have no way to sync changes made in the phone application back to the iTunes library.
- Video playlists do not go to next item.

Pro:

- easy way to use an android phone with your Mac.
- Will take all iTunes playlists (as long as file is unlocked).

Bugs encountered:

- even though no duplicates are in iTunes duplicate view, the library sometimes duplicates the files (not in playlist but in the library view in music). I had no duplicates in finder. 
- hangs or sometimes crashes on opening the desktop app.