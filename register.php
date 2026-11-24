<?php
// Include database configuration
include 'db_config.php';
include 'userid_max.php';

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// If the form is submitted
if (isset($_POST['Sign_Up'])) {
    // Retrieve form data
    // Retrieve form data and filter HTML tags
    $firstName = strip_tags($_POST['first_name']);
    $lastName = strip_tags($_POST['last_name']);
    $email = strip_tags($_POST['email']);
    $password = strip_tags($_POST['password']);
    $userType = strip_tags($_POST['userType']);

    $namefull = $firstName . ' ' . $lastName;

   

    $hash = password_hash($password, PASSWORD_DEFAULT);

    // Insert data into the account table (prepared statement, hashed password)
    $stmt1 = $conn->prepare("INSERT INTO account (User_Name, email, User_password, UserType) VALUES (?, ?, ?, ?)");
    $stmt1->bind_param("ssss", $namefull, $email, $hash, $userType);
    if ($stmt1->execute()) {
        $newUserId = $conn->insert_id;
        if ($userType == 'student') {
            $stmt2 = $conn->prepare("INSERT INTO student (user_id, student_fname, student_lname, Email) VALUES (?, ?, ?, ?)");
        } else {
            $userType = 'teacher';
            $stmt2 = $conn->prepare("INSERT INTO teacher (user_id, teacher_fname, teacher_lname, email) VALUES (?, ?, ?, ?)");
        }
        $stmt2->bind_param("isss", $newUserId, $firstName, $lastName, $email);
        $stmt2->execute();
        echo "Account created successfully";
    } else {
        echo "Error creating account: " . htmlspecialchars($conn->error);
    }
}

// Close connection
$conn->close();

