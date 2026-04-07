/* eccom_air9_main as db_main;
eccom_air9_seller as db_seller;
eccom_air9ja_logistics as db_logs; */


CREATE TABLE IF NOT EXISTS eccom_air9_seller.sellers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,

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

    status ENUM('active', 'pending', 'suspended') DEFAULT 'pending',

    total_sales DECIMAL(12,6) DEFAULT 0.00,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE (user_id),

    INDEX idx_user_id (user_id),

    CONSTRAINT fk_seller_user
        FOREIGN KEY (user_id)
        REFERENCES eccom_air9_main.users(id)
        ON DELETE CASCADE
) ENGINE=InnoDB;

