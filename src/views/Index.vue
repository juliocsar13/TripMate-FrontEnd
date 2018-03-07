<template>
  <div id="app">
    <loader></loader>
    <div id="wrapper">
        <topbar/>
        <header-app/>
        <search-section />
        <populars-section />
        <experiencies-section />

        <photos-section />
        <footer-app />
        <copyright />

    </div><!-- end wrapper -->
  </div>
</template>

<script>

    import Loader from "../components/common/Loader.vue";
    import Topbar from "../components/common/TopBar.vue";
    import HeaderApp from "../components/common/HeaderApp.vue";
    import SearchSection from "../components/index/SearchSection.vue";
    import PopularsSection from "../components/index/PopularsSection.vue";
    import ExperienciesSection from "../components/index/ExperienciesSection.vue";
    import FooterApp from "../components/common/FooterApp.vue";
    import PhotosSection from "../components/index/PhotosSection.vue";
    import Copyright from "../components/common/Copyright.vue";

    import scripts from "./utils/init";

    export default {
        name: 'index',
        components:{
            Loader,
            Topbar,
            HeaderApp,
            SearchSection,
            PopularsSection,
            ExperienciesSection,
            FooterApp,
            PhotosSection,
            Copyright
        },
        mounted() {
            scripts.init();            
        }
    }
</script>