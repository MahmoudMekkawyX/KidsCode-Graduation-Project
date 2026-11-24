<?php
// Saves a message from the "Contact us" form into contact_messages.
include 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = $_POST['contactName'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $email   = $_POST['contactEmail'] ?? '';
    $phone   = $_POST['phoneNumber'] ?? '';
    $message = $_POST['contactMessage'] ?? '';

    $stmt = $conn->prepare("INSERT INTO contact_messages (name, subject, email, phone_number, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $subject, $email, $phone, $message);
    $stmt->execute();
    $stmt->close();
}
$conn->close();
header("Location: contact us .php");
exit;
