---
title: How to Register Your Electron App as a Desktop Protocol Handler
date: "2020-05-19T22:12:03.284Z"
description: "But I thought Electron was a frontend framework?! Learn how to register your Electron app as a cross-platform desktop protocol handler."
keywords: ["Electron", "Desktop Apps", "Install-Scripting", "NSIS", "LSHandlers"]
---

I have recently been working on an Electron application. If you don't know what [Electron](https://electronjs.org/) is, just open up Slack or Visual Studio Code and viola! you're looking at an Electron app. Javascript+HTML+CSS in a "native" desktop application - what a beautiful sight it is.

While most of the programming when working with Electron is usually in Javascript or Typescript, there does arise the occasional need to write some OS-level script or native C++ module which usually is completely foreign to a frontend developer like myself. In the case of registering the app as a protocol handler, that meant writing entries to the Windows Registry and the Apple LSHandlers dictionary. **Caution: this is low level stuff and could minorly screw up your machine if you aren't careful - proceed with care.**

### The Goal

For our use case, the goal was fairly simple: when a user encounters a protocol link somewhere on the web (the `tel:` protocol to be specific), we wanted our Electron app to be a registered handler for this protocol so that clicking the link will trigger our app to launch and pass through the link's embedded arguments (in this case, a phone number).
>> For a helpful introduction and overview of web protocol handlers, check out these [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers).

We knew that the application would have to be registered to handle this protocol on installation - which meant that a deep dive into the packaging and distribution setup for both Windows and MacOS was in order (sorry Linux users - I'm not sure how to accomplish this on Linux... the sadness).

### For Windows Users

For users on Windows 7-10, you have a few options. The [electron-builder](https://www.electron.build/) packager provides some great utilities for the full distribution setup of your Electron app. We configured electron-builder to run a `custom NSIS script` - this is trivial to setup, just follow the electron-builder [NSIS docs](https://www.electron.build/configuration/nsis#custom-nsis-script).


### For MacOS Users

On Mac, you need to: 1. edit the info.plist file, 2. write entitlements to the OS, and 3. 