import { router } from "../../module.js";
import { company, toggleNav } from "../header.js";

export function CreateAccountFunction() {
    const form = document.getElementById('registerForm');
    const passwordInput = document.getElementById('passwordInput');
    const progressBar = passwordInput.closest('.form-floating').nextElementSibling.querySelector('.progress-bar');
    const strengthText = progressBar.closest('.progress').nextElementSibling;

    // Password strength checker
    const checkPasswordStrength = (pwd) => {
        let score = 0;
        if (pwd.length >= 8) score += 1;
        if (/[A-Z]/.test(pwd)) score += 1;
        if (/[0-9]/.test(pwd)) score += 1;
        if (/[^A-Za-z0-9]/.test(pwd)) score += 1;
        return score;
    };

    passwordInput.addEventListener('input', () => {
        const pwd = passwordInput.value;
        const score = checkPasswordStrength(pwd);

        // Update progress bar
        const percent = (score / 4) * 100;
        progressBar.style.width = percent + '%';

        // Change color based on strength
        if (score <= 1) {
            progressBar.className = 'progress-bar bg-danger';
            strengthText.textContent = 'Password strength: Weak';
        } else if (score === 2 || score === 3) {
            progressBar.className = 'progress-bar bg-warning';
            strengthText.textContent = 'Password strength: Medium';
        } else {
            progressBar.className = 'progress-bar bg-success';
            strengthText.textContent = 'Password strength: Strong';
        }
    });

    // Form submission
    form.onsubmit = async e => {
        e.preventDefault();

        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const emailInput = document.getElementById('emailInput');
        const phoneInput = document.getElementById('phoneInput');
        const newsletter = document.getElementById('newsletter');

        // Simple validation
        if (!firstName.value.trim() || !lastName.value.trim()) {
            return toggleNav('red', 'Validation Error', 'Please enter your full name.');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            return toggleNav('red', 'Validation Error', 'Please enter a valid email address.');
        }

        if (passwordInput.value.length < 8) {
            return toggleNav('red', 'Validation Error', 'Password must be at least 8 characters.');
        }

        const phonePattern = /^\d{10,15}$/; // numeric check
        const phoneNumber = phoneInput.value.replace(/\D/g, '');
        if (!phonePattern.test(phoneNumber)) {
            return toggleNav('red', 'Validation Error', 'Please enter a valid phone number.');
        }

        // Disable button during request
        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Creating...`;

        try {
            const res = await fetch(company.server_url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'register',
                    firstName: firstName.value.trim(),
                    lastName: lastName.value.trim(),
                    email: emailInput.value.trim(),
                    password: passwordInput.value,
                    phone: phoneNumber,
                    newsletter: newsletter.checked ? 1 : 0
                })
            });

            const req = await res.text();
            const result=JSON.parse(req);
            if (result.success) {
                toggleNav('green', 'Registration Successful', result.message);
                router('/dashboard'); // redirect to dashboard
            } else {
                toggleNav('red', 'Registration Failed', result.message);
            }
        } catch (err) {
            console.error(err);
            toggleNav('red', 'Error', 'Something went wrong. Please try again.');
        } finally {
            btn.disabled = false;
            btn.innerHTML = 'CREATE ACCOUNT';
        }
    };
}

export default function CreateAccount() {
    return /*html*/`
    <div id="g_id_onload"
     data-client_id="8621696603-ub79e1jogd05a74rj6ikjjjebfcaf7go.apps.googleusercontent.com"
     data-callback="handleCredentialResponse"
     data-auto_prompt="false">
</div>
    <div class="bg-light min-vh-100 d-flex flex-column">
          <nav class="navbar navbar-light sticky-top bg-white shadow-sm mb-auto">
            <div class="container justify-content-between">
                <span class="navbar-brand fw-bold text-warning fs-3" onclick="history.back()"><i class="bi btn btn-light bi-chevron-left"></i> </span>
                <a data-link href="/login" class="btn btn-warning text-capitalize">Log In</a>
            </div>
        </nav>

        <main class="container my-5">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5">
                        <div class="text-center mb-4">
                            <h4 class="fw-bold mb-1">Create your account</h4>
                            <p class="text-muted small">Join the largest e-commerce platform in Africa.</p>
                        </div>

                        <form id="registerForm">
                            <div class="row g-2 mb-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-secondary-subtle shadow-none" id="firstName" placeholder="First Name" required>
                                        <label for="firstName" class="text-muted small">First Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-secondary-subtle shadow-none" id="lastName" placeholder="Last Name" required>
                                        <label for="lastName" class="text-muted small">Last Name</label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="form-floating">
                                    <input type="email" class="form-control border-secondary-subtle shadow-none" id="emailInput" placeholder="name@example.com" required>
                                    <label for="emailInput" class="text-muted small">Email Address</label>
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="form-floating position-relative">
                                    <input type="password" class="form-control border-secondary-subtle shadow-none" id="passwordInput" placeholder="Password" required>
                                    <label for="passwordInput" class="text-muted small">Password (Min. 8 characters)</label>
                                    <button type="button"
                                        onclick="
                                        var pass = document.getElementById('passwordInput');
                                        var icon = this.querySelector('i');
                                        if(pass.type === 'password'){
                                            pass.type='text';
                                            icon.classList.remove('bi-eye');
                                            icon.classList.add('bi-eye-slash');
                                        }else{
                                            pass.type='password';
                                            icon.classList.remove('bi-eye-slash');
                                            icon.classList.add('bi-eye');
                                        }
                                        "
                                        class="btn position-absolute top-50 end-0 translate-middle-y border-0 text-muted px-3 mt-1" style="z-index:1000">
                                        <i class="bi bi-eye"></i>
                                    </button>
                                </div>
                                <div class="progress mt-2" style="height: 4px;">
                                    <div  class="progress-bar bg-danger" role="progressbar" style="width: 33%"></div>
                                </div>
                                <small class="smaller text-muted mt-1 d-block text-end">Password strength: Weak</small>
                            </div>

                            <div class="mb-4">
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-secondary-subtle small">+234</span>
                                    <div class="form-floating flex-grow-1">
                                        <input type="tel" class="form-control border-secondary-subtle shadow-none" id="phoneInput" placeholder="Phone Number" required>
                                        <label for="phoneInput" class="text-muted small">Phone Number</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-check mb-4">
                                <input class="form-check-input custom-check" type="checkbox" id="newsletter" checked>
                                <label class="form-check-label smaller text-muted" for="newsletter">
                                    I want to receive Jumia Newsletters with the best deals and offers.
                                </label>
                            </div>

                            <button type="submit" id="btn" class="btn btn-warning w-100 py-3 fw-bold text-white shadow-sm mb-4">
                                CREATE ACCOUNT
                            </button>

                            <div class="d-flex align-items-center mb-4">
                                <hr class="flex-grow-1 text-muted opacity-25">
                                <span class="px-3 smaller text-muted text-uppercase fw-bold">OR REGISTER WITH</span>
                                <hr class="flex-grow-1 text-muted opacity-25">
                            </div>

                            <div class="row g-2">
                                <div class="col-6">
                                    <button type="button" id="fbLoginBtn" type="button" class="btn btn-outline-primary w-100 py-2 fw-bold smaller d-flex align-items-center justify-content-center gap-2">
                                        <i class="bi bi-facebook fs-5"></i> Facebook
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button id="googleBtn" type="button" class="btn btn-outline-dark w-100 py-2 fw-bold smaller d-flex align-items-center justify-content-center gap-2">
                                        <i class="bi bi-google fs-5"></i> Google
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div class="mt-5 text-center border-top pt-4">
                            <p class="smaller text-muted mb-0">Already have an account? <a data-link href="/login" class="text-warning fw-bold text-decoration-none">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="mt-auto py-4 text-center">
            <p class="smaller text-muted px-4">
                By creating an account, you agree to ${company.name} <br>
                <a href="#" class="text-dark">Terms and Conditions</a> and <a href="#" class="text-dark">Privacy Notice</a>
            </p>
        </footer>

        <style>
            .smaller { font-size: 12px; }
            .form-control:focus {
                border-color: #ff9900 !important;
                box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.15) !important;
            }
            .custom-check:checked {
                background-color: #ff9900;
                border-color: #ff9900;
            }
            /* Styling for the floating label fix with input-group */
            .input-group > .form-floating {
                flex: 1 1 auto;
                width: 1%;
            }
            .input-group > .form-floating > .form-control {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        </style>
    </div>
    `;
}