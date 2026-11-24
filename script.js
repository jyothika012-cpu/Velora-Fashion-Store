// Mock Product Database (Trending & Catalog)
const productsData = [
    {
        id: 1,
        name: "Silk Evening Maxi Dress",
        category: "women",
        price: 189.00,
        originalPrice: 280.00,
        discount: "32% OFF",
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
        badge: "Bestseller",
        description: "Exquisitely tailored from pure mulberry silk, this evening gown drapes fluidly for an unforgettable silhouette at any gala."
    },
    {
        id: 2,
        name: "Tailored Wool Blend Blazer",
        category: "men",
        price: 245.00,
        originalPrice: 320.00,
        discount: "23% OFF",
        rating: 4.9,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        description: "Crafted in Italy with premium virgin wool, featuring structured shoulders and satin peak lapels for modern sophistication."
    },
    {
        id: 3,
        name: "Minimalist Leather Tote",
        category: "accessories",
        price: 120.00,
        originalPrice: 160.00,
        discount: "25% OFF",
        rating: 4.7,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
        badge: "Trending",
        description: "Spacious yet refined, constructed from full-grain supple calfskin leather with polished gold hardware."
    },
    {
        id: 4,
        name: "Velvet Slip Party Dress",
        category: "women",
        price: 145.00,
        originalPrice: 210.00,
        discount: "30% OFF",
        rating: 4.6,
        reviews: 85,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800",
        badge: "Sale",
        description: "A luxurious crushed velvet slip dress featuring delicate adjustable straps and a graceful cowl neckline."
    },
    {
        id: 5,
        name: "Classic Oxford Leather Shoes",
        category: "footwear",
        price: 210.00,
        originalPrice: 290.00,
        discount: "27% OFF",
        rating: 4.9,
        reviews: 142,
        image: "https://images.unsplash.com/photo-1533867617858-e7d97e06050e?auto=format&fit=crop&q=80&w=800",
        badge: "Classic",
        description: "Hand-polished calfskin oxfords featuring Goodyear welt construction for enduring elegance and supreme comfort."
    },
    {
        id: 6,
        name: "Cashmere Turtleneck Sweater",
        category: "women",
        price: 165.00,
        originalPrice: 220.00,
        discount: "25% OFF",
        rating: 4.8,
        reviews: 176,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800",
        badge: "Popular",
        description: "Ultra-soft grade-A Mongolian cashmere knit designed with ribbed trims and a relaxed, effortless silhouette."
    },
    {
        id: 7,
        name: "Kids Organic Cotton Set",
        category: "kids",
        price: 65.00,
        originalPrice: 90.00,
        discount: "28% OFF",
        rating: 4.9,
        reviews: 64,
        image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        description: "Gentle on sensitive skin, hypoallergenic 100% organic cotton matching top and trousers with playful styling."
    },
    {
        id: 8,
        name: "Designer Gold Chain Necklace",
        category: "accessories",
        price: 85.00,
        originalPrice: 120.00,
        discount: "29% OFF",
        rating: 4.7,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
        badge: "Hot",
        description: "18k gold plated chunky link chain designed to make a bold statement whether worn solo or layered."
    },
    {
        id: 9,
        name: "Slim-Fit Chino Trousers",
        category: "men",
        price: 95.00,
        originalPrice: 130.00,
        discount: "26% OFF",
        rating: 4.5,
        reviews: 90,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800",
        badge: "Essential",
        description: "Tailored from stretch cotton twill for a clean, sharp aesthetic that transitions seamlessly from office to evening."
    },
    {
        id: 10,
        name: "Suede Ankle Chelsea Boots",
        category: "footwear",
        price: 175.00,
        originalPrice: 240.00,
        discount: "27% OFF",
        rating: 4.8,
        reviews: 155,
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800",
        badge: "Trending",
        description: "Rich Italian calf suede featuring elastic side gussets and durable stacked heels for sophisticated daily wear."
    },
    {
        id: 11,
        name: "Pleated Midi Skirt",
        category: "women",
        price: 110.00,
        originalPrice: 150.00,
        discount: "26% OFF",
        rating: 4.7,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        description: "Lustrous metallic accordion pleats that catch the light with every step, fitted with a comfortable concealed waistband."
    },
    {
        id: 12,
        name: "Kids Wool Winter Coat",
        category: "kids",
        price: 115.00,
        originalPrice: 160.00,
        discount: "28% OFF",
        rating: 4.9,
        reviews: 43,
        image: "https://images.unsplash.com/photo-1503944583220-74d8964d557a?auto=format&fit=crop&q=80&w=800",
        badge: "Winter",
        description: "Warm, durable wool blend coat featuring double-breasted horn buttons and soft quilted interior lining."
    }
];

