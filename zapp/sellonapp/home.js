export default function SellOnJumia() {
    return /*html*/`
    <div class="bg-white min-vh-100">
        <header class="bg-dark text-white py-5 mb-5" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200'); background-size: cover; background-position: center;">
            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-lg-7 text-center text-lg-start">
                        <h1 class="display-4 fw-bold mb-3">Reach Millions of Customers across Africa</h1>
                        <p class="lead mb-4 opacity-75">Join the largest e-commerce ecosystem. Set up your shop in minutes and start selling to over 1 billion people.</p>
                        <div class="d-flex gap-3 justify-content-center justify-content-lg-start">
                            <a href="#register" class="btn btn-warning btn-lg px-5 fw-bold text-white shadow">START SELLING</a>
                            <a href="#" class="btn btn-outline-light btn-lg px-4 fw-bold">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main class="container">
            <div class="row g-4 text-center mb-5">
                <div class="col-md-4">
                    <div class="p-4 rounded-3 border-0 shadow-sm bg-light h-100">
                        <h2 class="fw-bold text-warning mb-1">6M+</h2>
                        <p class="text-muted small fw-bold text-uppercase mb-0">Daily Visitors</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4 rounded-3 border-0 shadow-sm bg-light h-100">
                        <h2 class="fw-bold text-warning mb-1">2k+</h2>
                        <p class="text-muted small fw-bold text-uppercase mb-0">Cities Covered</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4 rounded-3 border-0 shadow-sm bg-light h-100">
                        <h2 class="fw-bold text-warning mb-1">24/7</h2>
                        <p class="text-muted small fw-bold text-uppercase mb-0">Vendor Support</p>
                    </div>
                </div>
            </div>

            <div id="register" class="row justify-content-center py-5">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
                        <div class="row g-0">
                            <div class="col-md-5 bg-warning p-5 text-white d-flex flex-column justify-content-center">
                                <h3 class="fw-bold mb-4">Why Jumia?</h3>
                                <ul class="list-unstyled">
                                    <li class="mb-3 d-flex gap-2">
                                        <i class="bi bi-check-circle-fill"></i>
                                        <span class="smaller fw-medium">Free training via Jumia University</span>
                                    </li>
                                    <li class="mb-3 d-flex gap-2">
                                        <i class="bi bi-check-circle-fill"></i>
                                        <span class="smaller fw-medium">Dedicated account manager</span>
                                    </li>
                                    <li class="mb-3 d-flex gap-2">
                                        <i class="bi bi-check-circle-fill"></i>
                                        <span class="smaller fw-medium">Secure & fast payments</span>
                                    </li>
                                    <li class="mb-3 d-flex gap-2">
                                        <i class="bi bi-check-circle-fill"></i>
                                        <span class="smaller fw-medium">Seamless logistics with Jumia Express</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-7 p-5 bg-white">
                                <h4 class="fw-bold mb-4">Register as a Vendor</h4>
                                <form>
                                    <div class="mb-3">
                                        <label class="smaller fw-bold text-muted mb-1">SHOP NAME</label>
                                        <input type="text" class="form-control form-control-sm py-2" placeholder="e.g. Gadget World" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="smaller fw-bold text-muted mb-1">PRIMARY CATEGORY</label>
                                        <select class="form-select form-select-sm py-2">
                                            <option>Electronics</option>
                                            <option>Fashion</option>
                                            <option>Home & Office</option>
                                            <option>Computing</option>
                                        </select>
                                    </div>
                                    <div class="row g-2 mb-3">
                                        <div class="col-6">
                                            <label class="smaller fw-bold text-muted mb-1">FIRST NAME</label>
                                            <input type="text" class="form-control form-control-sm py-2" required>
                                        </div>
                                        <div class="col-6">
                                            <label class="smaller fw-bold text-muted mb-1">LAST NAME</label>
                                            <input type="text" class="form-control form-control-sm py-2" required>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="smaller fw-bold text-muted mb-1">PHONE NUMBER</label>
                                        <div class="input-group input-group-sm">
                                            <span class="input-group-text">+234</span>
                                            <input type="tel" class="form-control py-2">
                                        </div>
                                    </div>
                                    <div class="form-check mb-4">
                                        <input class="form-check-input custom-check" type="checkbox" id="terms" required>
                                        <label class="form-check-label smaller text-muted" for="terms">
                                            I agree to the <a href="#" class="text-warning">Vendor Agreement</a>
                                        </label>
                                    </div>
                                    <button class="btn btn-warning w-100 py-3 fw-bold text-white shadow-sm">CREATE YOUR SHOP</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <section class="bg-light py-5 mt-5">
            <div class="container text-center">
                <p class="text-muted small text-uppercase fw-bold mb-4">Trusted by thousands of brands</p>
                <div class="d-flex flex-wrap justify-content-center gap-5 opacity-50 grayscale">
                    <h3 class="fw-bold">SAMSUNG</h3>
                    <h3 class="fw-bold">ADIDAS</h3>
                    <h3 class="fw-bold">APPLE</h3>
                    <h3 class="fw-bold">HP</h3>
                </div>
            </div>
        </section>

        <style>
            .smaller { font-size: 12px; }
            .grayscale { filter: grayscale(100%); }
            .form-control:focus, .form-select:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.25rem rgba(255, 153, 0, 0.15);
            }
            .custom-check:checked {
                background-color: #ff9900;
                border-color: #ff9900;
            }
            .btn-warning:hover { opacity: 0.95; }
        </style>
    </div>
    `;
}