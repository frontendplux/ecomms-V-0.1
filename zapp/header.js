export const company={
    name: "Air9",
    server_url:"/api/main/index.php"
}


export const toggleNav = (color = '#1877f2', title = 'Notification', message = 'New update available') => {
    // 1. Create/Ensure a container for stacking exists
    let stackContainer = document.getElementById('mflow-toast-stack');
    if (!stackContainer) {
        stackContainer = document.createElement('div');
        stackContainer.id = 'mflow-toast-stack';
        // Fixed at top, centered, and Z-indexed to the moon
        stackContainer.className = "position-fixed top-0 start-0 end-0 p-4 d-flex flex-column align-items-center justify-content-center gap-3";
        stackContainer.style.zIndex = "9999";
        stackContainer.style.pointerEvents = "none";
        document.body.appendChild(stackContainer);
    }

    // 2. Create the unique Toast element
    const toast = document.createElement('div');
    toast.className = "w-100 mw-sm translate-middle-y opacity-0";
    toast.style.transition = "all 0.5s cubic-bezier(0.23,1,0.32,1)";
    toast.style.pointerEvents = "auto";
    
    // Internal HTML with monieFlow Glassmorphism
    toast.innerHTML = `
        <div class="bg-white col-12 col-lg-5 bg-opacity-90 border border-white shadow-lg rounded-4 p-4 d-flex align-items-center gap-4 border-start mx-auto" style="backdrop-filter: blur(20px); border-left: 4px solid ${color};">
            <div class="d-flex align-items-center justify-content-center flex-shrink-0 rounded-3 shadow-sm" style="width: 40px; height: 40px; background-color: ${color}20;">
                <div class="rounded-circle" style="width: 12px; height: 12px; background-color: ${color}; animation: pulse 1.5s infinite;"></div>
            </div>
            <div class="flex-grow-1">
                <h6 class="text-uppercase fw-bold text-muted mb-1" style="font-size: 11px; letter-spacing: 1px;">${title}</h6>
                <p class="fw-light text-dark mb-0 text-wrap" style="font-size: 14px;">${message}</p>

            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="btn btn-link text-muted p-0" style="transition: color 0.3s;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
    `;

    // 3. Add to stack
    stackContainer.prepend(toast);

    // 4. Animate "Drop"
    setTimeout(() => {
        toast.classList.remove('translate-middle-y', 'opacity-0');
        toast.style.transform = "translateY(0)";
        toast.style.opacity = "1";
    }, 10);

    // 5. Automatic "Return" (Remove) after 4 seconds
    setTimeout(() => {
        toast.style.transform = "translateY(-10px)";
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 4000);
};


export function Headerx(data = {isLogIn:false,}){
    return /*html*/`
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
            <div class="container">
                <a class="navbar-brand fw-bold text-warning fs-3" href="#">${company.name} <i class="bi bi-star-fill"></i></a>
                <form data-link action="/search" method="get" id="header-xs-search" class="d-none d-flex position-absolute top-0 py-3 p-2 bg-white start-0 end-0 d-md-none" style="z-index:100">
                    <input type="search" name="s" placeholder="search ${company.name}" class="form-control fw-medium text-dark ps-5">
                    <i class="position-absolute bi bi-search top-0 start-0 m-3 mt-4" ></i>
                    <i onclick="document.getElementById('header-xs-search').classList.toggle('d-none')" class="bi bi-x-lg fw-bold p-2"></i>
                </form>
                <form data-link action="/search" method="get"  class="flex-grow-1 mx-lg-5 px-lg-5 d-none d-md-flex">
                    <div class="input-group">
                        <span class="input-group-text bg-white border-end-0"><i class="bi bi-search text-muted"></i></span>
                        <input type="search" name="s" class="form-control border-start-0 py-2" placeholder="Search ${company.name} products, brands and categories">
                        <button class="btn btn-warning px-4 fw-bold text-white shadow-sm">SEARCH</button>
                    </div>
                </form>

                ${ !data.isLogIn ? /*html*/`<div id="header-live-signal-change" class="d-flex align-items-center gap-4 ms-3">
                    <div onclick="document.getElementById('header-xs-search').classList.toggle('d-none')" class="dropdown d-md-none text-dark d-flex align-items-center cursor-pointer">
                        <i class="bi bi-search fs-4 me-1"></i>
                        <span class="d-none d-md-inline fw-semibold">search</span>
                    </div>
                    <a data-link href="/login" class="dropdown text-decoration-none text-dark d-flex align-items-center cursor-pointer">
                        <i class="bi bi-person fs-4 me-1"></i>
                        <span class="d-none d-md-inline fw-semibold">Account</span>
                    </a>
                    <a data-link href="/help" class="dropdown text-decoration-none text-dark d-flex align-items-center cursor-pointer">
                        <i class="bi bi-question-circle fs-4 me-1"></i>
                        <span class="d-none d-md-inline fw-semibold">Help</span>
                    </a>
                    <a data-link href="/cart" class="text-dark text-decoration-none d-flex align-items-center position-relative cursor-pointer">
                        <i class="bi bi-cart3 fs-4 me-1"></i>
                        <span class="d-none d-md-inline fw-semibold">Cart</span>
                    </a>
                </div>` : 
                 /*html*/`<div id="header-live-signal-change" class="d-flex align-items-center gap-4 ms-3">
                    <div onclick="document.getElementById('header-xs-search').classList.toggle('d-none')" class="dropdown d-md-none text-dark d-flex align-items-center cursor-pointer">
                        <i class="bi bi-search fs-4 me-1"></i>
                        <span class="d-none d-md-inline fw-semibold">search</span>
                    </div>
                    <a data-link href="/dashboard" class="dropdown text-decoration-none text-dark d-flex align-items-center cursor-pointer">
                        <i class="bi bi-person fs-4 me-1"></i>
                        <span class="d-none d-md-inline fw-semibold">Hi, ${data.user.username == '' ? data.user.firstname : data.user.username  }</span>
                    </a>
                    <a data-link href="/help" class="dropdown text-decoration-none text-dark d-flex align-items-center cursor-pointer">
                        <i class="bi bi-question-circle fs-4 me-1"></i>
                        <span class="d-none d-md-inline fw-semibold">Help</span>
                    </a>
                    <div class="text-dark d-flex align-items-center position-relative cursor-pointer">
                        <i class="bi bi-cart3 fs-4 me-1"></i>
                        <span class="badge bg-warning text-dark position-absolute top-0 start-50 translate-middle-y rounded-pill small">3</span>
                        <span class="d-none d-md-inline fw-semibold">Cart</span>
                    </div>
                </div>`}

                <!--<div id="header-live-signal-change" class="d-flex align-items-center gap-4 ms-3">
                    <div onclick="document.getElementById('header-xs-search').classList.toggle('d-none')" class="dropdown d-md-none text-dark d-flex align-items-center cursor-pointer">
                        <i class="bi bi-search fs-4 me-1"></i>
                        <span class="d-none d-md-inline fw-semibold">search</span>
                    </div>
                    <div class="dropdown text-dark d-flex align-items-center cursor-pointer">
                        <i class="bi bi-person fs-4 me-1 d-flex"> <i class="spinner-border spinner-border-sm mt-1"></i></i>
                    </div>
                    <div class="dropdown text-dark d-flex align-items-center cursor-pointer">
                        <i class="bi bi-question-circle fs-4 me-1"></i>
                        <span class="d-none d-md-inline fw-semibold">Help</span>
                    </div>
                    <div class="text-dark d-flex align-items-center position-relative cursor-pointer">
                        <i class="bi bi-cart3 fs-4 me-1 d-flex"> <i class="spinner-border spinner-border-sm mt-1"></i></i>
                    </div>
                </div>-->
            </div>
        </nav>`
}
