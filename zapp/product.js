import { Footer } from "./footer.js";
import { Headerx } from "./header.js";


export function productpageFunction(){
    new Swiper('.productGallery', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true
});

const relatedSwiper = new Swiper('.relatedSwiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
    }
});
}
export default function ProductPage() {
    return /*html*/`
    ${Headerx()}
    <div class="bg-light min-vh-100 pb-5">
        <nav class="container pt-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-3" style="font-size: 12px;">
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">Phones & Tablets</a></li>
                <li class="breadcrumb-item active text-muted">iPhone 15 Pro</li>
            </ol>
        </nav>

        <main class="container">
            <div class="row g-3">
                <div class="col-lg-9">
                    <div class="card border-0 shadow-sm rounded-3 mb-3">
                        <div class="row g-0">
                            <div class="col-md-5 p-3">
                                <div class="swiper productGallery rounded border mb-2" style="height: 350px;">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide d-flex align-items-center justify-content-center bg-white">
                                            <img src="https://via.placeholder.com/400x400?text=Image+1" class="img-fluid" />
                                        </div>
                                        <div class="swiper-slide d-flex align-items-center justify-content-center bg-white">
                                            <img src="https://via.placeholder.com/400x400?text=Image+2" class="img-fluid" />
                                        </div>
                                    </div>
                                    <div class="swiper-button-next text-warning"></div>
                                    <div class="swiper-button-prev text-warning"></div>
                                </div>
                                <hr>
                                <div class="d-flex align-items-center gap-2">
                                    <span class="small fw-bold">SHARE THIS PRODUCT</span>
                                    <a href="#" class="text-dark fs-5"><i class="bi bi-facebook"></i></a>
                                    <a href="#" class="text-dark fs-5"><i class="bi bi-twitter-x"></i></a>
                                </div>
                            </div>

                            <div class="col-md-7 p-4">
                                <div class="d-flex justify-content-between align-items-start">
                                    <span class="badge bg-primary mb-2">Official Store</span>
                                    <i class="bi bi-heart fs-4 cursor-pointer text-muted wishlist-icon"></i>
                                </div>
                                <h4 class="fw-bold mb-1">Apple iPhone 15 Pro Max - 256GB - Natural Titanium</h4>
                                <p class="small text-muted mb-2">Brand: <a href="#" class="text-decoration-none">Apple</a> | <a href="#" class="text-decoration-none">Similar products from Apple</a></p>
                                
                                <div class="border-top border-bottom py-3 my-3">
                                    <h3 class="fw-bold mb-0">₦ 1,850,000</h3>
                                    <div class="d-flex align-items-center gap-2">
                                        <span class="text-muted text-decoration-line-through">₦ 2,100,000</span>
                                        <span class="badge bg-danger bg-opacity-10 text-danger">-12%</span>
                                    </div>
                                    <p class="text-success small fw-bold mt-2"><i class="bi bi-shield-check"></i> In Stock</p>
                                    <p class="smaller text-muted">+ shipping from ₦ 2,500 to Lagos</p>
                                </div>

                                <div class="mb-4">
                                    <h6 class="small fw-bold">VARIATIONS AVAILABLE</h6>
                                    <div class="d-flex gap-2">
                                        <button class="btn btn-outline-warning btn-sm active px-3">256GB</button>
                                        <button class="btn btn-outline-secondary btn-sm px-3">512GB</button>
                                        <button class="btn btn-outline-secondary btn-sm px-3">1TB</button>
                                    </div>
                                </div>

                                <button class="btn btn-warning w-100 py-3 fw-bold text-white shadow-sm mb-2">
                                    <i class="bi bi-cart-plus-fill me-2"></i> ADD TO CART
                                </button>
                                <p class="smaller text-center text-muted mt-2">Returns are easy. Terms and conditions apply.</p>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3">
                        <div class="card-header bg-white fw-bold py-3">Product Details</div>
                        <div class="card-body p-4">
                            <p>Experience the ultimate performance with the new A17 Pro chip. The iPhone 15 Pro features a lightweight titanium design, a powerful Pro camera system, and a versatile Action button.</p>
                            <ul class="small lh-lg">
                                <li>6.7-inch Super Retina XDR display</li>
                                <li>Titanium with textured matte glass back</li>
                                <li>A17 Pro chip for next-level gaming</li>
                                <li>48MP Main camera for super-high-resolution photos</li>
                            </ul>
                        </div>
                    </div>
                    ${ProductExtras()}
                </div>

                <div class="col-lg-3">
                    <div class="card border-0 shadow-sm rounded-3 mb-3 p-3">
                        <h6 class="fw-bold border-bottom pb-2 small text-uppercase">Delivery & Returns</h6>
                        <div class="d-flex gap-3 py-2">
                            <i class="bi bi-truck fs-4 text-warning"></i>
                            <div>
                                <h6 class="small mb-1 fw-bold">Jumia Express</h6>
                                <p class="smaller text-muted mb-0">Free delivery for orders above ₦ 15,000 in Lagos.</p>
                            </div>
                        </div>
                        <div class="d-flex gap-3 py-2">
                            <i class="bi bi-arrow-counterclockwise fs-4 text-warning"></i>
                            <div>
                                <h6 class="small mb-1 fw-bold">Return Policy</h6>
                                <p class="smaller text-muted mb-0">Free return within 7 days for all eligible items.</p>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 p-3">
                        <h6 class="fw-bold border-bottom pb-2 small text-uppercase">Seller Information</h6>
                        <h6 class="small fw-bold mt-2">Apple Official Store</h6>
                        <div class="d-flex justify-content-between align-items-center my-2">
                            <span class="smaller">Seller Score:</span>
                            <span class="badge bg-success">95%</span>
                        </div>
                        <hr>
                        <button class="btn btn-outline-warning btn-sm w-100 fw-bold">FOLLOW SELLER</button>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .cursor-pointer { cursor: pointer; }
            .wishlist-icon:hover { color: #dc3545 !important; }
            .productGallery .swiper-button-next:after, 
            .productGallery .swiper-button-prev:after { font-size: 20px; font-weight: bold; }
            .btn-outline-warning.active { background-color: #ff9900; color: white; border-color: #ff9900; }
        </style>
    </div>
    ${Footer()}
    `;
}


 function ProductExtras() {
    return /*html*/`
    <div class="card border-0 shadow-sm rounded-3 mt-3">
        <div class="card-header bg-white fw-bold py-3 text-uppercase small">Specifications</div>
        <div class="card-body p-0">
            <table class="table table-striped mb-0 small">
                <tbody>
                    <tr><td class="ps-4 fw-bold text-muted" width="30%">SKU</td><td class="ps-3">AP-IP15PM-001</td></tr>
                    <tr><td class="ps-4 fw-bold text-muted">Model</td><td class="ps-3">A3106</td></tr>
                    <tr><td class="ps-4 fw-bold text-muted">Weight (kg)</td><td class="ps-3">0.221</td></tr>
                    <tr><td class="ps-4 fw-bold text-muted">Color</td><td class="ps-3">Natural Titanium</td></tr>
                    <tr><td class="ps-4 fw-bold text-muted">Main Material</td><td class="ps-3">Titanium/Glass</td></tr>
                    <tr><td class="ps-4 fw-bold text-muted">Operating System</td><td class="ps-3">iOS 17</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-3 mt-3">
        <div class="card-header bg-white d-flex justify-content-between align-items-center py-3">
            <span class="fw-bold text-uppercase small">Verified Customer Reviews</span>
            <a href="#" class="text-warning text-decoration-none small fw-bold">SEE ALL <i class="bi bi-chevron-right"></i></a>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4 border-end">
                    <h6 class="text-uppercase small fw-bold text-muted mb-3">Verified Ratings (102)</h6>
                    <div class="bg-light p-4 text-center rounded">
                        <h2 class="fw-bold text-warning mb-0">4.8/5</h2>
                        <div class="text-warning mb-1">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i>
                        </div>
                        <p class="small text-muted mb-0">102 verified ratings</p>
                    </div>
                </div>
                <div class="col-md-8 ps-md-4">
                    <div class="review-item border-bottom pb-3 mb-3">
                        <div class="d-flex justify-content-between align-items-center mb-1">
                            <div class="text-warning small">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                            </div>
                            <span class="smaller text-muted">2024-03-15</span>
                        </div>
                        <h6 class="small fw-bold">Best Phone Ever!</h6>
                        <p class="smaller text-dark mb-1">The titanium build is super light compared to my old 14 Pro. Battery life is insane.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-success smaller fw-bold"><i class="bi bi-patch-check-fill"></i> Verified Purchase</span>
                            <span class="smaller text-muted">by Chidi O.</span>
                        </div>
                    </div>
                    <div class="review-item pb-2">
                        <div class="text-warning small mb-1">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>
                        </div>
                        <h6 class="small fw-bold">Fast Delivery</h6>
                        <p class="smaller text-dark mb-1">Great product. Jumia Express delivered in less than 24 hours to Lekki.</p>
                        <span class="text-success smaller fw-bold"><i class="bi bi-patch-check-fill"></i> Verified Purchase</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="mt-4">
        <div class="bg-white border-bottom p-3 rounded-top d-flex justify-content-between align-items-center shadow-sm">
            <h6 class="mb-0 fw-bold text-uppercase">Customers who viewed this also viewed</h6>
        </div>
        <div class="bg-white p-3 rounded-bottom shadow-sm">
            <div class="swiper relatedSwiper position-relative px-4">
                <div class="swiper-wrapper">
                    ${[1, 2, 3, 4, 5, 6, 7, 8].map(i => `
                        <div class="swiper-slide h-auto">
                            <div class="card h-100 border-0 product-card-sm text-center">
                                <img src="https://via.placeholder.com/150?text=Product+${i}" class="card-img-top p-2 rounded" alt="related">
                                <div class="card-body p-1">
                                    <p class="card-text mb-1 text-truncate-2 smaller">Related Smartphone Model Series ${i}</p>
                                    <h6 class="fw-bold mb-0 smaller">₦ 1,200,000</h6>
                                    <small class="text-muted text-decoration-line-through smaller">₦ 1,500,000</small>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="swiper-button-next text-warning swiper-nav-small"></div>
                <div class="swiper-button-prev text-warning swiper-nav-small"></div>
            </div>
        </div>
    </section>

    <style>
        .smaller { font-size: 11px; }
        .text-truncate-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            height: 2.8em;
        }
        .product-card-sm:hover { box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
        .swiper-nav-small::after { font-size: 16px !important; font-weight: bold; }
        .table-striped > tbody > tr:nth-of-type(odd) { --bs-table-accent-bg: rgba(0,0,0,0.02); }
    </style>
    `;
}