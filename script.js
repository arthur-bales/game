document.addEventListener("DOMContentLoaded", () => {
  let click = 0;
  let kamas = document.querySelector(".montant-kamas");

  const displayPointDeVie = document.querySelector(".point-de-vie");
  let hp = 1000;
  const mob = document.querySelector(".epouvantail");
  const displayResultAttaque = document.querySelector(".result-attaque");
  let attaque = 1;

  displayPointDeVie.innerText = hp + " / 1000";
  let statAttaque = document.querySelector(".stat-attaque");
  statAttaque.innerText = "- Attaque : " + attaque;

  // Button Buy --------------------------------------------
  const buyTest = document.querySelector(".buy");

  function buy() {
    click = click - 10;
    attaque++;
    console.log(click);
    kamas.innerText = click;
    alert("+ 1 attaque");

    // Stat Attaque --------------------------------------
    let statAttaque = document.querySelector(".stat-attaque");
    statAttaque.innerText = "- Attaque : " + attaque;
  }

  // Fonctionnalité GamePlay ------------------------------
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
  });

  buyTest.addEventListener("click", () => {
    if (click >= 10) {
      buy();
    } else {
      alert("⚠️ Pas assez de kamas ⚠️");
    }
  });

  // Bouton shop -------------------------------------
  const shop = document.querySelector(".shop");
  const shopButton = document.querySelector(".deux");
  const closeShopButton = document.querySelector(".closeShop");
  shopButton.addEventListener("click", () => {
    shop.style.display = "block";
  });

  closeShopButton.addEventListener("click", () => {
    shop.style.display = "none";
  });
});
