export default function VoucherCodes() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="container pt-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-3" style="font-size: 12px;">
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">My Account</a></li>
                <li class="breadcrumb-item active text-muted">Voucher Codes</li>
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
                                <i class="bi bi-ticket-perforated me-3 fs-5 text-warning"></i> Voucher Codes
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-heart me-3 fs-5 text-secondary"></i> Saved Items
                            </a>
                        </div>
                    </div>
                </aside>

                <div class="col-lg-9">
                    <div class="card border-0 shadow-sm rounded-3 mb-4">
                        <div class="card-body p-4">
                            <h6 class="fw-bold mb-3 small text-uppercase">Add a Voucher</h6>
                            <div class="row g-2">
                                <div class="col-sm-8 col-md-9">
                                    <input type="text" class="form-control form-control-lg border-secondary-subtle text-uppercase fw-bold ls-1" placeholder="ENTER VOUCHER CODE" style="font-size: 0.9rem;">
                                </div>
                                <div class="col-sm-4 col-md-3">
                                    <button class="btn btn-warning w-100 h-100 text-white fw-bold shadow-sm">ADD VOUCHER</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="card-header bg-white p-0 border-bottom">
                            <div class="d-flex">
                                <button class="btn flex-fill py-3 fw-bold small border-bottom border-3 border-warning rounded-0 text-warning">ACTIVE (2)</button>
                                <button class="btn flex-fill py-3 fw-bold small border-0 rounded-0 text-muted opacity-75">INACTIVE / EXPIRED</button>
                            </div>
                        </div>

                        <div class="card-body p-4 bg-light">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="voucher-card d-flex bg-white rounded-3 shadow-sm overflow-hidden">
                                        <div class="voucher-left bg-warning d-flex flex-column justify-content-center align-items-center text-white px-3">
                                            <i class="bi bi-tag-fill fs-3"></i>
                                            <span class="fw-bold small">OFF</span>
                                        </div>
                                        <div class="voucher-right p-3 flex-grow-1 position-relative">
                                            <h5 class="fw-bold mb-1 text-dark">₦ 5,000</h5>
                                            <p class="smaller text-muted mb-2">Min. Spend: ₦ 50,000</p>
                                            <div class="d-flex justify-content-between align-items-center border-top pt-2">
                                                <code class="text-dark fw-bold">JUMIAFREE5</code>
                                                <span class="smaller text-danger fw-bold">Ends: 30 Apr</span>
                                            </div>
                                            <div class="ticket-cut top"></div>
                                            <div class="ticket-cut bottom"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="voucher-card d-flex bg-white rounded-3 shadow-sm overflow-hidden">
                                        <div class="voucher-left bg-primary d-flex flex-column justify-content-center align-items-center text-white px-3">
                                            <i class="bi bi-truck fs-3"></i>
                                            <span class="fw-bold small">FREE</span>
                                        </div>
                                        <div class="voucher-right p-3 flex-grow-1 position-relative">
                                            <h5 class="fw-bold mb-1 text-dark">Free Delivery</h5>
                                            <p class="smaller text-muted mb-2">Valid on Jumia Express items</p>
                                            <div class="d-flex justify-content-between align-items-center border-top pt-2">
                                                <code class="text-dark fw-bold">SHIPFREE24</code>
                                                <span class="smaller text-danger fw-bold">Ends: 15 Apr</span>
                                            </div>
                                            <div class="ticket-cut top"></div>
                                            <div class="ticket-cut bottom"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .ls-1 { letter-spacing: 1px; }
            .active-nav { color: #ff9900 !important; font-weight: bold; border-left: 4px solid #ff9900 !important; border-radius: 0 !important; }
            
            /* Ticket Styling */
            .voucher-card { height: 120px; border: 1px solid #eee; }
            .voucher-left { min-width: 80px; position: relative; }
            .voucher-left::after { 
                content: ""; position: absolute; right: -5px; top: 10%; bottom: 10%;
                border-right: 2px dotted #fff; opacity: 0.5;
            }
            .voucher-right .ticket-cut {
                position: absolute; left: -10px; width: 20px; height: 20px;
                background-color: #f8f9fa; border-radius: 50%; border: 1px solid #eee;
            }
            .ticket-cut.top { top: -10px; }
            .ticket-cut.bottom { bottom: -10px; }
            
            code { background: #f0f0f0; padding: 2px 8px; border-radius: 4px; font-size: 0.85rem; }
        </style>
    </div>
    `;
}