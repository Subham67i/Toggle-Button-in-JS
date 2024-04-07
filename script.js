let moodBtn1 = document.getElementById("btn1");
let body = document.querySelector("body");
let currMode = 'light';

// BUTTON - 1
moodBtn1.addEventListener('click', () => {
    if(currMode === 'light'){
        currMode = 'dark';
        body.classList.add('dark')
        body.classList.remove('light');
        document.createElement('h1')
    }else{
        body.classList.add('light');
       body.classList.remove('dark');
   
    }
    console.log(currMode);
});

// BUTTON - 2
let moodBtn2 = document.getElementById("btn2");
let body2  = document.querySelector("body");
let currMode2 = 'dark';
moodBtn2.addEventListener('click', () => {
    if(currMode2 === 'dark'){
        currMode2 = 'light';
        body2.classList.add('light')
        body2.classList.remove('dark')
       
    }else{
        body2.classList.add('dark')
        body2.classList.remove("light")
    }
    console.log(currMode2);
})