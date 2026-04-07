export default function VendorSettings() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <span class="navbar-brand fw-bold text-warning mb-0">ACCOUNT SETTINGS</span>
                <button class="btn btn-warning btn-sm fw-bold px-4 text-white">SAVE CHANGES</button>
            </div>
        </nav>

        <main class="container">
            <div class="row g-4">
                <div class="col-lg-3">
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="list-group list-group-flush">
                            <a href="#" class="list-group-item list-group-item-action active border-0 py-3 smaller fw-bold">
                                <i class="bi bi-person-circle me-2"></i> Store Profile
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3 smaller fw-bold text-muted">
                                <i class="bi bi-shield-lock me-2"></i> Password & Security
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3 smaller fw-bold text-muted">
                                <i class="bi bi-bell me-2"></i> Notification Prefs
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3 smaller fw-bold text-muted">
                                <i class="bi bi-people me-2"></i> User Management
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-3 smaller fw-bold text-danger">
                                <i class="bi bi-box-arrow-right me-2"></i> Deactivate Account
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-9">
                    <div class="card border-0 shadow-sm rounded-3 mb-4 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-4 small text-uppercase text-warning">Store Public Profile</h6>
                        <div class="row g-4 align-items-center mb-4">
                            <div class="col-auto">
                                <div class="position-relative">
                                    <img src="https://via.placeholder.com/100" class="rounded-circle border p-1" alt="Logo">
                                    <button class="btn btn-sm btn-dark position-absolute bottom-0 end-0 rounded-circle p-1">
                                        <i class="bi bi-camera" style="font-size: 10px;"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col">
                                <h6 class="fw-bold mb-1">Store Logo</h6>
                                <p class="smaller text-muted mb-0">PNG or JPG. Max 2MB. Recommended: 500x500px.</p>
                            </div>
                        </div>

                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">DISPLAY NAME</label>
                                <input type="text" class="form-control py-2" value="Divine Electronics">
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">PRIMARY CATEGORY</label>
                                <select class="form-select py-2">
                                    <option selected>Electronics</option>
                                    <option>Phones & Tablets</option>
                                    <option>Computing</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label class="smaller fw-bold text-muted mb-1">STORE DESCRIPTION</label>
                                <textarea class="form-control py-2" rows="3">Premium retailer of high-end gadgets and home electronics in Lagos.</textarea>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 mb-4 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-3 small text-uppercase text-warning">Contact Information</h6>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">EMAIL (NON-EDITABLE)</label>
                                <input type="text" class="form-control py-2 bg-light" value="admin@divine-elec.com" disabled>
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">PHONE NUMBER</label>
                                <input type="tel" class="form-control py-2" value="+234 801 234 5678">
                            </div>
                            <div class="col-12">
                                <label class="smaller fw-bold text-muted mb-1">WAREHOUSE ADDRESS</label>
                                <input type="text" class="form-control py-2" value="12B Admiralty Way, Lekki Phase 1, Lagos">
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 p-4 border-start border-4 border-info">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="fw-bold mb-1">Holiday Mode</h6>
                                <p class="smaller text-muted mb-0">Temporarily deactivate your listings while you are away to prevent SLA penalties.</p>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input custom-switch" type="checkbox" id="holidayMode">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .list-group-item.active { background-color: #fff9f0; color: #ff9900 !important; border-left: 4px solid #ff9900 !important; }
            .custom-switch:checked { background-color: #ff9900; border-color: #ff9900; }
            .form-control:focus, .form-select:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.1);
            }
        </style>
    </div>
    `;
}


export function VendorSecurity() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <span class="navbar-brand fw-bold text-warning mb-0">PASSWORD & SECURITY</span>
                <button class="btn btn-warning btn-sm fw-bold px-4 text-white">UPDATE SECURITY</button>
            </div>
        </nav>

        <main class="container">
            <div class="row g-4 justify-content-center">
                
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm rounded-3 mb-4 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-4 small text-uppercase text-warning">Change Password</h6>
                        <div class="row g-3">
                            <div class="col-12">
                                <label class="smaller fw-bold text-muted mb-1">CURRENT PASSWORD</label>
                                <input type="password" class="form-control py-2" placeholder="••••••••">
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">NEW PASSWORD</label>
                                <input type="password" class="form-control py-2" placeholder="Min. 8 characters">
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">CONFIRM NEW PASSWORD</label>
                                <input type="password" class="form-control py-2" placeholder="Repeat new password">
                            </div>
                        </div>
                        <div class="mt-3 bg-light p-2 rounded">
                            <p class="smaller text-muted mb-0 italic"><i class="bi bi-info-circle me-1"></i> Use a mix of letters, numbers, and symbols for a strong password.</p>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 mb-4 p-4 border-start border-4 border-success">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <div>
                                <h6 class="fw-bold mb-1">Two-Factor Authentication (2FA)</h6>
                                <p class="smaller text-muted mb-0">Add an extra layer of security to your account.</p>
                            </div>
                            <span class="badge bg-success bg-opacity-10 text-success px-3 py-2">RECOMMENDED</span>
                        </div>
                        
                        <div class="list-group list-group-flush border-top mt-3">
                            <div class="list-group-item px-0 py-3 d-flex justify-content-between align-items-center border-0">
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-phone fs-4 text-muted me-3"></i>
                                    <div>
                                        <p class="smaller fw-bold mb-0">SMS Verification</p>
                                        <p class="smaller text-muted mb-0">Receive a code via SMS to +234 ••• ••• 5678</p>
                                    </div>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input custom-switch" type="checkbox" checked>
                                </div>
                            </div>
                            <div class="list-group-item px-0 py-3 d-flex justify-content-between align-items-center border-0">
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-shield-check fs-4 text-muted me-3"></i>
                                    <div>
                                        <p class="smaller fw-bold mb-0">Authenticator App</p>
                                        <p class="smaller text-muted mb-0">Use Google Authenticator or Authy</p>
                                    </div>
                                </div>
                                <button class="btn btn-outline-dark btn-sm fw-bold smaller px-3">SETUP</button>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 p-4">
                        <h6 class="fw-bold border-bottom pb-2 mb-3 small text-uppercase text-warning">Active Sessions</h6>
                        <p class="smaller text-muted mb-4">You are currently logged in on these devices.</p>
                        
                        <div class="d-flex align-items-center mb-4">
                            <i class="bi bi-laptop fs-3 text-muted me-3"></i>
                            <div class="flex-grow-1">
                                <p class="smaller fw-bold mb-0">Chrome on MacOS <span class="badge bg-primary ms-2" style="font-size: 9px;">CURRENT</span></p>
                                <p class="smaller text-muted mb-0">Lagos, Nigeria • IP: 192.168.1.1</p>
                            </div>
                        </div>

                        <div class="d-flex align-items-center opacity-75">
                            <i class="bi bi-phone fs-3 text-muted me-3"></i>
                            <div class="flex-grow-1">
                                <p class="smaller fw-bold mb-0">Jumia Seller App (Android)</p>
                                <p class="smaller text-muted mb-0">Ikeja, Nigeria • Last active: 2 hours ago</p>
                            </div>
                            <button class="btn btn-link text-danger text-decoration-none smaller fw-bold">LOGOUT</button>
                        </div>

                        <hr class="my-4 opacity-10">
                        <button class="btn btn-outline-danger w-100 btn-sm fw-bold py-2 smaller">LOGOUT FROM ALL OTHER DEVICES</button>
                    </div>
                </div>

            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .italic { font-style: italic; }
            .custom-switch:checked { background-color: #198754; border-color: #198754; }
            .form-control:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.1);
            }
            .bg-opacity-10 { background-color: rgba(25, 135, 84, 0.1) !important; }
        </style>
    </div>
    `;
}


