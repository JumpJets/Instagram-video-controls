// ==UserScript==
// @name         Instagram video controls
// @namespace    https://github.com/JumpJets/Instagram-video-controls
// @version      1.1
// @icon         https://www.instagram.com/static/images/ico/favicon-192.png/b407fa101800.png
// @description  Add controls to the video
// @author       X4
// @match        https://*.instagram.com/p/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	var videoplayer = document.getElementsByTagName("video")[0];
	if (typeof videoplayer != "undefined") {
		videoplayer.setAttribute("controls", "");
		console.info("Controls enabled on video tag");
		var customcss = document.createElement("style");
		customcss.innerHTML = "._7thjo, ._j12ff { display: none !important; }";
		document.body.appendChild(customcss);
	}
})();
