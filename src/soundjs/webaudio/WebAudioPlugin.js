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
                                <div class="ubicacion-guia-botones">
                                    <button class="redondeo ">1</button>
                                    <div class="informacion">
                                        <h6>MENÚ</h6>
                                        <p>Puedes ir a otra sección del curso</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute; top: 80px;right:157px;">
                            <div class="Cuerpo">
                                <div class="ubicacion-guia-botones ">
                                    <button class="redondeo ">2</button>
                                    <div class="informacion">
                                        <h6>GUARDAR</h6>
                                        <p>Graba tu avance en el módulo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute; top: 80px;right:92px;">
                            <div class="Cuerpo">
                                <div class="ubicacion-guia-botones ">
                                    <button class="redondeo ">3</button>
                                    <div class="informacion">
                                        <h6>AYUDA</h6>
                                        <p>Muestra esta ayuda de navegación</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute; top: 365px;right:86px;">
                            <div class="Cuerpo">
                                <div class="ubicacion-guia-botones ">
                                    <button class="redondeo ">4</button>
                                    <div class="informacion">
                                        <h6>AVANZAR</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute; top: 480px;right:200px;">
                            <div class="Cuerpo">
                                <div class="ubicacion-guia-botones ">
                                    <button class="redondeo ">5</button>
                                    <div class="informacion">
                                        <h6>NUMERACIÓN</h6>
                                        <p>Muestra el número de la página actual</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute; top: 340px;right:375px;">
                            <div class="Cuerpo">
                                <div class="ubicacion-guia-botones ">
                                    <button class="redondeo ">6</button>
                                    <div class="informacion">
                                        <h6>MÁS INFORMACIÓN</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute; top: 458px;left:258px;">
                            <div class="Cuerpo">
                                <div class="ubicacion-guia-botones ">
                                    <button class="redondeo ">7</button>
                                    <div class="informacion">
                                        <h6>PROGRESO</h6>
                                        <p>Muestra gráficamente tu avance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute; top: 365px;left:68px;">
                            <div class="Cuerpo">
                                <div class="ubicacion-guia-botones ">
                                    <button class="redondeo ">8</button>
                                    <div class="informacion">
                                        <h6>RETROCEDER</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer ">
                    <button type="button" class="close" data-dismiss="modal" aria-label="">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
    </div>


    <!-----------------------------------------
MENU
------------------------------------------>
    <!--Menu opener-->
    <div class="overlay" id="overlay">
        <nav class="overlay-menu">
            <ul>
                <div class="row ">
                    <div class="col-md-10 col-sm-10 col-xs-10">
                        <p>Menú principal</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2">
                        <a class="close-menu" id="close-menu"><img src="img/icono-cerrar2.png" alt="Cerrar" width="20" height="20"></a>
                    </div>
                </div>
                <li><a href="#" onclick="parent.postMessage('1', '*');"><i class="fa fa-home"></i>Inicio</a></li>
                <li><a href="#" onclick="parent.postMessage('6', '*');"><i class="fa fa-arrow-right"></i> Módulo 1.
                        Principios y modelo de gobernanza empresarial </a></li>
                <li><a href="#" onclick="parent.postMessage('10', '*');"><i class="fa fa-arrow-right"></i> 1. Conoce los
                        Principios de Gobierno Corporativo</a></li>
                <li><a href="#" onclick="parent.postMessage('11', '*');"><i class="fa fa-arrow-right"></i> 2. Identifica tu
                        propósito empresarial y aspectos clave de la cultura organizacional.</a></li>
                <li><a href="#" onclick="parent.postMessage('18', '*');"><i class="fa fa-arrow-right"></i> 3. Identifica el
                        modelo de gobernanza en tu empresa y los actores para la gobernanza empresarial</a></li>
                <li><a href="#" onclick="parent.postMessage('27', '*');"><i class="fa fa-arrow-right"></i> 4. Conoce más
                        sobre el MOS: Máximo Órgano Social y el enfoque hacia el cumplimiento o Autoregulación</a></li>

            </ul>
        </nav>
    </div>
    <!-----------------------------------------
CONTENT
------------------------------------------>
    <!-- InstanceBeginEditable name="Content" -->
    <audio autoplay>
        <source src="sound/M1_BPG_A18P21.mp3" type="audio/mp3">
    </audio>
    <div class="row fondocontenidos">
        <div class="container">
            <h1 class="mt-0">Ejercicio práctico</h1>
            <p>Observa la siguiente gráfica y a manera de ejercicio, haz una propuesta del modelo ideal para tu organización. No olvides definir el propósito y sus funciones indicando cómo deberían operar en tu organización.
            </p>
            <br>
            <center>
                <a href="../Escenas/pdf/Tabla de roles y funciones de organos de gobierno.xlsx" target="_blank">
                    <img src="img/PRO2/slide20-1.png" alt="#" class="img-responsive wow animated flipInX" style="margin-top: -90px;" /></a>
                <div class="info">
                    <p>Haz clic en la gráfica para descargar el documento de la actividad.</p>
                </div>
                <br>
            </center>
        </div>
    </div>
    <!-- InstanceEndEditable -->
    <!-----------------------------------------
FOOTER
------------------------------------------>
    <div id="footer">
        <div class="container">
            <div class="progress progress-striped active">
                <div class="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 58%">
                    <span class="sr-only">8% completado</span>
                </div>
            </div>
            <div class="inner-footer">
                <!--<div class="next-prev"> InstanceBeginEditable name="Navegacion lineal" <a href="9.html"></a>-->
                <p class="pr-4 pl-4">Página 21 / 36</p>
                <!--<a href="11.html"></a>  InstanceEndEditable </div>-->
            </div>
        </div>
    </div>

    <!-----------------------------------------
JAVASCRIPT
------------------------------------------>
    <!--Jquery-->
    <script src="js/jquery.js"></script>

    <!--Bootstrap-->
    <script src="js/modal.js"></script>
    <!--main-->
    <script src="js/main.js"></script>


    <!--wow-->
    <script src="js/wow.js"></script>
   