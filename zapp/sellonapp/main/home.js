export default function SellerPromotionLanding() {
    return /*html*/`
    <div class="bg-white min-vh-100">
        <div class="bg-dark text-white py-2 text-center smaller fw-bold">
            🚀 JOIN OVER 50,000 SUCCESSFUL VENDORS ACROSS AFRICA. <a href="#join" class="text-warning text-decoration-none ms-2">GET STARTED →</a>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
            <div class="container">
                <a class="navbar-brand fw-bold text-primary fs-3" href="#">
                    <span style="color: #f68b1e;">Jumia</span> <span class="text-dark">Sellers</span>
                </a>
                <div class="d-flex gap-3">
                    <button class="btn btn-link text-dark text-decoration-none fw-bold d-none d-md-block">Login</button>
                    <a href="#join" class="btn btn-warning fw-bold px-4 rounded-pill shadow-sm">Start Selling</a>
                </div>
            </div>
        </nav>

        <section class="py-5 bg-light" style="background: linear-gradient(135deg, #fff 50%, #fffbf2 50%);">
            <div class="container py-md-5">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6">
                        <span class="badge bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill mb-3 fw-bold">#1 E-COMMERCE PLATFORM</span>
                        <h1 class="display-4 fw-bold mb-4" style="line-height: 1.1;">Grow Your Business <br><span class="text-primary" style="color: #f68b1e !important;">Reach Millions</span> of Customers.</h1>
                        <p class="lead text-muted mb-5">Open your shop on Jumia today. We handle the marketing, the logistics, and the payments while you focus on your products.</p>
                        
                        <div class="d-flex flex-column flex-sm-row gap-3">
                            <button class="btn btn-warning btn-lg fw-bold px-5 py-3 shadow">Register Your Shop</button>
                            <button class="btn btn-outline-dark btn-lg px-5 py-3"><i class="bi bi-play-circle me-2"></i>How it Works</button>
                        </div>

                        <div class="mt-5 d-flex align-items-center gap-4">
                            <div>
                                <h4 class="fw-bold mb-0">12M+</h4>
                                <p class="smaller text-muted mb-0">Monthly Visitors</p>
                            </div>
                            <div class="vr"></div>
                            <div>
                                <h4 class="fw-bold mb-0">20+</h4>
                                <p class="smaller text-muted mb-0">Product Categories</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="position-relative">
                            <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80" class="img-fluid rounded-4 shadow-lg" alt="Happy Seller">
                            <div class="position-absolute bottom-0 start-0 m-4 bg-white p-3 rounded-4 shadow-sm d-flex align-items-center gap-3 border animate-bounce">
                                <div class="bg-success rounded-circle p-2"><i class="bi bi-graph-up-arrow text-white"></i></div>
                                <div>
                                    <p class="smaller text-muted mb-0">Last 30 Days Sales</p>
                                    <h6 class="fw-bold mb-0">+ ₦ 1,240,500</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5">
            <div class="container py-5">
                <div class="text-center mb-5">
                    <h2 class="fw-bold">Why Partner With Us?</h2>
                    <p class="text-muted">We provide the tools you need to succeed in the digital economy.</p>
                </div>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card border-0 p-4 text-center h-100 bg-white">
                            <div class="bg-primary bg-opacity-10 text-primary rounded-circle mx-auto d-flex align-items-center justify-content-center mb-4" style="width: 70px; height: 70px;">
                                <i class="bi bi-megaphone fs-3"></i>
                            </div>
                            <h5 class="fw-bold">Free Marketing</h5>
                            <p class="smaller text-muted">Leverage our massive advertising spend on Google, Facebook, and TV to get eyes on your products for free.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border-0 p-4 text-center h-100 bg-white">
                            <div class="bg-warning bg-opacity-10 text-warning rounded-circle mx-auto d-flex align-items-center justify-content-center mb-4" style="width: 70px; height: 70px;">
                                <i class="bi bi-truck fs-3"></i>
                            </div>
                            <h5 class="fw-bold">Reliable Logistics</h5>
                            <p class="smaller text-muted">Use <strong>Jumia Express</strong> to store and ship your items. We handle the delivery to all 36 states.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border-0 p-4 text-center h-100 bg-white">
                            <div class="bg-success bg-opacity-10 text-success rounded-circle mx-auto d-flex align-items-center justify-content-center mb-4" style="width: 70px; height: 70px;">
                                <i class="bi bi-wallet2 fs-3"></i>
                            </div>
                            <h5 class="fw-bold">Secure Payments</h5>
                            <p class="smaller text-muted">Get paid directly into your bank account every week. No chasing customers for money.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5 bg-dark text-white" id="join">
            <div class="container py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6 text-center">
                        <h2 class="fw-bold mb-4">Ready to start your journey?</h2>
                        <p class="mb-5 opacity-75">Fill in your details and a merchant consultant will reach out to help you set up your shop.</p>
                        
                        <form class="bg-white p-4 p-md-5 rounded-4 text-dark shadow-lg">
                            <div class="mb-3 text-start">
                                <label class="smaller fw-bold mb-1">BUSINESS NAME</label>
                                <input type="text" class="form-control py-3" placeholder="e.g. Ade Electronic Store">
                            </div>
                            <div class="mb-3 text-start">
                                <label class="smaller fw-bold mb-1">PHONE NUMBER</label>
                                <input type="tel" class="form-control py-3" placeholder="080 000 0000">
                            </div>
                            <div class="mb-4 text-start">
                                <label class="smaller fw-bold mb-1">PRIMARY CATEGORY</label>
                                <select class="form-select py-3">
                                    <option>Electronics</option>
                                    <option>Fashion</option>
                                    <option>Beauty & Health</option>
                                    <option>Home & Office</option>
                                </select>
                            </div>
                            <button class="btn btn-warning btn-lg w-100 fw-bold py-3">JOIN THE MARKETPLACE</button>
                            <p class="smaller text-muted mt-3 mb-0">By clicking, you agree to our Terms of Service.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <style>
            .smaller { font-size: 12px; }
            .btn-warning { background-color: #f68b1e; border: none; color: #fff; }
            .btn-warning:hover { background-color: #e68a00; color: #fff; }
            .text-primary { color: #f68b1e !important; }
            .animate-bounce {
                animation: bounce 3s infinite;
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            .form-control:focus, .form-select:focus {
                border-color: #f68b1e;
                box-shadow: 0 0 0 0.25rem rgba(246, 139, 30, 0.1);
            }
        </style>
    </div>
    `;
}


