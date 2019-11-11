
<template>
  <div>
    
  <v-toolbar>
      <v-btn icon v-if="$route.name !== 'home'" @click="$router.go(-1) ">
          <v-icon>$back</v-icon>
      </v-btn>
      <v-toolbar-title>
        <span>CropChien</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <!-- <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn> -->
      </template>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
      <!-- <v-btn class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn> -->
      <!-- <v-icon>$vuetify.icons.usuario</v-icon>
      <v-icon v-text="'$usuario'"></v-icon>
      <v-icon>$usuario</v-icon> -->
    </v-content>
  </div>
    

</template>

<script>
import Home from './components/Home'
export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>