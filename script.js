/**
 * script.js — Ganesh Bakery
 * Production-ready JavaScript
 * Behaviour: product rendering, category filtering, modal, nav, animations
 * ============================================================
 */

'use strict';

/* ============================================================
   MENU DATA START
   ─────────────────────────────────────────────────────────────
   HOW TO ADD YOUR OWN PRODUCTS:
   Copy the object structure below and add your item.
   Fields:
     id          → unique number (auto-increment)
     category    → must match a key in CATEGORIES (lowercase)
     name        → product display name
     description → short description shown on card & modal
     price       → string e.g. "₹60" or "₹120"
     image       → any valid image URL (Unsplash, Pexels, or your own hosted URL)

   AVAILABLE CATEGORIES:
     "beverages" | "juice" | "lime" | "shake"
   ─────────────────────────────────────────────────────────────
*/

const products = [

  // ── BEVERAGES ───────────────────────────────────────────────
  {
    id: 1,
    category: 'beverages',
    name: 'Tea',
    description: 'Classic hot Indian milk tea brewed freshly with select tea leaves.',
    price: '₹12',
    image: 'images/tea_main.jpg',
  },
  {
    id: 2,
    category: 'beverages',
    name: 'Black Tea',
    description: 'Strong and refreshing freshly brewed black tea without milk.',
    price: '₹12',
    image: 'images/black_tea.jpg',
  },
  {
    id: 3,
    category: 'beverages',
    name: 'Lemon Tea',
    description: 'Refreshing hot tea infused with zesty fresh lemon juice.',
    price: '₹15',
    image: 'images/lemon_tea.jpg',
  },
  {
    id: 4,
    category: 'beverages',
    name: 'Ginger Tea',
    description: 'Warm, spicy ginger tea brewed with fresh ginger root and milk.',
    price: '₹15',
    image: 'images/ginger_tea.jpg',
  },
  {
    id: 5,
    category: 'beverages',
    name: 'Green Tea',
    description: 'Fresh and light premium organic green tea rich in antioxidants.',
    price: '₹20',
    image: 'images/green_tea.jpg',
  },
  {
    id: 6,
    category: 'beverages',
    name: 'Coffee',
    description: 'Freshly brewed aromatic hot coffee with perfect froth.',
    price: '₹15',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    category: 'beverages',
    name: 'Boost',
    description: 'Classic Indian energy malt drink mixed with hot steamed milk.',
    price: '₹20',
    image: 'images/boost_horlicks.jpeg',
  },
  {
    id: 8,
    category: 'beverages',
    name: 'Horlicks',
    description: 'Warm and healthy classic malted milk beverage.',
    price: '₹20',
    image: 'images/boost_horlicks.jpeg',
  },
  {
    id: 9,
    category: 'beverages',
    name: '🥛 Badam Milk',
    description: 'Nutritious milk flavored with almonds, saffron and cardamom.',
    price: '₹15',
    image: 'images/badam_milk.jpeg',
  },
  {
    id: 10,
    category: 'beverages',
    name: 'Hot Chocolate',
    description: 'Creamy hot milk blended with premium rich cocoa chocolate.',
    price: '₹20',
    image: 'images/chocolate.jpg',
  },
  {
    id: 11,
    category: 'beverages',
    name: '🍓 Strawberry Milk',
    description: 'Sweet and creamy strawberry flavored pink milk drink.',
    price: '₹20',
    image: 'images/strbr.jpeg',
  },
  {
    id: 12,
    category: 'beverages',
    name: '💚 Pista Milk',
    description: 'Rich, flavorful cardamom and pistachio infused milk.',
    price: '₹20',
    image: 'images/pista.jpeg',
  },

  // ── JUICE ───────────────────────────────────────────────────
  {
    id: 13,
    category: 'juice',
    name: 'Manavati Juice',
    description: 'Special traditional fruit and herb infused refresh drink, served chilled.',
    price: '₹50',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 14,
    category: 'juice',
    name: 'Watermelon Juice',
    description: 'Cool and hydrating fresh watermelon juice served chilled. Perfect summer sip.',
    price: '₹40',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 15,
    category: 'juice',
    name: 'Pineapple Juice',
    description: 'Sweet and tangy fresh tropical pineapple juice crushed to order.',
    price: '₹50',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 16,
    category: 'juice',
    name: 'Apple Juice',
    description: 'Crisp, naturally sweet red apple juice freshly extracted.',
    price: '₹50',
    image: 'images/apple.jpg',
  },
  {
    id: 17,
    category: 'juice',
    name: 'Musumbi Juice',
    description: 'Freshly squeezed Mosambi sweet lime juice — light, refreshing and healthy.',
    price: '₹50',
    image: 'images/musambi.jpg',
  },
  {
    id: 18,
    category: 'juice',
    name: 'Orange Juice',
    description: '100% pure freshly squeezed navel oranges with pure Vitamin C goodness.',
    price: '₹50',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 19,
    category: 'juice',
    name: 'Grape Juice',
    description: 'Rich black grape juice squeezed fresh, packed with natural sweetness and antioxidants.',
    price: '₹50',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 20,
    category: 'juice',
    name: 'Anar (Pomegranate) Juice',
    description: 'Deep red ruby pomegranate freshly extracted and served over ice.',
    price: '₹50',
    image: 'images/anar.jpg',
  },
  {
    id: 21,
    category: 'juice',
    name: 'Sarbath',
    description: 'Classic Nannari herbal root sarbath with fresh lemon juice and cooling subza seeds.',
    price: '₹30',
    image: 'images/soda_sarbath.jpeg',
  },
  {
    id: 22,
    category: 'juice',
    name: 'Soda Sarbath',
    description: 'Fizzy sparkling soda infused with sweet Nannari syrup and fresh lemon juice.',
    price: '₹40',
    image: 'images/soda_sarbath.jpeg',
  },
  {
    id: 23,
    category: 'juice',
    name: 'Milk Sarbath',
    description: 'Chilled creamy milk blended with fragrant Nannari sarbath syrup and subza seeds.',
    price: '₹50',
    image: 'images/milk_sarbath.jpeg',
  },
  {
    id: 24,
    category: 'juice',
    name: 'Lassi',
    description: 'Traditional thick and creamy churned sweet yogurt drink garnished with cardamom.',
    price: '₹40',
    image: 'images/lassi.webp',
  },
  {
    id: 25,
    category: 'juice',
    name: 'Papaya Juice',
    description: 'Smooth, thick and rich golden papaya juice freshly pressed.',
    price: '₹50',
    image: 'images/papaya_juice.jpg',
  },
  {
    id: 26,
    category: 'juice',
    name: 'Mango Juice',
    description: 'Thick and sweet Alphonso mango nectar — a sweet taste of pure mango.',
    price: '₹50',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 27,
    category: 'juice',
    name: 'ABC Juice',
    description: 'Healthy and vibrant detox superfood juice blend of Apple, Beetroot, and Carrot.',
    price: '₹60',
    image: 'images/abc_juice.jpeg',
  },

  // ── LIME ────────────────────────────────────────────────────
  {
    id: 28,
    category: 'lime',
    name: 'Fresh Lime Soda',
    description: 'Zesty fresh lime squeezed into sparkling soda with a pinch of black salt.',
    price: '₹40',
    image: 'images/fresh_lime_soda.jpeg',
  },
  {
    id: 29,
    category: 'lime',
    name: 'Lemon Mint Cooler',
    description: 'Refreshing lemon juice with fresh mint leaves and crushed ice. Utterly cooling.',
    price: '₹50',
    image: 'images/lemon_min_cooler.jpeg',
  },
  {
    id: 30,
    category: 'lime',
    name: 'Sweet Lime Juice',
    description: 'Mosambi sweet lime — mild, light and naturally sweet. Great for digestion.',
    price: '₹55',
    image: 'images/sweet_lime.jpeg',
  },

  // ── SHAKE ───────────────────────────────────────────────────
  {
    id: 31,
    category: 'shake',
    name: 'Oreo Milkshake',
    description: 'Creamy blended Oreo cookies with vanilla ice cream and cold milk. Indulgent!',
    price: '₹90',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 32,
    category: 'shake',
    name: 'Mango Milkshake',
    description: 'Thick, creamy Alphonso mango blended with chilled full-fat milk. A delight.',
    price: '₹85',
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 33,
    category: 'shake',
    name: 'Strawberry Shake',
    description: 'Fresh strawberries blended with milk and a scoop of ice cream. Pretty in pink!',
    price: '₹90',
    image: 'https://images.unsplash.com/photo-1571805529673-0f56b922b359?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 34,
    category: 'shake',
    name: 'Chocolate Shake',
    description: 'Rich chocolate syrup blended with thick milk and vanilla ice cream. Pure bliss.',
    price: '₹95',
    image: 'https://images.unsplash.com/photo-1619221882220-947b3d3c8861?w=600&auto=format&fit=crop&q=80',
  },

];

