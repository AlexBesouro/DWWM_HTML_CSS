// === STEP 1 ===
// Data source and favorites storage
const galleryItems = [
    {
        title: "Autumn Reflections",
        category: "nature",
        description: "A calm lake reflecting autumn foliage under a soft sunset.",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        date: "2024-10-12",
        author: "Mia Carter"
    },
    {
        title: "City Lights",
        category: "ville",
        description: "Night streets glowing with neon signs and bustling movement.",
        url: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
        date: "2025-03-05",
        author: "Liam Parker"
    },
    {
        title: "Portrait in Motion",
        category: "portrait",
        description: "A portrait capturing expression and movement in a single frame.",
        url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        date: "2024-08-21",
        author: "Noah Reed"
    },
    {
        title: "Golden Dunes",
        category: "nature",
        description: "Sunlit dunes casting sharp shadows under a clear sky.",
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        date: "2023-12-15",
        author: "Ava Morgan"
    },
    {
        title: "Urban Symphony",
        category: "ville",
        description: "A city intersection alive with color, structure, and rhythm.",
        url: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80",
        date: "2024-01-30",
        author: "Ethan Brooks"
    },
    {
        title: "Quiet Portrait",
        category: "portrait",
        description: "A simple portrait with a thoughtful gaze and soft light.",
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        date: "2025-05-18",
        author: "Sophia Lee"
    },
    {
        title: "Mountain Passage",
        category: "nature",
        description: "Hikers crossing a narrow trail beneath rugged peaks.",
        url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
        date: "2024-07-02",
        author: "Oliver Reed"
    },
    {
        title: "Riverside Market",
        category: "ville",
        description: "A riverwalk market alive with local vendors and colors.",
        url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        date: "2024-04-10",
        author: "Chloe Hayes"
    },
    {
        title: "Studio Light",
        category: "portrait",
        description: "A dramatic portrait lit by strong highlights and deep shadows.",
        url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
        date: "2025-02-28",
        author: "Mason Carter"
    },
    {
        title: "Forest Trail",
        category: "nature",
        description: "A winding path through tall trees and morning mist.",
        url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
        date: "2024-09-09",
        author: "Isabella King"
    },
    {
        title: "Downtown Geometry",
        category: "architecture",
        description: "Sharp architectural lines and reflections in modern glass buildings.",
        url: "https://images.unsplash.com/photo-1560657367-a17c703a87cd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2024-06-14",
        author: "Lucas Finn"
    },
    {
        title: "Vintage Portrait",
        category: "portrait",
        description: "A classic portrait with gentle tones and timeless emotion.",
        url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        date: "2025-01-12",
        author: "Grace Martin"
    }
];

const FAVORITES_KEY = "gallery_favorites";
const favoriteUrls = new Set(loadFavorites());

// Load the list of favorite photo URLs from localStorage.
// If nothing is stored yet, return an empty array.
function loadFavorites() {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
}

// Save the current favorites set to localStorage.
// We convert the Set to an array because localStorage stores strings only.
function saveFavorites() {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favoriteUrls]));
}

// Check whether the given photo is currently marked as a favorite.
function isFavorite(photo) {
    return favoriteUrls.has(photo.url);
}

// Toggle favorite status for one photo.
// If the photo is already a favorite, remove it; otherwise add it.
// Then persist the changes and update the visible gallery.
function toggleFavorite(photo) {
    if (isFavorite(photo)) {
        favoriteUrls.delete(photo.url);
    } else {
        favoriteUrls.add(photo.url);
    }
    saveFavorites();
    renderGallery(getFilteredGalleryItems());
}

let currentCategory = "all";
let currentSearchTerm = "";
let currentSort = "title";

// === STEP 2 ===
// Build a DOM card element for one photo object.
// This includes the image, favorite button, and text info.
function createPhotoCard(photo) {
    const card = document.createElement("article");
    card.className = "photo-card";

    const photoWrapper = document.createElement("div");
    photoWrapper.className = "photo-wrapper";

    const image = document.createElement("img");
    image.className = "photo-img";
    image.src = photo.url;
    image.alt = photo.title;

    const favoriteButton = document.createElement("button");
    favoriteButton.className = "favorite-btn";
    favoriteButton.type = "button";
    favoriteButton.textContent = isFavorite(photo) ? "♥" : "♡";
    favoriteButton.setAttribute("aria-label", isFavorite(photo) ? "Remove favorite" : "Add favorite");

    if (isFavorite(photo)) {
        favoriteButton.classList.add("favorite-active");
    }

    // Clicking the favorite button should not open the modal.
    favoriteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleFavorite(photo);
    });

    photoWrapper.append(image, favoriteButton);

    const photoInfo = document.createElement("div");
    photoInfo.className = "photo-info";

    const title = document.createElement("h3");
    title.className = "photo-title";
    title.textContent = photo.title;

    const description = document.createElement("p");
    description.className = "photo-description";
    description.textContent = photo.description;

    const author = document.createElement("p");
    author.className = "photo-author";
    author.textContent = `Author: ${photo.author}`;

    const date = document.createElement("span");
    date.className = "photo-date";
    date.textContent = `Date: ${photo.date}`;

    photoInfo.append(title, description, author, date);
    card.append(photoWrapper, photoInfo);

    card.addEventListener("click", () => openModal(photo));
    return card;
}

