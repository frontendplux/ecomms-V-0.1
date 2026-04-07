export default function VendorPromotions() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container-fluid px-4">
                <span class="navbar-brand fw-bold text-warning mb-0">PROMOTIONS & CAMPAIGNS</span>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-warning btn-sm fw-bold px-3 text-white">CREATE VOUCHER</button>
                </div>
            </div>
        </nav>

        <main class="container px-4 py-4">
            <h6 class="fw-bold small text-uppercase mb-3">Available Campaigns</h6>
            <div class="row g-4 mb-5">
                <div class="col-xl-6">
                    <div class="card border-0 shadow-sm rounded-4 overflow-hidden position-relative campaign-card">
                        <div class="row g-0">
                            <div class="col-4 bg-warning d-flex align-items-center justify-content-center p-4">
                                <div class="text-center text-white">
                                    <h2 class="fw-bold mb-0">14th</h2>
                                    <p class="smaller fw-bold text-uppercase mb-0 ls-1">Anniversary</p>
                                </div>
                            </div>
                            <div class="col-8 p-4 bg-white">
                                <div class="d-flex justify-content-between">
                                    <h5 class="fw-bold mb-1">Jumia Anniversary 2026</h5>
                                    <span class="badge bg-danger rounded-pill px-3 py-2 smaller">CLINICAL STAGE</span>
                                </div>
                                <p class="smaller text-muted mb-3">Join the biggest sale of the year. Boost your visibility by up to 500%.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="smaller">
                                        <span class="d-block text-muted">Submission ends in:</span>
                                        <span class="fw-bold text-danger"><i class="bi bi-clock-history"></i> 3 Days, 14 Hours</span>
                                    </div>
                                    <button class="btn btn-dark btn-sm fw-bold px-4">JOIN CAMPAIGN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6">
                    <div class="card border-0 shadow-sm rounded-4 overflow-hidden position-relative campaign-card">
                        <div class="row g-0">
                            <div class="col-4 bg-primary d-flex align-items-center justify-content-center p-4">
                                <i class="bi bi-lightning-charge-fill text-white display-4"></i>
                            </div>
                            <div class="col-8 p-4 bg-white">
                                <h5 class="fw-bold mb-1">Daily Flash Sales</h5>
                                <p class="smaller text-muted mb-3">Submit products for 24-hour deep discount slots. High volume, fast turnover.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="smaller">
                                        <span class="d-block text-muted">Next Slot:</span>
                                        <span class="fw-bold text-dark">Monday, April 6</span>
                                    </div>
                                    <button class="btn btn-outline-primary btn-sm fw-bold px-4">SUBMIT SKU</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                <div class="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
                    <h6 class="mb-0 fw-bold small text-uppercase">My Registered Products (4)</h6>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-light border small active">All</button>
                        <button class="btn btn-light border small">Approved</button>
                        <button class="btn btn-light border small">Pending</button>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table align-middle mb-0 small">
                        <thead class="table-light text-muted">
                            <tr>
                                <th class="ps-4">Product</th>
                                <th>Campaign</th>
                                <th>Promo Price</th>
                                <th>Sales Impact</th>
                                <th>Status</th>
                                <th class="text-end pe-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="ps-4">
                                    <div class="d-flex align-items-center gap-2">
                                        <img src="https://via.placeholder.com/40" class="rounded border">
                                        <span class="fw-bold smaller text-dark">Galaxy S24 Ultra</span>
                                    </div>
                                </td>
                                <td><span class="smaller fw-medium">Anniversary Sale</span></td>
                                <td><span class="text-success fw-bold">₦ 1,300,000</span> <br><small class="text-muted text-decoration-line-through smaller">₦ 1,450,000</small></td>
                                <td>
                                    <span class="smaller text-success"><i class="bi bi-graph-up-arrow"></i> +45% Clicks</span>
                                </td>
                                <td><span class="badge bg-success bg-opacity-10 text-success rounded-pill px-3">Approved</span></td>
                                <td class="text-end pe-4">
                                    <button class="btn btn-outline-secondary btn-sm border-0"><i class="bi bi-three-dots-vertical"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="ps-4">
                                    <div class="d-flex align-items-center gap-2">
                                        <img src="https://via.placeholder.com/40" class="rounded border">
                                        <span class="fw-bold smaller text-dark">AirPods Pro</span>
                                    </div>
                                </td>
                                <td><span class="smaller fw-medium">Weekly Deals</span></td>
                                <td><span class="text-success fw-bold">₦ 410,000</span></td>
                                <td><span class="smaller text-muted">Calculating...</span></td>
                                <td><span class="badge bg-warning bg-opacity-10 text-warning rounded-pill px-3">Pending Review</span></td>
                                <td class="text-end pe-4">
                                    <button class="btn btn-outline-danger btn-sm border-0 smaller fw-bold">WITHDRAW</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="mt-4 p-3 bg-warning bg-opacity-10 rounded-3 border-start border-4 border-warning">
                <div class="d-flex gap-3">
                    <i class="bi bi-lightning-fill text-warning fs-4"></i>
                    <div>
                        <h6 class="smaller fw-bold mb-1">PROMOTION TIP</h6>
                        <p class="smaller text-muted mb-0">Products with a discount of **at least 15%** are 3x more likely to be featured on the Jumia Home Page during major campaigns.</p>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .ls-1 { letter-spacing: 1px; }
            .campaign-card { transition: transform 0.2s; cursor: pointer; }
            .campaign-card:hover { transform: scale(1.01); }
            .badge { font-weight: 600; }
            .table > :not(caption) > * > * { padding: 1rem 0.5rem; }
        </style>
    </div>
    `;
}