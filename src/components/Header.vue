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
                                <a id="brand" class="clearfix navbar-brand" href="index-2.html"><img src="images/wlogo.png" alt="Trips"></a>
                            </div><!-- end navbar-header -->
                            <div id="navbar-collapse" class="navbar-right navbar-collapse collapse clearfix">
                                <ul class="nav navbar-nav yamm">
                                    <li class="dropdown">
                                        <a href="#" class="active dropdown-toggle" data-toggle="dropdown">HOME</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <div class="yamm-content">
                                                    <div class="row">
                                                        <article class="col-md-6">
                                                            <ul>
                                                                <li><h3>HOME PAGES</h3></li>
                                                                <li><a href="index-2.html">Home Default</a></li>
                                                                <li><a href="index1.html">Home Version 1</a></li>
                                                                <li><a href="index2.html">Home Version 2</a></li>
                                                                <li><a href="index3.html">Home Version 3</a></li>
                                                                <li><a href="index4.html">Home Version 4</a></li>
                                                                <li><a href="index5.html">Home Version 5</a></li>
                                                            </ul>
                                                        </article>
                                                        <article class="col-md-6">
                                                            <ul>
                                                                <li><h3>CUSTOM PAGES</h3></li>
                                                                <li><a href="hotels.html">Hotels</a></li>
                                                                <li><a href="hotel-single.html">Hotels Single</a></li>
                                                                <li><a href="destination-list.html">Destination List</a></li>
                                                                <li><a href="destination-grid.html">Destination Grid</a></li>
                                                                <li><a href="payment.html">Payment Details</a></li>
                                                                <li><a href="successful.html">Successful</a></li>
                                                            </ul>
                                                        </article>
                                                    </div><!-- end row -->
                                                </div><!-- end yamm-content -->
                                            </li>
                                        </ul><!-- end dropdown-menu -->
                                    </li><!-- end yamm-fw -->
                                    <li><a href="hotels.html">HOTELS</a></li>
                                    <li><a href="hot-deals.html">HOT DEALS</a></li>
                                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">PAGES</a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                            <li><a href="page-login.html">Page Login</a></li>
                                            <li><a href="page-not-found.html">Page Not Found</a></li>
                                            <li><a href="page-sidebar.html">Page Sidebar</a></li>
                                            <li><a href="page-fullwidth.html">Page Fullwidth</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">BLOG</a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="blog.html">Blog Default</a></li>
                                            <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">BONUS</a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="shortcodes-columns.html">Columns</a></li>
                                            <li><a href="shortcodes-typography.html">Typography</a></li>
                                            <li><a href="shortcodes-buttons.html">Button</a></li>
                                            <li><a href="shortcodes-pricing-table.html">Pricing Table</a></li>
                                            <li><a href="shortcodes-chart.html">Chart</a></li>
                                            <li><a href="shortcodes-accordion.html">Accordion</a></li>
                                            <li><a href="shortcodes-list.html">List Styles</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">CONTACT</a></li>
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
                <img src="images/logo.png" alt="Trips">
                <ul class="nav navbar-stacked">
                    <li><a href="index-2.html">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="#">Forums</a></li>
                    <li><a href="page-sidebar.html">Terms Usage</a></li>
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