let products = [];
let filteredProducts = [];
let cart = [];
let isLoading = false;

// DOM Elements
const elements = {
    searchToggle: null,
    searchBar: null,
    searchInput: null,
    searchBtn: null,
    menuToggle: null,
    nav: null,
    cartToggle: null,
    cartCount: null,
    cartSidebar: null,
    cartOverlay: null,
    cartClose: null,
    cartItems: null,
    cartEmpty: null,
    cartSubtotal: null,
    cartShipping: null,
    cartTotal: null,
    checkoutBtn: null,
    filterToggle: null,
    filters: null,
    categoryFilter: null,
    brandFilter: null,
    sizeFilter: null,
    sportFilter: null,
    clearFilters: null,
    loading: null,
    productsGrid: null,
    trendingGrid: null,
    noResults: null,
    toastContainer: null
};

// Product Data with Stock Photos
const productData = [
    // Sportswear Clothing
    {
        id: 1,
        title: "Nike Pro Tank Top",
        brand: "Nike",
        category: "clothing",
        sport: "training",
        price: 29.99,
        originalPrice: 39.99,
        discount: 25,
        sizes: ["xs", "s", "m", "l", "xl"],
        image: "https://pixabay.com/get/g17dd7c2865ec44cff9e4a49d55cf132cb178e024218446c0b62f9c3ce768bcb420f429ec77ad3a6a0e5207c5ea5605efb241cf49a0f75e2819701d26806f6214_1280.jpg",
        trending: true,
        description: "Moisture-wicking athletic tank top perfect for intense workouts"
    },
    {
        id: 2,
        title: "Under Armour Compression Shirt",
        brand: "Under Armour",
        category: "clothing",
        sport: "training",
        price: 45.99,
        originalPrice: null,
        discount: 0,
        sizes: ["s", "m", "l", "xl", "xxl"],
        image: "https://pixabay.com/get/gc18be3d1be3c2ce513fb9f6453182b811bc410c3732d79063561223043bcfb50aba05270115672bf157805fa9bf4b8dd3318f7cad8aeb71e188c5031276b530e_1280.jpg",
        trending: false,
        description: "Compression technology for enhanced performance and recovery"
    },
    {
        id: 3,
        title: "Adidas Yoga Wear Set",
        brand: "Adidas",
        category: "clothing",
        sport: "yoga",
        price: 67.99,
        originalPrice: 89.99,
        discount: 24,
        sizes: ["xs", "s", "m", "l"],
        image: "https://pixabay.com/get/gd1157a7a9dfcd62e721162f0336258fb97ac4e9dc018a3cde0e19b0af28bcab13d97ff23897387fd12f570ba2466ae29c9487bf7e8994b0cd46be9e743627fa5_1280.jpg",
        trending: true,
        description: "Complete yoga set with breathable and flexible fabric"
    },
    {
        id: 4,
        title: "Reebok RunLite Shorts",
        brand: "Reebok",
        category: "clothing",
        sport: "running",
        price: 24.99,
        originalPrice: 34.99,
        discount: 29,
        sizes: ["s", "m", "l", "xl"],
        image: "https://pixabay.com/get/g64233f65626f14a8e6ca53a498f1c56178ac888eacb09d38b43a1dd21e2888fce282fa5446d837962e3aa7831c5052ae09bb5e812f0a8b94ec5300a710092d1e_1280.jpg",
        trending: false,
        description: "Lightweight running shorts with built-in compression liner"
    },
    {
        id: 5,
        title: "Premium Training Leggings",
        brand: "FitWear",
        category: "clothing",
        sport: "training",
        price: 39.99,
        originalPrice: null,
        discount: 0,
        sizes: ["xs", "s", "m", "l", "xl"],
        image: "https://pixabay.com/get/gb265f9d573b155d3b2331534b58bd76c8d7314cf9a8d5208d1ec2549d677bebfdfc4bdc75a13228313c53f39b8f94da00d2c4fc26a01fdcfeee3a7214d538fc5_1280.jpg",
        trending: true,
        description: "High-waisted leggings with pocket details and squat-proof fabric"
    },
    {
        id: 6,
        title: "Basketball Jersey Set",
        brand: "Nike",
        category: "clothing",
        sport: "basketball",
        price: 79.99,
        originalPrice: 99.99,
        discount: 20,
        sizes: ["s", "m", "l", "xl", "xxl"],
        image: "https://pixabay.com/get/g7dd6b76e6c77acf6b87f466aa5a33eee5d6085fce8ccdd1c6dd071c0b3c497479abce52ce90318b0e89e66b241da2e32cf349602c89b2e1be773c3f50f35e5ca_1280.jpg",
        trending: false,
        description: "Professional basketball jersey with moisture management technology"
    },
    {
        id: 7,
        title: "Athletic Hooded Sweatshirt",
        brand: "Adidas",
        category: "clothing",
        sport: "training",
        price: 54.99,
        originalPrice: null,
        discount: 0,
        sizes: ["s", "m", "l", "xl"],
        image: "https://pixabay.com/get/g88f1c1dd7eef61a28e8081d5491e831afcb98d25a8978702bd6be9e53541853ffa7d3252010416ebe0ae8a4d10704d5bbf3e1686f23052a5a87c6714e7e8cb6a_1280.jpg",
        trending: false,
        description: "Comfortable hooded sweatshirt perfect for warm-ups and cool-downs"
    },
    {
        id: 8,
        title: "Football Training Gear",
        brand: "Under Armour",
        category: "clothing",
        sport: "football",
        price: 89.99,
        originalPrice: 119.99,
        discount: 25,
        sizes: ["m", "l", "xl", "xxl"],
        image: "https://pixabay.com/get/ge3c1cb9938c56074db7b72e43c2a5c2e824d2aa29007aeda604984554fb9a3b7c6c898dd65cbe0dda7b6a1a7d9329f20f61f73f750639017c09c3fbdd976694b_1280.jpg",
        trending: true,
        description: "Complete football training gear with protective padding"
    },

    // Fitness Shoes
    {
        id: 9,
        title: "Air Max Running Shoes",
        brand: "Nike",
        category: "shoes",
        sport: "running",
        price: 129.99,
        originalPrice: 159.99,
        discount: 19,
        sizes: ["7", "8", "9", "10", "11", "12"],
        image: "https://pixabay.com/get/ga5c1a3df465710c3e6a82ceb3b46359b215779549ec0517bdc83d047057ae0a5433250706e31c2a8c3751def6213fe0861b849463018a1ff34b9547239fbf499_1280.jpg",
        trending: true,
        description: "Premium running shoes with Air Max cushioning technology"
    },
    {
        id: 10,
        title: "Cross Training Sneakers",
        brand: "Reebok",
        category: "shoes",
        sport: "training",
        price: 89.99,
        originalPrice: null,
        discount: 0,
        sizes: ["7", "8", "9", "10", "11"],
        image: "https://pixabay.com/get/gd4bae93f9dddfd51cf939713bb0adaf2e100324f8a0fb44b52f9b83ea7bb1cec40704a17b1dd652cfb15f3395bc86eee70ec8c8baa9cb2ee45bd7b956502d668_1280.jpg",
        trending: false,
        description: "Versatile cross-training shoes for multiple workout types"
    },
    {
        id: 11,
        title: "Basketball High Tops",
        brand: "Adidas",
        category: "shoes",
        sport: "basketball",
        price: 149.99,
        originalPrice: 179.99,
        discount: 17,
        sizes: ["8", "9", "10", "11", "12"],
        image: "https://pixabay.com/get/g44e525f42efafc09cb1a6d498386b5bac185fa835764b0682feb8f094b4b84b3e9124cf95ca68aa43f702f52cffd2b78fa4a2df8ca90c4f93db7c9be318a4356_1280.jpg",
        trending: true,
        description: "High-performance basketball shoes with ankle support"
    },
    {
        id: 12,
        title: "Lightweight Running Shoes",
        brand: "FitWear",
        category: "shoes",
        sport: "running",
        price: 79.99,
        originalPrice: 99.99,
        discount: 20,
        sizes: ["6", "7", "8", "9", "10", "11"],
        image: "https://pixabay.com/get/gcfbc7ab315961ca54941968cdf1e4e033089156759129663b8968bfb742efe7b5a3317e0df57c7f5589b6e7ace410f96e2f94b39572aca207680ff85c1371b68_1280.jpg",
        trending: false,
        description: "Ultra-lightweight running shoes for speed and comfort"
    },
    {
        id: 13,
        title: "Professional Training Shoes",
        brand: "Under Armour",
        category: "shoes",
        sport: "training",
        price: 119.99,
        originalPrice: null,
        discount: 0,
        sizes: ["7", "8", "9", "10", "11", "12"],
        image: "https://pixabay.com/get/g98f0464eacff149a75c0bee04199f78c03971062ca533e33fc72f70b22ded96147ad53008778d066526d46003491c79bec4179b3b48010a4ed8e21fb1fb53fd5_1280.jpg",
        trending: false,
        description: "Professional-grade training shoes with superior grip and stability"
    },
    {
        id: 14,
        title: "Marathon Running Shoes",
        brand: "Nike",
        category: "shoes",
        sport: "running",
        price: 169.99,
        originalPrice: 199.99,
        discount: 15,
        sizes: ["7", "8", "9", "10", "11"],
        image: "https://pixabay.com/get/g3d00a370edb980bfd92d81e200113204611cf89ea81fe6c1505b3c3a78993885f0dae66a55df86e79baa140a88da359d785c9dea953d97f64ca745394e9aa137_1280.jpg",
        trending: true,
        description: "Marathon-grade running shoes with advanced cushioning system"
    },

    // Gym Equipment
    {
        id: 15,
        title: "Adjustable Dumbbell Set",
        brand: "FitWear",
        category: "equipment",
        sport: "training",
        price: 299.99,
        originalPrice: 399.99,
        discount: 25,
        sizes: ["one-size"],
        image: "https://pixabay.com/get/ga0a9eb0615ce80f2b635167752bc1ddae6d8016ea2bb1eb59db105e58ba935578083d05ab1a1538c3003a369ff56abd1f4feb7cd11e3f765e130a2e4badde5a5_1280.jpg",
        trending: true,
        description: "Space-saving adjustable dumbbell set for home workouts"
    },
    {
        id: 16,
        title: "Premium Barbell Set",
        brand: "FitWear",
        category: "equipment",
        sport: "training",
        price: 449.99,
        originalPrice: null,
        discount: 0,
        sizes: ["one-size"],
        image: "https://pixabay.com/get/g32b789daea98743c02fc20c362c62743e0ab172e139043f5bc3b4cebbcd433b9e49f6cd73beccc8e440c8f8257d7d1bfb12b87828f42e9cb7a0b0e9cda616aef_1280.jpg",
        trending: false,
        description: "Professional barbell set with Olympic-grade steel construction"
    },
    {
        id: 17,
        title: "Multi-Station Home Gym",
        brand: "FitWear",
        category: "equipment",
        sport: "training",
        price: 1299.99,
        originalPrice: 1599.99,
        discount: 19,
        sizes: ["one-size"],
        image: "https://pixabay.com/get/g5fdd1e23fb672bc372609155666baeccc9bce171edcb6c3cedbf3da9fc62f5f45e49743f9005ce78cde99906a2f8c6ed86cf4e32f00079a7cd583aa4ff20af4a_1280.jpg",
        trending: true,
        description: "Complete home gym system with multiple exercise stations"
    },
    {
        id: 18,
        title: "Professional Kettlebell",
        brand: "FitWear",
        category: "equipment",
        sport: "training",
        price: 89.99,
        originalPrice: 109.99,
        discount: 18,
        sizes: ["20lb", "30lb", "40lb", "50lb"],
        image: "https://pixabay.com/get/g46c4588891a52245805eb7e45870f2c7cd5b91a8f17d513abb735968c79688c938a7608bf09036af2d6c7a0ff73965be56168cf808ea437c739cdf5308cb8188_1280.jpg",
        trending: false,
        description: "Cast iron kettlebell with ergonomic handle for functional training"
    },

    // Athletic Accessories
    {
        id: 19,
        title: "Smart Fitness Watch",
        brand: "FitWear",
        category: "accessories",
        sport: "training",
        price: 199.99,
        originalPrice: 249.99,
        discount: 20,
        sizes: ["one-size"],
        image: "https://pixabay.com/get/gcbd2eedaedef12b643c043c22243510a3f4b7e12ec0ed26694fae62a3bc28b60ac5f8f0a7cc2664232f74f6fafdac0e2e8f6ca14230affcfc6e4b414e8a01fa1_1280.jpg",
        trending: true,
        description: "Advanced fitness tracker with heart rate monitoring and GPS"
    },
    {
        id: 20,
        title: "Wireless Sports Headphones",
        brand: "FitWear",
        category: "accessories",
        sport: "training",
        price: 79.99,
        originalPrice: 99.99,
        discount: 20,
        sizes: ["one-size"],
        image: "https://pixabay.com/get/gbc59cc46be5df0f3d00ba5ee771b6608f81a1d88bc5db0d787d3b5e960277c5b3fdb09cc23b1c801405b98f7d4440badc274527ebcf5fba28c26dd13087e85fe_1280.jpg",
        trending: true,
        description: "Sweat-resistant wireless headphones with premium sound quality"
    },
    {
        id: 21,
        title: "Yoga Mat Premium",
        brand: "FitWear",
        category: "accessories",
        sport: "yoga",
        price: 49.99,
        originalPrice: 69.99,
        discount: 29,
        sizes: ["one-size"],
        image: "https://pixabay.com/get/g7aaa6e7348b4b957dcc95248805401eb775e3ab5dc25d13c09cb8470f0badb4ee229d3ea39191ce68bd2e53a5df3cab8f9c2d62ce75c7fe895c83c8d6aa6e755_1280.jpg",
        trending: false,
        description: "Extra-thick yoga mat with superior grip and cushioning"
    },
    {
        id: 22,
        title: "Professional Water Bottle",
        brand: "FitWear",
        category: "accessories",
        sport: "training",
        price: 24.99,
        originalPrice: null,
        discount: 0,
        sizes: ["500ml", "750ml", "1L"],
        image: "https://pixabay.com/get/g76084d7b3380280cc79bae69079d9db4ec7b3400ce044742a9ada2bcbf9d5632a1e59b275771eb2aa6305cc6dbf2b070011d97f044c2d1f4ec2864f44a476486_1280.jpg",
        trending: false,
        description: "Insulated stainless steel water bottle with leak-proof design"
    }
];