/*
   MENU DATA END
   ========================
*/

/* ============================================================
   CATEGORY CONFIGURATION
   Add a new category by pushing to this array.
   { key, label, icon } where icon is a Bootstrap Icons class name.
   ============================================================ */
const CATEGORIES = [
  { key: 'all', label: 'All', icon: 'bi-grid-3x3-gap-fill' },
  { key: 'beverages', label: 'Beverages', icon: 'bi-cup-hot-fill' },
  { key: 'juice', label: 'Juice', icon: 'bi-cup-straw' },
  { key: 'lime', label: 'Lime', icon: 'bi-droplet-half' },
  { key: 'shake', label: 'Shake', icon: 'bi-cup-fill' },
];

/* ============================================================
   WHATSAPP CONFIG — update phone number here
   ============================================================ */
const WHATSAPP_NUMBER = '919876543210';

/* ============================================================
   STORE — runtime state
   ============================================================ */
const store = {
  activeCategory: 'all',
  searchQuery: '',
  productModal: null,   // Bootstrap Modal instance (lazy init)
};

/* ============================================================
   UTILITY FUNCTIONS
   ============================================================ */

/**
 * Debounce: returns a debounced version of fn.
 * @param {Function} fn
 * @param {number} delay ms
 */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Build a WhatsApp order URL for a given product name & price.
 * @param {string} name
 * @param {string} price
 * @returns {string}
 */
