// ==UserScript==
// @name         Amazon Wish List Name in Page Title
// @namespace    https://github.com/exterrestris
// @version      0.3.0
// @description  Show the name of your Amazon Wish List in the page title to identify it
// @author       You
// @match        https://www.amazon.co.uk/hz/wishlist/*
// @match        https://www.amazon.com/hz/wishlist/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
  
    document.title += ': ' + document.querySelector('#profile-list-name').innerText + ' Wish List';
  })();