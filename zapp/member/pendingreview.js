export default function PendingReviews() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="container pt-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-3" style="font-size: 12px;">
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">My Account</a></li>
                <li class="breadcrumb-item active text-muted">Pending Reviews</li>
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
                                <i class="bi bi-chat-dots me-3 fs-5 text-warning"></i> Pending Reviews
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-heart me-3 fs-5 text-secondary"></i> Saved Items
                            </a>
                        </div>
                    </div>
                </aside>

                <div class="col-lg-9">
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="card-header bg-white p-0 border-bottom">
                            <div class="d-flex">
                                <button class="btn flex-fill py-3 fw-bold small border-bottom border-3 border-warning rounded-0 text-warning">PENDING REVIEWS (2)</button>
                                <button class="btn flex-fill py-3 fw-bold small border-0 rounded-0 text-muted opacity-75">PUBLISHED REVIEWS (15)</button>
                            </div>
                        </div>

                        <div class="card-body p-0">
                            <div class="p-3 border-bottom review-card transition-all">
                                <div class="row align-items-center g-3">
                                    <div class="col-3 col-md-2">
                                        <img src="https://via.placeholder.com/100?text=iPhone" class="img-fluid rounded border" alt="product">
                                    </div>
                                    <div class="col-9 col-md-7">
                                        <h6 class="smaller fw-bold mb-1 text-dark">Apple iPhone 15 Pro Max - 256GB - Titanium</h6>
                                        <p class="smaller text-muted mb-1">Order #39485720</p>
                                        <p class="smaller text-muted mb-0">Delivered on: 12-04-2024</p>
                                    </div>
                                    <div class="col-12 col-md-3 text-md-end">
                                        <button class="btn btn-warning btn-sm fw-bold text-white px-4 shadow-sm w-100 w-md-auto">RATE THIS PRODUCT</button>
                                    </div>
                                </div>
                            </div>

                            <div class="p-3 border-bottom review-card transition-all">
                                <div class="row align-items-center g-3">
                                    <div class="col-3 col-md-2">
                                        <img src="https://via.placeholder.com/100?text=AirPods" class="img-fluid rounded border" alt="product">
                                    </div>
                                    <div class="col-9 col-md-7">
                                        <h6 class="smaller fw-bold mb-1 text-dark">Apple AirPods Pro (2nd Gen) with MagSafe</h6>
                                        <p class="smaller text-muted mb-1">Order #39485844</p>
                                        <p class="smaller text-muted mb-0">Delivered on: 15-04-2024</p>
                                    </div>
                                    <div class="col-12 col-md-3 text-md-end">
                                        <button class="btn btn-warning btn-sm fw-bold text-white px-4 shadow-sm w-100 w-md-auto">RATE THIS PRODUCT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 p-3 bg-white rounded-3 shadow-sm d-flex gap-3 align-items-center">
                        <div class="bg-warning bg-opacity-10 p-2 rounded">
                            <i class="bi bi-lightbulb text-warning fs-4"></i>
                        </div>
                        <div>
                            <h6 class="smaller fw-bold mb-1">Why review products?</h6>
                            <p class="smaller text-muted mb-0">Your reviews help millions of other Jumia shoppers make better choices. Plus, you help us improve the quality of products sold!</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .active-nav { background-color: transparent !important; color: #ff9900 !important; font-weight: bold; border-left: 4px solid #ff9900 !important; border-radius: 0 !important; }
            .review-card:hover { background-color: #fff9f0; }
            .transition-all { transition: all 0.2s ease-in-out; }
            .btn-warning:hover { opacity: 0.9; }
        </style>
    </div>
    `;
}