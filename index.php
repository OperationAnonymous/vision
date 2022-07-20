<?php 
    session_start();
    if(isset($_SESSION['usuario'])){
        header("location: ../pelis/index.php"); 
    };
    function contador()
    {
        $archivo = "contador.txt"; //el archivo que contiene en numero
        $f = fopen($archivo, "r"); //abrimos el archivo en modo de lectura
        if($f)
        {
            $contador = fread($f, filesize($archivo)); //leemos el archivo
            $contador = $contador + 1; //sumamos +1 al contador
            fclose($f);
        }
        $f = fopen($archivo, "w+");
        if($f)
        {
            fwrite($f, $contador);
            fclose($f);
        }
        return $contador;
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vision+ | Login</title>
    <link rel="shortcut icon" href="./VISION+/img/icons/favion.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="./VISION+/img/icons/favion.png" type="image/x-icon">
    <link rel="shortcut icon" href="./VISION+/img/icons/favion.png">
  <link rel="icon" type="image/png" sizes="512x512" href="./VISION+/img/icons/favion.png">
    <link rel="stylesheet" href="./assets/css/estilos.css">
</head>
<body>

        <main>

            <div class="contenedor__todo">
                <div class="caja__trasera">
                    <div class="caja__trasera-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                    </div>
                    <div class="caja__trasera-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button id="btn__registrarse">Regístrarse</button>
                    </div>
                </div>

                <!--Formulario de Login y registro-->
                <div class="contenedor__login-register">
                    <!--Login-->
                    <form action="php/login_usuario_be.php" method="POST" class="formulario__login">
                        <h2>Iniciar Sesión</h2>
                        <h5>🔒 Todos tus datos serán encriptados como méteodo de seguridad</h5>
                        <input type="text" placeholder="Correo Electronico o Usuario..." name="correo">
                        <input type="password" placeholder="Contraseña..." name="contrasena">
                        <button>Entrar</button>
                    </form>

                    <!--Register-->
                    <form action="php/registro_usuario_be.php" method="POST" class="formulario__register">
                        <h2>Regístrarse con tu cuenta de Google</h2>
                        <h5>🔒 Todos tus datos serán encriptados como méteodo de seguridad</h5>

                        <input type="text" placeholder="Nombre completo..." name="nombre_completo">
                        <input type="text" placeholder="Correo Electronico..." name="correo">
                        <input type="text" placeholder="Usuario..." name="usuario">
                        <input type="password" placeholder="Contraseña..." name="contrasena">
                        <button>Regístrarse</button>
                    </form>
                </div>
            </div>

        </main>

        <script src="assets/js/script.js"></script>
</body>
</html>