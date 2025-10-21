document.addEventListener("DOMContentLoaded", () => {
let click = 0;
let kamas = document.querySelector(".montant-kamas");

const displayPointDeVie = document.querySelector(".point-de-vie");
let hp = 1000;
const mob = document.querySelector(".epouvantail");
const displayResultAttaque = document.querySelector(".result-attaque");
let attaque = 1;

displayPointDeVie.innerText = hp + " / 1000";

const buyTest = document.querySelector(".test"); //Button Buy

function buy() {
    click = click - 10;
    attaque++;
    console.log(click);
    kamas.innerText = click;
    alert("+ 1 attaque")
}

mob.addEventListener("click", () => {
  if (hp > 0) {
    hp = hp - attaque;
    click++;
    displayPointDeVie.innerText = hp + " / 1000";
    displayResultAttaque.innerText = "- " + attaque;
    displayResultAttaque.classList.add("show");
    setTimeout(() => {
      displayResultAttaque.classList.remove("show");
      setTimeout(() => {
        displayResultAttaque.innerText = "\u00A0";
      }, 100);
    }, 200);
    kamas.innerText = click;
    }
  } );

        buyTest.addEventListener("click", () => {
        if (click >= 10){
        buy();
        }
      });

// Bouton shop
const ShopButton = document.querySelector(".deux");
ShopButton.addEventListener("click", () => {
  console.log("click ok !");
});

});