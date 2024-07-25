// ==UserScript==
// @name         White Overlay
// @namespace    http://tampermonkey.net/
// @version      2024-04-27
// @description  Adds an awful white gradient overlay onto every web page
// @author       Mia
// @match        https://*/*
// @icon         data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH6AQbBh8zMlxWKwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABhSURBVDjL7ZExDsAwCAMPiR90arv0/1/s4C6NhBBITed4Cg4YO4GFBTBJ2zgHXm+tcKeiBwfOJJob6YYBc+D4INBiONDfN3DgKvjOhYA7LqwiTDvIEWwmkgN7+qZOrBR+AO5CFuMaEA6/AAAAAElFTkSuQmCC
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var whiteOverlay = document.createElement("div");
    whiteOverlay.style.width = "100%";
    whiteOverlay.style.height= "100%";
    whiteOverlay.style.position = "fixed";
    whiteOverlay.style.zIndex = "9999999";
    whiteOverlay.style.top = "0px";
    whiteOverlay.style.pointerEvents = "none";
    whiteOverlay.style.backgroundImage = "linear-gradient(180deg, #fff0 0%, #fff0 50%, #dddd 100%)"
    document.body.appendChild(whiteOverlay);
})();