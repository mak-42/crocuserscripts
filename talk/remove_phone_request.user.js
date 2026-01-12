// ==UserScript==
// @name         Talk: Remove Phone Request
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Remove Phone Request from Talk
// @author       Dmitry Malenok
// @match        https://talks.croc.ru/*
// @icon         https://s.kontur.ru/common-v2/icons-products/talk/talk-64.svg
// @grant        none
// @require      https://code.jquery.com/jquery-3.4.0.slim.min.js
// ==/UserScript==

(function() {
    'use strict';


    var $ = window.jQuery;
    var remover = () => {
        if ($("span:contains('Добавьте номер телефона')").length) {
            $("span:contains('Добавьте номер телефона')").parent().closest('.modal').remove();
        } else if ($("span:contains('Add a phone number')").length) {
            $("span:contains('Add a phone number')").parent().closest('.modal').remove();
        } else {
            setTimeout(remover, 500);
        }
    };
    setTimeout(remover, 500);
})();
