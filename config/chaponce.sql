ALTER TABLE products
ADD COLUMN IF NOT EXISTS brand_id INT AFTER category_id,
ADD INDEX idx_brand_id (brand_id),
ADD CONSTRAINT fk_product_brand
    FOREIGN KEY (brand_id)
    REFERENCES brands(id)
    ON DELETE SET NULL;


