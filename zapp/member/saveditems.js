export default function SavedItems() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="container pt-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-3" style="font-size: 12px;">
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">My Account</a></li>
                <li class="breadcrumb-item active text-muted">Saved Items</li>
            </ol>
        </nav>

        <main class="container">
            <div class="row g-3">
                <aside class="col-lg-3 d-none d-lg-block">
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="list-group list-group-flush small fw-medium">
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-person me-3 fs-5 text-secondary"></i> My Jumia Account
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-box-seam me-3 fs-5 text-secondary"></i> Orders
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3 active-nav">
                                <i class="bi bi-heart me-3 fs-5 text-warning"></i> Saved Items
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-ticket-perforated me-3 fs-5 text-secondary"></i> Voucher Codes
                            </a>
                        </div>
                    </div>
                </aside>

                <div class="col-lg-9">
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
                            <h6 class="mb-0 fw-bold text-uppercase small">Saved Items (2)</h6>
                        </div>

                        <div class="card-body p-0">
                            <div class="p-3 border-bottom wishlist-item transition-all">
                                <div class="row align-items-center g-3">
                                    <div class="col-3 col-md-2 position-relative">
                                        <img src="https://via.placeholder.com/120?text=iPhone+15" class="img-fluid rounded border" alt="product">
                                        <span class="badge bg-danger position-absolute top-0 start-0 m-1 smaller">-12%</span>
                                    </div>
                                    <div class="col-9 col-md-6">
                                        <h6 class="smaller fw-bold mb-1 text-dark text-truncate-2">Apple iPhone 15 Pro Max - 256GB - Natural Titanium</h6>
                                        <p class="smaller text-success mb-2 fw-bold"><i class="bi bi-check2-circle"></i> In Stock</p>
                                        <div class="d-flex align-items-center gap-2">
                                            <h6 class="fw-bold mb-0 smaller">₦ 1,850,000</h6>
                                            <small class="text-muted text-decoration-line-through smaller">₦ 2,100,000</small>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 text-md-end mt-md-0">
                                        <div class="d-grid gap-2 d-md-block">
                                            <button class="btn btn-warning btn-sm fw-bold text-white px-3 me-md-2 shadow-sm">BUY NOW</button>
                                            <button class="btn btn-outline-danger btn-sm border-0 px-2" title="Remove">
                                                <i class="bi bi-trash3"></i> <span class="d-md-none ms-1 smaller">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-3 border-bottom wishlist-item transition-all">
                                <div class="row align-items-center g-3">
                                    <div class="col-3 col-md-2">
                                        <img src="https://via.placeholder.com/120?text=AirPods" class="img-fluid rounded border" alt="product">
                                    </div>
                                    <div class="col-9 col-md-6">
                                        <h6 class="smaller fw-bold mb-1 text-dark text-truncate-2">Apple AirPods Pro (2nd Gen) with MagSafe Case</h6>
                                        <p class="smaller text-danger mb-2 fw-bold"><i class="bi bi-exclamation-triangle"></i> Only 2 left in stock!</p>
                                        <h6 class="fw-bold mb-0 smaller">₦ 245,000</h6>
                                    </div>
                                    <div class="col-12 col-md-4 text-md-end">
                                        <div class="d-grid gap-2 d-md-block">
                                            <button class="btn btn-warning btn-sm fw-bold text-white px-3 me-md-2 shadow-sm">BUY NOW</button>
                                            <button class="btn btn-outline-danger btn-sm border-0 px-2">
                                                <i class="bi bi-trash3"></i> <span class="d-md-none ms-1 smaller">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer bg-white text-center py-4 d-none">
                            <i class="bi bi-heart text-light display-1 mb-3 d-block"></i>
                            <h6 class="fw-bold">You haven’t saved any items yet</h6>
                            <p class="smaller text-muted">Found something you like? Tap on the heart icon to save it here.</p>
                            <button class="btn btn-warning text-white fw-bold px-4">START SHOPPING</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .text-truncate-2 {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .active-nav { color: #ff9900 !important; font-weight: bold; border-left: 4px solid #ff9900 !important; border-radius: 0 !important; }
            .wishlist-item:hover { background-color: #fafafa; }
            .transition-all { transition: all 0.2s ease; }
            .badge { font-weight: 600; }
        </style>
    </div>
    `;
}