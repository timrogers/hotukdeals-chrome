HotUKDeals Chrome Extension
===========================

What is the extension?
-----------------------

This is an ultra simple extension for Google Chrome and Chromium which adds a button to the Chrome toolbar where you can see the latest 4 deals on [HotUKDeals](http://www.hotukdeals.com). It is not meant to be complicated or particuarly useful, but is rather of a proof-of-concept of how easy it is to make such an extension.

Once the extension is installed, you will see a HotUKDeals button to the right of the address bar. When it is clicked, a small page will appear, based upon [jQTouch](http://github.com/senchalabs/jQTouch) which will show the latest deals. This is reloaded each time you click the button. You can see the deals, along with their temperature count and merchant. If you click the merchant name, you will be able to see more details about the deal, including the description. There is also a link to view the full deal on the website.

How do I install this?
----------------------

It's pretty simple to install. You just need to clone it from the git repository, then open the Extensions screen in Chrome, enable "Developer mode" amd then click "Load unpacked extension".

You can also download it from Google Chrome Extensions [here](https://chrome.google.com/extensions/detail/kgpededmmnogkbifhdgiocokncapfkci?hl=en) - isn't that easy!

A note on API keys
-------------------

As with many APIs, you have to use a personal API key to access data from the HotUKDeals API. Because I'm not particuarly bothered, I have used my personal key in this project. Please don't abuse it, and feel free to add your own if you do decide to use this for yourself from the Git repo. This would be appreciated because each key is only alocated a limited number of requests, and if added to the Chrome extensions site, they will get used up pretty quickly!

To get your own API key, visit [http://www.hotukdeals.com/rest-api](http://www.hotukdeals.com/rest-api), fill in some details and then submit the form. You will get an API key back, which you can paste into the code of [popup.js](http://github.com/timrogers/hotukdeals-chrome/blob/master/popup.js) in order to begin using it.

How is this made?
-----------------

To make this, I followed the "Getting Started" information for Google Chrome extensions on [Google Code Labs](http://code.google.com/chrome/extensions/getstarted.html). I needed this for all the Chrome specific things like the Chrome Tabs API and the manifest file, but otherwise, it is standard HTML, CSS and Javascript.

This extension is heavily based upon [jQTouch](http://github.com/senchalabs/jQTouch), which is a jQuery plugin for developing apps for mobile platforms. I have used it in many of my other projects, for example iPhone and Android apps, and I thought it would provide a good way of creating a quick interface for my extension, although this is not what the plugin is normally for!

Credits
-------

Created by [Tim Rogers](http://www.tim-rogers.co.uk), an avid developer and lover of HotUKDeals. On Twitter, I'm [@timROGERS](http://www.twitter.com/timrogers).
Feel free to use this as you please, in any way you want. This application is in the public domain. If you need any help or would like to hire me to make something for you, contact me on Twitter or [email me](mailto:tim@tim-rogers.co.uk).

(C) 2010 Tim Rogers