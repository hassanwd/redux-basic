const Reducer = (state=0, action) => {
    console.log("reducer is working");
    switch(action.type){
      case 'INC' : return state + 1
      case 'DEC' : return state - 1
      default : return state
    }
  }

  export default Reducer