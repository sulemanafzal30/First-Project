
/* =========================================
   1. PET DATABASE
========================================= */

const pets = [
    {
        id: 1,
        name: "Max",
        breed: "Golden Retriever",
        type: "Dog",
        age: "2 years",
        price: "Free",
        adopted: false,
        history: "Max was rescued from the streets and cared for by our shelter.",
        owner: "Paws & Connect Shelter",
        medical: "Vaccinated, dewormed, and healthy.",
        images: [
            "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85",
            "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&w=800&q=85",
            "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=85"
        ]
    },

    {
        id: 2,
        name: "Luna",
        breed: "Persian Cat",
        type: "Cat",
        age: "1 year",
        price: "Free",
        adopted: false,
        history: "Luna was found abandoned and has been living safely in our shelter.",
        owner: "Paws & Connect Shelter",
        medical: "Vaccinated and regularly examined.",
        images: [
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=85",
            "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=85",
            "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=85"
        ]
    },

    {
        id: 3,
        name: "Buddy",
        breed: "Labrador",
        type: "Dog",
        age: "3 years",
        price: "Free",
        adopted: true,
        history: "Buddy was rescued and successfully adopted by a loving family.",
        owner: "Ahmed Khan",
        medical: "Vaccinated and healthy.",
        images: [
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=85",
            "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=85",
            "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=85"
        ]
    },

    {
        id: 4,
        name: "Milo",
        breed: "British Shorthair",
        type: "Cat",
        age: "8 months",
        price: "Free",
        adopted: false,
        history: "Milo was brought to our shelter by a family unable to care for him.",
        owner: "Paws & Connect Shelter",
        medical: "Vaccinated and dewormed.",
        images: [
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=85",
            "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=85",
            "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=85"
        ]
    },

    {
        id: 5,
        name: "Rocky",
        breed: "German Shepherd",
        type: "Dog",
        age: "4 years",
        price: "Free",
        adopted: true,
        history: "Rocky was adopted after spending several months in our shelter.",
        owner: "Sara Malik",
        medical: "Healthy and fully vaccinated.",
        images: [
            "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=85",
            "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=800&q=85",
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=85"
        ]
    }
];


/* =========================================
   2. DOM ELEMENTS
========================================= */

const petTableBody = document.getElementById("pet-table-body");

const petDetailSection = document.getElementById("pet-detail");
const petDetailContent = document.getElementById("pet-detail-content");

const petsSection = document.getElementById("pets");

const backButton = document.getElementById("back-to-pets");

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

const themeToggle = document.getElementById("theme-toggle");

const adoptionModal = document.getElementById("adoption-modal");
const modalMessage = document.getElementById("modal-message");

const closeModalButton = document.getElementById("close-modal");
const modalConfirmButton = document.getElementById("modal-confirm");

const contactButton = document.getElementById("contact-button");


/* =========================================
   3. DISPLAY PET TABLE
========================================= */

function renderPets() {

    petTableBody.innerHTML = "";

    pets.forEach((pet, index) => {

        const row = document.createElement("tr");

        const statusIcon = pet.adopted ? "✓" : "✗";
        const statusText = pet.adopted ? "Adopted" : "Available";

        row.innerHTML = `
            <td>${index + 1}</td>

            <td>
                <a href="#pet-detail"
                   class="pet-name-link"
                   data-pet-id="${pet.id}">
                   ${pet.name}
                </a>
            </td>

            <td>${pet.breed}</td>

            <td>${pet.price}</td>

            <td>
                <span class="status ${pet.adopted ? "adopted" : "available"}"
                      aria-label="${statusText}">
                    ${statusIcon} ${statusText}
                </span>
            </td>
        `;

        petTableBody.appendChild(row);

    });

}


/* =========================================
   4. OPEN PET PROFILE
========================================= */

