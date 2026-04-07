export default function ProductCard() {
    return /*html*/`
    <div class="col-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100 border-0 shadow-sm product-hover position-relative">
            <span class="badge bg-warning text-white position-absolute top-0 start-0 m-2 smaller fw-bold">-25%</span>
            
            <div class="p-3">
                <img src="https://via.placeholder.com/200?text=Product+Image" class="card-img-top rounded" alt="Product">
            </div>

            <div class="card-body p-3 pt-0">
                <p class="smaller text-muted mb-1 text-uppercase">Samsung</p>
                <h6 class="card-title smaller fw-normal text-dark text-truncate-2 mb-2">
                    Galaxy S24 Ultra 5G - 6.8" - 12GB RAM - 512GB - Titanium Gray
                </h6>

                <div class="mb-1">
                    <span class="fw-bold fs-6">₦ 1,450,000</span><br>
                    <small class="text-muted text-decoration-line-through smaller">₦ 1,933,000</small>
                </div>

                <div class="d-flex align-items-center justify-content-between mt-2">
                    <div class="smaller text-warning">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                        <span class="text-muted ms-1">(124)</span>
                    </div>
                    <img src="https://via.placeholder.com/50x15?text=Express" alt="Jumia Express">
                </div>
            </div>

            <div class="p-2 border-top bg-light">
                <button class="btn btn-warning w-100 text-white fw-bold btn-sm py-2 shadow-sm">ADD TO CART</button>
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
            height: 32px;
        }
        .product-hover:hover {
            transform: translateY(-5px);
            transition: transform 0.3s ease;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
    </style>
    `;
}



export  function ProductDetail() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <main class="container py-4">
            <div class="row g-3">
                <div class="col-lg-9">
                    <div class="card border-0 shadow-sm rounded-3 p-3 mb-3">
                        <div class="row g-4">
                            <div class="col-md-5">
                                <div class="main-img border rounded p-2 mb-2">
                                    <img src="https://via.placeholder.com/400" class="img-fluid" id="currentImg">
                                </div>
                                <div class="d-flex gap-2 thumb-gallery overflow-auto pb-2">
                                    <img src="https://via.placeholder.com/60" class="border rounded cursor-pointer active-thumb">
                                    <img src="https://via.placeholder.com/60" class="border rounded cursor-pointer">
                                    <img src="https://via.placeholder.com/60" class="border rounded cursor-pointer">
                                </div>
                            </div>

                            <div class="col-md-7">
                                <div class="d-flex justify-content-between">
                                    <span class="badge bg-primary text-white mb-2">Official Store</span>
                                    <button class="btn btn-link p-0 text-dark"><i class="bi bi-heart fs-5"></i></button>
                                </div>
                                <h4 class="fw-bold mb-1">Samsung Galaxy S24 Ultra 5G - Titanium Gray</h4>
                                <p class="smaller text-muted">Brand: <a href="#" class="text-warning">Samsung</a> | <a href="#" class="text-warning">Similar products</a></p>
                                
                                <hr class="opacity-10">
                                
                                <div class="py-2">
                                    <h3 class="fw-bold text-dark mb-1">₦ 1,450,000</h3>
                                    <p class="text-muted smaller">
                                        <span class="text-decoration-line-through">₦ 1,933,000</span>
                                        <span class="badge bg-warning bg-opacity-10 text-warning ms-2">-25%</span>
                                    </p>
                                    <p class="smaller text-success fw-bold"><i class="bi bi-shield-check"></i> 1 Year Warranty Included</p>
                                </div>

                                <div class="mt-4">
                                    <h6 class="smaller fw-bold mb-2">VARIATIONS</h6>
                                    <div class="d-flex gap-2">
                                        <button class="btn btn-outline-warning btn-sm px-3 fw-bold active-variant">512GB</button>
                                        <button class="btn btn-outline-secondary btn-sm px-3">1TB</button>
                                    </div>
                                </div>

                                <div class="mt-4 d-grid gap-2">
                                    <button class="btn btn-warning py-3 text-white fw-bold shadow">
                                        <i class="bi bi-cart-plus me-2"></i> ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-3">Product Details</h6>
                        <p class="small text-muted">The Galaxy S24 Ultra features a stunning 6.8-inch Dynamic AMOLED 2X display, a revolutionary 200MP camera system, and the powerful Snapdragon 8 Gen 3 chipset.</p>
                        <ul class="small text-muted ps-3">
                            <li>200MP Main Camera with AI enhancements</li>
                            <li>Titanium Frame for extra durability</li>
                            <li>Integrated S-Pen for productivity</li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="card border-0 shadow-sm rounded-3 p-3 mb-3">
                        <h6 class="fw-bold border-bottom pb-2 smaller text-uppercase">Delivery & Returns</h6>
                        <div class="mt-3">
                            <div class="d-flex gap-3 mb-3">
                                <i class="bi bi-truck fs-4 text-secondary"></i>
                                <div>
                                    <p class="smaller fw-bold mb-0">Doorstep Delivery</p>
                                    <p class="smaller text-muted mb-0">Delivery ₦ 2,500. Ready by 08 Apr.</p>
                                </div>
                            </div>
                            <div class="d-flex gap-3">
                                <i class="bi bi-arrow-return-left fs-4 text-secondary"></i>
                                <div>
                                    <p class="smaller fw-bold mb-0">Return Policy</p>
                                    <p class="smaller text-muted mb-0">Free return within 7 days for Official Store items.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 p-3">
                        <h6 class="fw-bold border-bottom pb-2 smaller text-uppercase">Seller Information</h6>
                        <div class="mt-2">
                            <h6 class="small fw-bold">Samsung Official Store</h6>
                            <div class="d-flex justify-content-between align-items-center mt-2">
                                <span class="smaller text-muted">Seller Score:</span>
                                <span class="badge bg-success small">98%</span>
                            </div>
                            <button class="btn btn-link text-warning text-decoration-none smaller fw-bold w-100 mt-2 p-0">FOLLOW SELLER</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .cursor-pointer { cursor: pointer; }
            .active-thumb { border: 2px solid #ff9900 !important; }
            .active-variant { background-color: #fff9f0; border-color: #ff9900; color: #ff9900; }
        </style>
    </div>
    `;
}