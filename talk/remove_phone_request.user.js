// ==UserScript==
// @name         Talk: Remove Phone Request
// @namespace    http://tampermonkey.net/
// @version      1.3.2
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
            var remover21 = () => {
                if ($("span:contains('Отмена')").length) {
                    $('button:has(span:contains("Отмена"))').click();
                    $('.user-settings-header > button').click()
                } else {
                    setTimeout(remover21, 500);
                }
            }
            remover21();
        } else if ($("span:contains('Add a phone number')").length) {
            $('button:has(span:contains("Enter the number"))').click();
            var remover22 = () => {
                if ($("span:contains('Cancel')").length) {
                    $('button:has(span:contains("Cancel"))').click();
                    $('.user-settings-header > button').click()
                } else {
                    setTimeout(remover22, 500);
                }
            }
            remover22();
        } else {
            setTimeout(remover, 500);
        }
    };
    setTimeout(remover, 500);
})();
