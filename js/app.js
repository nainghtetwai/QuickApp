const getclickedapp = document.querySelector('.clicked-app');
const getclosebtn = document.querySelector('.btn-close');
const getappname = document.querySelector('.app-name');
const getcontent = document.querySelector('.content');
const getappcontent = document.querySelectorAll('.app-content > div');
const getchilds = document.querySelectorAll('.apps');

getclickedapp.addEventListener('click',function(e){
    const btn = e.target.closest('.btn-close');
    if(btn){
        const parent = btn.closest('.clicked-app');
        parent.style.display = 'none';
    }
});

getcontent.addEventListener('click',function(e){

    if(e.target.closest('.clicked-app')) return;

    child = e.target.parentElement.id;
    getappname.textContent = child[0].toUpperCase() + child.slice(1);

    getclickedapp.style.display = 'block';

});

// Start Calculator

const getcalsign = document.querySelector('.cal-sign');
const getcalnum = document.querySelector('.cal-num');
const getnumkey = document.querySelectorAll('.numkey');

let experssion = '';
let justcalculated = false;

getnumkey.forEach(key => {
    key.addEventListener('click',function(){
        const value = key.textContent.trim();

        if(!isNaN(value)){
            if(getcalnum.textContent.length < 10){
                if(justcalculated){
                    experssion = value;
                    justcalculated = false;
                }else{
                    if(value === '0' && (experssion === '' || /[\+\-\*\/]0$/.test(experssion))){
                        return;
                    }
                    experssion += value;
                }
                getcalnum.textContent = experssion;
            }
        }else if(['+','-','X','/','%'].includes(value)){
            experssion += value;
            getcalsign.textContent = value;
            getcalnum.textContent = experssion;
            justcalculated = false;
        }else if(value === 'C'){
            experssion = '';
            getcalnum.textContent = '';
            getcalsign.textContent = '';
            justcalculated = false;
        }else if(value === 'Del'){
            experssion = experssion.slice(0,-1);
            getcalnum.textContent = experssion;
        }else if(value === '='){
            let safeexperssion = experssion.replace('X', '*').replace('%', '/100');
            try{
                const result = eval(safeexperssion);
                getcalnum.textContent = result;
                getcalsign.textContent = '';
                experssion = result.toString();
                justcalculated = true;
            }catch{
                getcalnum.textContent = 'Error';
                experssion = '';
                justcalculated = false;
            }
        }

    });
});

// End Calculator

// Start Calendar

const getcurrmonth = document.getElementById('currmonth');
const getcurryear = document.getElementById('curryear');
const getuimonths = document.getElementById('months');
const getuiyears = document.getElementById('years');
const getcaldays = document.getElementById('caldays');
const getmonthbtn = document.querySelector('.month-btn');
const getyearbtn = document.querySelector('.year-btn');

const months = ['Jan','Fab','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];
let startyear = 2020;
let endyear = 2030;

let month,year;

window.addEventListener('load',function(){

    let getday = new Date();
    month = getday.getMonth();
    year = getday.getFullYear();

    getcurrmonth.textContent = months[month];
    getcurryear.textContent = year;

    initmonths();
    inityears();
    initdays();

});

function initmonths(){

    getuimonths.innerHTML = '';

    for(let x=0; x < months.length; x++){

        const newdiv = document.createElement('div');
        newdiv.textContent = months[x];
        newdiv.classList.add('dropdown-item');

        newdiv.addEventListener('click',function(){
            
            month = x;
            getcurrmonth.textContent = months[x];
            initdays();

        });

        getuimonths.appendChild(newdiv);

    }

}

function inityears(){
    
    getuiyears.innerHTML = '';

    for(let x = startyear; x <= endyear; x++){

        const newdiv = document.createElement('div');
        newdiv.textContent = x;
        newdiv.classList.add('dropdown-item');

        newdiv.addEventListener('click',function(){

            year = x;
            getcurryear.textContent = year;
            initdays();

        });

        getuiyears.appendChild(newdiv);

    }

}

function initdays(){

    getcaldays.innerHTML = '';

    let tmpdays = new Date(year,month,0);
    let getalldays = alldays(year,month);
    let getprevendday = tmpdays.getDay();

    for(let x=0; x <= getprevendday; x++){

        let newlabel = document.createElement('label');
        newlabel.className = 'day blank';

        getcaldays.appendChild(newlabel);

    }

    for(let y=0; y < getalldays; y++){

        let eachday = y+1;

        let newlabel = document.createElement('label');
        newlabel.textContent = eachday;
        newlabel.classList.add('day');

        getcaldays.appendChild(newlabel);

    }

}

function alldays(year,month){

    let curralldays = new Date(year,month+1,0);

    curralldays = curralldays.getDate();

    return curralldays;

}

getyearbtn.addEventListener('click',function(){

    if(this.lastElementChild.classList.contains('show')){

        this.lastElementChild.classList.remove('show');

    }else{

        this.lastElementChild.classList.add('show');

    }

});

getmonthbtn.addEventListener('click',function(){

    if(this.lastElementChild.classList.contains('show')){

        this.lastElementChild.classList.remove('show');

    }else{

        this.lastElementChild.classList.add('show');

    }

});

// End Calendar

// Start Clock



// End Clock

// Start Notes



// End Notes
