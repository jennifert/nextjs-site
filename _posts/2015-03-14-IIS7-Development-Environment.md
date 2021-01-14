---
layout: post
title: "Creating a development environment for IIS 7+"
date: 2015-03-14 12:34:21
categories:
- Tutorial
tags:
- IIS
- PHP
- MySQL
- WordPress
summary: How to enable IIS on Windows 7 for a web development environment.
status: post
type: post
published: true
author: Jennifer Tesolin
---

This post describes how to enable IIS on Windows 7, along with enabling MySql and Php. <!--more-->

Note: You will need Administrator Access.

### Enable IIS
In order to avoid permission issues when trying to edit a file with your logged in account, create a folder in a directory outside of <code>innetpub</code>, ensuring that the full path has no spaces.

For example:
<code>C:\webroot\</code>

Next, to fix the security settings, right click on the new folder and add permissions for any users with, ISR, IUSER and Networking (full access)

Now, use the following [guide](https://web.archive.org/web/20160620015739/http://windows.microsoft.com/en-ca/windows7/install-internet-information-services-iis-7-5) to install IIS onto your machine. After first enabling, it will have your web root in the <code>innetpub</code> folder.

Since our folder is created, lets go ahead and relocate the server to use that!

Go in to the Default Web site and click: <code>Default Web Site > Manage Web Sites > Advanced Settings > Physical Path</code> Modify the path to be at the location you created at the top of this step.

### Install PHP
Go back onto the "Turn Windows Features on or off" menu and  Expand "Application Development Features" and then enable the "CGI" check box.

Download the latest stable version for PHP (Non Thread Safe) and unzip into a directory so that the path is similar to: <code>c:\PHP5</code>

Next, rename "php.ini-production" tp "php.ini". Open the file, and edit to match the items below:

<code>extension_dir = "C:\PHP5\ext"<br>
log_errors = On<br>
error_log = "C:\inetpub\temp\php-errors.log"<br>
fastcgi.impersonate = 1<br>
fastcgi.logging = 0<br>
cgi.fix_pathinfo=1<br>
cgi.force_redirect = 0<br>
display_errors = Off<br>
upload_max_filesize = 8M[change 8M to what you want to upload in WordPress]<br>
post_max_size = 8M[change 8M to what you want to upload in WordPress]</code>

Now, in the IIS manager, left click once on your server name, and then select "Handler Mappings"

Click <code>Actions > Add Module Mapping</code> and then enter the following:

<code>Request path: *.php<br>
Module: FastCgiModule<br>
Executable: c:\PHP5\php-cgi.exe<br>
Name: PHP_via_FastCGI</code>

In the same Window, Click <code>Request Restrictions > Mapping</code>. Next, check off "invoke handler only if request is mapped to", then click "File or Folder". Now, click  "OK" in all dialog boxes to accept changes.

In the IIS manager, click on your Default website, and then "Default Document", and then add index.php to the list.

Finally, restart your Default Web Site, and check out the "Security recommendations" link in the Resource section for more ways to secure this instance.

### Install MySQL
Download the latest stable version, but be sure to just skip to the download (near bottom of page).

For most uses the Typical install is fine. Please select all the MySQL defaults, and be sure to set a strong default password for root.

Note: Never use root on any of your Web applications.

Next, go into your php.ini file and uncomment:

<code>extension=php_mysql.dll<br>
extension=php_mysqli.dll</code>

Save, then restart your IIS server.

Lastly, create a mysql user and database. Be sure to use a strong password here as well.

### Install the URL rewrite plug-in for IIS. Then restart server
Go to the [Microsoft Site](http://www.iis.net/downloads/microsoft/url-rewrite) to download the latest version.

The step will allow you to use "Pretty URLs" on your blog.

### Download and install WordPress
[WordPress.org](http://wordpress.org/download/) always has the latest versions (4.1.1 at the time of writing). Also, check out the [translations](https://make.wordpress.org/polyglots/teams/) to download WordPress in your language, though some of these ay not be the latest.

To use WordPress just for something like a blog, unzip into your web root, and change the file name:
<code>C:\webroot\blog</code>

To have WordPress at the root, move all the files instead the unzipped "wordpress" folder right into your root.
<code>C:\webroot\</code>

Next, edit the file "wp-config.php" (you may need to rename the sample config).  Change the WordPress user name, password, and database to match what was created after installing MySql.

Open up the [secret generator](https://api.wordpress.org/secret-key/1.1/salt/) to automatically generate secret keys. Paste this into your wp-config.php file.

Next, add the below line above the comment that asks you to stop editing:
<code>define('FS_METHOD','direct');</code>. This will stop WordPress from asking your ftp information. Never use this external servers!

Save all these changes, then run one of the below addresses in your browser.

In a sub folder: <code>http://localhost/blog/wp-admin/install.php</code>
At the root: <code>http://localhost/wp-admin/install.php</code>

Go through and set up your site name, and admin user as suggested on the page.

For issues, consult the [WordPress Docs](http://codex.wordpress.org/Installing_WordPress)

### Add Mime Types to IIS
If you are not able to see content like fonts, JSON, videos, etc., you may need to add the mime type.

+ [JSON](https://web.archive.org/web/20180303023536/http://www.uipress.com/add-json-handler-support-in-iis-7/)
+ [web Fonts](http://codingstill.com/2013/01/set-mime-types-for-web-fonts-in-iis/)
+ [HTML5 and CSS3](http://docs.composite.net/Layout/LayoutFAQ?q=Can+I+use+HTML5+and+CSS3+related+files+like+.svg%2C+.woff+and+.ogg%3F)
+ [Configuring RSS with IIS](https://www.iandevlin.com/blog/2010/03/net/configuring-rss-with-iis/)

If they are not above, they may be mentioned at: [List of Common MIME types](https://web.archive.org/web/20170917212327/http://www.serverintellect.com/support/iis/mime-types/).

[My Sample Web.config](https://gist.github.com/jennifert/27e1c3e587e64fb75149f1bb3b1b340c)

### Resources
+ [How do I change permissions on wwwroot](http://stackoverflow.com/a/4920620)
+ [PHP.net Installation Docs](http://php.net/manual/en/install.windows.iis7.php)
+ [Security Recommendations](http://www.iis.net/learn/application-frameworks/install-and-configure-php-applications-on-iis/using-fastcgi-to-host-php-applications-on-iis#PHP_Security_Recommendations_)
+ [WordPress: Editing wp.config.php](http://codex.wordpress.org/Editing_wp-config.php)
+ [How to Set Up SSL on IIS 7](https://docs.microsoft.com/en-us/iis/manage/configuring-security/how-to-set-up-ssl-on-iis)
+ [Set up IIS 7 to run a secure site locally - HTTPS](https://deanhume.com/set-up-iis-7-to-run-a-secure-site-locally-https/)
+ [Tip/Trick: Enabling SSL on IIS 7.0 Using Self-Signed Certificates](https://weblogs.asp.net/scottgu/tip-trick-enabling-ssl-on-iis7-using-self-signed-certificates)
