import React from "react"
import { removeBug, toggleResolved } from "store/reducers/bugsReducer"
import { Bug } from "models"
import classes from "./BugItem.module.css"
import { useDispatch } from "react-redux"
interface Props {
  bug: Bug
}

const BugItem = ({ bug }: Props) => {
  const dispatch = useDispatch()

  function remove() {
    console.log("bug", bug.id)
    dispatch(removeBug(bug.id))
  }

  function resolve() {
    dispatch(toggleResolved(bug.id))
  }
  return (
    <div className={classes.container}>
      <article className={classes.titleArticle}>
        <p>
          <span className={classes.bugID}>{bug.id}:</span>{" "}
          <span
            style={{
              whiteSpace: "nowrap",
              WebkitTextStroke: "thin",
              textDecoration: bug.resolved ? "line-through" : "none",
            }}
          >
            {bug.title}
          </span>
        </p>
      </article>
      <section>
        <p className={classes.reportedBy}>Reported By {bug.reporter}</p>
      </section>
      <div className={classes.actions}>
        <button className={classes.deleteButton} onClick={remove}>
          Delete
        </button>
        <button className={classes.resolveButton} onClick={resolve}>
          {bug.resolved ? "Unresolve" : "Resolve"}
        </button>
      </div>
    </div>
  )
}

export default BugItem
