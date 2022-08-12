const Lv01 = document.querySelectorAll(".category-Lv01"); 
const Lv02 = document.querySelectorAll(".category-Lv02"); 
const Lv03 = document.querySelectorAll(".category-Lv03"); 
const Lv04 = document.querySelectorAll(".category-Lv04"); 
const Lv01_link = document.querySelectorAll(".category-Lv01-link"); 
const Lv02_link = document.querySelectorAll(".category-Lv02-link"); 
const Lv03_link = document.querySelectorAll(".category-Lv03-link"); 
const Lv04_link = document.querySelectorAll(".category-Lv04-link");

let clicked_Lv01 = false;
let clicked_Lv02 = false;
let clicked_Lv03 = false;
Lv01_link.forEach(item=>item.onclick=()=>{
    item.nextElementSibling.classList.toggle('show');
    let icons=item.lastElementChild;
    icons.classList.toggle('rotate');
});

Lv02_link.forEach(item=>item.onclick=()=>{
    item.nextElementSibling.classList.toggle('show');
    let icons=item.lastElementChild;
    icons.classList.toggle('rotate');
});

Lv03_link.forEach(item=>item.onclick=()=>{
    item.nextElementSibling.classList.toggle('show');
    let icons=item.lastElementChild;
    icons.classList.toggle('rotate');
});
$('.category-Lv01-link').click(function(){
    $('.active').removeClass('active');
    $('.active2').removeClass('active2');
    $(this).addClass('active');
});
$('.category-Lv02-item').click(function(){
    $('.active').removeClass('active');
    $(this).children('.category-Lv02-link').addClass('active');
    $(this).parent('ul').prev('a').addClass('active');
    
});
$('.category-Lv02-link').click(function(){
    $('.active').removeClass('active');
    $('.active2').removeClass('active2');
    $(this).addClass('active');
});

$('.category-Lv03-item').click(function(){
    $('.active').removeClass('active');
    $(this).children('.category-Lv03-link').addClass('active2');
    $(this).parent('ul').prev('a').addClass('active2');
});

$('.category-Lv03-link').click(function(){
    $('.active2').removeClass('active2');
    $(this).addClass('active2');
});

$('.category-Lv04-item').click(function(){
    $('.active2').removeClass('active2');
    $(this).children('.category-Lv04-link').addClass('active2');
});
