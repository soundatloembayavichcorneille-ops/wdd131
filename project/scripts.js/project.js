// Object
const featuredDish = {
    name: "Saka-Saka",
    ingredient: "Cassava Leaves",
    category: "Traditional Dish"
};

// Array
const dishes = [
    "Saka-Saka",
    "Chikwangue",
    "Maboke",
    "Poulet à la Moambe"
];

// Function 1: Local Storage Visit Counter
function displayVisitMessage() {

    let visits = Number(localStorage.getItem("visits")) || 0;

    visits++;

    localStorage.setItem("visits", visits);

    const result = document.querySelector("#result");

    if (!result) return;

    // Conditional Branching
    if (visits === 1) {

        result.textContent =
            `Welcome! Thank you for visiting Discover Congo for the first time.`;

    } else {

        result.textContent =
            `Welcome back! This is your visit number ${visits}.`;

    }
}

// Function 2: Contact Form
function handleContactForm() {

    const form = document.querySelector("#contactForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.querySelector("#name").value;

        const selectedDish =
            document.querySelector(
                'input[name="favoriteDish"]:checked'
            );

        let favoriteDish = "Not selected";

        if (selectedDish) {
            favoriteDish = selectedDish.value;
        }

        const result =
            document.querySelector("#result");

        // Template Literal
        result.innerHTML = `
            Thank you, ${name}!<br>
            Your favorite Congolese dish is
            <strong>${favoriteDish}</strong>.
        `;

        // localStorage
        localStorage.setItem(
            "favoriteDish",
            favoriteDish
        );

        form.reset();
    });
}

// Function 3: Featured Foods List
function displayFoods() {

    dishes.forEach(food => {
        console.log(food);
    });

}

// Function 4: Show Stored Favorite Dish
function showFavoriteDish() {

    const favoriteDish =
        localStorage.getItem("favoriteDish");

    if (favoriteDish) {

        console.log(
            `Previously selected dish: ${favoriteDish}`
        );

    }
}

// Function 5: Footer Year
function setCurrentYear() {

    const yearElement =
        document.querySelector("#currentyear");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }
}

// Run Functions
displayVisitMessage();
handleContactForm();
displayFoods();
showFavoriteDish();
setCurrentYear();