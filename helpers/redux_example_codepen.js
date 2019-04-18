console.clear();

//form drop action creator
const createPolicy = (name, amount) => {
  return({
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
  }
  });
}

//policy delete action creator
const deletePolicy = (name) => {
  return ({
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  });
}

//policy create claim action creator
const createClaim = (name, amountToCollect) => {
  return({
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountToCollect: amountToCollect
    }
  });
}

//REDUCERS

const claimsHistory = (state = [], action) => {
  if (action.type == 'CREATE_CLAIM') {
    return [...state, action.payload]
  }
  
  return state;
}

const accounting = (state = 100, action) => {
    if (action.type == 'CREATE_CLAIM') {
      return state - action.payload.amountToCollect
    }
  
    if (action.type == 'CREATE_POLICY') {
      return state + action.payload.amount;
    }
  
  return state;
}

const policies = (state = [], action) => {
  if (action.type == 'CREATE_POLICY') {
      return [...state, action.payload.name];
   }
  
    if (action.type == 'DELETE_POLICY') {
      return state.filter(name => name !== action.payload.name);
   }
  
  return state;
}

//store
const {createStore, combineReducers} = Redux;
const ourDepartments = combineReducers({
  claimsHistory: claimsHistory,
  accounting: accounting,
  policies: policies
});

const store = createStore(ourDepartments);

//policies
store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

//claims
store.dispatch(createClaim('Alex', 80));
store.dispatch(createClaim('Jim', 60));

//delete policy
store.dispatch(deletePolicy('Jim'));

console.log(store.getState());


