import Error404 from "./zapp/404.js";
import ForgotPassword from "./zapp/auth/forget-password.js";
import Login, { facebookLogin, googleLogin, loginFunction } from "./zapp/auth/login.js";
import CreateAccount, { CreateAccountFunction } from "./zapp/auth/signup.js";
import BankTransfer from "./zapp/banktransfer.js";
import LogisticsDashboard from "./zapp/become-a-logistics-service-partner/dashboard.js";
import LogisticsRequirements from "./zapp/become-a-logistics-service-partner/help.js";
import LogisticsPartnerRegistration from "./zapp/become-a-logistics-service-partner/home.js";
import ViewAllRiders, { EditRiderProfile, RegisterRider, RiderDetails, TrackRider } from "./zapp/become-a-logistics-service-partner/rider.js";
import MyCustomers, { AddCustomer } from "./zapp/become-a-sales-consultant/customer.js";
import JForceHowItWorks from "./zapp/become-a-sales-consultant/help.js";
import JForceDashboard from "./zapp/become-a-sales-consultant/member.js";
import JForceRegistration from "./zapp/become-a-sales-consultant/registration.js";
import JForceRewards from "./zapp/become-a-sales-consultant/reward.js";
import JForceOrderHistory from "./zapp/become-a-sales-consultant/view.js";
import Cart from "./zapp/cart.js";
import Category, { CategoryPreloader } from "./zapp/category.js";
import Checkout from "./zapp/checkout.js";
import JumiaExpressInventory from "./zapp/express/home.js";
import AccountManagement from "./zapp/member/accountmanagement.js";
import Dashboard from "./zapp/member/home.js";
import NewsletterPreferences from "./zapp/member/newsletter.js";
import OrderDetails from "./zapp/member/order.js";
import PendingReviews from "./zapp/member/pendingreview.js";
import SavedItems from "./zapp/member/saveditems.js";
import VoucherCodes from "./zapp/member/vouchercodepage.js";
import OrderSuccess, { PaymentDeclined, PaymentPending } from "./zapp/paysuccess.js";
import ProductPage, { productpageFunction } from "./zapp/product.js";
import SearchResults from "./zapp/search.js";
import VendorAnalytics from "./zapp/sellonapp/analytics.js";
import CreateProduct from "./zapp/sellonapp/create-products.js";
import CreateVoucher from "./zapp/sellonapp/create-voucher.js";
import VendorDashboard from "./zapp/sellonapp/dashboard.js";
import SellOnJumia from "./zapp/sellonapp/home.js";
import SellerPromotionLanding, { AutoPartsLanding, BeautyCosmeticsLanding, ComicsLanding, ElectronicsLanding, FashionLanding, GoldStoreLanding, MechanicServiceLanding, MoviesLanding, PhonesTabletsLanding, RealEstateLanding, SoftwareGamingLanding, SoftwareGamingLight, ToysLanding } from "./zapp/sellonapp/main/home.js";
import VendorNotifications from "./zapp/sellonapp/notification.js";
import VendorOrderDashboard from "./zapp/sellonapp/order.js";
import VendorPayment from "./zapp/sellonapp/payment.js";
import VendorEmptyProducts from "./zapp/sellonapp/product.js";
import VendorProductList from "./zapp/sellonapp/products-list.js";
import VendorPromotions from "./zapp/sellonapp/promotion.js";
import VendorRegistration, { BankAccountSection, BusinessInfoSection, RegistrationSuccess } from "./zapp/sellonapp/registration.js";
import VendorSettings, { DeactivateAccount, DeactivationSuccess, HolidayMode, HolidaySuccess, NotificationPrefs, UserManagement, VendorSecurity } from "./zapp/sellonapp/settings.js";
import TermsAndConditions, { AboutUs, ContactUs, HelpCenter, RaiseTicket } from "./zapp/terms&condition.js";
// import ProductCard, { ProductDetail } from "./zapp/sellonapp/product.js";
import Preloader_Home, {Home,  HomeFunctions } from "/zapp/home.js";

// Simple SPA router
export const router = (path) => {
    const current = window.location.pathname;

    // Update browser history
    if (current !== path) {
        history.pushState({}, '', path + window.location.search);
    } else {
        history.replaceState({}, '', path + window.location.search);
    }

    // Load the page content
    loadPage(path);
};