function buildWhatsAppUrl(name, price) {
  const msg = encodeURIComponent(
    `Hello Ganesh Bakery! 👋\nI would like to order:\n\n🛒 *${name}* — ${price}\n\nPlease confirm availability.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

/**
 * Sanitize text to prevent XSS.
 * @param {string} str
 * @returns {string}
 */
function sanitize(str) {
  const div = document.createElement('div');
  div.textContent = String(str);
  return div.innerHTML;
}

/**
 * Get friendly label for a category key.
 * @param {string} key
 * @returns {string}
 */
function getCategoryLabel(key) {
  const cat = CATEGORIES.find(c => c.key === key);
  return cat ? cat.label : key;
}

/* ============================================================
   LOADING SCREEN
   ============================================================ */
function hideLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;
  // Wait for loader bar animation (~1.4s) then fade out
  setTimeout(() => {
    screen.classList.add('hidden');
    // Remove from DOM after transition
    screen.addEventListener('transitionend', () => screen.remove(), { once: true });
  }, 1500);
}

/* ============================================================
   CATEGORY CHIPS — render & bind
   ============================================================ */
function renderCategoryChips() {
  const container = document.getElementById('category-chips');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <button
      class="chip${cat.key === store.activeCategory ? ' active' : ''}"
      data-category="${cat.key}"
      role="tab"
      aria-selected="${cat.key === store.activeCategory}"
      aria-label="Filter by ${cat.label}"
    >
      <i class="bi ${cat.icon}" aria-hidden="true"></i>
      ${sanitize(cat.label)}
    </button>
  `).join('');

  container.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    const key = chip.dataset.category;
    if (key === store.activeCategory) return;
    store.activeCategory = key;
    updateChipActiveState();
    filterAndRenderProducts();
  });
}

