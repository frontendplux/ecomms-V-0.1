export default function VendorPayment() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <span class="navbar-brand fw-bold text-warning mb-0">FINANCIAL OVERVIEW</span>
                <div class="d-flex align-items-center gap-3">
                    <button class="btn btn-outline-warning btn-sm fw-bold px-3">
                        <i class="bi bi-download me-1"></i> EXPORT TAX INVOICE
                    </button>
                </div>
            </div>
        </nav>

        <main class="container-fluid px-4">
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                        <p class="smaller fw-bold text-muted text-uppercase mb-1">Available for Payout</p>
                        <h2 class="fw-bold text-dark mb-3">₦ 1,240,500.00</h2>
                        <div class="d-flex align-items-center gap-2 mb-3">
                            <span class="badge bg-success bg-opacity-10 text-success fw-bold">Next Payout: Wednesday</span>
                        </div>
                        <button class="btn btn-warning w-100 text-white fw-bold py-2 shadow-sm">REQUEST EARLY PAYOUT</button>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white border-start border-4 border-info">
                        <p class="smaller fw-bold text-muted text-uppercase mb-1">Pending Clearance</p>
                        <h2 class="fw-bold text-info mb-1">₦ 450,200.00</h2>
                        <p class="smaller text-muted">Funds from 14 orders currently in the 7-day return window.</p>
                        <hr class="opacity-10">
                        <div class="d-flex justify-content-between smaller fw-bold">
                            <span>Last 7 Days Sales</span>
                            <span class="text-dark">₦ 890,000</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                        <p class="smaller fw-bold text-muted text-uppercase mb-1">Total Paid (2026)</p>
                        <h2 class="fw-bold text-dark mb-1">₦ 18.4M</h2>
                        <p class="smaller text-success fw-bold"><i class="bi bi-graph-up"></i> +12% vs last year</p>
                        <div class="mt-auto">
                            <div class="progress" style="height: 6px;">
                                <div class="progress-bar bg-warning" style="width: 65%"></div>
                            </div>
                            <span class="smaller text-muted mt-1 d-block text-end">Sales Target: ₦ 25M</span>
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
                            <h6 class="mb-0 fw-bold small text-uppercase">Payout History</h6>
                            <div class="dropdown">
                                <button class="btn btn-light btn-sm border dropdown-toggle smaller fw-bold" type="button">Last 3 Months</button>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table align-middle mb-0 small text-nowrap">
                                <thead class="table-light text-muted fw-bold">
                                    <tr>
                                        <th class="ps-4 py-3">PAYMENT ID</th>
                                        <th>PERIOD</th>
                                        <th>GROSS SALES</th>
                                        <th>FEES & COMMISSIONS</th>
                                        <th>NET PAYOUT</th>
                                        <th>STATUS</th>
                                        <th class="text-end pe-4">DETAILS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="ps-4 fw-bold">#PAY-99284</td>
                                        <td>Mar 24 - Mar 31, 2026</td>
                                        <td>₦ 2,400,000</td>
                                        <td class="text-danger">-₦ 360,000</td>
                                        <td class="fw-bold">₦ 2,040,000</td>
                                        <td><span class="badge bg-success bg-opacity-10 text-success rounded-pill px-3">Paid</span></td>
                                        <td class="text-end pe-4">
                                            <button class="btn btn-outline-secondary btn-sm border-0"><i class="bi bi-file-earmark-pdf"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="ps-4 fw-bold">#PAY-98105</td>
                                        <td>Mar 16 - Mar 23, 2026</td>
                                        <td>₦ 1,800,000</td>
                                        <td class="text-danger">-₦ 270,000</td>
                                        <td class="fw-bold">₦ 1,530,000</td>
                                        <td><span class="badge bg-success bg-opacity-10 text-success rounded-pill px-3">Paid</span></td>
                                        <td class="text-end pe-4">
                                            <button class="btn btn-outline-secondary btn-sm border-0"><i class="bi bi-file-earmark-pdf"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="ps-4 fw-bold">#PAY-97552</td>
                                        <td>Mar 08 - Mar 15, 2026</td>
                                        <td>₦ 950,000</td>
                                        <td class="text-danger">-₦ 142,500</td>
                                        <td class="fw-bold">₦ 807,500</td>
                                        <td><span class="badge bg-warning bg-opacity-10 text-warning rounded-pill px-3">Processing</span></td>
                                        <td class="text-end pe-4">
                                            <button class="btn btn-outline-secondary btn-sm border-0"><i class="bi bi-file-earmark-pdf"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card border-0 shadow-sm rounded-3 p-4 h-100">
                        <h6 class="fw-bold small text-uppercase mb-3">Fee Breakdown Tip</h6>
                        <p class="smaller text-muted">Jumia deducts a standard commission based on your category (e.g., 10-15% for Electronics). Other potential deductions include:</p>
                        <ul class="smaller text-muted">
                            <li><strong>Jumia Express:</strong> Logistics and warehousing fees.</li>
                            <li><strong>Return Shipping:</strong> Cost for items rejected by customers.</li>
                            <li><strong>Vendor Ads:</strong> Fees for sponsored product placements.</li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card border-0 shadow-sm rounded-3 p-4 h-100 bg-dark text-white">
                        <h6 class="fw-bold small text-uppercase mb-3 text-warning">Bank Account Details</h6>
                        <div class="d-flex justify-content-between align-items-center bg-secondary bg-opacity-25 p-3 rounded">
                            <div>
                                <p class="smaller fw-bold mb-0">GT Bank Nigeria</p>
                                <p class="smaller opacity-75 mb-0">**** **** 9012</p>
                            </div>
                            <button class="btn btn-sm btn-link text-warning text-decoration-none fw-bold smaller">EDIT</button>
                        </div>
                        <p class="smaller opacity-50 mt-3 mb-0">Changes to bank details take 48 hours to verify before next payout.</p>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .bg-opacity-10 { background-color: rgba(25, 135, 84, 0.1) !important; }
            .text-nowrap { white-space: nowrap; }
            .btn-warning:hover { opacity: 0.9; }
            .table > :not(caption) > * > * { padding: 1.2rem 0.5rem; }
        </style>
    </div>
    `;
}