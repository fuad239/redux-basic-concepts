const redux= require('redux');

const createStore=redux.createStore

const BUY_CAKE="BUY_CAKE"
function buyake(){
    return{
        type:BUY_CAKE,
        info:'first redux action'
    }
}
const initialState={
    numOfCakes:10
}
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        
    
        default : return state
           
    }
}
const store=createStore(reducer)
console.log('initial state', store.getState())
const unsubscribe=store.subscribe(()=>console.log('updated store',store.getState()))
store.dispatch (buyake())
unsubscribe()
