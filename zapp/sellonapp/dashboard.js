export default function VendorDashboard() {
    return /*html*/`
    <div class="bg-light h-100">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
            <div class="container-fluid px-4">
                <a class="navbar-brand fw-bold text-warning" href="#">SELLER CENTER</a>
                <div class="d-flex align-items-center gap-3">
                    <div class="dropdown">
                        <button class="btn btn-dark btn-sm position-relative">
                            <i class="bi bi-bell fs-5"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
                        </button>
                    </div>
                    <div class="d-flex align-items-center gap-2 border-start ps-3">
                        <div class="text-end d-none d-md-block">
                            <p class="mb-0 text-white small fw-bold">Gadget World Ltd</p>
                            <p class="mb-0 text-muted" style="font-size: 10px;">ID: 948572</p>
                        </div>
                        <i class="bi bi-person-circle fs-4 text-warning"></i>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container px-4 py-4">
            <div class="row g-4">
                <aside class="col-lg-2 d-none d-lg-block">
                    <div class="list-group list-group-flush rounded-3 shadow-sm small border-0">
                        <a href="#" class="list-group-item list-group-item-action active-vendor py-3 border-0">
                            <i class="bi bi-speedometer2 me-2"></i> Dashboard
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-3 border-0">
                            <i class="bi bi-box-seam me-2"></i> Products
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-3 border-0">
                            <i class="bi bi-cart-check me-2"></i> Orders
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-3 border-0">
                            <i class="bi bi-megaphone me-2"></i> Promotions
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-3 border-0">
                            <i class="bi bi-wallet2 me-2"></i> Payments
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-3 border-0">
                            <i class="bi bi-graph-up me-2"></i> Analytics
                        </a>
                    </div>
                </aside>

                <div class="col-lg-10">
                    <div class="row g-3 mb-4">
                        <div class="col-md-3">
                            <div class="card border-0 shadow-sm p-3 border-start border-4 border-warning">
                                <p class="smaller text-muted fw-bold mb-1">PENDING ORDERS</p>
                                <div class="d-flex justify-content-between align-items-end">
                                    <h3 class="fw-bold mb-0">12</h3>
                                    <span class="smaller text-danger fw-bold"><i class="bi bi-clock-history"></i> Needs action</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card border-0 shadow-sm p-3 border-start border-4 border-primary">
                                <p class="smaller text-muted fw-bold mb-1">TOTAL SALES (MTD)</p>
                                <div class="d-flex justify-content-between align-items-end">
                                    <h3 class="fw-bold mb-0">₦ 4.2M</h3>
                                    <span class="smaller text-success fw-bold"><i class="bi bi-arrow-up"></i> 14%</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card border-0 shadow-sm p-3 border-start border-4 border-success">
                                <p class="smaller text-muted fw-bold mb-1">SELLER SCORE</p>
                                <div class="d-flex justify-content-between align-items-end">
                                    <h3 class="fw-bold mb-0">4.8/5</h3>
                                    <span class="smaller text-muted fw-bold">Excellent</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card border-0 shadow-sm p-3 border-start border-4 border-info">
                                <p class="smaller text-muted fw-bold mb-1">OUT OF STOCK</p>
                                <div class="d-flex justify-content-between align-items-end">
                                    <h3 class="fw-bold mb-0">3</h3>
                                    <span class="smaller text-warning fw-bold">Restock soon</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-4">
                        <div class="col-xl-8">
                            <div class="card border-0 shadow-sm rounded-3 overflow-hidden h-100">
                                <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                                    <h6 class="mb-0 fw-bold small text-uppercase">New Orders to Ship</h6>
                                    <button class="btn btn-warning btn-sm text-white fw-bold smaller">EXPORT LIST</button>
                                </div>
                                <div class="table-responsive">
                                    <table class="table align-middle mb-0 small">
                                        <thead class="table-light">
                                            <tr>
                                                <th class="ps-4">Order ID</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>SLA Deadline</th>
                                                <th class="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="ps-4 fw-bold">#4958372</td>
                                                <td>iPhone 15 Pro...</td>
                                                <td>₦ 1.2M</td>
                                                <td><span class="text-danger fw-bold">2h 40m left</span></td>
                                                <td class="text-center"><button class="btn btn-dark btn-sm smaller">Ready to Ship</button></td>
                                            </tr>
                                            <tr>
                                                <td class="ps-4 fw-bold">#4958389</td>
                                                <td>AirPods Max</td>
                                                <td>₦ 450k</td>
                                                <td>Tomorrow, 10am</td>
                                                <td class="text-center"><button class="btn btn-dark btn-sm smaller">Ready to Ship</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4">
                            <div class="card border-0 shadow-sm rounded-3 p-3 h-100">
                                <h6 class="fw-bold small text-uppercase mb-3">Store Health</h6>
                                
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between smaller mb-1">
                                        <span>Cancellation Rate</span>
                                        <span class="text-success fw-bold">0.5% (Good)</span>
                                    </div>
                                    <div class="progress" style="height: 6px;">
                                        <div class="progress-bar bg-success" style="width: 95%"></div>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <div class="d-flex justify-content-between smaller mb-1">
                                        <span>Return Rate</span>
                                        <span class="text-warning fw-bold">2.1% (Average)</span>
                                    </div>
                                    <div class="progress" style="height: 6px;">
                                        <div class="progress-bar bg-warning" style="width: 75%"></div>
                                    </div>
                                </div>

                                <div class="bg-light rounded p-3 mt-4">
                                    <h6 class="smaller fw-bold mb-2 text-dark">VENDOR TIP</h6>
                                    <p class="smaller text-muted mb-0">Improving your "Ready-to-Ship" time to under 12 hours can increase your visibility in search results by up to 20%.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .smaller { font-size: 11px; }
            .active-vendor { background-color: #ff9900 !important; color: white !important; font-weight: bold; }
            .list-group-item-action:hover { background-color: #fff9f0; color: #ff9900; }
            .table-responsive { min-height: 200px; }
            .card { transition: transform 0.2s; }
            .card:hover { transform: translateY(-2px); }
        </style>
    </div>
    `;
}