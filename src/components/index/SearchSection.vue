<template>
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
                            <a href="#" class="btn btn-primary btn-lg border-radius">Descubre mas</a>
                        </div><!-- end homemessage -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end section -->

</template>
<script>
    export default {
        name: "Section1"
    }
</script>