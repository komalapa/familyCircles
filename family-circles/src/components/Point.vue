<template>
    <div class="point flex-row">
      
        <div class="flex-row">
          <span class="point-circle" v-bind:style="color"></span>
          <span v-if="!inEdit" class="point-title">{{title}}</span>
          <form v-else class="point-edit-inputs flex-row" @submit.prevent="onDone">
            <input class="point-title-input point-input" type="text"  v-model="title">
            <input class="point-color-input point-input" type="color" name="point-color" v-bind:value="color.backgroundColor" @input="color.backgroundColor = $event.target.value">
            <button class="point-edit-done point-button" @click="onDone"><font-awesome-icon icon="check" /></button>
          </form>
        </div>
        
        <button v-if="!inEdit" class="point-edit point-button" @click="onEdit"><font-awesome-icon icon="edit" /></button>
        <button class="point-delete point-button" @click="onDelete"><font-awesome-icon icon="trash-alt" /></button>
    </div>
</template>

<script>
export default {
  name: 'point',
  data:()=>({
      id: 1,
      title: '',
      color: {backgroundColor:'#555555'},
      inEdit: true
  }),
  methods:{
    onDone(){this.inEdit = false},
    onEdit(){this.inEdit = true},
    onDelete(){alert("can't remove yet")}
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
  color: #555555;
  height: 20px;
  margin-left: 5px;
  padding: 0;
}
.point-title-input{
  border-bottom: 1px solid #555555;
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
