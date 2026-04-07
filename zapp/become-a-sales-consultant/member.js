export default function JForceDashboard() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-primary shadow-sm mb-4" style="background-color: #003366 !important;">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center">
                    <span class="navbar-brand fw-bold text-warning mb-0 me-3">JFORCE</span>
                    <span class="badge bg-warning text-dark fw-bold px-3">SILVER AGENT</span>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <div class="text-white text-end d-none d-md-block">
                        <p class="smaller mb-0 opacity-75">Welcome back,</p>
                        <p class="small fw-bold mb-0">Samuel Adebayo</p>
                    </div>
                    <div class="bg-white rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                        <i class="bi bi-person-fill text-primary"></i>
                    </div>
                </div>
            </div>
        </nav>

        <main class="container">
            <div class="row g-4">
                
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h6 class="fw-bold text-muted mb-0">EARNINGS SUMMARY</h6>
                            <select class="form-select form-select-sm w-auto border-0 bg-light fw-bold">
                                <option>This Month (April)</option>
                                <option>Last Month</option>
                            </select>
                        </div>
                        <div class="row g-3">
                            <div class="col-md-6 border-end">
                                <p class="smaller text-muted mb-1 text-uppercase fw-bold">Pending Commission</p>
                                <h2 class="fw-bold text-dark mb-0">₦ 12,450.00</h2>
                                <p class="smaller text-info mt-2 mb-0"><i class="bi bi-clock-history me-1"></i> Waiting for delivery & returns</p>
                            </div>
                            <div class="col-md-6 ps-md-4">
                                <p class="smaller text-muted mb-1 text-uppercase fw-bold">Confirmed Payout</p>
                                <h2 class="fw-bold text-success mb-0">₦ 45,800.00</h2>
                                <p class="smaller text-muted mt-2 mb-0">Scheduled for: **April 28, 2026**</p>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-4 p-4 bg-white">
                        <h6 class="fw-bold text-muted mb-4">SALES VOLUME</h6>
                        <div class="bg-light rounded-3 d-flex align-items-center justify-content-center" style="height: 200px;">
                            <div class="text-center opacity-50">
                                <i class="bi bi-graph-up-arrow display-6"></i>
                                <p class="smaller mt-2">Chart: Daily orders placed vs successfully delivered</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4 border-top border-5 border-warning">
                        <h6 class="fw-bold mb-3">Road to <span class="text-warning">Gold Status</span></h6>
                        <p class="smaller text-muted mb-4">Complete 12 more successful deliveries this month to unlock 15% bonus commissions!</p>
                        
                        <div class="progress mb-2" style="height: 10px;">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="d-flex justify-content-between smaller fw-bold mb-4">
                            <span>28 Deliveries</span>
                            <span class="text-muted">40 Goal</span>
                        </div>
                        
                        <button class="btn btn-outline-primary w-100 btn-sm fw-bold py-2">VIEW ALL REWARDS</button>
                    </div>

                    <div class="card border-0 shadow-sm rounded-4 p-4 bg-dark text-white shadow">
                        <h6 class="fw-bold mb-3">Quick Actions</h6>
                        <div class="d-grid gap-2">
                            <button class="btn btn-warning text-dark fw-bold text-start p-3 rounded-3 border-0">
                                <i class="bi bi-plus-circle-fill me-2"></i> PLACE NEW ORDER
                            </button>
                            <button class="btn btn-outline-light text-start p-3 rounded-3 border-secondary border-opacity-50">
                                <i class="bi bi-megaphone-fill me-2 text-warning"></i> DOWNLOAD ASSETS
                            </button>
                            <button class="btn btn-outline-light text-start p-3 rounded-3 border-secondary border-opacity-50">
                                <i class="bi bi-people-fill me-2 text-warning"></i> MY CUSTOMERS
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                        <div class="p-4 border-bottom">
                            <h6 class="fw-bold mb-0">Recent Agent Orders</h6>
                        </div>
                        <div class="table-responsive">
                            <table class="table align-middle mb-0">
                                <thead class="table-light smaller fw-bold text-muted">
                                    <tr>
                                        <th class="ps-4">ORDER ID</th>
                                        <th>CUSTOMER</th>
                                        <th>AMOUNT</th>
                                        <th>COMMISSION</th>
                                        <th>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody class="smaller">
                                    <tr>
                                        <td class="ps-4 fw-bold">#99284752</td>
                                        <td>Janet O. (Ikeja)</td>
                                        <td>₦ 15,200</td>
                                        <td class="text-primary fw-bold">+ ₦ 1,216</td>
                                        <td><span class="badge bg-success bg-opacity-10 text-success px-3">Delivered</span></td>
                                    </tr>
                                    <tr>
                                        <td class="ps-4 fw-bold">#99284710</td>
                                        <td>Musa K. (Surulere)</td>
                                        <td>₦ 8,500</td>
                                        <td class="text-muted fw-bold">+ ₦ 680</td>
                                        <td><span class="badge bg-info bg-opacity-10 text-info px-3">In Transit</span></td>
                                    </tr>
                                    <tr>
                                        <td class="ps-4 fw-bold">#99284699</td>
                                        <td>Bisi A. (Lekki)</td>
                                        <td>₦ 120,000</td>
                                        <td class="text-danger fw-bold">₦ 0</td>
                                        <td><span class="badge bg-danger bg-opacity-10 text-danger px-3">Cancelled</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .bg-opacity-10 { background-color: rgba(var(--bs-success-rgb), 0.1) !important; }
            .bg-info.bg-opacity-10 { background-color: rgba(13, 202, 240, 0.1) !important; }
            .bg-danger.bg-opacity-10 { background-color: rgba(220, 53, 69, 0.1) !important; }
            .progress-bar { transition: width 1s ease-in-out; }
            .card { transition: transform 0.2s; }
            .card:hover { transform: translateY(-3px); }
        </style>
    </div>
    `;
}