// State Management
let cart = [];
let wishlist = [];
let discountMultiplier = 1.0;

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const searchBtn = document.getElementById('searchBtn');
const searchContainer = document.getElementById('searchContainer');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');

const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const closeCart = document.getElementById('closeCart');
const cartItemsList = document.getElementById('cartItemsList');
const cartCount = document.getElementById('cartCount');
const drawerCartCount = document.getElementById('drawerCartCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const cartPromoInput = document.getElementById('cartPromoInput');
const applyPromoBtn = document.getElementById('applyPromoBtn');
const checkoutBtn = document.getElementById('checkoutBtn');

const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const closeWishlist = document.getElementById('closeWishlist');
const wishlistItemsList = document.getElementById('wishlistItemsList');
const wishlistCount = document.getElementById('wishlistCount');
const drawerWishlistCount = document.getElementById('drawerWishlistCount');

const userBtn = document.getElementById('userBtn');
const authModal = document.getElementById('authModal');
const closeAuth = document.getElementById('closeAuth');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');

const quickViewModal = document.getElementById('quickViewModal');
const closeQuickView = document.getElementById('closeQuickView');
const quickViewBody = document.getElementById('quickViewBody');

const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');

const infoModal = document.getElementById('infoModal');
const closeInfo = document.getElementById('closeInfo');
const infoModalBody = document.getElementById('infoModalBody');

const copyCodeBtn = document.getElementById('copyCodeBtn');
const newsletterForm = document.getElementById('newsletterForm');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
    renderTrendingProducts();
    renderCatalogProducts('all');
    setupEventListeners();
});