export function NotificationPrefs() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <span class="navbar-brand fw-bold text-warning mb-0">NOTIFICATION PREFERENCES</span>
                <button class="btn btn-warning btn-sm fw-bold px-4 text-white shadow-sm">SAVE SETTINGS</button>
            </div>
        </nav>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="bg-white border-bottom p-4">
                            <h6 class="fw-bold mb-1">Alert Channels</h6>
                            <p class="smaller text-muted mb-0">Choose how you want to be reached for different store activities.</p>
                        </div>

                        <div class="table-responsive">
                            <table class="table align-middle mb-0">
                                <thead class="table-light text-muted smaller fw-bold">
                                    <tr>
                                        <th class="ps-4 py-3" style="width: 40%;">ACTIVITY TYPE</th>
                                        <th class="text-center">EMAIL</th>
                                        <th class="text-center">SMS</th>
                                        <th class="text-center">APP PUSH</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-group-divider"><td colspan="4" class="bg-light ps-4 py-2 smaller fw-bold text-uppercase text-muted ls-1">Orders & Fulfillment</td></tr>
                                    <tr>
                                        <td class="ps-4">
                                            <p class="mb-0 fw-bold small">New Order Received</p>
                                            <p class="smaller text-muted mb-0">Instant alert when a customer buys an item.</p>
                                        </td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox" checked></td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox" checked></td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox" checked></td>
                                    </tr>
                                    <tr>
                                        <td class="ps-4">
                                            <p class="mb-0 fw-bold small">Order Cancellation</p>
                                            <p class="smaller text-muted mb-0">Alert if a customer or system cancels an order.</p>
                                        </td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox" checked></td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox"></td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox" checked></td>
                                    </tr>

                                    <tr class="table-group-divider"><td colspan="4" class="bg-light ps-4 py-2 smaller fw-bold text-uppercase text-muted ls-1">Inventory & Products</td></tr>
                                    <tr>
                                        <td class="ps-4">
                                            <p class="mb-0 fw-bold small">Low Stock Warning</p>
                                            <p class="smaller text-muted mb-0">Sent when items fall below 5 units.</p>
                                        </td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox" checked></td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox"></td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox" checked></td>
                                    </tr>
                                    <tr>
                                        <td class="ps-4">
                                            <p class="mb-0 fw-bold small">Price Changes</p>
                                            <p class="smaller text-muted mb-0">Confirmations of price updates you've made.</p>
                                        </td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox"></td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox"></td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox" checked></td>
                                    </tr>

                                    <tr class="table-group-divider"><td colspan="4" class="bg-light ps-4 py-2 smaller fw-bold text-uppercase text-muted ls-1">Account & Payments</td></tr>
                                    <tr>
                                        <td class="ps-4">
                                            <p class="mb-0 fw-bold small">Payout Confirmation</p>
                                            <p class="smaller text-muted mb-0">Notification when money is sent to your bank.</p>
                                        </td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox" checked></td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox" checked></td>
                                        <td class="text-center"><input class="form-check-input custom-check" type="checkbox" checked></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="mt-4 p-3 bg-white border rounded-3 d-flex gap-3 align-items-center shadow-sm">
                        <i class="bi bi-phone-vibrate text-warning fs-4"></i>
                        <p class="smaller text-muted mb-0">
                            <strong>Note on SMS:</strong> Standard carrier rates may apply. SMS alerts are highly recommended for <strong>New Orders</strong> to ensure you meet your 24h shipping SLA.
                        </p>
                    </div>

                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .ls-1 { letter-spacing: 1px; }
            .custom-check:checked { background-color: #ff9900; border-color: #ff9900; }
            .table tr:hover { background-color: #fcfcfc; }
            .form-check-input { width: 1.25em; height: 1.25em; cursor: pointer; }
        </style>
    </div>
    `;
}


export function UserManagement() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <span class="navbar-brand fw-bold text-warning mb-0">USER MANAGEMENT</span>
                <button class="btn btn-warning btn-sm fw-bold px-4 text-white shadow-sm" data-bs-toggle="modal" data-bs-target="#addUserModal">
                    <i class="bi bi-person-plus-fill me-2"></i> ADD STAFF MEMBER
                </button>
            </div>
        </nav>

        <main class="container">
            <div class="row g-4">
                <div class="col-12">
                    <div class="row g-3 mb-2">
                        <div class="col-md-3">
                            <div class="card border-0 shadow-sm p-3 bg-white text-center">
                                <p class="smaller text-muted fw-bold mb-1">TOTAL USERS</p>
                                <h4 class="fw-bold mb-0">4 / 10</h4>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="card border-0 shadow-sm p-3 bg-white border-start border-4 border-info">
                                <p class="smaller text-muted mb-0">
                                    <i class="bi bi-info-circle-fill text-info me-1"></i> 
                                    <strong>Tip:</strong> Assigning specific roles (like 'Picker') prevents staff from seeing your store's total revenue and bank details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                        <div class="table-responsive">
                            <table class="table align-middle mb-0 small">
                                <thead class="table-light text-muted fw-bold smaller">
                                    <tr>
                                        <th class="ps-4 py-3">NAME & EMAIL</th>
                                        <th>ROLE</th>
                                        <th>LAST LOGIN</th>
                                        <th>STATUS</th>
                                        <th class="text-end pe-4">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="ps-4">
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center smaller fw-bold" style="width: 32px; height: 32px;">JD</div>
                                                <div>
                                                    <p class="mb-0 fw-bold text-dark">John Doe</p>
                                                    <p class="mb-0 text-muted smaller">john.owner@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="badge bg-dark rounded-pill px-3">Store Owner</span></td>
                                        <td><span class="smaller text-muted">Active Now</span></td>
                                        <td><span class="badge bg-success bg-opacity-10 text-success px-2 py-1">Active</span></td>
                                        <td class="text-end pe-4">
                                            <button class="btn btn-sm btn-outline-secondary border-0" disabled><i class="bi bi-pencil"></i></button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="ps-4">
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center smaller fw-bold" style="width: 32px; height: 32px;">SA</div>
                                                <div>
                                                    <p class="mb-0 fw-bold text-dark">Samuel Ade</p>
                                                    <p class="mb-0 text-muted smaller">sam.ade@work.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="badge bg-secondary rounded-pill px-3">Order Picker</span></td>
                                        <td><span class="smaller text-muted">2 hours ago</span></td>
                                        <td><span class="badge bg-success bg-opacity-10 text-success px-2 py-1">Active</span></td>
                                        <td class="text-end pe-4">
                                            <button class="btn btn-sm btn-outline-secondary border-0"><i class="bi bi-pencil"></i></button>
                                            <button class="btn btn-sm btn-outline-danger border-0"><i class="bi bi-trash"></i></button>
                                        </td>
                                    </tr>

                                    <tr class="opacity-75">
                                        <td class="ps-4">
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="bg-light border text-muted rounded-circle d-flex align-items-center justify-content-center smaller fw-bold" style="width: 32px; height: 32px;">?</div>
                                                <div>
                                                    <p class="mb-0 fw-bold text-dark">Janet Smith</p>
                                                    <p class="mb-0 text-muted smaller">janet@work.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="badge bg-secondary rounded-pill px-3">Manager</span></td>
                                        <td><span class="smaller text-muted">Never</span></td>
                                        <td><span class="badge bg-warning bg-opacity-10 text-warning px-2 py-1">Pending Invite</span></td>
                                        <td class="text-end pe-4">
                                            <button class="btn btn-sm btn-link text-warning text-decoration-none fw-bold smaller">Resend Invite</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <div class="modal fade" id="addUserModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0 shadow">
                    <div class="modal-header bg-dark text-white p-4">
                        <h6 class="modal-title fw-bold mb-0">Invite New Staff Member</h6>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="mb-3">
                            <label class="smaller fw-bold text-muted mb-1">FULL NAME</label>
                            <input type="text" class="form-control py-2" placeholder="e.g. Samuel Ade">
                        </div>
                        <div class="mb-3">
                            <label class="smaller fw-bold text-muted mb-1">EMAIL ADDRESS</label>
                            <input type="email" class="form-control py-2" placeholder="samuel@work.com">
                        </div>
                        <div class="mb-4">
                            <label class="smaller fw-bold text-muted mb-1">ASSIGN ROLE</label>
                            <select class="form-select py-2">
                                <option>Order Picker (Can only see & process orders)</option>
                                <option>Inventory Manager (Can edit products & stock)</option>
                                <option>Full Manager (Everything except bank info)</option>
                            </select>
                        </div>
                        <button class="btn btn-warning w-100 text-white fw-bold py-3 shadow-sm">SEND INVITATION</button>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .smaller { font-size: 11px; }
            .bg-opacity-10 { background-color: rgba(25, 135, 84, 0.1) !important; }
            .badge { font-size: 10px; font-weight: 600; }
            .form-control:focus, .form-select:focus { border-color: #ff9900; box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.1); }
            .table > :not(caption) > * > * { padding: 1.2rem 0.5rem; }
        </style>
    </div>
    `;
}


export function DeactivateAccount() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <span class="navbar-brand fw-bold text-warning mb-0">CLOSE ACCOUNT</span>
                <a href="/vendor/settings" class="btn btn-outline-light btn-sm fw-bold px-3">CANCEL</a>
            </div>
        </nav>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    
                    <div class="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">
                        <div class="bg-danger p-4 text-center text-white">
                            <i class="bi bi-exclamation-octagon display-4 mb-2 d-block"></i>
                            <h4 class="fw-bold mb-1">Account Deactivation</h4>
                            <p class="smaller opacity-75 mb-0 text-uppercase ls-1 fw-bold">This action is permanent and cannot be undone.</p>
                        </div>
                        
                        <div class="card-body p-4 p-md-5 bg-white">
                            <h6 class="fw-bold text-dark mb-3">Before you go, please note:</h6>
                            <div class="list-group list-group-flush mb-4">
                                <div class="list-group-item px-0 py-3 border-0 d-flex gap-3">
                                    <i class="bi bi-x-circle text-danger fs-5"></i>
                                    <p class="smaller text-muted mb-0">All <strong>142 active listings</strong> will be removed from the Jumia marketplace immediately.</p>
                                </div>
                                <div class="list-group-item px-0 py-3 border-0 d-flex gap-3">
                                    <i class="bi bi-wallet2 text-danger fs-5"></i>
                                    <p class="smaller text-muted mb-0">Your final payout of <strong>₦ 450,200</strong> will be processed in the next cycle, provided there are no pending disputes.</p>
                                </div>
                                <div class="list-group-item px-0 py-3 border-0 d-flex gap-3">
                                    <i class="bi bi-clock-history text-danger fs-5"></i>
                                    <p class="smaller text-muted mb-0">You will lose access to your sales history, analytics, and customer reviews forever.</p>
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-2">WHY ARE YOU CLOSING YOUR STORE? (REQUIRED)</label>
                                <select class="form-select py-2 smaller fw-bold">
                                    <option selected disabled>Select a reason...</option>
                                    <option>Switching to another platform</option>
                                    <option>Business is closing down</option>
                                    <option>High commission fees</option>
                                    <option>Logistics/Shipping difficulties</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div class="mb-4">
                                <label class="smaller fw-bold text-muted mb-2">PLEASE TYPE YOUR SHOP NAME TO CONFIRM</label>
                                <input type="text" class="form-control py-2 fw-bold text-uppercase" placeholder="DIVINE ELECTRONICS">
                            </div>

                            <div class="form-check mb-5">
                                <input class="form-check-input border-danger" type="checkbox" id="confirmCheck">
                                <label class="form-check-label smaller text-muted ms-2" for="confirmCheck">
                                    I understand that I am responsible for all pending customer returns and warranty claims for the next 6 months.
                                </label>
                            </div>

                            <div class="d-grid gap-2">
                                <button class="btn btn-danger text-white fw-bold py-3 shadow-sm opacity-50" disabled>
                                    PERMANENTLY DEACTIVATE MY ACCOUNT
                                </button>
                                <p class="smaller text-center text-muted mt-2">
                                    Thinking of taking a break? Try <a href="/vendor/settings" class="text-info fw-bold text-decoration-none">Holiday Mode</a> instead.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="text-center px-4">
                        <p class="smaller text-muted">
                            Need help with your closing process? <a href="#" class="text-dark fw-bold">Contact Vendor Support</a>.
                        </p>
                    </div>

                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .ls-1 { letter-spacing: 1px; }
            .form-control:focus, .form-select:focus {
                border-color: #dc3545;
                box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.1);
            }
            .list-group-item { background: transparent; }
        </style>
    </div>
    `;
}


export function HolidayMode() {
    return /*html*/`
    <div class="bg-light min-vh-100 pb-5">
        <nav class="navbar navbar-dark bg-dark shadow-sm mb-4">
            <div class="container-fluid px-4">
                <span class="navbar-brand fw-bold text-warning mb-0">HOLIDAY MODE</span>
                <a href="/vendor/settings" class="btn btn-outline-light btn-sm fw-bold px-3">BACK TO SETTINGS</a>
            </div>
        </nav>

        <main class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-6">
                    
                    <div class="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
                        <div class="p-5 bg-white">
                            <div class="mb-4">
                                <div class="bg-info bg-opacity-10 d-inline-flex p-4 rounded-circle mb-3">
                                    <i class="bi bi-sun-fill text-info" style="font-size: 3rem;"></i>
                                </div>
                                <h4 class="fw-bold text-dark mb-1">Take a Break</h4>
                                <p class="smaller text-muted px-md-5">Switching to Holiday Mode hides your products from customers but keeps your account active. Use this when you cannot fulfill orders.</p>
                            </div>

                            <div class="bg-light p-4 rounded-4 border">
                                <div class="form-check form-switch d-flex justify-content-center align-items-center gap-3 p-0">
                                    <label class="fw-bold text-muted small mb-0" for="holidaySwitch">OFF</label>
                                    <input class="form-check-input custom-switch" type="checkbox" id="holidaySwitch" style="width: 60px; height: 30px;">
                                    <label class="fw-bold text-dark small mb-0" for="holidaySwitch">ON</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 p-4 mb-4 text-start bg-white">
                        <h6 class="fw-bold small text-uppercase text-info mb-3">Schedule Your Absence</h6>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">START DATE</label>
                                <input type="date" class="form-control py-2">
                            </div>
                            <div class="col-md-6">
                                <label class="smaller fw-bold text-muted mb-1">END DATE</label>
                                <input type="date" class="form-control py-2">
                            </div>
                        </div>
                        <div class="mt-3 p-3 rounded bg-info bg-opacity-10 border-start border-4 border-info">
                            <p class="smaller text-muted mb-0">
                                <i class="bi bi-info-circle-fill me-1"></i> 
                                Your products will automatically reappear on <strong>April 20, 2026</strong>.
                            </p>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm rounded-3 p-4 text-start bg-white">
                        <h6 class="fw-bold small text-uppercase text-danger mb-3">Important Reminders</h6>
                        <ul class="list-unstyled mb-0">
                            <li class="d-flex gap-3 mb-3">
                                <i class="bi bi-exclamation-triangle-fill text-warning"></i>
                                <p class="smaller text-muted mb-0"><strong>Pending Orders:</strong> You MUST fulfill all orders received before activating Holiday Mode. Unfulfilled orders will still result in penalties.</p>
                            </li>
                            <li class="d-flex gap-3 mb-3">
                                <i class="bi bi-chat-dots-fill text-primary"></i>
                                <p class="smaller text-muted mb-0"><strong>Customer Service:</strong> You are still expected to reply to customer messages and return requests while away.</p>
                            </li>
                            <li class="d-flex gap-3">
                                <i class="bi bi-lightning-fill text-success"></i>
                                <p class="smaller text-muted mb-0"><strong>Instant Off:</strong> You can turn Holiday Mode off at any time to resume selling immediately.</p>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-4">
                        <button class="btn btn-info text-white fw-bold py-3 px-5 shadow-sm rounded-pill">
                            SAVE HOLIDAY SCHEDULE
                        </button>
                    </div>

                </div>
            </div>
        </main>

        <style>
            .smaller { font-size: 11px; }
            .bg-opacity-10 { background-color: rgba(13, 202, 240, 0.08) !important; }
            .custom-switch:checked { background-color: #0dcaf0; border-color: #0dcaf0; }
            .form-control:focus {
                border-color: #0dcaf0;
                box-shadow: 0 0 0 0.2rem rgba(13, 202, 240, 0.1);
            }
            .form-check-input { cursor: pointer; }
        </style>
    </div>
    `;
}

export function HolidaySuccess() {
    return /*html*/`
    <div class="bg-light min-vh-100 d-flex align-items-center">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="card border-0 shadow-lg rounded-4 p-5 bg-white">
                        <div class="mb-4">
                            <div class="bg-info bg-opacity-10 d-inline-flex p-4 rounded-circle mb-3">
                                <i class="bi bi-calendar-check text-info" style="font-size: 3.5rem;"></i>
                            </div>
                            <h2 class="fw-bold text-dark">Enjoy Your Break!</h2>
                            <p class="text-muted">Your store is now in <strong>Holiday Mode</strong>. Your products have been hidden from the Jumia marketplace.</p>
                        </div>

                        <div class="bg-light rounded-3 p-3 mb-4 text-start">
                            <div class="d-flex justify-content-between mb-2 smaller">
                                <span class="text-muted">Status:</span>
                                <span class="badge bg-info text-white">VACATION ACTIVE</span>
                            </div>
                            <div class="d-flex justify-content-between smaller">
                                <span class="text-muted">Auto-Reactivation:</span>
                                <span class="fw-bold text-dark">April 20, 2026</span>
                            </div>
                        </div>

                        <div class="alert alert-warning border-0 smaller text-start d-flex gap-3">
                            <i class="bi bi-exclamation-triangle-fill"></i>
                            <span>Don't forget to process any <strong>pending orders</strong> received before this activation to avoid penalties!</span>
                        </div>

                        <div class="d-grid gap-2 mt-4">
                            <a href="/vendor/dashboard" class="btn btn-dark fw-bold py-3 rounded-3 shadow-sm">GO TO DASHBOARD</a>
                            <button class="btn btn-link text-info text-decoration-none smaller fw-bold">Turn Off Holiday Mode Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}