export function ElectronicsLanding() {
    return /*html*/`
    <div class="bg-light min-vh-100">
        <div class="bg-white border-bottom py-2 d-none d-md-block">
            <div class="container d-flex justify-content-center gap-4">
                <a href="#" class="text-dark text-decoration-none smaller fw-bold px-2 py-1">Smartphones</a>
                <a href="#" class="text-dark text-decoration-none smaller fw-bold px-2 py-1">Laptops</a>
                <a href="#" class="text-dark text-decoration-none smaller fw-bold px-2 py-1">Television</a>
                <a href="#" class="text-dark text-decoration-none smaller fw-bold px-2 py-1">Audio & Hi-Fi</a>
                <a href="#" class="text-dark text-decoration-none smaller fw-bold px-2 py-1 text-primary">Official Stores</a>
            </div>
        </div>

        <section class="container mt-4">
            <div class="row g-3">
                <div class="col-lg-8">
                    <div class="rounded-4 overflow-hidden shadow-sm position-relative" style="height: 400px;">
                        <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80" class="w-100 h-100 object-fit-cover" alt="TV Promotion">
                        <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-5" style="background: linear-gradient(to right, rgba(0,0,0,0.8), transparent);">
                            <div class="text-white" style="max-width: 400px;">
                                <span class="badge bg-warning text-dark mb-2 fw-bold">NEW ARRIVAL</span>
                                <h1 class="display-5 fw-bold mb-3">Immersive Visuals. <br>Smart Living.</h1>
                                <p class="mb-4 opacity-75">Upgrade to the latest 4K OLED Displays. Up to 30% OFF this week only.</p>
                                <button class="btn btn-primary btn-lg fw-bold px-4">Shop Televisions</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="d-flex flex-column gap-3 h-100">
                        <div class="bg-dark rounded-4 p-4 text-white flex-grow-1 d-flex flex-column justify-content-center border-start border-warning border-5">
                            <h5 class="fw-bold text-warning">Flash Sale</h5>
                            <p class="smaller opacity-75">iPhone 15 Pro Max</p>
                            <h4 class="fw-bold mb-3">₦ 1,450,000</h4>
                            <div class="progress mb-2" style="height: 6px;">
                                <div class="progress-bar bg-warning" style="width: 65%"></div>
                            </div>
                            <p class="smaller mb-0">12 items left</p>
                        </div>
                        <div class="bg-primary rounded-4 p-4 text-white flex-grow-1 d-flex flex-column justify-content-center" style="background-color: #003366 !important;">
                            <h5 class="fw-bold">Computing Deals</h5>
                            <p class="smaller opacity-75">Work from home essentials</p>
                            <a href="#" class="text-white fw-bold smaller">Browse Laptops <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mt-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h5 class="fw-bold mb-0">Official Brand Stores</h5>
                <a href="#" class="text-primary text-decoration-none fw-bold smaller">See All</a>
            </div>
            <div class="row g-3">
                <div class="col-3 col-md-2"><div class="card border-0 shadow-sm text-center py-3"><img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" height="20" class="mx-auto"></div></div>
                <div class="col-3 col-md-2"><div class="card border-0 shadow-sm text-center py-3"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" height="20" class="mx-auto"></div></div>
                <div class="col-3 col-md-2"><div class="card border-0 shadow-sm text-center py-3"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" height="20" class="mx-auto"></div></div>
                <div class="col-3 col-md-2"><div class="card border-0 shadow-sm text-center py-3"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/LG_logo_%282015%29.svg" height="20" class="mx-auto"></div></div>
                <div class="col-3 col-md-2 d-none d-md-block"><div class="card border-0 shadow-sm text-center py-3"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" height="20" class="mx-auto"></div></div>
                <div class="col-3 col-md-2 d-none d-md-block"><div class="card border-0 shadow-sm text-center py-3"><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Sony_logo.svg" height="15" class="mx-auto"></div></div>
            </div>
        </section>

        <section class="container mt-5 pb-5">
            <h5 class="fw-bold mb-4">Featured Tech Deals</h5>
            <div class="row g-3">
                <div class="col-6 col-lg-3">
                    <div class="card border-0 shadow-sm rounded-4 h-100 product-card overflow-hidden">
                        <div class="position-relative">
                            <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=300&q=80" class="card-img-top p-3" alt="Headphones">
                            <span class="position-absolute top-0 start-0 m-3 badge bg-danger">-15%</span>
                            <div class="express-badge position-absolute bottom-0 start-0 m-2">
                                <span class="badge bg-warning text-dark py-1 px-2"><i class="bi bi-lightning-fill"></i> Express</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="smaller text-muted mb-1 text-uppercase">Sony</p>
                            <h6 class="fw-bold mb-1 text-truncate">WH-1000XM4 Wireless Noise Cancelling</h6>
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <h5 class="fw-bold text-dark mb-0">₦ 245,000</h5>
                                <span class="smaller text-muted text-decoration-line-through">₦ 290,000</span>
                            </div>
                            <div class="d-flex align-items-center gap-1 mb-3">
                                <i class="bi bi-star-fill text-warning smaller"></i>
                                <span class="smaller fw-bold">4.8</span>
                                <span class="smaller text-muted">(120)</span>
                            </div>
                            <button class="btn btn-outline-primary w-100 fw-bold btn-sm py-2">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .product-card { transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
            .product-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
            .text-primary { color: #f68b1e !important; }
            .btn-outline-primary { border-color: #f68b1e; color: #f68b1e; }
            .btn-outline-primary:hover { background-color: #f68b1e; border-color: #f68b1e; color: #fff; }
            .btn-primary { background-color: #f68b1e; border: none; }
            .btn-primary:hover { background-color: #e68a00; }
        </style>
    </div>
    `;
}


export function BeautyCosmeticsLanding() {
    return /*html*/`
    <div class="bg-white min-vh-100 pb-5">
        <div class="py-2 text-center text-white smaller fw-bold" style="background: linear-gradient(to right, #d63384, #fd7e14);">
            ✨ RAMADAN GLOW UP: UP TO 40% OFF TOP SKINCARE BRANDS ✨
        </div>

        <section class="container mt-4 mb-5">
            <div class="d-flex justify-content-between overflow-auto gap-4 pb-2 no-scrollbar">
                <div class="text-center" style="min-width: 80px;">
                    <div class="rounded-circle border p-1 mb-2 mx-auto" style="width: 70px; height: 70px;">
                        <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=100&q=80" class="rounded-circle w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">Serums</p>
                </div>
                <div class="text-center" style="min-width: 80px;">
                    <div class="rounded-circle border p-1 mb-2 mx-auto" style="width: 70px; height: 70px;">
                        <img src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&w=100&q=80" class="rounded-circle w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">Makeup</p>
                </div>
                <div class="text-center" style="min-width: 80px;">
                    <div class="rounded-circle border p-1 mb-2 mx-auto" style="width: 70px; height: 70px;">
                        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=100&q=80" class="rounded-circle w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">Hair Care</p>
                </div>
                <div class="text-center" style="min-width: 80px;">
                    <div class="rounded-circle border p-1 mb-2 mx-auto" style="width: 70px; height: 70px;">
                        <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=100&q=80" class="rounded-circle w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">Fragrance</p>
                </div>
                <div class="text-center" style="min-width: 80px;">
                    <div class="rounded-circle border p-1 mb-2 mx-auto" style="width: 70px; height: 70px;">
                        <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=100&q=80" class="rounded-circle w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">Body</p>
                </div>
            </div>
        </section>

        <section class="container mb-5">
            <div class="rounded-4 overflow-hidden position-relative" style="height: 450px;">
                <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80" class="w-100 h-100 object-fit-cover">
                <div class="position-absolute top-0 end-0 h-100 d-flex align-items-center p-5 text-end" style="background: linear-gradient(to left, rgba(255,255,255,0.9), transparent); width: 60%;">
                    <div class="ms-auto" style="max-width: 400px;">
                        <h6 class="text-uppercase ls-2 text-muted fw-bold smaller mb-2">Summer Essentials</h6>
                        <h2 class="display-5 fw-bold mb-3" style="color: #2d3436;">Your Glow, <br>Simplified.</h2>
                        <p class="text-muted mb-4">Discover dermatologist-approved skincare for every skin tone and type.</p>
                        <button class="btn btn-dark btn-lg px-5 rounded-pill shadow-sm">Shop The Collection</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mb-5 py-4 bg-light rounded-4">
            <h5 class="fw-bold px-3 mb-4 text-center">Shop by Concern</h5>
            <div class="row g-3 px-2">
                <div class="col-6 col-md-3">
                    <div class="card border-0 text-center p-3 rounded-4 hover-card shadow-sm">
                        <p class="mb-0 fw-bold smaller">Acne Control</p>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="card border-0 text-center p-3 rounded-4 hover-card shadow-sm">
                        <p class="mb-0 fw-bold smaller">Anti-Aging</p>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="card border-0 text-center p-3 rounded-4 hover-card shadow-sm">
                        <p class="mb-0 fw-bold smaller">Hydration</p>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="card border-0 text-center p-3 rounded-4 hover-card shadow-sm">
                        <p class="mb-0 fw-bold smaller">Brightening</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h5 class="fw-bold mb-0">Best Sellers</h5>
                <a href="#" class="text-decoration-none text-pink fw-bold smaller">View All</a>
            </div>
            <div class="row g-3">
                <div class="col-6 col-md-3">
                    <div class="card border-0 product-card h-100">
                        <div class="position-relative bg-light rounded-4 overflow-hidden mb-2">
                            <img src="https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&w=300&q=80" class="w-100 p-4">
                            <div class="position-absolute top-0 end-0 m-2">
                                <button class="btn btn-white rounded-circle p-1 shadow-sm"><i class="bi bi-heart"></i></button>
                            </div>
                            <div class="position-absolute bottom-0 start-0 m-2">
                                <span class="badge bg-info text-white smaller py-1 px-2">Authentic</span>
                            </div>
                        </div>
                        <div class="px-1">
                            <p class="smaller text-muted mb-0">CERAVE</p>
                            <h6 class="fw-bold mb-1 smaller">Moisturizing Cream with Ceramides</h6>
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <h6 class="fw-bold mb-0">₦ 18,500</h6>
                                <span class="smaller text-muted text-decoration-line-through">₦ 22,000</span>
                            </div>
                            <div class="d-flex align-items-center gap-1 mb-3">
                                <i class="bi bi-star-fill text-warning" style="font-size: 10px;"></i>
                                <span class="smaller fw-bold">4.9</span>
                                <span class="smaller text-muted">(1.2k)</span>
                            </div>
                            <button class="btn btn-outline-dark btn-sm w-100 rounded-pill fw-bold py-2">Add to Bag</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .ls-2 { letter-spacing: 2px; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .hover-card:hover { background-color: #d63384; color: white !important; cursor: pointer; transition: 0.3s; }
            .text-pink { color: #d63384; }
            .product-card { transition: 0.3s; border-radius: 15px !important; }
            .product-card:hover { transform: translateY(-5px); }
            .btn-white { background: white; border: none; }
        </style>
    </div>
    `;
}


