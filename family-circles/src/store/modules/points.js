export const pointsModule = {
    state: {
        points: [
          {id:1, title:"Lena", color: {backgroundColor:'#ee0000'}, x: 20, y: 20},
          {id:2, title:"Lev", color: {backgroundColor:'#003300'}, x: 20, y: 20},
          {id:3, title:"Vera", color: {backgroundColor:'#0000ff'}, x: 20, y: 20},
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
            state.points[point.pointID].x = point.x;
            state.points[point.pointID].y = point.y;
        }
      },
      actions: {
          

    
      },
      getters: {
        
      }
    
}
