export default function VendorProductList() {
    return /*html*/`
    <div class="bg-light min-vh-100">
        <nav class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center">
                    <span class="navbar-brand fw-bold text-warning mb-0">MANAGE PRODUCTS</span>
                </div>
                <div class="d-flex gap-2">
                    <a href="/vendor/products/create" class="btn btn-warning btn-sm fw-bold px-3 text-white">
                        <i class="bi bi-plus-lg me-1"></i> ADD NEW PRODUCT
                    </a>
                </div>
            </div>
        </nav>

        <main class="container px-4 py-4">
            <div class="card border-0 shadow-sm mb-4">
                <div class="card-body py-3">
                    <div class="row g-3 align-items-center">
                        <div class="col-md-4">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bg-white border-end-0"><i class="bi bi-search text-muted"></i></span>
                                <input type="text" class="form-control border-start-0 ps-0" placeholder="Search by name or SKU...">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <select class="form-select form-select-sm">
                                <option>All Categories</option>
                                <option>Phones</option>
                                <option>Electronics</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <select class="form-select form-select-sm">
                                <option>All Status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Out of Stock</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card border-0 shadow-sm rounded-3 overflow-hidden">
                <div class="table-responsive">
                    <table class="table align-middle mb-0 small">
                        <thead class="table-light text-muted fw-bold">
                            <tr>
                                <th class="ps-4 py-3" style="width: 400px;">PRODUCT DETAILS</th>
                                <th>SKU</th>
                                <th>PRICE</th>
                                <th>STOCK</th>
                                <th>STATUS</th>
                                <th class="text-end pe-4">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="product-row">
                                <td class="ps-4">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="https://via.placeholder.com/50" class="rounded border" alt="img">
                                        <div>
                                            <h6 class="mb-0 fw-bold smaller text-dark">iPhone 15 Pro Max - 256GB</h6>
                                            <p class="mb-0 text-muted smaller">Phones & Tablets</p>
                                        </div>
                                    </div>
                                </td>
                                <td><code class="text-dark smaller">IP15-PM-256</code></td>
                                <td class="fw-bold">₦ 1,850,000</td>
                                <td>
                                    <span class="badge bg-success bg-opacity-10 text-success px-2 py-1">45 Units</span>
                                </td>
                                <td>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input custom-switch" type="checkbox" checked>
                                    </div>
                                </td>
                                <td class="text-end pe-4">
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-secondary border-0" title="Edit"><i class="bi bi-pencil-square"></i></button>
                                        <button class="btn btn-outline-secondary border-0" title="View"><i class="bi bi-eye"></i></button>
                                        <button class="btn btn-outline-danger border-0" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="bi bi-trash3"></i></button>
                                    </div>
                                </td>
                            </tr>

                            <tr class="product-row">
                                <td class="ps-4">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="https://via.placeholder.com/50" class="rounded border" alt="img">
                                        <div>
                                            <h6 class="mb-0 fw-bold smaller text-dark">AirPods Pro (2nd Gen)</h6>
                                            <p class="mb-0 text-muted smaller">Audio</p>
                                        </div>
                                    </div>
                                </td>
                                <td><code class="text-dark smaller">AIRPOD-P2</code></td>
                                <td class="fw-bold">₦ 490,000</td>
                                <td>
                                    <span class="badge bg-danger bg-opacity-10 text-danger px-2 py-1">2 Units Left</span>
                                </td>
                                <td>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input custom-switch" type="checkbox" checked>
                                    </div>
                                </td>
                                <td class="text-end pe-4">
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-secondary border-0"><i class="bi bi-pencil-square"></i></button>
                                        <button class="btn btn-outline-secondary border-0"><i class="bi bi-eye"></i></button>
                                        <button class="btn btn-outline-danger border-0"><i class="bi bi-trash3"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="card-footer bg-white border-top py-3 d-flex justify-content-between align-items-center">
                    <span class="smaller text-muted">Showing 1-10 of 45 products</span>
                    <nav>
                        <ul class="pagination pagination-sm mb-0">
                            <li class="page-item disabled"><a class="page-link" href="#">Prev</a></li>
                            <li class="page-item active"><a class="page-link bg-warning border-warning" href="#">1</a></li>
                            <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
                            <li class="page-item"><a class="page-link text-dark" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </main>

        <div class="modal fade" id="deleteModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content border-0 shadow">
                    <div class="modal-body text-center p-4">
                        <i class="bi bi-exclamation-triangle text-danger display-4 mb-3 d-block"></i>
                        <h6 class="fw-bold">Delete this product?</h6>
                        <p class="smaller text-muted">This action cannot be undone. The product will be removed from the Jumia marketplace immediately.</p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-danger btn-sm fw-bold">YES, DELETE</button>
                            <button class="btn btn-light btn-sm fw-bold border" data-bs-dismiss="modal">CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .smaller { font-size: 11px; }
            .product-row:hover { background-color: #fff9f0; }
            .custom-switch:checked { background-color: #ff9900; border-color: #ff9900; }
            .btn-outline-secondary:hover { background-color: #eee; color: #000; }
            .form-control:focus, .form-select:focus {
                border-color: #ff9900;
                box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.1);
            }
            code { background: #f0f0f0; padding: 2px 5px; border-radius: 4px; font-size: 10px; }
        </style>
    </div>
    `;
}