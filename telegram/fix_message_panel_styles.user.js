// ==UserScript==
// @name         Telegram: Fix message panel styles for wide screen
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  The screen fixes message panel styles for wide screen.
// @author       Dmitry Malenok
// @match        https://web.telegram.org/a/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=telegram.org
// @grant        none
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

    GM_addStyle('.MessageList .messages-container { max-width: unset !important; width: unset !important; }');
    GM_addStyle('.message-content { max-width: 45vw !important; width: unset !important; }');
})();