function openPetProfile(petId) {

    const pet = pets.find(item => item.id === Number(petId));

    if (!pet) return;

    petsSection.classList.add("hidden");
    petDetailSection.classList.remove("hidden");

    const galleryHTML = pet.images.map(image => `
        <img src="${image}"
             alt="${pet.name}"
             loading="lazy">
    `).join("");

    petDetailContent.innerHTML = `
        <div class="pet-profile">

            <span class="section-label">${pet.type} PROFILE</span>

            <h2>${pet.name}</h2>

            <p><strong>Breed:</strong> ${pet.breed}</p>

            <p><strong>Age:</strong> ${pet.age}</p>

            <p><strong>Background:</strong> ${pet.history}</p>

            <p><strong>Owner:</strong> ${pet.owner}</p>

            <p><strong>Medical History:</strong> ${pet.medical}</p>

            <p>
                <strong>Adoption Status:</strong>
                <span class="status ${pet.adopted ? "adopted" : "available"}">
                    ${pet.adopted ? "✓ Adopted" : "✗ Available"}
                </span>
            </p>

            <p><strong>Adoption Fee:</strong> ${pet.price}</p>

            <h3>Photo Gallery</h3>

            <div class="pet-gallery">
                ${galleryHTML}
            </div>

            ${
                !pet.adopted
                ? `
                    <button class="adopt-button"
                            id="adopt-button"
                            data-pet-id="${pet.id}">
                        Adopt Me ❤️
                    </button>
                  `
                : `
                    <p class="status adopted">
                        This pet has already found a loving home.
                    </p>
                  `
            }

        </div>
    `;

    window.location.hash = "pet-detail";

}


/* =========================================
   5. PET TABLE CLICK EVENTS
========================================= */

petTableBody.addEventListener("click", function(event) {

    const petLink = event.target.closest(".pet-name-link");

    if (!petLink) return;

    event.preventDefault();

    openPetProfile(petLink.dataset.petId);

});


/* =========================================
   6. BACK TO PET DIRECTORY
========================================= */

backButton.addEventListener("click", function() {

    petDetailSection.classList.add("hidden");
    petsSection.classList.remove("hidden");

    window.location.hash = "pets";

});


/* =========================================
   7. ADOPTION SYSTEM
========================================= */

petDetailContent.addEventListener("click", function(event) {

    const adoptButton = event.target.closest("#adopt-button");

    if (!adoptButton) return;

    const petId = Number(adoptButton.dataset.petId);

    const pet = pets.find(item => item.id === petId);

    if (!pet || pet.adopted) return;

    pet.adopted = true;
    pet.owner = "New Loving Family";

    modalMessage.textContent =
        `${pet.name} has successfully been adopted! Thank you for giving this pet a loving home.`;

    adoptionModal.classList.remove("hidden");

    // Update the pet table
    renderPets();

    // Update the profile
    openPetProfile(pet.id);

});


/* =========================================
   8. CLOSE ADOPTION MODAL
========================================= */

function closeModal() {

    adoptionModal.classList.add("hidden");

}

closeModalButton.addEventListener("click", closeModal);

modalConfirmButton.addEventListener("click", closeModal);

adoptionModal.addEventListener("click", function(event) {

    if (event.target === adoptionModal) {
        closeModal();
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================================
   9. GOOGLE SEARCH REDIRECTION
========================================= */

searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const query = searchInput.value.trim();

    if (!query) return;

    const googleURL =
        "https://www.google.com/search?q=" +
        encodeURIComponent(query);

    window.location.href = googleURL;

});


/* =========================================
   10. DARK / LIGHT MODE
========================================= */

function updateThemeButton() {

    const isDark = document.body.classList.contains("dark-theme");

    themeToggle.textContent = isDark ? "☀️" : "🌙";

}

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    localStorage.setItem("paws-theme", isDark ? "dark" : "light");

    updateThemeButton();

});


// Restore saved theme

const savedTheme = localStorage.getItem("paws-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

}

updateThemeButton();


/* =========================================
   11. CONTACT BUTTON
========================================= */

contactButton.addEventListener("click", function() {

    alert("Thank you for your interest in Paws & Connect! Contact us at pawsandconnect@example.com");

});


/* =========================================
   12. INITIALIZE WEBSITE
========================================= */

renderPets();

console.log("Paws & Connect website initialized successfully.");
