"use strict";

//IMPORT SYNTAX*****
// import $ from 'jquery';
// import {niceMessage} from './say-hello';

//REQUIRE SYNTAX ******
const $ = require('jquery');
const niceMessage = require('./say-hello.js');


niceMessage();

$(document).ready(function () {


$('body').css({
    'background-color': 'pink',
    'color': 'firebrick'
}).html(`<h1>${niceMessage()}</h1>`);


    // const sayHello = () => "Hello!";
    // sayHello();


});
