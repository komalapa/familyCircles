<template>
    <div class="point-wrp flex-row" v-bind:style='point.position' draggable="true" @dragstart="onDrag" @dragend="onDrop">
      
        <div class="flex-row">
          <span class="point-circle" v-bind:style="point.color"></span>
          <div v-if="textVisability" class="point-info flex-row">
            <span v-if="!inEdit" class="point-title">{{point.title}}</span>
            <form v-else class="point-edit-inputs flex-row" @submit.prevent="onDone">
              <input class="point-title-input point-input" type="text"  v-model="point.title">
              <input class="point-color-input point-input" type="color" name="point-color" v-bind:value="point.color.backgroundColor" @input="point.color.backgroundColor = $event.target.value">
              <button class="point-edit-done point-button" type="submit" ><font-awesome-icon icon="check" /></button>
            </form>
            <button v-if="!inEdit" class="point-edit point-button" @click="onEdit"><font-awesome-icon icon="edit" /></button>
            <button class="point-delete point-button" @click="onDelete"><font-awesome-icon icon="trash-alt" /></button>
          </div>
        </div>
          
          
    </div>
</template>

<script>
export default {
  name: 'point',
  props:[
    'point',
    'textVisability'
  ],
  data:()=>({
      inEdit: true,
      dx: 0,
      dy: 0,
  }),
  methods:{
    onDone(){this.inEdit = false; console.log(this.point)},//console.log(this.$store.state.pointsModule.points)
    onEdit(){this.inEdit = true},
    onDelete(){alert("can't remove yet")},
    onDrag(e){
      //let movedPoint = {...this.point, position:{top:e.y+'px', left:e.x+'px'}}
      //console.log(e.offsetY,e.offsetX)
      this.dx=e.offsetX;
      this.dy=e.offsetY;
      //this.$store.commit('movePoint', movedPoint)
    },
    onDrop(e){
      let movedPoint = {...this.point, position:{top:(e.y - this.dy)+'px', left:(e.x - this.dx)+'px'}}
      //console.log(e)
      this.$store.commit('movePoint', movedPoint)
    },
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flex-row{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.flex-column{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.point-wrp{
  position: absolute;
}
.point-circle{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin: 5px;
}
.point-button, .point-input{
  background-color: transparent;
  border: none;
  color: #aaaaaa;
  height: 20px;
  margin-left: 5px;
  padding: 0;
}
.point-title-input{
  border-bottom: 1px solid #555555;
  font-size: 14px;
  font-style: italic;
  color: #555555;
}
.point-title{
  font-size: 14px;
  font-style: italic;
}
.point-button:hover{
  color: #333333;
}
.point-button:focus, .point-input:focus {
  outline: 1px solid #555555;
}
.point-color-input{
  width: 20px;
  height: 24px;
  
  padding: 0;
  background-color: transparent;
}
</style>
