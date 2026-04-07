export default function CreateVoucher() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center">
                    <a href="/vendor/promotions" class="btn btn-outline-light btn-sm me-3"><i class="bi bi-arrow-left"></i></a>
                    <span class="navbar-brand fw-bold text-warning mb-0">CREATE NEW VOUCHER</span>
                </div>
                <button class="btn btn-warning btn-sm fw-bold px-4 text-white shadow-sm">ACTIVATE VOUCHER</button>
            </div>
        </nav>

        <main class="container">
            <div class="row g-4 justify-content-center">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm rounded-3 mb-4 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-3 small text-uppercase text-warning">1. Basic Details</h6>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">VOUCHER NAME</label>
                                <input type="text" class="form-control py-2" placeholder="e.g. Easter Special 2026">
                                <div class="smaller text-muted mt-1">Internal name for your records.</div>
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">VOUCHER CODE</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light smaller fw-bold">GADGET-</span>
                                    <input type="text" class="form-control py-2 text-uppercase fw-bold" placeholder="EASTER10">
                                </div>
                                <div class="smaller text-muted mt-1">Customers enter this at checkout.</div>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 mb-4 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-3 small text-uppercase text-warning">2. Discount Settings</h6>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">DISCOUNT TYPE</label>
                                <div class="d-flex gap-2">
                                    <input type="radio" class="btn-check" name="discountType" id="fixed" checked>
                                    <label class="btn btn-outline-secondary btn-sm flex-fill fw-bold py-2" for="fixed">Fixed Amount (₦)</label>
                                    
                                    <input type="radio" class="btn-check" name="discountType" id="percentage">
                                    <label class="btn btn-outline-secondary btn-sm flex-fill fw-bold py-2" for="percentage">Percentage (%)</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">DISCOUNT VALUE</label>
                                <input type="number" class="form-control py-2" placeholder="e.g. 5000">
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">MINIMUM ORDER VALUE (₦)</label>
                                <input type="number" class="form-control py-2" placeholder="e.g. 20000">
                                <div class="smaller text-muted mt-1">Voucher only applies above this amount.</div>
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">TOTAL USAGE LIMIT</label>
                                <input type="number" class="form-control py-2" placeholder="e.g. 100">
                                <div class="smaller text-muted mt-1">Max number of times this can be used.</div>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-3 small text-uppercase text-warning">3. Period & Visibility</h6>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">START DATE</label>
                                <input type="date" class="form-control py-2">
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">END DATE</label>
                                <input type="date" class="form-control py-2">
                            </div>
                            <div class="col-12">
                                <div class="form-check form-switch mt-2">
                                    <input class="form-check-input custom-switch" type="checkbox" id="publicVoucher" checked>
                                    <label class="form-check-label small fw-bold ms-2" for="publicVoucher">Display on Store Page</label>
                                    <p class="smaller text-muted mb-0">If off, only customers with the direct link/code can use it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="sticky-top" style="top: 80px; z-index: 1;">
                        <div class="card border-0 shadow-sm rounded-4 bg-warning text-white p-4 mb-4 text-center">
                            <p class="smaller fw-bold text-uppercase mb-1 opacity-75">Customer Preview</p>
                            <div class="border border-white border-2 border-dashed p-3 rounded-3 mt-2">
                                <h4 class="fw-bold mb-0">₦ 5,000 OFF</h4>
                                <p class="smaller mb-2">Min. Spend ₦ 20,000</p>
                                <code class="bg-white text-warning fw-bold px-3 py-1 rounded">GADGET-EASTER10</code>
                            </div>
                        </div>

                        <div class="card border-0 shadow-sm rounded-3 p-3">
                            <h6 class="smaller fw-bold text-uppercase border-bottom pb-2 mb-3">Budget Summary</h6>
                            <div class="d-flex justify-content-between smaller mb-2">
                                <span class="text-muted">Max Liability:</span>
                                <span class="fw-bold text-danger">₦ 500,000</span>
                            </div>
                            <div class="d-flex justify-content-between smaller mb-3">
                                <span class="text-muted">Est. Growth:</span>
                                <span class="fw-bold text-success">+15% Conversion</span>
                            </div>
                            <div class="bg-light p-2 rounded smaller text-muted italic">
                                <i class="bi bi-info-circle me-1"></i> 
                                Ensure your margins can cover the discount amount.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .border-dashed { border-style: dashed !important; }
            .custom-switch:checked { background-color: #ff9900; border-color: #ff9900; }
            .form-control:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.15);
            }
            .italic { font-style: italic; }
            .ls-1 { letter-spacing: 1px; }
        </style>
    </div>
    `;
}