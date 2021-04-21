<template>
  <div>
    <Detail :is-edit="false" />
  </div>
</template>

<script>
import Detail from './components/Detail'
  export default {
    name:'Create',
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
