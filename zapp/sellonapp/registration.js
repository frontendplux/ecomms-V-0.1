export default function VendorRegistration() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <div class="bg-white border-bottom py-4 mb-4">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <div class="d-flex justify-content-between position-relative px-5">
                            <div class="step-item active">
                                <span class="step-num shadow-sm">1</span>
                                <p class="smaller fw-bold mt-2 mb-0">Account Details</p>
                            </div>
                            <div class="step-item">
                                <span class="step-num bg-secondary opacity-25">2</span>
                                <p class="smaller text-muted mt-2 mb-0">Business Info</p>
                            </div>
                            <div class="step-item">
                                <span class="step-num bg-secondary opacity-25">3</span>
                                <p class="smaller text-muted mt-2 mb-0">Bank Account</p>
                            </div>
                            <div class="progress-line bg-light position-absolute"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                        <div class="mb-4">
                            <h4 class="fw-bold text-dark mb-1">Create Your Seller Account</h4>
                            <p class="smaller text-muted">Step 1 of 3: Start by setting up your login credentials.</p>
                        </div>

                        <form>
                            <div class="row g-3 mb-4">
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">FIRST NAME</label>
                                    <input type="text" class="form-control py-2" placeholder="e.g. John" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">LAST NAME</label>
                                    <input type="text" class="form-control py-2" placeholder="e.g. Doe" required>
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-1">EMAIL ADDRESS</label>
                                <input type="email" class="form-control py-2" placeholder="john.doe@example.com" required>
                                <div class="smaller text-muted mt-1">This will be your primary login.</div>
                            </div>

                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-1">PHONE NUMBER</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light smaller fw-bold">+234</span>
                                    <input type="tel" class="form-control py-2" placeholder="8012345678" required>
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-1">CREATE PASSWORD</label>
                                <div class="position-relative">
                                    <input type="password" class="form-control py-2" placeholder="At least 8 characters" required>
                                    <i class="bi bi-eye position-absolute top-50 end-0 translate-middle-y me-3 text-muted cursor-pointer"></i>
                                </div>
                            </div>

                            <div class="d-grid gap-3 mt-5">
                                <button type="button" class="btn btn-warning text-white fw-bold py-3 shadow-sm">
                                    CONTINUE TO BUSINESS INFO <i class="bi bi-arrow-right ms-2"></i>
                                </button>
                                <p class="smaller text-center text-muted">Already have a shop? <a href="#" class="text-warning fw-bold text-decoration-none">Login here</a></p>
                            </div>
                        </form>
                    </div>

                    <div class="mt-4 text-center px-4">
                        <div class="d-flex justify-content-center gap-4 mb-3 opacity-50 grayscale">
                            <img src="https://via.placeholder.com/80x30?text=TRUSTED" alt="Seal">
                            <img src="https://via.placeholder.com/80x30?text=SECURE" alt="Seal">
                        </div>
                        <p class="smaller text-muted mb-0">By clicking continue, you agree to Jumia's <a href="#" class="text-dark fw-bold">Terms of Use</a> and <a href="#" class="text-dark fw-bold">Privacy Policy</a>.</p>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .grayscale { filter: grayscale(100%); }
            .cursor-pointer { cursor: pointer; }
            
            /* Step Indicator Styling */
            .step-item { z-index: 2; width: 80px; }
            .step-num {
                width: 35px;
                height: 35px;
                background: #ff9900;
                color: white;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                font-weight: bold;
                font-size: 14px;
            }
            .progress-line {
                top: 17px;
                left: 15%;
                right: 15%;
                height: 2px;
                z-index: 1;
            }

            /* Input Styling */
            .form-control:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.25rem rgba(255, 153, 0, 0.1);
            }
            .btn-warning:hover { opacity: 0.95; }
        </style>
    </div>
    `;
}

export  function BusinessInfoSection() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <div class="bg-white border-bottom py-4 mb-4">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <div class="d-flex justify-content-between position-relative px-5">
                            <div class="step-item text-success">
                                <span class="step-num bg-success shadow-sm"><i class="bi bi-check-lg"></i></span>
                                <p class="smaller fw-bold mt-2 mb-0">Account Details</p>
                            </div>
                            <div class="step-item active">
                                <span class="step-num shadow-sm">2</span>
                                <p class="smaller fw-bold mt-2 mb-0">Business Info</p>
                            </div>
                            <div class="step-item">
                                <span class="step-num bg-secondary opacity-25">3</span>
                                <p class="smaller text-muted mt-2 mb-0">Bank Account</p>
                            </div>
                            <div class="progress-line bg-secondary opacity-10 position-absolute"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                        <div class="mb-4">
                            <h4 class="fw-bold text-dark mb-1">Business Information</h4>
                            <p class="smaller text-muted">Step 2 of 3: Tell us about your company and where you ship from.</p>
                        </div>

                        <form>
                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-2">BUSINESS ENTITY TYPE</label>
                                <div class="row g-2">
                                    <div class="col-6">
                                        <input type="radio" class="btn-check" name="entity" id="individual" checked>
                                        <label class="btn btn-outline-secondary w-100 py-3 smaller fw-bold" for="individual">
                                            <i class="bi bi-person me-2"></i> Individual
                                        </label>
                                    </div>
                                    <div class="col-6">
                                        <input type="radio" class="btn-check" name="entity" id="registered">
                                        <label class="btn btn-outline-secondary w-100 py-3 smaller fw-bold" for="registered">
                                            <i class="bi bi-building me-2"></i> Registered Co.
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row g-3 mb-4">
                                <div class="col-12">
                                    <label class="smaller fw-bold text-muted mb-1">SHOP NAME (AS SEEN ON JUMIA)</label>
                                    <input type="text" class="form-control py-2" placeholder="e.g. Divine Electronics">
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">MAIN CATEGORY</label>
                                    <select class="form-select py-2">
                                        <option>Select Category</option>
                                        <option>Electronics</option>
                                        <option>Fashion</option>
                                        <option>Groceries</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="smaller fw-bold text-muted mb-1">TIN (TAX ID - OPTIONAL)</label>
                                    <input type="text" class="form-control py-2" placeholder="12345678-0001">
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-1">WAREHOUSE / STORE ADDRESS</label>
                                <textarea class="form-control py-2 mb-2" rows="2" placeholder="Street name, Building No."></textarea>
                                <div class="row g-2">
                                    <div class="col-6">
                                        <select class="form-select py-2">
                                            <option>Select State</option>
                                            <option>Lagos</option>
                                            <option>Abuja (FCT)</option>
                                            <option>Rivers</option>
                                        </select>
                                    </div>
                                    <div class="col-6">
                                        <input type="text" class="form-control py-2" placeholder="City / LGA">
                                    </div>
                                </div>
                            </div>

                            <div class="mb-4 bg-light p-3 rounded-3 border">
                                <label class="smaller fw-bold text-muted mb-2">IDENTITY VERIFICATION (NIN / PASSPORT / CAC)</label>
                                <div class="d-flex align-items-center justify-content-center border-dashed rounded-3 p-4 bg-white cursor-pointer hover-bg">
                                    <div class="text-center">
                                        <i class="bi bi-cloud-arrow-up fs-2 text-warning"></i>
                                        <p class="smaller text-muted mb-0 mt-2">Click to upload or drag and drop</p>
                                        <span class="text-muted" style="font-size: 9px;">JPG, PNG or PDF (Max 5MB)</span>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex gap-3 mt-5">
                                <button type="button" class="btn btn-light border fw-bold py-3 px-4 smaller">
                                    <i class="bi bi-arrow-left me-2"></i> BACK
                                </button>
                                <button type="button" class="btn btn-warning text-white fw-bold py-3 flex-grow-1 shadow-sm">
                                    CONTINUE TO BANKING <i class="bi bi-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .border-dashed { border: 2px dashed #dee2e6; }
            .step-item { z-index: 2; width: 80px; }
            .step-num {
                width: 35px;
                height: 35px;
                background: #ff9900;
                color: white;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                font-weight: bold;
                font-size: 14px;
            }
            .progress-line { top: 17px; left: 15%; right: 15%; height: 2px; z-index: 1; }
            .cursor-pointer { cursor: pointer; }
            .hover-bg:hover { background-color: #fff9f0 !important; border-color: #ff9900 !important; }
            .btn-check:checked + .btn-outline-secondary {
                background-color: #fff9f0;
                border-color: #ff9900;
                color: #ff9900;
            }
        </style>
    </div>
    `;
}


