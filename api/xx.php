<?php
include __DIR__ . "/../config/conn.php";

// ✅ DEFINE YOUR DATABASE NAME
$dbName = "eccom_air9_main";

$path = __DIR__ . '/../config/eccom_air9_main.sql';

// Check file
if (!file_exists($path)) {
    die("❌ SQL file not found at: $path");
}

// Select DB
if (!$conn->select_db($dbName)) {
    die("❌ Cannot select database $dbName: " . $conn->error);
}

// Get SQL content
$sql_content = file_get_contents($path);

// Run queries
if ($conn->multi_query($sql_content)) {

    echo "✅ Database $dbName reset successfully.<br>";

    // VERY IMPORTANT: flush all results
    do {
        if ($result = $conn->store_result()) {
            $result->free();
        }
    } while ($conn->more_results() && $conn->next_result());

} else {
    die("❌ Failed to run SQL: " . $conn->error);
}

// Close connection
$conn->close();
?>