export default function VendorAnalytics() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <span class="navbar-brand fw-bold text-warning mb-0">BUSINESS INSIGHTS</span>
                <div class="d-flex gap-2">
                    <button class="btn btn-outline-light btn-sm fw-bold px-3 smaller">LAST 30 DAYS</button>
                    <button class="btn btn-warning btn-sm fw-bold px-3 text-white smaller">DOWNLOAD REPORT</button>
                </div>
            </div>
        </nav>

        <main class="container-fluid px-4">
            <div class="row g-3 mb-4">
                <div class="col-md-3">
                    <div class="card border-0 shadow-sm p-3 bg-white h-100">
                        <p class="smaller text-muted fw-bold mb-1">TOTAL VISITS</p>
                        <h3 class="fw-bold mb-0">42.5K</h3>
                        <span class="smaller text-success fw-bold"><i class="bi bi-caret-up-fill"></i> 12.4%</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0 shadow-sm p-3 bg-white h-100 border-start border-4 border-warning">
                        <p class="smaller text-muted fw-bold mb-1">CONVERSION RATE</p>
                        <h3 class="fw-bold mb-0">3.2%</h3>
                        <span class="smaller text-danger fw-bold"><i class="bi bi-caret-down-fill"></i> 0.5%</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0 shadow-sm p-3 bg-white h-100">
                        <p class="smaller text-muted fw-bold mb-1">AVG. ORDER VALUE</p>
                        <h3 class="fw-bold mb-0">₦ 85,400</h3>
                        <span class="smaller text-success fw-bold"><i class="bi bi-caret-up-fill"></i> 8.2%</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0 shadow-sm p-3 bg-white h-100">
                        <p class="smaller text-muted fw-bold mb-1">REVENUE</p>
                        <h3 class="fw-bold mb-0">₦ 3.6M</h3>
                        <span class="smaller text-success fw-bold"><i class="bi bi-caret-up-fill"></i> 15.1%</span>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm rounded-3 p-4 mb-4 bg-white">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h6 class="fw-bold small text-uppercase mb-0">Sales Performance Trend</h6>
                            <div class="btn-group btn-group-sm shadow-sm">
                                <button class="btn btn-outline-secondary active smaller">Revenue</button>
                                <button class="btn btn-outline-secondary smaller">Orders</button>
                            </div>
                        </div>
                        <div class="bg-light rounded-3 d-flex align-items-end justify-content-between px-4 pb-2" style="height: 250px;">
                            <div class="bg-warning opacity-25 rounded-top" style="width: 8%; height: 40%;"></div>
                            <div class="bg-warning opacity-50 rounded-top" style="width: 8%; height: 65%;"></div>
                            <div class="bg-warning opacity-75 rounded-top" style="width: 8%; height: 50%;"></div>
                            <div class="bg-warning rounded-top" style="width: 8%; height: 85%;"></div>
                            <div class="bg-warning opacity-50 rounded-top" style="width: 8%; height: 70%;"></div>
                            <div class="bg-warning opacity-25 rounded-top" style="width: 8%; height: 30%;"></div>
                            <div class="bg-warning opacity-75 rounded-top" style="width: 8%; height: 90%;"></div>
                        </div>
                        <div class="d-flex justify-content-between mt-2 px-2 text-muted smaller">
                            <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden bg-white">
                        <div class="card-header bg-white py-3 border-bottom">
                            <h6 class="mb-0 fw-bold small text-uppercase">Top Selling Products</h6>
                        </div>
                        <div class="table-responsive">
                            <table class="table align-middle mb-0 small">
                                <thead class="table-light text-muted">
                                    <tr>
                                        <th class="ps-4">Product</th>
                                        <th>Views</th>
                                        <th>Sales</th>
                                        <th>Conv. %</th>
                                        <th class="text-end pe-4">Revenue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="ps-4">
                                            <div class="d-flex align-items-center gap-2">
                                                <img src="https://via.placeholder.com/30" class="rounded border">
                                                <span class="fw-bold smaller text-dark">iPhone 15 Pro Max</span>
                                            </div>
                                        </td>
                                        <td>12,402</td>
                                        <td>142</td>
                                        <td class="text-success fw-bold">1.1%</td>
                                        <td class="text-end pe-4 fw-bold">₦ 2.1M</td>
                                    </tr>
                                    <tr>
                                        <td class="ps-4">
                                            <div class="d-flex align-items-center gap-2">
                                                <img src="https://via.placeholder.com/30" class="rounded border">
                                                <span class="fw-bold smaller text-dark">AirPods Pro (2nd Gen)</span>
                                            </div>
                                        </td>
                                        <td>8,150</td>
                                        <td>98</td>
                                        <td class="text-success fw-bold">1.2%</td>
                                        <td class="text-end pe-4 fw-bold">₦ 480K</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm rounded-3 p-4 mb-4 bg-white">
                        <h6 class="fw-bold small text-uppercase mb-3">Customer Voice</h6>
                        <div class="text-center py-3">
                            <h1 class="display-5 fw-bold text-dark mb-0">4.8</h1>
                            <div class="text-warning mb-2">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i>
                            </div>
                            <p class="smaller text-muted">Based on 842 reviews</p>
                        </div>
                        <div class="smaller border-top pt-3">
                            <div class="d-flex justify-content-between mb-2">
                                <span>Shipping Speed</span>
                                <span class="text-success fw-bold">Excellent</span>
                            </div>
                            <div class="d-flex justify-content-between">
                                <span>Product Quality</span>
                                <span class="text-success fw-bold">95% Match</span>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 p-4 bg-primary bg-opacity-10 border-start border-4 border-primary">
                        <h6 class="fw-bold small text-uppercase mb-2 text-primary">Traffic Sources</h6>
                        <ul class="list-unstyled mb-0">
                            <li class="d-flex justify-content-between smaller mb-2">
                                <span>Jumia Search</span>
                                <span class="fw-bold">65%</span>
                            </li>
                            <li class="d-flex justify-content-between smaller mb-2">
                                <span>External (Google/FB)</span>
                                <span class="fw-bold">20%</span>
                            </li>
                            <li class="d-flex justify-content-between smaller">
                                <span>Direct Link</span>
                                <span class="fw-bold">15%</span>
                            </li>
                        </ul>
                        <hr class="opacity-10">
                        <p class="smaller text-muted mb-0 italic">
                            <i class="bi bi-lightbulb text-primary"></i> 
                            Tip: Sponsoring your Top 5 items could increase Search traffic by 30%.
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .italic { font-style: italic; }
            .bg-opacity-10 { background-color: rgba(13, 110, 253, 0.08) !important; }
            .table > :not(caption) > * > * { padding: 1rem 0.5rem; }
            .progress { border-radius: 10px; }
            .btn-outline-secondary { border-color: #ddd; color: #666; }
            .btn-outline-secondary.active { background-color: #666; border-color: #666; color: #fff; }
        </style>
    </div>
    `;
}