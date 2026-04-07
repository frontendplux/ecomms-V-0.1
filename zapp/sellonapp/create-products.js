export default function CreateProduct() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center">
                    <a href="/vendor/products" class="btn btn-outline-light btn-sm me-3"><i class="bi bi-arrow-left"></i></a>
                    <span class="navbar-brand fw-bold text-warning mb-0">ADD NEW PRODUCT</span>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-outline-light btn-sm fw-bold px-3">SAVE DRAFT</button>
                    <button class="btn btn-warning btn-sm fw-bold px-3 text-white">SUBMIT FOR REVIEW</button>
                </div>
            </div>
        </nav>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    
                    <div class="card border-0 shadow-sm rounded-3 mb-4 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-3 small text-uppercase text-warning">1. Product Information</h6>
                        <div class="row g-3">
                            <div class="col-12">
                                <label class="smaller fw-bold text-muted mb-1">PRODUCT NAME</label>
                                <input type="text" class="form-control py-2" placeholder="e.g. Apple iPhone 15 Pro Max - 256GB - Titanium" required>
                                <div class="smaller text-muted mt-1">Include Brand, Model, and Key Specs for better search results.</div>
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">CATEGORY</label>
                                <select class="form-select py-2">
                                    <option>Select Category</option>
                                    <option>Phones & Tablets</option>
                                    <option>Electronics</option>
                                    <option>Fashion</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">BRAND</label>
                                <input type="text" class="form-control py-2" placeholder="e.g. Samsung">
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 mb-4 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-3 small text-uppercase text-warning">2. Product Images</h6>
                        <p class="smaller text-muted">Upload at least 3 images. Main image must be on a white background.</p>
                        <div class="d-flex flex-wrap gap-3 mt-3">
                            <div class="upload-box d-flex flex-column align-items-center justify-content-center border-dashed rounded-3 cursor-pointer">
                                <i class="bi bi-camera fs-2 text-muted"></i>
                                <span class="smaller text-muted mt-2">Main Image</span>
                            </div>
                            <div class="upload-box d-flex flex-column align-items-center justify-content-center border-dashed rounded-3 opacity-50">
                                <i class="bi bi-plus-lg fs-3"></i>
                            </div>
                            <div class="upload-box d-flex flex-column align-items-center justify-content-center border-dashed rounded-3 opacity-50">
                                <i class="bi bi-plus-lg fs-3"></i>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 mb-4 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-3 small text-uppercase text-warning">3. Pricing & Inventory</h6>
                        <div class="row g-3">
                            <div class="col-md-4">
                                <label class="smaller fw-bold text-muted mb-1">PRICE (₦)</label>
                                <input type="number" class="form-control py-2" placeholder="0.00">
                            </div>
                            <div class="col-md-4">
                                <label class="smaller fw-bold text-muted mb-1">SALE PRICE (Optional)</label>
                                <input type="number" class="form-control py-2" placeholder="Must be < Price">
                            </div>
                            <div class="col-md-4">
                                <label class="smaller fw-bold text-muted mb-1">QUANTITY</label>
                                <input type="number" class="form-control py-2" placeholder="Available Stock">
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">SKU (Seller Internal Code)</label>
                                <input type="text" class="form-control py-2" placeholder="e.g. IP15-TI-256">
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-3 small text-uppercase text-warning">4. Description</h6>
                        <div class="mb-3">
                            <label class="smaller fw-bold text-muted mb-1">PRODUCT DESCRIPTION</label>
                            <textarea class="form-control" rows="5" placeholder="Highlight features, warranty, and what is in the box..."></textarea>
                        </div>
                        <div class="bg-light p-3 rounded smaller text-muted">
                            <i class="bi bi-info-circle-fill text-warning me-2"></i>
                            Products with detailed descriptions sell **35% faster** on Jumia.
                        </div>
                    </div>

                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .border-dashed { border: 2px dashed #dee2e6; }
            .upload-box {
                width: 120px;
                height: 120px;
                background-color: #fff;
                transition: all 0.2s;
            }
            .upload-box:hover {
                border-color: #ff9900;
                background-color: #fff9f0;
            }
            .form-control:focus, .form-select:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.15);
            }
            .cursor-pointer { cursor: pointer; }
        </style>
    </div>
    `;
}