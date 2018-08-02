
# _Ng6PwaSample_ PWA sample project created by Angular6
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)


_Ng6PwaSample_ is a sample project for those who want to realize PWA (Progressive Web Apps) in Angular6.

_This full source code_,
<https://github.com/Ohtsu/ng6-pwa-sample>

_Video Explanation (Japanese)_,
<https://youtu.be/XMA1gyyYEr8>

_Video Explanation (English)_,
<https://youtu.be/b1SUOBI1CiA>


## Overview 
   - _Ng6PwaSample_ is a sample PWA project created by `ng add @angular/pwa` commend in Angular6.

   - _Ng6PwaSample_ uses mat-grid, mat-card, mat-menu, mat-icon and so on.

   - _Ng6PwaSample_ uses d3.js(ver4.3) and ng6-o2-chart.
  

## Prerequisite

   - node.js
   - Typescript2
   - Angular6
   - http-server


## Installation

To install this project, run simply:

```bash
$ npm install 
```
## Build project

You need to build the project in production mode. 

```bash
$ ng build --prod
```

## Start local server

You will find `dist` directory. Change directory into `dist/Ng6PwaSample`.
If you have not installed _http-server_ yet, install it as follows.

```bash
$ npm install http-server -g
```

Then type as follows.

```bash
$ http-server --port 8080
```

Open _http://localhost:8080_ in your browser.


  - ***First Page*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng6-pwa/dashboard01.png" width= "640" >


## Check offline mode

Then type `control + shift + i` for opening developer tool in Chrome.
Open `Application Tab` and `Service Workers`.
Try to check `Offline` and refresh the page.

In the case of a normal Web application, when offline, an error message is displayed as follows.

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng6-pwa/offline01.png" width= "640" >

However, if you use the PWA function, such an error message will not be displayed even though it is in offline mode.
Because the service worker detected offline and used the cache.

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ng6-pwa/offline_ok01.png" width= "640" >

## Version

   - Ng6PwaSample               : 0.0
   - Angular6                   : 6.0.3
   - TypeScript                 : 2.7.2
   - @angular/material          : 6.2.1
   - @angular/pwa               : 0.6.8
   - @angular/service-worker    : 6.0.3
   - d3.js          		        : 4.3.0
   - ng6-o2-chart          	    : 0.4.0
   

## Reference

- "Schematics", 
<https://material.angular.io/guide/schematics>

- "Angular 5, Angular 6 Custom Library: Step-by-step guide", 
<https://www.udemy.com/angular5-custom-library-the-definitive-step-by-step-guide/>


- "Angular 5, Angular 6用 カスタムライブラリの作成: 完全ステップ・バイ・ステップ・ガイド", 
<https://www.udemy.com/angular5-l/>


## Change Log

 - 2018.8.2 version 0.0 uploaded 

## Copyright

copyright 2018 by Shuichi Ohtsu (DigiPub Japan)


## License

MIT © [Shuichi Ohtsu](ohtsu@digipub-net.com)
