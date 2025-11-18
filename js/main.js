/***********FORMS**************/
const shoulder1 = document.querySelector("#hotspot4");
const head = document.querySelector("#hotspot3");
const shoulder2 = document.querySelector("#hotspot2");
const phone = document.querySelector("#hotspot1");

/*HOTSPOT 1 (ved venstre skulder)*/
/*******************************************/

/* Når musen kommer over skifter den farve*/
console.log(shoulder1);
shoulder1.addEventListener("mouseover", mouseOver4);

function mouseOver4() {
  console.log("mouseOver4");
  shoulder1.style.fill = "#3a585d";
}
/* Når musen er væk er den den gamle farve*/
shoulder1.addEventListener("mouseout", mouseOut4);

function mouseOut4() {
  console.log("mouseOut4");
  shoulder1.style.fill = "#d76c3eff";
}

/* Når man klikker skifter h1*/

shoulder1.addEventListener("click", clickSkulder1);

function clickSkulder1() {
  console.log("clickSkulder1");
  document.querySelector(".info-text> h2").textContent = "Lav det du udsætter";
  document.querySelector(".placeholder").textContent = "Tit tænder vi mobilen og begynder at scrolle, fordi der er noget vigtigt vi skal, som vi ikke gider. Det kan være lektier, afleveringer, arbejde eller at gøre rent.";
  document.querySelector("#efficiency").innerHTML = `<h3>123-metoden</h3>
  <p>Her kan det være en god ide at bruge 123-metoden. Du tæller til 3 (eller 5 eller 10) og så SKAL du slukke mobilen og få lavet noget.</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Scroll-pauser</h3>
  <p>Du kan også planlægge scroll-pauser. Fx må du scrolle i 10 minutter, når der er gået en time med at lave noget produktivt.</p>`;
  document.querySelector("#svg-container").innerHTML = '<img src= "./img/sidebarpng/sidebar1-8.png" alt="Billede af en pige der står i døren">';
}

/*fade-in animation på info-text box der ikke virker*/
shoulder1.addEventListener("click", fadeIn);

function fadeIn() {
  console.log("du har klikket på knappen og funktionen kører");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#svg-container").classList.add("fadeIn");
  document.querySelector(".placeholder").classList.add("fadeIn");
}

function removeFadeIn() {
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#efficiency").addEventListener("animationend, removeFadeIn");
}

/*HOTSPOT 2 (ved hoved)*/
/*******************************************/

/* Når musen kommer over skifter den farve*/
console.log(head);
head.addEventListener("mouseover", mouseOver3);

function mouseOver3() {
  console.log("mouseOver3");
  head.style.fill = "#3a585d";
}
/* Når musen er væk er den den gamle farve*/
head.addEventListener("mouseout", mouseOut3);

function mouseOut3() {
  console.log("mouseOut3");
  head.style.fill = "#d76c3eff";
}

/* Når man klikker skifter h1*/

head.addEventListener("click", clickHjerne);

function clickHjerne() {
  console.log("clickHjerne");
  document.querySelector(".info-text> h2").textContent = "Tal med nogen";
  document.querySelector(".placeholder").textContent = "Sluk mobilen og se hvem der ellers er hjemme. Tal lidt med din lillesøster, din roomie eller din far. Ring til nogen, gå ud og tal med naboen eller kig op og tal med din kammerat som også scroller.";
  document.querySelector("#efficiency").innerHTML = `<h3>Vidste du?</h3>
  <p>At tale med folk IRL giver betydelige fordele for mental sundhed, kommunikation og relationsopbygning.

Studier viser at det booster humøret mere end det gør at være på sociale medier.
</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Hvad med at...</h3>
  <p>Stemmen alene under en telefonsamtale kan reducere stress og angst.</p>`;
  document.querySelector("#svg-container").innerHTML = '<img src= "./img/sidebarpng/sidebar2-8.png" alt="Billede af en pige der står i døren">';
}

/*fade-in animation på info-text box der ikke virker*/
head.addEventListener("click", fadeIn);

function fadeIn() {
  console.log("du har klikket på knappen og funktionen kører");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#svg-container").classList.add("fadeIn");
  document.querySelector(".placeholder").classList.add("fadeIn");
}

/*HOTSPOT 3 (ved højre skulder)*/
/*******************************************/

/* Når musen kommer over skifter den farve*/
console.log(shoulder2);
shoulder2.addEventListener("mouseover", mouseOver2);

function mouseOver2() {
  console.log("mouseOver2");
  shoulder2.style.fill = "#3a585d";
}
/* Når musen er væk er den den gamle farve*/
shoulder2.addEventListener("mouseout", mouseOut2);

function mouseOut2() {
  console.log("mouseOutHead");
  shoulder2.style.fill = "#d76c3eff";
}

/* Når man klikker skifter h1*/

