// variable global
let compteur_minutes = 0;
let compteur_heures = 0;
let compteur_secondes = 0;
let start;
// variable global : selections des elements
let position = document.querySelectorAll('div');
let up = document.querySelectorAll('button');
let minute = document.getElementById('aiguilleminute');
let heure = document.getElementById('aiguilleheure');

function addSeconde(){
// MINUTES
    compteur_secondes += 5; // pour le test, sinon mettre la valeur a ++.
    if(compteur_minutes === 5) {minute.setAttribute('style', 'top: 130px; left: 245px');}
    if(compteur_minutes === 10){minute.setAttribute('style', 'top: 180px; left: 275px');}
    if(compteur_minutes === 15){minute.setAttribute('style', 'top: 215px; left: 290px');}
    if(compteur_minutes === 20){minute.setAttribute('style', 'top: 265px; left: 285px');}
    if(compteur_minutes === 25){minute.setAttribute('style', 'top: 300px; left: 245px');}
    if(compteur_minutes === 30){minute.setAttribute('style', 'top: 315px; left: 195px');}
    if(compteur_minutes === 35){minute.setAttribute('style', 'top: 300px; left: 145px');}
    if(compteur_minutes === 40){minute.setAttribute('style', 'top: 265px; left: 110px');}
    if(compteur_minutes === 45){minute.setAttribute('style', 'top: 215px; left: 95px');}
    if(compteur_minutes === 50){minute.setAttribute('style', 'top: 165px; left: 110px');}
    if(compteur_minutes === 55){minute.setAttribute('style', 'top: 130px; left: 145px');}
    

// HEURES

    if(compteur_heures === 1) {heure.setAttribute('style', 'top: 130px; left: 245px');}
    if(compteur_heures === 2){heure.setAttribute('style', 'top: 180px; left: 275px');}
    if(compteur_heures === 3){heure.setAttribute('style', 'top: 215px; left: 290px');}
    if(compteur_heures === 4){heure.setAttribute('style', 'top: 265px; left: 285px');}
    if(compteur_heures === 5){heure.setAttribute('style', 'top: 300px; left: 245px');}
    if(compteur_heures === 6){heure.setAttribute('style', 'top: 315px; left: 195px');}
    if(compteur_heures === 7){heure.setAttribute('style', 'top: 300px; left: 145px');}
    if(compteur_heures === 8){heure.setAttribute('style', 'top: 265px; left: 110px');}
    if(compteur_heures === 9){heure.setAttribute('style', 'top: 215px; left: 95px');}
    if(compteur_heures === 10){heure.setAttribute('style', 'top: 165px; left: 110px');}
    if(compteur_heures === 11){heure.setAttribute('style', 'top: 130px; left: 145px');}
    if(compteur_heures === 12){heure.setAttribute('style', 'top: 110px; left: 200px');}


    if(compteur_secondes === 60){
        compteur_minutes ++;
        compteur_secondes = 0;
    }

    if(compteur_minutes === 60){
        compteur_heures ++;
        compteur_minutes = 0;
        minute.setAttribute('style', 'top: 110px; left: 200px');
        
    }

    if(compteur_heures === 24){        
        compteur_secondes = 0;
        compteur_minutes = 0;
        compteur_heures = 0;
        heure.setAttribute('style', 'top: 110px; left: 200px');
    }
    console.log(compteur_secondes + ' seconde : ' + compteur_minutes + ' minute : ' + compteur_heures + ' heure');
}

up[0].addEventListener('click', ()=> {
    start = window.setInterval(addSeconde, 10); // pour testé si l'horge fonctionne comme prévue sinon mettre la valeur a 1000, pour 1seconde.
});

up[1].addEventListener('click', ()=> window.clearInterval(start));
