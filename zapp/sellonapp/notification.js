export default function VendorNotifications() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center">
                    <span class="navbar-brand fw-bold text-warning mb-0">NOTIFICATIONS</span>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-link text-white text-decoration-none smaller fw-bold px-0 me-3">Mark all as read</button>
                    <button class="btn btn-outline-light btn-sm fw-bold px-3"><i class="bi bi-gear me-1"></i> Settings</button>
                </div>
            </div>
        </nav>

        <main class="container py-4">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    
                    <div class="d-flex gap-2 mb-4 overflow-auto pb-2">
                        <button class="btn btn-warning text-white btn-sm px-4 fw-bold rounded-pill">All</button>
                        <button class="btn btn-white bg-white border shadow-sm btn-sm px-4 fw-bold rounded-pill text-muted">Orders</button>
                        <button class="btn btn-white bg-white border shadow-sm btn-sm px-4 fw-bold rounded-pill text-muted">Inventory</button>
                        <button class="btn btn-white bg-white border shadow-sm btn-sm px-4 fw-bold rounded-pill text-muted">Payments</button>
                        <button class="btn btn-white bg-white border shadow-sm btn-sm px-4 fw-bold rounded-pill text-muted">Promotions</button>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        
                        <div class="p-4 border-bottom bg-warning bg-opacity-10 position-relative">
                            <span class="position-absolute top-0 start-0 bottom-0 bg-warning" style="width: 4px;"></span>
                            <div class="d-flex gap-3">
                                <div class="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 45px; height: 45px;">
                                    <i class="bi bi-cart-check-fill fs-5"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <h6 class="fw-bold mb-1 small text-dark">Action Required: New Order #4958372</h6>
                                        <span class="smaller text-muted">2 mins ago</span>
                                    </div>
                                    <p class="smaller text-muted mb-3">You have a new order for <strong>iPhone 15 Pro Max</strong>. Please pack and ship within 24 hours to maintain your seller score.</p>
                                    <div class="d-flex gap-2">
                                        <button class="btn btn-warning btn-sm text-white fw-bold px-3 smaller py-1 shadow-sm">PROCESS ORDER</button>
                                        <button class="btn btn-outline-secondary btn-sm fw-bold px-3 smaller py-1 bg-white">VIEW DETAILS</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 border-bottom bg-white position-relative">
                            <div class="d-flex gap-3 opacity-75">
                                <div class="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 45px; height: 45px;">
                                    <i class="bi bi-box-seam-fill fs-5"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <h6 class="fw-bold mb-1 small text-dark">Out of Stock Alert</h6>
                                        <span class="smaller text-muted">3 hours ago</span>
                                    </div>
                                    <p class="smaller text-muted mb-0">Your product <strong>"AirPods Pro"</strong> is currently out of stock. It has been hidden from the marketplace.</p>
                                    <a href="#" class="smaller text-warning fw-bold text-decoration-none d-inline-block mt-2">RESTOCK NOW</a>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 border-bottom bg-white position-relative">
                            <div class="d-flex gap-3 opacity-75">
                                <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 45px; height: 45px;">
                                    <i class="bi bi-wallet2 fs-5"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <h6 class="fw-bold mb-1 small text-dark">Payment Processed</h6>
                                        <span class="smaller text-muted">Yesterday, 10:45 AM</span>
                                    </div>
                                    <p class="smaller text-muted mb-0">₦ 1,450,000 has been transferred to your GT Bank account. Reference: PAY-99284.</p>
                                    <a href="#" class="smaller text-success fw-bold text-decoration-none d-inline-block mt-2">DOWNLOAD INVOICE</a>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 border-bottom bg-white position-relative">
                            <div class="d-flex gap-3 opacity-75">
                                <div class="bg-info text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 45px; height: 45px;">
                                    <i class="bi bi-megaphone-fill fs-5"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <h6 class="fw-bold mb-1 small text-dark">System Update: Jumia Anniversary</h6>
                                        <span class="smaller text-muted">2 days ago</span>
                                    </div>
                                    <p class="smaller text-muted mb-0">The Jumia Anniversary campaign starts in 5 days. Ensure your best-selling prices are updated to stay competitive.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="text-center mt-4">
                        <button class="btn btn-outline-secondary btn-sm px-5 fw-bold smaller py-2">LOAD OLDER NOTIFICATIONS</button>
                    </div>

                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .bg-opacity-10 { background-color: rgba(255, 153, 0, 0.08) !important; }
            .card:hover .opacity-75 { opacity: 1 !important; transition: opacity 0.2s; }
            .btn-white:hover { background-color: #f8f9fa; border-color: #ff9900 !important; color: #ff9900 !important; }
            .ls-1 { letter-spacing: 1px; }
        </style>
    </div>
    `;
}