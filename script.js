document.addEventListener("DOMContentLoaded", () => {
  let click = 0;
  let kamas = document.querySelector(".montant-kamas");

  const displayPointDeVie = document.querySelector(".point-de-vie");
  let hp = 100000;
  const mob = document.querySelector(".epouvantail");
  const displayResultAttaque = document.querySelector(".result-attaque");
  let attaque = 1;

  displayPointDeVie.innerText = hp.toLocaleString("fr-FR") + " HP";
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
      displayPointDeVie.innerText = hp.toLocaleString("fr-FR") + " HP";
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


  // Aide de chatGPT pour desactiver le zoom sur mobile (double click)
  let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault(); // bloque le zoom double tap
  }
  lastTouchEnd = now;
}, false);
});
