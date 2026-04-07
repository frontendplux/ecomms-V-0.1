export default function AccountManagement() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="container pt-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-3" style="font-size: 12px;">
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">My Account</a></li>
                <li class="breadcrumb-item active text-muted">Account Management</li>
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
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3 active-nav">
                                <i class="bi bi-shield-lock me-3 fs-5 text-warning"></i> Account Management
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
                    <div class="card border-0 shadow-sm rounded-3 mb-4">
                        <div class="card-header bg-white py-3 border-bottom">
                            <h6 class="mb-0 fw-bold small text-uppercase">Details</h6>
                        </div>
                        <div class="card-body p-4">
                            <form id="detailsForm">
                                <div class="row g-3 mb-4">
                                    <div class="col-md-6">
                                        <label class="form-label smaller fw-bold text-muted">FIRST NAME</label>
                                        <input type="text" class="form-control form-control-sm py-2" value="John">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label smaller fw-bold text-muted">LAST NAME</label>
                                        <input type="text" class="form-control form-control-sm py-2" value="Doe">
                                    </div>
                                    <div class="col-md-12">
                                        <label class="form-label smaller fw-bold text-muted">E-MAIL</label>
                                        <input type="email" class="form-control form-control-sm py-2 bg-light" value="johndoe@example.com" disabled>
                                        <div class="form-text smaller text-muted">To change your email, please contact customer support.</div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-warning text-white fw-bold px-4 shadow-sm smaller">SAVE CHANGES</button>
                            </form>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 mb-4">
                        <div class="card-header bg-white py-3 border-bottom">
                            <h6 class="mb-0 fw-bold small text-uppercase">Change Password</h6>
                        </div>
                        <div class="card-body p-4">
                            <form id="passwordForm">
                                <div class="mb-3">
                                    <label class="form-label smaller fw-bold text-muted">CURRENT PASSWORD</label>
                                    <input type="password" class="form-control form-control-sm py-2">
                                </div>
                                <div class="row g-3 mb-4">
                                    <div class="col-md-6">
                                        <label class="form-label smaller fw-bold text-muted">NEW PASSWORD</label>
                                        <input type="password" class="form-control form-control-sm py-2">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label smaller fw-bold text-muted">CONFIRM NEW PASSWORD</label>
                                        <input type="password" class="form-control form-control-sm py-2">
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-warning text-white fw-bold px-4 shadow-sm smaller">UPDATE PASSWORD</button>
                            </form>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 bg-danger bg-opacity-10">
                        <div class="card-body p-4 d-flex justify-content-between align-items-center flex-wrap gap-3">
                            <div>
                                <h6 class="fw-bold mb-1 text-danger small">CLOSE ACCOUNT</h6>
                                <p class="smaller text-muted mb-0">Once you close your account, you will lose access to your order history and saved items.</p>
                            </div>
                            <button class="btn btn-outline-danger fw-bold px-4 smaller">CLOSE MY ACCOUNT</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .active-nav { color: #ff9900 !important; font-weight: bold; border-left: 4px solid #ff9900 !important; border-radius: 0 !important; }
            .form-control:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.25rem rgba(255, 153, 0, 0.15);
            }
            .form-control:disabled { cursor: not-allowed; }
        </style>
    </div>
    `;
}