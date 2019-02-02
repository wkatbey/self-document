<?php
$conn = new mysqli('localhost:3306', 'root', 'Nichijou123~', 'Self_Document');
$input = file_get_contents("php://input");


$tableCreation = "CREATE TABLE IF NOT EXISTS posts (
        post_id INTEGER NOT NULL PRIMARY_KEY,
        contents VARCHAR(MAX),
        date_of_submission VARCHAR(20),
        date_of_modification VARCHAR(20),
        was_post_modified tinyInt(1)
    )";

if ($conn->query($tableCreation))
    echo "Successfully created new table";


?>