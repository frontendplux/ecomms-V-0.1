export default function JForceHowItWorks() {
    return /*html*/`
    <div class="bg-white py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h6 class="text-primary fw-bold text-uppercase ls-2 mb-2">The Path to Success</h6>
                <h2 class="fw-bold">4 Simple Steps to Start Earning</h2>
                <p class="text-muted mx-auto" style="max-width: 600px;">You don't need a shop or inventory. Your role is to connect customers to the products they need.</p>
            </div>

            <div class="row g-4 justify-content-center">
                <div class="col-md-6 col-lg-3">
                    <div class="card border-0 text-center h-100 p-3">
                        <div class="position-relative mb-4">
                            <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                                <i class="bi bi-person-plus-fill text-primary fs-2"></i>
                            </div>
                            <span class="position-absolute top-0 start-50 translate-middle-x badge rounded-pill bg-primary px-3 shadow-sm" style="margin-top: -10px;">STEP 01</span>
                        </div>
                        <h6 class="fw-bold">Register for Free</h6>
                        <p class="smaller text-muted">Complete the online application form with your valid ID. There are no registration fees to join the program.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card border-0 text-center h-100 p-3">
                        <div class="position-relative mb-4">
                            <div class="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                                <i class="bi bi-cart-check-fill text-warning fs-2"></i>
                            </div>
                            <span class="position-absolute top-0 start-50 translate-middle-x badge rounded-pill bg-warning text-dark px-3 shadow-sm" style="margin-top: -10px;">STEP 02</span>
                        </div>
                        <h6 class="fw-bold">Place Orders</h6>
                        <p class="smaller text-muted">Use the Jumia App to place orders for your friends, family, or neighbors using their delivery address.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card border-0 text-center h-100 p-3">
                        <div class="position-relative mb-4">
                            <div class="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                                <i class="bi bi-box-seam-fill text-success fs-2"></i>
                            </div>
                            <span class="position-absolute top-0 start-50 translate-middle-x badge rounded-pill bg-success px-3 shadow-sm" style="margin-top: -10px;">STEP 03</span>
                        </div>
                        <h6 class="fw-bold">Successful Delivery</h6>
                        <p class="smaller text-muted">The items are delivered directly to the customer. You don't have to handle the shipping or the logistics.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card border-0 text-center h-100 p-3">
                        <div class="position-relative mb-4">
                            <div class="bg-dark bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                                <i class="bi bi-wallet2 text-dark fs-2"></i>
                            </div>
                            <span class="position-absolute top-0 start-50 translate-middle-x badge rounded-pill bg-dark px-3 shadow-sm" style="margin-top: -10px;">STEP 04</span>
                        </div>
                        <h6 class="fw-bold">Earn Commission</h6>
                        <p class="smaller text-muted">Once the return period passes, your commission is credited. Payouts are made monthly to your bank account.</p>
                    </div>
                </div>
            </div>

            <div class="mt-5 p-4 bg-light rounded-4 d-flex align-items-center gap-4">
                <div class="d-none d-md-block">
                    <i class="bi bi-lightbulb-fill text-warning fs-1"></i>
                </div>
                <div>
                    <h6 class="fw-bold mb-1">Agent Pro-Tip:</h6>
                    <p class="smaller text-muted mb-0">The more you sell, the higher your rank! Moving from **Bronze** to **Gold** status increases your commission rates and gives you early access to Black Friday deals.</p>
                </div>
            </div>
        </div>

        <style>
            .smaller { font-size: 13px; line-height: 1.6; }
            .ls-2 { letter-spacing: 2px; }
            .bg-opacity-10 { background-color: rgba(var(--bs-primary-rgb), 0.1) !important; }
            .bg-warning.bg-opacity-10 { background-color: rgba(255, 193, 7, 0.1) !important; }
            .bg-success.bg-opacity-10 { background-color: rgba(25, 135, 84, 0.1) !important; }
            .bg-dark.bg-opacity-10 { background-color: rgba(33, 37, 41, 0.1) !important; }
            .card:hover { transform: translateY(-5px); transition: 0.3s ease; }
        </style>
    </div>
    `;
}