export default function JumiaExpressInventory() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-expand-lg navbar-dark shadow-sm px-4 py-3" style="background-color: #f68b1e;">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
                    <i class="bi bi-lightning-fill me-2"></i> JUMIA EXPRESS PORTAL
                </a>
                <div class="d-flex gap-3">
                    <button class="btn btn-white btn-sm fw-bold shadow-sm px-3">
                        <i class="bi bi-plus-circle me-1"></i> SEND TO WAREHOUSE
                    </button>
                </div>
            </div>
        </nav>

        <main class="container mt-4">
            <div class="row g-3 mb-4 text-white">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4" style="background: linear-gradient(45deg, #2c3e50, #003366);">
                        <p class="smaller opacity-75 mb-1 text-uppercase fw-bold">Live Inventory</p>
                        <h2 class="fw-bold mb-0">1,402 <span class="smaller fw-normal opacity-75">Units</span></h2>
                        <div class="mt-3 smaller">
                            <i class="bi bi-house-door me-1"></i> Lagos Central Warehouse (Hub A)
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4" style="background: linear-gradient(45deg, #f68b1e, #d35400);">
                        <p class="smaller opacity-75 mb-1 text-uppercase fw-bold">Low Stock Alerts</p>
                        <h2 class="fw-bold mb-0">12 <span class="smaller fw-normal opacity-75">SKUs</span></h2>
                        <div class="mt-3 smaller">
                            <i class="bi bi-exclamation-triangle me-1"></i> Action required to avoid delisting
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 bg-white text-dark">
                        <p class="smaller text-muted mb-1 text-uppercase fw-bold">Fulfillment Rate</p>
                        <h2 class="fw-bold mb-0 text-success">99.8%</h2>
                        <div class="mt-3 smaller text-muted">
                            <i class="bi bi-clock-history me-1"></i> Avg. Ship Time: 4.2 Hours
                        </div>
                    </div>
                </div>
            </div>

            <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                <div class="p-4 border-bottom d-flex justify-content-between align-items-center">
                    <h5 class="fw-bold mb-0">Express Stock List</h5>
                    <div class="d-flex gap-2">
                        <input type="text" class="form-control form-control-sm border-light bg-light px-3" style="width: 250px;" placeholder="Search SKU or Product Name...">
                        <button class="btn btn-light btn-sm border"><i class="bi bi-funnel"></i></button>
                    </div>
                </div>
                
                <div class="table-responsive">
                    <table class="table align-middle mb-0">
                        <thead class="table-light smaller text-muted fw-bold">
                            <tr>
                                <th class="ps-4">PRODUCT DETAILS</th>
                                <th>WAREHOUSE QTY</th>
                                <th>DAYS OF COVER</th>
                                <th>STORAGE FEE (30D)</th>
                                <th>STATUS</th>
                                <th class="text-end pe-4">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody class="smaller">
                            <tr>
                                <td class="ps-4">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=50&q=80" class="rounded border" style="width: 45px; height: 45px;">
                                        <div>
                                            <p class="fw-bold mb-0">Premium Smart Watch Series 7</p>
                                            <p class="smaller text-muted mb-0">SKU: WA-9902-BLK</p>
                                        </div>
                                    </div>
                                </td>
                                <td><span class="fw-bold">420 Units</span></td>
                                <td>24 Days <i class="bi bi-info-circle ms-1 opacity-50"></i></td>
                                <td>₦ 4,200</td>
                                <td><span class="badge bg-success bg-opacity-10 text-success px-3">HEALTHY</span></td>
                                <td class="text-end pe-4">
                                    <button class="btn btn-outline-dark btn-sm fw-bold">View Sales</button>
                                </td>
                            </tr>

                            <tr>
                                <td class="ps-4">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=50&q=80" class="rounded border" style="width: 45px; height: 45px;">
                                        <div>
                                            <p class="fw-bold mb-0">Noise Cancelling Headphones</p>
                                            <p class="smaller text-muted mb-0">SKU: AU-1120-SIL</p>
                                        </div>
                                    </div>
                                </td>
                                <td><span class="fw-bold text-danger">8 Units</span></td>
                                <td><span class="text-danger fw-bold">2 Days</span></td>
                                <td>₦ 150</td>
                                <td><span class="badge bg-danger bg-opacity-10 text-danger px-3">REPLENISH NOW</span></td>
                                <td class="text-end pe-4">
                                    <button class="btn btn-warning btn-sm fw-bold">SEND STOCK</button>
                                </td>
                            </tr>

                            <tr>
                                <td class="ps-4">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=50&q=80" class="rounded border" style="width: 45px; height: 45px;">
                                        <div>
                                            <p class="fw-bold mb-0">Racing Series Sneakers (Red)</p>
                                            <p class="smaller text-muted mb-0">SKU: FT-4402-RED</p>
                                        </div>
                                    </div>
                                </td>
                                <td><span class="fw-bold">850 Units</span></td>
                                <td>90+ Days</td>
                                <td><span class="text-danger fw-bold">₦ 12,500</span></td>
                                <td><span class="badge bg-warning bg-opacity-10 text-warning px-3">SLOW MOVER</span></td>
                                <td class="text-end pe-4">
                                    <button class="btn btn-outline-danger btn-sm fw-bold">RECALL STOCK</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .btn-white { background-color: #fff; border: none; color: #f68b1e; }
            .badge { font-weight: 700; border-radius: 4px; }
            .table tr:hover { background-color: #fcfcfc; transition: 0.2s; }
            .bg-success.bg-opacity-10 { background-color: rgba(25, 135, 84, 0.1) !important; }
            .bg-danger.bg-opacity-10 { background-color: rgba(220, 53, 69, 0.1) !important; }
            .bg-warning.bg-opacity-10 { background-color: rgba(255, 193, 7, 0.1) !important; }
        </style>
    </div>
    `;
}