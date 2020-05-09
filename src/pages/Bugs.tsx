import React from "react"
import { useBugsState } from "store/store"
import { addTestBugsAsync } from "store/reducers"
import { useDispatch } from "react-redux"
import styles from "./Bugs.module.css"
import { AddBugForm, BugItem } from "components"
import classes from "./Bugs.module.css"

interface Props {}

const Bugs = (_props: Props) => {
  const bugsState = useBugsState()
  const dispatch = useDispatch()
  const bugs = bugsState.bugs
  function addTestBugs() {
    dispatch(addTestBugsAsync(3))
  }

  return (
    <div className={classes.bugsPageContainer}>
      <h1 className={classes.title}>
        Total Bugs <span className={classes.count}>{bugs.length}</span>
      </h1>
      <div>
        <section>
          <button className={styles.asyncButton} onClick={addTestBugs}>
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
