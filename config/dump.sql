
INSERT INTO main_categories (name, slug, description, keywords, icon, image, status) VALUES
('Supermarket', 'supermarket', 'Groceries, cleaning supplies, and more', 'groceries, food, drinks, detergents', 'bi-basket', 'supermarket.jpg', 'active'),
('Health & Beauty', 'health-beauty', 'Skincare, makeup, and personal care', 'makeup, vitamins, perfume, skincare', 'bi-heart-pulse', 'health_beauty.jpg', 'active'),
('Home & Office', 'home-office', 'Furniture, appliances, and kitchenware', 'fridge, sofa, blender, microwave', 'bi-house-door', 'home_office.jpg', 'active'),
('Appliances', 'appliances', 'Large and small home appliances', 'washing machine, cooker, heater', 'bi-plug', 'appliances.jpg', 'active'),
('Phones & Tablets', 'phones-tablets', 'Mobile phones and accessories', 'iphone, samsung, android, ipad', 'bi-phone', 'phones.jpg', 'active'),
('Computing', 'computing', 'Laptops, printers, and software', 'laptop, hp, dell, macbook, printer', 'bi-laptop', 'computing.jpg', 'active'),
('Electronics', 'electronics', 'TVs, audio, and cameras', 'television, home theater, speaker', 'bi-tv', 'electronics.jpg', 'active'),
('Fashion', 'fashion', 'Clothing, shoes, and accessories', 'clothes, sneakers, watch, jewelry', 'bi-handbag', 'fashion.jpg', 'active'),
('Baby Products', 'baby-products', 'Diapers, toys, and gear', 'pampers, baby food, stroller', 'bi-baby', 'baby.jpg', 'active'),
('Gaming', 'gaming', 'Consoles and video games', 'ps5, xbox, nintendo, fifa', 'bi-controller', 'gaming.jpg', 'active');


INSERT INTO main_categories (parent_id, name, slug, description, keywords, icon, image, status) VALUES
-- Subcategories for Phones & Tablets (Parent ID: 5)
(5, 'Mobile Phones', 'mobile-phones', 'All smartphones', 'android, ios, smartphone', 'bi-smartphone', 'mobiles.jpg', 'active'),
(5, 'Tablets', 'tablets', 'iPads and Android tablets', 'ipad, lenovo tab, surface', 'bi-tablet', 'tablets.jpg', 'active'),
(5, 'Mobile Accessories', 'mobile-accessories', 'Cases, chargers, and powerbanks', 'charger, earphone, screen guard', 'bi-headset', 'accs.jpg', 'active'),

-- Subcategories for Computing (Parent ID: 6)
(6, 'Laptops', 'laptops', 'Notebooks and Macbooks', 'core i7, gaming laptop', 'bi-laptop', 'laptops.jpg', 'active'),
(6, 'Printers', 'printers', 'Inkjet and Laser printers', 'canon, epson, hp printer', 'bi-printer', 'printers.jpg', 'active'),
(6, 'Software', 'software', 'Antivirus and Office suites', 'windows, kaspersky, office 365', 'bi-shield-check', 'software.jpg', 'active'),

-- Subcategories for Fashion (Parent ID: 8)
(8, 'Mens Fashion', 'mens-fashion', 'Clothes and shoes for men', 'shirts, suits, boots', 'bi-gender-male', 'men_fashion.jpg', 'active'),
(8, 'Womens Fashion', 'womens-fashion', 'Clothes and shoes for women', 'dresses, heels, bags', 'bi-gender-female', 'women_fashion.jpg', 'active'),
(8, 'Watches', 'watches', 'Analog and Smart watches', 'rolex, casio, apple watch', 'bi-watch', 'watches.jpg', 'active'),

-- Subcategories for Electronics (Parent ID: 7)
(7, 'Televisions', 'televisions', 'Smart and LED TVs', 'hisense, samsung tv, lg', 'bi-tv', 'tvs.jpg', 'active'),
(7, 'Audio', 'audio', 'Home theaters and speakers', 'soundbar, bluetooth speaker', 'bi-volume-up', 'audio.jpg', 'active');
