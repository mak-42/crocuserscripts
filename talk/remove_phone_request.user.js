// ==UserScript==
// @name         Talk: Remove Phone Request
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove Phone Request from Talk
// @author       Dmitry Malenok
// @match        https://talks.croc.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://code.jquery.com/jquery-3.4.0.slim.min.js
// ==/UserScript==

(function() {
    'use strict';


    var $ = window.jQuery;
    var remover = () => {
        if ($("span:contains('Добавьте номер телефона')").length) {
            $("span:contains('Добавьте номер телефона')").parent().closest('.modal').remove();
        } else {
            setTimeout(remover, 1000);
        }
    };
    setTimeout(remover, 1000);
})();
