(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Doc3:function(n,t,o){"use strict";function e(n,t){n.addEventListener("statusTap",function(){t.read(function(){var o=n.document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(o){var e=o.closest("ion-content");e&&e.componentOnReady().then(function(){t.write(function(){return e.scrollToTop(300)})})}})})}o.r(t),o.d(t,"startStatusTap",function(){return e})}}]);