shoulder2.addEventListener("click", clickSkulder2);

function clickSkulder2() {
  console.log("clickSkulder2");
  document.querySelector(".info-text> h2").textContent = "Dyrk dine interesser";
  document.querySelector(".placeholder").textContent = "Læg telefonen og dyrk dine fritidsinteresser i stedet. Et eller andet du kan lide at lave som ikke har med din telefon at gøre.";
  document.querySelector("#efficiency").innerHTML = `<h3>Men jeg ved ikke...</h3>
  <p>Hvis du ikke er sikker på hvad det er, kan du med fordel reflektere over hvad du ser mest på dit feed. Bøger, folk der laver kunst, madlavning, udendørs aktiviteter osv. 
Prøv at gør det selv.</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Fordele</h3>
  <p>At dyrke interesser og hobbyer i stedet for at tilbringe tid på sociale medier tilbyder

reduktion af stress og angst
forbedret humør og lykkefølelse
bedre søvnkvalitet
udvikling af nye færdigheder
og øget kreativitet</p>`;
  document.querySelector("#svg-container").innerHTML = '<img src= "./img/sidebarpng/sidebar3-8.png" alt="Billede af en pige der står i døren">';
}

/*fade-in animation på info-text box der ikke virker*/
shoulder2.addEventListener("click", fadeIn);

function fadeIn() {
  console.log("du har klikket på knappen og funktionen kører");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#svg-container").classList.add("fadeIn");
  document.querySelector(".placeholder").classList.add("fadeIn");
}

/*HOTSPOT 4 (ved telefon)*/
/*******************************************/

/* Når musen kommer over skifter den farve*/
console.log(phone);
phone.addEventListener("mouseover", mouseOver1);

function mouseOver1() {
  console.log("mouseOver1");
  phone.style.fill = "#3a585d";
}
/* Når musen er væk er den den gamle farve*/
phone.addEventListener("mouseout", mouseOut1);

function mouseOut1() {
  console.log("mouseOut1");
  phone.style.fill = "#d76c3eff";
}

/* Når man klikker skifter h1*/

phone.addEventListener("click", clickPhone);

function clickPhone() {
  console.log("clickPhone");
  document.querySelector(".info-text> h2").textContent = "Hvordan bliver du påvirket?";
  document.querySelector(".placeholder").textContent = "";
  document.querySelector("#efficiency").innerHTML = `<h3>Dopamin-frigivelse</h3>
  <p>Sociale medieplatforme er designet til at maksimere engagement og udløse dopamin – en neurotransmitter forbundet med nydelse og belønning – i hjernen. Dette skaber en "belønningsloop", der kan føre til afhængighedslignende adfærd, hvor hjernen konstant søger efter sit næste "fix" af dopamin.
</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Ændringer i hjernens struktur</h3>
  <p>Overdreven skærmtid (på sociale medier) ændrer i de områder af hjernen, der er ansvarlige for belønning, motivation og impulskontrol (såsom den præfrontale cortex og striatum), hvilket medfører nedsat evne til at modstå trangen til at tjekke telefonen.</p>`;
  document.querySelector("#svg-container").innerHTML = '<img src= "./img/sidebarpng/sidebar4-8.png" alt="Billede af en pige der står i døren">';
}

/*fade-in animation på info-text box der ikke virker*/
phone.addEventListener("click", fadeIn);

function fadeIn() {
  console.log("du har klikket på knappen og funktionen kører");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#svg-container").classList.add("fadeIn");
  document.querySelector(".placeholder").classList.add("fadeIn");
}
/**********************GO CRAZY knap********************/
const btn = document.querySelector("#gocrazy");
const info_h1 = document.querySelector("#hjalp");
const hjalp = document.querySelector("#hjalp");
const stop = document.querySelector("#stop");
const panik = document.querySelector("#panik");

btn.addEventListener("click", transformh1);

function transformh1() {
  console.log("du har klikket på knappen og funktionen kører");
  hjalp.classList.add("transform");
  hjalp.textContent = "HJÆLP, jeg har brain rot, hvad gør jeg??!";
  stop.classList.remove("hide");
  panik.classList.remove("hide");
}

stop.addEventListener("click", holdop);

function holdop() {
  console.log("du har klikket på knappen og funktionen kører");
  hjalp.classList.remove("vibrate");

  hjalp.classList.remove("transform");
  hjalp.classList.remove("transform2");
  hjalp.textContent = "Okay... *trækker vejret*";
  stop.classList.add("hide");
  panik.classList.add("hide");
}

panik.addEventListener("click", panikfr);

function panikfr() {
  console.log("du har klikket på knappen og funktionen kører");
  hjalp.classList.add("transform2");
  hjalp.textContent = "AhhhAaaaahahhahaha AhhhAaaaahahhahaha";
}

/********************************************************/