// Initialize Application
function initializeApp() {
    initializeElements();
    loadCart();
    setupEventListeners();
    loadProducts();
    updateCartUI();
}

// Initialize DOM Elements
function initializeElements() {
    elements.searchToggle = document.getElementById('searchToggle');
    elements.searchBar = document.getElementById('searchBar');
    elements.searchInput = document.getElementById('searchInput');
    elements.searchBtn = document.getElementById('searchBtn');
    elements.menuToggle = document.getElementById('menuToggle');
    elements.nav = document.getElementById('nav');
    elements.cartToggle = document.getElementById('cartToggle');
    elements.cartCount = document.getElementById('cartCount');
    elements.cartSidebar = document.getElementById('cartSidebar');
    elements.cartOverlay = document.getElementById('cartOverlay');
    elements.cartClose = document.getElementById('cartClose');
    elements.cartItems = document.getElementById('cartItems');
    elements.cartEmpty = document.getElementById('cartEmpty');
    elements.cartSubtotal = document.getElementById('cartSubtotal');
    elements.cartShipping = document.getElementById('cartShipping');
    elements.cartTotal = document.getElementById('cartTotal');
    elements.checkoutBtn = document.getElementById('checkoutBtn');
    elements.filterToggle = document.getElementById('filterToggle');
    elements.filters = document.getElementById('filters');
    elements.categoryFilter = document.getElementById('categoryFilter');
    elements.brandFilter = document.getElementById('brandFilter');
    elements.sizeFilter = document.getElementById('sizeFilter');
    elements.sportFilter = document.getElementById('sportFilter');
    elements.clearFilters = document.getElementById('clearFilters');
    elements.loading = document.getElementById('loading');
    elements.productsGrid = document.getElementById('productsGrid');
    elements.trendingGrid = document.getElementById('trendingGrid');
    elements.noResults = document.getElementById('noResults');
    elements.toastContainer = document.getElementById('toastContainer');
}

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    elements.searchToggle?.addEventListener('click', toggleSearch);
    elements.searchBtn?.addEventListener('click', performSearch);
    elements.searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    elements.searchInput?.addEventListener('input', debounce(performSearch, 300));

    // Navigation
    elements.menuToggle?.addEventListener('click', toggleMenu);
    
    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cart functionality
    elements.cartToggle?.addEventListener('click', openCart);
    elements.cartClose?.addEventListener('click', closeCart);
    elements.cartOverlay?.addEventListener('click', closeCart);
    elements.checkoutBtn?.addEventListener('click', proceedToCheckout);

    // Filters
    elements.filterToggle?.addEventListener('click', toggleFilters);
    elements.clearFilters?.addEventListener('click', clearAllFilters);
    
    // Filter change events
    elements.categoryFilter?.addEventListener('change', applyFilters);
    elements.brandFilter?.addEventListener('change', applyFilters);
    elements.sizeFilter?.addEventListener('change', applyFilters);
    elements.sportFilter?.addEventListener('change', applyFilters);

    // Scroll to top on logo click
    document.querySelector('.logo')?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Close search and menu on outside click
    document.addEventListener('click', (e) => {
        if (!elements.searchBar?.contains(e.target) && !elements.searchToggle?.contains(e.target)) {
            closeSearch();
        }
        if (!elements.nav?.contains(e.target) && !elements.menuToggle?.contains(e.target)) {
            closeMenu();
        }
    });
}

