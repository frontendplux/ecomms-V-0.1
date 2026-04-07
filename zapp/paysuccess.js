export default function OrderSuccess() {
    return /*html*/`
    <div class="container py-5 text-center">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-0 shadow-sm p-5 rounded-4">
                    <div class="mb-4">
                        <i class="bi bi-check-circle-fill text-success" style="font-size: 5rem;"></i>
                    </div>
                    <h2 class="fw-bold mb-2">Thank you for your order!</h2>
                    <p class="text-muted">Your order <span class="fw-bold text-dark">#39485720</span> has been placed successfully.</p>
                    
                    <div class="bg-light p-3 rounded-3 my-4 text-start">
                        <div class="d-flex justify-content-between mb-2">
                            <span class="small text-muted">Estimated Delivery:</span>
                            <span class="small fw-bold">Wed, 08 Apr - Fri, 10 Apr</span>
                        </div>
                        <p class="smaller text-muted mb-0 lh-sm">A confirmation email has been sent to <b>user@example.com</b> with your order details and tracking link.</p>
                    </div>

                    <div class="d-grid gap-2">
                        <button class="btn btn-warning text-white fw-bold py-3">TRACK YOUR ORDER</button>
                        <a href="/" class="btn btn-link text-decoration-none text-warning fw-bold">CONTINUE SHOPPING</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}


export function PaymentDeclined() {
    return /*html*/`
    <div class="container py-5 text-center">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-0 shadow-sm p-5 rounded-4">
                    <div class="mb-4">
                        <i class="bi bi-exclamation-octagon-fill text-danger" style="font-size: 5rem;"></i>
                    </div>
                    <h2 class="fw-bold mb-2">Payment Declined</h2>
                    <p class="text-muted">We couldn't process your payment. Please check your card details or contact your bank.</p>
                    
                    <div class="alert alert-danger border-0 small text-start my-4">
                        <i class="bi bi-info-circle-fill me-2"></i> 
                        Reason: Insufficient funds or card expired.
                    </div>

                    <div class="d-grid gap-2">
                        <button class="btn btn-dark text-white fw-bold py-3">RETRY PAYMENT</button>
                        <button class="btn btn-outline-secondary fw-bold py-3">USE A DIFFERENT METHOD</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}


export function PaymentPending() {
    return /*html*/`
    <div class="container py-5 text-center">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-0 shadow-sm p-5 rounded-4">
                    <div class="mb-4 position-relative d-inline-block">
                        <i class="bi bi-hourglass-split text-warning" style="font-size: 5rem;"></i>
                        <span class="position-absolute top-50 start-50 translate-middle spinner-border text-warning opacity-25" style="width: 6rem; height: 6rem;"></span>
                    </div>
                    <h2 class="fw-bold mb-2">Payment Pending</h2>
                    <p class="text-muted">We are currently verifying your transaction. This usually takes 2-5 minutes.</p>
                    
                    <div class="card border border-warning bg-warning bg-opacity-10 p-3 my-4">
                        <p class="smaller fw-bold text-warning-emphasis mb-0">
                            Please do not refresh this page or close your browser. 
                            We will update you via email once confirmed.
                        </p>
                    </div>

                    <div class="d-flex flex-column gap-3">
                        <div class="progress" style="height: 6px;">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style="width: 60%"></div>
                        </div>
                        <button class="btn btn-outline-warning fw-bold py-2 mt-2">REFRESH STATUS</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .smaller { font-size: 12px; }
        .text-warning-emphasis { color: #856404; }
    </style>
    `;
}