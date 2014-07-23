// ==UserScript==
// @id             HideKualiWikiFooter
// @name           Hide Kuali Wiki Footer
// @version        1.1
// @namespace      https://github.com/cniesen/HideKualiWikiFooter
// @updateUrl      https://raw.githubusercontent.com/cniesen/HideKualiWikiFooter/master/hidekualiwikifooter.user.js
// @downloadURL    https://raw.githubusercontent.com/cniesen/HideKualiWikiFooter/master/hidekualiwikifooter.user.js
// @description    Gain more real estate by hiding confluence footer
// @include        https://wiki.kuali.org/*
// ==/UserScript==

document.querySelector("#footer").style.height="0";
