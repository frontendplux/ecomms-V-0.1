export default function JForceRewards() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <header class="bg-white border-bottom py-4 mb-4">
            <div class="container d-flex justify-content-between align-items-center">
                <div>
                    <h4 class="fw-bold mb-1 text-dark">Agent Rewards & Ranks</h4>
                    <p class="smaller text-muted mb-0">Grow your sales to unlock exclusive benefits.</p>
                </div>
                <a href="/jforce/dashboard" class="btn btn-outline-dark btn-sm fw-bold px-3">BACK TO DASHBOARD</a>
            </div>
        </header>

        <main class="container">
            <div class="card border-0 shadow-sm rounded-4 p-4 mb-5 bg-primary text-white" style="background: linear-gradient(135deg, #003366 0%, #0056b3 100%);">
                <div class="row align-items-center">
                    <div class="col-md-7">
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width: 50px; height: 50px; font-size: 20px;">S</div>
                            <div>
                                <h5 class="fw-bold mb-0">Silver Agent Status</h5>
                                <p class="smaller opacity-75 mb-0">Member since Jan 2026</p>
                            </div>
                        </div>
                        <p class="small mb-4">You are doing great! Complete <strong>12 more deliveries</strong> by the end of the month to reach <span class="text-warning fw-bold">Gold Status</span>.</p>
                        <div class="progress bg-white bg-opacity-25 mb-2" style="height: 12px;">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 65%"></div>
                        </div>
                        <div class="d-flex justify-content-between smaller opacity-75">
                            <span>28 Deliveries</span>
                            <span>40 for Gold</span>
                        </div>
                    </div>
                    <div class="col-md-5 text-md-end mt-4 mt-md-0">
                        <div class="bg-white bg-opacity-10 rounded-4 p-3 border border-white border-opacity-10 d-inline-block">
                            <p class="smaller mb-1 text-uppercase ls-1">Current Bonus Rate</p>
                            <h3 class="fw-bold mb-0 text-warning">+5.0% <span class="smaller fw-normal text-white">on basic comm.</span></h3>
                        </div>
                    </div>
                </div>
            </div>

            <h5 class="fw-bold mb-4">Compare Ranks & Perks</h5>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6">
                    <div class="card border-0 shadow-sm rounded-4 h-100 bg-white opacity-75">
                        <div class="card-body p-4">
                            <div class="text-center mb-3">
                                <span class="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 rounded-pill fw-bold">BRONZE</span>
                            </div>
                            <h6 class="text-center fw-bold">New Starter</h6>
                            <hr>
                            <ul class="list-unstyled smaller text-muted mb-0">
                                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> Basic Commission</li>
                                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> Access to JForce App</li>
                                <li class="mb-2 text-decoration-line-through"><i class="bi bi-x text-danger me-2"></i> Monthly Bonus</li>
                                <li class="mb-2 text-decoration-line-through"><i class="bi bi-x text-danger me-2"></i> Marketing Materials</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card border border-primary border-2 shadow-sm rounded-4 h-100 bg-white">
                        <div class="card-body p-4">
                            <div class="text-center mb-3">
                                <span class="badge bg-primary px-3 py-2 rounded-pill fw-bold">SILVER (CURRENT)</span>
                            </div>
                            <h6 class="text-center fw-bold">Rising Star</h6>
                            <hr>
                            <ul class="list-unstyled smaller text-dark mb-0">
                                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> Basic Commission</li>
                                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> <strong>+5% Bonus</strong> on sales</li>
                                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> WhatsApp Group Support</li>
                                <li class="mb-2 text-decoration-line-through text-muted"><i class="bi bi-x text-danger me-2"></i> Early Black Friday Access</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card border-0 shadow-sm rounded-4 h-100 bg-white">
                        <div class="card-body p-4">
                            <div class="text-center mb-3">
                                <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold">GOLD</span>
                            </div>
                            <h6 class="text-center fw-bold">Elite Agent</h6>
                            <hr>
                            <ul class="list-unstyled smaller text-dark mb-0">
                                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> Basic Commission</li>
                                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> <strong>+15% Bonus</strong> on sales</li>
                                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> Branded T-Shirt & Flyers</li>
                                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> Priority Payouts</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card border-0 shadow-sm rounded-4 h-100 bg-dark text-white shadow">
                        <div class="card-body p-4">
                            <div class="text-center mb-3">
                                <span class="badge bg-light text-dark px-3 py-2 rounded-pill fw-bold">PLATINUM</span>
                            </div>
                            <h6 class="text-center fw-bold">Master Agent</h6>
                            <hr class="border-secondary">
                            <ul class="list-unstyled smaller mb-0">
                                <li class="mb-2"><i class="bi bi-check2 text-warning me-2"></i> <strong>+25% Bonus</strong> on sales</li>
                                <li class="mb-2"><i class="bi bi-check2 text-warning me-2"></i> Dedicated Account Manager</li>
                                <li class="mb-2"><i class="bi bi-check2 text-warning me-2"></i> Early Access to Flash Sales</li>
                                <li class="mb-2"><i class="bi bi-check2 text-warning me-2"></i> Annual Agent Summit Invite</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 text-center">
                <p class="text-muted small mb-0">Rewards are calculated based on the previous month's successfully delivered orders.</p>
                <p class="text-muted small"><a href="#" class="text-primary text-decoration-none fw-bold">Read full Terms & Conditions</a></p>
            </div>
        </main>

        <style>
            .smaller { font-size: 12px; }
            .ls-1 { letter-spacing: 1px; }
            .ls-2 { letter-spacing: 2px; }
            .card { transition: transform 0.3s ease; }
            .card:hover { transform: translateY(-5px); }
            .badge { font-size: 10px; }
        </style>
    </div>
    `;
}