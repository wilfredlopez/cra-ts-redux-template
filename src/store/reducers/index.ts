// Bugs
export { default as bugsReducer } from "./bugs/bugsReducer"
export {
  addTestBugsAsync,
  removeBug,
  bugsSlice,
  selectBugs,
  addBug,
} from "./bugs/bugsReducer"

// Counter
export { default as counterReducer } from "./counter/counterSlice"
export {
  counterSlice,
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from "./counter/counterSlice"
