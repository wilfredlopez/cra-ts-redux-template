import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "../../store"

export interface Bug {
  id: string
  title: string
  reporter: string
  date: string
  resolved: boolean
}
interface BugsState {
  bugs: Bug[]
}

const testBug: Bug = {
  id: "test-1",
  date: new Date().toISOString(),
  reporter: "Wilfred",
  title: "Main menu doesnt open",
  resolved: false,
}

const initialState: BugsState = {
  bugs: [testBug],
}

export const bugsSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    BudAdded: (state, action: PayloadAction<Bug>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      const bugs = state.bugs.concat(action.payload)
      state.bugs = bugs
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    BugRemoved: (state, action: PayloadAction<{ id: string }>) => {
      state.bugs = state.bugs.filter((b) => b.id !== action.payload.id)
    },
  },
})

const bugActions = bugsSlice.actions
//private actions is prefered. that's why im not exporting it
const { BugRemoved, BudAdded } = bugActions

export type BugsActions = typeof bugActions

// Actions to export

export const addTestBugsAsync = (amount: number): AppThunk => (dispatch) => {
  setTimeout(() => {
    Array.from({ length: amount }, () => testBug).forEach((testBug, index) => {
      const bug = {
        ...testBug,
        id: index + "test-gen-bug",
      }

      dispatch(BudAdded(bug))
    })
  }, 1000)
}

export const addBug = (bug: Pick<Bug, "title" | "reporter">): AppThunk => (
  dispatch,
) => {
  const date = new Date()
  const newBug: Bug = {
    ...bug,
    date: date.toDateString(),
    resolved: false,
    id: "bug-" + date.getTime(),
  }
  dispatch(BudAdded(newBug))
}

export const removeBug = (id: string): AppThunk => (dispatch) => {
  dispatch(
    BugRemoved({
      id: id,
    }),
  )
}
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBugs = (state: RootState) => state.bugs.bugs
//example use:
//const bugs = useSelector(selectBugs)

export default bugsSlice.reducer
