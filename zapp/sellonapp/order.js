export default function VendorOrderDashboard() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container px-4">
                <span class="navbar-brand fw-bold text-warning mb-0">ORDER FULFILLMENT</span>
                <div class="d-flex align-items-center gap-3 text-white">
                    <span class="smaller opacity-75"><i class="bi bi-clock-history"></i> Next Drop-off: 4h 20m</span>
                    <button class="btn btn-outline-warning btn-sm fw-bold">BULK SHIP</button>
                </div>
            </div>
        </nav>

        <main class="container px-4 py-4">
            <div class="card border-0 shadow-sm mb-4">
                <div class="card-body p-0">
                    <div class="d-flex flex-wrap overflow-auto">
                        <button class="btn flex-fill py-3 fw-bold small border-bottom border-3 border-warning rounded-0 text-warning bg-white">PENDING (12)</button>
                        <button class="btn flex-fill py-3 fw-bold small border-0 rounded-0 text-muted opacity-75">READY TO SHIP (5)</button>
                        <button class="btn flex-fill py-3 fw-bold small border-0 rounded-0 text-muted opacity-75">SHIPPED (84)</button>
                        <button class="btn flex-fill py-3 fw-bold small border-0 rounded-0 text-muted opacity-75">COMPLETED</button>
                        <button class="btn flex-fill py-3 fw-bold small border-0 rounded-0 text-muted opacity-75 text-danger">CANCELLED (2)</button>
                    </div>
                </div>
            </div>

            <div class="row g-3 mb-4 align-items-center">
                <div class="col-md-4">
                    <div class="input-group input-group-sm">
                        <span class="input-group-text bg-white"><i class="bi bi-search text-muted"></i></span>
                        <input type="text" class="form-control" placeholder="Search Order ID or Customer Name...">
                    </div>
                </div>
                <div class="col-md-8 text-md-end">
                    <button class="btn btn-light btn-sm fw-bold border smaller px-3 me-2">DOWNLOAD MANIFEST</button>
                    <button class="btn btn-light btn-sm fw-bold border smaller px-3">PRINT SHIPPING LABELS</button>
                </div>
            </div>

            <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                <div class="table-responsive">
                    <table class="table align-middle mb-0 small">
                        <thead class="table-light text-muted fw-bold">
                            <tr>
                                <th class="ps-4 py-3">ORDER ID</th>
                                <th>ORDER DATE</th>
                                <th>ITEMS</th>
                                <th>REVENUE</th>
                                <th>SLA STATUS</th>
                                <th class="text-end pe-4">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="order-row border-start border-4 border-danger">
                                <td class="ps-4">
                                    <span class="fw-bold text-dark">#4958372</span><br>
                                    <span class="smaller text-muted">Customer: Tunde A.</span>
                                </td>
                                <td><span class="smaller">Apr 05, 08:30 AM</span></td>
                                <td>
                                    <div class="d-flex align-items-center gap-2">
                                        <img src="https://via.placeholder.com/40" class="rounded border">
                                        <span class="smaller fw-medium">iPhone 15 Pro (x1)</span>
                                    </div>
                                </td>
                                <td class="fw-bold">₦ 1,850,000</td>
                                <td>
                                    <span class="badge bg-danger bg-opacity-10 text-danger px-2 py-1">
                                        <i class="bi bi-exclamation-triangle-fill me-1"></i> 2h 15m left
                                    </span>
                                </td>
                                <td class="text-end pe-4">
                                    <button class="btn btn-warning btn-sm text-white fw-bold px-3 smaller shadow-sm">PACK ORDER</button>
                                </td>
                            </tr>

                            <tr class="order-row">
                                <td class="ps-4">
                                    <span class="fw-bold text-dark">#4958410</span><br>
                                    <span class="smaller text-muted">Customer: Sarah O.</span>
                                </td>
                                <td><span class="smaller">Apr 05, 09:15 AM</span></td>
                                <td>
                                    <div class="d-flex align-items-center gap-2">
                                        <img src="https://via.placeholder.com/40" class="rounded border">
                                        <span class="smaller fw-medium">AirPods Max (x1)</span>
                                    </div>
                                </td>
                                <td class="fw-bold">₦ 490,000</td>
                                <td>
                                    <span class="badge bg-light text-muted px-2 py-1 border">
                                        <i class="bi bi-clock me-1"></i> 24h left
                                    </span>
                                </td>
                                <td class="text-end pe-4">
                                    <button class="btn btn-warning btn-sm text-white fw-bold px-3 smaller shadow-sm">PACK ORDER</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="mt-4 p-3 bg-white rounded-3 shadow-sm d-flex gap-3 align-items-center border-start border-4 border-info">
                <i class="bi bi-info-circle-fill text-info fs-4"></i>
                <div>
                    <h6 class="smaller fw-bold mb-1">Shipping Policy Reminder</h6>
                    <p class="smaller text-muted mb-0">Orders must be set to "Ready to Ship" within 24 hours of receipt to avoid cancellation and seller score penalties.</p>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .order-row:hover { background-color: #fafafa; }
            .btn-warning:hover { opacity: 0.9; }
            .badge { font-size: 10px; }
            .table > :not(caption) > * > * { padding: 1rem 0.5rem; }
        </style>
    </div>
    `;
}