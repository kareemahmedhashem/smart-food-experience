/* ==========================================
   SMART FOOD EXPERIENCE - FULLY FIXED & UNIFIED
   ========================================== */

const foodItems = [
    { id: 1, name: "برجر لحم كلاسيك", category: "burger", price: 85, desc: "برجر لحم بقري طازج مع جبنة شيدر وخس وطماطم", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "برجر دجاج مقرمش", category: "burger", price: 75, desc: "صدر دجاج مقرمش مع صوص خاص وخبز برجر طازج", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "بيتزا مارجريتا", category: "pizza", price: 95, desc: "بيتزا إيطالية كلاسيكية بجبنة موزاريلا وريحان طازج", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "بيتزا بيبروني", category: "pizza", price: 110, desc: "بيتزا بالبيبروني الحار مع جبنة موزاريلا ذائبة", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "هوت دوج أمريكي", category: "hotdog", price: 55, desc: "هوت دوج لحم مع خردل وكاتشب وبصل مقرمش", image: "https://images.unsplash.com/photo-1612392166886-d971b737b5b0?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "حواوشي لحم", category: "hawawshi", price: 65, desc: "حواوشي لحم متبل بالبهارات الشرقية في عيش بلدي", image: "https://images.unsplash.com/photo-1529042410759-befb1204b916?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "طاجن كفتة", category: "hawawshi", price: 90, desc: "طاجن كفتة بالصلصة والأرز في الفرن", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "سجق مشوي", category: "sausage", price: 50, desc: "سجق مشوي مع بطاطس مقلية وصوص حار", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=500&q=80" },
    { id: 9, name: "كباب مشوي", category: "grills", price: 120, desc: "كباب لحم مشوي على الفحم مع طحينة وسلطة", image: "https://images.unsplash.com/photo-1529042410759-befb1204b916?auto=format&fit=crop&w=500&q=80" },
    { id: 10, name: "ريش ضاني", category: "grills", price: 180, desc: "ريش ضاني مشوية على الفحم مع أرز وخضار", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
    { id: 11, name: "شيش طاووق", category: "orientalgrills", price: 95, desc: "دجاج مشوي بالتوابل الشرقية مع ثومية", image: "https://images.unsplash.com/photo-1608030599283-22c19c4a2f2e?auto=format&fit=crop&w=500&q=80" },
    { id: 12, name: "كفتة مشوية", category: "orientalgrills", price: 85, desc: "كفتة لحم مشوية مع طحينة وخبز عربي", image: "https://images.unsplash.com/photo-1529042410759-befb1204b916?auto=format&fit=crop&w=500&q=80" },
    { id: 13, name: "دجاج كرسبي", category: "chicken", price: 80, desc: "قطع دجاج مقرمشة مع صوص باربكيو", image: "https://images.unsplash.com/photo-1626082927389-6b0970460e29?auto=format&fit=crop&w=500&q=80" },
    { id: 14, name: "ساندوتش شاورما", category: "sandwiches", price: 45, desc: "شاورما لحم أو دجاج مع خضار وثومية", image: "https://images.unsplash.com/photo-1529006557810-274bdaa0a608?auto=format&fit=crop&w=500&q=80" },
    { id: 15, name: "ساندوتش فلافل", category: "sandwiches", price: 25, desc: "فلافل مقرمشة مع طحينة وسلطة في عيش بلدي", image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?auto=format&fit=crop&w=500&q=80" },
    { id: 16, name: "جمبري مشوي", category: "seafood", price: 150, desc: "جمبري طازج مشوي مع ليمون وتوابل", image: "https://images.unsplash.com/photo-1565680018434-b698cbd277e8?auto=format&fit=crop&w=500&q=80" },
    { id: 17, name: "سمك فيليه", category: "seafood", price: 130, desc: "فيليه سمك مشوي مع أرز وسلطة خضراء", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" },
    { id: 18, name: "باستا ألفريدو", category: "pasta", price: 90, desc: "باستا بالصوص الكريمي الأبيض والدجاج", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=500&q=80" },
    { id: 19, name: "شوربة عدس", category: "appetizers", price: 30, desc: "شوربة عدس مصرية تقليدية مع ليمون", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" },
    { id: 20, name: "سلطة فواكه", category: "fruits", price: 40, desc: "تشكيلة فواكه طازجة موسمية", image: "https://images.unsplash.com/photo-1564093497599-593b96d80180?auto=format&fit=crop&w=500&q=80" },
    { id: 21, name: "سلطة يونانية", category: "vegetables", price: 45, desc: "خس وطماطم وخيار وجبنة فيتا وزيتون", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80" },
    { id: 22, name: "كنافة نابلسية", category: "desserts", price: 55, desc: "كنافة بالجبنة مع قطر و فستق", image: "https://images.unsplash.com/photo-1578985545069-469a028e8e4f?auto=format&fit=crop&w=500&q=80" },
    { id: 23, name: "بطاطس مقلية", category: "extras", price: 20, desc: "بطاطس مقرمشة مع صوص كetchup", image: "https://images.unsplash.com/photo-1573080496219-b080abffe08f?auto=format&fit=crop&w=500&q=80" },
    { id: 24, name: "فول وطعمية", category: "breakfast", price: 35, desc: "فول مصري مع طعمية وبيض مسلوق", image: "https://images.unsplash.com/photo-1482049010928-62e11b4a4b1a?auto=format&fit=crop&w=500&q=80" },
    { id: 25, name: "تاكو مكسيكي", category: "mexican", price: 70, desc: "تاكو لحم مع صوص سالسا وجبنة", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80" },
    { id: 26, name: "سلطة دايت", category: "diet", price: 50, desc: "سلطة خضراء مع دجاج مشوي وصوص خفيف", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80" },
];

const DEMO_USER = { email: "demo@smartfood.com", password: "123456" };

let foodItemsList = JSON.parse(localStorage.getItem("smartFoodsList")) || foodItems;
let cart = JSON.parse(localStorage.getItem("smartFoodCart")) || [];
let currentActiveCategory = "all";

document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    initLoginForm();
    initMobileMenu();
    renderMenu(foodItemsList);
    updateCartUI();
});

/* ------------------------------------------
   Render Menu & Filtering
   ------------------------------------------ */
function renderMenu(items) {
    const container = document.getElementById("food-container");
    if (!container) return;

    container.innerHTML = "";

    if (items.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:var(--text-muted); grid-column:1/-1;">لا توجد أصناف في هذا القسم حالياً.</p>';
        return;
    }

    items.forEach((item) => {
        const card = document.createElement("div");
        card.className = "food-card";
        card.innerHTML = `
            <button class="delete-card-btn" title="حذف الصنف" onclick="confirmDeleteFood(${item.id})">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <img class="food-img" src="${item.image}" alt="${item.name}" />
            <div class="food-details">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <div class="food-footer">
                    <span class="food-price">${item.price} ج.م</span>
                    <div class="food-actions">
                        <button class="btn btn-secondary btn-sm" onclick="openQrModalFor('${item.name}')" title="QR Code">
                            <i class="fa-solid fa-qrcode"></i>
                        </button>
                        <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">اطلب</button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterCategory(category, btnElement) {
    currentActiveCategory = category;
    document.querySelectorAll(".category-card").forEach((btn) => btn.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");

    if (category === "all") {
        renderMenu(foodItemsList);
    } else {
        renderMenu(foodItemsList.filter((item) => item.category === category));
    }
}

/* ------------------------------------------
   Food Management (Add & Delete)
   ------------------------------------------ */
function confirmDeleteFood(id) {
    const itemToDelete = foodItemsList.find((f) => f.id === id);
    if (!itemToDelete) return;

    if (confirm(`هل تريد مسح هذا الصنف (${itemToDelete.name})؟`)) {
        foodItemsList = foodItemsList.filter((f) => f.id !== id);
        localStorage.setItem("smartFoodsList", JSON.stringify(foodItemsList));
        filterCategory(currentActiveCategory, document.querySelector(`.category-card[data-category="${currentActiveCategory}"]`));
        showToast("تم مسح الصنف بنجاح!");
    }
}

function openAddFoodModal() {
    document.getElementById("food-modal")?.classList.add("active");
    document.getElementById("modal-overlay")?.classList.add("active");
}

function closeAddFoodModal() {
    document.getElementById("food-modal")?.classList.remove("active");
    document.getElementById("modal-overlay")?.classList.remove("active");
}

function handleAddNewFood(event) {
    event.preventDefault();
    const name = document.getElementById("food-name").value;
    const category = document.getElementById("food-category").value;
    const price = Number(document.getElementById("food-price").value);
    const desc = document.getElementById("food-desc").value;
    const image = document.getElementById("food-image-url").value || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80";

    foodItemsList.unshift({ id: Date.now(), name, category, price, desc, image });
    localStorage.setItem("smartFoodsList", JSON.stringify(foodItemsList));

    if (currentActiveCategory === "all" || currentActiveCategory === category) {
        filterCategory(currentActiveCategory, document.querySelector(`.category-card[data-category="${currentActiveCategory}"]`));
    }

    closeAddFoodModal();
    document.getElementById("add-food-form")?.reset();
    showToast("تمت إضافة الصنف بنجاح إلى المنيو!");
}

/* ------------------------------------------
   Cart & Checkout Logic
   ------------------------------------------ */
function addToCart(id) {
    const item = foodItemsList.find((f) => f.id === id);
    if (!item) return;

    const existing = cart.find((c) => c.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveAndUpdateCart();
    showToast(`تمت إضافة "${item.name}" إلى السلة!`);
}

function updateQty(id, change) {
    const item = cart.find((i) => i.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter((i) => i.id !== id);
    }

    saveAndUpdateCart();
}

function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    saveAndUpdateCart();
    showToast("تم حذف العنصر من السلة.");
}

function saveAndUpdateCart() {
    localStorage.setItem("smartFoodCart", JSON.stringify(cart));
    updateCartUI();
    renderCartItems();
}

function updateCartUI() {
    const badge = document.getElementById("cart-badge");
    if (badge) {
        badge.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

function openCartModal() {
    renderCartItems();
    document.getElementById("cart-modal")?.classList.add("active");
    document.getElementById("modal-overlay")?.classList.add("active");
}

function closeCartModal() {
    document.getElementById("cart-modal")?.classList.remove("active");
    document.getElementById("modal-overlay")?.classList.remove("active");
}

function renderCartItems() {
    const container = document.getElementById("cart-items-container");
    const totalPriceEl = document.getElementById("cart-total-price");
    if (!container) return;

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart-msg">سلة المشتريات فارغة حالياً.</p>';
        if (totalPriceEl) totalPriceEl.innerText = "0 ج.م";
        return;
    }

    let totalPrice = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.price} ج.م × ${item.quantity}</p>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                <button class="cart-remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        container.appendChild(div);
    });

    if (totalPriceEl) totalPriceEl.innerText = totalPrice + " ج.م";
}

function checkout() {
    if (cart.length === 0) {
        showToast("السلة فارغة، أضف أطعمة أولاً!");
        return;
    }
    showToast("تم إتمام الطلب وتأكيد الكاشن بنجاح! شكراً لك.");
    cart = [];
    saveAndUpdateCart();
    closeCartModal();
}

/* ------------------------------------------
   QR Code & Share Utilities
   ------------------------------------------ */
function openQrModal() {
    const qrImage = document.getElementById("qr-image");
    if (qrImage) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(window.location.href)}`;
    }
    document.getElementById("qr-modal")?.classList.add("active");
    document.getElementById("modal-overlay")?.classList.add("active");
}

function openQrModalFor(name) {
    openQrModal();
}

function closeQrModal() {
    document.getElementById("qr-modal")?.classList.remove("active");
    document.getElementById("modal-overlay")?.classList.remove("active");
}

function closeAllModals() {
    closeAddFoodModal();
    closeCartModal();
    closeQrModal();
}

function copySiteLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast("تم نسخ رابط المنيو بنجاح!");
        closeQrModal();
    }).catch(() => {
        showToast("فشل في نسخ الرابط");
    });
}

/* ------------------------------------------
   Theme Management
   ------------------------------------------ */
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const themeBtnIcon = document.querySelector("#theme-toggle i");

    if (document.body.classList.contains("dark-theme")) {
        if (themeBtnIcon) themeBtnIcon.className = "fa-solid fa-sun";
        localStorage.setItem("theme", "dark");
    } else {
        if (themeBtnIcon) themeBtnIcon.className = "fa-solid fa-moon";
        localStorage.setItem("theme", "light");
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const themeBtnIcon = document.querySelector("#theme-toggle i");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        if (themeBtnIcon) themeBtnIcon.className = "fa-solid fa-sun";
    }
}

/* ------------------------------------------
   Mobile Menu
   ------------------------------------------ */
function initMobileMenu() {
    const toggleBtn = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const overlay = document.getElementById("mobile-nav-overlay");
    if (!toggleBtn || !mobileNav) return;

    toggleBtn.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("open");
        overlay?.classList.toggle("active", isOpen);
        toggleBtn.setAttribute("aria-expanded", isOpen);
        toggleBtn.querySelector("i").className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    });

    overlay?.addEventListener("click", closeMobileMenu);

    mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });
}

