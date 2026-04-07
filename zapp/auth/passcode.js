export default function EnterPasscode() {
    return /*html*/`
    <div class="bg-light min-vh-100 d-flex flex-column">
        <nav class="navbar navbar-light bg-white shadow-sm mb-auto">
            <div class="container justify-content-center">
                <a class="navbar-brand fw-bold text-warning fs-3" href="/">JUMIA <i class="bi bi-shield-check-fill fs-6 text-dark"></i></a>
            </div>
        </nav>

        <main class="container my-5">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5">
                        <div class="text-center mb-4">
                            <div class="bg-primary bg-opacity-10 d-inline-block p-3 rounded-circle mb-3">
                                <i class="bi bi-phone-vibrate text-primary fs-1"></i>
                            </div>
                            <h4 class="fw-bold mb-1">Verify your device</h4>
                            <p class="text-muted small">We've sent a 6-digit code to <br> <span class="fw-bold text-dark">+234 **** **78</span></p>
                        </div>

                        <form id="otpForm">
                            <div class="d-flex justify-content-between gap-2 mb-4" id="otpContainer">
                                <input type="text" class="form-control otp-input text-center fw-bold fs-4 shadow-none" maxlength="1" pattern="[0-9]*" inputmode="numeric" required>
                                <input type="text" class="form-control otp-input text-center fw-bold fs-4 shadow-none" maxlength="1" pattern="[0-9]*" inputmode="numeric" required>
                                <input type="text" class="form-control otp-input text-center fw-bold fs-4 shadow-none" maxlength="1" pattern="[0-9]*" inputmode="numeric" required>
                                <input type="text" class="form-control otp-input text-center fw-bold fs-4 shadow-none" maxlength="1" pattern="[0-9]*" inputmode="numeric" required>
                                <input type="text" class="form-control otp-input text-center fw-bold fs-4 shadow-none" maxlength="1" pattern="[0-9]*" inputmode="numeric" required>
                                <input type="text" class="form-control otp-input text-center fw-bold fs-4 shadow-none" maxlength="1" pattern="[0-9]*" inputmode="numeric" required>
                            </div>

                            <button class="btn btn-warning w-100 py-3 fw-bold text-white shadow-sm mb-4">
                                VERIFY & PROCEED
                            </button>

                            <div class="text-center">
                                <p class="smaller text-muted mb-1">Didn't receive the code?</p>
                                <button type="button" class="btn btn-link text-warning text-decoration-none smaller fw-bold p-0" id="resendBtn">
                                    RESEND CODE <span id="timer">(00:59)</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div class="text-center mt-4">
                        <p class="smaller text-muted">
                            <i class="bi bi-info-circle me-1"></i> 
                            Make sure to check your spam folder or wait a few moments.
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 12px; }
            .otp-input {
                width: 45px;
                height: 55px;
                border: 2px solid #dee2e6;
                transition: all 0.2s ease;
            }
            .otp-input:focus {
                border-color: #ff9900 !important;
                background-color: #fff9f0;
            }
            .btn-link:disabled {
                color: #adb5bd !important;
                cursor: not-allowed;
            }
            @media (max-width: 400px) {
                .otp-input { width: 38px; height: 50px; }
            }
        </style>

        <script>
            // Automatic focus shift for OTP inputs
            const inputs = document.querySelectorAll('.otp-input');
            inputs.forEach((input, index) => {
                input.addEventListener('input', (e) => {
                    if (e.target.value.length === 1 && index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                });

                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Backspace' && !e.target.value && index > 0) {
                        inputs[index - 1].focus();
                    }
                });
            });

            // Simple Countdown Demo
            let timeLeft = 59;
            const timerElement = document.getElementById('timer');
            const resendBtn = document.getElementById('resendBtn');
            
            const countdown = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    timerElement.innerHTML = "";
                    resendBtn.disabled = false;
                } else {
                    timerElement.innerHTML = \`(00:\${timeLeft < 10 ? '0' + timeLeft : timeLeft})\`;
                    resendBtn.disabled = true;
                }
                timeLeft -= 1;
            }, 1000);
            
        </script>
    </div>
    `;
}