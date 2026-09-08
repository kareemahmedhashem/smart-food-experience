/* ==========================================
    SMART FOOD EXPERIENCE - FULLY FIXED & UNIFIED
    ========================================== */
    let foodItemsList = JSON.parse(localStorage.getItem('smartFoodsList')) || foodItems;
    let cart = JSON.parse(localStorage.getItem('smartFoodCart')) || [];
    let currentActiveCategory = "all";
    
    // 3. Initialization on DOM Load
    document.addEventListener("DOMContentLoaded", () => {
        loadTheme();
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
            card.style.position = "relative";
            card.innerHTML = `
                <button class="delete-card-btn" title="حذف الصنف" onclick="confirmDeleteFood(${item.id})" style="position: absolute; top: 10px; right: 10px; z-index: 2;">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <img class="food-img" src="${item.image}" alt="${item.name}" />
                <div class="food-details">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <div class="food-footer">
                        <span class="food-price">${item.price} ج.م</span>
                        <div style="display: flex; gap: 5px;">
                            <button class="btn btn-secondary" style="padding: 5px 8px; font-size: 13px;" onclick="openQrModalFor('${item.name}')" title="QR Code">
                                <i class="fa-solid fa-qrcode"></i>
                            </button>
                            <button class="btn btn-primary" style="padding: 5px 12px; font-size: 13px;" onclick="addToCart(${item.id})">اطلب</button>
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
            const filtered = foodItemsList.filter((item) => item.category === category);
            renderMenu(filtered);
        }
    }
    
    /* ------------------------------------------
        Food Management (Add & Delete)
        ------------------------------------------ */
    function confirmDeleteFood(id) {
        const itemToDelete = foodItemsList.find((f) => f.id === id);
        if (!itemToDelete) return;
    
        const userConfirmed = confirm(`هل تريد مسح هذا الصنف (${itemToDelete.name})؟`);
    
        if (userConfirmed) {
            foodItemsList = foodItemsList.filter((f) => f.id !== id);
            localStorage.setItem('smartFoodsList', JSON.stringify(foodItemsList));
    
            if (currentActiveCategory === "all") {
                renderMenu(foodItemsList);
            } else {
                const filtered = foodItemsList.filter((item) => item.category === currentActiveCategory);
                renderMenu(filtered);
            }
    
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
    
        const newItem = {
            id: Date.now(),
            name,
            category,
            price,
            desc,
            image,
        };
    
        foodItemsList.unshift(newItem);
        localStorage.setItem('smartFoodsList', JSON.stringify(foodItemsList));
    
        if (currentActiveCategory === "all" || currentActiveCategory === category) {
            if (currentActiveCategory === "all") {
                renderMenu(foodItemsList);
            } else {
                const filtered = foodItemsList.filter((item) => item.category === currentActiveCategory);
                renderMenu(filtered);
            }
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
        localStorage.setItem('smartFoodCart', JSON.stringify(cart));
        updateCartUI();
        renderCartItems();
    }
    
    function updateCartUI() {
        const badge = document.getElementById("cart-badge");
        if (badge) {
            const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            badge.innerText = totalCount;
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
        const container = document.getElementById("cart-items-container") || document.getElementById("cart-items");
        const totalPriceEl = document.getElementById("cart-total-price");
        if (!container) return;
    
        container.innerHTML = "";
    
        if (cart.length === 0) {
            container.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding: 20px 0;">سلة المشتريات فارغة حالياً.</p>';
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
                <div style="display: flex; align-items: center; gap: 10px;">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    <button class="close-btn" style="color: #ff5722; font-size: 16px; background:none; border:none; cursor:pointer;" onclick="removeFromCart(${item.id})">
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
        const qrModal = document.getElementById("qr-modal");
        const modalOverlay = document.getElementById("modal-overlay");
        const qrImage = document.getElementById("qr-image");
    
        if (qrImage) {
            const currentUrl = window.location.href;
            qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;
        }
    
        qrModal?.classList.add("active");
        modalOverlay?.classList.add("active");
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
        Theme Management (Dark Mode Fixed)
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