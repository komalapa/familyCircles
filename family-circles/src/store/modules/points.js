export const pointsModule = {
    state: {
        points: [
          {id:0, title:"Lena", color: {backgroundColor:'#ee0000'}, position:{top: '20%', left: '20%'}},
          {id:1, title:"Lev", color: {backgroundColor:'#003300'}, position:{top: '30%', left: '20%'}},
          {id:2, title:"Vera", color: {backgroundColor:'#0000ff'}, position:{top: '40%', left: '20%'}},
        ],
      },
      // {title:'', color:{backgroundColor:''}, inEdit: true, x: 0, y: 0, }
      mutations: {
        addPoint(state, point) {
          point.pointID = state.points.length;
          state.points.push(point);
        },
        delete(state, pointID) {
          state.points.splice(pointID,1)
        },
        movePoint(state, point){
            //console.log (state.points,point)
            state.points[point.id].position.left = point.position.left;
            state.points[point.id].position.top = point.position.top;
        }
      },
      actions: {
          

    
      },
      getters: {
        
      }
    
}
