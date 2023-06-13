$(document).ready(onReady);
let fungusHP= 100
let AP= 100
// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('.attack-btn.arcane-scepter').on('click', arcaneScepter)
    $('.attack-btn.entangle').on('click', entangle)
    $('.attack-btn.dragon-blade').on('click', dragonBlade)
    $('.attack-btn.star-fire').on('click',starFire)
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function arcaneScepter(){
    console.log('i shall smite thee with the divine arcane!',fungusHP);
    fungusHP -= 24
    AP -= 12
    render()
}

function entangle(){
    console.log('thou shalt not pass!');
    fungusHP -= 9
    AP -= 23
    render()
}

function dragonBlade(){
    console.log('thine heart is a flame!');
    fungusHP -= 47
    AP -=38
    render()
}

function starFire(){
    console.log('in the darkest of night thine light echos!');
    fungusHP -= 25
    AP -= 33
    render()
}
// this render ensures that the text gets updated on the screen 
//and also that the fungus nor ap dip below zero
function render(event){

    $('.hp-text').text(fungusHP)
    $('.ap-text').text(AP)
    if(fungusHP < 0){
        fungusHP =0 
        $('.hp-text').text(fungusHP)
    }
    if(AP < 0){
        AP = 0
        $('.ap-text').text(AP)
    }
    if(fungusHP===0){
        //the agatha refrence is from a video game haha
        console.log('for agatha!');
        $('.freaky-fungus.walk').addClass('.freaky-fungus dead')
    }
    if(AP===0){
        console.log('nooo!');
        $('.freaky-fungus.walk').addClass('.Jump')
    }
    //disable
    if(AP===0){
        console.log('i need to recharge!');
       $('.attacks').addClass('.attack-btn disabled')
    }
    //the other disable didnt work above so i did this instead if you see this 
    //id love some feed back 
    if(fungusHP===0){
        console.log('the fight is over');
        $('.attack-btn.arcane-scepter').off('click', arcaneScepter)
        $('.attack-btn.entangle').off('click', entangle)
        $('.attack-btn.dragon-blade').off('click', dragonBlade)
        $('.attack-btn.star-fire').off('click',starFire)
        
    }
}
