<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    $con = mysqli_connect("localhost" , "root" , "" , "restaurant");
    if(!$con) {
        print("not connected");
    }
    $nm = $_REQUEST['name'];
    $eml = $_REQUEST['email'];
    $num = $_REQUEST['mob'];
    $quan = $_REQUEST['quantity'];
    $ord = $_REQUEST['order'];
    $add = $_REQUEST['address'];

    $count = mysqli_query($con , "insert into orderdetails values('$nm' , '$eml' , '$num' , '$quan' , '$ord' , '$add')");

    if($count>=1) {
        ?>
            <script type="text/javascript">
                alert("Order sent successfully!");
            </script>
        <?php
        include("order.html");
    }

    ?>
</body>
</html>