// === STEP 3 ===
// Return only photos that match the selected category.
// If "all" is selected, no filtering is applied.
function filterGalleryByCategory(items, category) {
    if (!category || category === "all") {
        return items;
    }

    return items.filter((photo) => photo.category === category);
}

// === STEP 4 ===
// Return only photos whose title or author contains the search term.
// Search is case-insensitive and works in real time.
function filterGalleryBySearch(items, searchTerm) {
    if (!searchTerm) {
        return items;
    }

    const normalizedTerm = searchTerm.trim().toLowerCase();
    return items.filter((photo) => {
        const titleMatch = photo.title.toLowerCase().includes(normalizedTerm);
        const authorMatch = photo.author.toLowerCase().includes(normalizedTerm);
        return titleMatch || authorMatch;
    });
}

// === STEP 5 ===
// Sort the photo list by the selected field.
// Dates are sorted newest-first, while title and author use A-Z ordering.
function sortGalleryItems(items, sortBy) {
    const sortedItems = [...items];

    if (sortBy === "date") {
        return sortedItems.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return sortedItems.sort((a, b) => {
        const valueA = a[sortBy].toLowerCase();
        const valueB = b[sortBy].toLowerCase();
        return valueA.localeCompare(valueB);
    });
}

// === STEP 6 ===
// Apply category filtering, search filtering, and sorting in sequence.
// The final array is what we render on the page.
function getFilteredGalleryItems() {
    const categoryFiltered = filterGalleryByCategory(galleryItems, currentCategory);
    const searchFiltered = filterGalleryBySearch(categoryFiltered, currentSearchTerm);
    return sortGalleryItems(searchFiltered, currentSort);
}

// === STEP 7 ===
// Render the current set of photo cards into the gallery grid.
// This clears the previous cards before adding the new ones.
function renderGallery(items) {
    const galleryGrid = document.querySelector(".gallery-grid");
    if (!galleryGrid) {
        return;
    }

    galleryGrid.innerHTML = "";
    items.forEach((photo) => {
        const card = createPhotoCard(photo);
        galleryGrid.appendChild(card);
    });

    const photoCount = document.querySelector(".photo-count");
    if (photoCount) {
        photoCount.textContent = `${items.length} photos`;
    }
}

// === STEP 8 ===
// Handle changes to the category select menu.
// Update state and re-render the gallery.
function handleCategoryFilter(event) {
    currentCategory = event.target.value;
    renderGallery(getFilteredGalleryItems());
}

// Update the search term as the user types in the search field.
// This makes the gallery filter in real time.
function handleSearchInput(event) {
    currentSearchTerm = event.target.value;
    renderGallery(getFilteredGalleryItems());
}

// When the search button is clicked, render the gallery using the current search term.
function handleSearchButton() {
    renderGallery(getFilteredGalleryItems());
}

// === STEP 9 ===
// Handle changes to the sort menu.
// Update sort state and refresh the visible cards.
function handleSortChange(event) {
    currentSort = event.target.value;
    renderGallery(getFilteredGalleryItems());
}

// === STEP 10 ===
// Open the detail modal for a clicked photo.
// Fill the modal with the photo data and prevent page scrolling.
function openModal(photo) {
    const modal = document.querySelector(".modal");
    if (!modal) {
        return;
    }

    modal.querySelector(".modal-img").src = photo.url;
    modal.querySelector(".modal-img").alt = photo.title;
    modal.querySelector(".modal-title").textContent = photo.title;
    modal.querySelector(".modal-description").textContent = photo.description;
    modal.querySelector(".modal-author").textContent = `Author: ${photo.author}`;
    modal.querySelector(".modal-date").textContent = `Date: ${photo.date}`;

    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

// === STEP 11 ===
// Close the modal and restore normal page scrolling.
function closeModal() {
    const modal = document.querySelector(".modal");
    if (!modal) {
        return;
    }

    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

// Close the modal when the Escape key is pressed.
function handleEscapeKey(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}

// === STEP 12 ===
// Attach event listeners and render the gallery when the page loads.
function initGalleryApp() {
    const categorySelect = document.querySelector("#category-filter");
    const searchInputElement = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-button");
    const sortSelect = document.querySelector("#sort-select");
    const modalClose = document.querySelector(".modal-close");
    const modalOverlay = document.querySelector(".modal-overlay");

    if (categorySelect) {
        categorySelect.addEventListener("change", handleCategoryFilter);
    }

    if (searchInputElement) {
        searchInputElement.addEventListener("input", handleSearchInput);
    }

    if (searchButton) {
        searchButton.addEventListener("click", handleSearchButton);
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", handleSortChange);
    }

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", closeModal);
    }

    document.addEventListener("keydown", handleEscapeKey);

    renderGallery(getFilteredGalleryItems());
}

document.addEventListener("DOMContentLoaded", initGalleryApp);
