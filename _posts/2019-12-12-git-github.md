---
layout: post
title: "Installing Git and Github on your Mac"
date: 2019-12-12 11:18:00
categories:
- Tutorial
- Mac_Web
tags:
- git
- github
- homebrew
summary: This post describes how to install git and github on your mac installation.

status: post
type: post
published: true
author: Jennifer Tesolin
---

<p>
	This post describes how to install git and github on your mac installation. There are two common ways to install. Both methods are described below. Please note the first way requires homebrew. <!--more-->
</p>

<h3>Installing with homebrew</h3>

<p>
	To install GIT, just run the below commands and enter your information when requested. Brew update/upgrade is being run to show best practice. Files should always be updated before trying to run commands.
</p>

<pre><code>brew update<br>brew upgrade<br>brew install git</code></pre>

<p>
	A quick way to install github, is to enter the below command in your terminal using brew casks. Casks basically give yo a way to install software without the DMG files.
</p>

<pre><code>brew cask install github</code></pre>

<h3>Installing with DMG files</h3>

<p>
	Go to the Git site at <a hrf="https://git-scm.com/download/mac" target="_blank" rel="nofollow noreferrer noopener">https://git-scm.com/download/mac</a>.
</p>

<p>
	Alternatively, if you use github, you can download the <a hrf="https://desktop.github.com/" target="_blank" rel="nofollow noreferrer noopener">github desktop DMG</a> file, then install the git command line tools from the app itself.
</p>

<p>
	To install the git command line tools from within the GitHub application, click on the app name "GitHub Desktop", then choose "Install command line tool".
</p>

<img src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/github-cmd-tools.png" alt="Image showing location of command line tools install on Github Desktop Application" />
