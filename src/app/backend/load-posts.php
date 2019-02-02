<?php
$conn = new mysqli('localhost:3306', 'root', 'Nichijou123~', 'Self_Document');

$query = $conn->query("SELECT * FROM posts");
$query = $query->fetch_all(MYSQLI_ASSOC);

return json_encode($query);
