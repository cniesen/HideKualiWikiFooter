// ==UserScript==
// @id             HideKualiWikiFooter
// @name           Hide Kuali Wiki Footer
// @version        1.0
// @namespace      https://github.com/cniesen/HideKualiWikiFooter
// @description    Gain more real estate by hiding confluence footer
// @include        https://wiki.kuali.org/*
// ==/UserScript==

document.querySelector("#footer").style.height="0";
