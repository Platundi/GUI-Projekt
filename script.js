class Trainingsplan {
  constructor(name, uebungen = []) {
    this.name = name;
    this.uebungen = uebungen;
  }
}

// Von chatGPT generiert (Prompt: generate motivational phrases for bodybuilding in js array) (07.02.2025)
const motivationalPhrases = [
  "Stärke wächst nicht aus körperlicher Kraft – vielmehr aus unbeugsamen Willen.",
  "Deine einzige Grenze ist die, die du dir selbst setzt.",
  "Erfolg ist das Ergebnis von harter Arbeit, Disziplin und Ausdauer.",
  "Gib niemals auf, der Schmerz ist nur vorübergehend, der Stolz bleibt.",
  "Du wirst nicht stärker, wenn du immer dasselbe tust.",
  "Jeder Tag ist eine neue Chance, stärker zu werden.",
  "Es gibt keine Abkürzungen zu einem Körper, auf den du stolz sein kannst.",
  "Ziele sind das, was dich antreibt, der Wille ist der Weg.",
  "Glaube an dich selbst, und der Rest wird folgen.",
  "Schweiß ist nur das, was die Muskeln stärker macht.",
];

let trainingsplaene = [];
let cart = [];

// Übung dem Warenkorb hinzufügen
function addtoCart(uebung) {
  let uebungsname = uebung.parentNode;
  cart.push(uebungsname.querySelector("h5").innerText);
  console.table(cart);
  addCartItems();
  toggleNoti();
}

function deleteFromCart(index) {
  cart.splice(index, 1);
  addCartItems();
  toggleNoti();
}

function toggleNoti() {
  if (cart.length != 0) {
    let noti = document.getElementById("noti");
    noti.innerText = cart.length;
    noti.classList.add("flex");
    noti.classList.remove("hidden");
    let mobileNoti = document.getElementById("mobileNoti");
    mobileNoti.innerText = cart.length;
    mobileNoti.classList.add("flex");
    mobileNoti.classList.remove("hidden");
  }
}

// Warenkorb zur Anzeige bringen
function toggleCart() {
  const div = document.getElementById("cart");
  div.classList.toggle("flex");
  div.classList.toggle("-right-0"); // Move to screen
  div.classList.toggle("-right-full"); // Offscreen to right
}

// Warenkorbitems zur Anzeige bringen
function addCartItems() {
  let cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  let cartItemsHTML = "";
  if (cart.length != 0) {
    for (let i = 0; i < cart.length; i++) {
      const e = cart[i];
      // Trashcan von ChatGPT generiert. Prompt: "trashcan svg" (14.02.2025)
      cartItemsHTML += `    <div class="flex space-x-2 items-center">
      <p>${e}</p>
          <button type="button" class="p-1" onclick="deleteFromCart(${i})">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        class="w-6 h-6 text-primary fill-current hover:text-secondary transition duration-300"
      >
        <path
          d="M9 3V2h6v1h5v2H4V3h5zm-3 4h12l-1.5 14h-9L6 7zm3 2v10h2V9H9zm4 0v10h2V9h-2z"
        />
      </svg>
    </button>
    </div>`;
    }
    cartItems.insertAdjacentHTML("beforeend", cartItemsHTML);
  }
}

// Trainingsplannamen vergeben und Warenkorb danach ausblenden
function createPlan() {
  let trainingplanName = "";
  trainingplanName = prompt("Geben Sie den Namen für den Trainingsplan ein:");
  trainingsplaene.push(new Trainingsplan(trainingplanName, cart));
  toggleCart();
}

// Trainingspläne Tabubergreifend verfügbar machen
function saveTrainingsplaene() {
  sessionStorage.setItem("trainingsplaene", JSON.stringify(trainingsplaene));
}

// Von chatGPT generiert (Prompts: insert first motivational phrase into html element and replace that with the next one after 15 seconds. i want a transition for the replacement of text) (07.02.2025)
let i = 0;

// Motivationssprüche
function updateMotivation() {
  const element = document.getElementById("motivationalPhrases");
  if (element != null) {
    // Fade-out effect
    element.classList.add("opacity-0");

    setTimeout(() => {
      // Change the text after fade-out
      element.innerText = motivationalPhrases[i];

      // Fade-in effect
      element.classList.remove("opacity-0");
      element.classList.add("opacity-100");

      // Update the index for the next phrase
      i = (i + 1) % motivationalPhrases.length;
    }, 1000); // Wait for the fade-out duration (1s)
  }
}

updateMotivation();
setInterval(updateMotivation, 15000); // Updates every 15 seconds

// Mobiles Menü zur Anzeige bringen
function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
  let burger = document.getElementById("burger");
  // Burger-Button secondary lassen, wenn er geklickt wurde
  if (burger.classList.contains("text-primary")) {
    burger.classList.replace("text-primary", "text-secondary");
  } else if (burger.classList.contains("text-secondary")) {
    burger.classList.replace("text-secondary", "text-primary");
  }
}

// Sätze hoch- bzw. runterzählen
function setsLogic(button, i, plan) {
  let sets = document.getElementById("sets" + i + plan);
  if (button.id == "setsIncrease") {
    sets.value = parseInt(sets.value) + 1;
  } else if (button.id == "setsDecrease") {
    sets.value = parseInt(sets.value) - 1;
  }
}

