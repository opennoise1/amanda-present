import { SyntheticEvent } from "react";

const AnswerInput = ({ setCurrInput }: any) => {
  const updateAnswer = (e: SyntheticEvent) => {
    setCurrInput((e.target as HTMLInputElement).value)
  }

  return (
    <>
      <input type="search" id="guess" onChange={updateAnswer} placeholder="Type the article title..." 
        maxLength={48} enterKeyHint="done" autoComplete="off">
      </input>
    </>
  )
}

export default AnswerInput;