import React from "react"
import { useStoreState } from "store/store"
import { addTestBugsAsync } from "store/reducers"
import { useDispatch } from "react-redux"
import styles from "./Bugs.module.css"
import { AddBugForm, BugItem } from "components"
import classes from "./Bugs.module.css"

interface Props {}

const Bugs = (props: Props) => {
  const state = useStoreState()
  const dispatch = useDispatch()

  function addTestSongs() {
    dispatch(addTestBugsAsync(5))
  }

  const bugs = state.bugs.bugs

  return (
    <div>
      <h1 className={classes.title}>
        Total Bugs{" "}
        <span className={classes.count}>{state.bugs.bugs.length}</span>
      </h1>
      <div>
        <section>
          <button className={styles.asyncButton} onClick={addTestSongs}>
            Add Test Bugs Async
          </button>
        </section>
        <section>
          <AddBugForm />
        </section>
        <section className={classes.bugsSection}>
          {bugs.map((b) => {
            return <BugItem key={b.id} bug={b} />
          })}
        </section>
      </div>
    </div>
  )
}

export default Bugs
