let click = 0; 
let kamas = document.querySelector(".montant-kamas"); 


const displayPointDeVie = document.querySelector(".point-de-vie"); 
let hp = 1000; 
const mob = document.querySelector(".epouvantail"); 
const displayResultAttaque = document.querySelector(".result-attaque"); 
let attaque = 1; 

displayPointDeVie.innerText = hp + " / 1000"; 

mob.addEventListener("click", () => { //Barre d'xp 
    click++; 
    console.log(click); 
})

mob.addEventListener("click", ()=> {
    if (hp > 0){
    hp = hp - attaque; 
    
    displayPointDeVie.innerText = hp  + " / 1000"; 
    displayResultAttaque.innerText = "- " + attaque; 
    displayResultAttaque.classList.add("show"); 
    setTimeout(() => {
        displayResultAttaque.classList.remove("show"); 
    setTimeout(() => {
        displayResultAttaque.innerText ="\u00A0"; 
    }, 100);
    }, 200); 
    kamas.innerText = click; 
    } else {
        
    }
})
