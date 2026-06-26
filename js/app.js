const getbtnclose = document.querySelector('.btn-close');
const getcontent = document.querySelector('.content');

getbtnclose.addEventListener('click',()=>{
    getcontent.classList.add('none');
});

const getappimg = document.querySelectorAll('.app-img');

getappimg.forEach(btn => {

    btn.addEventListener('click',() => {

        let getalt = btn.attributes.alt.value;
        let getappname = document.querySelector('.app-name');

        if(getalt == 'calculator'){
            getappname.textContent = 'Calculator';
        }else if(getalt == 'calendar'){
            getappname.textContent = 'Calendar';
        }else if(getalt == 'clock'){
            getappname.textContent = 'Clock';
        }else{
            getappname.textContent = 'Notes';
        };

        getcontent.classList.remove('none');

    });

});

// Calculator App

const getcalsign = document.querySelector('.cal-sign');
const getcalnum = document.querySelector('.cal-num');
const getkeys = document.querySelectorAll('.key');

let firstnum = '';
let secondnum = '';

getkeys.forEach(key => {

    key.addEventListener('click',() => {
        
    });

});