// Search functionality
function toggleSearch() {
    elements.searchBar?.classList.toggle('active');
    if (elements.searchBar?.classList.contains('active')) {
        elements.searchInput?.focus();
    }
}

function closeSearch() {
    elements.searchBar?.classList.remove('active');
}

function performSearch() {
    const query = elements.searchInput?.value.toLowerCase().trim();
    if (query) {
        filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.sport.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    } else {
        filteredProducts = [...products];
    }
    applyFilters(false);
    renderProducts();
}

// Navigation functionality
function toggleMenu() {
    elements.nav?.classList.toggle('active');
}

function closeMenu() {
    elements.nav?.classList.remove('active');
}

// Cart functionality
function loadCart() {
    try {
        const savedCart = localStorage.getItem('fitware-cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    } catch (error) {
        console.error('Error loading cart:', error);
        cart = [];
    }
}

function saveCart() {
    try {
        localStorage.setItem('fitware-cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart:', error);
        showToast('Error', 'Failed to save cart', 'error');
    }
}

function addToCart(productId, selectedSize = null) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        showToast('Error', 'Product not found', 'error');
        return;
    }

    // Check if size is required for clothing and shoes
    if (product.category === 'clothing' || product.category === 'shoes') {
        if (!selectedSize) {
            showToast('Size Required', 'Please select a size', 'warning');
            return;
        }
    }

    const existingItem = cart.find(item => 
        item.id === productId && item.selectedSize === selectedSize
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            title: product.title,
            brand: product.brand,
            price: product.price,
            image: product.image,
            selectedSize: selectedSize,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast('Added to Cart', `${product.title} added successfully`, 'success');
}

