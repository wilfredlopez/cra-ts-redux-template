import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { counterReducer, bugsReducer, selectCount } from "store/reducers/"
import { useSelector, useDispatch } from "react-redux"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bugs: bugsReducer,
  },
})

export const useStoreState = () =>
  useSelector<RootState, RootState>((state) => state)

export const useBugsState = () =>
  useSelector<RootState, BugsState>((state) => state.bugs)

export const useCountState = () => useSelector(selectCount)
export type BugsState = ReturnType<typeof bugsReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const useThunkDispatch = () => useDispatch<typeof store.dispatch>()
