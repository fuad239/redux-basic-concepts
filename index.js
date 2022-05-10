


// -------------------------Single Redux----------

// const redux= require('redux');

// const createStore=redux.createStore

// const BUY_CAKE="BUY_CAKE"
// function buyake(){
//     return{
//         type:BUY_CAKE,
//         info:'first redux action'
//     }
// }
// const initialState={
//     numOfCakes:10
// }
// const reducer=(state=initialState,action)=>{
//     switch (action.type) {
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes:state.numOfCakes-1
//         }
        
    
//         default : return state
           
//     }
// }
// const store=createStore(reducer)
// console.log('initial state', store.getState())
// const unsubscribe=store.subscribe(()=>console.log('updated store',store.getState()))
// store.dispatch (buyake())
// unsubscribe()





//------------Combine Reducer------------




// const redux= require('redux');

// const createStore=redux.createStore
// const combineReducer=redux.combineReducers
// const BUY_CAKE="BUY_CAKE"
// const BUY_ICECREAM="BUY_ICECREAM"
// function buyake(){
//     return{
//         type:BUY_CAKE,
//         info:'first redux action'
//     }
// }
// function buyIceCream() {
//     return{
//         type:BUY_ICECREAM
//     }
// }
// const initialCakeState={
//     numOfCakes:10
// }
// const initialIceCreamState={
//     numOfIceCreams:20
// }
// const cakeReducer=(state=initialCakeState,action)=>{
//     switch (action.type) {
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes:state.numOfCakes-1
//         }
        
    
//         default : return state
           
//     }
// }
// const iceCreamReducer=(state=initialIceCreamState,action)=>{
//     switch (action.type) {
//         case BUY_ICECREAM: return{
//             ...state,
//             numOfIceCreams:state.numOfIceCreams-1
//         }
        
    
//         default : return state
           
//     }
// }
// const rootReducer=combineReducer({
//     cake:cakeReducer,
//     iceCream:iceCreamReducer
// })
// const store=createStore(rootReducer)
// console.log('initial state', store.getState())
// const unsubscribe=store.subscribe(()=>console.log('updated store',store.getState()))
// store.dispatch (buyake())
// store.dispatch (buyIceCream())
// store.dispatch (buyake())
// store.dispatch (buyIceCream())
// unsubscribe()


//--------------------------Apply Middle War--------------
// const redux= require('redux');
// const reduxLogger=require('redux-logger')

// const createStore=redux.createStore
// const combineReducer=redux.combineReducers
// const applyMiddleware=redux.applyMiddleware
// const logger=reduxLogger.createLogger()


// const BUY_CAKE="BUY_CAKE"
// const BUY_ICECREAM="BUY_ICECREAM"
// function buyake(){
//     return{
//         type:BUY_CAKE,
//         info:'first redux action'
//     }
// }
// function buyIceCream() {
//     return{
//         type:BUY_ICECREAM
//     }
// }
// const initialCakeState={
//     numOfCakes:10
// }
// const initialIceCreamState={
//     numOfIceCreams:20
// }
// const cakeReducer=(state=initialCakeState,action)=>{
//     switch (action.type) {
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes:state.numOfCakes-1
//         }
        
    
//         default : return state
           
//     }
// }
// const iceCreamReducer=(state=initialIceCreamState,action)=>{
//     switch (action.type) {
//         case BUY_ICECREAM: return{
//             ...state,
//             numOfIceCreams:state.numOfIceCreams-1
//         }
        
    
//         default : return state
           
//     }
// }
// const rootReducer=combineReducer({
//     cake:cakeReducer,
//     iceCream:iceCreamReducer
// })
// const store=createStore(rootReducer,applyMiddleware(logger))
// console.log('initial state', store.getState())
// const unsubscribe=store.subscribe(()=>{})
// store.dispatch (buyake())
// store.dispatch (buyIceCream())
// store.dispatch (buyake())
// store.dispatch (buyIceCream())
// unsubscribe()



//---------------Async------
const redux= require('redux');
const reduxLogger=require('redux-logger')

const createStore=redux.createStore
const combineReducer=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()


const BUY_CAKE="BUY_CAKE"
const BUY_ICECREAM="BUY_ICECREAM"
function buyake(){
    return{
        type:BUY_CAKE,
        info:'first redux action'
    }
}
function buyIceCream() {
    return{
        type:BUY_ICECREAM
    }
}
const initialCakeState={
    numOfCakes:10
}
const initialIceCreamState={
    numOfIceCreams:20
}
const cakeReducer=(state=initialCakeState,action)=>{
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        
    
        default : return state
           
    }
}
const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch (action.type) {
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams:state.numOfIceCreams-1
        }
        
    
        default : return state
           
    }
}
const rootReducer=combineReducer({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store=createStore(rootReducer,applyMiddleware(logger))
console.log('initial state', store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch (buyake())
store.dispatch (buyIceCream())
store.dispatch (buyake())
store.dispatch (buyIceCream())
unsubscribe()
