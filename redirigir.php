<?php 
    session_start();
    if(!isset($_SESSION['usuario'])){
        echo '
        <script>
            alert("Por favor inicia sesion ");
            window.location = "../index.php"
        </script>
        ';
        //header("location: index.php");

        session_destroy();
        die();
    }

    session_destroy();


?>
<HTML>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<HEAD>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html;charset=UTF-8"><META HTTP-EQUIV="Refresh" CONTENT="0; URL=principal.html"><TITLE>Page has moved</TITLE>
</HEAD>
<BODY>
<A HREF="principal.html"><h1></h1></A>
</BODY>
</HTML>
