export default function JForceRegistration() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <section class="bg-primary text-white py-5 mb-5 shadow-sm" style="background: linear-gradient(45deg, #003366, #004080);">
            <div class="container py-4">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <span class="badge bg-warning text-dark mb-3 fw-bold px-3 py-2">JFORCE PROGRAM</span>
                        <h1 class="display-5 fw-bold mb-3">Earn Money Every Time Your Friends Shop</h1>
                        <p class="lead opacity-75 mb-4">Join 50,000+ Sales Consultants across Africa. No investment, no office, no boss. Just your phone and your network.</p>
                        <div class="d-flex gap-3">
                            <a href="#register" class="btn btn-warning btn-lg text-dark fw-bold px-5">GET STARTED NOW</a>
                            <a href="#how-it-works" class="btn btn-outline-light btn-lg px-4">HOW IT WORKS</a>
                        </div>
                    </div>
                    <div class="col-lg-5 d-none d-lg-block">
                        <div class="bg-white bg-opacity-10 p-4 rounded-4 backdrop-blur text-center border border-white border-opacity-25">
                            <h2 class="fw-bold mb-1 text-warning">UP TO 12%</h2>
                            <p class="smaller mb-0">Commission on every successful sale</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row g-5">
                <div class="col-lg-8" id="register">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                        <h4 class="fw-bold mb-4">Agent Application Form</h4>
                        
                        <form id="jforceForm">
                            <div class="row g-3 mb-4">
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">FIRST NAME</label>
                                    <input type="text" class="form-control py-2" placeholder="e.g. Samuel">
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">LAST NAME</label>
                                    <input type="text" class="form-control py-2" placeholder="e.g. Adebayo">
                                </div>
                                <div class="col-md-12">
                                    <label class="smaller fw-bold text-muted mb-1">EMAIL ADDRESS</label>
                                    <input type="email" class="form-control py-2" placeholder="samuel@example.com">
                                </div>
                                <div class="col-md-12">
                                    <label class="smaller fw-bold text-muted mb-1">PHONE NUMBER (WHATSAPP PREFERRED)</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-light">+234</span>
                                        <input type="tel" class="form-control py-2" placeholder="801 234 5678">
                                    </div>
                                </div>
                            </div>

                            <div class="row g-3 mb-4">
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">CITY / REGION</label>
                                    <select class="form-select py-2">
                                        <option selected disabled>Select Location</option>
                                        <option>Lagos</option>
                                        <option>Abuja</option>
                                        <option>Port Harcourt</option>
                                        <option>Kano</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">MEANS OF IDENTIFICATION</label>
                                    <select class="form-select py-2">
                                        <option>National ID (NIN)</option>
                                        <option>Voter's Card</option>
                                        <option>Driver's License</option>
                                        <option>Passport</option>
                                    </select>
                                </div>
                            </div>

                            <div class="mb-4">
                                <div class="form-check p-3 bg-light rounded-3 border">
                                    <input class="form-check-input ms-0 me-3" type="checkbox" id="termsCheck">
                                    <label class="form-check-label smaller text-muted" for="termsCheck">
                                        I agree to the <a href="#" class="text-primary fw-bold">JForce Terms of Service</a> and understand that my commission is paid based on successful deliveries.
                                    </label>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary w-100 fw-bold py-3 shadow-sm rounded-3">SUBMIT APPLICATION</button>
                        </form>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="sticky-top" style="top: 2rem;">
                        <div class="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
                            <h6 class="fw-bold mb-3 text-uppercase smaller ls-1">Why Join JForce?</h6>
                            <ul class="list-unstyled mb-0">
                                <li class="d-flex gap-3 mb-3">
                                    <i class="bi bi-cash text-success fs-5"></i>
                                    <p class="smaller text-muted mb-0"><strong>Monthly Payouts:</strong> Money is sent directly to your bank every month.</p>
                                </li>
                                <li class="d-flex gap-3 mb-3">
                                    <i class="bi bi-graph-up-arrow text-primary fs-5"></i>
                                    <p class="smaller text-muted mb-0"><strong>Growth:</strong> Move from Bronze to Gold agent for higher commission rates.</p>
                                </li>
                                <li class="d-flex gap-3">
                                    <i class="bi bi-mortarboard text-info fs-5"></i>
                                    <p class="smaller text-muted mb-0"><strong>Free Training:</strong> Access to webinars and sales materials.</p>
                                </li>
                            </ul>
                        </div>

                        <div class="card border-0 shadow-sm rounded-4 p-4 bg-dark text-white">
                            <h6 class="fw-bold mb-2">Need Help Signing Up?</h6>
                            <p class="smaller opacity-75 mb-3">Our agent support team is available via WhatsApp.</p>
                            <a href="#" class="btn btn-success btn-sm w-100 fw-bold py-2">
                                <i class="bi bi-whatsapp me-2"></i> CHAT WITH JFORCE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .smaller { font-size: 12px; }
            .ls-1 { letter-spacing: 1px; }
            .backdrop-blur { backdrop-filter: blur(10px); }
            .form-control:focus, .form-select:focus {
                border-color: #004080;
                box-shadow: 0 0 0 0.25rem rgba(0, 64, 128, 0.1);
            }
            .btn-primary { background-color: #003366; border-color: #003366; }
            .btn-primary:hover { background-color: #002244; }
            #jforceForm label { letter-spacing: 0.5px; }
        </style>
    </div>
    `;
}