export function BankAccountSection() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <div class="bg-white border-bottom py-4 mb-4">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <div class="d-flex justify-content-between position-relative px-5">
                            <div class="step-item text-success">
                                <span class="step-num bg-success shadow-sm"><i class="bi bi-check-lg"></i></span>
                                <p class="smaller fw-bold mt-2 mb-0">Account Details</p>
                            </div>
                            <div class="step-item text-success">
                                <span class="step-num bg-success shadow-sm"><i class="bi bi-check-lg"></i></span>
                                <p class="smaller fw-bold mt-2 mb-0">Business Info</p>
                            </div>
                            <div class="step-item active">
                                <span class="step-num shadow-sm border border-warning">3</span>
                                <p class="smaller fw-bold mt-2 mb-0">Bank Account</p>
                            </div>
                            <div class="progress-line bg-success position-absolute opacity-25"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                        <div class="mb-4 text-center">
                            <div class="bg-warning bg-opacity-10 d-inline-flex p-3 rounded-circle mb-3">
                                <i class="bi bi-bank text-warning fs-2"></i>
                            </div>
                            <h4 class="fw-bold text-dark mb-1">Payout Settings</h4>
                            <p class="smaller text-muted">Final Step: Tell us where to send your earnings.</p>
                        </div>

                        <form>
                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-1">SELECT BANK</label>
                                <select class="form-select py-2 fw-bold text-dark">
                                    <option selected disabled>Choose your bank...</option>
                                    <option>Access Bank</option>
                                    <option>Guaranty Trust Bank (GTB)</option>
                                    <option>Zenith Bank</option>
                                    <option>First Bank of Nigeria</option>
                                    <option>United Bank for Africa (UBA)</option>
                                    <option>Kuda Bank</option>
                                </select>
                            </div>

                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-1">ACCOUNT NUMBER</label>
                                <input type="number" class="form-control py-2 fs-5 fw-bold ls-2" placeholder="0123456789">
                                <div class="d-flex justify-content-between mt-2">
                                    <span class="smaller text-info fw-bold"><i class="bi bi-shield-lock"></i> Secured Encryption</span>
                                    <span class="smaller text-muted">10 digits required</span>
                                </div>
                            </div>

                            <div class="mb-4 p-3 bg-light rounded-3 border-start border-4 border-warning">
                                <label class="smaller fw-bold text-muted mb-1">ACCOUNT HOLDER NAME</label>
                                <input type="text" class="form-control py-2 bg-white fw-bold text-uppercase" placeholder="E.G. JOHN DOE ELECTRONICS">
                                <p class="smaller text-muted mt-2 mb-0" style="line-height: 1.4;">
                                    <strong>Important:</strong> This name <u>must match</u> the Business/Individual name provided in Step 2 to avoid payment delays.
                                </p>
                            </div>

                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-2">PROOF OF ACCOUNT (Statement or Cheque)</label>
                                <div class="upload-container border rounded-3 p-3 text-center cursor-pointer">
                                    <i class="bi bi-file-earmark-arrow-up text-muted fs-4"></i>
                                    <p class="smaller text-muted mb-0">Upload a photo of your bank statement header</p>
                                </div>
                            </div>

                            <div class="form-check mb-4">
                                <input class="form-check-input custom-check" type="checkbox" id="terms">
                                <label class="form-check-label smaller text-muted ms-2" for="terms">
                                    I confirm that the bank details provided are correct and belong to the registered business entity.
                                </label>
                            </div>

                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-warning text-white fw-bold py-3 shadow">
                                    COMPLETE REGISTRATION
                                </button>
                                <button type="button" class="btn btn-link text-muted text-decoration-none smaller">
                                    Skip for now (Limited account features)
                                </button>
                            </div>
                        </form>
                    </div>

                    <div class="mt-4 p-3 rounded-3 bg-white border shadow-sm d-flex gap-3 align-items-center">
                        <i class="bi bi-info-circle-fill text-primary fs-4"></i>
                        <p class="smaller text-muted mb-0">
                            Jumia uses bank-grade security to protect your data. Your account details will be verified within **24-48 hours**.
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .ls-2 { letter-spacing: 2px; }
            .step-item { z-index: 2; width: 80px; }
            .step-num {
                width: 35px;
                height: 35px;
                background: #ff9900;
                color: white;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                font-weight: bold;
                font-size: 14px;
            }
            .progress-line { top: 17px; left: 15%; right: 15%; height: 2px; z-index: 1; }
            .upload-container:hover { background-color: #f8f9fa; border-color: #ff9900; }
            .custom-check:checked { background-color: #ff9900; border-color: #ff9900; }
            .form-control:focus, .form-select:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.25rem rgba(255, 153, 0, 0.1);
            }
        </style>
    </div>
    `;
}



export function RegistrationSuccess() {
    return /*html*/`
    <div class="bg-light min-vh-100 d-flex align-items-center py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-lg rounded-4 overflow-hidden bg-white">
                        <div class="card-body p-5 text-center">
                            <div class="mb-4">
                                <div class="bg-success bg-opacity-10 d-inline-flex p-4 rounded-circle mb-3">
                                    <i class="bi bi-check-circle-fill text-success" style="font-size: 4rem;"></i>
                                </div>
                                <h2 class="fw-bold text-dark">Welcome to Jumia, Divine Electronics!</h2>
                                <p class="text-muted">Your seller account has been successfully created. Our team is currently reviewing your documents.</p>
                            </div>

                            <hr class="my-5 opacity-10">

                            <div class="row text-start g-4">
                                <div class="col-md-6">
                                    <h6 class="fw-bold text-uppercase smaller text-warning mb-3">Payout Information</h6>
                                    <div class="bg-light p-3 rounded-3 border-start border-4 border-warning">
                                        <p class="smaller mb-2"><strong>Bank:</strong> GT Bank Nigeria</p>
                                        <p class="smaller mb-2"><strong>Cycle:</strong> Every Wednesday (Weekly)</p>
                                        <p class="smaller mb-0"><strong>Processing:</strong> 24-48 Hours</p>
                                    </div>
                                    <p class="smaller text-muted mt-2">Payments are sent for all orders marked as "Delivered" and past the 7-day return period.</p>
                                </div>

                                <div class="col-md-6">
                                    <h6 class="fw-bold text-uppercase smaller text-primary mb-3">Key Terms & Conditions</h6>
                                    <ul class="list-unstyled smaller text-muted">
                                        <li class="mb-2"><i class="bi bi-shield-check text-primary me-2"></i><strong>Authenticity:</strong> You agree to sell only original, non-counterfeit products.</li>
                                        <li class="mb-2"><i class="bi bi-clock-history text-primary me-2"></i><strong>SLA:</strong> Orders must be processed within 24 hours of notification.</li>
                                        <li class="mb-2"><i class="bi bi-box-seam text-primary me-2"></i><strong>Commissions:</strong> Category-based fees (5% - 15%) apply per sale.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="mt-5 d-grid gap-2">
                                <a href="/vendor/dashboard" class="btn btn-warning text-white fw-bold py-3 shadow">
                                    GO TO SELLER CENTER <i class="bi bi-speedometer2 ms-2"></i>
                                </a>
                                <p class="smaller text-muted mt-3">Need help? <a href="#" class="text-warning fw-bold text-decoration-none">Read the Seller Manual</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style>
            .smaller { font-size: 12px; }
            .bg-opacity-10 { background-color: rgba(25, 135, 84, 0.1) !important; }
        </style>
    </div>
    `;
}