function removeFromCart(productId, selectedSize = null) {
    cart = cart.filter(item => 
        !(item.id === productId && item.selectedSize === selectedSize)
    );
    saveCart();
    updateCartUI();
    renderCartItems();
}

function updateCartQuantity(productId, selectedSize, newQuantity) {
    const item = cart.find(item => 
        item.id === productId && item.selectedSize === selectedSize
    );
    
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId, selectedSize);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartUI();
            renderCartItems();
        }
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (elements.cartCount) {
        elements.cartCount.textContent = totalItems;
        if (totalItems > 0) {
            elements.cartCount.classList.add('show');
        } else {
            elements.cartCount.classList.remove('show');
        }
    }

    if (elements.cartSubtotal) {
        elements.cartSubtotal.textContent = `$${totalPrice.toFixed(2)}`;
    }

    if (elements.cartTotal) {
        elements.cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }

    if (elements.cartEmpty && elements.cartItems) {
        if (cart.length === 0) {
            elements.cartEmpty.style.display = 'block';
            elements.cartItems.style.display = 'none';
        } else {
            elements.cartEmpty.style.display = 'none';
            elements.cartItems.style.display = 'block';
        }
    }

    if (elements.checkoutBtn) {
        elements.checkoutBtn.disabled = cart.length === 0;
    }
}

