<template>
  <div id="app">
    <div id="loader">
        <div class="loader-container">
            <h3 class="loader-back-text"><img src="images/loader.gif" alt="" class="loader"></h3>
        </div>
    </div>

    <div id="wrapper">

        <div class="topbar">
            <div class="container">
                <div class="pull-left">
                    <ul class="topbar-drops list-inline">
                        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-wallet17"></i> DOLLAR</a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">NEW LIRA</a></li>
                                <li><a href="#">EURO</a></li>
                                <li><a href="#">RUPI</a></li>
                                <li><a href="#">DINNAR</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-globe"></i> ESPAÑOL</a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Turkish</a></li>
                                <li><a href="#">Arabic</a></li>
                                <li><a href="#">Russian</a></li>
                                <li><a href="#">French</a></li>
                            </ul>
                        </li>
                        <li><i class="icon-telephone5"></i> 1800-3456-7891</li>
                    </ul><!-- end list-style -->
                </div><!-- end left -->
                <div class="pull-right">
                    <ul class="topbar-social list-inline">
                        <li><a href="#"><i class="icon-twitter"></i></a></li>
                        <li><a href="#"><i class="icon-facebook"></i></a></li>
                        <li><a href="login.html">REGISTRARSE</a></li>
                        <li><a href="login.html">LOGIN</a></li>
                    </ul><!-- end list-style -->
                </div><!-- end right -->
            </div><!-- end container -->
        </div><!-- end topbar -->

        <header class="header fixedheader nobg">
            <div class="menu-container">
                <div class="container">
                    <div class="menu-wrapper">
                        <nav id="navigation" class="navbar" role="navigation">
                            <div class="navbar-inner">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span class="sr-only">Toggle navigation</span>
                                        <i class="icon-menu27"></i>
                                    </button>
                                    <a id="brand" class="clearfix navbar-brand" href="index-2.html"><img src="/static/images/wlogo.png" alt="Trips"></a>
                                </div><!-- end navbar-header -->
                                <div id="navbar-collapse" class="navbar-right navbar-collapse collapse clearfix">
                                    <ul class="nav navbar-nav yamm">
                                        <li class="dropdown">
                                            <a href="#" class="active dropdown-toggle" data-toggle="dropdown">Inicio</a>
                                        </li><!-- end yamm-fw -->
                                        <li><a href="hotels.html">Acerca de</a></li>
                                        <li><a href="#contactanos">Contactanos</a></li>
                                        <li><a href="contact.html">New / Blog</a></li>
                                        <li class="sidebar-dropper"><a data-toggle="sidebar" data-target=".sidebar-right" class="noborder" href="#"><i class="icon-menu27"></i></a></li>
                                    </ul><!-- end navbar-right -->
                                </div><!-- end navbar-callopse -->
                            </div><!-- end navbar-inner -->
                        </nav><!-- end navigation -->
                    </div><!-- menu wrapper -->
                </div><!-- end container -->
            </div><!-- end menu-container -->
            <div class="sidebar-menu-container">
                <div class="col-sm-2 col-md-2 sidebar sidebar-right sidebar-animate">
                    <a data-toggle="sidebar" data-target=".sidebar-right" class="text-right" href="#"><i class="icon-wrong6-1"></i></a>
                    <img src="/static/images/logo.png" alt="Trips">
                    <ul class="nav navbar-stacked">
                        <li><a href="index-2.html">Inicio</a></li>
                        <li><a href="#">acerca de</a></li>
                        <li><a href="#contactanos">Contactanos</a></li>
                        <li><a href="blog.html">News / Blog</a></li>
                    </ul>
                </div>
            </div><!-- end sidebar menu -->
        </header><!-- end header -->

        <section class="section fullscreen background parallax" style="background-image:url('/static/upload/parallax_04.jpg');" data-img-width="1920" data-img-height="1133" data-diff="100">
            <div class="container">
                <div class="row homeform">
                    <div class="col-md-5 col-xs-12">
                        <div class="home-form">
                            <!-- Nav tabs -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="tab_01">
                                    <h6>¿DÓNDE TE GUSTARÍA IR?</h6>
                                    <form class="bookform form-inline row">
                                        <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                            <input type="text" class="form-control" placeholder=" Destino: Pais, Ciudad...">
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Inicio" id="datepicker">
                                                <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Final" id="datepicker1">
                                                <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                            </div>
                                        </div>
                                        <div class="form-group make-margin col-md-6 col-sm-6 col-xs-12">
                                            <div class="dropdown">
                                                <select class="selectpicker" data-style="btn-white">
                                                    <option>Adultos</option>
                                                    <option>2+1 with Bedroom + 2 Child</option>
                                                    <option>1+1 with Bedroom + 1 Child</option>
                                                    <option>2+1 with Bedroom + Full</option>
                                                    <option>Full Services 15 Days</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group make-margin col-md-6 col-sm-6 col-xs-12">
                                            <div class="dropdown">
                                                <select class="selectpicker" data-style="btn-white">
                                                    <option>Presupuesto</option>
                                                    <option>0 - $100</option>
                                                    <option>0 - $200</option>
                                                    <option>0 - $300</option>
                                                    <option>0 - $500</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <button type="submit" class="btn btn-primary btn-block"><i class="icon-search"></i>Buscar</button>
                                        </div>
                                    </form>
                                </div><!-- end tab-pane -->

                                <div role="tabpanel" class="tab-pane" id="tab_02">
                                    <h6>WHEN WOULD YOU LIKE TO GO?</h6>
                                    <form class="bookform form-inline row">
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <input type="text" class="form-control" placeholder=" Destination: Country, City,Airport...">
                                        </div>
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <input type="text" class="form-control" placeholder=" Hotel: TUNAI, HAWAI...">
                                        </div>
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <input type="text" class="form-control" placeholder=" Time: May, Jun, Jully...">
                                        </div>

                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <button type="submit" class="btn btn-primary btn-block"><i class="icon-search"></i> BOOK NOW</button>
                                        </div>
                                    </form>
                                </div><!-- end tab-pane -->

                                <div role="tabpanel" class="tab-pane" id="tab_03">
                                    <h6>WHICH WOULD YOU LIKE TO GO?</h6>
                                    <form class="bookform form-inline row">
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <input type="text" class="form-control" placeholder=" Destination: Country, City,Airport,...">
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Check in" id="datepicker2">
                                                <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Check out" id="datepicker3">
                                                <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                            </div>
                                        </div>
                                        <div class="form-group make-margin col-md-6 col-sm-6 col-xs-12">
                                            <div class="dropdown">
                                                <select class="selectpicker" data-style="btn-white">
                                                    <option>Adults</option>
                                                    <option>2+1 with Bedroom + 2 Child</option>
                                                    <option>1+1 with Bedroom + 1 Child</option>
                                                    <option>2+1 with Bedroom + Full</option>
                                                    <option>Full Services 15 Days</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group make-margin col-md-6 col-sm-6 col-xs-12">
                                            <div class="dropdown">
                                                <select class="selectpicker" data-style="btn-white">
                                                    <option>Max Budget</option>
                                                    <option>0 - $1000</option>
                                                    <option>0 - $2000</option>
                                                    <option>0 - $3000</option>
                                                    <option>0 - $5000</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <button type="submit" class="btn btn-primary btn-block"><i class="icon-search"></i> BOOK NOW</button>
                                        </div>
                                    </form>
                                </div><!-- end tab-pane -->

                                <div role="tabpanel" class="tab-pane" id="tab_04">
                                    <h6>HOW WOULD YOU LIKE TO GO?</h6>
                                    <form class="bookform form-inline row">
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <input type="text" class="form-control" placeholder=" Destination: Country, City,Airport...">
                                        </div>
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <input type="text" class="form-control" placeholder=" Hotel: TUNAI, HAWAI...">
                                        </div>
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <input type="text" class="form-control" placeholder=" Time: May, Jun, Jully...">
                                        </div>
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <button type="submit" class="btn btn-primary btn-block"><i class="icon-search"></i> BOOK NOW</button>
                                        </div>
                                    </form>
                                </div><!-- end tab-pane -->

                                <div role="tabpanel" class="tab-pane" id="tab_05">
                                    <h6>REALLY? YOU LIKE TO GO?</h6>
                                    <form class="bookform form-inline row">
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <input type="text" class="form-control" placeholder=" Destination: Country, City,Airport...">
                                        </div>
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <input type="text" class="form-control" placeholder=" Hotel: TUNAI, HAWAI...">
                                        </div>
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <input type="text" class="form-control" placeholder=" Time: May, Jun, Jully...">
                                        </div>
                                        <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                            <button type="submit" class="btn btn-primary btn-block"><i class="icon-search"></i> BOOK NOW</button>
                                        </div>
                                    </form>
                                </div><!-- end tab-pane -->
                            </div><!-- end tab-content -->
                        </div><!-- end homeform -->
                    </div><!-- end col -->

                    <div class="col-md-7 col-xs-12">
                        <div class="home-message">
                            <h1>DESCUBRE EL MUNDO<br>CON AMIGOS</h1>
                            <p>Viaja y descubre mas que nuevos lugares descubre amigos en el trascurso de tus viajes, trips hace posible que puedas conocer personas mientras viajas y disfruta :)</p>
                            <a href="#" class="btn btn-primary btn-lg border-radius">Decubre mas</a>
                        </div><!-- end homemessage -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end section -->

        <section class="section clearfix">
            <div class="container">
                <div class="hotel-title">
                    <h4>DESTINOS POPULARES</h4>
                </div><!-- end hotel-title -->

                <div class="row">
                    <div class="col-md-6">
                        <div class="mini-desti row">
                            <div class="col-md-4">
                                <img src="static/upload/mini_desti_01.jpg" alt="" class="img-responsive">
                            </div><!-- end col -->
                            <div class="col-md-8">
                                <div class="mini-desti-title">
                                    <div class="pull-left">
                                        <h6>PARIS</h6>
                                        <span class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span><!-- end rating -->
                                    </div>
                                    <div class="pull-right">
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="mini-desti-desc">
                                        <p>Situada en el centro norte de Francia, París es una de las ciudades más visitadas del mundo...</p>
                                    </div>
                                </div><!-- end title -->
                            </div><!-- end col -->
                        </div><!-- end mini-desti -->

                        <div class="mini-desti row">
                            <div class="col-md-4">
                                <img src="static/upload/mini_desti_02.jpg" alt="" class="img-responsive">
                            </div><!-- end col -->
                            <div class="col-md-8">
                                <div class="mini-desti-title">
                                    <div class="pull-left">
                                        <h6>MACHU PICCHU, PERÚ </h6>
                                        <span class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span><!-- end rating -->
                                    </div>
                                    <div class="pull-right">
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="mini-desti-desc">
                                        <p>A 130 kilómetros de Cuzco, la Ciudad Perdida de los incas se alza entre barrancos en mitad de un paraje...</p>
                                    </div>
                                </div><!-- end title -->
                            </div><!-- end col -->
                        </div><!-- end mini-desti -->

                        <div class="mini-desti row noborder">
                            <div class="col-md-4">
                                <img src="static/upload/mini_desti_03.jpg" alt="" class="img-responsive">
                            </div><!-- end col -->
                            <div class="col-md-8">
                                <div class="mini-desti-title">
                                    <div class="pull-left">
                                        <h6>Mezquita Sheikh</h6>
                                        <span class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span><!-- end rating -->
                                    </div>
                                    <div class="pull-right">
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="mini-desti-desc">
                                        <p>Célebre por su color blanco puro y la fusión de las diferentes arquitecturas islámicas en un solo templo, este inmenso templo con una superficie de 22.412 m2...</p>
                                    </div>
                                </div><!-- end title -->
                            </div><!-- end col -->
                        </div><!-- end mini-desti -->
                    </div><!-- end col -->

                    <div class="col-md-6">
                        <div class="mini-desti row">
                            <div class="col-md-4">
                                <img src="static/upload/mini_desti_04.jpg" alt="" class="img-responsive">
                            </div><!-- end col -->
                            <div class="col-md-8">
                                <div class="mini-desti-title">
                                    <div class="pull-left">
                                        <h6>Taj Mahal</h6>
                                        <span class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span><!-- end rating -->
                                    </div>
                                    <div class="pull-right">
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="mini-desti-desc">
                                        <p>La inspiradora belleza de este mausoleo de mármoles y cúpulas nació como el homenaje de un desconsolado...</p>
                                    </div>
                                </div><!-- end title -->
                            </div><!-- end col -->
                        </div><!-- end mini-desti -->

                        <div class="mini-desti row">
                            <div class="col-md-4">
                                <img src="static/upload/mini_desti_05.jpg" alt="" class="img-responsive">
                            </div><!-- end col -->
                            <div class="col-md-8">
                                <div class="mini-desti-title">
                                    <div class="pull-left">
                                        <h6>Catedral y Mezquita, Córdoba</h6>
                                        <span class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span><!-- end rating -->
                                    </div>
                                    <div class="pull-right">
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="mini-desti-desc">
                                        <p>Elegida la primera de Europa y la cuarta del mundo, la Mezquita de Córdoba es una de...</p>
                                    </div>
                                </div><!-- end title -->
                            </div><!-- end col -->
                        </div><!-- end mini-desti -->

                        <div class="mini-desti row noborder">
                            <div class="col-md-4">
                                <img src="static/upload/mini_desti_06.jpg" alt="" class="img-responsive">
                            </div><!-- end col -->
                            <div class="col-md-8">
                                <div class="mini-desti-title">
                                    <div class="pull-left">
                                        <h6>Basílica de San Pedro del Vaticano</h6>
                                        <span class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span><!-- end rating -->
                                    </div>
                                    <div class="pull-right">
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="mini-desti-desc">
                                        <p>Es difícil enumerar los tesoros de este templo cristiano, pero en pocas líneas basta decir que es la iglesia más grande del mundo...</p>
                                    </div>
                                </div><!-- end title -->
                            </div><!-- end col -->
                        </div><!-- end mini-desti -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end section -->

        <section class="section fullscreen background parallax" style="background-image:url('/static/upload/parallax_03.jpg');" data-img-width="1920" data-img-height="586" data-diff="10">
            <div class="container">
                <div id="testimonials">
                    <div class="testi-item">
                        <div class="hotel-title text-center">
                            <h3>EXPERIENCIA CON TRIP</h3>
                            <hr>
                            <p>E conocido gente muy buena y divertida, fue toda una experiencia nunca olvidare lo pasado en este viaje pienso que
                            todos deveriamos empesar a probar esta gran herramienta.</p>
                            <h6>- Julio Paari / Mochilero -</h6>
                        </div>
                    </div><!-- end testi-item -->

                    <div class="testi-item">
                        <div class="hotel-title text-center">
                            <h3>EXPERIENCIA CON TRIP</h3>
                            <hr>
                            <p>TNormalmente se cree que viajar es una experiencia muy cara o que sólo algunos afortunados
                            pueden hacerlo. Yo pensaba lo mismo hasta que hice mi primer viaje</p>
                            <h6>- Jhira roque / Nomada -</h6>
                        </div>
                    </div><!-- end testi-item -->
                </div><!-- end testimonials -->
            </div><!-- end container -->
        </section><!-- end section -->

        <section class="nopadding clearfix">
            <div class="owl-fullwidth">
                <div class="owl-item-full">
                    <img src="static/upload/home_mini_slider_02.jpg" alt="">
                </div>
                <div class="owl-item-full">
                    <img src="static/upload/home_mini_slider_01.jpg" alt="">
                </div>
            </div><!-- end container -->
        </section><!-- end section -->

        <footer class="footer clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-sm-6 col-xs-12 text-center">
                        <div class="flogo">
                            <img src="static/images/flogo.png" alt="">
                        </div><!-- end logo -->
                    </div><!-- end col -->
                    <div class="col-md-5 col-sm-6 col-xs-12">
                        <div class="widget">
                            <div class="widget-title">
                                <h3>SOBRE NOSOTROS</h3>
                            </div><!-- end title -->
                            <div class="textwidget">
                                <p>Viaja y descubre mas que nuevos lugares descubre amigos en el</p>
                                <p>trascurso de tus viajes, trips hace posible que puedas conocer personas mientras viajas y disfruta :)</p>
                            </div><!-- end textwidget -->
                        </div><!-- end widget -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </footer><!-- end copyrights -->

        <div class="copyrights clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-left">
                        <p>COPYRIGHT KINCODI 2018</p>
                    </div><!-- end col -->
                    <div class="col-md-6 text-right">
                        <div class="social-footer">
                            <a href="#" title="Facebook"><i class="icon-facebook"></i></a>
                            <a href="#" title="Twitter"><i class="icon-twitter"></i></a>
                            <a href="#" title="Pinterest"><i class="icon-pinterest"></i></a>
                            <a href="#" title="SU.PR"><i class="icon-stumbleupon"></i></a>
                            <a href="#" title="Instagram"><i class="icon-instagrem"></i></a>
                            <a href="#" title="Dribbble"><i class="icon-dribbble"></i></a>
                            <a href="#" title="Vimeo"><i class="icon-vimeo"></i></a>
                            <a href="#" title="Tumblr"><i class="icon-tumblr"></i></a>
                            <a href="#" title="RSS"><i class="icon-rss"></i></a>
                        </div><!-- end social-footer -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </div><!-- end copyrights -->
    </div><!-- end wrapper -->
  </div>
