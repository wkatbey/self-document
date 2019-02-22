<?php
$conn = new mysqli('localhost:3306', 'root', 'Nichijou123~', 'Self_Document');
$post = json_decode(file_get_contents("php://input"));

$tableCreation = "CREATE TABLE IF NOT EXISTS posts (
        post_id INTEGER NOT NULL PRIMARY_KEY,
        contents VARCHAR(MAX),
        date_of_submission VARCHAR(20),
        date_of_modification VARCHAR(20),
        was_post_modified tinyInt(1)
    )";

if ($conn->query($tableCreation))
    echo "Successfully created new table";
else 
    echo "Failed to create new table";

$countQuery = $mysqli->prepare("SELECT COUNT('*') AS 'num' FROM posts WHERE post_id = ?");
$countQuery->bind_param("s", $post->id);
$count = $countQuery->execute();

if (($count = $countQuery->execute())) {
    $count = $count->fetch_all(MYSQLI_ASSOC);

    if ($count['num'] == 0) {
        $update = $mysqli->prepare("INSERT INTO posts VALUES (?,?,?,?,?)");
        $update->bind_param("ssssi", $post->id, $post->textInput, 
            $post->dateOfSubmission, $post->dateOfModification, $post->wasPostModified);
    }
    else {
        $update = $mysqli->prepare("UPDATE posts SET 
                                contents = ?,
                                date_of_submission = ?,
                                date_of_modification = ?,
                                was_post_modified = ?
                                WHERE post_id = ?"
                                );

        $update->bind_param("sssis", $post->textInput, $post->dateOfSubmission, 
            $post->dateOfModification, $post->wasPostModified, $post->id);
    }

    if ($update->execute())
        echo "Successfully executed update";
    else
        echo "Failed to execute update";
    }
    else {
        echo "Failed to retrieve the number of columns in the database with post_id = " . $post->id;
    }
?>