export default function VendorEmptyProducts() {
    return /*html*/`
    <div class="bg-light min-vh-100">
        <nav class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container-fluid px-4">
                <a class="navbar-brand fw-bold text-warning" href="#">SELLER CENTER</a>
                <span class="text-muted small d-none d-md-inline">Inventory Management</span>
            </div>
        </nav>

        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <div class="mb-5 position-relative">
                        <div class="bg-white shadow-sm rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 150px; height: 150px;">
                            <i class="bi bi-box-seam text-warning opacity-25" style="font-size: 5rem;"></i>
                        </div>
                        <div class="position-absolute top-50 start-50 translate-middle">
                             <i class="bi bi-plus-circle-fill text-warning fs-1 shadow rounded-circle bg-white"></i>
                        </div>
                    </div>

                    <h3 class="fw-bold text-dark mb-3">Your shop is empty!</h3>
                    <p class="text-muted mb-5 px-md-5">
                        You haven't added any products to your store yet. Start uploading your items to reach millions of customers on Jumia.
                    </p>

                    <div class="row g-4 text-start mb-5">
                        <div class="col-md-6">
                            <div class="card border-0 shadow-sm h-100 p-4 hover-lift">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="bg-warning bg-opacity-10 p-2 rounded me-3">
                                        <i class="bi bi-file-earmark-plus text-warning fs-4"></i>
                                    </div>
                                    <h6 class="fw-bold mb-0">Add a Single Product</h6>
                                </div>
                                <p class="smaller text-muted">Best for beginners. Upload one item at a time with our easy step-by-step form.</p>
                                <button class="btn btn-warning text-white fw-bold w-100 mt-auto py-2 smaller">CREATE PRODUCT</button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card border-0 shadow-sm h-100 p-4 hover-lift border-start border-4 border-primary">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="bg-primary bg-opacity-10 p-2 rounded me-3">
                                        <i class="bi bi-layers text-primary fs-4"></i>
                                    </div>
                                    <h6 class="fw-bold mb-0">Bulk Upload (CSV)</h6>
                                </div>
                                <p class="smaller text-muted">Have a large inventory? Upload hundreds of products at once using our Excel template.</p>
                                <button class="btn btn-outline-primary fw-bold w-100 mt-auto py-2 smaller">UPLOAD FILE</button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3 rounded-3 d-inline-flex align-items-center shadow-sm">
                        <i class="bi bi-journal-text text-muted me-2"></i>
                        <span class="smaller text-muted">Need help? </span>
                        <a href="#" class="text-warning fw-bold smaller text-decoration-none ms-1">Visit Jumia University for a Tutorial</a>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .smaller { font-size: 12px; }
            .hover-lift:hover {
                transform: translateY(-5px);
                transition: transform 0.2s ease-in-out;
            }
            .bg-opacity-10 { background-color: rgba(255, 153, 0, 0.1) !important; }
            .btn-warning:hover { opacity: 0.9; }
        </style>
    </div>
    `;
}