export  function DeactivationSuccess() {
    return /*html*/`
    <div class="bg-white min-vh-100 d-flex align-items-center">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="mb-4">
                        <i class="bi bi-archive text-secondary opacity-25" style="font-size: 5rem;"></i>
                    </div>
                    <h2 class="fw-bold text-dark mb-3">Account Closed</h2>
                    <p class="text-muted mb-5">Your shop, <strong>Divine Electronics</strong>, has been deactivated. You will no longer be charged any subscription fees (if applicable), and your listings are removed.</p>
                    
                    <div class="card border shadow-sm rounded-3 p-4 mb-5 text-start bg-light">
                        <h6 class="fw-bold smaller text-uppercase mb-3">Final Settlement Notice</h6>
                        <ul class="list-unstyled smaller text-muted mb-0">
                            <li class="mb-2"><i class="bi bi-check2-circle text-success me-2"></i> Final Payout: <strong>₦ 450,200</strong></li>
                            <li class="mb-2"><i class="bi bi-calendar3 text-primary me-2"></i> Date: <strong>Next Wednesday</strong></li>
                            <li><i class="bi bi-envelope text-primary me-2"></i> A summary has been sent to <strong>admin@divine.com</strong></li>
                        </ul>
                    </div>

                    <div class="d-grid">
                        <a href="/" class="btn btn-outline-dark fw-bold py-3">RETURN TO JUMIA HOMEPAGE</a>
                    </div>
                    
                    <p class="smaller text-muted mt-5">
                        Changed your mind? You have <strong>30 days</strong> to contact support to reactivate this account before the data is permanently purged.
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;
}