// Render Products Grid
function createProductCard(product) {
    const isWishlisted = wishlist.some(item => item.id === product.id);
    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            <div class="product-img-wrapper">
                <span class="product-badge">${product.badge}</span>
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id})" aria-label="Wishlist">
                    <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="quick-view-trigger" onclick="openQuickView(${product.id})">Quick View</button>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i>
                    <span>${product.rating} (${product.reviews})</span>
                </div>
                <div class="product-pricing">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                    <span class="discount-tag">${product.discount}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Bag</button>
            </div>
        </div>
    `;
}

function renderTrendingProducts() {
    const trendingGrid = document.getElementById('trendingGrid');
    const trendingItems = productsData.slice(0, 8);
    trendingGrid.innerHTML = trendingItems.map(createProductCard).join('');
}

function renderCatalogProducts(filter) {
    const catalogGrid = document.getElementById('catalogGrid');
    const filtered = filter === 'all' ? productsData : productsData.filter(p => p.category === filter);
    catalogGrid.innerHTML = filtered.map(createProductCard).join('');
}

// Event Listeners Setup
function setupEventListeners() {
    // Mobile Hamburger
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    // Search Toggle
    searchBtn.addEventListener('click', () => {
        searchContainer.classList.toggle('active');
        if(searchContainer.classList.contains('active')) {
            searchInput.focus();
        }
    });
    closeSearch.addEventListener('click', () => searchContainer.classList.remove('active'));

    // Search Filtering
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const catalogGrid = document.getElementById('catalogGrid');
        const filtered = productsData.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
        catalogGrid.innerHTML = filtered.map(createProductCard).join('');
        if(query.trim() !== '') {
            document.getElementById('new-arrivals').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Cart Drawer Toggle
    cartBtn.addEventListener('click', () => cartDrawer.classList.add('active'));
    closeCart.addEventListener('click', () => cartDrawer.classList.remove('active'));

    // Wishlist Drawer Toggle
    wishlistBtn.addEventListener('click', () => wishlistDrawer.classList.add('active'));
    closeWishlist.addEventListener('click', () => wishlistDrawer.classList.remove('active'));

    // User Auth Modal
    userBtn.addEventListener('click', () => authModal.classList.add('active'));
    closeAuth.addEventListener('click', () => authModal.classList.remove('active'));

    // Auth Tabs
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            const targetForm = document.getElementById(`${tab.dataset.tab}Form`);
            targetForm.classList.add('active');
        });
    });

    // Close Modals
    closeQuickView.addEventListener('click', () => quickViewModal.classList.remove('active'));
    closeCheckout.addEventListener('click', () => checkoutModal.classList.remove('active'));
    closeInfo.addEventListener('click', () => infoModal.classList.remove('active'));

    // Category Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderCatalogProducts(e.target.dataset.filter);
        });
    });

    // Shopping Category Cards Filtering
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.dataset.category;
            document.querySelectorAll('.filter-btn').forEach(b => {
                if(b.dataset.filter === cat) b.click();
            });
            document.getElementById('new-arrivals').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Promo Code Copy
    copyCodeBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('VELORA50');
        showToast('Promo code VELORA50 copied to clipboard!');
    });

    // Apply Promo Code
    applyPromoBtn.addEventListener('click', () => {
        const code = cartPromoInput.value.trim().toUpperCase();
        if(code === 'VELORA50' || code === 'VELORA10') {
            discountMultiplier = code === 'VELORA50' ? 0.5 : 0.9;
            updateCartUI();
            showToast(`Promo code ${code} applied successfully!`);
        } else {
            showToast('Invalid promo code. Try VELORA50.');
        }
    });

    // Checkout Trigger
    checkoutBtn.addEventListener('click', () => {
        if(cart.length === 0) {
            showToast('Your shopping bag is empty.');
            return;
        }
        cartDrawer.classList.remove('active');
        checkoutModal.classList.add('active');
    });

    // Checkout Form Submit
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        checkoutModal.classList.remove('active');
        cart = [];
        updateCartUI();
        showToast('Order placed successfully! Thank you for shopping with VELORA.');
    });

    // Newsletter Submit
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('newsletterEmail').value = '';
        showToast('Thank you for subscribing to VELORA VIP updates!');
    });

    // Footer Info Modals
    document.querySelectorAll('footer a[data-modal]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalType = link.dataset.modal;
            openInfoModal(modalType);
        });
    });
}

// Cart Functions
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if(existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1, size: 'M' });
    }
    updateCartUI();
    showToast(`${product.name} added to your bag.`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast('Item removed from bag.');
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if(item) {
        item.quantity += delta;
        if(item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
    drawerCartCount.textContent = totalCount;

    if(cart.length === 0) {
        cartItemsList.innerHTML = '<p style="text-align:center; color:var(--color-text-muted); margin-top:2rem;">Your shopping bag is empty.</p>';
        cartSubtotal.textContent = '$0.00';
        cartTotal.textContent = '$0.00';
        return;
    }

    cartItemsList.innerHTML = cart.map(item => `
        <div class="drawer-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="drawer-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} | Size: ${item.size}</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal * discountMultiplier;

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Wishlist Functions
function toggleWishlist(productId) {
    const product = productsData.find(p => p.id === productId);
    const index = wishlist.findIndex(item => item.id === productId);
    if(index > -1) {
        wishlist.splice(index, 1);
        showToast(`${product.name} removed from wishlist.`);
    } else {
        wishlist.push(product);
        showToast(`${product.name} added to wishlist.`);
    }
    updateWishlistUI();
    renderTrendingProducts();
    renderCatalogProducts(document.querySelector('.filter-btn.active').dataset.filter);
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    updateWishlistUI();
    renderTrendingProducts();
    renderCatalogProducts(document.querySelector('.filter-btn.active').dataset.filter);
    showToast('Item removed from wishlist.');
}

