import React from "react"
import { addBug } from "store/reducers/bugs/bugsReducer"
import classes from "./addBugForm.module.css"
import { useDispatch } from "react-redux"
interface Props {}

const AddBugForm = (props: Props) => {
  const titleRef = React.useRef<HTMLInputElement>(null)
  const reporterRef = React.useRef<HTMLInputElement>(null)
  const [error, setError] = React.useState("")
  const dispatch = useDispatch()
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const title = titleRef.current!.value
    const reporter = reporterRef.current!.value

    if (title.trim() === "" || reporter.trim() === "") {
      setError("Both fields are required.")
      titleRef.current!.focus()
      return
    } else {
      if (error !== "") {
        setError("")
      }
    }

    const newBug = {
      title,
      reporter,
    }

    dispatch(addBug(newBug))
    titleRef.current!.value = ""
    reporterRef.current!.value = ""
    titleRef.current!.focus()
  }

  return (
    <form
      className={classes.formContainer}
      onSubmit={handleSubmit}
      id="add-bug-form"
    >
      <h4>Report Bugs</h4>
      <div className={classes.formControl}>
        <label htmlFor="title">Bug Title</label>
        <input id="title" placeholder="title" ref={titleRef}></input>
      </div>
      <div className={classes.formControl}>
        <label htmlFor="reporter">Reporter</label>
        <input id="reporter" placeholder="reporter" ref={reporterRef}></input>
      </div>
      <div>
        <p className={classes.errorText}>{error}</p>
      </div>
      <div className={classes.formActions}>
        <button className={classes.button}>Add</button>
      </div>
    </form>
  )
}

export default AddBugForm
