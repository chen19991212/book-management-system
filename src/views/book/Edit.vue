<template>
  <div>
    <Detail :is-edit="true" />
  </div>
</template>

<script>
import Detail from './components/Detail'
  export default {
    name:'Edit',
    components:{
      Detail
    },
    data() {
      return {

      };
    },
    methods: {

    }
};
</script>

<style scoped>

</style>
