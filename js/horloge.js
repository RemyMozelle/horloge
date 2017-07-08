// variable global
let compteur_secondes = 0; let compteur_minutes = 0; let compteur_heures = 0; 
let start;
// variable global : selections des elements
let on_Off = document.querySelectorAll('button');
let minute = document.querySelector('#aiguilleminute');
let heure = document.querySelector('#aiguilleheure');
// stock toutes les positions de l'aiguille heure + minute
const position = [    
     "top: 130px; left: 245px;",
     "top: 180px; left: 275px;",    
     "top: 215px; left: 290px;",    
     "top: 265px; left: 285px;",    
     "top: 300px; left: 245px;",    
     "top: 315px; left: 195px;",    
     "top: 300px; left: 145px;",    
     "top: 265px; left: 110px;",   
     "top: 215px; left: 95px;",    
     "top: 165px; left: 110px;",     
     "top: 130px; left: 145px;",
     "top: 110px; left: 200px"
];
// Ajout +1 minute
function addMinutes(){
    if(compteur_secondes === 59){
        compteur_minutes ++;
        compteur_secondes = 0;
    }
}
// ajoute +1 heure
function addHour(){
    if(compteur_minutes === 60){
        compteur_heures ++;
        compteur_secondes, compteur_minutes = 0;
        minute.setAttribute('style', position[11]);
    }
}
// Remet l'horloge a 0
function resetTime(){
    if(compteur_heures === 12){
        compteur_secondes,  compteur_minutes, compteur_heures = 0;
        heure.setAttribute('style', position[11]);
        minute.setAttribute('style', position[11]);
    }
}

function horloge(){
    compteur_secondes ++;
    addMinutes();
    addHour();
    resetTime();

//AUGUILLEMINUTE ( donne la position de l'aiguille en fonctione des minutes)
        if(compteur_minutes === 5) {minute.setAttribute("style", position[0])};
        if(compteur_minutes === 10) {minute.setAttribute("style", position[1])};
        if(compteur_minutes === 15) {minute.setAttribute("style", position[2])};
        if(compteur_minutes === 20) {minute.setAttribute("style", position[3])};
        if(compteur_minutes === 25) {minute.setAttribute("style", position[4])};
        if(compteur_minutes === 30) {minute.setAttribute("style", position[5])};
        if(compteur_minutes === 35) {minute.setAttribute("style", position[6])};
        if(compteur_minutes === 40) {minute.setAttribute("style", position[7])};
        if(compteur_minutes === 45) {minute.setAttribute("style", position[8])};
        if(compteur_minutes === 50) {minute.setAttribute("style", position[9])};
        if(compteur_minutes === 55) {minute.setAttribute("style", position[10])};
        if(compteur_minutes === 60) {minute.setAttribute("style", position[11])}; 

//AUGUILLEHEURE ( donne la position de l'aiguille en fonctione de l'heure )
        if(compteur_heures === 1)  {heure.setAttribute('style', position[0]);}
        if(compteur_heures === 2)  {heure.setAttribute('style', position[1]);}
        if(compteur_heures === 3)  {heure.setAttribute('style', position[2]);}
        if(compteur_heures === 4)  {heure.setAttribute('style', position[3]);}
        if(compteur_heures === 5)  {heure.setAttribute('style', position[4]);}
        if(compteur_heures === 6)  {heure.setAttribute('style', position[5]);}
        if(compteur_heures === 7)  {heure.setAttribute('style', position[6]);}
        if(compteur_heures === 8)  {heure.setAttribute('style', position[7]);}
        if(compteur_heures === 9)  {heure.setAttribute('style', position[8]);}
        if(compteur_heures === 10) {heure.setAttribute('style', position[9]);}
        if(compteur_heures === 11) {heure.setAttribute('style', position[10]);}
        if(compteur_heures === 12) {heure.setAttribute('style', position[11]);}

        console.log(compteur_secondes + ' seconde : ' + compteur_minutes + ' minute : ' + compteur_heures + ' heure'); //verifie le bon fonctionnement de l'horloge
}
// lance l'horloge
on_Off[1].addEventListener('click', ()=> {
    start = window.setInterval(horloge, 1); // pour testé si l'horge fonctionne comme prévue sinon mettre la valeur a 1000, pour 1seconde.
});
// arrete l'horloge grâce au clearInterval
on_Off[0].addEventListener('click', ()=> window.clearInterval(start)); 
