var befogo1 = document.getElementById('befogo1');
var befogo2 = document.getElementById('befogo2');
var atfogo = document.getElementById('atfogo');

function atfogoSzamitas() {
    let a = Math.pow(befogo1.value, 2);
    let b = Math.pow(befogo2.value, 2);
    atfogo.value = Math.sqrt(a+b);
}

function megszerkesztheto() {
    if (Math.pow(atfogo.value, 2) != Math.pow(befogo1.value, 2) + Math.pow(befogo2.value, 2)) {
        alert('A derékszögű háromszög NEM szerkeszthető meg!');
    } else {
        alert('A derékszögű háromszög megszerkeszthető!');
    }
}

function randomizalas() {
    befogo1.value = randomSzam(10,100);
    befogo2.value = randomSzam(10,100);
    atfogoSzamitas();
}

function randomSzam(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}