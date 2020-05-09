import React from "react"
import { removeBug } from "store/reducers/bugs/bugsReducer"
import { Bug } from "store/reducers/bugs/bugsReducer"
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
  return (
    <div className={classes.container}>
      <article>
        <p>{bug.title}</p>
      </article>
      <section>
        <p className={classes.reportedBy}>Reported By {bug.reporter}</p>
      </section>
      <button className={classes.deleteButton} onClick={remove}>
        Delete
      </button>
    </div>
  )
}

export default BugItem
