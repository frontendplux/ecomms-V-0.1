CREATE TABLE IF NOT EXISTS users (
    id bigint AUTO_INCREMENT PRIMARY KEY,
    uid VARCHAR(300) NOT NULL UNIQUE,

    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,

    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(300) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,

    password VARCHAR(300) NOT NULL,
    others JSON DEFAULT '{}',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_email (email),
    INDEX idx_username (username),
    INDEX idx_phone (phone)
);

CREATE TABLE IF NOT EXISTS sellers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id bigint NOT NULL,

    store_name VARCHAR(300) NOT NULL,
    store_slug VARCHAR(150) NOT NULL UNIQUE,

    keywords TEXT NOT NULL,
    description TEXT NOT NULL,

    logo VARCHAR(255) NOT NULL,
    banner VARCHAR(255) NOT NULL,

    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,

    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,

    is_verified BOOLEAN DEFAULT FALSE,
    is_admin BOOLEAN DEFAULT FALSE,
    status ENUM('active', 'pending', 'suspended') DEFAULT 'pending',

    total_sales DECIMAL(12,2) DEFAULT 0.00,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE (user_id),

    INDEX idx_user_id (user_id),

    CONSTRAINT fk_seller_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS seller_bank_accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seller_id INT NOT NULL,

    bank_name VARCHAR(150) NOT NULL,
    bank_code VARCHAR(20) not null,

    account_name VARCHAR(150) NOT NULL,
    account_number VARCHAR(20) NOT NULL,

    currency VARCHAR(10) DEFAULT 'NGN',
    is_primary BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE (account_number),

    INDEX idx_seller_id (seller_id),

    CONSTRAINT fk_bank_seller
        FOREIGN KEY (seller_id)
        REFERENCES sellers(id)
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,

    parent_id INT DEFAULT NULL, -- for subcategories

    name VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    description TEXT,

    icon VARCHAR(255),
    image VARCHAR(255),

    status ENUM('active', 'inactive') DEFAULT 'active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_parent_id (parent_id),
    INDEX idx_name (name),

    CONSTRAINT fk_category_parent
        FOREIGN KEY (parent_id)
        REFERENCES categories(id)
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seller_id INT NOT NULL,
    parent_id INT DEFAULT NULL,

    product_uid VARCHAR(255) NOT NULL UNIQUE,

    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,

    price DECIMAL(12,2) NOT NULL,
    discount_price DECIMAL(12,2),

    sku VARCHAR(100),
    stock INT DEFAULT 0,

    category_id INT,

    status ENUM('active', 'draft', 'out_of_stock') DEFAULT 'draft',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_seller_id (seller_id),
    INDEX idx_parent_id (parent_id),
    INDEX idx_category_id (category_id),

    CONSTRAINT fk_product_seller
        FOREIGN KEY (seller_id)
        REFERENCES sellers(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_product_parent
        FOREIGN KEY (parent_id)
        REFERENCES products(id)
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS product_images (
    id INT AUTO_INCREMENT PRIMARY KEY,

    product_id INT NOT NULL,

    image_url VARCHAR(255) NOT NULL,
    alt_text VARCHAR(255),

    is_primary BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_product_id (product_id),

    CONSTRAINT fk_product_image
        FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS sizes (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(50) NOT NULL, -- e.g. S, M, L, XL, 42, 43
    code VARCHAR(50),          -- optional (e.g. EU42, US10)

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE IF NOT EXISTS product_sizes (
    id INT AUTO_INCREMENT PRIMARY KEY,

    product_id INT NOT NULL,
    size_id INT NOT NULL,

    stock INT DEFAULT 0,
    price DECIMAL(12,2), -- optional override price
    sku VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_product_id (product_id),
    INDEX idx_size_id (size_id),

    CONSTRAINT fk_ps_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_ps_size
        FOREIGN KEY (size_id)
        REFERENCES sizes(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id bigint NOT NULL,
    product_id INT NOT NULL,
    order_id INT NOT NULL,

    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_review_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_review_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS colors (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(50) NOT NULL,   -- Red, Blue
    hex_code VARCHAR(10),        -- #FF0000

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE IF NOT EXISTS product_colors (
    id INT AUTO_INCREMENT PRIMARY KEY,

    product_id INT NOT NULL,
    color_id INT NOT NULL,

    stock INT DEFAULT 0,
    price DECIMAL(12,2),
    sku VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_pc_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_pc_color
        FOREIGN KEY (color_id)
        REFERENCES colors(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS carts (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id bigint NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_cart_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,

    cart_id INT NOT NULL,
    product_id INT NOT NULL,

    variation_id INT DEFAULT NULL, -- size/color combo

    quantity INT NOT NULL DEFAULT 1,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_ci_cart
        FOREIGN KEY (cart_id)
        REFERENCES carts(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_ci_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id bigint NOT NULL,
    order_uid VARCHAR(255) NOT NULL UNIQUE,

    total_amount DECIMAL(12,2) NOT NULL,
    status ENUM('pending','paid','shipped','delivered','cancelled') DEFAULT 'pending',

    payment_status ENUM('pending','paid','failed') DEFAULT 'pending',

    payment_method VARCHAR(50),

    address TEXT NOT NULL,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_order_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,

    order_id INT NOT NULL,
    product_id INT NOT NULL,

    variation_id INT DEFAULT NULL,

    price DECIMAL(12,2) NOT NULL,
    quantity INT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_oi_order
        FOREIGN KEY (order_id)
        REFERENCES orders(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_oi_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS shipments (
    id INT AUTO_INCREMENT PRIMARY KEY,

    order_id INT NOT NULL,
    tracking_number VARCHAR(100) UNIQUE,

    courier_name VARCHAR(100), -- DHL, GIG, FedEx
    status ENUM('pending','shipped','in_transit','delivered','failed') DEFAULT 'pending',

    shipped_at TIMESTAMP NULL,
    delivered_at TIMESTAMP NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_shipment_order
        FOREIGN KEY (order_id)
        REFERENCES orders(id)
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS shipment_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,

    shipment_id INT NOT NULL,

    status VARCHAR(100), -- "Arrived at Lagos hub"
    location VARCHAR(150),

    note TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_log_shipment
        FOREIGN KEY (shipment_id)
        REFERENCES shipments(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id bigint NOT NULL,

    type VARCHAR(50), -- order, payment, message
    title VARCHAR(255),
    message TEXT,

    is_read BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_notification_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS conversations (
    id INT AUTO_INCREMENT PRIMARY KEY,

    buyer_id bigint NOT NULL,
    seller_id INT NOT NULL,

    product_id INT DEFAULT NULL, -- optional (chat about a product)

    last_message TEXT,
    last_message_at TIMESTAMP NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    CONSTRAINT fk_conv_buyer
        FOREIGN KEY (buyer_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_conv_seller
        FOREIGN KEY (seller_id)
        REFERENCES sellers(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_conv_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,

    conversation_id INT NOT NULL,

    sender_id INT NOT NULL, -- user id (buyer or seller owner)
    sender_type ENUM('buyer','seller') NOT NULL,

    message TEXT,
    image VARCHAR(255),

    is_read BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_conversation (conversation_id),

    CONSTRAINT fk_msg_conversation
        FOREIGN KEY (conversation_id)
        REFERENCES conversations(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS message_reads (
    id INT AUTO_INCREMENT PRIMARY KEY,

    message_id INT NOT NULL,
    user_id INT NOT NULL,

    read_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    CONSTRAINT fk_read_message
        FOREIGN KEY (message_id)
        REFERENCES messages(id)
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS currencies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(10) NOT NULL UNIQUE, -- USD, NGN, EUR
    name VARCHAR(100) NOT NULL,       -- US Dollar, Naira
    symbol VARCHAR(10), -- $, ₦, €
    rate DECIMAL(15,6) NOT NULL,
    is_base BOOLEAN DEFAULT FALSE,    -- base currency (e.g. NGN)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS wallets (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id bigint NOT NULL,
    currency_code VARCHAR(10) NOT NULL, -- USD, NGN, EUR
    balance DECIMAL(18,6) DEFAULT 0.000000,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE (user_id, currency_code),

    CONSTRAINT fk_wallet_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS wallet_transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,

    wallet_id INT NOT NULL,
    type ENUM('deposit','withdrawal','payment','refund','transfer') NOT NULL,
    amount DECIMAL(18,6) NOT NULL,
    balance_before DECIMAL(18,6) NOT NULL,
    balance_after DECIMAL(18,6) NOT NULL,
    others json DEFAULT '{}',

    reference VARCHAR(255) DEFAULT NULL, -- order ID, transaction ref
    status ENUM('pending','completed','failed') DEFAULT 'pending',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_wallet_tx
        FOREIGN KEY (wallet_id)
        REFERENCES wallets(id)
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS promotions (
    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(255) NOT NULL,           -- Promotion name
    code VARCHAR(50) UNIQUE,               -- Optional coupon code
    description TEXT,                      -- Details about the promotion

    discount_type ENUM('percentage','fixed') NOT NULL DEFAULT 'percentage',
    discount_value DECIMAL(12,2) NOT NULL, -- 10% or 500.00

    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,

    usage_limit INT DEFAULT NULL,           -- Total times it can be used
    usage_per_user INT DEFAULT 1,           -- Times a single user can use

    status ENUM('active','inactive','expired') DEFAULT 'active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS promotion_products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    promotion_id INT NOT NULL,
    product_id INT NOT NULL,

    CONSTRAINT fk_pp_promotion FOREIGN KEY (promotion_id) REFERENCES promotions(id) ON DELETE CASCADE,
    CONSTRAINT fk_pp_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    UNIQUE (promotion_id, product_id)
);


CREATE TABLE IF NOT EXISTS promotion_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    promotion_id INT NOT NULL,
    category_id INT NOT NULL,

    CONSTRAINT fk_pc_promotion FOREIGN KEY (promotion_id) REFERENCES promotions(id) ON DELETE CASCADE,
    CONSTRAINT fk_pc_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    UNIQUE (promotion_id, category_id)
);
/* +254717886707 */
