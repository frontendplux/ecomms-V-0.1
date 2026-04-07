import { company } from "./header.js"

export function Footer() {
    return /*html*/`
    <footer class="bg-dark text-light pt-5 mt-5">
        <div class="container pb-4 border-bottom border-secondary">
            <div class="row align-items-center g-4">
                <div class="col-md-3">
                    <h5 class="fw-bold text-warning mb-0">JUMIA <i class="bi bi-star-fill"></i></h5>
                </div>
                <div class="col-md-6">
                    <div class="input-group">
                        <span class="input-group-text bg-transparent border-secondary text-light"><i class="bi bi-envelope"></i></span>
                        <input type="email" class="form-control bg-transparent border-secondary text-light custom-placeholder" placeholder="Enter E-mail Address">
                        <button class="btn btn-outline-warning fw-bold">MALE</button>
                        <button class="btn btn-outline-warning fw-bold">FEMALE</button>
                    </div>
                </div>
                <div class="col-md-3 text-md-end">
                    <button class="btn btn-link text-light text-decoration-none p-0" onclick="window.scrollTo(0,0)">
                        BACK TO TOP <i class="bi bi-chevron-up ms-2"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="container py-5">
            <div class="row g-4">
                <div class="col-6 col-md-3">
                    <h6 class="text-uppercase fw-bold mb-3 small">Need Help?</h6>
                    <ul class="list-unstyled footer-links">
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">How to shop on Jumia?</a></li>
                        <li><a href="#">Delivery options and timelines</a></li>
                        <li><a href="#">How to return a product?</a></li>
                        <li><a href="#">Corporate and bulk purchases</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-3">
                    <h6 class="text-uppercase fw-bold mb-3 small">About Jumia</h6>
                    <ul class="list-unstyled footer-links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Jumia careers</a></li>
                        <li><a href="#">Jumia Express</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Notice</a></li>
                        <li><a href="#">Flash Sales</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-3">
                    <h6 class="text-uppercase fw-bold mb-3 small">Make Money with Jumia</h6>
                    <ul class="list-unstyled footer-links">
                        <li><a href="#">Sell on Jumia</a></li>
                        <li><a href="#">Become a Sales Consultant</a></li>
                        <li><a href="#">Become a Logistics Service Partner</a></li>
                        <li><a href="#">Join the Jumia DA Academy</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-3">
                    <h6 class="text-uppercase fw-bold mb-3 small">Jumia International</h6>
                    <div class="row g-2">
                        <div class="col-6"><ul class="list-unstyled footer-links"><li><a href="#">Algeria</a></li><li><a href="#">Egypt</a></li><li><a href="#">Kenya</a></li></ul></div>
                        <div class="col-6"><ul class="list-unstyled footer-links"><li><a href="#">Morocco</a></li><li><a href="#">Senegal</a></li><li><a href="#">Uganda</a></li></ul></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-secondary bg-opacity-25 py-4">
            <div class="container">
                <div class="row align-items-center g-3 text-center text-md-start">
                    <div class="col-md-4">
                        <h6 class="small fw-bold mb-3">PAYMENT METHODS</h6>
                        <div class="d-flex gap-3 justify-content-center justify-content-md-start fs-3 opacity-75">
                            <i class="bi bi-credit-card"></i>
                            <i class="bi bi-wallet2"></i>
                            <i class="bi bi-paypal"></i>
                            <i class="bi bi-cash-stack"></i>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <h6 class="small fw-bold mb-3">JOIN US ON</h6>
                        <div class="d-flex gap-3 justify-content-center fs-5">
                            <a href="#" class="text-light"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="text-light"><i class="bi bi-instagram"></i></a>
                            <a href="#" class="text-light"><i class="bi bi-twitter-x"></i></a>
                            <a href="#" class="text-light"><i class="bi bi-youtube"></i></a>
                        </div>
                    </div>
                    <div class="col-md-4 text-md-end">
                        <h6 class="small fw-bold mb-3">DOWNLOAD THE FREE APP</h6>
                        <div class="d-flex gap-2 justify-content-center justify-content-md-end">
                            <button class="btn btn-outline-light btn-sm"><i class="bi bi-apple"></i> App Store</button>
                            <button class="btn btn-outline-light btn-sm"><i class="bi bi-google-play"></i> Play Store</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .footer-links li { margin-bottom: 8px; }
            .footer-links a { 
                color: #adb5bd; 
                text-decoration: none; 
                font-size: 13px; 
                transition: color 0.2s; 
            }
            .footer-links a:hover { color: #ff9900; }
            .custom-placeholder::placeholder { color: #6c757d; }
        </style>
    </footer>
    `
}