function updateWishlistUI() {
    wishlistCount.textContent = wishlist.length;
    drawerWishlistCount.textContent = wishlist.length;

    if(wishlist.length === 0) {
        wishlistItemsList.innerHTML = '<p style="text-align:center; color:var(--color-text-muted); margin-top:2rem;">Your wishlist is empty.</p>';
        return;
    }

    wishlistItemsList.innerHTML = wishlist.map(item => `
        <div class="drawer-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="drawer-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
                <button class="btn-sm" onclick="addToCart(${item.id}); removeFromWishlist(${item.id});">Move to Bag</button>
            </div>
            <button class="remove-item" onclick="removeFromWishlist(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `).join('');
}

// Quick View Modal
function openQuickView(productId) {
    const product = productsData.find(p => p.id === productId);
    quickViewBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="quick-view-img">
        <div class="quick-view-details">
            <span class="product-category">${product.category}</span>
            <h2>${product.name}</h2>
            <div class="product-rating" style="margin-bottom:0.75rem;">
                <i class="fa-solid fa-star"></i>
                <span>${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="price">$${product.price.toFixed(2)} <span class="original-price" style="font-size:1rem; margin-left:0.5rem;">$${product.originalPrice.toFixed(2)}</span></div>
            <p>${product.description}</p>
            <div class="size-selector">
                <label>Select Size</label>
                <div class="size-options">
                    <button class="size-btn active" onclick="selectSize(this)">S</button>
                    <button class="size-btn" onclick="selectSize(this)">M</button>
                    <button class="size-btn" onclick="selectSize(this)">L</button>
                    <button class="size-btn" onclick="selectSize(this)">XL</button>
                </div>
            </div>
            <button class="btn-primary full-width" onclick="addToCart(${product.id}); quickViewModal.classList.remove('active');">Add to Bag</button>
        </div>
    `;
    quickViewModal.classList.add('active');
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// Info Modals Content
function openInfoModal(type) {
    let title = '';
    let content = '';

    if(type === 'aboutModal') {
        title = 'About VELORA';
        content = '<p>Founded in New York, VELORA represents the pinnacle of modern luxury fashion. We combine exquisite tailoring, sustainable fabrics, and timeless aesthetics to create wardrobe staples that define your individuality.</p>';
    } else if(type === 'contactModal') {
        title = 'Contact Us';
        content = '<p>Our concierge team is available 24/7 to assist you with styling advice, order inquiries, and bespoke fittings.</p><p><i class="fa-solid fa-envelope"></i> concierge@velora.com<br><i class="fa-solid fa-phone"></i> +1 (800) 555-VELORA</p>';
    } else if(type === 'privacyModal') {
        title = 'Privacy Policy';
        content = '<p>At VELORA, we respect your privacy and protect your personal data with state-of-the-art encryption. Your information is used strictly to enhance your shopping experience and deliver your orders securely.</p>';
    } else if(type === 'termsModal') {
        title = 'Terms & Conditions';
        content = '<p>By accessing and shopping on VELORA, you agree to our terms of service, including our 30-day return policy, secure transaction protocols, and copyright standards.</p>';
    }

    infoModalBody.innerHTML = `<h2>${title}</h2>${content}`;
    infoModal.classList.add('active');
}

// Toast Notification
function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}