function openCart() {
    elements.cartSidebar?.classList.add('active');
    elements.cartOverlay?.classList.add('active');
    renderCartItems();
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    elements.cartSidebar?.classList.remove('active');
    elements.cartOverlay?.classList.remove('active');
    document.body.style.overflow = '';
}

function renderCartItems() {
    if (!elements.cartItems) return;

    if (cart.length === 0) {
        elements.cartItems.innerHTML = '';
        return;
    }

    elements.cartItems.innerHTML = cart.map(item => {
        const size = item.selectedSize ? `'${item.selectedSize}'` : 'null';
        return `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-brand">${item.brand}</div>
                ${item.selectedSize ? `<div class="cart-item-size">Size: ${item.selectedSize.toUpperCase()}</div>` : ''}
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${size}, ${item.quantity - 1})">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${size}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id}, ${size})">Remove</button>
            </div>
        </div>
        `;
    }).join('');
}
s

function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Empty Cart', 'Add items to cart before checkout', 'warning');
        return;
    }

    showToast('Checkout', 'Redirecting to checkout...', 'success');
    
    // Simulate checkout process
    setTimeout(() => {
        showToast('Demo', 'This is a demo. Checkout functionality would be implemented here.', 'warning');
    }, 1500);
}

// Filter functionality
function toggleFilters() {
    elements.filters?.classList.toggle('active');
}

