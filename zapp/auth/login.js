import { router } from "../../module.js";
import { company, toggleNav } from "../header.js";
export function loginFunction(){
document.getElementById('loginForm').onsubmit=async function (event){
    event.preventDefault(); // ✅ prevent form submission
    const btn = document.getElementById('btn');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    // Disable inputs
    btn.disabled = true;
    email.disabled = true;
    pass.disabled = true;
    // Show loading
    btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Loading...`;
        const response = await fetch(company.server_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                action: "login",
                email: email.value.trim(),
                pass: pass.value.trim()
            })
        });

        const resText = await response.text();
        const res = JSON.parse(resText);

        if (res.success) {
            localStorage.setItem('user_id', res.user_id);
            sessionStorage.setItem('token', res.token);
            toggleNav('green', 'Authentication Successful', res.message);
            // Optionally redirect to dashboard
            router('/dashboard');
        } else {
            toggleNav('red', 'Authentication Failed', res.message);
        }
        btn.disabled = false;
        email.disabled = false;
        pass.disabled = false;
        btn.innerHTML = 'LOGIN';
    }
}

export function facebookLogin(){
     window.fbAsyncInit = function() {
        FB.init({
            appId      : '973224445225883',
            cookie     : true,
            xfbml      : true,
            version    : 'v19.0'
        });
    };
    document.getElementById('fbLoginBtn').addEventListener('click', () => {
    FB.login(function(response) {
        if (response.authResponse) {
            const accessToken = response.authResponse.accessToken;
            // Get user info
            FB.api('/me', { fields: 'id,name,email' }, async function(user) {
                try {
                    const res = await fetch(company.server_url, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            action: "facebook_login",
                            fb_id: user.id,
                            name: user.name,
                            email: user.email,
                            accessToken: accessToken
                        })
                    });

                    const data = await res.json();

                    if (data.success) {
                        localStorage.setItem('user_id', data.user_id);
                        sessionStorage.setItem('token', data.token);

                        toggleNav('green', 'Login Successful', 'Welcome ' + user.name);
                        router('/dashboard');
                    } else {
                        toggleNav('red', 'Login Failed', data.message);
                    }

                } catch (err) {
                    console.error(err);
                    toggleNav('red', 'Error', 'Something went wrong');
                }

            });

        } else {
            toggleNav('red', 'Cancelled', 'Facebook login was cancelled');
        }
    }, { scope: 'email' });
});
}

export function googleLogin(){
// decode JWT
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}

// login.js
window.addEventListener('load', () => {
    if (!window.googleInitialized) {
        google.accounts.id.initialize({
            client_id: '8621696603-ub79e1jogd05a74rj6ikjjjebfcaf7go.apps.googleusercontent.com',
            callback: handleCredentialResponse
        });
        window.googleInitialized = true;
    }

    document.getElementById('googleBtn').onclick = () => {
        google.accounts.id.prompt();
    };
});

// this is called by Google after login
window.handleCredentialResponse = async function(response) {
    try {
        const token = response.credential;
        const user = parseJwt(token);
        console.log("Google User:", user);

        // send to backend
        const res = await fetch(company.server_url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                action: "google_login",
                token: token,
                email: user.email,
                name: user.name,
                picture: user.picture
            })
        });

        const data = await res.json();

        if (data.success) {
            localStorage.setItem('user_id', data.user_id);
            sessionStorage.setItem('token', data.token);
            toggleNav('green', 'Login Successful', 'Welcome ' + user.name);
            router('/dashboard');
        } else {
            toggleNav('red', 'Login Failed', data.message);
        }
    } catch (err) {
        console.error(err);
        toggleNav('red', 'Error', 'Google login failed');
    }
};
}
export default function Login() {
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
                <a data-link href="/signup" class="btn btn-warning text-capitalize">sign up</a>
            </div>
        </nav>

        <main class="container my-5">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-6">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5">
                        <div class="text-center mb-4">
                            <h4 class="fw-bold mb-1">Welcome back!</h4>
                            <p class="text-muted small">Type your e-mail to log in or create a ${company.name} account.</p>
                        </div>

                        <form id="loginForm">
                            <div class="mb-3">
                                <div class="form-floating">
                                    <input type="email" class="form-control border-secondary-subtle shadow-none" id="email" placeholder="name@example.com" required>
                                    <label for="email" class="text-muted small">Email Address</label>
                                </div>
                            </div>

                            <div class="mb-3 position-relative">
                                <div class="form-floating">
                                    <input type="password" class="form-control border-secondary-subtle shadow-none" id="pass" placeholder="Password" required>
                                    <label for="pass" class="text-muted small">Password</label>
                                </div>
                                <button type="button"
                                    onclick="
                                    var pass = document.getElementById('pass');
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
                                    class="btn position-absolute top-50 end-0 translate-middle-y border-0 text-muted px-3 mt-1">
                                    <i class="bi bi-eye"></i>
                                </button>
                            </div>

                            <div class="d-flex justify-content-end mb-4">
                                <a data-link href="/forget-password" class="text-warning text-decoration-none small fw-bold">Forgot Password?</a>
                            </div>

                            <button id="btn" class="btn btn-warning w-100 py-3 fw-bold text-white shadow-sm mb-4">
                                LOGIN
                            </button>

                            <div class="d-flex align-items-center mb-4">
                                <hr class="flex-grow-1 text-muted opacity-25">
                                <span class="px-3 smaller text-muted text-uppercase fw-bold">OR</span>
                                <hr class="flex-grow-1 text-muted opacity-25">
                            </div>

                            <div class="d-grid gap-2">
                           
                                <button type="button" id="fbLoginBtn"
                                    class="btn btn-outline-primary w-100 py-2 fw-bold smaller d-flex align-items-center justify-content-center gap-2">
                                        <i class="bi bi-facebook fs-5"></i> Log in with Facebook
                                    </button>
                                <button id="googleBtn" type="button" class="btn btn-outline-dark py-2 fw-bold smaller d-flex align-items-center justify-content-center gap-2">
                                    <i class="bi bi-google"></i> Log in with Google
                                </button>
                            </div>
                        </form>

                        <div class="mt-5 text-center">
                            <p class="smaller text-muted mb-0">Don't have an account? <a data-link href="/signup" class="text-warning fw-bold text-decoration-none">Create Account</a></p>
                        </div>
                    </div>

                    <div class="text-center mt-4">
                        <p class="smaller text-muted px-4">
                            By continuing you agree to ${company.name} <br>
                            <a data-link href="/terms-and-conditions" class="text-dark">Terms and Conditions</a> and <a data-link href="/help" class="text-dark">Privacy Notice</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <footer class="mt-auto py-4 text-center opacity-50">
            <h6 class="fw-bold text-muted smaller">${company.name} <i class="bi bi-patch-check-fill"></i></h6>
        </footer>

        <style>
            .smaller { font-size: 12px; }
            .form-control:focus {
                border-color: #ff9900 !important;
                box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.15) !important;
            }
            .form-floating > .form-control:focus ~ label::after {
                background-color: transparent !important;
            }
            .btn-outline-primary { border-color: #1877f2; color: #1877f2; }
            .btn-outline-primary:hover { background-color: #1877f2; color: #fff; }
        </style>
    </div>
    `;
}