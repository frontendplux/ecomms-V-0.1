export default function ViewAllRiders() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
            <div class="container-fluid">
                <div class="d-flex align-items-center">
                    <a href="/logistics/dashboard" class="text-warning me-3 text-decoration-none">
                        <i class="bi bi-arrow-left fs-4"></i>
                    </a>
                    <h5 class="navbar-brand fw-bold mb-0">FLEET MANAGEMENT (30 RIDERS)</h5>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-outline-light btn-sm fw-bold"><i class="bi bi-download me-1"></i> EXPORT CSV</button>
                    <button class="btn btn-warning btn-sm fw-bold">+ REGISTER NEW RIDER</button>
                </div>
            </div>
        </nav>

        <main class="container-fluid px-4 mt-4">
            <div class="card border-0 shadow-sm rounded-4 p-3 mb-4 bg-white">
                <div class="row g-2 align-items-center">
                    <div class="col-md-4">
                        <div class="input-group">
                            <span class="input-group-text bg-light border-0"><i class="bi bi-search text-muted"></i></span>
                            <input type="text" class="form-control border-0 bg-light py-2 smaller" placeholder="Search by name, ID, or bike plate...">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <select class="form-select border-0 bg-light py-2 smaller fw-bold">
                            <option>Status: All</option>
                            <option>Active (Delivering)</option>
                            <option>Idle (Waiting)</option>
                            <option>Offline</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="form-select border-0 bg-light py-2 smaller fw-bold">
                            <option>Zone: All Lagos</option>
                            <option>Ikeja / Maryland</option>
                            <option>Lekki / Ajah</option>
                            <option>Surulere / Yaba</option>
                        </select>
                    </div>
                    <div class="col-md-4 text-end">
                        <span class="smaller text-muted me-3">Last updated: Just now</span>
                        <button class="btn btn-light btn-sm border-0"><i class="bi bi-arrow-clockwise"></i></button>
                    </div>
                </div>
            </div>

            <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                <div class="table-responsive">
                    <table class="table align-middle mb-0">
                        <thead class="table-light smaller text-muted fw-bold">
                            <tr>
                                <th class="ps-4">RIDER NAME & ID</th>
                                <th>STATUS</th>
                                <th>CURRENT ZONE</th>
                                <th>TODAY'S LOAD</th>
                                <th>BATTERY/FUEL</th>
                                <th>SLA (MTD)</th>
                                <th class="text-end pe-4">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody class="smaller">
                            <tr>
                                <td class="ps-4">
                                    <div class="d-flex align-items-center gap-3">
                                        <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold" style="width: 38px; height: 38px;">BJ</div>
                                        <div>
                                            <p class="fw-bold mb-0">Babatunde Jamiu</p>
                                            <p class="smaller text-muted mb-0 text-uppercase">ID: RID-4920 | LA-882-KK</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge bg-success bg-opacity-10 text-success px-3 py-2 border border-success border-opacity-25 rounded-pill">
                                        <i class="bi bi-truck me-1"></i> DELIVERING
                                    </span>
                                </td>
                                <td>Lekki Phase 1</td>
                                <td><strong>12</strong> / 15 Orders</td>
                                <td>
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="progress flex-grow-1" style="height: 6px; width: 60px;">
                                            <div class="progress-bar bg-success" style="width: 82%"></div>
                                        </div>
                                        <span class="smaller fw-bold">82%</span>
                                    </div>
                                </td>
                                <td><span class="fw-bold text-dark">99.1%</span></td>
                                <td class="text-end pe-4">
                                    <button class="btn btn-light btn-sm border fw-bold me-1">Track</button>
                                    <button class="btn btn-dark btn-sm fw-bold">Details</button>
                                </td>
                            </tr>

                            <tr>
                                <td class="ps-4">
                                    <div class="d-flex align-items-center gap-3">
                                        <div class="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center fw-bold" style="width: 38px; height: 38px;">MK</div>
                                        <div>
                                            <p class="fw-bold mb-0">Musa Kamara</p>
                                            <p class="smaller text-muted mb-0 text-uppercase">ID: RID-5102 | LA-112-AB</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge bg-warning bg-opacity-10 text-warning px-3 py-2 border border-warning border-opacity-25 rounded-pill">
                                        <i class="bi bi-pause-circle me-1"></i> IDLE (22m)
                                    </span>
                                </td>
                                <td>Oshodi Hub</td>
                                <td><strong>0</strong> / 0 Orders</td>
                                <td>
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="progress flex-grow-1" style="height: 6px; width: 60px;">
                                            <div class="progress-bar bg-danger" style="width: 15%"></div>
                                        </div>
                                        <span class="smaller fw-bold text-danger">15%</span>
                                    </div>
                                </td>
                                <td><span class="fw-bold text-dark">94.5%</span></td>
                                <td class="text-end pe-4">
                                    <button class="btn btn-light btn-sm border fw-bold me-1">Track</button>
                                    <button class="btn btn-dark btn-sm fw-bold">Details</button>
                                </td>
                            </tr>

                            <tr class="opacity-75 bg-light bg-opacity-50">
                                <td class="ps-4">
                                    <div class="d-flex align-items-center gap-3">
                                        <div class="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center fw-bold" style="width: 38px; height: 38px;">SO</div>
                                        <div>
                                            <p class="fw-bold mb-0 text-muted">Sunday Okoro</p>
                                            <p class="smaller text-muted mb-0 text-uppercase">ID: RID-3319 | LA-404-ZZ</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 border border-secondary border-opacity-25 rounded-pill">
                                        OFFLINE
                                    </span>
                                </td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td><span class="fw-bold text-muted">88.0%</span></td>
                                <td class="text-end pe-4">
                                    <button class="btn btn-light btn-sm border fw-bold disabled">Track</button>
                                    <button class="btn btn-dark btn-sm fw-bold">Details</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .progress { border-radius: 10px; background-color: #eee; }
            .table-responsive { min-height: 400px; }
            .btn-warning { background-color: #ff9900; border: none; color: #fff; }
            .btn-warning:hover { background-color: #e68a00; color: #fff; }
            tr { transition: background 0.2s; }
            tr:hover { background-color: #fcfcfc; }
        </style>
    </div>
    `;
}



export function RegisterRider() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center">
                    <a href="/logistics/riders" class="text-white me-3 text-decoration-none">
                        <i class="bi bi-x-lg fs-5"></i>
                    </a>
                    <span class="navbar-brand fw-bold mb-0">ONBOARD NEW RIDER</span>
                </div>
                <button type="submit" form="riderForm" class="btn btn-warning btn-sm fw-bold px-4">REGISTER RIDER</button>
            </div>
        </nav>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <form id="riderForm" class="card border-0 shadow-sm rounded-4 overflow-hidden">
                        
                        <div class="p-4 p-md-5 border-bottom">
                            <div class="d-flex align-items-center gap-3 mb-4">
                                <div class="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width: 40px; height: 40px;">1</div>
                                <h5 class="fw-bold mb-0">Personal Information</h5>
                            </div>
                            
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1 text-uppercase">Full Legal Name</label>
                                    <input type="text" class="form-control py-2" placeholder="As seen on ID" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1 text-uppercase">Phone Number</label>
                                    <input type="tel" class="form-control py-2" placeholder="080 000 0000" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1 text-uppercase">Date of Birth</label>
                                    <input type="date" class="form-control py-2" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1 text-uppercase">Home Address</label>
                                    <input type="text" class="form-control py-2" placeholder="Current residential address">
                                </div>
                            </div>
                        </div>

                        <div class="p-4 p-md-5 border-bottom bg-light bg-opacity-50">
                            <div class="d-flex align-items-center gap-3 mb-4">
                                <div class="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width: 40px; height: 40px;">2</div>
                                <h5 class="fw-bold mb-0">Vehicle & License Details</h5>
                            </div>

                            <div class="row g-3">
                                <div class="col-md-4">
                                    <label class="smaller fw-bold text-muted mb-1 text-uppercase">Vehicle Type</label>
                                    <select class="form-select py-2">
                                        <option>Motorbike (200cc+)</option>
                                        <option>Delivery Van</option>
                                        <option>Bicycle / E-bike</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label class="smaller fw-bold text-muted mb-1 text-uppercase">Plate Number</label>
                                    <input type="text" class="form-control py-2" placeholder="e.g. KJA-123-AB" required>
                                </div>
                                <div class="col-md-4">
                                    <label class="smaller fw-bold text-muted mb-1 text-uppercase">License Number</label>
                                    <input type="text" class="form-control py-2" placeholder="Drivers License No." required>
                                </div>
                                <div class="col-md-12 mt-4">
                                    <div class="border-dashed p-4 rounded-3 text-center bg-white">
                                        <i class="bi bi-cloud-arrow-up fs-2 text-muted"></i>
                                        <p class="smaller text-muted mb-0 mt-2">Upload Clear Photo of <strong>Driver's License</strong> & <strong>Vehicle Papers</strong></p>
                                        <input type="file" class="d-none" id="docUpload" multiple>
                                        <label for="docUpload" class="btn btn-outline-dark btn-sm mt-2 fw-bold px-3">SELECT FILES</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 p-md-5">
                            <div class="d-flex align-items-center gap-3 mb-4">
                                <div class="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width: 40px; height: 40px;">3</div>
                                <h5 class="fw-bold mb-0">Emergency Contact (Next of Kin)</h5>
                            </div>

                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1 text-uppercase">Contact Name</label>
                                    <input type="text" class="form-control py-2" placeholder="Full name">
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1 text-uppercase">Relationship</label>
                                    <select class="form-select py-2">
                                        <option>Spouse</option>
                                        <option>Parent</option>
                                        <option>Sibling</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div class="col-md-12">
                                    <label class="smaller fw-bold text-muted mb-1 text-uppercase">Emergency Phone Number</label>
                                    <input type="tel" class="form-control py-2" placeholder="Must be reachable 24/7">
                                </div>
                            </div>
                        </div>

                        <div class="p-4 bg-light border-top text-end">
                            <button type="button" class="btn btn-link text-muted text-decoration-none fw-bold me-3">Cancel</button>
                            <button type="submit" class="btn btn-dark px-5 py-2 fw-bold">CREATE RIDER ACCOUNT</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .border-dashed { border: 2px dashed #dee2e6; }
            .form-control:focus, .form-select:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.25rem rgba(255, 153, 0, 0.1);
            }
            .bg-primary.bg-opacity-10 { background-color: rgba(13, 110, 253, 0.1) !important; }
        </style>
    </div>
    `;
}



export function TrackRider() {
    return /*html*/`
    <div class="bg-light min-vh-100">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-2">
            <div class="container-fluid">
                <div class="d-flex align-items-center">
                    <a href="/logistics/riders" class="text-warning me-3 text-decoration-none">
                        <i class="bi bi-arrow-left fs-4"></i>
                    </a>
                    <div>
                        <h6 class="navbar-brand fw-bold mb-0">TRACKING: BABATUNDE JAMIU</h6>
                        <p class="smaller text-white opacity-50 mb-0">ID: RID-4920 | LA-882-KK</p>
                    </div>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-success btn-sm fw-bold px-3"><i class="bi bi-telephone-fill me-2"></i> CALL RIDER</button>
                </div>
            </div>
        </nav>

        <div class="container-fluid p-0">
            <div class="row g-0" style="height: calc(100vh - 70px);">
                <div class="col-lg-8 position-relative bg-secondary bg-opacity-10">
                    <div class="w-100 h-100 d-flex align-items-center justify-content-center opacity-25">
                        <i class="bi bi-map-fill" style="font-size: 10rem;"></i>
                    </div>

                    <div class="position-absolute top-0 start-0 m-4">
                        <div class="card border-0 shadow-sm rounded-4 p-3 bg-white" style="width: 280px;">
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <span class="badge bg-success rounded-circle p-1"><i class="bi bi-check smaller"></i></span>
                                <span class="smaller fw-bold text-uppercase ls-1">Current Status</span>
                            </div>
                            <h6 class="fw-bold mb-1">En Route to Drop-off</h6>
                            <p class="smaller text-muted mb-3">Speed: 32 km/h | Heading North</p>
                            
                            <div class="progress mb-2" style="height: 6px;">
                                <div class="progress-bar bg-warning" style="width: 75%"></div>
                            </div>
                            <div class="d-flex justify-content-between smaller fw-bold">
                                <span>Ikeja Hub</span>
                                <span class="text-primary">Lekki (2.4km left)</span>
                            </div>
                        </div>
                    </div>

                    <div class="position-absolute" style="top: 45%; left: 55%; transform: translate(-50%, -50%);">
                        <div class="bg-primary text-white rounded-circle shadow-lg d-flex align-items-center justify-content-center border border-4 border-white" style="width: 50px; height: 50px;">
                            <i class="bi bi-bicycle fs-4"></i>
                        </div>
                        <div class="bg-dark text-white smaller fw-bold px-2 py-1 rounded-pill mt-2 text-center shadow">
                            7 Mins Away
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 bg-white border-start shadow-sm overflow-auto">
                    <div class="p-4">
                        <h6 class="fw-bold mb-4">Current Assignments (3)</h6>
                        
                        <div class="border rounded-4 p-3 mb-3 border-primary bg-primary bg-opacity-10">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <span class="badge bg-primary px-2">NEXT DROP</span>
                                <span class="smaller fw-bold text-primary">#99284752</span>
                            </div>
                            <h6 class="small fw-bold mb-1">Janet Oladipupo</h6>
                            <p class="smaller text-muted mb-3"><i class="bi bi-geo-alt-fill me-1"></i> Plot 12, Admiralty Way, Lekki</p>
                            <div class="d-flex gap-2">
                                <button class="btn btn-white btn-sm border fw-bold w-100 text-primary">View Items</button>
                                <button class="btn btn-primary btn-sm fw-bold w-100">Share Link</button>
                            </div>
                        </div>

                        <div class="border rounded-4 p-3 mb-3 opacity-75">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <span class="badge bg-secondary px-2">QUEUED</span>
                                <span class="smaller fw-bold text-muted">#99284710</span>
                            </div>
                            <h6 class="small fw-bold mb-1">Musa Kamara</h6>
                            <p class="smaller text-muted mb-0"><i class="bi bi-geo-alt-fill me-1"></i> 42, Isaac John St, Ikeja</p>
                        </div>

                        <hr class="my-4">

                        <h6 class="fw-bold mb-3">Rider Vitals</h6>
                        <div class="row g-2">
                            <div class="col-6">
                                <div class="bg-light p-3 rounded-3 text-center">
                                    <i class="bi bi-battery-charging text-success mb-1"></i>
                                    <p class="smaller text-muted mb-0">Phone Battery</p>
                                    <p class="small fw-bold mb-0">88%</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="bg-light p-3 rounded-3 text-center">
                                    <i class="bi bi-signal text-primary mb-1"></i>
                                    <p class="smaller text-muted mb-0">GPS Signal</p>
                                    <p class="small fw-bold mb-0">Strong</p>
                                </div>
                            </div>
                        </div>

                        <h6 class="fw-bold mt-4 mb-3">Activity Log</h6>
                        <div class="timeline-sm smaller">
                            <div class="d-flex gap-3 mb-3">
                                <span class="text-muted">10:15</span>
                                <p class="mb-0">Picked up package at <strong>Ikeja Hub</strong></p>
                            </div>
                            <div class="d-flex gap-3 mb-3">
                                <span class="text-muted">10:02</span>
                                <p class="mb-0">Arrived at <strong>Ikeja Hub</strong></p>
                            </div>
                            <div class="d-flex gap-3 mb-3">
                                <span class="text-muted">09:45</span>
                                <p class="mb-0 text-success fw-bold">Rider went online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .smaller { font-size: 11px; }
            .ls-1 { letter-spacing: 1px; }
            .btn-white { background-color: #fff; }
            .timeline-sm { border-left: 2px solid #eee; padding-left: 15px; margin-left: 10px; }
            .bg-opacity-10 { background-color: rgba(var(--bs-primary-rgb), 0.05) !important; }
        </style>
    </div>
    `;
}



export  function RiderDetails() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center">
                    <a href="/logistics/riders" class="text-white me-3 text-decoration-none">
                        <i class="bi bi-arrow-left fs-4"></i>
                    </a>
                    <span class="navbar-brand fw-bold mb-0 text-uppercase ls-1">Rider Profile: Babatunde Jamiu</span>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-outline-light btn-sm fw-bold">SUSPEND RIDER</button>
                    <button class="btn btn-warning btn-sm fw-bold px-3">EDIT PROFILE</button>
                </div>
            </div>
        </nav>

        <main class="container">
            <div class="row g-4">
                
                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 text-center mb-4 bg-white">
                        <div class="position-relative d-inline-block mx-auto mb-3">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" class="rounded-circle border border-4 border-white shadow-sm" style="width: 120px; height: 120px; object-fit: cover;">
                            <span class="position-absolute bottom-0 end-0 bg-success border border-3 border-white rounded-circle p-2" title="Online"></span>
                        </div>
                        <h5 class="fw-bold mb-1">Babatunde Jamiu</h5>
                        <p class="smaller text-muted mb-3">Joined: Jan 12, 2026 (4 Months)</p>
                        
                        <div class="d-flex justify-content-center gap-2 mb-4">
                            <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">⭐ 4.8 Rating</span>
                            <span class="badge bg-dark px-3 py-2 rounded-pill">Level 4 Rider</span>
                        </div>

                        <div class="text-start border-top pt-3">
                            <p class="smaller fw-bold text-muted text-uppercase mb-2 ls-1">Contact Information</p>
                            <p class="small mb-1"><i class="bi bi-telephone me-2"></i> +234 803 123 4567</p>
                            <p class="small mb-1"><i class="bi bi-envelope me-2"></i> b.jamiu@speedforce.com</p>
                            <p class="small mb-0"><i class="bi bi-geo-alt me-2"></i> 14, Olosa St, Mushin, Lagos</p>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-4 p-4 bg-white">
                        <h6 class="fw-bold mb-3 text-uppercase smaller ls-1">Assigned Asset</h6>
                        <div class="d-flex align-items-center gap-3 p-3 bg-light rounded-3">
                            <i class="bi bi-bicycle fs-2 text-primary"></i>
                            <div>
                                <p class="small fw-bold mb-0">TVS HLX 125 (2025)</p>
                                <p class="smaller text-muted mb-0 text-uppercase">Plate: LA-882-KK</p>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p class="smaller fw-bold text-muted mb-1 text-uppercase">Insurance Status</p>
                            <span class="badge bg-success bg-opacity-10 text-success w-100 py-2">VALID UNTIL DEC 2026</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-8">
                    
                    <div class="row g-3 mb-4">
                        <div class="col-md-4">
                            <div class="card border-0 shadow-sm rounded-4 p-3 bg-white text-center">
                                <h3 class="fw-bold mb-0">1,240</h3>
                                <p class="smaller text-muted text-uppercase mb-0">Total Deliveries</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-0 shadow-sm rounded-4 p-3 bg-white text-center">
                                <h3 class="fw-bold mb-0 text-success">99.1%</h3>
                                <p class="smaller text-muted text-uppercase mb-0">SLA Success</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-0 shadow-sm rounded-4 p-3 bg-white text-center">
                                <h3 class="fw-bold mb-0">₦ 12.4k</h3>
                                <p class="smaller text-muted text-uppercase mb-0">Cash on Hand</p>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
                        <div class="d-flex border-bottom overflow-auto">
                            <button class="btn btn-link text-decoration-none py-3 px-4 fw-bold text-primary border-bottom border-3 border-primary rounded-0">Recent Trips</button>
                            <button class="btn btn-link text-decoration-none py-3 px-4 fw-bold text-muted rounded-0">Incidents</button>
                            <button class="btn btn-link text-decoration-none py-3 px-4 fw-bold text-muted rounded-0">Payouts</button>
                            <button class="btn btn-link text-decoration-none py-3 px-4 fw-bold text-muted rounded-0">Documents</button>
                        </div>
                        
                        <div class="table-responsive">
                            <table class="table align-middle mb-0">
                                <thead class="table-light smaller text-muted fw-bold">
                                    <tr>
                                        <th class="ps-4">ORDER ID</th>
                                        <th>DATE</th>
                                        <th>ROUTE</th>
                                        <th>STATUS</th>
                                        <th class="text-end pe-4">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody class="smaller">
                                    <tr>
                                        <td class="ps-4 fw-bold">#99284752</td>
                                        <td>Apr 05, 10:15</td>
                                        <td>Ikeja → Lekki</td>
                                        <td><span class="badge bg-success bg-opacity-10 text-success px-2 py-1">Delivered</span></td>
                                        <td class="text-end pe-4"><button class="btn btn-light btn-sm"><i class="bi bi-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td class="ps-4 fw-bold">#99284690</td>
                                        <td>Apr 05, 08:30</td>
                                        <td>Yaba → Surulere</td>
                                        <td><span class="badge bg-success bg-opacity-10 text-success px-2 py-1">Delivered</span></td>
                                        <td class="text-end pe-4"><button class="btn btn-light btn-sm"><i class="bi bi-eye"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td class="ps-4 fw-bold">#99284555</td>
                                        <td>Apr 04, 16:20</td>
                                        <td>Maryland → Ikeja</td>
                                        <td><span class="badge bg-danger bg-opacity-10 text-danger px-2 py-1">Rejected</span></td>
                                        <td class="text-end pe-4"><button class="btn btn-light btn-sm"><i class="bi bi-eye"></i></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="mt-4 p-4 bg-dark text-white rounded-4 shadow-lg">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <h6 class="fw-bold mb-1">Fleet Manager's Private Note</h6>
                                <p class="smaller opacity-75 mb-0">"Babatunde is highly reliable for long-distance deliveries. Strong knowledge of the Lekki-Epe expressway routes."</p>
                            </div>
                            <div class="col-md-4 text-md-end mt-3 mt-md-0">
                                <button class="btn btn-outline-light btn-sm px-4">Edit Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .ls-1 { letter-spacing: 1px; }
            .bg-opacity-10 { background-color: rgba(var(--bs-primary-rgb), 0.1) !important; }
            .badge { font-weight: 600; }
            .table-responsive { min-height: 300px; }
            .btn-link:hover { color: #ff9900 !important; }
        </style>
    </div>
    `;
}


export  function EditRiderProfile() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center">
                    <a href="/logistics/rider-details" class="text-white me-3 text-decoration-none">
                        <i class="bi bi-x-lg fs-5"></i>
                    </a>
                    <span class="navbar-brand fw-bold mb-0 text-uppercase ls-1">Edit Rider: Babatunde Jamiu</span>
                </div>
                <div class="d-flex gap-2">
                    <button type="submit" form="editRiderForm" class="btn btn-warning btn-sm fw-bold px-4 shadow-sm">SAVE CHANGES</button>
                </div>
            </div>
        </nav>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <form id="editRiderForm">
                        <div class="row g-4">
                            
                            <div class="col-md-4">
                                <div class="card border-0 shadow-sm rounded-4 p-4 text-center bg-white">
                                    <div class="position-relative d-inline-block mx-auto mb-3">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" class="rounded-circle border border-4 border-white shadow-sm" style="width: 120px; height: 120px; object-fit: cover;">
                                        <label for="photoUpload" class="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle p-2 shadow-sm cursor-pointer" style="width: 35px; height: 35px;">
                                            <i class="bi bi-camera-fill smaller"></i>
                                            <input type="file" id="photoUpload" class="d-none">
                                        </label>
                                    </div>
                                    <h6 class="fw-bold mb-1">Update Profile Photo</h6>
                                    <p class="smaller text-muted mb-4">Clear face-forward photos help customers identify their riders.</p>
                                    
                                    <hr>
                                    
                                    <div class="text-start">
                                        <label class="smaller fw-bold text-muted mb-2 text-uppercase">Account Status</label>
                                        <select class="form-select form-select-sm fw-bold mb-3">
                                            <option value="active" selected class="text-success">● Active / Delivering</option>
                                            <option value="on-leave">● On Leave</option>
                                            <option value="suspended" class="text-danger">● Suspended</option>
                                        </select>
                                        
                                        <label class="smaller fw-bold text-muted mb-2 text-uppercase">Rider Level</label>
                                        <select class="form-select form-select-sm fw-bold">
                                            <option>Level 1 (Newbie)</option>
                                            <option>Level 2</option>
                                            <option>Level 3</option>
                                            <option selected>Level 4 (Pro)</option>
                                            <option>Level 5 (Elite)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-8">
                                <div class="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
                                    <h6 class="fw-bold text-primary text-uppercase smaller ls-2 mb-4">Contact & Identity</h6>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label class="smaller fw-bold text-muted mb-1">FULL NAME</label>
                                            <input type="text" class="form-control" value="Babatunde Jamiu">
                                        </div>
                                        <div class="col-md-6">
                                            <label class="smaller fw-bold text-muted mb-1">PHONE NUMBER</label>
                                            <input type="tel" class="form-control" value="+234 803 123 4567">
                                        </div>
                                        <div class="col-md-12">
                                            <label class="smaller fw-bold text-muted mb-1">HOME ADDRESS</label>
                                            <textarea class="form-control" rows="2">14, Olosa St, Mushin, Lagos State</textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <h6 class="fw-bold text-primary text-uppercase smaller ls-2 mb-0">Vehicle & Asset Assignment</h6>
                                        <span class="badge bg-light text-dark border">Assigned Jan 2026</span>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label class="smaller fw-bold text-muted mb-1">VEHICLE TYPE</label>
                                            <select class="form-select">
                                                <option selected>Motorbike (200cc+)</option>
                                                <option>Delivery Van</option>
                                                <option>E-Bike</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="smaller fw-bold text-muted mb-1">PLATE NUMBER</label>
                                            <input type="text" class="form-control" value="LA-882-KK">
                                        </div>
                                        <div class="col-md-12">
                                            <div class="p-3 bg-light rounded-3 d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center gap-2">
                                                    <i class="bi bi-shield-check text-success fs-4"></i>
                                                    <div>
                                                        <p class="smaller fw-bold mb-0">GIT Insurance Policy</p>
                                                        <p class="smaller text-muted mb-0">Policy #GP-99022-X</p>
                                                    </div>
                                                </div>
                                                <button type="button" class="btn btn-sm btn-outline-primary fw-bold">Update Documents</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card border-0 shadow-sm rounded-4 p-4 bg-white">
                                    <h6 class="fw-bold text-primary text-uppercase smaller ls-2 mb-4">Emergency Contact (Next of Kin)</h6>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label class="smaller fw-bold text-muted mb-1">CONTACT NAME</label>
                                            <input type="text" class="form-control" value="Mariam Jamiu">
                                        </div>
                                        <div class="col-md-6">
                                            <label class="smaller fw-bold text-muted mb-1">RELATIONSHIP</label>
                                            <input type="text" class="form-control" value="Spouse">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .ls-2 { letter-spacing: 1.5px; }
            .cursor-pointer { cursor: pointer; }
            .form-control, .form-select {
                padding: 0.6rem 0.75rem;
                font-size: 0.9rem;
                border-color: #e9ecef;
            }
            .form-control:focus, .form-select:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.25rem rgba(255, 153, 0, 0.1);
            }
            .btn-warning { background-color: #ff9900; border: none; }
            .btn-warning:hover { background-color: #e68a00; }
        </style>
    </div>
    `;
}