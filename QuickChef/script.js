/* ==========================================
   QuickChef - Main Application Logic
   ========================================== */

// Ingredients Database
const ingredientsDB = [
    { name: 'Chicken', emoji: '🍗', category: 'proteins' },
    { name: 'Eggs', emoji: '🥚', category: 'proteins' },
    { name: 'Beef', emoji: '🥩', category: 'proteins' },
    { name: 'Shrimp', emoji: '🦐', category: 'proteins' },
    { name: 'Tofu', emoji: '🧈', category: 'proteins' },
    { name: 'Salmon', emoji: '🐟', category: 'proteins' },
    { name: 'Turkey', emoji: '🦃', category: 'proteins' },
    { name: 'Bacon', emoji: '🥓', category: 'proteins' },
    { name: 'Tomato', emoji: '🍅', category: 'vegetables' },
    { name: 'Onion', emoji: '🧅', category: 'vegetables' },
    { name: 'Garlic', emoji: '🧄', category: 'vegetables' },
    { name: 'Bell Pepper', emoji: '🫑', category: 'vegetables' },
    { name: 'Broccoli', emoji: '🥦', category: 'vegetables' },
    { name: 'Carrot', emoji: '🥕', category: 'vegetables' },
    { name: 'Spinach', emoji: '🥬', category: 'vegetables' },
    { name: 'Mushroom', emoji: '🍄', category: 'vegetables' },
    { name: 'Potato', emoji: '🥔', category: 'vegetables' },
    { name: 'Avocado', emoji: '🥑', category: 'vegetables' },
    { name: 'Corn', emoji: '🌽', category: 'vegetables' },
    { name: 'Lettuce', emoji: '🥬', category: 'vegetables' },
    { name: 'Rice', emoji: '🍚', category: 'grains' },
    { name: 'Pasta', emoji: '🍝', category: 'grains' },
    { name: 'Bread', emoji: '🍞', category: 'grains' },
    { name: 'Tortilla', emoji: '🫓', category: 'grains' },
    { name: 'Oats', emoji: '🌾', category: 'grains' },
    { name: 'Quinoa', emoji: '🫘', category: 'grains' },
    { name: 'Noodles', emoji: '🍜', category: 'grains' },
    { name: 'Cheese', emoji: '🧀', category: 'dairy' },
    { name: 'Milk', emoji: '🥛', category: 'dairy' },
    { name: 'Butter', emoji: '🧈', category: 'dairy' },
    { name: 'Yogurt', emoji: '🥛', category: 'dairy' },
    { name: 'Cream', emoji: '🍶', category: 'dairy' },
    { name: 'Salt', emoji: '🧂', category: 'spices' },
    { name: 'Pepper', emoji: '🌶️', category: 'spices' },
    { name: 'Cumin', emoji: '✨', category: 'spices' },
    { name: 'Paprika', emoji: '🔴', category: 'spices' },
    { name: 'Oregano', emoji: '🌿', category: 'spices' },
    { name: 'Basil', emoji: '🍃', category: 'spices' },
    { name: 'Cilantro', emoji: '🌿', category: 'spices' },
    { name: 'Ginger', emoji: '🫚', category: 'spices' },
    { name: 'Soy Sauce', emoji: '🥫', category: 'spices' },
    { name: 'Lemon', emoji: '🍋', category: 'fruits' },
    { name: 'Banana', emoji: '🍌', category: 'fruits' },
    { name: 'Apple', emoji: '🍎', category: 'fruits' },
    { name: 'Berries', emoji: '🫐', category: 'fruits' },
    { name: 'Mango', emoji: '🥭', category: 'fruits' },
    { name: 'Orange', emoji: '🍊', category: 'fruits' },
    { name: 'Lime', emoji: '🍋', category: 'fruits' },
];