// Wiederholungen hoch- bzw. runterzählen
function repsLogic(button, i, plan) {
  let reps = document.getElementById("reps" + i + plan);
  if (button.id == "repsIncrease") {
    reps.value = parseInt(reps.value) + 1;
  } else if (button.id == "repsDecrease") {
    reps.value = parseInt(reps.value) - 1;
  }
}

// Seite trainingsplaene.html dynamisch generieren
let workoutPlanHTML;

if (document.getElementById("workoutPlan") != null) {
  // Gespeicherte Trainingsplaene holen
  trainingsplaene = JSON.parse(sessionStorage.getItem("trainingsplaene"));
  workoutPlanHTML = sessionStorage.getItem("workoutPlanHTML");
  if (trainingsplaene != null) {
    for (let i = 0; i < trainingsplaene.length; i++) {
      const e = trainingsplaene[i];
      // Wenn noch kein HTML vorhanden ist workoutPlanHTML initialisieren, ansonsten
      if (workoutPlanHTML == undefined) {
        workoutPlanHTML = `<div class="w-full pb-2 border-b-4 border-primary_light">
			<h2 class="text-2xl sm:text-4xl font-bold">${e.name}</h2>
	  </div>`;
      } else {
        workoutPlanHTML += `<div class="w-full pb-2 border-b-4 border-primary_light">
			<h2 class="text-2xl sm:text-4xl font-bold">${e.name}</h2>
	  </div>`;
      }
      for (let j = 0; j < e.uebungen.length; j++) {
        const uebung = e.uebungen[j];
        workoutPlanHTML += `<div class="w-full flex items-center space-x-2">
							<h2 class="text-xl sm:text-2xl font-bold">${uebung}</h2>
						<div
							class="border-b-2 border-dashed border-primary w-full flex-1"
						></div>
						<!-- -- Desktop sets and reps -- -->
						<div class="hidden sm:flex text-base font-bold space-x-1">
							<button
								class="min-w-8 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center active:scale-95 active:bg-secondary_focus transition"
								type="button"
								id="setsDecrease"
								onclick="setsLogic(this,${j},'${e.name}')"
							>
								-
							</button>
							<div class="relative">
								<label for="sets${j}${e.name}" class="absolute top-[-1.3rem] -left-[0.2rem]"
									>Sätze</label
								>
								<input
									type="text"
									class="text-center w-auto h-auto border-2 max-w-8 border-primary p-0.5 rounded-md outline-secondary"
									id="sets${j}${e.name}"
									value="0"
									min="0"
									max="99"
								/>
							</div>
							<button
								class="min-w-8 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center active:scale-95 active:bg-secondary_focus"
								type="button"
								id="setsIncrease"
								onclick="setsLogic(this,${j},'${e.name}')"
							>
								+
							</button>
						</div>
						<div class="hidden sm:flex text-base font-bold space-x-1">
							<button
								class="min-w-8 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center active:scale-95 active:bg-secondary_focus"
								type="button"
								id="repsDecrease"
								onclick="repsLogic(this,${j},'${e.name}')"
							>
								-
							</button>
							<div class="relative">
								<label for="reps${j}${e.name}" class="absolute top-[-1.3rem] -left-[0.3rem]"
									>Wied.</label
								>
								<input
									type="text"
									class="text-center w-auto h-auto border-2 max-w-8 border-primary p-0.5 rounded-md outline-secondary"
									id="reps${j}${e.name}"
									value="0"
									min="0"
									max="99"
								/>
							</div>
							<button
								class="min-w-8 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center active:scale-95 active:bg-secondary_focus"
								type="button"
								id="repsIncrease"
								onclick="repsLogic(this,${j},'${e.name}')"
							>
								+
							</button>
						</div>
						<!-- -- Mobile sets and reps -- -->
						<div class="flex space-x-2 font-bold sm:hidden">
							<div class="relative">
								<label
									for=""
									class="text-xs block absolute top-[-1rem] left-[0.30rem]"
									>Sätze</label
								>
								<input
									type="tel"
									id=""
									class="max-w-10 max-h-8 border-2 border-primary bg-white rounded-md py-0.5 px-1 box-border text-center"
									value="0"
									min="0"
									max="99"
									pattern="[0-9]*"
									inputmode="numeric"
								/>
							</div>
							<div class="relative">
								<label
									for=""
									class="text-xs block absolute top-[-1rem] left-[0.30rem]"
									>Wied.</label
								>
								<input
									type="tel"
									id=""
									class="max-w-10 max-h-8 border-2 border-primary bg-white rounded-md py-0.5 px-1 box-border text-center"
									value="0"
									min="0"
									max="99"
									pattern="[0-9]*"
									inputmode="numeric"
								/>
							</div>
						</div>
					</div>`;
      }
    }
    // Supposed to fix border bug, but instead fixes redundant workout plan being generated kinda
    setTimeout(() => {
      document
        .getElementById("workoutPlan")
        .insertAdjacentHTML("beforeend", workoutPlanHTML);
    }, 100);

    sessionStorage.setItem(
      "workoutPlanHTML",
      document.getElementById("workoutPlan").innerHTML
    );
  }
}