function clearAllFilters() {
    elements.categoryFilter.value = '';
    elements.brandFilter.value = '';
    elements.sizeFilter.value = '';
    elements.sportFilter.value = '';
    elements.searchInput.value = '';
    filteredProducts = [...products];
    renderProducts();
}

function applyFilters(resetSearch = true) {
    if (resetSearch) {
        filteredProducts = [...products];
    }

    const categoryFilter = elements.categoryFilter?.value;
    const brandFilter = elements.brandFilter?.value;
    const sizeFilter = elements.sizeFilter?.value;
    const sportFilter = elements.sportFilter?.value;

    filteredProducts = filteredProducts.filter(product => {
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        const matchesBrand = !brandFilter || product.brand.toLowerCase() === brandFilter;
        const matchesSize = !sizeFilter || product.sizes.includes(sizeFilter);
        const matchesSport = !sportFilter || product.sport === sportFilter;

        return matchesCategory && matchesBrand && matchesSize && matchesSport;
    });

    renderProducts();
}

// Product loading and rendering
function loadProducts() {
    showLoading();
    
    // Simulate API loading time
    setTimeout(() => {
        products = [...productData];
        filteredProducts = [...products];
        hideLoading();
        renderProducts();
        renderTrendingProducts();
    }, 500);
}

function showLoading() {
    elements.loading?.classList.add('show');
    elements.productsGrid && (elements.productsGrid.style.display = 'none');
    elements.noResults && (elements.noResults.style.display = 'none');
}

function hideLoading() {
    elements.loading?.classList.remove('show');
    elements.productsGrid && (elements.productsGrid.style.display = 'grid');
}

function renderProducts() {
    if (!elements.productsGrid) return;

    if (filteredProducts.length === 0) {
        elements.productsGrid.style.display = 'none';
        elements.noResults && (elements.noResults.style.display = 'block');
        return;
    }

    elements.noResults && (elements.noResults.style.display = 'none');
    elements.productsGrid.style.display = 'grid';

    elements.productsGrid.innerHTML = filteredProducts.map(product => 
        createProductCard(product)
    ).join('');

    // Initialize lazy loading for product images
    initializeLazyLoading();
}

function renderTrendingProducts() {
    if (!elements.trendingGrid) return;

    const trendingProducts = products.filter(product => product.trending);
    
    elements.trendingGrid.innerHTML = trendingProducts.map(product => 
        createProductCard(product, true)
    ).join('');

    // Initialize lazy loading for trending images
    initializeLazyLoading();
}