// Initialize router on page load
window.addEventListener('DOMContentLoaded', () => {
    router(window.location.pathname);
});

// Handle back/forward browser buttons
window.onpopstate=() => {
    router(window.location.pathname); // no need to call router() here
}

// Attach click listeners to all links with data-link
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (link) {
        e.preventDefault(); // prevent full page reload
        router(link.getAttribute('href')); // call your SPA router
    }
});

document.addEventListener('submit', (e) => {
    const form = e.target;

    if (form.matches('form[data-link]')) {
        e.preventDefault();

        const formData = new FormData(form);
        const params = new URLSearchParams(formData).toString();
        const action = form.getAttribute('action');

        const newUrl = action + '?' + params;

        // Handle history properly
        if (window.location.pathname === action) {
            history.replaceState({}, '', newUrl);
        } else {
            history.pushState({}, '', newUrl);
        }

        // ✅ Always use router (not loadPage directly)
        router(action);
    }
});

// Function to load content into the #app element
async function loadPage(path) {
     const fullUrl = new URL(path, window.location.origin);

    var path = fullUrl.pathname;
    const params = Object.fromEntries(fullUrl.searchParams.entries());
    // console.log(path);   // /category
    // console.log(params); // { c: "mobile-accessories" }
    const app = document.getElementById('app');
    switch (path) {
        case '/':
        case '/home':
            app.innerHTML=Preloader_Home();
            HomeFunctions()
            app.innerHTML= await Home();
            HomeFunctions()
            break;
        // ===== auth  
        
        case '/login':
            app.innerHTML=Login();
            loginFunction()
            facebookLogin()
            googleLogin()
            break;

        case '/forget-password':
            app.innerHTML=ForgotPassword();
            loginFunction()
            break;

        case '/signup':
            app.innerHTML=CreateAccount();
            CreateAccountFunction()
             facebookLogin()
            googleLogin()
            break;

    // ==========category==================

        case '/category':
            app.innerHTML=CategoryPreloader();
            // app.innerHTML=await Category();
            break;

        case '/search':
            app.innerHTML=SearchResults();
            break;

        case '/products':
            app.innerHTML=ProductPage();
            productpageFunction()
            break;
            

        case '/cart':
            app.innerHTML=Cart();
            break;
            

        case '/checkout':
            app.innerHTML=Checkout();
            break;
            

        case '/banktransfer':
            app.innerHTML=BankTransfer();
            break;
            

        case '/pay-status':
            app.innerHTML=OrderSuccess();
            break;

        case '/terms-and-conditions':
            app.innerHTML=TermsAndConditions();
            break;

        case '/help':
            app.innerHTML=HelpCenter();
            break;

        case '/help-ticket':
            app.innerHTML=RaiseTicket();
            break;

        case '/contact-us':
            app.innerHTML=ContactUs();
            break;

        case '/about-us':
            app.innerHTML=AboutUs();
            break;

        case '/express':
           app.innerHTML=JumiaExpressInventory();
           break;

        case '/become-a-sales-consultant':
            app.innerHTML=JForceRegistration();
            break;

        case '/become-a-sales-consultant-help':
            app.innerHTML=JForceHowItWorks();
            break;

        case '/become-a-sales-consultant-dashboard':
            app.innerHTML=JForceDashboard();
            break;

        case '/become-a-sales-consultant-dashboard-reward':
            app.innerHTML=JForceRewards();
            break;

        case '/become-a-sales-consultant-dashboard-customer':
            app.innerHTML=MyCustomers();
            break;

        case '/become-a-sales-consultant-dashboard-vieworder':
            app.innerHTML=JForceOrderHistory();
            break;

        case '/become-a-sales-consultant-dashboard-add-customer':
            app.innerHTML=AddCustomer();
            break;

        case '/become-a-logistics-service-partner':
            app.innerHTML=LogisticsPartnerRegistration();
            break;

        case '/become-a-logistics-service-partner-requirement':
            app.innerHTML=LogisticsRequirements();
            break;


        case '/become-a-logistics-service-partner-member':
            app.innerHTML=LogisticsDashboard();
            break;

        case '/become-a-logistics-service-partner-rider':
            app.innerHTML=ViewAllRiders();
            break;

        case '/become-a-logistics-service-partner-rider-track':
            app.innerHTML=TrackRider();
            break;

        case '/become-a-logistics-service-partner-rider-details':
            app.innerHTML=RiderDetails();
            break;

        case '/become-a-logistics-service-partner-rider-details-edit':
            app.innerHTML=EditRiderProfile();
            break;

        case '/become-a-logistics-service-partner-rider-details':
            app.innerHTML=RiderDetails();
            break;

        

        case '/dashboard':
            app.innerHTML=Dashboard();
            break;

        case '/my-order':
            app.innerHTML=OrderDetails();
            break;

        case '/my-review':
            app.innerHTML=PendingReviews();
            break;

        case '/my-voucher':
            app.innerHTML=VoucherCodes();
            break;

        case '/my-saveditems':
            app.innerHTML=SavedItems();
            break;

        case '/my-settings':
            app.innerHTML=AccountManagement();
            break;

        case '/my-newsletter':
            app.innerHTML=NewsletterPreferences();
            break;

        case '/sell-home':
            app.innerHTML=SellOnJumia();
            break;

        case '/sell-dashboard':
            app.innerHTML=VendorDashboard();
            break;

        case '/sell-products':
            app.innerHTML=VendorEmptyProducts();
            break;

        case '/sell-create':
            app.innerHTML=CreateProduct();
            break;

        case '/sell-lists':
            app.innerHTML=VendorProductList();
            break;

        case '/sell-order':
            app.innerHTML=VendorOrderDashboard();
            break;

        case '/sell-promo':
            app.innerHTML=VendorPromotions();
            break;

        case '/sell-create-voucher':
            app.innerHTML=CreateVoucher();
            break;

        case '/sell-payments':
            app.innerHTML=VendorPayment();
            break;

        case '/sell-analytics':
            app.innerHTML=VendorAnalytics();
            break;

        case '/sell-notify':
            app.innerHTML=VendorNotifications();
            break;

        case '/sell-registration':
            app.innerHTML=VendorRegistration();
            break;

        case '/sell-registration-info':
            app.innerHTML=BusinessInfoSection();
            break;

        case '/sell-registration-bank':
            app.innerHTML=BankAccountSection();
            break;

        case '/sell-registration-success':
            app.innerHTML=RegistrationSuccess();
            break;

        case '/sell-settings':
            app.innerHTML=VendorSettings();
            break;

        case '/sell-settings-security':
            app.innerHTML=VendorSecurity();
            break;

        case '/sell-settings-notify':
            app.innerHTML=NotificationPrefs();
            break;

        case '/sell-settings-user':
            app.innerHTML=UserManagement();
            break;

        case '/sell-settings-deactivate':
            app.innerHTML=DeactivateAccount();
            break;

        case '/sell-settings-deactivate':
            app.innerHTML=DeactivateAccount();
            break;

        case '/sell-settings-holiday':
            app.innerHTML=HolidayMode();
            break;

        case '/sell-settings-holiday-deactivate':
            app.innerHTML=HolidaySuccess();
            break;

        case '/sell-settings-deactivate-success':
            app.innerHTML=DeactivationSuccess();
            break;

        case '/vendor':
            // app.innerHTML=SellerPromotionLanding();
            // app.innerHTML=ElectronicsLanding();
            // app.innerHTML=BeautyCosmeticsLanding();
            // app.innerHTML=FashionLanding();
            // app.innerHTML=PhonesTabletsLanding();
            // app.innerHTML=SoftwareGamingLanding();
            // app.innerHTML=SoftwareGamingLight();
            // app.innerHTML=MechanicServiceLanding();
            // app.innerHTML=AutoPartsLanding();
            // app.innerHTML=RealEstateLanding();
            // app.innerHTML=ToysLanding();
            // app.innerHTML=GoldStoreLanding();
            // app.innerHTML=MoviesLanding();
            app.innerHTML=ComicsLanding();
            break;
            
        default:
            app.innerHTML = Error404();
            break;
    }
}