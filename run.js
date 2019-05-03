let fs = require('fs'),
    Naofumi,
    Fitoria,
    reload = require('require-reload')(require);

Naofumi = new(reload('./naofumi.js'));
Fitoria = new(reload('./fitoria.js'));

function ohno(Naofumi, Fitoria){
    if(Naofumi.exists){
        Fitoria.say(`Please reconcile with the other heroes.`);
        Naofumi.reply(`No`);
    }
}

ohno(Naofumi, Fitoria);