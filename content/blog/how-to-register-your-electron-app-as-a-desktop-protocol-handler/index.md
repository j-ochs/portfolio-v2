---
title: How to Register Your Electron App as a Desktop Protocol Handler
date: "2020-05-19T22:12:03.284Z"
description: "But I thought Electron was a frontend framework?! Learn how to register your Electron app as a desktop protocol handler for Windows and MacOS."
keywords: ["Electron", "Desktop Apps", "Install-script", "NSIS"]
---

I have recently been working on an Electron application. If you don't know what [Electron](https://electronjs.org/) is, just open up Slack or Visual Studio Code and viola! you're looking at an Electron app. Javascript+HTML+CSS in a "native" desktop application - ah what a beautiful sight it is.
>> Before all the native purists get angry with me - just know that I'm aware of many of the downsides of using Electron, and these points are valid. However, that is a conversation for another time and not what this post is about, so read on... While most of the programming when working with Electron is written in Javascript or Typescript, there is the occasional gem of writing some code or script in another language which is completely foreign to a frontend developer like myself.

### The problem
  
For our use case, the goal was fairly simple: when a user encounters a protocol link somewhere on the web (the `tel:` protocol to be specific), we want our Electron app to be a registered handler for this protocol so that the link will open our app and pass through the link's embedded arguments (in our case, a phone number).
>> An example `tel:` link which opens the default telephone protocol handler looks like this: [`tel:0123456789`](tel:0123456789). _Try clicking the link to see what the default `tel:` protocol handler is on your machine._  \
<<The application would have to be registered to handle this protocol on installation - 

### For Windows Users
For Windows users, you'll want to go

### For MacOS Users
On Mac, you need to: 1. edit the info.plist file, 2. write entitlements to the OS, and 3. 