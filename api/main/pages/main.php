<?php
class Main {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

  public function get_Category(){
    $sql = "SELECT * FROM main_categories WHERE status=?";
    $smt = $this->conn->prepare($sql);

    $status = 'active';
    $smt->bind_param("s", $status);

    $smt->execute();

    return $smt->get_result()->fetch_all(MYSQLI_ASSOC);
}


public function get_Category_id($slug = '') {
    // 1. Change the SQL to filter by ID
    $sql = "SELECT id FROM main_categories WHERE slug = ? AND status = ? LIMIT 1";
    $smt = $this->conn->prepare($sql);
    $status = 'active';
    // 2. Bind both the ID (integer "i") and Status (string "s")
    $smt->bind_param("ss", $slug, $status);
    $smt->execute();
    // 3. Use fetch_assoc() to return just one category object
    return $smt->get_result()->fetch_assoc();
}

public function promo_products($limit = 10, $offset = 0) {

    $sql = "SELECT * FROM promotions 
            WHERE status='active'
            ORDER BY id DESC 
            LIMIT ? OFFSET ?";

    $promo = $this->conn->prepare($sql);
    $promo->bind_param('ii', $limit, $offset);
    $promo->execute();
    $promo_res = $promo->get_result();

    $datares = [];

    while ($promo_row = $promo_res->fetch_assoc()) {

        $data = [
            "promo" => $promo_row,
            "products" => []
        ];

        $promoPro = $this->conn->prepare("
            SELECT 
                p.id,
                p.name,
                p.price,
                p.stock,
                p.slug,
                
                -- ✅ FIRST IMAGE
                (SELECT image_url 
                 FROM product_images 
                 WHERE product_id = p.id 
                 LIMIT 1) as image,

                -- ✅ RATINGS
                IFNULL(AVG(r.rating), 0) as avg_rating,
                COUNT(r.id) as total_reviews

            FROM promotion_products pp

            LEFT JOIN products p ON pp.product_id = p.id
            LEFT JOIN reviews r ON p.id = r.product_id

            WHERE pp.promotion_id = ?
            GROUP BY p.id
            ORDER BY p.id DESC
            LIMIT 20
        ");

        $promoPro->bind_param('i', $promo_row['id']);
        $promoPro->execute();
        $promoPro_res = $promoPro->get_result();

        while ($row = $promoPro_res->fetch_assoc()) {

            // ✅ APPLY DISCOUNT
            $price = $row['price'];
            $discount = $promo_row['discount_value'];

            if ($promo_row['discount_type'] == 'percentage') {
                $final_price = $price - ($price * ($discount / 100));
            } else {
                $final_price = $price - $discount;
            }

            // prevent negative price
            if ($final_price < 0) $final_price = 0;

            $row['final_price'] = number_format($final_price, 2);

            $data["products"][] = $row;
        }

        $datares[] = $data;
    }

    return $datares;
}

}

 ?>