function createProductCard(product, isTrending = false) {
    const discountBadge = product.discount > 0 ? 
        `<span class="product-badge sale">-${product.discount}%</span>` : '';
    
    const trendingBadge = product.trending && !isTrending ? 
        `<span class="product-badge trending">Trending</span>` : '';

    const originalPrice = product.originalPrice ? 
        `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : '';

    const discountPercent = product.discount > 0 ? 
        `<span class="price-discount">${product.discount}% OFF</span>` : '';

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy" onload="this.classList.add('loaded')">
                ${discountBadge}
                ${trendingBadge}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${originalPrice}
                    ${discountPercent}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="handleAddToCart(${product.id})">
                        <i data-feather="shopping-cart"></i>
                        Add to Cart
                    </button>
                    <button class="quick-view" onclick="showToast('Quick View', 'Quick view feature coming soon!', 'info')">
                        <i data-feather="eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function handleAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // For clothing and shoes, show size selection
    if (product.category === 'clothing' || product.category === 'shoes') {
        const sizes = product.sizes;
        const sizeOptions = sizes.map(size => 
            `<option value="${size}">${size.toUpperCase()}</option>`
        ).join('');

        const sizeSelector = `
            <div style="margin: 1rem 0;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Select Size:</label>
                <select id="size-selector" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 2px solid #e1e5e9;">
                    <option value="">Choose size...</option>
                    ${sizeOptions}
                </select>
            </div>
        `;

        showToast('Select Size', sizeSelector, 'info');
        
        // Add event listener to size selector
        setTimeout(() => {
            const selector = document.getElementById('size-selector');
            if (selector) {
                selector.addEventListener('change', (e) => {
                    if (e.target.value) {
                        addToCart(productId, e.target.value);
                        // Close the toast
                        const toast = e.target.closest('.toast');
                        if (toast) {
                            toast.remove();
                        }
                    }
                });
            }
        }, 100);
    } else {
        // For equipment and accessories, add directly
        addToCart(productId);
    }
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => img.classList.add('loaded'));
    }
}

// Toast notifications
function showToast(title, message, type = 'success') {
    if (!elements.toastContainer) return;

    const toastId = 'toast-' + Date.now();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.id = toastId;
    
    toast.innerHTML = `
        <div class="toast-header">
            <span class="toast-title">${title}</span>
            <button class="toast-close" onclick="removeToast(this)">
                <i data-feather="x"></i>
            </button>
        </div>
        <div class="toast-message">${message}</div>
    `;

    elements.toastContainer.appendChild(toast);

    // Replace feather icons in the new toast
    if (window.feather) {
        feather.replace();
    }

    // Show toast with animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Auto-remove toast after 5 seconds
    setTimeout(() => {
        if (document.getElementById(toastId)) {
            removeToast(toast.querySelector('.toast-close'));
        }
    }, 5000);
}

function removeToast(button) {
    const toast = button.closest('.toast');
    if (toast) {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = section.offsetTop;
        const offsetPosition = elementPosition - headerHeight - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Keyboard navigation
function handleKeyboardNavigation(e) {
    // ESC key closes modals
    if (e.key === 'Escape') {
        closeCart();
        closeSearch();
        closeMenu();
    }

    // Ctrl/Cmd + K opens search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
    }
}

// FAQ functionality (for contact page)
function toggleFaq(button) {
    const faqItem = button.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // If this item wasn't active, open it
    if (!isActive) {
        faqItem.classList.add('active');
    }
    
    // Update feather icons
    if (window.feather) {
        feather.replace();
    }
}

// Form handling (for contact page)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!firstName || !lastName || !email || !subject || !message) {
                showToast('Error', 'Please fill in all required fields', 'error');
                return;
            }
            
            // Show success message
            showToast('Message Sent!', 'Thank you for contacting us. We\'ll get back to you soon.', 'success');
            
            // Reset form
            this.reset();
        });
    }
});

// Initialize scroll-based nav highlighting
window.addEventListener('scroll', debounce(() => {
    const sections = ['home', 'trending', 'products'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                current = sectionId;
            }
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 100));

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
        
        if (loadTime > 3000) {
            console.warn('Page load time is over 3 seconds. Consider optimizing.');
        }
    });
}

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}