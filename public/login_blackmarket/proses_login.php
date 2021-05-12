<?php
// perintah untuk memulai session
session_start();

include("../connection.php");

$namauser = $_POST['username'];
$password = $_POST['password'];

$query = mysqli_query($connection, "select * from users where username = '$namauser' and password = '$password'");
$hasil = mysqli_num_rows($query);

if ($hasil == TRUE){
    $_SESSION['username']=$namauser;
    header("location:../user/main.php");
    echo "<p> selamat datang  <b>".$namauser."</b></p>";
       
} else {
    echo "
        <script>
            window.alert('LOGIN GAGAL')
            window.location='login.html'
        </script>
        ";
}

?>