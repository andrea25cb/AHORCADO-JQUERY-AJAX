<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=2.0">
    <title>CAMBIAR CONTRASEÑA</title>
    <script src="../jquery-3.6.1.js"></script>
    <script src="../controlador/utiles.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <style type="text/css">
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            background-repeat: round;
            font-family: 'Vollkorn', serif;
            font-weight: bolder;
            overflow: hidden;
        }
        
        body,
        html {
            background-image: url('https://fondosmil.com/fondo/19430.jpg');
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        @keyframes glow {
            from {
                text-shadow: 0 0 10px #fff, 0 0 30px #28b969, 0 0 40px #fff, 0 0 50px #fff;
            }
            to {
                text-shadow: 0 0 10px #fff, #fff, 0 0 45px #28b969, 0 0 55px #fff, 0 0 65px #fff;
            }
        }
        
        span {
            font-size: 1em;
        }
        
        h2 {
            color: wheat;
            font-weight: bolder;
            align-items: center;
            text-align: center;
        }
        
        .login-form {
            width: 500px;
            height: 500px;
            margin: 20px auto;
            justify-content: center;
            text-align: center;
        }
        
        .login-form form {
            margin-bottom: 15px;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
            padding: 30px;
            background-color: rgba(164, 228, 172, 0.527);
            border-radius: 10%;
        }
        
        .login-form h2 {
            margin: 0 0 15px;
        }
        
        .form-control,
        .btn {
            min-height: 38px;
            border-radius: 10px;
        }
        
        .btn {
            font-size: 15px;
            font-weight: bold;
            background-color: rgb(87, 228, 111);
        }
        
        a {
            background-color: red;
            color: white;
            font-size: 20px;
            font-weight: bold;
            padding: 10px;
            border-radius: 10px;
            text-decoration: none;
        }
    </style>
</head>

<body>
<?=
$nombreUser= $_GET['nombre'];
$contraUser= $_GET['contra'];

?>
    <div class="login-form">
        <center>
            <h2>
                CAMBIAR CONTRASEÑA
            </h2>
        </center>

        <form action="../modelo/updateContra.php?contra=<?=$contraUser?>$nombre=<?=$nombreUser?>" method="post" class="form-horizontal">

            <div class="form-group">
                <label class="col-sm-6 text-left">Contraseña actual:</label>
                <div class="col-sm-12">
                    <input type="text" id="contra" class="form-control" value="<?=$contraUser ?>"/>
                </div>
            </div>
            <br>
            <div class="form-group">
                <label class="col-sm-6 text-left">Contraseña nueva:</label>
                <div class="col-sm-12">
                    <input type="text" name="nuevaContra" class="form-control" placeholder="Nueva contraseña" />
                </div>
            </div>
            <br>

            <div class="form-group">
                <div class="col-sm-12">
                    <input type="submit" id="cambiarContra" class="btn btn-block" value="CAMBIAR CONTRASEÑA!">
                </div>
            </div><br>
            <div class="form-group">
                <div class="col-sm-12">
                    <a href="opcionesUsuario.html">VOLVER</a>
                </div>

                <div id="mensaje"></div>
                <!-- mensaje error -->
            </div>

        </form>
    </div>


</body>

</html>