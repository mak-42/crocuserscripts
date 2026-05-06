// ==UserScript==
// @name         Talk: Remove Phone Request
// @namespace    http://tampermonkey.net/
// @version      1.4.0
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
            $('button:has(span:contains("Введите номер телефона"))').click();
            $('button:has(span:contains("Отмена"))').click();
            $('.user-settings-header > button').click()
        } else if ($("span:contains('Add a phone number')").length) {
            $('button:has(span:contains("Enter the number"))').click();
            $('button:has(span:contains("Cancel"))').click();
            $('.user-settings-header > button').click()
        } else {
            setTimeout(remover, 500);
        }
    };
    setTimeout(remover, 500);
})();
