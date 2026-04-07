import { Footer } from "./footer.js";
import { company, Headerx } from "./header.js";


export function HomeFunctions() {
    // MAIN SLIDER
        new Swiper('.mainSlider', {
            loop: true,
            autoplay: { delay: 3000 },
            pagination: {
                el: '.mainSlider .swiper-pagination',
                clickable: true
            }
        });

    // CATEGORY SLIDER
        new Swiper(".myCategorySwiper", {
            slidesPerView: 2.5,
            spaceBetween: 15,
            freeMode: true,
            grabCursor: true,
            pagination: {
                el: ".myCategorySwiper .swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                }
            }
        });



        new Swiper('.flashSwiper', {
            slidesPerView: 1.8,
            spaceBetween: 5,
            grabCursor: true,

            navigation: {
                nextEl: '.flashSwiper .swiper-button-next',
                prevEl: '.flashSwiper .swiper-button-prev',
            },

            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                }
            }
        });
}


export default function Preloader_Home() {
    return /*html*/`
    <div class="bg-light placeholder-wave">
        <div class="placeholder w-100 sticky-top" style="height: 70px;"></div>
        <main class="container mt-3">
            <div class="row g-3 ">
                <aside class="col-lg-3 d-none d-lg-block" style="height:400px">
                    <div class="h-100 placeholder w-100"></div>
                </aside>
                <div class="col-lg-7 col-md-8" style="height:${window.innerWidth >= 900 ? 400 : 200}px">
                   <div class="h-100 placeholder w-100"></div>
                </div>
                <div class="col-lg-2 col-md-4 d-none d-md-flex flex-column gap-3" style="height:400px">
                    <div class="placeholder w-100" style="height: 50%"></div>
                    <div class="placeholder w-100" style="height:50%"></div>
                </div>
            </div>

            <section class="my-4">
                <!-- CATEGORY SLIDER -->
                <div class="bg-white p-3 rounded-bottom shadow-sm overflow-hidden">
                    <div class="swiper myCategorySwiper">
                        <div class="swiper-wrapper">
                            ${[1,2,3,4,5,6,7,8].map(i => `
                                <div class="swiper-slide">
                                    <div class="card border-0 bg-light text-center p-2" style="height:130px;">
                                        
                                        <!-- IMAGE PLACEHOLDER -->
                                        <div class="placeholder-glow mb-2">
                                            <div class="placeholder w-100" style="height:70px;"></div>
                                        </div>
                                        <!-- TEXT PLACEHOLDER -->
                                        <div class="placeholder-glow">
                                            <small class="placeholder col-8"></small>
                                        </div>

                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        <!-- ✅ REMOVE position-relative -->
                        <div class="swiper-pagination mt-2"></div>
                    </div>

                </div>
            </section>

             <section class="my-4">
                <!-- TOP BANNER / HEADER -->
                <div class="placeholder  p-4 w-100 rounded-top shadow-sm" style="min-height: 20px;"></div>
                <!-- CATEGORY SLIDER -->
                <div class="bg-white p-3 rounded-bottom shadow-sm overflow-hidden">
                    <div class="swiper myCategorySwiper">
                        <div class="swiper-wrapper">
                            ${[1,2,3,4,5,6,7,8].map(i => `
                                <div class="swiper-slide">
                                    <div class="card border-0 bg-light p-2" style="height:130px;">
                                        
                                        <!-- IMAGE PLACEHOLDER -->
                                        <div class="placeholder-glow mb-2">
                                            <div class="placeholder w-100" style="height:70px;"></div>
                                        </div>

                                        <!-- TEXT PLACEHOLDER -->
                                        <div class="placeholder-glow">
                                            <small class="placeholder col-12"></small>
                                        </div>
                                        <div class="placeholder-glow">
                                            <small class="placeholder col-8"></small>
                                        </div>

                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
    <footer class="placeholder-wave">
      <div class="placeholder w-100" style="height:300px"></div>
    </footer>
    `;
}

export async function Home() {
        const req= await fetch(company.server_url, {
         method:"post",
         headers: {
                'Authorization': sessionStorage.getItem('token') ?? '',
                'Content-Type': 'application/json'
            },
         body: JSON.stringify({action:"home", user:localStorage.getItem('user_id')})
        }).then(res => res.text());
        alert(req);
        const res=JSON.parse(req);
  console.log(res);
    return /*html*/`
    <div class="bg-light">
        ${Headerx({isLogIn:res.user.success, user:res.user.data, cat: res.category})}
        <main class="container mt-3">
            <div class="row g-3 d-none">
                <aside class="col-lg-3 d-none d-lg-block">
                    <div class="card border-0 shadow-sm rounded-3 py-2 h-100">
                        <ul class="list-group list-group-flush px-2">
                         ${res.category.map(cat => {
                                return cat.parent_id == null ? '' : `
                                    <a data-link href="/category?c=${cat.slug}"
                                    class="list-group-item border-0 py-2 d-flex align-items-center hover-item">
                                        <i class="bi ${cat.icon} me-3 text-secondary"></i> 
                                        ${cat.name}
                                    </a>
                                `;
                            }).join('')}
                        </ul>
                    </div>
                </aside>

                <div class="col-lg-7 col-md-8">
                    <div class="swiper mainSlider rounded-3 shadow-sm overflow-hidden" style="height: ${window.innerWidth >= 900 ? 380 : 200}px;">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide bg-primary d-flex align-items-center justify-content-center text-white">
                                <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1000&q=80" class="w-100 h-100 object-fit-cover" alt="Sale">
                            </div>
                            <div class="swiper-slide bg-warning">
                                <img src="https://images.unsplash.com/photo-1544117518-3331b268f7b7?auto=format&fit=crop&w=1000&q=80" class="w-100 h-100 object-fit-cover" alt="Promo">
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>

                <div class="col-lg-2 col-md-4 d-none d-md-flex flex-column gap-3">
                    <div class="card border-0 shadow-sm flex-grow-1 overflow-hidden rounded-3 promo-card">
                        <img src="https://via.placeholder.com/200x180/E5E5E5/666666?text=Sell+on+Jumia" class="img-fluid h-100 w-100" />
                    </div>
                    <div class="card border-0 shadow-sm flex-grow-1 overflow-hidden rounded-3 promo-card">
                        <img src="https://via.placeholder.com/200x180/FEE2E2/DC2626?text=Free+Delivery" class="img-fluid h-100 w-100" />
                    </div>
                </div>
            </div>

        <section class="mt-4">

    <!-- SWIPER -->
    <div class="bg-white p-3 rounded-bottom shadow-sm position-relative">
        <div class="swiper flashSwiper">
            <div class="swiper-wrapper">

                ${res.category.map(cat =>{
                     return cat.parent_id == null ?`
                    <a data-link href="/category?c=${cat.slug}" class="swiper-slide text-decoration-none">
                        <div class="card h-100 border-0 product-card">
                            <div class="position-relative">
                                <img src="${cat.image}" class="card-img-top rounded" alt="Product">
                            </div>
                            <div class="card-body text-center p-2">
                               ${cat.name}
                            </div>
                        </div>
                    </a>
                `: ''}).join('')}

            </div>

            <!-- NAVIGATION -->
            <div class="swiper-button-next"><i class="bi bi-chevron-right"></i></div>
            <div class="swiper-button-prev"><i class="bi bi-chevron-left"></i></div>
        </div>

    </div>
</section>



   ${res.products.map(promo => /*html*/`
<section class="mt-4">

    <!-- HEADER -->
    <div class="bg-danger text-white p-3 rounded-top d-flex justify-content-between align-items-center shadow-sm">
        <div class="d-flex flex-wrap justify-content-between col-7">
            <h5 class="mb-0 fw-bold fs-6 d-flex align-items-center">
                <i class="bi bi-dot fs-4 me-2"></i>${promo.promo.title}
            </h5>

            <div class="d-flex fw-bold fs-6 align-items-center gap-3">
                <span>10</span>:
                <span>00</span>:
                <span>45</span>
            </div>
        </div>

        <div class="d-flex align-items-center gap-3">
            <a data-link href="/promotion?p=${promo.promo.id}" 
               class="text-white d-flex text-decoration-none fw-bold small">
                SEE ALL <i class="bi bi-chevron-right small"></i>
            </a>
        </div>
    </div>

    <!-- SWIPER -->
    <div class="bg-white p-3 rounded-bottom shadow-sm position-relative">

        <div class="swiper flashSwiper">
            <div class="swiper-wrapper">

                ${promo.products.map(product => `
                    <a data-link href="/products?p=${product.slug}" class="swiper-slide text-decoration-none">
                        <div class="card h-100 border-0 product-card">

                            <div class="position-relative">
                                <img src="${product.image}" style="height:150px";
                                     class="card-img-top rounded" alt="${product.name}">
                                <span class="badge bg-danger position-absolute top-0 end-0 m-1">
                                 -${promo.promo.discount_type === 'percentage' 
                                    ? parseInt(parseFloat(promo.promo.discount_value)) + '%' 
                                    : parseFloat(promo.promo.discount_value).toFixed(2) + '₦'}
                                </span>
                            </div>

                            <div class="card-body p-2">
                                <p class="card-text mb-1 text-truncate small">
                                    ${product.name}
                                </p>

                                <h6 class="fw-bold mb-0">₦ ${product.final_price}</h6>

                                <small class="text-muted text-decoration-line-through">
                                    ₦ ${product.price}
                                </small>

                                <div class="mt-2 small text-warning">
                                    ⭐ ${parseFloat(product.avg_rating).toFixed(1)}
                                    <span class="text-muted ms-1">
                                        (${product.total_reviews})
                                    </span>
                                </div>
                            </div>

                        </div>
                    </a>
                `).join('')}

            </div>

            <!-- NAVIGATION -->
             <div class="swiper-button-next"><i class="bi bi-chevron-right"></i></div>
            <div class="swiper-button-prev"><i class="bi bi-chevron-left"></i></div>
        </div>

    </div>
</section>
`).join('')}
        </main>

        <style>
            .hover-item:hover { background-color: #f8f9fa; color: #ff9900; cursor: pointer; }
            .product-card:hover { transform: scale(1.02); transition: transform 0.2s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
            .cursor-pointer { cursor: pointer; }
            .promo-card { transition: transform 0.3s; cursor: pointer; }
            .promo-card:hover { transform: translateY(-3px); }
        </style>
    </div>

<footer class="mt-5 border-top border-light bg-white py-5">
    <div class="container">
        <div class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
            
            <div class="d-flex align-items-center gap-3">
                <span class="h5 fw-bold tracking-tight text-dark mb-0">
                    ${company.name}<span class="text-primary">.</span>
                </span>
                
                <span class="d-none d-md-block bg-light" style="width: 1px; height: 1.5rem;"></span>
                
                <p class="text-muted small mb-0">
                    &copy; 2026 All rights reserved.
                </p>
            </div>

            <nav class="d-flex flex-wrap justify-content-center gap-4">
                <a href="/shop" class="text-secondary text-decoration-none small fw-medium hover-dark">Shop</a>
                <a href="/sell" class="text-secondary text-decoration-none small fw-medium hover-dark">Sell</a>
                <a href="/terms" class="text-secondary text-decoration-none small fw-medium hover-dark">Terms</a>
                <a href="/privacy" class="text-secondary text-decoration-none small fw-medium hover-dark">Privacy</a>
            </nav>

        </div>
    </div>
</footer>

<style>
    /* Premium touch: subtle letter spacing and hover state */
    .tracking-tight { letter-spacing: -0.02em; }
    .hover-dark:hover { 
        color: #212529 !important; 
        transition: color 0.2s ease-in-out; 
    }
</style>
    `;
}