</template>

<script>
    
    export default {
        name: 'app',
        data () {
            return {
            msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            /* detect touch */
            if("ontouchstart" in window){
                document.documentElement.className = document.documentElement.className + " touch";
            }
            if(!$("html").hasClass("touch")){
                /* background fix */
                $(".parallax").css("background-attachment", "fixed");
            }

            /* fix vertical when not overflow
            call fullscreenFix() if .fullscreen content changes */
            function fullscreenFix(){
                var h = $('body').height();
                // set .fullscreen height
                $(".content-b").each(function(i){
                    if($(this).innerHeight() <= h){
                        $(this).closest(".fullscreen").addClass("not-overflow");
                    }
                });
            }
            $(window).resize(fullscreenFix);
            fullscreenFix();

            /* resize background images */
            function backgroundResize(){
                var windowH = $(window).height();
                $(".background").each(function(i){
                    var path = $(this);
                    // variables
                    var contW = path.width();
                    var contH = path.height();
                    var imgW = path.attr("data-img-width");
                    var imgH = path.attr("data-img-height");
                    var ratio = imgW / imgH;
                    // overflowing difference
                    var diff = parseFloat(path.attr("data-diff"));
                    diff = diff ? diff : 0;
                    // remaining height to have fullscreen image only on parallax
                    var remainingH = 0;
                    if(path.hasClass("parallax") && !$("html").hasClass("touch")){
                        var maxH = contH > windowH ? contH : windowH;
                        remainingH = windowH - contH;
                    }
                    // set img values depending on cont
                    imgH = contH + remainingH + diff;
                    imgW = imgH * ratio;
                    // fix when too large
                    if(contW > imgW){
                        imgW = contW;
                        imgH = imgW / ratio;
                    }
                    //
                    path.data("resized-imgW", imgW);
                    path.data("resized-imgH", imgH);
                    path.css("background-size", imgW + "px " + imgH + "px");
                });
            }
            $(window).resize(backgroundResize);
            $(window).focus(backgroundResize);
            backgroundResize();

            /* set parallax background-position */
            function parallaxPosition(e){
                var heightWindow = $(window).height();
                var topWindow = $(window).scrollTop();
                var bottomWindow = topWindow + heightWindow;
                var currentWindow = (topWindow + bottomWindow) / 2;
                $(".parallax").each(function(i){
                    var path = $(this);
                    var height = path.height();
                    var top = path.offset().top;
                    var bottom = top + height;
                    // only when in range
                    if(bottomWindow > top && topWindow < bottom){
                        var imgW = path.data("resized-imgW");
                        var imgH = path.data("resized-imgH");
                        // min when image touch top of window
                        var min = 0;
                        // max when image touch bottom of window
                        var max = - imgH + heightWindow;
                        // overflow changes parallax
                        var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
                        top = top - overflowH;
                        bottom = bottom + overflowH;
                        // value with linear interpolation
                        var value = min + (max - min) * (currentWindow - top) / (bottom - top);
                        // set background-position
                        var orizontalPosition = path.attr("data-oriz-pos");
                        orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
                        $(this).css("background-position", orizontalPosition + " " + value + "px");
                    }
                });
            }
            if(!$("html").hasClass("touch")){
                $(window).resize(parallaxPosition);
                //$(window).focus(parallaxPosition);
                $(window).scroll(parallaxPosition);
                parallaxPosition();
            }


            $(window).load(function() {
                $('#loader').delay(600).fadeOut('slow');
                $('#loader-container').delay(600).fadeOut('slow');
                $('body').delay(600).css({'overflow':'visible'});
            });

            $(".header .dropdown").hover(            
                function() {
                    $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
                    $(this).toggleClass('open');        
                },
                function() {
                    $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
                    $(this).toggleClass('open');       
                }
            );

            function toggleChevron(e) {
                $(e.target)
                    .prev('.panel-heading')
                    .find("i.indicator")
                    .toggleClass('icon-minus icon-plus');
            }
            $('#accordion').on('hidden.bs.collapse', toggleChevron);
            $('#accordion').on('shown.bs.collapse', toggleChevron);

            function toggleChevron(e) {
                $(e.target)
                    .prev('.panel-heading')
                    .find("i.indicator")
                    .toggleClass('icon-minus icon-plus');
            }
            $('#accordion1').on('hidden.bs.collapse', toggleChevron);
            $('#accordion1').on('shown.bs.collapse', toggleChevron);

            $('a[data-gal]').each(function() {
                $(this).attr('rel', $(this).data('gal'));
            });     
            $("a[data-gal^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',slideshow:false,overlay_gallery: false,theme:'light_square',social_tools:false,deeplinking:false});

            $('#testimonials').owlCarousel({
                        loop:true,
                        margin:30,
                        nav:false,
                        dots:true,
                        responsive:{
                            0:{
                                items:1
                            },
                            600:{
                                items:1
                            },
                            1000:{
                                items:1
                            }
                        }
                    })

                    $('.owl-fullwidth').owlCarousel({
                        loop:true,
                        margin:0,
                        nav:true,
                        dots:false,
                        responsive:{
                            0:{
                                items:1
                            },
                            600:{
                                items:2
                            },
                            1000:{
                                items:2
                            }
                        }
                    })

            jQuery(document).ready(function() {
            jQuery('#banner1').show().revolution( {
                dottedOverlay:"none",
                delay:9000,
                startwidth:1170,
                startheight:900,
                hideThumbs:200,          
                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:4,
                navigationType:"none",
                navigationArrows:"solo",
                navigationStyle:"preview3",
                touchenabled:"on",
                onHoverStop:"on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                parallax:"scroll",
                parallaxBgFreeze:"on",
                parallaxLevels:[10,20,30,40,50,60,70,80,90,100],                                 
                keyboardNavigation:"off",        
                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,
                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,
                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,
                shadow:0,
                fullWidth:"on",
                fullScreen:"off",
                spinner:"spinner4",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",     
                autoHeight:"off",                       
                forceFullWidth:"on",                        
                hideThumbsOnMobile:"off",
                hideNavDelayOnMobile:1500,                      
                hideBulletsOnMobile:"off",
                hideArrowsOnMobile:"off",
                hideThumbsUnderResolution:0,
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0    
            });
        }); //ready   
  
          jQuery(document).ready(function() {
            jQuery('#banner3').show().revolution( {
                dottedOverlay:"none",
                delay:9000,
                startwidth:1170,
                startheight:865,
                hideThumbs:200,          
                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:4,
                navigationType:"none",
                navigationArrows:"solo",
                navigationStyle:"preview3",
                touchenabled:"on",
                onHoverStop:"on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                parallax:"scroll",
                parallaxBgFreeze:"on",
                parallaxLevels:[10,20,30,40,50,60,70,80,90,100],                                 
                keyboardNavigation:"off",        
                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,
                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,
                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,
                shadow:0,
                fullWidth:"on",
                fullScreen:"off",
                spinner:"spinner4",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",     
                autoHeight:"off",                       
                forceFullWidth:"on",                        
                hideThumbsOnMobile:"off",
                hideNavDelayOnMobile:1500,                      
                hideBulletsOnMobile:"off",
                hideArrowsOnMobile:"off",
                hideThumbsUnderResolution:0,
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0    
            });
        }); //ready    
  
        jQuery(document).ready(function() {
            jQuery('#banner2').show().revolution( {
                dottedOverlay:"none",
                delay:16000,
                startwidth:1170,
                startheight:700,
                hideThumbs:200,          
                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:4,
                navigationType:"none",
                navigationArrows:"solo",
                navigationStyle:"preview2",
                touchenabled:"on",
                onHoverStop:"on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                parallax:"scroll",
                parallaxBgFreeze:"on",
                parallaxLevels:[10,20,30,40,50,60,70,80,90,100],                                 
                keyboardNavigation:"off",        
                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,
                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,
                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,
                shadow:0,
                fullWidth:"off",
                fullScreen:"off",
                spinner:"spinner4",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",     
                autoHeight:"off",                       
                forceFullWidth:"off",                        
                hideThumbsOnMobile:"off",
                hideNavDelayOnMobile:1500,                      
                hideBulletsOnMobile:"off",
                hideArrowsOnMobile:"off",
                hideThumbsUnderResolution:0,
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0    
            });
        }); //ready

        jQuery(document).ready(function() {
            jQuery('#banner4').show().revolution( {
                dottedOverlay:"none",
                delay:16000,
                startwidth:1170,
                startheight:700,
                hideThumbs:200,          
                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:4,
                navigationType:"none",
                navigationArrows:"solo",
                navigationStyle:"preview4",
                touchenabled:"on",
                onHoverStop:"on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                parallax:"scroll",
                parallaxBgFreeze:"on",
                parallaxLevels:[10,20,30,40,50,60,70,80,90,100],                                 
                keyboardNavigation:"off",        
                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,
                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,
                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,
                shadow:0,
                fullWidth:"on",
                fullScreen:"on",
                spinner:"spinner4",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",     
                autoHeight:"off",                       
                forceFullWidth:"on",                        
                hideThumbsOnMobile:"off",
                hideNavDelayOnMobile:1500,                      
                hideBulletsOnMobile:"off",
                hideArrowsOnMobile:"off",
                hideThumbsUnderResolution:0,
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0,
                fullScreenOffsetContainer: ".topbar"    
            });
        }); //r
        }
    }
</script>