export default function JForceOrderHistory() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-primary shadow-sm mb-4" style="background-color: #003366 !important;">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center">
                    <a href="/jforce/dashboard" class="text-white me-3"><i class="bi bi-arrow-left fs-4"></i></a>
                    <span class="navbar-brand fw-bold mb-0">ORDER HISTORY</span>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-outline-light btn-sm fw-bold"><i class="bi bi-download me-1"></i> EXCEL</button>
                </div>
            </div>
        </nav>

        <main class="container">
            <div class="card border-0 shadow-sm rounded-4 mb-4 bg-white overflow-hidden">
                <div class="d-flex border-bottom overflow-auto">
                    <button class="btn btn-link text-decoration-none py-3 px-4 fw-bold text-primary border-bottom border-3 border-primary rounded-0">All Orders</button>
                    <button class="btn btn-link text-decoration-none py-3 px-4 fw-bold text-muted rounded-0">Delivered</button>
                    <button class="btn btn-link text-decoration-none py-3 px-4 fw-bold text-muted rounded-0">In Transit</button>
                    <button class="btn btn-link text-decoration-none py-3 px-4 fw-bold text-muted rounded-0">Cancelled</button>
                </div>
                <div class="p-3 bg-light d-flex gap-2 align-items-center">
                    <i class="bi bi-funnel text-muted ms-2"></i>
                    <input type="text" class="form-control form-control-sm border-0 bg-white" style="max-width: 250px;" placeholder="Search Order ID or Customer...">
                    <input type="date" class="form-control form-control-sm border-0 bg-white w-auto">
                </div>
            </div>

            <div class="d-flex flex-column gap-3">
                
                <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                    <div class="p-3 bg-light border-bottom d-flex justify-content-between align-items-center">
                        <div class="d-flex gap-3 align-items-center">
                            <span class="fw-bold text-dark smaller">#99284752</span>
                            <span class="text-muted smaller">Ordered: April 3, 2026</span>
                        </div>
                        <span class="badge bg-success bg-opacity-10 text-success px-3 py-2">DELIVERED</span>
                    </div>
                    <div class="p-4">
                        <div class="row align-items-center">
                            <div class="col-md-6 d-flex gap-3 align-items-center mb-3 mb-md-0">
                                <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=100&q=80" class="rounded border" style="width: 60px; height: 60px; object-fit: cover;">
                                <div>
                                    <h6 class="fw-bold mb-1 small">Smart Watch Series 9 - Midnight Aluminum</h6>
                                    <p class="smaller text-muted mb-0">Customer: <strong>Janet Oladipupo</strong></p>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 text-md-center">
                                <p class="smaller text-muted mb-0 text-uppercase ls-1">Item Price</p>
                                <p class="fw-bold mb-0">₦ 152,000</p>
                            </div>
                            <div class="col-6 col-md-3 text-end">
                                <p class="smaller text-muted mb-0 text-uppercase ls-1">Commission</p>
                                <p class="fw-bold text-primary mb-0">+ ₦ 4,560</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 bg-light bg-opacity-50 text-end border-top">
                        <button class="btn btn-link btn-sm text-decoration-none text-muted fw-bold">View Tracking Details</button>
                        <button class="btn btn-dark btn-sm fw-bold ms-2 px-3">RE-ORDER</button>
                    </div>
                </div>

                <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white opacity-75">
                    <div class="p-3 bg-light border-bottom d-flex justify-content-between align-items-center">
                        <div class="d-flex gap-3 align-items-center">
                            <span class="fw-bold text-dark smaller">#99284710</span>
                            <span class="text-muted smaller">Ordered: March 28, 2026</span>
                        </div>
                        <span class="badge bg-danger bg-opacity-10 text-danger px-3 py-2">CANCELLED</span>
                    </div>
                    <div class="p-4">
                        <div class="row align-items-center">
                            <div class="col-md-6 d-flex gap-3 align-items-center">
                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100&q=80" class="rounded border grayscale" style="width: 60px; height: 60px; object-fit: cover;">
                                <div>
                                    <h6 class="fw-bold mb-1 small">Premium Wireless Headphones</h6>
                                    <p class="smaller text-muted mb-0">Customer: <strong>Musa Kamara</strong></p>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 text-md-center">
                                <p class="smaller text-muted mb-0 text-uppercase ls-1">Item Price</p>
                                <p class="fw-bold mb-0">₦ 8,500</p>
                            </div>
                            <div class="col-6 col-md-3 text-end">
                                <p class="smaller text-muted mb-0 text-uppercase ls-1">Commission</p>
                                <p class="fw-bold text-muted mb-0">₦ 0</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .ls-1 { letter-spacing: 0.5px; }
            .bg-opacity-10 { background-color: rgba(var(--bs-success-rgb), 0.1) !important; }
            .bg-danger.bg-opacity-10 { background-color: rgba(220, 53, 69, 0.1) !important; }
            .grayscale { filter: grayscale(100%); opacity: 0.5; }
            .hover-lift:hover { transform: translateY(-2px); transition: 0.2s; }
            .btn-link:hover { color: #ff9900 !important; }
        </style>
    </div>
    `;
}