import { Footer } from "./footer.js";
import { Headerx } from "./header.js";

export default function SearchResults() {
    const searchQuery = "iPhone 15 Pro Max"; // Example dynamic query

    return /*html*/`
    ${Headerx()}
    <div class="bg-light min-vh-100 pb-5">
        <div class="bg-white border-bottom py-3 mb-4 shadow-sm">
            <div class="container d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                <div>
                    <h5 class="mb-1 fw-bold text-dark">Results for "${searchQuery}"</h5>
                    <p class="text-muted small mb-0">1,240 items found</p>
                </div>
                <div class="d-flex align-items-center gap-3 mt-3 mt-md-0">
                    <span class="small text-muted d-none d-lg-block">Sort by:</span>
                    <select class="form-select form-select-sm border-secondary-subtle" style="width: 180px;">
                        <option selected>Popularity</option>
                        <option>Newest Arrivals</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Product Rating</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row g-3">
                <aside class="col-lg-3">
                    <div class="card border-0 shadow-sm rounded-3 mb-3">
                        <div class="card-body p-0">
                            <div class="p-3 border-bottom">
                                <h6 class="fw-bold small text-uppercase mb-3">Shipped From</h6>
                                <div class="form-check mb-2">
                                    <input class="form-check-input custom-check" type="checkbox" id="shippedOverseas">
                                    <label class="form-check-label small" for="shippedOverseas">Shipped from overseas</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input custom-check" type="checkbox" id="shippedLocal">
                                    <label class="form-check-label small" for="shippedLocal">Shipped from Nigeria</label>
                                </div>
                            </div>

                            <div class="p-3 border-bottom">
                                <h6 class="fw-bold small text-uppercase mb-3">Brand</h6>
                                <input type="text" class="form-control form-control-sm mb-3" placeholder="Search Brand...">
                                <div class="filter-scroll px-1" style="max-height: 150px; overflow-y: auto;">
                                    ${['Apple', 'Samsung', 'Xiaomi', 'Infinix', 'Tecno', 'Huawei'].map(brand => `
                                        <div class="form-check mb-2">
                                            <input class="form-check-input custom-check" type="checkbox" id="${brand}">
                                            <label class="form-check-label small" for="${brand}">${brand}</label>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="p-3">
                                <h6 class="fw-bold small text-uppercase mb-3">Product Rating</h6>
                                ${[4, 3, 2, 1].map(star => `
                                    <div class="form-check mb-2 d-flex align-items-center">
                                        <input class="form-check-input custom-check me-2" type="radio" name="rating" id="star${star}">
                                        <label class="form-check-label small text-warning" for="star${star}">
                                            ${'<i class="bi bi-star-fill"></i>'.repeat(star)}${'<i class="bi bi-star"></i>'.repeat(5 - star)}
                                            <span class="text-muted ms-1">& Up</span>
                                        </label>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="rounded-3 overflow-hidden d-none d-lg-block shadow-sm">
                        <img src="https://via.placeholder.com/300x400?text=Jumia+Express+Ad" class="img-fluid" alt="Ad">
                    </div>
                </aside>

                <div class="col-lg-9">
                    <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                        ${Array.from({length: 8}).map((_, i) => `
                            <div class="col">
                                <div class="card h-100 border-0 shadow-sm product-card transition-all">
                                    <div class="position-relative">
                                        <img src="https://via.placeholder.com/220x220/f8f9fa/333?text=iPhone+15+Pro" class="card-img-top p-2" alt="product">
                                        <div class="position-absolute top-0 end-0 p-2">
                                            <button class="btn btn-sm btn-light rounded-circle shadow-sm wishlist-btn">
                                                <i class="bi bi-heart"></i>
                                            </button>
                                        </div>
                                        <span class="badge bg-info text-white position-absolute bottom-0 start-0 m-2 small">Jumia Express</span>
                                    </div>
                                    <div class="card-body p-2 d-flex flex-column">
                                        <p class="card-text mb-1 text-truncate-2 small fw-medium">Apple iPhone 15 Pro Max - 256GB - Titanium Gray - 1 Year Warranty</p>
                                        <h6 class="fw-bold mb-0 text-dark">₦ 1,850,000</h6>
                                        <div class="d-flex align-items-center gap-1 mb-2">
                                            <small class="text-muted text-decoration-line-through smaller">₦ 2,100,000</small>
                                            <span class="badge bg-danger bg-opacity-10 text-danger smaller">-12%</span>
                                        </div>
                                        <div class="mt-auto">
                                            <div class="d-flex align-items-center gap-1 mb-3">
                                                <div class="text-warning small" style="font-size: 10px;">
                                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                                </div>
                                                <span class="text-muted smaller">(102)</span>
                                            </div>
                                            <button class="btn btn-warning w-100 btn-sm fw-bold text-white shadow-sm add-to-cart">
                                                <i class="bi bi-cart-plus me-1"></i> ADD TO CART
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="d-flex justify-content-center mt-5">
                        <nav aria-label="Search results pages">
                            <ul class="pagination pagination-sm shadow-sm">
                                <li class="page-item"><a class="page-link border-0 text-dark" href="#"><i class="bi bi-chevron-left"></i></a></li>
                                <li class="page-item active"><a class="page-link border-0 bg-warning text-white fw-bold" href="#">1</a></li>
                                <li class="page-item"><a class="page-link border-0 text-dark" href="#">2</a></li>
                                <li class="page-item"><a class="page-link border-0 text-dark" href="#">3</a></li>
                                <li class="page-item disabled"><span class="page-link border-0 text-muted">...</span></li>
                                <li class="page-item"><a class="page-link border-0 text-dark" href="#">25</a></li>
                                <li class="page-item"><a class="page-link border-0 text-dark" href="#"><i class="bi bi-chevron-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .smaller { font-size: 11px; }
            .text-truncate-2 {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                line-height: 1.4;
                height: 2.8em;
            }
            .product-card:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,0,0,0.1) !important; }
            .transition-all { transition: all 0.25s ease-in-out; }
            .custom-check:checked { background-color: #ff9900; border-color: #ff9900; }
            .filter-scroll::-webkit-scrollbar { width: 4px; }
            .filter-scroll::-webkit-scrollbar-thumb { background: #dee2e6; border-radius: 10px; }
            .wishlist-btn:hover { background-color: #ffeded; border-color: #ff9999; color: #ff0000; }
            .add-to-cart:hover { background-color: #e68a00; border-color: #e68a00; }
        </style>
    </div>
    ${Footer()}
    `;
}