// Bugs
export { default as bugsReducer } from "./bugsReducer"
export {
  addTestBugsAsync,
  removeBug,
  bugsSlice,
  selectBugs,
  addBug,
  resolveBug,
  toggleResolved,
} from "./bugsReducer"

// Counter
export { default as counterReducer } from "./counterReducer"
export {
  counterSlice,
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from "./counterReducer"
