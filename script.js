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

// Von chatGPT generitert (Prompts: insert first motivational phrase into html element and replace that with the next one after 15 seconds. i want a transition for the replacement of text) (07.02.2025)
let i = 0;

function updateMotivation() {
	const element = document.getElementById("motivationalPhrases");

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

updateMotivation();
setInterval(updateMotivation, 15000); // Updates every 15 seconds

function toggleMenu() {
	document.getElementById("mobile-menu").classList.toggle("hidden");
	let burger = document.getElementById("burger");
	if (burger.classList.contains("text-primary")) {
		burger.classList.replace("text-primary", "text-secondary");
	} else if (burger.classList.contains("text-secondary")) {
		burger.classList.replace("text-secondary", "text-primary");
	}
}

function setsLogic(button) {
	let sets = document.getElementById("sets");
	if (button.id == "setsIncrease") {
		sets.value = parseInt(sets.value) + 1;
	} else if (button.id == "setsDecrease") {
		sets.value = parseInt(sets.value) - 1;
	}
}

function repsLogic(button) {
	let reps = document.getElementById("reps");
	if (button.id == "repsIncrease") {
		reps.value = parseInt(reps.value) + 1;
	} else if (button.id == "repsDecrease") {
		reps.value = parseInt(reps.value) - 1;
	}
}

// const workoutPlanHTML = `<div class="w-full flex items-center space-x-2">
//           <h2 class="text-l font-bold">Bankdrücken</h2>
//           <div
//             class="border-b-2 border-dashed border-primary w-full flex-1"
//           ></div>
//           <!-- Desktop sets and reps -->
//           <div class="hidden sm:flex text-sm font-bold space-x-2">
//             <button
//               class="max-w-6 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center"
//               type="button"
//             >
//               -
//             </button>
//             <div class="relative">
//               <label for="sets" class="absolute top-[-1.2rem] -left-[0.3rem]"
//                 >Sätze</label
//               >
//               <div
//                 class="w-auto h-auto border-2 border-primary p-0.5"
//                 id="sets"
//               >
//                 12
//               </div>
//             </div>
//             <button
//               class="max-w-6 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center"
//               type="button"
//             >
//               +
//             </button>
//           </div>
//           <div class="hidden sm:flex text-sm font-bold space-x-2">
//             <button
//               class="max-w-6 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center"
//               type="button"
//             >
//               -
//             </button>
//             <div class="relative">
//               <label for="reps" class="absolute top-[-1.2rem] -left-[0.3rem]"
//                 >Wied.</label
//               >
//               <div
//                 class="w-auto h-auto border-2 border-primary p-0.5"
//                 id="reps"
//               >
//                 12
//               </div>
//             </div>
//             <button
//               class="max-w-6 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center"
//               type="button"
//             >
//               +
//             </button>
//           </div>
//           <!-- Mobile sets and reps -->
//           <div class="flex space-x-2 sm:hidden">
//             <div class="relative">
//               <label
//                 for="sets"
//                 class="text-xs block absolute top-[-1rem] left-[0.30rem]"
//                 >Sätze</label
//               >
//               <input
//                 type="tel"
//                 id="sets"
//                 class="max-w-10 max-h-8 border-2 border-primary bg-white rounded-md py-0.5 px-1 box-border flex items-center justify-center"
//                 value="0"
//                 min="0"
//                 max="99"
//                 pattern="[0-9]*"
//                 inputmode="numeric"
//               />
//             </div>
//             <div class="relative">
//               <label
//                 for="reps"
//                 class="text-xs block absolute top-[-1rem] left-[0.30rem]"
//                 >Wied.</label
//               >
//               <input
//                 type="tel"
//                 id="reps"
//                 class="max-w-10 max-h-8 border-2 border-primary bg-white rounded-md py-0.5 px-1 box-border flex items-center justify-center"
//                 value="0"
//                 min="0"
//                 max="99"
//                 pattern="[0-9]*"
//                 inputmode="numeric"
//               />
//             </div>
//           </div>
//         </div>
//         `;
// document
//   .getElementById("workoutPlan")
//   .insertAdjacentHTML("beforeend", workoutPlanHTML.repeat(15));