export function FashionLanding() {
    return /*html*/`
    <div class="bg-white min-vh-100 pb-5">
        <div class="bg-black text-white py-2 text-center smaller fw-bold ls-2">
            END OF SEASON SALE: UP TO 70% OFF SITEWIDE ⚡️ <a href="#" class="text-warning ms-2">SHOP NOW</a>
        </div>

        <section class="container mt-4 mb-5">
            <div class="row g-2">
                <div class="col-md-3 col-6">
                    <div class="position-relative rounded-4 overflow-hidden shadow-sm ratio ratio-1x1 category-card">
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80" class="object-fit-cover">
                        <div class="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark">
                            <p class="text-white fw-bold mb-0 smaller">WOMEN'S DRESSES</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="position-relative rounded-4 overflow-hidden shadow-sm ratio ratio-1x1 category-card">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" class="object-fit-cover">
                        <div class="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark">
                            <p class="text-white fw-bold mb-0 smaller">SNEAKERS</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-6 d-none d-md-block">
                    <div class="position-relative rounded-4 overflow-hidden shadow-sm ratio ratio-1x1 category-card">
                        <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=400&q=80" class="object-fit-cover">
                        <div class="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark">
                            <p class="text-white fw-bold mb-0 smaller">MEN'S SUITS</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-6 d-none d-md-block">
                    <div class="position-relative rounded-4 overflow-hidden shadow-sm ratio ratio-1x1 category-card">
                        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80" class="object-fit-cover">
                        <div class="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark">
                            <p class="text-white fw-bold mb-0 smaller">ACCESSORIES</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mb-5">
            <div class="row g-0 rounded-4 overflow-hidden bg-light align-items-center">
                <div class="col-md-6 p-5">
                    <h6 class="text-muted fw-bold ls-2 smaller mb-3 text-uppercase">Spring / Summer 2026</h6>
                    <h2 class="display-4 fw-bold mb-4" style="letter-spacing: -2px;">The New <br>Streetwear <br>Collection</h2>
                    <p class="text-muted mb-5 pe-lg-5">Upgrade your wardrobe with our latest arrival of oversized hoodies, denim, and retro kicks.</p>
                    <div class="d-flex gap-3">
                        <button class="btn btn-dark btn-lg px-4 rounded-0 fw-bold">Shop Men</button>
                        <button class="btn btn-outline-dark btn-lg px-4 rounded-0 fw-bold">Shop Women</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover" style="min-height: 500px;">
                </div>
            </div>
        </section>

        <section class="container mb-5">
            <div class="d-flex justify-content-center gap-5 opacity-50 grayscale overflow-auto py-3 no-scrollbar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" height="30">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" height="20">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" height="25">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Zara_Logo.svg" height="25">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Levi%27s_logo.svg" height="25">
            </div>
        </section>

        <section class="container">
            <div class="d-flex justify-content-between align-items-end mb-4">
                <h4 class="fw-bold mb-0">New Arrivals</h4>
                <a href="#" class="text-dark fw-bold smaller text-decoration-underline">VIEW ALL</a>
            </div>
            <div class="row g-3">
                <div class="col-6 col-lg-3">
                    <div class="card border-0 product-card h-100">
                        <div class="position-relative bg-light overflow-hidden mb-2">
                            <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=400&q=80" class="w-100 product-img">
                            <div class="position-absolute top-0 end-0 m-2">
                                <button class="btn btn-white rounded-circle p-2 shadow-sm border-0"><i class="bi bi-heart"></i></button>
                            </div>
                            <div class="position-absolute bottom-0 start-0 w-100 p-2 quick-add opacity-0">
                                <button class="btn btn-dark w-100 rounded-0 smaller fw-bold py-2 shadow">+ QUICK ADD</button>
                            </div>
                        </div>
                        <div class="text-start">
                            <div class="d-flex justify-content-between align-items-start">
                                <p class="smaller text-muted mb-0">VANS</p>
                                <span class="badge bg-warning text-dark py-1 px-2 smaller"><i class="bi bi-lightning-fill"></i> Express</span>
                            </div>
                            <h6 class="fw-bold mb-1 smaller">Old Skool Classic Sneakers</h6>
                            <h6 class="fw-bold mb-0">₦ 45,000</h6>
                        </div>
                    </div>
                </div>
                </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .ls-2 { letter-spacing: 2px; }
            .bg-gradient-dark { background: linear-gradient(transparent, rgba(0,0,0,0.7)); }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .grayscale { filter: grayscale(100%); }
            .product-card:hover .quick-add { opacity: 1 !important; transition: 0.3s; }
            .product-card:hover .product-img { transform: scale(1.05); transition: 0.5s; }
            .category-card:hover { transform: scale(0.98); transition: 0.3s; cursor: pointer; }
            .product-img { transition: 0.5s; }
            .btn-white { background-color: white; }
        </style>
    </div>
    `;
}


