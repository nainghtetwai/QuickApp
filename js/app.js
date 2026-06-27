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

let prevnum = null;
let currnum = '';
let operator = '';

function calculate(a, op, b){

    switch (op){
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return b;
    }

}

function presskey(key){

    if(!isNaN(key)){
        if(currnum.length >= 12) return;
        currnum += key;
        getcalnum.textContent = currnum;
    }else if('+-*/'.includes(key)){

        if(currnum !== ''){
            if(prevnum === null){
                prevnum = parseFloat(currnum);
            }else if(operator){
                prevnum = calculate(prevnum, operator, parseFloat(currnum));
                getcalnum.textContent = prevnum;
            }
            currnum = '';
        }

        operator = key;
        getcalsign.textContent = operator;

    }else if(key === '%'){

        if(prevnum !== null && operator && currnum !== ''){
            let num = parseFloat(currnum);
            let percent;

            switch (operator){
                case '/':
                    percent = (prevnum / num) * 100;
                    break;
                case '*':
                    percent = prevnum * (num / 100);
                    break;
                case '+':
                    percent = prevnum + (prevnum * (num / 100));
                    break;
                case '-':
                    percent = prevnum - (prevnum * (num / 100));
                    break;
            }

            getcalnum.textContent = percent.toFixed(2);
            prevnum = percent;
            operator = '';
            getcalsign.textContent = '%';
            currnum = '';
        }

    }else if(key === '='){
        if(prevnum !== null && operator && currnum !== ''){
            prevnum = calculate(prevnum, operator, parseFloat(currnum));
            getcalnum.textContent = prevnum;
            getcalsign.textContent = '=';
            currnum = '';
            operator = '';
        }
    }else if(key === 'C'){
        prevnum = null;
        currnum = '';
        operator = '';
        getcalnum.textContent = '0';
        getcalsign.textContent = '';
    }else if(key === 'Del'){
        currnum = currnum.slice(0,-1);
        getcalnum.textContent = currnum || '0'; 
    }

}

getkeys.forEach(key => {
    key.addEventListener('click',()=>{
        presskey(key.textContent);
    });
});
