<template>
    <header>   
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/"> 
        <b-img src="../assets/img/logovue.png" srcset="../assets/img/logovue@2x.png" fluid alt="Responsive image">
        </b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/tablelist">Table List</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" v-model="$i18n.locale" right>
            <b-dropdown-item v-for="(lang, i) in languages" :key="`lang${i}`" 
            :value="lang.code" 
            v-bind:class="{'active':true,'active':(lang.code === $i18n.locale)}">
            {{ lang.title }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </header>
</template>
<script>
export default {
  components:{},
  data() {
    return {
      languages: [
        { flag: "us", code: "en", title: "English" },
        { flag: "es", code: "es", title: "Español" },
        { flag: "fr", code: "fr", title: "Français" },
      ],
     // publicPath: process.env.BASE_URL
    };
  }, //data
    
}
</script>
<style scoped>

</style>