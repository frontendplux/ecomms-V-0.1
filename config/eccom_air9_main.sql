/* DROP TABLE IF EXISTS main_users; */
/* DROP TABLE IF EXISTS main_categories; */

CREATE TABLE IF NOT EXISTS main_users (
    id bigint AUTO_INCREMENT PRIMARY KEY,
    uid VARCHAR(300) NOT NULL UNIQUE,

    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,

    username VARCHAR(100) NOT NULL,
    email VARCHAR(300) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,

    password VARCHAR(300) NOT NULL,
    others JSON DEFAULT '{}',
    is_news_letter boolean DEFAULT false,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_email (email),
    INDEX idx_username (username),
    INDEX idx_phone (phone)
);
/* 
ALTER TABLE main_users
ADD COLUMN IF NOT EXISTS  AFTER others; */

CREATE TABLE IF NOT EXISTS main_categories(
    id INT AUTO_INCREMENT PRIMARY KEY,

    parent_id INT DEFAULT NULL, -- for subcategories

    name VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    description TEXT,
    keywords Text NOT NULL, 

    icon VARCHAR(255),
    image VARCHAR(255),

    status ENUM('active', 'inactive') DEFAULT 'active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_parent_id (parent_id),
    INDEX idx_name (name),

    CONSTRAINT fk_category_parent
        FOREIGN KEY (parent_id)
        REFERENCES main_categories(id)
        ON DELETE CASCADE
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

    total_sales DECIMAL(12,6) DEFAULT 0.00,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE (user_id),

    INDEX idx_user_id (user_id),

    CONSTRAINT fk_seller_user
        FOREIGN KEY (user_id)
        REFERENCES main_users(id)
        ON DELETE CASCADE
);

/* CREATE TABLE IF NOT EXISTS seller_bank_accounts (
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
); */





CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seller_id INT NOT NULL,
    parent_id INT DEFAULT NULL,

    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,

    description TEXT,

    price DECIMAL(12,2) NOT NULL,

    sku VARCHAR(100),
    stock INT DEFAULT 0,

    category_id INT,

    status ENUM('active', 'draft') DEFAULT 'draft',

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
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

CREATE TABLE IF NOT EXISTS brands (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(150) NOT NULL UNIQUE,
    slug VARCHAR(150) NOT NULL UNIQUE,

    logo VARCHAR(255), -- brand logo image
    description TEXT,

    status ENUM('active','inactive') DEFAULT 'active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_name (name)
);

    

CREATE TABLE IF NOT EXISTS colors (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(50) NOT NULL,   -- Red, Blue
    hex_code VARCHAR(10),        -- #FF0000

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
        REFERENCES main_users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_review_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE
);



CREATE TABLE IF NOT EXISTS promotions (
    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(255) NOT NULL,           -- Promotion name
    description TEXT,                      -- Details about the promotion

    discount_type ENUM('percentage','fixed') NOT NULL DEFAULT 'percentage',
    discount_value DECIMAL(12,6) NOT NULL, -- 10% or 500.00

    start_date INT DEFAULT NULL,
    end_date INT DEFAULT NULL,

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
    CONSTRAINT fk_pc_category FOREIGN KEY (category_id) REFERENCES main_categories(id) ON DELETE CASCADE,
    UNIQUE (promotion_id, category_id)
);