/**
 * Update chip active classes without re-rendering the entire chips list.
 */
function updateChipActiveState() {
  document.querySelectorAll('#category-chips .chip').forEach(chip => {
    const isActive = chip.dataset.category === store.activeCategory;
    chip.classList.toggle('active', isActive);
    chip.setAttribute('aria-selected', isActive);
  });
}

/* ============================================================
   PRODUCT CARD CREATION
   ============================================================ */

/**
 * Create a single product card DOM element.
 * @param {Object} product
 * @returns {HTMLElement}
 */
function createProductCard(product) {
  const col = document.createElement('div');
  col.className = 'col-6 col-md-4 col-lg-3 product-col';
  col.setAttribute('role', 'listitem');
  col.dataset.id = product.id;

  const catLabel = sanitize(getCategoryLabel(product.category));
  const safeImg = sanitize(product.image);
  const safeName = sanitize(product.name);
  const safeDesc = sanitize(product.description);
  const safePrice = sanitize(product.price);

  col.innerHTML = `
    <article
      class="product-card"
      aria-label="${safeName}"
      tabindex="0"
      data-id="${product.id}"
    >
      <div class="product-img-wrapper">
        <img
          src="${safeImg}"
          alt="${safeName} — ${catLabel}"
          class="product-img"
          loading="lazy"
          decoding="async"
          onerror="this.src='https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=60'"
        />
        <span class="card-category-badge">${catLabel}</span>
      </div>
      <div class="product-card-body">
        <h3 class="product-name">${safeName}</h3>
        <p class="product-desc">${safeDesc}</p>
        <div class="product-footer">
          <span class="product-price">${safePrice}</span>
        </div>
      </div>
    </article>
  `;

  return col;
}

/* ============================================================
   PRODUCT RENDERING & FILTERING
   ============================================================ */

/**
 * Get the currently filtered subset of products.
 * @returns {Array}
 */
function getFilteredProducts() {
  const q = store.searchQuery.trim().toLowerCase();
  return products.filter(p => {
    // Category match
    const catMatch = store.activeCategory === 'all' || p.category === store.activeCategory;
    // Search match
    const searchMatch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      getCategoryLabel(p.category).toLowerCase().includes(q);
    return catMatch && searchMatch;
  });
}

/**
 * Render product cards into the grid.
 * Uses animation stagger for each card.
 */
function filterAndRenderProducts() {
  const grid = document.getElementById('products-grid');
  const noResult = document.getElementById('no-results');
  if (!grid || !noResult) return;

  const filtered = getFilteredProducts();

  // Clear grid
  grid.innerHTML = '';

  if (filtered.length === 0) {
    noResult.hidden = false;
    return;
  }

  noResult.hidden = true;

  // Build fragment for performance
  const frag = document.createDocumentFragment();
  filtered.forEach((p, i) => {
    const col = createProductCard(p);
    // Stagger delay for enter animation
    col.style.transitionDelay = `${Math.min(i * 40, 400)}ms`;
    frag.appendChild(col);
  });

  grid.appendChild(frag);

  // Trigger enter animation on next frame
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      grid.querySelectorAll('.product-col').forEach(col => col.classList.add('visible'));
    });
  });
}

/* ============================================================
   PRODUCT CARD EVENTS (delegation)
   ============================================================ */
function bindProductGridEvents() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  // Card click → open modal
  grid.addEventListener('click', e => {
    const card = e.target.closest('.product-card');
    if (card) {
      const id = parseInt(card.dataset.id, 10);
      const product = products.find(p => p.id === id);
      if (product) openProductModal(product);
    }
  });

  // Keyboard: Enter/Space on card
  grid.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.product-card');
    if (card) {
      e.preventDefault();
      const id = parseInt(card.dataset.id, 10);
      const product = products.find(p => p.id === id);
      if (product) openProductModal(product);
    }
  });
}

/* ============================================================
   PRODUCT MODAL
   ============================================================ */