function fotter(){
   return`
       <footer class="bg-white border-t border-light pt-5 pb-4 mt-5">
       <div class="container py-5">
           <div class="row gy-4">
               
               <div class="col-lg-4 col-md-6">
                   <a href="/" class="d-inline-block mb-3 text-decoration-none">
                       <span class="h3 fw-bolder text-dark tracking-tighter">
                           ${company.name}<span class="text-primary">.</span>
                       </span>
                   </a>
                   <p class="text-muted small lh-lg pe-lg-5">
                       Curating the finest selection of global brands. 
                       Experience a marketplace built on quality, 
                       integrity, and exceptional design.
                   </p>
               </div>
   
               <div class="col-lg-2 col-md-6 offset-lg-2">
                   <h6 class="text-uppercase fw-bold x-small letter-spacing-widest text-dark mb-4">
                       Platform
                   </h6>
                   <ul class="list-unstyled small">
                       <li class="mb-2"><a href="/products" class="text-muted text-decoration-none hover-dark">Marketplace</a></li>
                       <li class="mb-2"><a href="/sellers" class="text-muted text-decoration-none hover-dark">Sellers</a></li>
                       <li class="mb-2"><a href="/brands" class="text-muted text-decoration-none hover-dark">Brands</a></li>
                   </ul>
               </div>
   
               <div class="col-lg-2 col-md-6">
                   <h6 class="text-uppercase fw-bold x-small letter-spacing-widest text-dark mb-4">
                       Support
                   </h6>
                   <ul class="list-unstyled small">
                       <li class="mb-2"><a href="#" class="text-muted text-decoration-none hover-dark">Shipping</a></li>
                       <li class="mb-2"><a href="#" class="text-muted text-decoration-none hover-dark">Privacy</a></li>
                       <li class="mb-2"><a href="#" class="text-muted text-decoration-none hover-dark">Terms</a></li>
                   </ul>
               </div>
   
               <div class="col-lg-2 col-md-6">
                   <h6 class="text-uppercase fw-bold x-small letter-spacing-widest text-dark mb-4">
                       Contact
                   </h6>
                   <ul class="list-unstyled small">
                       <li class="mb-2"><a href="mailto:hello@example.com" class="text-muted text-decoration-none hover-dark">Email Us</a></li>
                       <li class="mb-2"><a href="#" class="text-muted text-decoration-none hover-dark">Help Center</a></li>
                   </ul>
               </div>
   
           </div>
   
           <div class="row pt-5 mt-5 border-top border-light align-items-center">
               <div class="col-md-6 text-center text-md-start">
                   <p class="text-muted x-small text-uppercase mb-0 tracking-widest">
                       &copy; 2026 ${company.name} &mdash; All Rights Reserved.
                   </p>
               </div>
               <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
                   <span class="badge border text-muted fw-light py-2 px-3 rounded-pill" style="font-size: 10px;">
                       GLOBAL / ENGLISH
                   </span>
               </div>
           </div>
       </div>
   </footer>
   
   <style>
       /* Adding these minor refinements to make it truly "Premium" */
       .tracking-tighter { letter-spacing: -0.05em; }
       .tracking-widest { letter-spacing: 0.2em; }
       .x-small { font-size: 0.7rem; }
       .hover-dark:hover { color: #000 !important; transition: 0.3s ease; }
   </style>`
}