export  function PhonesTabletsLanding() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <div class="bg-primary text-white py-2 text-center smaller fw-bold" style="background-color: #003366 !important;">
            📱 TRADE-IN DEAL: Get up to ₦200,000 OFF when you swap your old iPhone. <a href="#" class="text-warning ms-2">LEARN MORE</a>
        </div>

        <section class="bg-white border-bottom shadow-sm mb-4">
            <div class="container d-flex justify-content-center gap-2 gap-md-5 py-3 overflow-auto no-scrollbar">
                <a href="#" class="text-center text-decoration-none text-dark" style="min-width: 80px;">
                    <div class="bg-light rounded-3 p-2 mb-1"><i class="bi bi-phone fs-4"></i></div>
                    <p class="smaller fw-bold mb-0">Androids</p>
                </a>
                <a href="#" class="text-center text-decoration-none text-dark" style="min-width: 80px;">
                    <div class="bg-light rounded-3 p-2 mb-1"><i class="bi bi-apple fs-4"></i></div>
                    <p class="smaller fw-bold mb-0">iPhones</p>
                </a>
                <a href="#" class="text-center text-decoration-none text-dark" style="min-width: 80px;">
                    <div class="bg-light rounded-3 p-2 mb-1"><i class="bi bi-tablet fs-4"></i></div>
                    <p class="smaller fw-bold mb-0">Tablets</p>
                </a>
                <a href="#" class="text-center text-decoration-none text-dark" style="min-width: 80px;">
                    <div class="bg-light rounded-3 p-2 mb-1"><i class="bi bi-watch fs-4"></i></div>
                    <p class="smaller fw-bold mb-0">Wearables</p>
                </a>
            </div>
        </section>

        <section class="container mb-4">
            <div class="row g-3">
                <div class="col-lg-9">
                    <div class="card border-0 rounded-4 overflow-hidden bg-white shadow-sm h-100">
                        <div class="row g-0 h-100">
                            <div class="col-md-7 p-5 d-flex flex-column justify-content-center">
                                <span class="badge bg-danger rounded-pill mb-3" style="width: fit-content;">EXCLUSIVE LAUNCH</span>
                                <h1 class="fw-bold mb-3 display-6">Samsung Galaxy S24 Ultra</h1>
                                <p class="text-muted mb-4">Experience the power of Galaxy AI. 200MP Camera, All-day battery, and the brightest screen ever.</p>
                                <div class="d-flex align-items-center gap-3">
                                    <h3 class="fw-bold mb-0 text-primary">₦ 1,850,000</h3>
                                    <button class="btn btn-warning btn-lg fw-bold px-4 rounded-3 shadow">Buy Now</button>
                                </div>
                            </div>
                            <div class="col-md-5 bg-light d-flex align-items-center justify-content-center">
                                <img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80" class="img-fluid p-4" alt="Galaxy S24">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card border-0 rounded-4 bg-dark text-white p-4 h-100 text-center shadow-sm">
                        <p class="smaller text-warning fw-bold mb-1">FLASH SALE ENDS IN:</p>
                        <h4 class="fw-mono mb-4">08 : 22 : 45</h4>
                        <img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=300&q=80" class="img-fluid rounded mb-3" style="max-height: 150px;">
                        <h6 class="fw-bold mb-1">Redmi Note 13 Pro</h6>
                        <h5 class="text-warning fw-bold mb-3">₦ 320,000</h5>
                        <div class="progress mb-2 bg-secondary" style="height: 8px;">
                            <div class="progress-bar bg-warning" style="width: 85%"></div>
                        </div>
                        <p class="smaller mb-0 opacity-75">85% Sold Out</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container">
            <h5 class="fw-bold mb-4">Top Deals in Phones</h5>
            <div class="row g-3">
                <div class="col-6 col-lg-3">
                    <div class="card border-0 shadow-sm rounded-4 h-100 product-card overflow-hidden bg-white">
                        <div class="position-relative p-3">
                            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80" class="w-100 rounded">
                            <span class="position-absolute top-0 start-0 m-3 badge bg-success bg-opacity-75">FREE DELIVERY</span>
                        </div>
                        <div class="card-body pt-0">
                            <div class="d-flex gap-1 mb-2">
                                <span class="badge bg-light text-dark smaller border">5G</span>
                                <span class="badge bg-light text-dark smaller border">256GB</span>
                                <span class="badge bg-light text-dark smaller border">8GB RAM</span>
                            </div>
                            <h6 class="fw-bold mb-1 text-truncate">iPhone 15 Pro, 128GB - Blue Titanium</h6>
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <h6 class="fw-bold mb-0">₦ 1,250,000</h6>
                                <span class="smaller text-muted text-decoration-line-through">₦ 1.4M</span>
                            </div>
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <span class="badge bg-warning text-dark px-2 py-1 smaller"><i class="bi bi-lightning-fill"></i> Express</span>
                                <span class="smaller text-muted"><i class="bi bi-shield-check me-1"></i>1yr Warranty</span>
                            </div>
                            <button class="btn btn-outline-warning w-100 fw-bold btn-sm py-2">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .fw-mono { font-family: 'Courier New', Courier, monospace; }
            .product-card { transition: all 0.3s cubic-bezier(.25,.8,.25,1); }
            .product-card:hover { transform: translateY(-5px); box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1) !important; }
            .btn-warning { background-color: #f68b1e; border-color: #f68b1e; color: white; }
            .btn-warning:hover { background-color: #e68a00; border-color: #e68a00; color: white; }
            .btn-outline-warning { color: #f68b1e; border-color: #f68b1e; }
            .btn-outline-warning:hover { background-color: #f68b1e; color: white; }
            .text-primary { color: #f68b1e !important; }
        </style>
    </div>
    `;
}

export function SoftwareGamingLanding() {
    return /*html*/`
    <div class="bg-dark min-vh-100 text-white pb-5">
        <nav class="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary py-3">
            <div class="container">
                <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
                    <i class="bi bi-controller me-2 text-warning"></i> JUMIA GAMING
                </a>
                <div class="d-flex gap-3 overflow-auto no-scrollbar">
                    <a href="#" class="btn btn-outline-light btn-sm rounded-pill px-3 fw-bold">PS5</a>
                    <a href="#" class="btn btn-outline-light btn-sm rounded-pill px-3 fw-bold">Xbox</a>
                    <a href="#" class="btn btn-outline-light btn-sm rounded-pill px-3 fw-bold">PC Software</a>
                    <a href="#" class="btn btn-outline-light btn-sm rounded-pill px-3 fw-bold">Gift Cards</a>
                </div>
            </div>
        </nav>

        <section class="container mt-4">
            <div class="row g-3">
                <div class="col-lg-8">
                    <div class="rounded-4 overflow-hidden position-relative shadow-lg" style="height: 420px; background: url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80') center/cover;">
                        <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-5" style="background: linear-gradient(to right, #000, transparent);">
                            <div style="max-width: 400px;">
                                <span class="badge bg-primary mb-2">INSTANT EMAIL DELIVERY</span>
                                <h1 class="display-5 fw-bold mb-3">Pre-Order: <br>EA SPORTS FC 27</h1>
                                <p class="opacity-75 mb-4">Get exclusive Ultimate Team packs and 7-days early access. Play on Day 1.</p>
                                <div class="d-flex gap-3">
                                    <button class="btn btn-warning btn-lg fw-bold px-4">Buy Digital Code</button>
                                    <button class="btn btn-outline-light btn-lg px-4"><i class="bi bi-play-fill"></i> Trailer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card border-0 rounded-4 bg-secondary bg-opacity-25 h-100 p-4 d-flex flex-column justify-content-center border-start border-primary border-4">
                        <h5 class="fw-bold text-primary mb-3">Essential Software</h5>
                        <div class="d-flex align-items-center gap-3 mb-4 p-2 rounded hover-bg">
                            <i class="bi bi-shield-check fs-2 text-success"></i>
                            <div>
                                <p class="mb-0 fw-bold">Kaspersky Total Security</p>
                                <p class="smaller opacity-50 mb-0">1 Device | 1 Year</p>
                                <h6 class="text-warning mb-0">₦ 12,500</h6>
                            </div>
                        </div>
                        <div class="d-flex align-items-center gap-3 p-2 rounded hover-bg">
                            <i class="bi bi-microsoft fs-2 text-info"></i>
                            <div>
                                <p class="mb-0 fw-bold">Office 365 Personal</p>
                                <p class="smaller opacity-50 mb-0">Monthly Subscription</p>
                                <h6 class="text-warning mb-0">₦ 4,800</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mt-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold mb-0">Trending Now</h4>
                <div class="btn-group">
                    <button class="btn btn-sm btn-outline-secondary active">Digital</button>
                    <button class="btn btn-sm btn-outline-secondary">Physical Disc</button>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-6 col-lg-3">
                    <div class="card bg-black border-secondary border rounded-4 h-100 game-card overflow-hidden">
                        <div class="position-relative">
                            <img src="https://images.unsplash.com/photo-1605898835373-02344a77aa93?auto=format&fit=crop&w=400&q=80" class="card-img-top p-2 rounded-4">
                            <span class="position-absolute top-0 end-0 m-3 badge bg-primary">PS5</span>
                        </div>
                        <div class="card-body">
                            <h6 class="fw-bold mb-1 text-truncate">Spider-Man 2: Collector's Edition</h6>
                            <p class="smaller text-muted mb-2">Region: UAE/English</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="fw-bold text-warning mb-0">₦ 85,000</h5>
                                <button class="btn btn-primary btn-sm rounded-circle"><i class="bi bi-cart-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="card bg-black border-secondary border rounded-4 h-100 game-card overflow-hidden">
                        <div class="position-relative">
                            <div class="p-4 text-center bg-gradient-blue" style="height: 180px;">
                                <i class="bi bi-ps-plus display-1 opacity-25"></i>
                                <h4 class="fw-bold mt-2">PSN $50</h4>
                            </div>
                            <span class="position-absolute top-0 start-0 m-3 badge bg-info text-dark">USA REGION</span>
                        </div>
                        <div class="card-body">
                            <h6 class="fw-bold mb-1">PlayStation Network Card</h6>
                            <p class="smaller text-success mb-2"><i class="bi bi-lightning-charge-fill"></i> Instant Delivery</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="fw-bold text-warning mb-0">₦ 78,500</h5>
                                <button class="btn btn-primary btn-sm rounded-circle"><i class="bi bi-send"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .bg-gradient-blue { background: linear-gradient(135deg, #003087, #0070d1); }
            .game-card { transition: all 0.3s; }
            .game-card:hover { border-color: #f68b1e !important; transform: scale(1.02); box-shadow: 0 0 20px rgba(246, 139, 30, 0.2); }
            .hover-bg:hover { background-color: rgba(255,255,255,0.05); cursor: pointer; }
            .text-warning { color: #f68b1e !important; }
            .btn-primary { background-color: #f68b1e; border: none; }
        </style>
    </div>
    `;
}


export  function SoftwareGamingLight() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <div class="bg-white border-bottom py-2">
            <div class="container d-flex justify-content-between align-items-center">
                <span class="smaller fw-bold text-muted text-uppercase ls-1">
                    <i class="bi bi-shield-check text-success me-1"></i> 100% Genuine Digital Licenses
                </span>
                <span class="smaller fw-bold text-muted text-uppercase ls-1 d-none d-md-block">
                    <i class="bi bi-lightning-charge-fill text-warning me-1"></i> Instant Email Delivery
                </span>
            </div>
        </div>

        <section class="container mt-4">
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="card border-0 rounded-4 overflow-hidden shadow-sm h-100 position-relative" style="min-height: 400px;">
                        <img src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=1200&q=80" class="w-100 h-100 object-fit-cover">
                        <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-5" style="background: linear-gradient(to right, white, rgba(255,255,255,0.7), transparent);">
                            <div style="max-width: 380px;">
                                <h6 class="text-primary fw-bold text-uppercase ls-2 smaller mb-2">Available Now</h6>
                                <h1 class="display-5 fw-bold text-dark mb-3">Next-Gen <br>Gaming Gear.</h1>
                                <p class="text-muted mb-4">Upgrade your setup with the latest consoles, controllers, and digital passes. Fast delivery guaranteed.</p>
                                <div class="d-flex gap-2">
                                    <button class="btn btn-warning btn-lg fw-bold px-4 shadow-sm text-white">Shop Consoles</button>
                                    <button class="btn btn-outline-dark btn-lg fw-bold px-4">Digital Store</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 rounded-4 shadow-sm p-4 h-100 bg-white">
                        <h5 class="fw-bold mb-4">Security & Productivity</h5>
                        <div class="list-group list-group-flush">
                            <div class="list-group-item px-0 py-3 border-0">
                                <div class="d-flex align-items-center gap-3">
                                    <div class="bg-success bg-opacity-10 p-2 rounded-3 text-success">
                                        <i class="bi bi-shield-lock-fill fs-4"></i>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="fw-bold mb-0 smaller">Norton 360 Deluxe</h6>
                                        <p class="smaller text-muted mb-0">3 Devices | 1 Year</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="fw-bold mb-0 smaller">₦ 15,200</p>
                                        <span class="badge bg-light text-success smaller border">Save 20%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-group-item px-0 py-3 border-0">
                                <div class="d-flex align-items-center gap-3">
                                    <div class="bg-primary bg-opacity-10 p-2 rounded-3 text-primary">
                                        <i class="bi bi-microsoft fs-4"></i>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="fw-bold mb-0 smaller">Windows 11 Pro</h6>
                                        <p class="smaller text-muted mb-0">Digital Key (Retail)</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="fw-bold mb-0 smaller">₦ 42,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-light w-100 mt-auto fw-bold text-primary smaller py-2">View All Software <i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mt-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h5 class="fw-bold mb-0">Bestselling Gift Cards & Codes</h5>
                <div class="d-flex gap-2">
                    <span class="badge rounded-pill bg-white text-dark border px-3 py-2 cursor-pointer hover-shadow">PSN</span>
                    <span class="badge rounded-pill bg-white text-dark border px-3 py-2 cursor-pointer hover-shadow">Steam</span>
                    <span class="badge rounded-pill bg-white text-dark border px-3 py-2 cursor-pointer hover-shadow">Roblox</span>
                </div>
            </div>
            
            <div class="row g-3">
                <div class="col-6 col-md-3">
                    <div class="card border-0 shadow-sm rounded-4 h-100 product-card bg-white p-3">
                        <div class="bg-light rounded-4 p-4 text-center position-relative mb-3 overflow-hidden" style="height: 180px;">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Roblox_logo_2017.svg" class="w-50 opacity-25 mt-3">
                            <div class="position-absolute top-50 start-50 translate-middle w-100">
                                <h4 class="fw-bold mb-0">$25 Card</h4>
                            </div>
                            <span class="position-absolute top-0 end-0 m-2 badge bg-dark smaller fw-normal">GLOBAL</span>
                        </div>
                        <div class="px-1">
                            <div class="d-flex align-items-center gap-1 mb-1">
                                <i class="bi bi-lightning-charge-fill text-warning smaller"></i>
                                <span class="smaller text-muted fw-bold">Instant Email</span>
                            </div>
                            <h6 class="fw-bold mb-1 smaller">Roblox Gift Card [Digital Code]</h6>
                            <h6 class="text-primary fw-bold mb-3">₦ 38,000</h6>
                            <button class="btn btn-outline-primary w-100 rounded-3 fw-bold py-2 smaller">BUY CODE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .ls-1 { letter-spacing: 1px; }
            .ls-2 { letter-spacing: 2px; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .text-primary { color: #f68b1e !important; }
            .btn-outline-primary { border-color: #f68b1e; color: #f68b1e; }
            .btn-outline-primary:hover { background-color: #f68b1e; color: white; }
            .btn-warning { background-color: #f68b1e; border: none; }
            .product-card { transition: transform 0.2s; }
            .product-card:hover { transform: translateY(-5px); }
            .cursor-pointer { cursor: pointer; }
            .hover-shadow:hover { box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-color: #f68b1e !important; }
        </style>
    </div>
    `;
}

export  function MechanicServiceLanding() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <div class="bg-danger text-white py-2 shadow-sm">
            <div class="container d-flex justify-content-between align-items-center smaller fw-bold">
                <span><i class="bi bi-exclamation-triangle-fill me-2"></i> STUCK ON THE ROAD?</span>
                <a href="tel:0800-RESCUE" class="text-white text-decoration-none">CALL EMERGENCY TOWING: 0800-AUTO-FIX</a>
            </div>
        </div>

        <section class="bg-white border-bottom py-5">
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold mb-3">Expert Auto Repair, <br><span class="text-primary" style="color: #f68b1e !important;">At Your Doorstep.</span></h1>
                        <p class="lead text-muted mb-4">From oil changes to engine diagnostics, book a certified mechanic to come to your home or office.</p>
                        
                        <div class="card border-0 shadow-lg rounded-4 p-4">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">SELECT SERVICE</label>
                                    <select class="form-select py-2 border-light bg-light">
                                        <option>Full Engine Service</option>
                                        <option>Brake Inspection</option>
                                        <option>Battery Replacement</option>
                                        <option>AC Refill & Repair</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">CAR MAKE/MODEL</label>
                                    <input type="text" class="form-control py-2 border-light bg-light" placeholder="e.g. Toyota Camry 2018">
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-warning w-100 fw-bold py-3 text-white shadow-sm">CHECK PRICES & BOOK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block">
                        <img src="https://images.unsplash.com/photo-1486006396193-471c1f583237?auto=format&fit=crop&w=800&q=80" class="img-fluid rounded-4 shadow-sm">
                    </div>
                </div>
            </div>
        </section>

        <section class="container mt-5">
            <h5 class="fw-bold mb-4">Popular Maintenance Services</h5>
            <div class="row g-3">
                <div class="col-md-3 col-6">
                    <div class="card border-0 shadow-sm rounded-4 p-3 text-center h-100 hover-lift">
                        <div class="bg-primary bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 60px; height: 60px; color: #003366;">
                            <i class="bi bi-droplet-fill fs-3"></i>
                        </div>
                        <h6 class="fw-bold mb-1">Oil Change</h6>
                        <p class="smaller text-muted mb-0">From ₦ 15,000</p>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="card border-0 shadow-sm rounded-4 p-3 text-center h-100 hover-lift">
                        <div class="bg-success bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 60px; height: 60px; color: #198754;">
                            <i class="bi bi-battery-charging fs-3"></i>
                        </div>
                        <h6 class="fw-bold mb-1">Battery Check</h6>
                        <p class="smaller text-muted mb-0">Free with Service</p>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="card border-0 shadow-sm rounded-4 p-3 text-center h-100 hover-lift">
                        <div class="bg-info bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 60px; height: 60px; color: #0dcaf0;">
                            <i class="bi bi-tools fs-3"></i>
                        </div>
                        <h6 class="fw-bold mb-1">Diagnostics</h6>
                        <p class="smaller text-muted mb-0">Full Computer Scan</p>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="card border-0 shadow-sm rounded-4 p-3 text-center h-100 hover-lift">
                        <div class="bg-warning bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 60px; height: 60px; color: #f68b1e;">
                            <i class="bi bi-shield-check fs-3"></i>
                        </div>
                        <h6 class="fw-bold mb-1">Pre-Purchase</h6>
                        <p class="smaller text-muted mb-0">Inspection Report</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mt-5 py-5 bg-white rounded-4 shadow-sm">
            <div class="row text-center g-4">
                <div class="col-md-4">
                    <h3 class="fw-bold text-primary">1</h3>
                    <h6 class="fw-bold">Book Online</h6>
                    <p class="smaller text-muted px-4">Select your service and get a fair, upfront price quote instantly.</p>
                </div>
                <div class="col-md-4">
                    <h3 class="fw-bold text-primary">2</h3>
                    <h6 class="fw-bold">We Come to You</h6>
                    <p class="smaller text-muted px-4">Our certified mechanic brings the tools and parts to your location.</p>
                </div>
                <div class="col-md-4">
                    <h3 class="fw-bold text-primary">3</h3>
                    <h6 class="fw-bold">Track & Pay</h6>
                    <p class="smaller text-muted px-4">Track your repair progress via the app and pay only when satisfied.</p>
                </div>
            </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .btn-warning { background-color: #f68b1e; border: none; }
            .text-primary { color: #f68b1e !important; }
            .hover-lift { transition: transform 0.3s; cursor: pointer; }
            .hover-lift:hover { transform: translateY(-10px); background-color: #fff !important; box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important; }
            .form-control:focus, .form-select:focus { border-color: #f68b1e; box-shadow: none; }
        </style>
    </div>
    `;
}


export  function AutoPartsLanding() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <div class="bg-dark text-white py-2">
            <div class="container d-flex justify-content-between align-items-center smaller fw-bold">
                <span><i class="bi bi-shield-check text-success me-2"></i> 100% FITMENT GUARANTEE</span>
                <span class="d-none d-md-block text-uppercase">Free Returns if it doesn't fit your vehicle</span>
            </div>
        </div>

        <section class="bg-white border-bottom shadow-sm py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <h2 class="fw-bold mb-4">Find the Right Part, <br><span class="text-primary" style="color: #f68b1e !important;">Right Away.</span></h2>
                        
                        <div class="card border-0 bg-light p-4 rounded-4">
                            <h6 class="fw-bold mb-3 smaller text-muted">SELECT YOUR VEHICLE</h6>
                            <div class="row g-2">
                                <div class="col-6">
                                    <select class="form-select border-0 py-2 shadow-sm">
                                        <option>Year (e.g. 2018)</option>
                                    </select>
                                </div>
                                <div class="col-6">
                                    <select class="form-select border-0 py-2 shadow-sm">
                                        <option>Make (e.g. Honda)</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <select class="form-select border-0 py-2 shadow-sm">
                                        <option>Model (e.g. Accord)</option>
                                    </select>
                                </div>
                                <div class="col-12 mt-3">
                                    <button class="btn btn-warning w-100 fw-bold py-2 text-white">FIND MATCHING PARTS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 d-none d-lg-block ps-5">
                        <div class="row g-3">
                            <div class="col-6"><img src="https://images.unsplash.com/photo-1486006396193-471c1f583237?auto=format&fit=crop&w=400&q=80" class="img-fluid rounded-4 shadow-sm"></div>
                            <div class="col-6"><img src="https://images.unsplash.com/photo-1597404294360-feeeda04612e?auto=format&fit=crop&w=400&q=80" class="img-fluid rounded-4 shadow-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mt-5">
            <h5 class="fw-bold mb-4">Browse by Component</h5>
            <div class="row g-3">
                <div class="col-md-2 col-4">
                    <div class="card border-0 shadow-sm text-center p-3 h-100 category-hover">
                        <i class="bi bi-pcf-display fs-3 mb-2 text-muted"></i>
                        <p class="smaller fw-bold mb-0">Engine Parts</p>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="card border-0 shadow-sm text-center p-3 h-100 category-hover">
                        <i class="bi bi-disc-fill fs-3 mb-2 text-muted"></i>
                        <p class="smaller fw-bold mb-0">Brakes</p>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="card border-0 shadow-sm text-center p-3 h-100 category-hover">
                        <i class="bi bi-brightness-high fs-3 mb-2 text-muted"></i>
                        <p class="smaller fw-bold mb-0">Lighting</p>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="card border-0 shadow-sm text-center p-3 h-100 category-hover">
                        <i class="bi bi-fan fs-3 mb-2 text-muted"></i>
                        <p class="smaller fw-bold mb-0">Cooling</p>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="card border-0 shadow-sm text-center p-3 h-100 category-hover">
                        <i class="bi bi-lightning-charge fs-3 mb-2 text-muted"></i>
                        <p class="smaller fw-bold mb-0">Electrical</p>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="card border-0 shadow-sm text-center p-3 h-100 category-hover">
                        <i class="bi bi-vinyl fs-3 mb-2 text-muted"></i>
                        <p class="smaller fw-bold mb-0">Suspension</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mt-5">
            <div class="d-flex justify-content-between align-items-end mb-4">
                <div>
                    <h5 class="fw-bold mb-0">Top-Selling Essentials</h5>
                    <p class="smaller text-muted mb-0">Genuine parts from verified logistics partners.</p>
                </div>
                <a href="#" class="text-primary fw-bold smaller text-decoration-none">View All Parts →</a>
            </div>
            
            <div class="row g-3">
                <div class="col-6 col-lg-3">
                    <div class="card border-0 shadow-sm rounded-4 h-100 part-card overflow-hidden">
                        <div class="p-3 bg-white text-center">
                            <img src="https://images.unsplash.com/photo-1635773054018-22c2390f70f6?auto=format&fit=crop&w=300&q=80" class="img-fluid rounded" style="height: 150px; object-fit: contain;">
                        </div>
                        <div class="card-body bg-white pt-0">
                            <div class="d-flex justify-content-between mb-1">
                                <span class="smaller text-muted fw-bold">BOSCH</span>
                                <span class="badge bg-warning text-dark py-1 px-2 smaller"><i class="bi bi-lightning-fill"></i> Express</span>
                            </div>
                            <h6 class="fw-bold mb-1 smaller">Premium Spark Plug Set (4pcs)</h6>
                            <p class="smaller text-muted mb-2">Ref: #BP-99021-X</p>
                            <div class="d-flex align-items-center justify-content-between mt-3">
                                <h6 class="fw-bold mb-0">₦ 12,500</h6>
                                <button class="btn btn-dark btn-sm rounded-circle"><i class="bi bi-plus-lg"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .text-primary { color: #f68b1e !important; }
            .btn-warning { background-color: #f68b1e; border: none; }
            .part-card { transition: 0.3s; }
            .part-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important; }
            .category-hover { transition: 0.2s; cursor: pointer; }
            .category-hover:hover { background-color: #f68b1e !important; color: white !important; }
            .category-hover:hover i { color: white !important; }
        </style>
    </div>
    `;
}


export  function RealEstateLanding() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <div class="bg-white border-bottom py-2">
            <div class="container d-flex justify-content-between align-items-center smaller">
                <span class="fw-bold text-success"><i class="bi bi-shield-check me-1"></i> 100% VERIFIED LISTINGS</span>
                <span class="text-muted d-none d-md-block">Direct from Vetted Developers & Top-Rated Agencies</span>
            </div>
        </div>

        <section class="position-relative py-5 overflow-hidden" style="min-height: 500px; background: url('https://images.unsplash.com/photo-1600585154340-be6199f7e099?auto=format&fit=crop&w=1200&q=80') center/cover;">
            <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
            <div class="container position-relative h-100 d-flex flex-column justify-content-center">
                <div class="row">
                    <div class="col-lg-7 text-white">
                        <h1 class="display-4 fw-bold mb-3">Find Your Next <br><span class="text-warning">Dream Home.</span></h1>
                        <p class="lead mb-4 opacity-75">Discover thousands of apartments, lands, and commercial spaces in prime locations across Nigeria.</p>
                        
                        <div class="card border-0 shadow-lg rounded-4 overflow-hidden text-dark">
                            <div class="card-header bg-white border-0 p-0">
                                <ul class="nav nav-pills nav-fill">
                                    <li class="nav-item"><a class="nav-link active rounded-0 py-3 fw-bold" href="#">FOR RENT</a></li>
                                    <li class="nav-item"><a class="nav-link rounded-0 py-3 fw-bold" href="#">FOR SALE</a></li>
                                    <li class="nav-item"><a class="nav-link rounded-0 py-3 fw-bold" href="#">SHORT-LET</a></li>
                                </ul>
                            </div>
                            <div class="card-body p-4 bg-white">
                                <div class="row g-2">
                                    <div class="col-md-5">
                                        <div class="input-group">
                                            <span class="input-group-text bg-transparent border-end-0"><i class="bi bi-geo-alt"></i></span>
                                            <input type="text" class="form-control border-start-0 py-2" placeholder="Lekki, Lagos...">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <select class="form-select py-2">
                                            <option>House Type</option>
                                            <option>2 Bedroom Flat</option>
                                            <option>Duplex</option>
                                            <option>Office Space</option>
                                        </select>
                                    </div>
                                    <div class="col-md-3">
                                        <button class="btn btn-warning w-100 fw-bold py-2 text-white">SEARCH</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mt-5">
            <h5 class="fw-bold mb-4">Prime Locations</h5>
            <div class="d-flex justify-content-between overflow-auto no-scrollbar gap-4 pb-3">
                <div class="text-center" style="min-width: 100px;">
                    <div class="rounded-circle mb-2 overflow-hidden shadow-sm mx-auto" style="width: 80px; height: 80px;">
                        <img src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&w=100&q=80" class="w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">VI, Lagos</p>
                </div>
                <div class="text-center" style="min-width: 100px;">
                    <div class="rounded-circle mb-2 overflow-hidden shadow-sm mx-auto" style="width: 80px; height: 80px;">
                        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=100&q=80" class="w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">Maitama, ABJ</p>
                </div>
                <div class="text-center" style="min-width: 100px;">
                    <div class="rounded-circle mb-2 overflow-hidden shadow-sm mx-auto" style="width: 80px; height: 80px;">
                        <img src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&w=100&q=80" class="w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">Ikeja, Lagos</p>
                </div>
                <div class="text-center" style="min-width: 100px;">
                    <div class="rounded-circle mb-2 overflow-hidden shadow-sm mx-auto" style="width: 80px; height: 80px;">
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=100&q=80" class="w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">Port-Harcourt</p>
                </div>
            </div>
        </section>

        <section class="container mt-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h5 class="fw-bold mb-0">Newest Listings</h5>
                <a href="#" class="text-warning fw-bold smaller text-decoration-none">View All Property →</a>
            </div>
            
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm rounded-4 overflow-hidden property-card h-100">
                        <div class="position-relative">
                            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" class="w-100" style="height: 250px; object-fit: cover;">
                            <span class="position-absolute top-0 start-0 m-3 badge bg-success px-3">VERIFIED</span>
                            <span class="position-absolute top-0 end-0 m-3 badge bg-dark opacity-75">SHORT-LET</span>
                        </div>
                        <div class="card-body bg-white">
                            <h6 class="fw-bold mb-1">Luxury 3 Bedroom Apartment</h6>
                            <p class="smaller text-muted mb-3"><i class="bi bi-geo-alt-fill me-1"></i> Banana Island, Lagos</p>
                            
                            <div class="d-flex gap-3 mb-4 py-2 border-top border-bottom border-light smaller fw-bold text-muted">
                                <span><i class="bi bi-door-open me-1"></i> 3 Beds</span>
                                <span><i class="bi bi-water me-1"></i> 3 Baths</span>
                                <span><i class="bi bi-fullscreen me-1"></i> 1,200 sqft</span>
                            </div>

                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="fw-bold text-dark mb-0">₦ 150,000 <span class="smaller fw-normal text-muted">/night</span></h5>
                                <button class="btn btn-outline-warning btn-sm fw-bold rounded-pill px-3">Book View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .text-warning { color: #f68b1e !important; }
            .btn-warning { background-color: #f68b1e; border: none; }
            .nav-pills .nav-link { color: #000; }
            .nav-pills .nav-link.active { background-color: #f68b1e; color: #fff; }
            .property-card { transition: 0.3s ease-in-out; cursor: pointer; }
            .property-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
        </style>
    </div>
    `;
}


export  function ToysLanding() {
    return /*html*/`
    <div class="bg-white min-vh-100 pb-5" style="background-image: radial-gradient(#f0f0f0 1px, transparent 1px); background-size: 20px 20px;">
        <div class="py-2 text-center text-white smaller fw-bold shadow-sm" style="background-color: #00bcd4;">
            🧸 NON-TOXIC & BPA FREE: Safety Certified Toys for Every Age Group.
        </div>

        <section class="container mt-4 mb-5">
            <h5 class="fw-bold text-center mb-4" style="color: #2d3436;">Shop by Age</h5>
            <div class="d-flex justify-content-center overflow-auto gap-4 pb-2 no-scrollbar">
                <div class="text-center" style="min-width: 90px;">
                    <div class="rounded-circle border border-4 border-info p-1 mb-2 mx-auto hover-bounce" style="width: 80px; height: 80px;">
                        <img src="https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=100&q=80" class="rounded-circle w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">0-24 Months</p>
                </div>
                <div class="text-center" style="min-width: 90px;">
                    <div class="rounded-circle border border-4 border-warning p-1 mb-2 mx-auto hover-bounce" style="width: 80px; height: 80px;">
                        <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&w=100&q=80" class="rounded-circle w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">3-5 Years</p>
                </div>
                <div class="text-center" style="min-width: 90px;">
                    <div class="rounded-circle border border-4 border-danger p-1 mb-2 mx-auto hover-bounce" style="width: 80px; height: 80px;">
                        <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=100&q=80" class="rounded-circle w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">6-9 Years</p>
                </div>
                <div class="text-center" style="min-width: 90px;">
                    <div class="rounded-circle border border-4 border-primary p-1 mb-2 mx-auto hover-bounce" style="width: 80px; height: 80px;">
                        <img src="https://images.unsplash.com/photo-1596460623812-76d4c63ed4af?auto=format&fit=crop&w=100&q=80" class="rounded-circle w-100 h-100 object-fit-cover">
                    </div>
                    <p class="smaller fw-bold mb-0">10+ Years</p>
                </div>
            </div>
        </section>

        <section class="container mb-5">
            <div class="row g-0 rounded-5 overflow-hidden shadow-lg" style="background: linear-gradient(135deg, #fff9c4 0%, #fffde7 100%);">
                <div class="col-md-6 p-5 d-flex flex-column justify-content-center">
                    <span class="badge rounded-pill bg-danger px-3 py-2 mb-3 fw-bold shadow-sm w-fit">BEST SELLERS 2026</span>
                    <h1 class="display-4 fw-bold mb-4" style="color: #1a1a1a;">Unleash Their <br><span style="color: #f68b1e;">Imagination.</span></h1>
                    <p class="lead text-muted mb-4">Discover educational STEM kits, creative arts, and the latest action figures from top brands.</p>
                    <div class="d-flex gap-3">
                        <button class="btn btn-warning btn-lg px-5 rounded-pill fw-bold text-white shadow">Shop All</button>
                        <button class="btn btn-outline-info btn-lg px-4 rounded-pill fw-bold">Brand Store</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="https://images.unsplash.com/photo-1537735319906-aba8a355dbdb?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover" style="min-height: 450px;">
                </div>
            </div>
        </section>

        <section class="container">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold m-0">Popular Categories</h4>
                <a href="#" class="text-info fw-bold text-decoration-none">See All <i class="bi bi-arrow-right"></i></a>
            </div>
            <div class="row g-3">
                <div class="col-6 col-lg-3">
                    <div class="card border-0 shadow-sm rounded-4 h-100 toy-card">
                        <div class="position-relative p-3 bg-light rounded-top-4">
                            <img src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=400&q=80" class="img-fluid rounded">
                            <div class="position-absolute top-0 end-0 m-2">
                                <span class="badge bg-warning text-dark smaller shadow-sm"><i class="bi bi-lightning-fill"></i> Express</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="smaller text-muted mb-1 fw-bold text-uppercase" style="letter-spacing: 1px;">LEGO</p>
                            <h6 class="fw-bold mb-1">Classic Creative Bricks Set</h6>
                            <h5 class="text-primary fw-bold mb-3">₦ 28,500</h5>
                            <button class="btn btn-info w-100 text-white fw-bold rounded-pill">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .w-fit { width: fit-content; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .text-primary { color: #f68b1e !important; }
            .btn-info { background-color: #00bcd4; border: none; }
            .btn-info:hover { background-color: #00acc1; }
            .btn-warning { background-color: #f68b1e; border: none; }
            .hover-bounce:hover { transform: scale(1.1); transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor: pointer; }
            .toy-card { transition: 0.3s; }
            .toy-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; }
            .border-info { border-color: #00bcd4 !important; }
            .border-warning { border-color: #ffc107 !important; }
            .border-danger { border-color: #ff5252 !important; }
            .border-primary { border-color: #3f51b5 !important; }
        </style>
    </div>
    `;
}


export  function GoldStoreLanding() {
    return /*html*/`
    <div class="bg-white min-vh-100 pb-5">
        <div class="bg-dark text-white py-2 shadow-sm">
            <div class="container d-flex justify-content-between align-items-center smaller fw-bold ls-1">
                <span><i class="bi bi-patch-check-fill text-warning me-2"></i> HALLMARKED & CERTIFIED 22K/18K GOLD</span>
                <span class="d-none d-md-block text-uppercase">Secure Insured Delivery Nationwide</span>
            </div>
        </div>

        <section class="py-5 bg-light" style="background: linear-gradient(to right, #ffffff 40%, #fcf8f2 100%);">
            <div class="container py-md-5">
                <div class="row align-items-center g-5">
                    <div class="col-lg-5">
                        <h6 class="text-muted fw-bold ls-2 smaller mb-3 text-uppercase">The Heritage Collection</h6>
                        <h1 class="display-4 fw-bold mb-4" style="font-family: 'Playfair Display', serif; color: #1a1a1a;">Pure Elegance. <br><span style="color: #b8860b;">Solid Gold.</span></h1>
                        <p class="lead text-muted mb-5">Invest in beauty that lasts generations. Explore our curated selection of 18K and 22K gold jewelry, ethically sourced and masterfully crafted.</p>
                        
                        <div class="d-flex gap-3">
                            <button class="btn btn-dark btn-lg px-5 rounded-0 fw-bold shadow-sm">Shop Necklaces</button>
                            <button class="btn btn-outline-dark btn-lg px-5 rounded-0 fw-bold">Investment Bars</button>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="position-relative ps-lg-5">
                            <img src="https://images.unsplash.com/photo-1611085507273-2121b0fa749e?auto=format&fit=crop&w=800&q=80" class="img-fluid rounded-0 shadow-lg" alt="Gold Jewelry">
                            <div class="position-absolute top-0 end-0 m-4 bg-white p-3 shadow-sm border border-warning border-opacity-25 text-center d-none d-md-block">
                                <p class="smaller text-muted mb-1 text-uppercase">Live Gold Price (24K)</p>
                                <h5 class="fw-bold mb-0">₦ 85,420 <span class="smaller text-success"><i class="bi bi-caret-up-fill"></i> 0.2%</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mt-5 pt-4">
            <div class="row g-4 text-center">
                <div class="col-md-3 col-6">
                    <div class="p-4 border border-light bg-white category-card h-100">
                        <h4 class="fw-bold mb-1" style="color: #b8860b;">22K</h4>
                        <p class="smaller fw-bold text-muted mb-0">Indian & Arab Gold</p>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="p-4 border border-light bg-white category-card h-100">
                        <h4 class="fw-bold mb-1" style="color: #b8860b;">18K</h4>
                        <p class="smaller fw-bold text-muted mb-0">Fine Jewelry</p>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="p-4 border border-light bg-white category-card h-100">
                        <h4 class="fw-bold mb-1" style="color: #b8860b;">999.9</h4>
                        <p class="smaller fw-bold text-muted mb-0">Investment Bars</p>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="p-4 border border-light bg-white category-card h-100">
                        <h4 class="fw-bold mb-1" style="color: #b8860b;">Coins</h4>
                        <p class="smaller fw-bold text-muted mb-0">Bullion & Gifts</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mt-5 pt-5">
            <div class="d-flex justify-content-between align-items-end mb-4">
                <h4 class="fw-bold mb-0" style="font-family: 'Playfair Display', serif;">New Arrivals</h4>
                <a href="#" class="text-dark fw-bold smaller text-decoration-underline ls-1">VIEW ALL PIECES</a>
            </div>
            <div class="row g-4">
                <div class="col-6 col-lg-3">
                    <div class="card border-0 product-card h-100">
                        <div class="position-relative bg-light overflow-hidden mb-3">
                            <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" class="w-100 product-img">
                            <div class="position-absolute bottom-0 start-0 w-100 p-2 opacity-0 quick-view">
                                <button class="btn btn-white w-100 rounded-0 smaller fw-bold py-2 shadow-sm">REQUEST PRICE QUOTE</button>
                            </div>
                        </div>
                        <div class="text-center px-2">
                            <p class="smaller text-muted mb-1 text-uppercase ls-1">18K Yellow Gold</p>
                            <h6 class="fw-bold mb-1">Infinity Link Bracelet</h6>
                            <h6 class="fw-bold mb-0" style="color: #b8860b;">₦ 450,000</h6>
                            <div class="mt-2 text-warning smaller">
                                <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .ls-1 { letter-spacing: 1px; }
            .ls-2 { letter-spacing: 2px; }
            .bg-dark { background-color: #1a1a1a !important; }
            .btn-dark { background-color: #1a1a1a; border: none; }
            .category-card { transition: 0.3s; cursor: pointer; }
            .category-card:hover { border-color: #b8860b !important; transform: scale(1.02); box-shadow: 0 10px 30px rgba(184, 134, 11, 0.1); }
            .product-card:hover .quick-view { opacity: 1 !important; transition: 0.3s; }
            .product-img { transition: 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
            .product-card:hover .product-img { transform: scale(1.1); }
            .btn-white { background-color: white; border: 1px solid #ddd; }
        </style>
    </div>
    `;
}


export function MoviesLanding() {
    return /*html*/`
    <div class="bg-white min-vh-100 pb-5">
        <div class="bg-primary text-white py-2 text-center smaller fw-bold" style="background-color: #e50914 !important;">
            🎬 PRE-ORDER NOW: "Dune: Part Two" Steelbook Edition. Ships May 15th. <a href="#" class="text-white text-decoration-underline ms-2">SECURE YOUR COPY</a>
        </div>

        <section class="container mt-4 mb-4">
            <div class="d-flex gap-2 overflow-auto no-scrollbar pb-2">
                <button class="btn btn-dark rounded-pill px-4 btn-sm fw-bold">All Movies</button>
                <button class="btn btn-outline-dark rounded-pill px-4 btn-sm fw-bold">Action</button>
                <button class="btn btn-outline-dark rounded-pill px-4 btn-sm fw-bold">Sci-Fi</button>
                <button class="btn btn-outline-dark rounded-pill px-4 btn-sm fw-bold">Animation</button>
                <button class="btn btn-outline-dark rounded-pill px-4 btn-sm fw-bold">Horror</button>
                <button class="btn btn-outline-dark rounded-pill px-4 btn-sm fw-bold">Nollywood</button>
                <button class="btn btn-outline-dark rounded-pill px-4 btn-sm fw-bold">4K Ultra HD</button>
            </div>
        </section>

        <section class="container mb-5">
            <div class="rounded-5 overflow-hidden shadow-lg position-relative" style="height: 500px;">
                <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80" class="w-100 h-100 object-fit-cover">
                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-5" style="background: linear-gradient(to right, white 20%, rgba(255,255,255,0.8) 50%, transparent 100%);">
                    <div style="max-width: 450px;">
                        <span class="badge bg-dark mb-2 px-3 py-2">NEW TO BLU-RAY</span>
                        <h1 class="display-3 fw-bold mb-3" style="letter-spacing: -2px; line-height: 1;">The Midnight <br>Chronicles</h1>
                        <div class="d-flex align-items-center gap-3 mb-4">
                            <span class="text-warning fw-bold"><i class="bi bi-star-fill me-1"></i> 4.9/5</span>
                            <span class="badge border text-dark">IMAX Enhanced</span>
                            <span class="badge border text-dark">English / Subtitles</span>
                        </div>
                        <p class="text-muted mb-5">The most anticipated sci-fi epic of the decade is now available for your home collection. Experience it in stunning 4K Detail.</p>
                        <div class="d-flex gap-3">
                            <button class="btn btn-danger btn-lg px-5 rounded-pill fw-bold shadow" style="background-color: #e50914; border: none;">Buy Now - ₦ 12,000</button>
                            <button class="btn btn-outline-dark btn-lg px-4 rounded-pill fw-bold"><i class="bi bi-play-circle me-2"></i>Watch Trailer</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="d-flex justify-content-between align-items-end mb-4">
                <h4 class="fw-bold mb-0">Trending This Week</h4>
                <a href="#" class="text-danger fw-bold smaller text-decoration-none">EXPLORE ALL GENRES →</a>
            </div>
            
            <div class="row g-4">
                <div class="col-6 col-md-4 col-lg-2">
                    <div class="card border-0 movie-card bg-transparent">
                        <div class="position-relative rounded-3 overflow-hidden shadow-sm mb-2 ratio ratio-2x3">
                            <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=400&q=80" class="object-fit-cover poster-img">
                            <div class="position-absolute top-0 end-0 m-2">
                                <span class="badge bg-warning text-dark smaller shadow-sm">4K</span>
                            </div>
                            <div class="movie-overlay d-flex flex-column justify-content-end p-3 text-white">
                                <button class="btn btn-light btn-sm fw-bold rounded-pill mb-2">QUICK BUY</button>
                                <button class="btn btn-outline-light btn-sm fw-bold rounded-pill">DETAILS</button>
                            </div>
                        </div>
                        <h6 class="fw-bold mb-0 text-truncate smaller">Cyberpunk 2077: Edgerunners</h6>
                        <p class="smaller text-muted mb-0">Animation, 2024</p>
                        <p class="smaller fw-bold text-danger mt-1">₦ 8,500</p>
                    </div>
                </div>
                </div>
        </section>

        <style>
            .smaller { font-size: 11px; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .movie-card { cursor: pointer; transition: 0.3s; }
            .movie-card:hover .poster-img { transform: scale(1.05); filter: brightness(0.6); }
            .poster-img { transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
            .movie-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                background: linear-gradient(transparent 60%, rgba(0,0,0,0.9));
                opacity: 0;
                transition: 0.3s;
            }
            .movie-card:hover .movie-overlay { opacity: 1; }
            .btn-danger:hover { background-color: #b20710 !important; }
        </style>
    </div>
    `;
}


export  function ComicsLanding() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <div class="bg-dark text-white py-2 text-center smaller fw-bold" style="background-color: #000 !important;">
            💥 NEW COMIC BOOK DAY: Fresh Shipments Just Arrived! <a href="#" class="text-warning ms-2 text-decoration-none">VIEW THIS WEEK'S PULL LIST</a>
        </div>

        <section class="bg-white border-bottom shadow-sm mb-4">
            <div class="container d-flex justify-content-center gap-4 py-3 overflow-auto no-scrollbar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" height="25" class="grayscale-hover cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/DC_Comics_logo.svg" height="25" class="grayscale-hover cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Image_Comics_logo.svg" height="25" class="grayscale-hover cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/en/d/d0/Dark_Horse_Comics_logo.svg" height="25" class="grayscale-hover cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Viz_Media_logo.svg" height="25" class="grayscale-hover cursor-pointer">
            </div>
        </section>

        <section class="container mb-5">
            <div class="row g-0 rounded-4 overflow-hidden shadow-lg bg-white">
                <div class="col-md-5">
                    <img src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover" style="min-height: 400px;">
                </div>
                <div class="col-md-7 p-5 d-flex flex-column justify-content-center border-start border-light">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <span class="badge bg-danger rounded-0 px-3 py-2">KEY ISSUE</span>
                        <span class="text-muted smaller fw-bold">MARVEL COMICS</span>
                    </div>
                    <h1 class="display-4 fw-bold mb-3" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 1px;">THE AMAZING <br>SPIDER-MAN #50</h1>
                    <p class="text-muted mb-4 pe-lg-5">The landmark anniversary issue is here. Featuring a rare 1:50 variant cover and the return of a classic villain. Limited stock available for collectors.</p>
                    <div class="d-flex align-items-center gap-4 mb-4">
                        <h2 class="fw-bold mb-0">₦ 15,500</h2>
                        <span class="badge border border-dark text-dark px-3 py-2">NEAR MINT (NM)</span>
                    </div>
                    <div class="d-flex gap-2">
                        <button class="btn btn-dark btn-lg px-5 rounded-0 fw-bold">ADD TO PULL BOX</button>
                        <button class="btn btn-outline-dark btn-lg px-4 rounded-0"><i class="bi bi-bookmark"></i></button>
                    </div>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="d-flex justify-content-between align-items-end mb-4 border-bottom border-dark border-3 pb-2">
                <h3 class="fw-bold mb-0" style="font-family: 'Bebas Neue', sans-serif;">TRENDING SINGLE ISSUES</h3>
                <a href="#" class="text-dark fw-bold smaller text-decoration-none">VIEW ALL RELEASES</a>
            </div>
            
            <div class="row g-4">
                <div class="col-6 col-lg-3">
                    <div class="card border-0 bg-transparent comic-card">
                        <div class="position-relative shadow-sm mb-3 overflow-hidden" style="transition: 0.3s;">
                            <img src="https://images.unsplash.com/photo-1588497859490-85d1c17db96d?auto=format&fit=crop&w=400&q=80" class="w-100">
                            <div class="position-absolute bottom-0 start-0 w-100 p-2 bg-warning text-center smaller fw-bold opacity-0 comic-hover-info">
                                COMES BAGGED & BOARDED
                            </div>
                        </div>
                        <p class="smaller text-danger fw-bold mb-1">DC COMICS</p>
                        <h6 class="fw-bold mb-1 text-truncate">Batman: The Dark Knight Returns #1</h6>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="fw-bold">₦ 4,200</span>
                            <span class="smaller text-muted">Issue #1 of 4</span>
                        </div>
                    </div>
                </div>
                </div>
        </section>

        <style>
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
            
            .smaller { font-size: 11px; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .grayscale-hover { filter: grayscale(100%); transition: 0.3s; opacity: 0.6; }
            .grayscale-hover:hover { filter: grayscale(0%); opacity: 1; }
            
            .comic-card { cursor: pointer; }
            .comic-card:hover .comic-hover-info { opacity: 1; }
            .comic-card:hover img { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.2); }
            
            .btn-dark { background-color: #000; border: none; }
            .btn-dark:hover { background-color: #333; }
        </style>
    </div>
    `;
}