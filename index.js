//display
const text = document.getElementById('text');

const displayText = (inputan) => {
    text.innerText += inputan;
}

const displayOperator = (inputan) => {
    if( !isNaN(text.innerText[text.innerText.length - 1]) ){
        displayText(inputan);
    }
}

//angka
document.getElementById('1').addEventListener('click', () => displayText(1));
document.getElementById('2').addEventListener('click', () => displayText(2));
document.getElementById('3').addEventListener('click', () => displayText(3));
document.getElementById('4').addEventListener('click', () => displayText(4));
document.getElementById('5').addEventListener('click', () => displayText(5));
document.getElementById('6').addEventListener('click', () => displayText(6));
document.getElementById('7').addEventListener('click', () => displayText(7));
document.getElementById('8').addEventListener('click', () => displayText(8));
document.getElementById('9').addEventListener('click', () => displayText(9));

document.getElementById('0').addEventListener('click', () => {
    //mencegah redundent angka 0 seperti 00009 atau 001
    if( isNaN(text.innerText[text.innerText.length - 2]) && text.innerText[text.innerText.length - 1] == '0'){
        if (text.innerText[text.innerText.length - 2] == '.'){
            displayText(0);
        }
    }
    else{
        displayText(0);
    }
});

//operator
document.getElementById('tambah').addEventListener('click', () => displayOperator('+'));
document.getElementById('kurang').addEventListener('click', () => displayOperator('-'));
document.getElementById('kali').addEventListener('click', () => displayOperator('*'));
document.getElementById('bagi').addEventListener('click', () => displayOperator('/'));
document.getElementById('koma').addEventListener('click', () => displayOperator('.'));

document.getElementById('samaDengan').addEventListener('click', () => {
    try{
        text.innerText = text.innerText + ' = ' + eval(text.innerText);
    }
    catch{
        text.innerText = 'Error!';
        setTimeout(() => { text.innerText =''; }, 1000);
    }
});

//AC dan CE
document.getElementById('CE').addEventListener('click', () => {
    if(text.innerText){
        text.innerText = text.innerText.slice(0,-1);
    }
});

document.getElementById('AC').addEventListener('click', () => {
    text.innerText = '';
});