export default function LogisticsDashboard() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold text-warning d-flex align-items-center" href="#">
                    <i class="bi bi-truck me-2"></i> LOGISTICS HUB
                </a>
                <div class="d-flex align-items-center gap-4 text-white">
                    <div class="d-none d-md-block text-end">
                        <p class="smaller mb-0 opacity-75">Fleet ID: #SPD-Lagos-04</p>
                        <p class="small fw-bold mb-0">SpeedForce Logistics Ltd.</p>
                    </div>
                    <div class="position-relative">
                        <i class="bi bi-bell fs-5"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                    </div>
                </div>
            </div>
        </nav>

        <main class="container-fluid px-4 py-4">
            <div class="row g-3 mb-4">
                <div class="col-md-3">
                    <div class="card border-0 shadow-sm rounded-4 p-3 bg-white">
                        <p class="smaller text-muted fw-bold mb-1 text-uppercase">Active Fleet</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <h3 class="fw-bold mb-0">24 <span class="smaller fw-normal text-muted">/ 30</span></h3>
                            <span class="badge bg-success bg-opacity-10 text-success px-2 py-1">80% Online</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0 shadow-sm rounded-4 p-3 bg-white">
                        <p class="smaller text-muted fw-bold mb-1 text-uppercase">Today's Deliveries</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <h3 class="fw-bold mb-0">142</h3>
                            <span class="badge bg-warning bg-opacity-10 text-warning px-2 py-1">In Progress</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0 shadow-sm rounded-4 p-3 bg-white">
                        <p class="smaller text-muted fw-bold mb-1 text-uppercase">SLA Performance</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <h3 class="fw-bold mb-0 text-success">98.2%</h3>
                            <i class="bi bi-arrow-up-right text-success"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0 shadow-sm rounded-4 p-3 bg-white">
                        <p class="smaller text-muted fw-bold mb-1 text-uppercase">Fuel Credit Bal.</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <h3 class="fw-bold mb-0">₦ 85,400</h3>
                            <button class="btn btn-outline-primary btn-sm py-0">Top-up</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                        <div class="p-3 border-bottom d-flex justify-content-between align-items-center">
                            <h6 class="fw-bold mb-0"><i class="bi bi-geo-alt me-2"></i>Live Rider Tracking</h6>
                            <div class="btn-group btn-group-sm shadow-sm">
                                <button class="btn btn-light active border">All</button>
                                <button class="btn btn-light border">Moving</button>
                                <button class="btn btn-light border">Idle</button>
                            </div>
                        </div>
                        <div class="bg-light position-relative" style="height: 450px;">
                            <div class="w-100 h-100 d-flex align-items-center justify-content-center opacity-25">
                                <i class="bi bi-map display-1"></i>
                            </div>
                            <div class="position-absolute bg-white shadow-sm p-2 rounded-3 border" style="top: 20%; left: 30%;">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="bg-success rounded-circle" style="width: 8px; height: 8px;"></div>
                                    <span class="smaller fw-bold">Rider: Musa (0.2km to Dropoff)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                        <h6 class="fw-bold mb-4">Rider Leaderboard (Today)</h6>
                        <div class="d-flex flex-column gap-3">
                            <div class="d-flex align-items-center gap-3 p-2 bg-light rounded-3">
                                <span class="fw-bold text-muted">#1</span>
                                <div class="flex-grow-1">
                                    <p class="small fw-bold mb-0">Babatunde J.</p>
                                    <p class="smaller text-muted mb-0">12 Delivers • 100% Success</p>
                                </div>
                                <i class="bi bi-trophy-fill text-warning"></i>
                            </div>
                            <div class="d-flex align-items-center gap-3 p-2">
                                <span class="fw-bold text-muted">#2</span>
                                <div class="flex-grow-1">
                                    <p class="small fw-bold mb-0">Emeka V.</p>
                                    <p class="smaller text-muted mb-0">10 Delivers • 98% Success</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-3 p-2">
                                <span class="fw-bold text-muted">#3</span>
                                <div class="flex-grow-1">
                                    <p class="small fw-bold mb-0">Sani U.</p>
                                    <p class="smaller text-muted mb-0">9 Delivers • 100% Success</p>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-outline-dark w-100 btn-sm mt-auto py-2 fw-bold">VIEW ALL RIDERS</button>
                    </div>
                </div>

                <div class="col-12">
                    <div class="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
                        <div class="p-3 border-bottom bg-danger bg-opacity-10">
                            <h6 class="fw-bold mb-0 text-danger"><i class="bi bi-exclamation-triangle-fill me-2"></i>Critical Incidents (Requires Action)</h6>
                        </div>
                        <div class="table-responsive">
                            <table class="table align-middle mb-0">
                                <thead class="table-light smaller text-muted fw-bold">
                                    <tr>
                                        <th class="ps-4">RIDER</th>
                                        <th>INCIDENT TYPE</th>
                                        <th>TIME</th>
                                        <th>LOCATION</th>
                                        <th class="text-end pe-4">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody class="smaller">
                                    <tr>
                                        <td class="ps-4 fw-bold">Ibrahim K.</td>
                                        <td><span class="text-danger fw-bold">Customer Unavailable</span></td>
                                        <td>10 mins ago</td>
                                        <td>Lekki Phase 1</td>
                                        <td class="text-end pe-4">
                                            <button class="btn btn-dark btn-sm px-3">Call Rider</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="ps-4 fw-bold">Sunday O.</td>
                                        <td><span class="text-warning fw-bold">Idle > 30 Mins</span></td>
                                        <td>45 mins ago</td>
                                        <td>Oshodi Hub</td>
                                        <td class="text-end pe-4">
                                            <button class="btn btn-outline-dark btn-sm px-3">Track</button>
                                        </td>
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
            .bg-warning.bg-opacity-10 { background-color: rgba(255, 193, 7, 0.1) !important; }
            .bg-danger.bg-opacity-10 { background-color: rgba(220, 53, 69, 0.1) !important; }
            .card { transition: transform 0.2s; }
            .hover-card:hover { transform: translateY(-3px); }
        </style>
    </div>
    `;
}