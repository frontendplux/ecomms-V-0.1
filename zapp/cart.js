import { Footer } from "./footer.js";
import { Headerx } from "./header.js";

export default function Cart() {
    return /*html*/`
    ${Headerx()}
    <div class="bg-light min-vh-100 pb-5">
        <main class="container pt-4">
            <div class="row g-3">
                <div class="col-lg-9">
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="card-header bg-white py-3 border-bottom">
                            <h5 class="mb-0 fw-bold">Cart (3 items)</h5>
                        </div>
                        
                        <div class="card-body p-0">
                            <div class="p-3 border-bottom cart-item-row">
                                <div class="row align-items-center g-3">
                                    <div class="col-3 col-md-2">
                                        <img src="https://via.placeholder.com/120?text=iPhone+15" class="img-fluid rounded border" alt="Product">
                                    </div>
                                    <div class="col-9 col-md-6">
                                        <h6 class="text-dark mb-1 fw-medium text-truncate-2">Apple iPhone 15 Pro Max - 256GB - Natural Titanium</h6>
                                        <p class="smaller text-muted mb-1">Seller: <span class="text-primary">Apple Official Store</span></p>
                                        <span class="badge bg-info text-white smaller">Jumia Express</span>
                                    </div>
                                    <div class="col-6 col-md-2 text-md-end">
                                        <h6 class="fw-bold mb-0">₦ 1,850,000</h6>
                                        <small class="text-muted text-decoration-line-through smaller">₦ 2,100,000</small>
                                    </div>
                                    <div class="col-6 col-md-2 text-end">
                                        <div class="d-flex align-items-center justify-content-end gap-2">
                                            <button class="btn btn-sm btn-outline-warning rounded-pill px-2 py-0"><i class="bi bi-dash-lg"></i></button>
                                            <span class="fw-bold">1</span>
                                            <button class="btn btn-sm btn-outline-warning rounded-pill px-2 py-0"><i class="bi bi-plus-lg"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-4 mt-3 ps-md-2">
                                    <button class="btn btn-link text-warning text-decoration-none p-0 smaller fw-bold"><i class="bi bi-trash3 me-1"></i> REMOVE</button>
                                    <button class="btn btn-link text-warning text-decoration-none p-0 smaller fw-bold"><i class="bi bi-heart me-1"></i> SAVE FOR LATER</button>
                                </div>
                            </div>

                            <div class="p-3 border-bottom cart-item-row">
                                <div class="row align-items-center g-3">
                                    <div class="col-3 col-md-2">
                                        <img src="https://via.placeholder.com/120?text=AirPods" class="img-fluid rounded border" alt="Product">
                                    </div>
                                    <div class="col-9 col-md-6">
                                        <h6 class="text-dark mb-1 fw-medium text-truncate-2">Apple AirPods Pro (2nd Gen) with MagSafe Case</h6>
                                        <p class="smaller text-muted mb-1">Seller: <span class="text-primary">Global Tech</span></p>
                                    </div>
                                    <div class="col-6 col-md-2 text-md-end">
                                        <h6 class="fw-bold mb-0">₦ 245,000</h6>
                                    </div>
                                    <div class="col-6 col-md-2 text-end">
                                        <div class="d-flex align-items-center justify-content-end gap-2">
                                            <button class="btn btn-sm btn-outline-warning rounded-pill px-2 py-0"><i class="bi bi-dash-lg"></i></button>
                                            <span class="fw-bold">2</span>
                                            <button class="btn btn-sm btn-outline-warning rounded-pill px-2 py-0"><i class="bi bi-plus-lg"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-4 mt-3">
                                    <button class="btn btn-link text-warning text-decoration-none p-0 smaller fw-bold"><i class="bi bi-trash3 me-1"></i> REMOVE</button>
                                    <button class="btn btn-link text-warning text-decoration-none p-0 smaller fw-bold"><i class="bi bi-heart me-1"></i> SAVE FOR LATER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="card border-0 shadow-sm rounded-3 p-3 sticky-top" style="top: 85px;">
                        <h6 class="fw-bold border-bottom pb-2 small text-uppercase">Cart Summary</h6>
                        <div class="d-flex justify-content-between align-items-center py-2 border-bottom mb-2">
                            <span class="small fw-medium">Subtotal</span>
                            <h5 class="fw-bold mb-0 text-dark">₦ 2,340,000</h5>
                        </div>
                        <p class="smaller text-muted mb-3"><i class="bi bi-info-circle me-1"></i> Delivery fees not included yet.</p>
                        
                        <button class="btn btn-warning w-100 py-3 fw-bold text-white shadow-sm mb-3">
                            CHECKOUT (₦ 2,340,000)
                        </button>
                        
                        <div class="bg-light p-2 rounded small">
                            <div class="d-flex gap-2 align-items-center mb-1">
                                <i class="bi bi-shield-check text-success"></i>
                                <span class="fw-bold fs-7">Easy Returns</span>
                            </div>
                            <p class="smaller text-muted mb-0">Within 7 days of delivery.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-none text-center py-5">
                <div class="bg-white p-5 rounded shadow-sm">
                    <i class="bi bi-cart-x fs-1 text-warning mb-3"></i>
                    <h4>Your cart is empty!</h4>
                    <p class="text-muted">Browse our categories and discover our best deals!</p>
                    <button class="btn btn-warning text-white px-5 py-2 fw-bold">START SHOPPING</button>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .fs-7 { font-size: 0.85rem; }
            .text-truncate-2 {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .cart-item-row:hover { background-color: #fafafa; }
            .btn-outline-warning:hover { color: white; }
        </style>
    </div>
    ${Footer()}
    `
}