export default function ForgotPassword() {
    return /*html*/`
    <div class="bg-light min-vh-100 d-flex flex-column">
        <nav class="navbar navbar-light bg-white shadow-sm mb-auto">
            <div class="container justify-content-center">
                <a class="navbar-brand fw-bold text-warning fs-3" href="/">JUMIA <i class="bi bi-star-fill fs-6"></i></a>
            </div>
        </nav>

        <main class="container my-5">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-6">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5">
                        <div class="text-center mb-4">
                            <div class="bg-warning bg-opacity-10 d-inline-block p-3 rounded-circle mb-3">
                                <i class="bi bi-shield-lock text-warning fs-1"></i>
                            </div>
                            <h4 class="fw-bold mb-1">Forgot Password?</h4>
                            <p class="text-muted small px-lg-3">Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                        </div>

                        <form id="forgotPasswordForm">
                            <div class="mb-4">
                                <div class="form-floating">
                                    <input type="email" class="form-control border-secondary-subtle shadow-none" id="recoveryEmail" placeholder="name@example.com" required>
                                    <label for="recoveryEmail" class="text-muted small">Email Address</label>
                                </div>
                            </div>

                            <button class="btn btn-warning w-100 py-3 fw-bold text-white shadow-sm mb-3">
                                RESET PASSWORD
                            </button>

                            <div class="text-center">
                                <a href="/login" class="text-dark text-decoration-none smaller fw-bold">
                                    <i class="bi bi-arrow-left me-1"></i> Back to Login
                                </a>
                            </div>
                        </form>

                        <div id="successMessage" class="d-none text-center py-2">
                            <div class="alert alert-success border-0 smaller mb-0">
                                <i class="bi bi-check-circle-fill me-2"></i> 
                                If an account exists for that email, a reset link has been sent.
                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-4">
                        <p class="smaller text-muted">
                            Still having trouble? <br>
                            <a href="#" class="text-warning fw-bold text-decoration-none">Contact Customer Support</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <footer class="mt-auto py-4 text-center opacity-50">
            <h6 class="fw-bold text-muted smaller text-uppercase tracking-widest">Secure Recovery</h6>
        </footer>

        <style>
            .smaller { font-size: 12px; }
            .tracking-widest { letter-spacing: 2px; }
            .form-control:focus {
                border-color: #ff9900 !important;
                box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.15) !important;
            }
            .bg-opacity-10 { background-color: rgba(255, 153, 0, 0.1) !important; }
        </style>
    </div>

    <script>
        // Simple UI Toggle for Demo
        document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
            e.preventDefault();
            this.classList.add('d-none');
            document.getElementById('successMessage').classList.remove('d-none');
        });
    </script>
    `;
}