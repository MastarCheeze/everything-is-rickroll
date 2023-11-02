// ==UserScript==
// @name         Everything is Rickroll
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  every YouTube video you open is a rickroll
// @author       MastarCheeze
// @match        https://www.youtube.com/*
// @icon         https://github.com/MastarCheeze/everything-is-rickroll/blob/604db6aa9a4b58546d6df852ab489982628d7fbe/icon.png?raw=true
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const videoLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    const shortsLink = "https://www.youtube.com/shorts/Ewc9FJMyW_I";

    function pageChange(url) {
        if (
            url.startsWith("https://www.youtube.com/watch?v=")
            && !url.startsWith(videoLink)
        ) {
            window.location.replace(videoLink);
        } else if (
            url.startsWith("https://www.youtube.com/shorts/")
            && !url.startsWith(shortsLink)
        ) {
            window.location.replace(shortsLink);
        }
    }

    document.addEventListener("yt-navigate-start", (e) => {
        pageChange("https://www.youtube.com" + e.detail.url);
    });

    pageChange(window.location.href);
})();
