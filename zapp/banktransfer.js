export default function BankTransfer() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-light bg-white shadow-sm mb-4">
            <div class="container justify-content-center">
                <a class="navbar-brand fw-bold text-warning fs-3 d-flex" href="#"><h1 class="m-0">JUMIA</h1> <i class="bi bi-shield-check text-success fs-6"></i></a>
            </div>
        </nav>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-md-7 col-lg-6">
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="bg-warning text-white p-3 text-center">
                            <div class="spinner-grow spinner-grow-sm me-2" role="status"></div>
                            <span class="fw-bold small">Awaiting Payment...</span>
                        </div>

                        <div class="card-body p-4">
                            <div class="text-center mb-4">
                                <p class="text-muted small mb-1">Total Amount to Pay</p>
                                <h2 class="fw-bold text-dark mb-3">₦ 2,342,500</h2>
                                <div class="d-inline-block bg-danger bg-opacity-10 text-danger px-3 py-1 rounded-pill smaller fw-bold">
                                    <i class="bi bi-clock-history me-1"></i> Expires in 00:59:45
                                </div>
                            </div>

                            <div class="bg-light rounded-3 p-4 mb-4 border border-dashed">
                                <h6 class="smaller fw-bold text-muted text-uppercase mb-3">Transfer to the account below:</h6>
                                
                                <div class="mb-3">
                                    <label class="smaller text-muted d-block">Bank Name</label>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="fw-bold">Access Bank (Jumia/Paystack)</span>
                                        <i class="bi bi-bank text-secondary"></i>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="smaller text-muted d-block">Account Number</label>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="fw-bold fs-5 tracking-widest" id="accNo">0123456789</span>
                                        <button class="btn btn-sm btn-outline-warning py-0 px-2 fw-bold" onclick="copyToClipboard('0123456789')">COPY</button>
                                    </div>
                                </div>

                                <div class="mb-0">
                                    <label class="smaller text-muted d-block">Beneficiary Name</label>
                                    <span class="fw-bold">JUMIA - ORDER #123456789</span>
                                </div>
                            </div>

                            <div class="mb-4">
                                <h6 class="small fw-bold mb-2">How to pay:</h6>
                                <ol class="smaller text-muted ps-3">
                                    <li class="mb-2">Open your bank app and initiate a transfer.</li>
                                    <li class="mb-2">Ensure the amount matches **exactly** ₦ 2,342,500.</li>
                                    <li class="mb-2">Once the transfer is successful, click the "I have paid" button below.</li>
                                </ol>
                            </div>
                            ${ReferenceSection()}

                            <button class="btn btn-warning w-100 py-3 fw-bold text-white shadow-sm mb-3">
                                I HAVE COMPLETED THE TRANSFER
                            </button>
                            
                            <button class="btn btn-link w-100 text-muted text-decoration-none smaller fw-bold">
                                CHANGE PAYMENT METHOD
                            </button>
                        </div>
                    </div>

                    <div class="text-center mt-4 opacity-75">
                        <p class="smaller text-muted">
                            <i class="bi bi-shield-fill-check text-success me-1"></i> 
                            Your payment is secured by JumiaPay & 256-bit encryption
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .tracking-widest { letter-spacing: 2px; }
            .border-dashed { border: 2px dashed #dee2e6 !important; }
            .bg-warning { background-color: #ff9900 !important; }
            .btn-outline-warning { border-color: #ff9900; color: #ff9900; }
            .btn-outline-warning:hover { background-color: #ff9900; color: #fff; }
        </style>
    </div>

    <script>
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text);
            alert("Account number copied!");
        }
    </script>
    `;
}

 function ReferenceSection() {
    return /*html*/`
    <div class="mt-4 pt-4 border-top">
        <div class="d-flex align-items-center gap-2 mb-3">
            <i class="bi bi-shield-lock-fill text-warning fs-5"></i>
            <h6 class="small fw-bold mb-0 text-uppercase">Payment Verification</h6>
        </div>
        
        <p class="smaller text-muted mb-3">
            If your bank app provided a <b>Transaction Reference</b> or <b>Session ID</b>, please enter it below to speed up your order verification.
        </p>

        <div class="bg-white border rounded p-3 shadow-sm">
            <div class="mb-3">
                <label class="smaller fw-bold text-dark mb-2 d-block">Enter Transaction Reference / Code</label>
                <div class="input-group">
                    <input type="text" class="form-control form-control-sm py-2 text-uppercase tracking-widest" 
                           placeholder="E.g. 1234567890ABC" 
                           maxlength="20"
                           id="refCode">
                    <button class="btn btn-dark btn-sm px-3 fw-bold smaller" type="button" id="verifyBtn">
                        VERIFY
                    </button>
                </div>
                <div id="verifyFeedback" class="smaller mt-2 d-none text-success">
                    <i class="bi bi-check-circle-fill me-1"></i> Reference code submitted for processing.
                </div>
            </div>

            <div class="d-flex align-items-start gap-2 p-2 bg-light rounded">
                <i class="bi bi-info-circle text-secondary mt-1"></i>
                <p class="smaller text-muted mb-0">
                    Verification usually takes 2-5 minutes. You will receive an email confirmation once the payment is spotted.
                </p>
            </div>
        </div>
    </div>

    <style>
        .tracking-widest { letter-spacing: 1px; font-family: 'Courier New', Courier, monospace; }
        #refCode::placeholder { letter-spacing: normal; font-family: sans-serif; opacity: 0.5; }
        .btn-dark:hover { background-color: #000; }
    </style>

    <script>
        // Simple UI logic for the button
        document.getElementById('verifyBtn').addEventListener('click', function() {
            const input = document.getElementById('refCode');
            const feedback = document.getElementById('verifyFeedback');
            
            if(input.value.length > 5) {
                this.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span>';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = 'SUBMITTED';
                    feedback.classList.remove('d-none');
                    input.classList.add('is-valid');
                }, 1500);
            } else {
                input.classList.add('is-invalid');
            }
        });
    </script>
    `;
}