// Recipes Database
const recipesDB = [
    {
        id: 1,
        title: 'Creamy Garlic Parmesan Pasta',
        description: 'A rich and creamy pasta dish loaded with garlic flavor and topped with freshly grated parmesan. Restaurant quality in 25 minutes.',
        image: 'images/pasta.png',
        time: 25, servings: 4, difficulty: 'Easy', calories: 520,
        tags: ['quick', 'easy', 'vegetarian'],
        ingredients: ['Pasta', 'Garlic', 'Cheese', 'Cream', 'Butter', 'Salt', 'Pepper', 'Basil'],
        fullIngredients: ['400g penne or fettuccine pasta', '4 cloves garlic, minced', '1 cup freshly grated parmesan cheese', '1 cup heavy cream', '3 tbsp butter', 'Salt and pepper to taste', 'Fresh basil leaves for garnish', '2 tbsp olive oil'],
        steps: [
            'Cook pasta in a large pot of salted boiling water according to package directions until al dente. Reserve 1 cup of pasta water before draining.',
            'While pasta cooks, melt butter with olive oil in a large skillet over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant and golden.',
            'Pour in the heavy cream and bring to a gentle simmer. Cook for 3-4 minutes, stirring occasionally until slightly thickened.',
            'Add the drained pasta to the skillet and toss to coat. Add parmesan cheese gradually while tossing.',
            'If sauce is too thick, add reserved pasta water one tablespoon at a time until desired consistency is reached.',
            'Season with salt and freshly ground pepper. Serve immediately topped with extra parmesan and fresh basil leaves.'
        ],
        tips: ['💡 Reserve pasta water! The starchy water helps bind the sauce beautifully.', '🧀 Use freshly grated parmesan for the creamiest results.', '🔥 Don\'t let the garlic burn—keep it golden, not brown.'],
        nutrition: { calories: '520', protein: '18g', carbs: '62g', fat: '24g' }
    },
    {
        id: 2,
        title: 'Mediterranean Power Salad Bowl',
        description: 'A vibrant and nutritious salad packed with quinoa, chickpeas, fresh vegetables, and a zesty lemon dressing.',
        image: 'images/salad.png',
        time: 15, servings: 2, difficulty: 'Easy', calories: 380,
        tags: ['quick', 'easy', 'healthy', 'vegetarian'],
        ingredients: ['Quinoa', 'Avocado', 'Tomato', 'Lemon', 'Spinach', 'Onion', 'Salt', 'Pepper'],
        fullIngredients: ['1 cup cooked quinoa', '1 ripe avocado, sliced', '1 cup cherry tomatoes, halved', '2 cups fresh baby spinach', '1/4 red onion, thinly sliced', 'Juice of 1 fresh lemon', '3 tbsp extra virgin olive oil', 'Salt and pepper to taste'],
        steps: [
            'Cook quinoa according to package instructions and let it cool to room temperature.',
            'Arrange the baby spinach as a bed in your serving bowls.',
            'Layer the cooled quinoa, halved cherry tomatoes, sliced avocado, and thin red onion rings on top.',
            'Whisk together lemon juice, olive oil, salt, and pepper to create the dressing.',
            'Drizzle the lemon dressing generously over the salad bowls.',
            'Top with crumbled feta if desired and serve immediately.'
        ],
        tips: ['🥑 Cut the avocado just before serving to prevent browning.', '🍋 Add a pinch of cumin to the dressing for extra flavor.', '💪 Add chickpeas or grilled chicken for extra protein.'],
        nutrition: { calories: '380', protein: '12g', carbs: '38g', fat: '20g' }
    },
    {
        id: 3,
        title: 'Asian Chicken Stir Fry',
        description: 'A sizzling stir fry with tender chicken, crisp vegetables, and a savory sauce. Better than takeout!',
        image: 'images/chicken.png',
        time: 20, servings: 3, difficulty: 'Medium', calories: 450,
        tags: ['quick', 'healthy'],
        ingredients: ['Chicken', 'Bell Pepper', 'Broccoli', 'Soy Sauce', 'Garlic', 'Ginger', 'Rice', 'Onion'],
        fullIngredients: ['500g chicken breast, sliced thin', '1 red bell pepper, sliced', '2 cups broccoli florets', '3 tbsp soy sauce', '3 cloves garlic, minced', '1 tbsp fresh ginger, grated', '2 cups cooked jasmine rice', '1 onion, sliced', '2 tbsp sesame oil', '1 tbsp honey'],
        steps: [
            'Marinate sliced chicken in 1 tbsp soy sauce and a pinch of pepper for 10 minutes.',
            'Heat sesame oil in a wok or large skillet over high heat until smoking hot.',
            'Add chicken in a single layer and cook for 3-4 minutes until golden. Remove and set aside.',
            'In the same wok, add onion, bell pepper, and broccoli. Stir fry for 3 minutes until crisp-tender.',
            'Add garlic and ginger, cook for 30 seconds until fragrant.',
            'Return chicken to the wok. Add remaining soy sauce and honey. Toss everything together for 1 minute.',
            'Serve immediately over steamed jasmine rice, topped with sesame seeds.'
        ],
        tips: ['🔥 The key to great stir fry is HIGH heat and quick cooking!', '🍗 Slice chicken against the grain for maximum tenderness.', '🥢 Prep all ingredients before you start cooking—stir fry moves fast!'],
        nutrition: { calories: '450', protein: '38g', carbs: '42g', fat: '14g' }
    },
    {
        id: 4,
        title: 'Tropical Açaí Smoothie Bowl',
        description: 'A stunning purple smoothie bowl loaded with fresh fruits, crunchy granola, and superfood toppings for the ultimate breakfast.',
        image: 'images/smoothie.png',
        time: 10, servings: 1, difficulty: 'Easy', calories: 320,
        tags: ['quick', 'easy', 'healthy', 'vegetarian'],
        ingredients: ['Banana', 'Berries', 'Yogurt', 'Oats', 'Mango'],
        fullIngredients: ['2 frozen bananas', '1 cup mixed frozen berries', '1/2 cup Greek yogurt', '1/4 cup granola or oats', '1/2 mango, sliced', '2 tbsp honey', '1 tbsp chia seeds', 'Coconut flakes for topping'],
        steps: [
            'Blend frozen bananas, berries, yogurt, and a splash of almond milk until thick and creamy.',
            'Pour the thick smoothie into a bowl—it should be thicker than a regular smoothie.',
            'Arrange sliced mango, extra berries, and banana slices in rows on top.',
            'Sprinkle with granola, chia seeds, and coconut flakes.',
            'Drizzle with honey and serve immediately with a spoon.'
        ],
        tips: ['🍌 Use frozen bananas for the creamiest, thickest texture.', '🥣 Keep the blend THICK—add liquid sparingly!', '📸 Arrange toppings in neat rows for that Instagram-worthy look.'],
        nutrition: { calories: '320', protein: '10g', carbs: '58g', fat: '8g' }
    },
    {
        id: 5,
        title: 'Fluffy Buttermilk Pancakes',
        description: 'The fluffiest golden-brown pancakes topped with fresh berries, butter, and real maple syrup. Weekend breakfast perfection.',
        image: 'images/pancakes.png',
        time: 20, servings: 4, difficulty: 'Easy', calories: 440,
        tags: ['easy', 'vegetarian'],
        ingredients: ['Eggs', 'Milk', 'Butter', 'Berries', 'Banana'],
        fullIngredients: ['2 cups all-purpose flour', '2 large eggs', '1.5 cups buttermilk or milk', '3 tbsp melted butter', '2 tbsp sugar', '2 tsp baking powder', '1/2 tsp salt', 'Fresh berries for topping', 'Maple syrup for serving'],
        steps: [
            'In a large bowl, whisk together flour, sugar, baking powder, and salt.',
            'In a separate bowl, beat eggs, then mix in buttermilk and melted butter.',
            'Pour wet ingredients into dry ingredients and stir gently until JUST combined—lumps are okay!',
            'Heat a non-stick pan or griddle over medium heat. Lightly butter the surface.',
            'Pour 1/4 cup batter per pancake. Cook until bubbles form on the surface (about 2-3 minutes), then flip and cook 1-2 minutes more.',
            'Stack pancakes high, top with fresh berries, sliced banana, a pat of butter, and generous maple syrup.'
        ],
        tips: ['🥞 DO NOT overmix the batter—lumps = fluffy pancakes!', '🔥 Medium heat is the sweet spot.', '🧈 Rest the batter for 5 minutes before cooking for extra fluffiness.'],
        nutrition: { calories: '440', protein: '12g', carbs: '56g', fat: '18g' }
    },
    {
        id: 6,
        title: 'Mexican Street Tacos',
        description: 'Authentic street-style tacos with seasoned meat, fresh cilantro, diced onions, and a squeeze of lime on warm tortillas.',
        image: 'images/tacos.png',
        time: 30, servings: 4, difficulty: 'Medium', calories: 480,
        tags: [],
        ingredients: ['Beef', 'Tortilla', 'Onion', 'Cilantro', 'Lime', 'Garlic', 'Cumin', 'Paprika'],
        fullIngredients: ['500g flank steak or ground beef', '8 corn or flour tortillas', '1 white onion, finely diced', '1/2 cup fresh cilantro, chopped', '2 limes, cut into wedges', '3 cloves garlic, minced', '1 tsp ground cumin', '1 tsp smoked paprika', '1/2 tsp chili powder', 'Salt and pepper to taste'],
        steps: [
            'Season the beef generously with cumin, paprika, chili powder, salt, and pepper.',
            'Heat a cast iron skillet over high heat with a drizzle of oil. Sear the beef for 3-4 minutes per side.',
            'Add minced garlic in the last minute of cooking. Let the steak rest for 5 minutes, then slice against the grain.',
            'Warm tortillas directly over a gas flame or in a dry skillet for 30 seconds per side.',
            'Assemble tacos: place meat on warm tortillas, top with diced onion and fresh cilantro.',
            'Serve with lime wedges and your favorite salsa. Squeeze lime generously over the tacos!'
        ],
        tips: ['🔥 A screaming hot skillet gives the best char on the meat.', '🫓 Double up your tortillas for authentic street taco style.', '🌶️ Add pickled jalapeños for extra kick.'],
        nutrition: { calories: '480', protein: '32g', carbs: '40g', fat: '22g' }
    }
];

