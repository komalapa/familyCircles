<template>
    <div class="field">
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
        width: 100%;
        height: 100%;
    }
</style>
