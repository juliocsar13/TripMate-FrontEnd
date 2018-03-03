<template>
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

</template>
<script>
    
    export default {
        name: "Header"
    }
</script>