<?php
    include 'conexion_be.php';

    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    $query = "INSERT INTO usuarios(nombre_completo, correo,	usuario, contrasena) 
              VALUES('$nombre_completo', '$correo', '$usuario', '$contrasena')";
    //Verificar que el correo no se repta en la base de datos
    $verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' ");
    if(mysqli_num_rows($verificar_correo) > 0){
        echo '
        <script>
            alert("Este correo ya esta registrado");
            window.location = "../index.php";
        </script>
        ';
        exit();
        
    }

    //Verificar que el user no se repta en la base de datos
    $verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$usuario' ");
    if(mysqli_num_rows($verificar_usuario) > 0){
        echo '
        <script>
            alert("Este nombre ya esta registrado");
            window.location = "../index.php";
        </script>
        ';
        exit();
        
    }


    $ejecutar = mysqli_query($conexion, $query);

    if($ejecutar){
        echo '
        <script>
            alert("Te registraster correctamente");
            window.location = "../index.php";
        </script>
        ';
    }else{
        echo '
        <script>
            alert("Uste no se registro correctamente, intenetelo de nuevo");
            window.location = "../index.php";
        </script>
        ';
    }

    mysqli_close($conexion);
?>