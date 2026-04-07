import { Footer } from "./footer.js";
import { Headerx } from "./header.js";

export default function Checkout() {
    return /*html*/`
    ${Headerx()}
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-light bg-white shadow-sm mb-4">
            <div class="container justify-content-between">
                <a class="navbar-brand fw-bold text-warning fs-3" href="#">JUMIA <i class="bi bi-shield-lock-fill text-dark fs-6"></i></a>
                <span class="text-muted small"><i class="bi bi-lock-fill me-1"></i> Secure Checkout</span>
            </div>
        </nav>

        <main class="container">
            <div class="row g-4">
                <div class="col-lg-8">
                    
                    <div class="card border-0 shadow-sm rounded-3 mb-3">
                        <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                            <h6 class="mb-0 fw-bold"><i class="bi bi-check-circle-fill text-success me-2"></i> 1. ADDRESS DETAILS</h6>
                            <button class="btn btn-link btn-sm text-warning text-decoration-none fw-bold">CHANGE</button>
                        </div>
                        <div class="card-body">
                            <h6 class="small fw-bold mb-1">John Doe</h6>
                            <p class="smaller text-muted mb-0">Plot 123, Herbert Macaulay Way, Yaba</p>
                            <p class="smaller text-muted mb-0">Lagos, Nigeria | +234 801 234 5678</p>
                        </div>
                    </div>
                    ${AddressForm()}

                    <div class="card border-0 shadow-sm rounded-3 mb-3">
                        <div class="card-header bg-white py-3">
                            <h6 class="mb-0 fw-bold">2. DELIVERY METHOD</h6>
                        </div>
                        <div class="card-body">
                            <div class="form-check border rounded p-3 mb-2 border-warning bg-warning bg-opacity-10">
                                <input class="form-check-input ms-0 me-3" type="radio" name="delivery" id="doorStep" checked>
                                <label class="form-check-label d-block cursor-pointer" for="doorStep">
                                    <div class="d-flex justify-content-between">
                                        <span class="fw-bold small">Doorstep Delivery</span>
                                        <span class="fw-bold small">₦ 2,500</span>
                                    </div>
                                    <p class="smaller text-muted mb-0 mt-1">Delivered between tomorrow and Wednesday.</p>
                                </label>
                            </div>
                            <div class="form-check border rounded p-3 mb-2">
                                <input class="form-check-input ms-0 me-3" type="radio" name="delivery" id="pickup">
                                <label class="form-check-label d-block cursor-pointer" for="pickup">
                                    <div class="d-flex justify-content-between">
                                        <span class="fw-bold small">Pickup Station</span>
                                        <span class="fw-bold small">₦ 1,200</span>
                                    </div>
                                    <p class="smaller text-muted mb-0 mt-1">Ready for pickup by Thursday at our Yaba Hub.</p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 mb-3">
                        <div class="card-header bg-white py-3">
                            <h6 class="mb-0 fw-bold">3. PAYMENT METHOD</h6>
                        </div>
                        <div class="card-body">
                            <div class="list-group list-group-flush">
                                <label class="list-group-item d-flex gap-3 py-3 border rounded mb-2 cursor-pointer">
                                    <input class="form-check-input flex-shrink-0" type="radio" name="payment" checked>
                                    <span class="d-flex flex-column">
                                        <span class="fw-bold small">JumiaPay (Card, Bank Transfer)</span>
                                        <span class="smaller text-muted">Safe, secure, and fast. Get 5% cashback.</span>
                                    </span>
                                    <div class="ms-auto fs-4 text-primary"><i class="bi bi-credit-card"></i></div>
                                </label>
                                <label class="list-group-item d-flex gap-3 py-3 border rounded cursor-pointer opacity-50">
                                    <input class="form-check-input flex-shrink-0" type="radio" name="payment">
                                    <span class="d-flex flex-column">
                                        <span class="fw-bold small">Cash on Delivery</span>
                                        <span class="smaller text-muted">Currently unavailable for high-value items.</span>
                                    </span>
                                    <div class="ms-auto fs-4 text-muted"><i class="bi bi-cash"></i></div>
                                </label>
                            </div>
                            
                            <button class="btn btn-warning w-100 py-3 mt-4 fw-bold text-white shadow-sm">
                                CONFIRM ORDER
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm rounded-3 p-3 sticky-top" style="top: 85px;">
                        <h6 class="fw-bold border-bottom pb-2 small text-uppercase">Order Summary</h6>
                        <div class="py-2 small">
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">Item's total (3)</span>
                                <span class="fw-bold">₦ 2,340,000</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">Delivery fees</span>
                                <span class="fw-bold">₦ 2,500</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center py-2 border-top border-bottom my-2">
                            <span class="fw-bold">Total</span>
                            <h5 class="fw-bold mb-0 text-warning">₦ 2,342,500</h5>
                        </div>

                        <div class="mt-3 mb-2">
                            <div class="input-group input-group-sm">
                                <input type="text" class="form-control" placeholder="Voucher Code">
                                <button class="btn btn-outline-warning fw-bold px-3">APPLY</button>
                            </div>
                        </div>

                        <div class="mt-4 pt-3 border-top">
                            <p class="smaller text-muted mb-0 text-center">By proceeding, you are agreeing to our <br> <a href="#" class="text-warning">Terms and Conditions</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .cursor-pointer { cursor: pointer; }
            .form-check-input:checked { background-color: #ff9900; border-color: #ff9900; }
        </style>
    </div>
    ${Footer()}
    `;
}


  function AddressForm() {
    return /*html*/`
    <div class="card border-0 shadow-sm rounded-3 mb-3">
        <div class="card-header bg-white py-3 border-bottom">
            <h6 class="mb-0 fw-bold text-uppercase small">1. Add New Address</h6>
        </div>
        <div class="card-body p-4">
            <form id="addressForm">
                <div class="row g-3 mb-3">
                    <div class="col-md-6">
                        <label class="form-label small fw-bold">First Name</label>
                        <input type="text" class="form-control form-control-sm py-2" placeholder="First Name" required>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label small fw-bold">Last Name</label>
                        <input type="text" class="form-control form-control-sm py-2" placeholder="Last Name" required>
                    </div>
                </div>

                <div class="row g-3 mb-3">
                    <div class="col-md-12">
                        <label class="form-label small fw-bold">Mobile Phone Number</label>
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">+234</span>
                            <input type="tel" class="form-control py-2" placeholder="8012345678" required>
                        </div>
                        <div class="form-text smaller text-muted">In case we need to contact you about your order.</div>
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label small fw-bold">Delivery Address</label>
                    <textarea class="form-control form-control-sm" rows="2" placeholder="Street Name / Building / Apartment no." required></textarea>
                </div>

                <div class="row g-3 mb-4">
                    <div class="col-md-6">
                        <label class="form-label small fw-bold">State / Region</label>
                        <select class="form-select form-select-sm py-2" required>
                            <option selected disabled value="">Select State</option>
                            <option>Lagos</option>
                            <option>Abuja (FCT)</option>
                            <option>Ogun</option>
                            <option>Rivers</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label small fw-bold">City</label>
                        <select class="form-select form-select-sm py-2" required disabled>
                            <option selected disabled value="">Select City</option>
                        </select>
                    </div>
                </div>

                <div class="form-check mb-4">
                    <input class="form-check-input custom-check" type="checkbox" value="" id="defaultAddress" checked>
                    <label class="form-check-label small" for="defaultAddress">
                        Set as default address
                    </label>
                </div>

                <div class="d-flex gap-3 pt-3 border-top">
                    <button type="submit" class="btn btn-warning text-white fw-bold px-5 shadow-sm">SAVE ADDRESS</button>
                    <button type="button" class="btn btn-outline-secondary fw-bold px-4">CANCEL</button>
                </div>
            </form>
        </div>
    </div>

    <style>
        .custom-check:checked { 
            background-color: #ff9900; 
            border-color: #ff9900; 
        }
        .form-control:focus, .form-select:focus {
            border-color: #ff9900;
            box-shadow: 0 0 0 0.25rem rgba(255, 153, 0, 0.25);
        }
    </style>
    `;
}