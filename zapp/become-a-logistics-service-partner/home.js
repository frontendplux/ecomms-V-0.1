export default function LogisticsPartnerRegistration() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <section class="bg-dark text-white py-5 mb-5 shadow-lg" style="background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'); background-size: cover; background-position: center;">
            <div class="container py-5 text-center">
                <h1 class="display-4 fw-bold mb-3">Power Our <span class="text-warning">Last Mile</span></h1>
                <p class="lead mx-auto mb-4" style="max-width: 700px;">Join Africa's largest logistics network. We provide the technology and the volume; you provide the fleet.</p>
                <div class="d-flex justify-content-center gap-3">
                    <a href="#apply" class="btn btn-warning btn-lg fw-bold px-5 py-3">REGISTER YOUR FLEET</a>
                    <a href="#requirements" class="btn btn-outline-light btn-lg px-4 py-3">VIEW REQUIREMENTS</a>
                </div>
            </div>
        </section>

        <div class="container" id="apply">
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                        <h4 class="fw-bold mb-4">Logistics Partnership Application</h4>
                        
                        <form id="logisticsForm">
                            <div class="mb-5">
                                <h6 class="fw-bold text-primary text-uppercase smaller ls-2 mb-3">1. Business Information</h6>
                                <div class="row g-3">
                                    <div class="col-md-12">
                                        <label class="smaller fw-bold text-muted mb-1">REGISTERED COMPANY NAME</label>
                                        <input type="text" class="form-control py-2" placeholder="e.g. SpeedForce Logistics LTD" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="smaller fw-bold text-muted mb-1">BUSINESS REGISTRATION NO (RC/BN)</label>
                                        <input type="text" class="form-control py-2" placeholder="RC-1234567">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="smaller fw-bold text-muted mb-1">TAX ID (TIN)</label>
                                        <input type="text" class="form-control py-2" placeholder="12345678-0001">
                                    </div>
                                </div>
                            </div>

                            <div class="mb-5">
                                <h6 class="fw-bold text-primary text-uppercase smaller ls-2 mb-3">2. Fleet Capacity & Type</h6>
                                <p class="smaller text-muted mb-3">Select the primary assets you intend to deploy.</p>
                                <div class="row g-3">
                                    <div class="col-md-4">
                                        <div class="border rounded-3 p-3 text-center h-100 selection-card">
                                            <i class="bi bi-bicycle fs-2 d-block mb-2"></i>
                                            <span class="smaller fw-bold d-block">Motorbikes</span>
                                            <input type="number" class="form-control form-control-sm mt-2 text-center" placeholder="Qty">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="border rounded-3 p-3 text-center h-100 selection-card">
                                            <i class="bi bi-truck-flatbed fs-2 d-block mb-2"></i>
                                            <span class="smaller fw-bold d-block">Vans / Trucks</span>
                                            <input type="number" class="form-control form-control-sm mt-2 text-center" placeholder="Qty">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="border rounded-3 p-3 text-center h-100 selection-card">
                                            <i class="bi bi-shop fs-2 d-block mb-2"></i>
                                            <span class="smaller fw-bold d-block">Hub / Drop-off</span>
                                            <input type="number" class="form-control form-control-sm mt-2 text-center" placeholder="Sq Ft">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-5">
                                <h6 class="fw-bold text-primary text-uppercase smaller ls-2 mb-3">3. Operational Coverage</h6>
                                <div class="row g-3">
                                    <div class="col-md-12">
                                        <label class="smaller fw-bold text-muted mb-1">PRIMARY OPERATING STATE</label>
                                        <select class="form-select py-2">
                                            <option selected disabled>Select State</option>
                                            <option>Lagos</option>
                                            <option>Abuja (FCT)</option>
                                            <option>Rivers</option>
                                            <option>Kano</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12">
                                        <label class="smaller fw-bold text-muted mb-1">SPECIFIC AREAS / LOCAL GOVERNMENTS</label>
                                        <input type="text" class="form-control py-2" placeholder="e.g. Ikeja, Maryland, Oshodi">
                                    </div>
                                </div>
                            </div>

                            <div class="mb-5">
                                <h6 class="fw-bold text-primary text-uppercase smaller ls-2 mb-3">4. Document Uploads</h6>
                                <div class="bg-light p-4 rounded-3 border-dashed text-center">
                                    <i class="bi bi-file-earmark-pdf fs-1 text-muted opacity-50"></i>
                                    <p class="smaller text-muted mt-2">Upload Business Registration, GIT Insurance, and Fleet List (CSV/PDF)</p>
                                    <button type="button" class="btn btn-outline-primary btn-sm px-4 fw-bold">CHOOSE FILES</button>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-warning w-100 fw-bold py-3 shadow-sm rounded-3">SUBMIT PARTNERSHIP REQUEST</button>
                        </form>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="sticky-top" style="top: 2rem;">
                        <div class="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
                            <h6 class="fw-bold mb-4">Onboarding Process</h6>
                            <div class="timeline">
                                <div class="d-flex gap-3 mb-4">
                                    <div class="dot bg-primary mt-1"></div>
                                    <div>
                                        <p class="small fw-bold mb-0">Step 1: Application</p>
                                        <p class="smaller text-muted mb-0">Submit your fleet and legal data for review.</p>
                                    </div>
                                </div>
                                <div class="d-flex gap-3 mb-4">
                                    <div class="dot bg-secondary mt-1"></div>
                                    <div>
                                        <p class="small fw-bold mb-0 text-muted">Step 2: Vetting</p>
                                        <p class="smaller text-muted mb-0">Our team inspects your physical assets and permits.</p>
                                    </div>
                                </div>
                                <div class="d-flex gap-3 mb-4">
                                    <div class="dot bg-secondary mt-1"></div>
                                    <div>
                                        <p class="small fw-bold mb-0 text-muted">Step 3: Training</p>
                                        <p class="smaller text-muted mb-0">Riders/Drivers trained on our logistics scanning app.</p>
                                    </div>
                                </div>
                                <div class="d-flex gap-3">
                                    <div class="dot bg-secondary mt-1"></div>
                                    <div>
                                        <p class="small fw-bold mb-0 text-muted">Step 4: Go-Live</p>
                                        <p class="smaller text-muted mb-0">Begin receiving daily pick-up and delivery tasks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="alert alert-info border-0 rounded-4 p-4">
                            <h6 class="fw-bold"><i class="bi bi-info-circle me-2"></i> SLA Commitment</h6>
                            <p class="smaller mb-0">By applying, you agree to maintain a <strong>95% successful delivery rate</strong> and pick up orders within 4 hours of notification.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .smaller { font-size: 11px; }
            .ls-2 { letter-spacing: 2px; }
            .dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
            .border-dashed { border: 2px dashed #dee2e6; }
            .selection-card { cursor: pointer; transition: 0.2s; }
            .selection-card:hover { border-color: #ff9900 !important; background-color: #fffdfa; }
            .form-control:focus { border-color: #003366; box-shadow: 0 0 0 0.25rem rgba(0, 51, 102, 0.1); }
        </style>
    </div>
    `;
}