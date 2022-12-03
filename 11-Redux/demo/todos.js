const redux = require('redux');

// STORE
const createStore = redux.createStore;

// Es recomendable almacenar los estado del type en variables para evitar posibles errores.
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO';

// VALOR INICIAL DEL ESTADO GLOBAL
const initialState = {
  todos: []
}

// REDUCER (es la unica que puede modificar/sobreescribir/generar nuevos valores para el estado global)
// state toma el valor inicial del estado.
// dispatch activa la ejecucion de esta funcion.
// esta funcion lee el ( estado global <---> lee la accion ) y evalua la propiedad type de esa accion.
// "Actualiza el estado de Store".
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((text, i) => i !== action.payload)
      }
    default:
      return state;
  }
}

// CREACION DEL STORE, a partir del metodo createStore, y se le pasa como parametro el reducer.
const store = createStore(rootReducer);

// SUBSCRIBE
// Cada vez que ocurra una actualizacion de ese estado, se ejecuta esa funcion.
// y le llega a los elementos subscritos 2"al store el stado actualizado.
store.subscribe(() => {
  console.log('Subscription: ', store.getState());
});

// ACTION CREATORS, lo unico que hacen es retornar acciones 
// (crean objetos que puede ser procesados por el reduce).
function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}
function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}

// DISPATCH
// Se encargan de mandar las ACTIONS que empezamos a realizar sobre el estado Store.
store.dispatch(addTodo('Comprar pan'))
store.dispatch(addTodo('Correr'))
console.log(store.getState()); // Subscription: { todos: ["Comprar pan", "Correr"] }

store.dispatch(removeTodo(1))
console.log(store.getState()); // Subscription: { todos: ["Comprar pan"] }

// Ej: html de como seria para agregar al estado con el click de un boton.
document
  .querySelector("#button")
  .addEventListener("click", () => store.dispatch(addTodo("Estudiar React")));

  document
  .querySelector("#incremento")
  .addEventListener("click", () => store.dispatch(incremento()));