// State
let selectedIngredients = new Set();
let currentFilter = 'all';
let favorites = new Set();
let isDarkMode = false;

// Helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// DOM Elements
const navbar = $('#navbar');
const hamburger = $('#hamburger');
const mobileMenu = $('#mobileMenu');
const themeToggle = $('#themeToggle');
const ingredientGrid = $('#ingredientGrid');
const selectedTags = $('#selectedTags');
const findRecipesBtn = $('#findRecipesBtn');
const btnCount = $('#btnCount');
const clearAllBtn = $('#clearAllBtn');
const recipeGrid = $('#recipeGrid');
const noResults = $('#noResults');
const recipeModal = $('#recipeModal');
const modalClose = $('#modalClose');
const loaderOverlay = $('#loaderOverlay');
const toastContainer = $('#toastContainer');

// Init
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initParticles();
    renderIngredients('all');
    renderRecipes(recipesDB);
    initScrollAnimations();
    initNavigation();
    initTheme();
    initCategoryTabs();
    initFilters();
    initHeroButtons();
    initCTA();
    initStatCounters();
    initButtonRipple();
});

// Floating Particles
function initParticles() {
    const particles = $('#particles');
    const emojis = ['🍕','🍔','🌮','🍣','🍩','🍪','🧁','🍰','🥐','🍳','🥗','🍜','🥑','🍓','🧀'];
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (15 + Math.random() * 20) + 's';
        p.style.animationDelay = (Math.random() * 15) + 's';
        p.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
        particles.appendChild(p);
    }
}

