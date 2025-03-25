<!doctype html>
<html>
<!-- InstanceBegin template="/Templates/main.dwt" codeOutsideHTMLIsLocked="false" -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- InstanceBeginEditable name="doctitle" -->
    <title>Curso: Taller de buenas prácticas de Gobierno Corporativo para empresas competitivas, productivas y perdurables
    </title>
    <!-- InstanceEndEditable -->
    <!-----------------------------------------
CSS
------------------------------------------>
    <!--Bootstrap-->
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css/botones.css" rel="stylesheet" type="text/css">
    <!--Main-->
    <link href="css/main.css" rel="stylesheet" type="text/css">

    <!--Font awesome-->
    <link href="css/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css">
    <!--Animate-->
    <link rel="stylesheet" href="css/animate.css" />
    <!-- InstanceBeginEditable name="head" -->
    <link rel="stylesheet" href="js/accordion/accordion.css">
    <!--Slider-->
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <!-- InstanceEndEditable -->
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Oswald:wght@300;500&display=swap" rel="stylesheet">
</head>

<body>

    <!-- Javascript-->
    <script src="js/sweetalert2.all.min.js"></script>
    <script type="text/javascript">
        function imageAlert() {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Actividad guardada',
                showConfirmButton: false,
                timer: 1500
            })
        }
    </script>

    <!-----------------------------------------
		HEADER
------------------------------------------>
    <!-- --------botones menu---------- -->
    <div id="main-header-3" class="img-responsive logos-img wow animated bounceInRight" data-wow-delay="0.5">
        <div class="lista">
            <ul>
                <li>
                    <a href="#" id="menu"><img src="img/PRO2/Btn_Menu_1.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#" id="btn1" class="btn1img" onclick="imageAlert()">
                        <img src="img/PRO2/Btn_Guardar_1.png" alt="" /></a>
                </li>
                <li>
                    <a href="#popup" id="btn2" data-toggle="modal"><img src="img/PRO2/Btn_Info_1.png" alt="" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!---------modal-------->
    <div class="modal fade" id="popup" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog-popup" role="document">
            <div class="modal-content">
                <div class="modal-header">
                </div>
                <div class="modal-body">
                    <div id="audioguia">
                        <audio id="sound_avanzar">
                            <source src="sound/Audio ayuda.mp3"></audio>
                        <img src="img/PRO2/GuiadeNavegacion.png" alt="" class="mb-6" />
                        <!------numeración guia------------->
                        <div style="position: absolute; top: 80px;right:215px;">
                            <div class="Cuerpo">
                 