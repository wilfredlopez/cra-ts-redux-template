import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "../../store"

export interface Bug {
  id: string
  title: string
  reporter: string
  date: string
}
interface BugsState {
  bugs: Bug[]
}

const testBug: Bug = {
  id: "test-1",
  date: new Date().toISOString(),
  reporter: "Wilfred",
  title: "Main menu doesnt open",
}

const initialState: BugsState = {
  bugs: [testBug],
}

export const bugsSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    addBug: (state, action: PayloadAction<Omit<Bug, "date" | "id">>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const date = new Date()
      const newBug: Bug = {
        ...action.payload,
        date: date.toDateString(),
        id: "bug-" + state.bugs.length + Math.random() + date.getTime(),
      }
      const bugs = state.bugs.concat(newBug)
      state.bugs = bugs
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    removeBug: (state, action: PayloadAction<{ id: string }>) => {
      state.bugs = state.bugs.filter((b) => b.id !== action.payload.id)
    },
  },
})

const bugActions = bugsSlice.actions
export const { addBug, removeBug } = bugActions

export type BugsActions = typeof bugActions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const addTestBugsAsync = (amount: number): AppThunk => (dispatch) => {
  setTimeout(() => {
    Array.from({ length: amount }, () => testBug).forEach((testBug, index) => {
      const bug = {
        ...testBug,
        id: index + "test-gen-bug",
      }
      dispatch(addBug(bug))
    })
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBugs = (state: RootState) => state.bugs.bugs

export default bugsSlice.reducer
