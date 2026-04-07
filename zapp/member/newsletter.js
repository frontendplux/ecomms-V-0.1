export default function NewsletterPreferences() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="container pt-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-3" style="font-size: 12px;">
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">My Account</a></li>
                <li class="breadcrumb-item active text-muted">Newsletter Preferences</li>
            </ol>
        </nav>

        <main class="container">
            <div class="row g-3">
                <aside class="col-lg-3 d-none d-lg-block">
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="list-group list-group-flush small fw-medium">
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-person me-3 fs-5 text-secondary"></i> My Jumia Account
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-box-seam me-3 fs-5 text-secondary"></i> Orders
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3 active-nav">
                                <i class="bi bi-envelope-at me-3 fs-5 text-warning"></i> Newsletter Preferences
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3">
                                <i class="bi bi-shield-lock me-3 fs-5 text-secondary"></i> Account Management
                            </a>
                        </div>
                    </div>
                </aside>

                <div class="col-lg-9">
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="card-header bg-white py-3 border-bottom">
                            <h6 class="mb-0 fw-bold small text-uppercase">Newsletter Subscriptions</h6>
                        </div>
                        
                        <div class="card-body p-4">
                            <p class="smaller text-muted mb-4">Select the types of communications you would like to receive from us. You can update these settings at any time.</p>

                            <form id="newsletterForm">
                                <div class="mb-4">
                                    <h6 class="smaller fw-bold text-dark border-bottom pb-2 mb-3">DAILY UPDATES</h6>
                                    
                                    <div class="form-check form-switch mb-3 d-flex align-items-center justify-content-between ps-0">
                                        <label class="form-check-label flex-grow-1 cursor-pointer" for="dailyDeals">
                                            <span class="d-block fw-bold small">Daily Deals</span>
                                            <span class="smaller text-muted">Get the best offers of the day delivered to your inbox every morning.</span>
                                        </label>
                                        <input class="form-check-input ms-3 custom-switch" type="checkbox" id="dailyDeals" checked>
                                    </div>

                                    <div class="form-check form-switch mb-3 d-flex align-items-center justify-content-between ps-0">
                                        <label class="form-check-label flex-grow-1 cursor-pointer" for="flashSales">
                                            <span class="d-block fw-bold small">Flash Sale Alerts</span>
                                            <span class="smaller text-muted">Instant notifications when high-demand items go on limited-time sale.</span>
                                        </label>
                                        <input class="form-check-input ms-3 custom-switch" type="checkbox" id="flashSales">
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <h6 class="smaller fw-bold text-dark border-bottom pb-2 mb-3">PERSONALIZED FOR YOU</h6>
                                    
                                    <div class="form-check form-switch mb-3 d-flex align-items-center justify-content-between ps-0">
                                        <label class="form-check-label flex-grow-1 cursor-pointer" for="recoEmails">
                                            <span class="d-block fw-bold small">Product Recommendations</span>
                                            <span class="smaller text-muted">Based on your browsing and shopping history.</span>
                                        </label>
                                        <input class="form-check-input ms-3 custom-switch" type="checkbox" id="recoEmails" checked>
                                    </div>

                                    <div class="form-check form-switch mb-3 d-flex align-items-center justify-content-between ps-0">
                                        <label class="form-check-label flex-grow-1 cursor-pointer" for="reviewReminders">
                                            <span class="d-block fw-bold small">Review Reminders</span>
                                            <span class="smaller text-muted">Receive a friendly nudge to rate the products you've purchased.</span>
                                        </label>
                                        <input class="form-check-input ms-3 custom-switch" type="checkbox" id="reviewReminders" checked>
                                    </div>
                                </div>

                                <div class="bg-light p-3 rounded-3 d-flex justify-content-between align-items-center mb-4">
                                    <span class="smaller text-muted fw-bold">Opt-out of all marketing emails?</span>
                                    <button type="button" class="btn btn-outline-secondary btn-sm smaller fw-bold px-3">UNSUBSCRIBE ALL</button>
                                </div>

                                <button type="submit" class="btn btn-warning text-white fw-bold px-5 shadow-sm py-2">SAVE PREFERENCES</button>
                            </form>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 mt-4 bg-primary bg-opacity-10 border-start border-primary border-4">
                        <div class="card-body p-4 d-flex align-items-start gap-3">
                            <i class="bi bi-phone text-primary fs-3"></i>
                            <div>
                                <h6 class="fw-bold mb-1 small">SMS Notifications</h6>
                                <p class="smaller text-muted mb-0">Order status and delivery updates are sent via SMS automatically. You cannot opt-out of transactional messages as they are critical for your order fulfillment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .cursor-pointer { cursor: pointer; }
            .active-nav { color: #ff9900 !important; font-weight: bold; border-left: 4px solid #ff9900 !important; border-radius: 0 !important; }
            
            /* Custom Switch Styling */
            .custom-switch:checked {
                background-color: #ff9900;
                border-color: #ff9900;
            }
            .form-switch .form-check-input {
                width: 2.5em;
                height: 1.25em;
            }
            .form-check-input:focus {
                box-shadow: 0 0 0 0.25rem rgba(255, 153, 0, 0.15);
                border-color: #ff9900;
            }
        </style>
    </div>
    `;
}