/**
 * Open the product detail modal.
 * @param {Object} product
 */
function openProductModal(product) {
  const modalEl = document.getElementById('productModal');
  if (!modalEl) return;

  // Lazy-init Bootstrap modal
  if (!store.productModal) {
    store.productModal = new bootstrap.Modal(modalEl, { keyboard: true });
  }

  // Populate modal fields
  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-img').alt = product.name;
  document.getElementById('productModalLabel').textContent = product.name;
  document.getElementById('modal-desc').textContent = product.description;
  document.getElementById('modal-price').textContent = product.price;
  document.getElementById('modal-category').textContent = getCategoryLabel(product.category);

  store.productModal.show();
}

/* ============================================================
   NAVBAR — active state & scroll behaviour
   ============================================================ */
function initNavbar() {
  const header = document.getElementById('main-header');

  // Add scrolled class for shadow
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 10;
    header?.classList.toggle('scrolled', scrolled);

    // Back to top visibility
    const btt = document.getElementById('back-to-top');
    if (btt) {
      const show = window.scrollY > 400;
      btt.hidden = !show;
    }

    // Update active bottom nav item based on section in view
    updateActiveNavOnScroll();
  }, { passive: true });

  // Back to top click
  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Desktop nav link smooth scroll & active state
  document.querySelectorAll('.nav-link[href^="#"], .bottom-nav-item[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/**
 * Detect which section is in view and update bottom nav active state.
 */
function updateActiveNavOnScroll() {
  const sections = ['home', 'menu'];
  const scrollPos = window.scrollY + window.innerHeight / 3;

  let currentSection = sections[0];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) currentSection = id;
  });

  setActiveNavItem(`bnav-${currentSection}`);

  // Desktop nav
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href')?.replace('#', '');
    link.classList.toggle('active', href === currentSection);
  });
}

/**
 * Set active class on bottom nav items.
 * @param {string} activeId
 */
function setActiveNavItem(activeId) {
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    item.classList.toggle('active', item.id === activeId);
  });
}

/* ============================================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================================ */
function initScrollAnimations() {
  // Hero section entrance
  const heroContent = document.querySelector('.hero-section');
  if (heroContent) heroContent.classList.add('hero-visible');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  document.querySelectorAll('[data-animate="fade-up"]').forEach(el => observer.observe(el));
}

/* ============================================================
   OPENING HOURS STATUS
   ============================================================ */
function updateOpenStatus() {
  const statusEl = document.getElementById('open-status');
  if (!statusEl) return;

  const now = new Date();
  const day = now.getDay();   // 0 = Sunday
  const hour = now.getHours();
  const min = now.getMinutes();
  const time = hour * 60 + min;

  // Mon–Sat: 7am–9pm (420–1260), Sun: 8am–6pm (480–1080)
  const openTime = day === 0 ? 480 : 420;
  const closeTime = day === 0 ? 1080 : 1260;
  const isOpen = time >= openTime && time < closeTime;

  statusEl.className = `open-status ${isOpen ? 'is-open' : 'is-closed'}`;
  statusEl.textContent = isOpen
    ? '🟢 We are Open Now!'
    : '🔴 Currently Closed';
}

/* ============================================================
   FOOTER YEAR
   ============================================================ */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   MAIN INIT
   ============================================================ */
function init() {
  // 1. Hide loading screen
  hideLoadingScreen();

  // 2. Set footer year
  setFooterYear();

  // 3. Render category chips
  renderCategoryChips();

  // 4. Render all products (initial state: category = all)
  filterAndRenderProducts();

  // 5. Bind product grid events (delegation)
  bindProductGridEvents();

  // 6. Init navbar
  initNavbar();

  // 7. Scroll animations
  initScrollAnimations();

  // 8. Opening hours status
  updateOpenStatus();

  // 9. Update active nav on initial load
  updateActiveNavOnScroll();
}

/* ============================================================
   BOOT — run when DOM is ready
   ============================================================ */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // DOM already ready (script loaded at bottom of body)
  init();
}
