export default function MyCustomers() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-primary shadow-sm mb-4" style="background-color: #003366 !important;">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center">
                    <a href="/jforce/dashboard" class="text-white me-3"><i class="bi bi-arrow-left fs-4"></i></a>
                    <span class="navbar-brand fw-bold mb-0">MY CUSTOMERS</span>
                </div>
                <button class="btn btn-warning btn-sm fw-bold px-3">+ ADD NEW CUSTOMER</button>
            </div>
        </nav>

        <main class="container">
            <div class="card border-0 shadow-sm rounded-4 p-3 mb-4 bg-white">
                <div class="row g-2">
                    <div class="col-md-9">
                        <div class="input-group">
                            <span class="input-group-text bg-light border-0"><i class="bi bi-search text-muted"></i></span>
                            <input type="text" class="form-control border-0 bg-light py-2 smaller" placeholder="Search by name, phone or location...">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <select class="form-select border-0 bg-light py-2 smaller fw-bold">
                            <option>Sort by: Most Recent</option>
                            <option>Sort by: Total Spend</option>
                            <option>Sort by: Alphabetical</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row g-3">
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 bg-white hover-card">
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="bg-info bg-opacity-10 text-info rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width: 50px; height: 50px;">JO</div>
                            <div class="flex-grow-1">
                                <h6 class="fw-bold mb-0 text-dark">Janet Oladipupo</h6>
                                <p class="smaller text-muted mb-0"><i class="bi bi-geo-alt me-1"></i> Ikeja, Lagos</p>
                            </div>
                            <div class="dropdown">
                                <i class="bi bi-three-dots-vertical cursor-pointer text-muted" data-bs-toggle="dropdown"></i>
                            </div>
                        </div>
                        
                        <div class="row g-2 mb-3 text-center">
                            <div class="col-6">
                                <div class="bg-light p-2 rounded-3">
                                    <p class="smaller text-muted mb-0">Total Orders</p>
                                    <p class="small fw-bold mb-0">14</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="bg-light p-2 rounded-3">
                                    <p class="smaller text-muted mb-0">Total Value</p>
                                    <p class="small fw-bold mb-0">₦ 185,400</p>
                                </div>
                            </div>
                        </div>

                        <div class="d-grid gap-2">
                            <button class="btn btn-primary btn-sm fw-bold py-2"><i class="bi bi-cart-plus me-1"></i> NEW ORDER</button>
                            <button class="btn btn-outline-light text-dark btn-sm fw-bold border py-2"><i class="bi bi-clock-history me-1"></i> ORDER HISTORY</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 bg-white hover-card">
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width: 50px; height: 50px;">MK</div>
                            <div class="flex-grow-1">
                                <h6 class="fw-bold mb-0 text-dark">Musa Kamara</h6>
                                <p class="smaller text-muted mb-0"><i class="bi bi-geo-alt me-1"></i> Surulere, Lagos</p>
                            </div>
                            <div class="dropdown">
                                <i class="bi bi-three-dots-vertical cursor-pointer text-muted"></i>
                            </div>
                        </div>
                        
                        <div class="row g-2 mb-3 text-center">
                            <div class="col-6">
                                <div class="bg-light p-2 rounded-3">
                                    <p class="smaller text-muted mb-0">Total Orders</p>
                                    <p class="small fw-bold mb-0">3</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="bg-light p-2 rounded-3">
                                    <p class="smaller text-muted mb-0">Total Value</p>
                                    <p class="small fw-bold mb-0">₦ 12,000</p>
                                </div>
                            </div>
                        </div>

                        <div class="d-grid gap-2">
                            <button class="btn btn-primary btn-sm fw-bold py-2"><i class="bi bi-cart-plus me-1"></i> NEW ORDER</button>
                            <button class="btn btn-outline-light text-dark btn-sm fw-bold border py-2"><i class="bi bi-clock-history me-1"></i> ORDER HISTORY</button>
                        </div>
                    </div>
                </div>
            </div>

            </main>

        <style>
            .smaller { font-size: 11px; }
            .hover-card:hover { border: 1px solid #ffcc00 !important; transform: translateY(-3px); transition: 0.3s ease; }
            .bg-info.bg-opacity-10 { background-color: rgba(13, 202, 240, 0.1) !important; }
            .bg-success.bg-opacity-10 { background-color: rgba(25, 135, 84, 0.1) !important; }
            .cursor-pointer { cursor: pointer; }
            .btn-primary { background-color: #003366; border: none; }
            .btn-primary:hover { background-color: #002244; }
        </style>
    </div>
    `;
}


export function AddCustomer() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-primary shadow-sm mb-4" style="background-color: #003366 !important;">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center">
                    <a href="/jforce/customers" class="text-white me-3"><i class="bi bi-x-lg fs-5"></i></a>
                    <span class="navbar-brand fw-bold mb-0">NEW CUSTOMER</span>
                </div>
                <button type="submit" form="customerForm" class="btn btn-warning btn-sm fw-bold px-3">SAVE</button>
            </div>
        </nav>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                        <div class="text-center mb-4">
                            <div class="bg-light d-inline-flex p-4 rounded-circle mb-3">
                                <i class="bi bi-person-plus text-primary fs-1"></i>
                            </div>
                            <h5 class="fw-bold">Customer Details</h5>
                            <p class="smaller text-muted">Adding a customer helps you pre-fill orders and track their preferences.</p>
                        </div>

                        <form id="customerForm">
                            <h6 class="fw-bold text-uppercase smaller text-primary mb-3 ls-1">Basic Identity</h6>
                            <div class="row g-3 mb-4">
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">FIRST NAME</label>
                                    <input type="text" class="form-control py-2" placeholder="e.g. Chinedu" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">LAST NAME</label>
                                    <input type="text" class="form-control py-2" placeholder="e.g. Okafor" required>
                                </div>
                                <div class="col-md-12">
                                    <label class="smaller fw-bold text-muted mb-1">PHONE NUMBER</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-light border-end-0">+234</span>
                                        <input type="tel" class="form-control py-2" placeholder="803 000 0000" required>
                                    </div>
                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="checkbox" id="whatsappCheck" checked>
                                        <label class="form-check-label smaller text-muted" for="whatsappCheck">
                                            This is also a WhatsApp number
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <h6 class="fw-bold text-uppercase smaller text-primary mb-3 ls-1">Primary Delivery Address</h6>
                            <div class="row g-3 mb-4">
                                <div class="col-md-12">
                                    <label class="smaller fw-bold text-muted mb-1">STREET ADDRESS</label>
                                    <textarea class="form-control py-2" rows="2" placeholder="House No, Street Name, Landmark..."></textarea>
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">CITY / AREA</label>
                                    <select class="form-select py-2">
                                        <option selected disabled>Select City</option>
                                        <option>Ikeja</option>
                                        <option>Lekki</option>
                                        <option>Surulere</option>
                                        <option>Yaba</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">STATE</label>
                                    <select class="form-select py-2">
                                        <option>Lagos</option>
                                        <option>Abuja (FCT)</option>
                                        <option>Rivers</option>
                                    </select>
                                </div>
                            </div>

                            <h6 class="fw-bold text-uppercase smaller text-primary mb-3 ls-1">Extra Info (Optional)</h6>
                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-1">CUSTOMER CATEGORY</label>
                                <div class="d-flex gap-2 flex-wrap">
                                    <input type="radio" class="btn-check" name="cat" id="family" checked>
                                    <label class="btn btn-outline-secondary btn-sm px-3 rounded-pill" for="family">Family</label>

                                    <input type="radio" class="btn-check" name="cat" id="colleague">
                                    <label class="btn btn-outline-secondary btn-sm px-3 rounded-pill" for="colleague">Colleague</label>

                                    <input type="radio" class="btn-check" name="cat" id="vip">
                                    <label class="btn btn-outline-secondary btn-sm px-3 rounded-pill" for="vip">VIP</label>
                                </div>
                            </div>

                            <div class="d-grid mt-5">
                                <button type="submit" class="btn btn-primary fw-bold py-3 shadow-sm rounded-3">
                                    CREATE CUSTOMER PROFILE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .ls-1 { letter-spacing: 1px; }
            .form-control:focus, .form-select:focus {
                border-color: #003366;
                box-shadow: 0 0 0 0.25rem rgba(0, 51, 102, 0.1);
            }
            .btn-primary { background-color: #003366; border: none; }
            .btn-primary:hover { background-color: #002244; }
            .btn-check:checked + .btn-outline-secondary {
                background-color: #ff9900;
                border-color: #ff9900;
                color: white;
            }
        </style>
    </div>
    `;
}