export default function Dashboard() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="container pt-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-3" style="font-size: 12px;">
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">Home</a></li>
                <li class="breadcrumb-item active text-muted">My Account</li>
            </ol>
        </nav>

        <main class="container">
            <div class="row g-3">
                <aside class="col-lg-3">
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="list-group list-group-flush small fw-medium">
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3 active-nav">
                                <i class="bi bi-person me-3 fs-5 text-warning"></i> My Jumia Account
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-box-seam me-3 fs-5 text-secondary"></i> Orders
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-chat-dots me-3 fs-5 text-secondary"></i> Pending Reviews
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-ticket-perforated me-3 fs-5 text-secondary"></i> Voucher Codes
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-heart me-3 fs-5 text-secondary"></i> Saved Items
                            </a>
                            <hr class="my-1 opacity-10">
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-shield-lock me-3 fs-5 text-secondary"></i> Account Management
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-envelope-at me-3 fs-5 text-secondary"></i> Newsletter Preferences
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3 text-danger fw-bold">
                                LOGOUT
                            </a>
                        </div>
                    </div>
                </aside>

                <div class="col-lg-9">
                    <div class="card border-0 shadow-sm rounded-3 p-4 mb-3 bg-white">
                        <h5 class="fw-bold mb-4">Account Overview</h5>
                        
                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="card h-100 border border-light-subtle rounded-3 shadow-none p-3">
                                    <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                                        <h6 class="small fw-bold text-uppercase mb-0">Account Details</h6>
                                        <a href="#" class="text-warning text-decoration-none"><i class="bi bi-pencil-square"></i></a>
                                    </div>
                                    <p class="small mb-1 fw-bold">John Doe</p>
                                    <p class="smaller text-muted mb-3">johndoe@example.com</p>
                                    <a href="#" class="smaller text-warning text-decoration-none fw-bold">CHANGE PASSWORD</a>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card h-100 border border-light-subtle rounded-3 shadow-none p-3">
                                    <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                                        <h6 class="small fw-bold text-uppercase mb-0">Address Book</h6>
                                        <a href="#" class="text-warning text-decoration-none"><i class="bi bi-pencil-square"></i></a>
                                    </div>
                                    <p class="smaller fw-bold mb-1">Your default shipping address:</p>
                                    <p class="smaller text-muted mb-0">Plot 123, Herbert Macaulay Way, Yaba</p>
                                    <p class="smaller text-muted mb-0">Lagos, Nigeria</p>
                                    <p class="smaller text-muted mb-0">+234 801 234 5678</p>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card h-100 border border-light-subtle rounded-3 shadow-none p-3">
                                    <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                                        <h6 class="small fw-bold text-uppercase mb-0">Jumia Store Credit</h6>
                                    </div>
                                    <div class="d-flex align-items-center gap-3">
                                        <i class="bi bi-wallet2 fs-3 text-warning"></i>
                                        <h4 class="fw-bold mb-0">₦ 0.00</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card h-100 border border-light-subtle rounded-3 shadow-none p-3">
                                    <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                                        <h6 class="small fw-bold text-uppercase mb-0">Newsletter Preferences</h6>
                                        <a href="#" class="text-warning text-decoration-none"><i class="bi bi-pencil-square"></i></a>
                                    </div>
                                    <p class="smaller text-muted mb-0">You are currently subscribed to:</p>
                                    <p class="smaller fw-bold mb-0 mt-1"><i class="bi bi-check-circle-fill text-success me-1"></i> Daily Deals Newsletter</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden mt-4">
                        <div class="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
                            <h6 class="mb-0 fw-bold small text-uppercase">Recent Orders</h6>
                            <a href="#" class="text-warning text-decoration-none smaller fw-bold">SEE ALL <i class="bi bi-chevron-right"></i></a>
                        </div>
                        <div class="table-responsive">
                            <table class="table align-middle mb-0 small">
                                <thead class="table-light text-muted">
                                    <tr>
                                        <th class="ps-4 fw-normal border-0">Order</th>
                                        <th class="fw-normal border-0">Date</th>
                                        <th class="fw-normal border-0">Status</th>
                                        <th class="fw-normal border-0 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="ps-4">
                                            <div class="d-flex align-items-center gap-2 py-1">
                                                <img src="https://via.placeholder.com/40" class="rounded border" alt="item">
                                                <span class="fw-bold">#39485720</span>
                                            </div>
                                        </td>
                                        <td class="text-muted">12-04-2024</td>
                                        <td><span class="badge bg-success bg-opacity-10 text-success rounded-pill px-3">Delivered</span></td>
                                        <td class="text-center"><a href="#" class="text-warning text-decoration-none fw-bold smaller">SEE DETAILS</a></td>
                                    </tr>
                                    <tr>
                                        <td class="ps-4">
                                            <div class="d-flex align-items-center gap-2 py-1">
                                                <img src="https://via.placeholder.com/40" class="rounded border" alt="item">
                                                <span class="fw-bold">#39485844</span>
                                            </div>
                                        </td>
                                        <td class="text-muted">15-04-2024</td>
                                        <td><span class="badge bg-warning bg-opacity-10 text-warning rounded-pill px-3">Shipped</span></td>
                                        <td class="text-center"><a href="#" class="text-warning text-decoration-none fw-bold smaller">SEE DETAILS</a></td>
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
            .active-nav { background-color: transparent !important; color: #ff9900 !important; font-weight: bold; border-left: 4px solid #ff9900 !important; border-radius: 0 !important; }
            .list-group-item-action:hover { background-color: #f8f9fa; color: #ff9900; }
            .card-header { font-size: 0.9rem; }
            .table > :not(caption) > * > * { padding: 0.8rem 0.5rem; }
        </style>
    </div>
    `;
}