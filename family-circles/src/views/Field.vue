<template>
    <div class="field field-circle" >
      <input type="checkbox" name="textVisability" id="textVisability" v-model="textVisability">
      <Point v-for="point in this.$store.state.pointsModule.points" v-bind:key="point.id" v-bind:point = "point" v-bind:textVisability ="textVisability"/>
        
        
    </div>
</template>

<script>
import Point from '@/components/Point'
export default {
  components: { Point },
  name: 'point',
  data:()=>({
      textVisability: true
  }),
  methods:{
    onDelete(){alert("can't remove yet")}
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .field{
        width: 900px;
        height: 900px;
        background-color: ivory;
        position: relative;
    }
    .field-circle{
      background: radial-gradient(transparent 0 50%, #9198e5 50% 51%, transparent 51% 100%);
    }
</style>
