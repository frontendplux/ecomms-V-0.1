export default function Error404() {
    return /*html*/`
    <div class="bg-light min-vh-100 d-flex align-items-center">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-6 col-md-8">
                    <div class="mb-5 position-relative">
                        <h1 class="display-1 fw-bold text-dark opacity-10" style="font-size: 10rem;">404</h1>
                        <div class="position-absolute top-50 start-50 translate-middle w-100">
                             <i class="bi bi-search text-warning display-1 shadow-sm rounded-circle bg-white p-4"></i>
                        </div>
                    </div>

                    <h2 class="fw-bold mb-3">Oops! Page Not Found</h2>
                    <p class="text-muted mb-5 px-lg-5">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
                        Don't worry, even the best explorers get lost sometimes.
                    </p>

                    <div class="input-group mb-4 shadow-sm">
                        <input type="text" class="form-control py-3 border-0" placeholder="Search for products, categories..." aria-label="Search">
                        <button class="btn btn-warning fw-bold px-4 text-white" type="button">SEARCH</button>
                    </div>

                    <div class="d-flex flex-column flex-md-row justify-content-center gap-3">
                        <a href="/" class="btn btn-dark btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm">
                            <i class="bi bi-house-door me-2"></i> BACK TO HOME
                        </a>
                        <a href="/help" class="btn btn-outline-dark btn-lg px-5 py-3 rounded-pill fw-bold">
                            CONTACT SUPPORT
                        </a>
                    </div>

                    <div class="mt-5 pt-4 border-top">
                        <p class="smaller fw-bold text-muted text-uppercase ls-2 mb-3">Popular Categories</p>
                        <div class="d-flex flex-wrap justify-content-center gap-2">
                            <a href="/phones" class="badge rounded-pill bg-white text-dark border p-2 px-3 text-decoration-none hover-shadow">Phones</a>
                            <a href="/fashion" class="badge rounded-pill bg-white text-dark border p-2 px-3 text-decoration-none hover-shadow">Fashion</a>
                            <a href="/electronics" class="badge rounded-pill bg-white text-dark border p-2 px-3 text-decoration-none hover-shadow">Electronics</a>
                            <a href="/supermarket" class="badge rounded-pill bg-white text-dark border p-2 px-3 text-decoration-none hover-shadow">Groceries</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .ls-2 { letter-spacing: 2px; }
            .smaller { font-size: 11px; }
            .hover-shadow:hover { 
                box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
                border-color: #f68b1e !important; 
                color: #f68b1e !important; 
            }
            .btn-warning { background-color: #f68b1e; border: none; }
            .btn-warning:hover { background-color: #e67e16; }
            
            /* Fun subtle animation for the search icon */
            .bi-search {
                animation: float 3s ease-in-out infinite;
                display: inline-block;
            }

            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
                100% { transform: translateY(0px); }
            }
        </style>
    </div>
    `;
}