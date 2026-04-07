import { Footer } from "./footer.js";
import { Headerx } from "./header.js";

export  function CategoryPreloader() {
    return /*html*/`
    <div class="placeholder-glow w-100">
     <div class="placeholder w-100" style="height:70px"></div>
    </div>
    <div class="bg-light min-vh-100 pb-5">
        <nav class="container p-0 pt-3" aria-label="breadcrumb">
            <ol class="d-flex gap-2 placeholder-glow">
                <li class="placeholder" style="width:100px"></li>
                <li class="placeholder" style="width:100px"></li>
                <li class="placeholder" style="width:100px"></li>
            </ol>
        </nav>

        <main class="container">
            <div class="row g-3">
                <aside class="col-lg-3 d-none placeholder-glow d-lg-block">
                    <div style="min-height:600px" class="card placeholder w-100 border-0 shadow-sm rounded-3">
                       
                    </div>
                </aside>

                <div class="col-lg-9">
                    <div class="card placeholder-wave border-0 shadow-sm mb-3">
                        <div style="height:50px" class="card-body placeholder d-flex justify-content-between align-items-center py-2">
                        </div>
                    </div>

                    <div class="row placeholder-glow row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                        ${Array.from({length: 12}).map((_, i) => `
                            <div class="col">
                                <div style="height: 200px;" class="card w-100 placeholder border-0 shadow-sm product-hover transition">
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <nav class="mt-5 placeholder-glow d-flex justify-content-center">
                        <ul class="pagination mx-auto col-3 justify-content-center" style="height:30px">
                            <span class="placeholder mx-1"  style="width:50px; height:50px"></span>
                            <span class="placeholder mx-1"  style="width:50px; height:50px"></span>
                            <span class="placeholder mx-1"  style="width:50px; height:50px"></span>
                            <span class="placeholder mx-1"  style="width:50px; height:50px"></span>
                        </ul>
                    </nav>
                </div>
            </div>
        </main>

        <style>
            .text-truncate-2 {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .product-hover:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
            }
            .transition { transition: all 0.3s ease; }
            .fs-7 { font-size: 0.85rem; }
            .custom-range::-webkit-slider-thumb { background: #ff9900; }
            .opacity-hover:hover { opacity: 0.9; }
            .page-link:focus { box-shadow: none; }
        </style>
    </div>
     <footer class="placeholder-wave w-100">
        <div class="placeholder w-100" style="height:300px"></div>
     </footer>
    `;
}

export default function Category() {
    return /*html*/`
    ${Headerx()}
    <div class="bg-light min-vh-100 pb-5">
        <nav class="container pt-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-2" style="font-size: 12px;">
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-dark">Computing</a></li>
                <li class="breadcrumb-item active text-muted" aria-current="page">Laptops</li>
            </ol>
        </nav>

        <main class="container">
            <div class="row g-3">
                <aside class="col-lg-3 d-none d-lg-block">
                    <div class="card border-0 shadow-sm rounded-3">
                        <div class="card-header bg-white fw-bold border-bottom py-3">CATEGORY</div>
                        <div class="list-group list-group-flush small">
                            <a href="#" class="list-group-item list-group-item-action border-0 py-1">Laptops</a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-1 ps-4 text-muted">Traditional Laptops</a>
                            <a href="#" class="list-group-item list-group-item-action border-0 py-1 ps-4 text-muted">Gaming Laptops</a>
                        </div>

                        <div class="card-header bg-white fw-bold border-bottom py-3 mt-2">BRAND</div>
                        <div class="p-3 overflow-auto" style="max-height: 200px;">
                            ${['HP', 'Apple', 'Dell', 'Lenovo', 'ASUS', 'Acer'].map(brand => `
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" id="${brand}">
                                    <label class="form-check-label small" for="${brand}">${brand}</label>
                                </div>
                            `).join('')}
                        </div>

                        <div class="card-header bg-white fw-bold border-bottom py-3 mt-2">PRICE (₦)</div>
                        <div class="p-3">
                            <input type="range" class="form-range custom-range" min="0" max="1000000" id="priceRange">
                            <div class="d-flex justify-content-between small fw-bold">
                                <span>₦ 0</span>
                                <span>₦ 1M+</span>
                            </div>
                            <button class="btn btn-warning btn-sm w-100 mt-3 fw-bold text-white">APPLY</button>
                        </div>
                    </div>
                </aside>

                <div class="col-lg-9">
                    <div class="card border-0 shadow-sm mb-3">
                        <div class="card-body d-flex justify-content-between align-items-center py-2">
                            <h6 class="mb-0 fw-bold">Laptops <span class="text-muted fw-normal fs-7">(1,420 products found)</span></h6>
                            <div class="d-flex align-items-center gap-2">
                                <label class="small text-nowrap d-none d-md-block">Sort by:</label>
                                <select class="form-select form-select-sm border-0 bg-light" style="width: 150px;">
                                    <option>Popularity</option>
                                    <option>Newest Arrivals</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                        ${Array.from({length: 12}).map((_, i) => `
                            <div class="col">
                                <div class="card h-100 border-0 shadow-sm product-hover transition">
                                    <div class="position-relative p-2">
                                        <img src="https://via.placeholder.com/200x200/f8f9fa/333?text=Laptop+${i+1}" class="card-img-top rounded" alt="product">
                                        <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Official Store</span>
                                    </div>
                                    <div class="card-body p-2 d-flex flex-column">
                                        <p class="card-text mb-1 text-truncate-2 small">HP Pavilion 15 - Intel Core i5 - 16GB RAM - 512GB SSD</p>
                                        <h6 class="fw-bold mb-0">₦ 450,000</h6>
                                        <div class="d-flex align-items-center gap-2 mb-2">
                                            <small class="text-muted text-decoration-line-through">₦ 520,000</small>
                                            <span class="badge bg-danger bg-opacity-10 text-danger" style="font-size: 10px;">-13%</span>
                                        </div>
                                        <div class="mt-auto">
                                            <div class="small text-warning mb-2">
                                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>
                                                <span class="text-muted ms-1">(45)</span>
                                            </div>
                                            <button class="btn btn-warning w-100 btn-sm fw-bold text-white shadow-sm opacity-hover">ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <nav class="mt-5">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled"><a class="page-link border-0" href="#"><i class="bi bi-chevron-left"></i></a></li>
                            <li class="page-item active"><a class="page-link border-0 bg-warning text-white" href="#">1</a></li>
                            <li class="page-item"><a class="page-link border-0 text-dark" href="#">2</a></li>
                            <li class="page-item"><a class="page-link border-0 text-dark" href="#">3</a></li>
                            <li class="page-item"><a class="page-link border-0 text-dark" href="#"><i class="bi bi-chevron-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </main>

        <style>
            .text-truncate-2 {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .product-hover:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
            }
            .transition { transition: all 0.3s ease; }
            .fs-7 { font-size: 0.85rem; }
            .custom-range::-webkit-slider-thumb { background: #ff9900; }
            .opacity-hover:hover { opacity: 0.9; }
            .page-link:focus { box-shadow: none; }
        </style>
    </div>
    ${Footer()}
    `;
}