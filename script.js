function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
  let burger = document.getElementById("burger");
  if (burger.classList.contains("text-primary")) {
    burger.classList.replace("text-primary", "text-secondary");
  } else if (burger.classList.contains("text-secondary")) {
    burger.classList.replace("text-secondary", "text-primary");
  }
}

const workoutPlanHTML = `<div class="w-full flex items-center space-x-2">
          <h2 class="text-l font-bold">Bankdrücken</h2>
          <div
            class="border-b-2 border-dashed border-primary w-full flex-1"
          ></div>
          <!-- Desktop sets and reps -->
          <div class="hidden sm:flex text-sm font-bold space-x-2">
            <button
              class="max-w-6 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center"
              type="button"
            >
              -
            </button>
            <div class="relative">
              <label for="sets" class="absolute top-[-1.2rem] -left-[0.3rem]"
                >Sätze</label
              >
              <div
                class="w-auto h-auto border-2 border-primary p-0.5"
                id="sets"
              >
                12
              </div>
            </div>
            <button
              class="max-w-6 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center"
              type="button"
            >
              +
            </button>
          </div>
          <div class="hidden sm:flex text-sm font-bold space-x-2">
            <button
              class="max-w-6 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center"
              type="button"
            >
              -
            </button>
            <div class="relative">
              <label for="reps" class="absolute top-[-1.2rem] -left-[0.3rem]"
                >Wied.</label
              >
              <div
                class="w-auto h-auto border-2 border-primary p-0.5"
                id="reps"
              >
                12
              </div>
            </div>
            <button
              class="max-w-6 border-2 border-primary bg-secondary rounded-md py-0.5 px-2 box-border flex items-center justify-center"
              type="button"
            >
              +
            </button>
          </div>
          <!-- Mobile sets and reps -->
          <div class="flex space-x-2 sm:hidden">
            <div class="relative">
              <label
                for="sets"
                class="text-xs block absolute top-[-1rem] left-[0.30rem]"
                >Sätze</label
              >
              <input
                type="tel"
                id="sets"
                class="max-w-10 max-h-8 border-2 border-primary bg-white rounded-md py-0.5 px-1 box-border flex items-center justify-center"
                value="0"
                min="0"
                max="99"
                pattern="[0-9]*"
                inputmode="numeric"
              />
            </div>
            <div class="relative">
              <label
                for="reps"
                class="text-xs block absolute top-[-1rem] left-[0.30rem]"
                >Wied.</label
              >
              <input
                type="tel"
                id="reps"
                class="max-w-10 max-h-8 border-2 border-primary bg-white rounded-md py-0.5 px-1 box-border flex items-center justify-center"
                value="0"
                min="0"
                max="99"
                pattern="[0-9]*"
                inputmode="numeric"
              />
            </div>
          </div>
        </div>
        `;
document
  .getElementById("workoutPlan")
  .insertAdjacentHTML("beforeend", workoutPlanHTML.repeat(15));