// Navigation
function initNavigation() {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        const sections = $$('section[id]');
        let current = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id'); });
        $$('.nav-link').forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + current);
        });
    });
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    $$('.mobile-nav-link').forEach(l => l.addEventListener('click', () => {
        hamburger.classList.remove('active'); mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }));
}

// Theme
function initTheme() {
    if (localStorage.getItem('quickchef-theme') === 'dark') {
        isDarkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        $('.theme-icon').textContent = '☀️';
    }
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : '');
        $('.theme-icon').textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('quickchef-theme', isDarkMode ? 'dark' : 'light');
        showToast(isDarkMode ? '🌙 Dark mode enabled' : '☀️ Light mode enabled');
    });
}

// Scroll Animations
function initScrollAnimations() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('animated'), i * 100);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    $$('.animate-on-scroll').forEach(el => obs.observe(el));
}

// Stat Counters
function initStatCounters() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { animateCounter(entry.target); obs.unobserve(entry.target); }
        });
    }, { threshold: 0.5 });
    $$('.stat-number').forEach(el => obs.observe(el));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const start = performance.now();
    function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - progress, 3)) * target);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// Category Tabs
function initCategoryTabs() {
    $$('.category-tab').forEach(tab => tab.addEventListener('click', () => {
        $$('.category-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderIngredients(tab.dataset.category);
    }));
}

// Render Ingredients
function renderIngredients(category) {
    const filtered = category === 'all' ? ingredientsDB : ingredientsDB.filter(i => i.category === category);
    ingredientGrid.innerHTML = '';
    filtered.forEach((item, idx) => {
        const chip = document.createElement('div');
        chip.className = `ingredient-chip ${selectedIngredients.has(item.name) ? 'selected' : ''}`;
        chip.innerHTML = `<span class="chip-emoji">${item.emoji}</span><span>${item.name}</span>`;
        chip.style.animation = `fadeInUp 0.4s var(--ease-out) ${idx * 30}ms both`;
        chip.addEventListener('click', () => toggleIngredient(item.name, chip));
        ingredientGrid.appendChild(chip);
    });
}

// Toggle Ingredient
function toggleIngredient(name, chipEl) {
    if (selectedIngredients.has(name)) { selectedIngredients.delete(name); chipEl.classList.remove('selected'); }
    else { selectedIngredients.add(name); chipEl.classList.add('selected'); }
    updateSelectedDisplay();
}

function updateSelectedDisplay() {
    const count = selectedIngredients.size;
    if (count === 0) {
        selectedTags.innerHTML = '<p class="empty-msg">Select ingredients above to get started...</p>';
        findRecipesBtn.disabled = true;
    } else {
        selectedTags.innerHTML = '';
        selectedIngredients.forEach(name => {
            const ing = ingredientsDB.find(i => i.name === name);
            const tag = document.createElement('span');
            tag.className = 'selected-tag';
            tag.innerHTML = `${ing.emoji} ${name} <span class="remove-tag" data-name="${name}">&times;</span>`;
            selectedTags.appendChild(tag);
        });
        $$('.remove-tag').forEach(btn => btn.addEventListener('click', (e) => {
            e.stopPropagation();
            selectedIngredients.delete(btn.dataset.name);
            $$('.ingredient-chip').forEach(c => { if (c.textContent.includes(btn.dataset.name)) c.classList.remove('selected'); });
            updateSelectedDisplay();
        }));
        findRecipesBtn.disabled = false;
    }
    btnCount.textContent = `(${count})`;
}

// Clear All
clearAllBtn.addEventListener('click', () => {
    selectedIngredients.clear();
    $$('.ingredient-chip').forEach(c => c.classList.remove('selected'));
    updateSelectedDisplay();
    showToast('🧹 All ingredients cleared');
});

// Find Recipes
findRecipesBtn.addEventListener('click', () => {
    if (selectedIngredients.size === 0) return;
    loaderOverlay.classList.add('active');
    setTimeout(() => {
        const matched = getMatchedRecipes();
        renderRecipes(matched);
        loaderOverlay.classList.remove('active');
        document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
        showToast(matched.length > 0 ? `🎉 Found ${matched.length} recipe${matched.length > 1 ? 's' : ''} for you!` : '😔 No exact matches. Try different ingredients.', matched.length > 0 ? 'success' : 'error');
    }, 2000);
});

function getMatchedRecipes() {
    const selected = Array.from(selectedIngredients);
    return recipesDB.map(r => {
        const matchCount = r.ingredients.filter(i => selected.includes(i)).length;
        return { ...r, matchPercent: Math.round((matchCount / r.ingredients.length) * 100), matchCount };
    }).filter(r => r.matchCount >= 1).sort((a, b) => b.matchPercent - a.matchPercent);
}

// Render Recipes
function renderRecipes(recipes) {
    let filtered = recipes;
    if (currentFilter !== 'all') {
        filtered = currentFilter === 'quick' ? recipes.filter(r => r.time <= 20) : recipes.filter(r => r.tags.includes(currentFilter));
    }
    if (filtered.length === 0) { recipeGrid.innerHTML = ''; noResults.style.display = 'block'; return; }
    noResults.style.display = 'none';
    recipeGrid.innerHTML = '';
    filtered.forEach((recipe, idx) => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.style.animationDelay = `${idx * 0.08}s`;
        const matchHtml = recipe.matchPercent !== undefined ? `<div class="recipe-card-match"><div class="match-bar"><div class="match-fill" style="width:${recipe.matchPercent}%"></div></div><span>${recipe.matchPercent}% match</span></div>` : '';
        const labels = { quick: '⚡ Quick', easy: '👶 Easy', healthy: '💚 Healthy', vegetarian: '🌱 Veg' };
        const badgesHtml = recipe.tags.map(t => `<span class="card-badge">${labels[t] || t}</span>`).join('');
        card.innerHTML = `
            <div class="recipe-card-image">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                <div class="recipe-card-badges">${badgesHtml}</div>
                <button class="recipe-card-fav ${favorites.has(recipe.id) ? 'liked' : ''}" data-id="${recipe.id}">${favorites.has(recipe.id) ? '❤️' : '🤍'}</button>
            </div>
            <div class="recipe-card-body">
                <h3 class="recipe-card-title">${recipe.title}</h3>
                <p class="recipe-card-desc">${recipe.description}</p>
                <div class="recipe-card-meta">
                    <div style="display:flex;gap:16px;">
                        <span class="recipe-meta-item"><span class="recipe-meta-icon">⏱</span> ${recipe.time} min</span>
                        <span class="recipe-meta-item"><span class="recipe-meta-icon">👤</span> ${recipe.servings}</span>
                        <span class="recipe-meta-item"><span class="recipe-meta-icon">🔥</span> ${recipe.calories} cal</span>
                    </div>
                    ${matchHtml}
                </div>
            </div>`;
        card.addEventListener('click', (e) => { if (!e.target.closest('.recipe-card-fav')) openRecipeModal(recipe); });
        card.querySelector('.recipe-card-fav').addEventListener('click', (e) => { e.stopPropagation(); toggleFavorite(recipe.id, e.currentTarget); });
        recipeGrid.appendChild(card);
    });
}

