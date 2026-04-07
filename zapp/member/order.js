export default function OrderDetails() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="container pt-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-3" style="font-size: 12px;">
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">My Account</a></li>
                <li class="breadcrumb-item active text-muted">Order #39485720</li>
            </ol>
        </nav>

        <main class="container">
            <div class="row g-3">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm rounded-3 mb-3">
                        <div class="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
                            <h6 class="mb-0 fw-bold small text-uppercase">Order Status</h6>
                            <span class="badge bg-warning text-dark px-3 py-2 smaller fw-bold">SHIPPED</span>
                        </div>
                        <div class="card-body py-5 px-4">
                            <div class="stepper-wrapper">
                                <div class="stepper-item completed">
                                    <div class="step-counter"><i class="bi bi-check"></i></div>
                                    <div class="step-name smaller fw-bold mt-2 text-uppercase">Placed</div>
                                    <div class="smaller text-muted">12-04-2024</div>
                                </div>
                                <div class="stepper-item completed">
                                    <div class="step-counter"><i class="bi bi-check"></i></div>
                                    <div class="step-name smaller fw-bold mt-2 text-uppercase">Confirmed</div>
                                    <div class="smaller text-muted">12-04-2024</div>
                                </div>
                                <div class="stepper-item active">
                                    <div class="step-counter"><i class="bi bi-truck"></i></div>
                                    <div class="step-name smaller fw-bold mt-2 text-uppercase">Shipped</div>
                                    <div class="smaller text-muted">14-04-2024</div>
                                </div>
                                <div class="stepper-item">
                                    <div class="step-counter"><i class="bi bi-house-door"></i></div>
                                    <div class="step-name smaller fw-bold mt-2 text-uppercase">Delivered</div>
                                    <div class="smaller text-muted">Estimated 18-04</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 mb-3">
                        <div class="card-header bg-white py-3 border-bottom">
                            <h6 class="mb-0 fw-bold small text-uppercase">Items in your order (2)</h6>
                        </div>
                        <div class="card-body p-0">
                            <div class="p-3 border-bottom d-flex gap-3 align-items-start">
                                <img src="https://via.placeholder.com/80?text=iPhone" class="rounded border" style="width: 80px;">
                                <div class="flex-grow-1">
                                    <h6 class="smaller fw-bold mb-1">Apple iPhone 15 Pro Max - 256GB - Titanium</h6>
                                    <p class="smaller text-muted mb-1">Quantity: 1</p>
                                    <p class="smaller mb-1"><span class="badge bg-info bg-opacity-10 text-info px-2">Jumia Express</span></p>
                                    <h6 class="fw-bold mb-0 smaller">₦ 1,850,000</h6>
                                </div>
                                <button class="btn btn-outline-warning btn-sm fw-bold smaller">BUY AGAIN</button>
                            </div>
                            <div class="p-3 d-flex gap-3 align-items-start">
                                <img src="https://via.placeholder.com/80?text=AirPods" class="rounded border" style="width: 80px;">
                                <div class="flex-grow-1">
                                    <h6 class="smaller fw-bold mb-1">Apple AirPods Pro (2nd Gen)</h6>
                                    <p class="smaller text-muted mb-1">Quantity: 2</p>
                                    <h6 class="fw-bold mb-0 smaller">₦ 490,000</h6>
                                </div>
                                <button class="btn btn-outline-warning btn-sm fw-bold smaller">BUY AGAIN</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm rounded-3 mb-3 p-3">
                        <h6 class="fw-bold border-bottom pb-2 small text-uppercase">Delivery Information</h6>
                        <div class="mt-2">
                            <h6 class="smaller fw-bold mb-1">Shipping Address</h6>
                            <p class="smaller text-muted mb-3 lh-sm">John Doe<br>Plot 123, Herbert Macaulay Way, Yaba<br>Lagos, Nigeria<br>+234 801 234 5678</p>
                            
                            <h6 class="smaller fw-bold mb-1">Shipping Method</h6>
                            <p class="smaller text-muted mb-0">Doorstep Delivery</p>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 p-3">
                        <h6 class="fw-bold border-bottom pb-2 small text-uppercase">Payment Information</h6>
                        <div class="mt-2 py-2 small border-bottom">
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">Items Total:</span>
                                <span class="fw-bold">₦ 2,340,000</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">Shipping Fee:</span>
                                <span class="fw-bold">₦ 2,500</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center py-3">
                            <span class="fw-bold fs-6">Total:</span>
                            <h5 class="fw-bold mb-0 text-dark">₦ 2,342,500</h5>
                        </div>
                        <p class="smaller text-muted"><i class="bi bi-credit-card me-1"></i> Paid with JumiaPay</p>
                    </div>
                    
                    <button class="btn btn-link text-warning text-decoration-none w-100 fw-bold smaller mt-3">
                        NEED HELP WITH THIS ORDER?
                    </button>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .stepper-wrapper { display: flex; justify-content: space-between; position: relative; }
            .stepper-item { position: relative; display: flex; flex-direction: column; align-items: center; flex: 1; z-index: 2; }
            .stepper-item::before { position: absolute; content: ""; border-bottom: 2px solid #ccc; width: 100%; top: 15px; left: -50%; z-index: -1; }
            .stepper-item:first-child::before { content: none; }
            .stepper-item .step-counter { position: relative; width: 32px; height: 32px; display: flex; justify-content: center; align-items: center; background: #ccc; border-radius: 50%; color: white; font-weight: bold; }
            
            .stepper-item.completed .step-counter { background-color: #28a745; }
            .stepper-item.completed::before { border-bottom: 2px solid #28a745; }
            .stepper-item.active .step-counter { background-color: #ff9900; }
            .stepper-item.active .step-name { color: #ff9900; }
        </style>
    </div>
    `;
}