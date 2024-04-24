<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $pickup = $_POST['pickup'];
    $drop = $_POST['drop'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    // Database connection
    $conn = mysqli_connect('localhost', 'root', '', 'cab_request');
    if ($conn->connect_error) {
        die('Connection failed: ' . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO registration (name, phone, pickup, drop, date, time) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $name, $phone, $pickup, $drop, $date, $time);
        $stmt->execute();
        echo "Cab request has been processed";
        $stmt->close();
        $conn->close();
    }
?>
