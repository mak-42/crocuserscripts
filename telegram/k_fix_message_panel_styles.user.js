// ==UserScript==
// @name         Telegram K: Fix message panel styles for wide screen
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  The script fixes message panel styles for wide screen.
// @author       Dmitry Malenok
// @match        https://web.telegram.org/k/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=telegram.org
// ==/UserScript==

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleByCrocJiraFix") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleByCrocJiraFix";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

(function() {
    'use strict';

    GM_addStyle('.page-chats { max-width: unset !important; }');
    GM_addStyle('.whole { max-width: unset !important; }');
    GM_addStyle('.bubbles-inner { max-width: unset !important; width: 83vw !important; }');
    GM_addStyle('.bubble-content-wrapper { max-width: 45vw !important; }');
})();
