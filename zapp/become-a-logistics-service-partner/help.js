export default function LogisticsRequirements() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <header class="bg-white border-bottom py-4 mb-5 shadow-sm">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <h4 class="fw-bold mb-1 text-dark">Logistics Partnership Requirements</h4>
                        <p class="smaller text-muted mb-0">Ensure your fleet meets these standards before applying.</p>
                    </div>
                    <a href="/logistics/register" class="btn btn-primary fw-bold px-4">START APPLICATION</a>
                </div>
            </div>
        </header>

        <main class="container">
            <div class="row g-4">
                
                <div class="col-md-6">
                    <div class="card border-0 shadow-sm rounded-4 h-100 bg-white overflow-hidden">
                        <div class="p-4 bg-dark text-white d-flex align-items-center gap-3">
                            <i class="bi bi-file-earmark-text fs-3 text-warning"></i>
                            <h5 class="fw-bold mb-0 text-uppercase ls-1">Legal & Compliance</h5>
                        </div>
                        <div class="p-4">
                            <ul class="list-unstyled mb-0">
                                <li class="d-flex gap-3 mb-4">
                                    <i class="bi bi-check-circle-fill text-success fs-5"></i>
                                    <div>
                                        <p class="fw-bold mb-0">Business Registration</p>
                                        <p class="smaller text-muted">Valid CAC Certificate (RC or BN) showing Logistics or Transport as a nature of business.</p>
                                    </div>
                                </li>
                                <li class="d-flex gap-3 mb-4">
                                    <i class="bi bi-check-circle-fill text-success fs-5"></i>
                                    <div>
                                        <p class="fw-bold mb-0">Goods in Transit (GIT) Insurance</p>
                                        <p class="smaller text-muted">A minimum coverage policy to protect against theft, fire, or damage during delivery.</p>
                                    </div>
                                </li>
                                <li class="d-flex gap-3 mb-0">
                                    <i class="bi bi-check-circle-fill text-success fs-5"></i>
                                    <div>
                                        <p class="fw-bold mb-0">Tax Identification Number (TIN)</p>
                                        <p class="smaller text-muted">Must be a valid FIRS-issued TIN for corporate tax remittances.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card border-0 shadow-sm rounded-4 h-100 bg-white overflow-hidden">
                        <div class="p-4 bg-primary text-white d-flex align-items-center gap-3">
                            <i class="bi bi-truck fs-3 text-warning"></i>
                            <h5 class="fw-bold mb-0 text-uppercase ls-1">Fleet Standards</h5>
                        </div>
                        <div class="p-4">
                            <ul class="list-unstyled mb-0">
                                <li class="d-flex gap-3 mb-4">
                                    <i class="bi bi-bicycle fs-5 text-primary"></i>
                                    <div>
                                        <p class="fw-bold mb-0">Motorbikes (200cc+)</p>
                                        <p class="smaller text-muted">Bikes must be no older than 4 years, equipped with a secure delivery box (minimum 40L capacity).</p>
                                    </div>
                                </li>
                                <li class="d-flex gap-3 mb-4">
                                    <i class="bi bi-phone fs-5 text-primary"></i>
                                    <div>
                                        <p class="fw-bold mb-0">Rider Smartphones</p>
                                        <p class="smaller text-muted">Every rider must have an Android device (v9.0+) with GPS, 4G data, and at least 3000mAh battery.</p>
                                    </div>
                                </li>
                                <li class="d-flex gap-3 mb-0">
                                    <i class="bi bi-shield-shaded fs-5 text-primary"></i>
                                    <div>
                                        <p class="fw-bold mb-0">Safety Gear</p>
                                        <p class="smaller text-muted">Standardized helmets, reflective vests, and closed-toe shoes for all personnel.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-12 mt-4">
                    <div class="card border-0 shadow-sm rounded-4 bg-white p-4">
                        <h5 class="fw-bold mb-4">Service Level Agreement (SLA) Targets</h5>
                        <div class="table-responsive">
                            <table class="table align-middle">
                                <thead class="table-light smaller fw-bold text-muted">
                                    <tr>
                                        <th>METRIC</th>
                                        <th>TARGET</th>
                                        <th>IMPORTANCE</th>
                                    </tr>
                                </thead>
                                <tbody class="smaller">
                                    <tr>
                                        <td class="fw-bold">Order Pickup Time</td>
                                        <td>Under 120 Minutes</td>
                                        <td><span class="badge bg-danger">Critical</span></td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold">Delivery Success Rate</td>
                                        <td>95% or Higher</td>
                                        <td><span class="badge bg-danger">Critical</span></td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold">Return Processing</td>
                                        <td>Next Business Day</td>
                                        <td><span class="badge bg-warning text-dark">High</span></td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold">Customer Rating</td>
                                        <td>4.0 / 5.0 Stars</td>
                                        <td><span class="badge bg-info text-dark">Medium</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-12 text-center mt-4">
                    <p class="smaller text-muted mb-1">Have a unique fleet or special requirements?</p>
                    <a href="#" class="text-primary fw-bold text-decoration-none">Talk to a Partnerships Manager <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 12px; }
            .ls-1 { letter-spacing: 1px; }
            .bg-primary { background-color: #003366 !important; }
            .card { transition: transform 0.3s; }
            .card:hover { transform: translateY(-5px); }
            .badge { font-size: 10px; padding: 5px 10px; }
        </style>
    </div>
    `;
}