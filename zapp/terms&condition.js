export default function TermsAndConditions(){
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <header class="bg-white border-bottom py-5 mb-5">
            <div class="container text-center">
                <span class="badge bg-warning text-dark mb-2 fw-bold">LEGAL DOCUMENT</span>
                <h1 class="fw-bold">Terms and Conditions</h1>
                <p class="text-muted">Last Updated: April 5, 2026</p>
                <div class="d-flex justify-content-center gap-2 mt-3">
                    <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-printer me-1"></i> Print</button>
                    <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-download me-1"></i> Download PDF</button>
                </div>
            </div>
        </header>

        <div class="container">
            <div class="row g-5">
                <aside class="col-lg-3 d-none d-lg-block">
                    <div class="sticky-top" style="top: 2rem;">
                        <h6 class="fw-bold text-uppercase smaller ls-1 mb-3">Navigation</h6>
                        <nav id="toc" class="nav flex-column border-start border-2">
                            <a class="nav-link smaller text-dark py-1 active" href="#intro">1. Introduction</a>
                            <a class="nav-link smaller text-muted py-1" href="#member">2. Member Terms</a>
                            <a class="nav-link smaller text-muted py-1" href="#vendor">3. Vendor Terms</a>
                            <a class="nav-link smaller text-muted py-1" href="#logistics">4. Logistics & Returns</a>
                            <a class="nav-link smaller text-muted py-1" href="#prohibited">5. Prohibited Acts</a>
                            <a class="nav-link smaller text-muted py-1" href="#financial">6. Financial Payouts</a>
                            <a class="nav-link smaller text-muted py-1" href="#liability">7. Liability</a>
                        </nav>
                    </div>
                </aside>

                <div class="col-lg-9">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white legal-body">
                        
                        <section id="intro" class="mb-5">
                            <h4 class="fw-bold mb-3">1. Introduction and Acceptance</h4>
                            <p>Welcome to our platform. By accessing or using our website, mobile applications, or any associated services (collectively, the <strong>"Platform"</strong>), you agree to be bound by these Terms and Conditions. If you do not agree, you must immediately cease all use of the Platform.</p>
                            <div class="alert alert-info border-0 smaller">
                                <strong>Note:</strong> These terms constitute a binding legal agreement between you (User/Vendor) and the Platform Operator.
                            </div>
                        </section>

                        <hr class="my-5 opacity-10">

                        <section id="member" class="mb-5">
                            <h4 class="fw-bold mb-3">2. Member (Buyer) Terms</h4>
                            <p>Members are entitled to purchase items under these conditions:</p>
                            <ul>
                                <li><strong>Account Security:</strong> You are responsible for all activity under your credentials.</li>
                                <li><strong>Purchasing:</strong> Clicking "Place Order" is a legally binding contract to pay.</li>
                                <li><strong>Conduct:</strong> Reviews must be honest and free of defamatory language.</li>
                            </ul>
                        </section>

                        <hr class="my-5 opacity-10">

                        <section id="vendor" class="mb-5">
                            <h4 class="fw-bold mb-3">3. Vendor (Seller) Terms</h4>
                            <p>Vendors act as independent contractors and agree to:</p>
                            <h6 class="fw-bold small text-warning mt-4">A. AUTHENTICITY</h6>
                            <p>Listing counterfeit or replica items is strictly prohibited. Discovery of such items will lead to immediate account termination and freezing of all pending funds.</p>
                            
                            <h6 class="fw-bold small text-warning mt-4">B. COMMISSIONS</h6>
                            <p>The Platform deducts a category-based commission (5% to 15%) on every successful sale before the final payout is processed.</p>
                        </section>

                        <hr class="my-5 opacity-10">

                        <section id="logistics" class="mb-5">
                            <h4 class="fw-bold mb-3">4. Logistics, Returns, and Refunds</h4>
                            <div class="table-responsive mt-3">
                                <table class="table table-bordered smaller">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Feature</th>
                                            <th>Policy Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="fw-bold">SLA</td>
                                            <td>Orders must be processed within 24 hours.</td>
                                        </tr>
                                        <tr>
                                            <td class="fw-bold">Return Window</td>
                                            <td>7 days for most non-perishable items.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <hr class="my-5 opacity-10">

                        <section id="financial" class="mb-5">
                            <h4 class="fw-bold mb-3">6. Financial Payouts</h4>
                            <p>Payouts are initiated weekly (Every Wednesday). To protect the platform and the buyer, funds are held in escrow during the 7-day return window plus 48 hours for bank processing.</p>
                            <blockquote class="blockquote bg-light p-3 rounded smaller">
                                "Net Payout = Gross Sales - (Commission + Shipping Fees + VAT)"
                            </blockquote>
                        </section>

                    </div>

                    <div class="mt-5 text-center p-4 border rounded-3 bg-white">
                        <p class="smaller text-muted">By using the platform, you acknowledge that you have read and understood the terms above.</p>
                        <div class="d-flex justify-content-center gap-3">
                            <button class="btn btn-warning text-white fw-bold px-5">I ACCEPT THESE TERMS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .smaller { font-size: 13px; }
            .ls-1 { letter-spacing: 1px; }
            .legal-body p, .legal-body li { line-height: 1.8; color: #444; }
            .nav-link.active { color: #ff9900 !important; border-left: 2px solid #ff9900; margin-left: -2px; }
            .nav-link:hover { color: #ff9900 !important; }
            #toc .nav-link { transition: all 0.2s; }
            section h4 { scroll-margin-top: 20px; }
        </style>
    </div>
    `;
}

export  function HelpCenter() {
    return /*html*/`
    <div class="bg-light min-vh-100">
        <section class="bg-dark text-white py-5 shadow-sm">
            <div class="container text-center py-4">
                <h2 class="fw-bold mb-3">How can we help you today?</h2>
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="input-group input-group-lg shadow">
                            <span class="input-group-text bg-white border-0"><i class="bi bi-search text-muted"></i></span>
                            <input type="text" class="form-control border-0 px-2" placeholder="Search for articles, guides, or keywords...">
                            <button class="btn btn-warning fw-bold px-4">SEARCH</button>
                        </div>
                        <div class="mt-3 smaller text-muted-50">
                            Popular: <span class="text-warning cursor-pointer">Payout schedule</span>, <span class="text-warning cursor-pointer">Return policy</span>, <span class="text-warning cursor-pointer">Account verification</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <main class="container py-5">
            <div class="row g-4 mb-5">
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm text-center p-4 hover-lift cursor-pointer bg-white">
                        <i class="bi bi-rocket-takeoff text-warning display-5 mb-3"></i>
                        <h6 class="fw-bold">Getting Started</h6>
                        <p class="smaller text-muted">Learn how to set up your shop and go live in 24 hours.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm text-center p-4 hover-lift cursor-pointer bg-white">
                        <i class="bi bi-box-seam text-warning display-5 mb-3"></i>
                        <h6 class="fw-bold">Order Management</h6>
                        <p class="smaller text-muted">Processing orders, packaging guidelines, and shipping.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm text-center p-4 hover-lift cursor-pointer bg-white">
                        <i class="bi bi-cash-stack text-warning display-5 mb-3"></i>
                        <h6 class="fw-bold">Payments & Finance</h6>
                        <p class="smaller text-muted">Understanding commissions, fees, and your weekly payout.</p>
                    </div>
                </div>
            </div>

            <div class="row g-5">
                <div class="col-lg-8">
                    <h5 class="fw-bold mb-4">Trending Articles</h5>
                    <div class="list-group list-group-flush rounded-3 shadow-sm bg-white border">
                        <a href="#" class="list-group-item list-group-item-action py-3 d-flex justify-content-between align-items-center">
                            <div>
                                <i class="bi bi-file-text me-2 text-muted"></i>
                                <span class="small fw-bold">How to update my bank account details?</span>
                            </div>
                            <i class="bi bi-chevron-right smaller text-muted"></i>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-3 d-flex justify-content-between align-items-center">
                            <div>
                                <i class="bi bi-file-text me-2 text-muted"></i>
                                <span class="small fw-bold">What is the penalty for out-of-stock orders?</span>
                            </div>
                            <i class="bi bi-chevron-right smaller text-muted"></i>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-3 d-flex justify-content-between align-items-center">
                            <div>
                                <i class="bi bi-file-text me-2 text-muted"></i>
                                <span class="small fw-bold">How do I join the Jumia Anniversary campaign?</span>
                            </div>
                            <i class="bi bi-chevron-right smaller text-muted"></i>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-3 d-flex justify-content-between align-items-center">
                            <div>
                                <i class="bi bi-file-text me-2 text-muted"></i>
                                <span class="small fw-bold">Packaging requirements for electronics.</span>
                            </div>
                            <i class="bi bi-chevron-right smaller text-muted"></i>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 bg-warning bg-opacity-10 mb-4">
                        <h6 class="fw-bold mb-3">Still need help?</h6>
                        <p class="smaller text-muted mb-4">If you can't find the answer in our documentation, our team is available to assist you.</p>
                        
                        <div class="d-grid gap-2">
                            <button class="btn btn-warning text-white fw-bold py-2 shadow-sm">
                                <i class="bi bi-chat-left-dots-fill me-2"></i> START LIVE CHAT
                            </button>
                            <button class="btn btn-outline-dark fw-bold py-2">
                                <i class="bi bi-envelope-fill me-2"></i> RAISE A TICKET
                            </button>
                        </div>
                    </div>

                    <div class="p-3 border rounded-3 bg-white shadow-sm d-flex align-items-center gap-3">
                        <div class="bg-light rounded-circle p-2">
                            <i class="bi bi-telephone text-dark"></i>
                        </div>
                        <div>
                            <p class="smaller fw-bold mb-0">Priority Support</p>
                            <p class="smaller text-muted mb-0">+234 1 888 1111</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 13px; }
            .text-muted-50 { color: rgba(255,255,255,0.6); }
            .hover-lift:hover { transform: translateY(-5px); transition: transform 0.2s; }
            .cursor-pointer { cursor: pointer; }
            .bg-opacity-10 { background-color: rgba(255, 153, 0, 0.1) !important; }
            .list-group-item:hover { background-color: #fcfcfc; color: #ff9900; }
        </style>
    </div>
    `;
}


export  function RaiseTicket() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="bg-white border-bottom py-3 mb-4">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 smaller">
                        <li class="breadcrumb-item"><a href="/help" class="text-warning text-decoration-none">Help Center</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Raise a Ticket</li>
                    </ol>
                </nav>
            </div>
        </nav>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
                        <div class="mb-4">
                            <h4 class="fw-bold text-dark mb-1">Submit a Support Request</h4>
                            <p class="smaller text-muted">Please provide as much detail as possible so we can assist you quickly.</p>
                        </div>

                        <form id="ticketForm">
                            <div class="row g-3 mb-4">
                                <div class="col-md-8">
                                    <label class="smaller fw-bold text-muted mb-1">SUBJECT</label>
                                    <input type="text" class="form-control py-2" placeholder="Briefly describe the issue (e.g., Payout not received)">
                                </div>
                                <div class="col-md-4">
                                    <label class="smaller fw-bold text-muted mb-1">ISSUE CATEGORY</label>
                                    <select class="form-select py-2">
                                        <option selected disabled>Select Category</option>
                                        <option>Payments & Payouts</option>
                                        <option>Orders & Shipping</option>
                                        <option>Account Access</option>
                                        <option>Product Listing Error</option>
                                        <option>Technical Bug</option>
                                    </select>
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-1">ORDER ID / SKU (IF APPLICABLE)</label>
                                <input type="text" class="form-control py-2 w-50" placeholder="e.g. #4958372">
                                <div class="smaller text-muted mt-1">Linking an Order ID speeds up resolution time.</div>
                            </div>

                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-1">DETAILED DESCRIPTION</label>
                                <textarea class="form-control py-2" rows="6" placeholder="Please describe what happened, what you expected, and any steps you've already taken..."></textarea>
                            </div>

                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-2">ATTACHMENTS (SCREENSHOTS, INVOICES, ETC.)</label>
                                <div class="upload-zone border-dashed rounded-3 p-4 text-center bg-light cursor-pointer">
                                    <i class="bi bi-cloud-upload fs-3 text-muted"></i>
                                    <p class="smaller text-muted mb-0 mt-2">Drag and drop files here or <span class="text-warning fw-bold">Browse</span></p>
                                    <p class="text-muted" style="font-size: 10px;">Max 3 files (JPG, PNG, PDF). Max 5MB each.</p>
                                    <input type="file" class="d-none" multiple>
                                </div>
                            </div>

                            <div class="mb-5 p-3 rounded-3 bg-light border-start border-4 border-warning">
                                <label class="smaller fw-bold text-muted mb-2">HOW URGENT IS THIS?</label>
                                <div class="d-flex gap-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="priority" id="p1">
                                        <label class="form-check-label smaller fw-bold" for="p1">Low</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="priority" id="p2" checked>
                                        <label class="form-check-label smaller fw-bold" for="p2">Medium</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="priority" id="p3">
                                        <label class="form-check-label smaller fw-bold" for="p3">High (Critical)</label>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex align-items-center justify-content-between pt-3 border-top">
                                <span class="smaller text-muted"><i class="bi bi-clock me-1"></i> Average response time: <strong>4-6 hours</strong></span>
                                <button type="submit" class="btn btn-warning text-white fw-bold px-5 py-3 shadow-sm">SUBMIT TICKET</button>
                            </div>
                        </form>
                    </div>

                    <div class="mt-4 text-center">
                        <p class="smaller text-muted">Want to check an existing request? <a href="/tickets/history" class="text-warning fw-bold text-decoration-none">View Ticket History</a></p>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 12px; }
            .border-dashed { border: 2px dashed #dee2e6; }
            .cursor-pointer { cursor: pointer; }
            .upload-zone:hover { border-color: #ff9900; background-color: #fffdfa; }
            .form-control:focus, .form-select:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.25rem rgba(255, 153, 0, 0.1);
            }
            .form-check-input:checked { background-color: #ff9900; border-color: #ff9900; }
        </style>
    </div>
    `;
}


export function ContactUs() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <header class="bg-dark text-white py-5 text-center">
            <div class="container">
                <h1 class="fw-bold mb-2">Get in Touch</h1>
                <p class="lead opacity-75">Have a question? We're here to help you succeed.</p>
            </div>
        </header>

        <main class="container mt-n5">
            <div class="row g-4 justify-content-center">
                
                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                        <div class="d-flex align-items-center gap-3 mb-4">
                            <div class="bg-warning bg-opacity-10 p-3 rounded-circle text-warning">
                                <i class="bi bi-telephone-fill fs-4"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-0">Call Us</h6>
                                <p class="smaller text-muted mb-0">Mon-Fri, 8am - 8pm</p>
                            </div>
                        </div>
                        <h5 class="fw-bold mb-1">+234 1 888 1111</h5>
                        <p class="smaller text-muted">Standard call rates apply.</p>
                        <hr>
                        <div class="d-flex align-items-center gap-3 mb-4 mt-4">
                            <div class="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                                <i class="bi bi-envelope-fill fs-4"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-0">Email Us</h6>
                                <p class="smaller text-muted mb-0">24/7 Support</p>
                            </div>
                        </div>
                        <h5 class="fw-bold mb-1">support@jumia.com</h5>
                        <p class="smaller text-muted">Average response: 4 hours.</p>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                        <div class="d-flex align-items-center gap-3 mb-4">
                            <div class="bg-success bg-opacity-10 p-3 rounded-circle text-success">
                                <i class="bi bi-geo-alt-fill fs-4"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-0">Visit Us</h6>
                                <p class="smaller text-muted mb-0">Experience Center</p>
                            </div>
                        </div>
                        <p class="small fw-bold text-dark mb-1">Jumia Nigeria HQ</p>
                        <p class="smaller text-muted mb-4">109 Adeniyi Jones Ave, Ikeja, Lagos, Nigeria.</p>
                        
                        <div class="bg-light rounded-3 d-flex align-items-center justify-content-center" style="height: 180px;">
                            <div class="text-center">
                                <i class="bi bi-map text-muted display-6"></i>
                                <p class="smaller text-muted mt-2">Interactive Map Loading...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white border-top border-4 border-warning">
                        <h6 class="fw-bold mb-3 text-uppercase smaller">Request a Callback</h6>
                        <p class="smaller text-muted mb-4">Short on time? Leave your number and our team will call you back within 30 minutes.</p>
                        
                        <form>
                            <div class="mb-3">
                                <label class="smaller fw-bold text-muted mb-1">YOUR NAME</label>
                                <input type="text" class="form-control form-control-sm" placeholder="John Doe">
                            </div>
                            <div class="mb-3">
                                <label class="smaller fw-bold text-muted mb-1">PHONE NUMBER</label>
                                <input type="tel" class="form-control form-control-sm" placeholder="+234...">
                            </div>
                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-1">TOPIC</label>
                                <select class="form-select form-select-sm">
                                    <option>Account Issues</option>
                                    <option>Payout Inquiry</option>
                                    <option>Technical Support</option>
                                </select>
                            </div>
                            <button class="btn btn-warning w-100 text-white fw-bold py-2 shadow-sm">CALL ME BACK</button>
                        </form>
                    </div>
                </div>

            </div>

            <div class="mt-5 pt-5 border-top text-center">
                <h6 class="fw-bold text-muted mb-4 text-uppercase ls-1">Connect with us</h6>
                <div class="d-flex justify-content-center gap-4">
                    <a href="#" class="text-dark fs-3"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="text-dark fs-3"><i class="bi bi-twitter-x"></i></a>
                    <a href="#" class="text-dark fs-3"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="text-dark fs-3"><i class="bi bi-linkedin"></i></a>
                    <a href="#" class="text-dark fs-3"><i class="bi bi-youtube"></i></a>
                </div>
            </div>
        </main>

        <style>
            .mt-n5 { margin-top: -3rem; }
            .smaller { font-size: 12px; }
            .ls-1 { letter-spacing: 1px; }
            .bg-opacity-10 { background-color: rgba(var(--bs-warning-rgb), 0.1) !important; }
            .bg-success.bg-opacity-10 { background-color: rgba(25, 135, 84, 0.1) !important; }
            .bg-primary.bg-opacity-10 { background-color: rgba(13, 110, 253, 0.1) !important; }
            .form-control:focus, .form-select:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.25rem rgba(255, 153, 0, 0.1);
            }
            .card { transition: transform 0.3s ease; }
            .card:hover { transform: translateY(-5px); }
        </style>
    </div>
    `;
}


export function AboutUs() {
    return /*html*/`
    <div class="bg-white min-vh-100">
        <section class="py-5 bg-dark text-white text-center position-relative overflow-hidden">
            <div class="container py-5 position-relative z-1">
                <h1 class="display-4 fw-bold mb-3">Connecting Africa to <span class="text-warning">Opportunity</span></h1>
                <p class="lead mx-auto opacity-75" style="max-width: 700px;">
                    We are more than an e-commerce platform. We are the digital backbone for thousands of entrepreneurs and the gateway to quality products for millions of consumers.
                </p>
            </div>
            <div class="position-absolute bg-warning rounded-circle opacity-10" style="width: 400px; height: 400px; top: -100px; right: -100px;"></div>
        </section>

        <section class="py-5">
            <div class="container">
                <div class="row g-4 text-center">
                    <div class="col-md-4">
                        <div class="p-4 border-0 h-100">
                            <div class="bg-light d-inline-flex p-3 rounded-4 mb-3">
                                <i class="bi bi-shop text-warning fs-1"></i>
                            </div>
                            <h5 class="fw-bold">Empowering Sellers</h5>
                            <p class="smaller text-muted">From local artisans to global brands, we provide the tools and logistics for any business to scale across borders.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-4 border-0 h-100">
                            <div class="bg-light d-inline-flex p-3 rounded-4 mb-3">
                                <i class="bi bi-truck text-warning fs-1"></i>
                            </div>
                            <h5 class="fw-bold">Seamless Logistics</h5>
                            <p class="smaller text-muted">Our proprietary delivery network reaches the last mile, ensuring commerce flows even in the most remote areas.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-4 border-0 h-100">
                            <div class="bg-light d-inline-flex p-3 rounded-4 mb-3">
                                <i class="bi bi-shield-lock text-warning fs-1"></i>
                            </div>
                            <h5 class="fw-bold">Unmatched Trust</h5>
                            <p class="smaller text-muted">Every transaction is protected by secure payments and a commitment to authentic, high-quality products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="container opacity-10">

        <section class="py-5">
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" class="img-fluid rounded-4 shadow-lg" alt="Team collaborating">
                    </div>
                    <div class="col-lg-6">
                        <h6 class="text-warning fw-bold text-uppercase smaller ls-2 mb-2">Our Story</h6>
                        <h2 class="fw-bold mb-4">Founded on the belief that technology can change lives.</h2>
                        <p class="text-muted mb-4">
                            Started in 2012, our platform was born from a simple observation: the traditional retail model wasn't reaching the people who needed it most. We saw a gap between demand and accessibility, and we filled it with code, courage, and a massive logistics fleet.
                        </p>
                        <p class="text-muted mb-4">
                            Today, we operate in 11 countries, supporting over 100,000 active sellers and providing jobs for thousands of delivery associates. We don't just move boxes; we move economies.
                        </p>
                        <div class="d-flex gap-4">
                            <div>
                                <h3 class="fw-bold text-dark mb-0">1M+</h3>
                                <p class="smaller text-muted">Monthly Users</p>
                            </div>
                            <div class="vr"></div>
                            <div>
                                <h3 class="fw-bold text-dark mb-0">50M+</h3>
                                <p class="smaller text-muted">Orders Delivered</p>
                            </div>
                            <div class="vr"></div>
                            <div>
                                <h3 class="fw-bold text-dark mb-0">11</h3>
                                <p class="smaller text-muted">Markets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5 bg-light">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="fw-bold">What Drives Us</h2>
                    <p class="text-muted">The values that guide every line of code we write.</p>
                </div>
                <div class="row g-3">
                    <div class="col-md-6 col-lg-3">
                        <div class="card border-0 p-4 rounded-4 shadow-sm h-100">
                            <p class="fw-bold mb-2">Customer First</p>
                            <p class="smaller text-muted mb-0">We exist to serve the customer. Their convenience is our obsession.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card border-0 p-4 rounded-4 shadow-sm h-100">
                            <p class="fw-bold mb-2">Speed to Market</p>
                            <p class="smaller text-muted mb-0">Execution over perfection. We move fast and fix things faster.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card border-0 p-4 rounded-4 shadow-sm h-100">
                            <p class="fw-bold mb-2">Transparency</p>
                            <p class="smaller text-muted mb-0">No hidden fees, no fake reviews. Pure, honest commerce.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card border-0 p-4 rounded-4 shadow-sm h-100">
                            <p class="fw-bold mb-2">Impact</p>
                            <p class="smaller text-muted mb-0">We measure success by the number of businesses we help grow.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5 bg-warning text-white text-center">
            <div class="container py-4">
                <h3 class="fw-bold mb-3">Ready to be part of the future of commerce?</h3>
                <div class="d-flex justify-content-center gap-3">
                    <button class="btn btn-dark fw-bold px-4 py-2">Become a Vendor</button>
                    <button class="btn btn-outline-dark fw-bold px-4 py-2">Join the Team</button>
                </div>
            </div>
        </section>

        <style>
            .smaller { font-size: 13px; }
            .ls-2 { letter-spacing: 2px; }
            .z-1 { z-index: 1; }
            .vr { width: 1px; background-color: #dee2e6; height: 40px; }
        </style>
    </div>
    `;
}
