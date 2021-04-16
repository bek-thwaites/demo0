<template>
  <div id='body' class="body">
      <div class="sidebar">
        <p><a href="#/home/">菜单1</a></p>
        <p><a href="#/test">菜单2</a></p>
      </div>
      <div class="main">
          <router-view></router-view>

      </div>

    
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data() {
    return {

    };
  },
  methods: {

  }
}

</script>
<style>
.body{
    display: flex;
}
.sidebar{
    width: 210px;
}
.main{
    flex: 1;
}
</style>