function closeMobileMenu() {
    const mobileNav = document.getElementById("mobile-nav");
    const overlay = document.getElementById("mobile-nav-overlay");
    const toggleBtn = document.getElementById("menu-toggle");
    if (!mobileNav) return;

    mobileNav.classList.remove("open");
    overlay?.classList.remove("active");
    if (toggleBtn) {
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.querySelector("i").className = "fa-solid fa-bars";
    }
}

/* ------------------------------------------
   Login Form
   ------------------------------------------ */
function initLoginForm() {
    const form = document.getElementById("login-form");
    if (!form) return;

    const togglePassword = document.getElementById("toggle-password");
    togglePassword?.addEventListener("click", () => {
        const passwordInput = document.getElementById("password");
        const icon = togglePassword.querySelector("i");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.className = "fa-solid fa-eye-slash";
        } else {
            passwordInput.type = "password";
            icon.className = "fa-solid fa-eye";
        }
    });

    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
        document.getElementById("remember-me").checked = true;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("remember-me").checked;
        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");

        emailError.textContent = "";
        passwordError.textContent = "";

        let valid = true;

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError.textContent = "يرجى إدخال بريد إلكتروني صحيح";
            valid = false;
        }

        if (!password || password.length < 6) {
            passwordError.textContent = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
            valid = false;
        }

        if (!valid) return;

        if (email === DEMO_USER.email && password === DEMO_USER.password) {
            if (rememberMe) {
                localStorage.setItem("rememberedEmail", email);
            } else {
                localStorage.removeItem("rememberedEmail");
            }

            localStorage.setItem("smartFoodUser", JSON.stringify({ email, loggedIn: true }));
            showToast("تم تسجيل الدخول بنجاح! جاري التحويل...");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1200);
        } else {
            passwordError.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة";
            showToast("بيانات الدخول غير صحيحة. جرّب: demo@smartfood.com / 123456");
        }
    });
}

/* ------------------------------------------
   Toast Notification System
   ------------------------------------------ */
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}