// Filters
function initFilters() {
    $$('.filter-chip').forEach(chip => chip.addEventListener('click', () => {
        $$('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.dataset.filter;
        renderRecipes(selectedIngredients.size > 0 ? getMatchedRecipes() : recipesDB);
    }));
}

// Favorites
function toggleFavorite(id, btn) {
    if (favorites.has(id)) { favorites.delete(id); btn.classList.remove('liked'); btn.innerHTML = '🤍'; showToast('💔 Removed from favorites'); }
    else { favorites.add(id); btn.classList.add('liked'); btn.innerHTML = '❤️'; btn.style.transform = 'scale(1.3)'; setTimeout(() => btn.style.transform = '', 300); showToast('❤️ Added to favorites!', 'success'); }
}

// Recipe Modal
function openRecipeModal(recipe) {
    $('#modalImage').src = recipe.image;
    $('#modalImage').alt = recipe.title;
    $('#modalTitle').textContent = recipe.title;
    $('#modalDesc').textContent = recipe.description;
    const labels = { quick: '⚡ Quick', easy: '👶 Easy', healthy: '💚 Healthy', vegetarian: '🌱 Vegetarian' };
    $('#modalBadges').innerHTML = recipe.tags.map(t => `<span class="modal-badge">${labels[t] || t}</span>`).join('');
    $('#modalMeta').innerHTML = `
        <div class="modal-meta-item"><span class="meta-icon">⏱</span> <strong>${recipe.time} min</strong></div>
        <div class="modal-meta-item"><span class="meta-icon">👤</span> <strong>${recipe.servings} servings</strong></div>
        <div class="modal-meta-item"><span class="meta-icon">📊</span> <strong>${recipe.difficulty}</strong></div>
        <div class="modal-meta-item"><span class="meta-icon">🔥</span> <strong>${recipe.calories} cal</strong></div>`;
    $('#modalIngredients').innerHTML = recipe.fullIngredients.map(i => `<li>${i}</li>`).join('');
    $('#modalSteps').innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join('');
    $('#modalTips').innerHTML = recipe.tips.map(t => `<div class="tip-item">${t}</div>`).join('');
    $('#nutritionGrid').innerHTML = `
        <div class="nutrition-item"><span class="nutrition-value">${recipe.nutrition.calories}</span><span class="nutrition-label">Calories</span></div>
        <div class="nutrition-item"><span class="nutrition-value">${recipe.nutrition.protein}</span><span class="nutrition-label">Protein</span></div>
        <div class="nutrition-item"><span class="nutrition-value">${recipe.nutrition.carbs}</span><span class="nutrition-label">Carbs</span></div>
        <div class="nutrition-item"><span class="nutrition-value">${recipe.nutrition.fat}</span><span class="nutrition-label">Fat</span></div>`;
    recipeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRecipeModal() { recipeModal.classList.remove('active'); document.body.style.overflow = ''; }
modalClose.addEventListener('click', closeRecipeModal);
recipeModal.addEventListener('click', (e) => { if (e.target === recipeModal) closeRecipeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeRecipeModal(); });

// Hero Buttons
function initHeroButtons() {
    const s = (id, target) => { const el = $(id); if (el) el.addEventListener('click', () => document.getElementById(target).scrollIntoView({ behavior: 'smooth' })); };
    s('#heroStartBtn', 'generator'); s('#heroExploreBtn', 'recipes'); s('#getStartedBtn', 'generator');
}

// CTA
function initCTA() {
    const btn = $('#subscribeBtn');
    if (btn) btn.addEventListener('click', () => {
        const email = $('#emailInput').value.trim();
        if (email && email.includes('@') && email.includes('.')) { showToast('🎉 Successfully subscribed! Welcome!', 'success'); $('#emailInput').value = ''; }
        else showToast('❌ Please enter a valid email.', 'error');
    });
}

// Toast
function showToast(message, type = 'info') {
    const t = document.createElement('div');
    t.className = `toast ${type}`; t.textContent = message;
    toastContainer.appendChild(t);
    setTimeout(() => { t.classList.add('toast-exit'); setTimeout(() => t.remove(), 400); }, 3000);
}

// Button Ripple
function initButtonRipple() {
    $$('.btn-primary').forEach(btn => btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty('--x', ((e.clientX - r.left) / r.width) * 100 + '%');
        btn.style.setProperty('--y', ((e.clientY - r.top) / r.height) * 100 + '%');
    }));
}

// Auth Check & Logout
function initAuth() {
    const userData = localStorage.getItem('quickchef-loggedin');
    const greeting = document.getElementById('userGreeting');
    const logoutBtn = document.getElementById('logoutBtn');

    if (userData) {
        const user = JSON.parse(userData);
        if (greeting) greeting.textContent = 'Hi, ' + (user.name || 'Chef') + '! 👋';
        if (logoutBtn) {
            logoutBtn.style.display = 'inline-flex';
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('quickchef-loggedin');
                showToast('👋 Logged out successfully!');
                setTimeout(() => { window.location.href = 'auth.html'; }, 1000);
            });
        }
    }
}
