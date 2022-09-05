// Variables

let btn = document.querySelector('.new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"It is hard to fail but it is worse never to have tried to succeed.”' ,
    person: 'Theodore Roosevelt'
} , {
    quote: '“That which does not kill us makes us stronger.”', 
    person: 'Friedrich Nietzsche'
} , {
    quote:'“I have not failed. I\'ve just found 10,000 ways that won\'t work.”',
    person:'Thomas A. Edison'
}  , {
    quote:'“Be miserable. Or motivate yourself. Whatever has to be done, it\'s always your choice.” ',
    person:'Wayne Dyer'
} 
, {
    quote:'“The future belongs to those who believe in the beauty of their dreams.” ',
    person:'Eleanor Roosevelt'
} 
, {
    quote:'“The greater damage for most of us is not that our aim is too high and we miss it, but that it it too low and we reach it.” ',
    person:'Michelangelo'
} 
, {
    quote:'“Do not go where the path may lead , go instead where there is no path and leave a trail.” ',
    person:'Ralph Waldo Emerson'
} 
, {
    quote:'Success is not final, failure is not fatal: it is the courage to continue that counts. ',
    person:'Winston Churchill'
} 
, {
    quote:'“I hated every minute of training, but I said, \'Don\'t quit. Suffer now and live the rest of your life as a champion.’” ',
    person:'Muhammad Ali'
} 
, {
    quote:'“The journey of a thousand miles begins with one step.” ',
    person:'Lao Tzu'
} ];




btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})


