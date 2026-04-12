import { SyntheticEvent } from "react";
import allQuestions from "../utils/Questions";

const Archive = ({archive, setArchive, setQuestion, setQuestionSkips, setResults, setNumberCorrect, setTodaysQuestions}: any) => {

    const setDay = (i: number, e: SyntheticEvent): void => {
        setTodaysQuestions(allQuestions[i]);
        setQuestion(1);
        setNumberCorrect(0);
        setQuestionSkips([]);
        setResults([]);
        archive ? setArchive(false) : setArchive(true);
    }

  return (
    <div id="archive">
      {allQuestions.map((questions: any, index: number) => {
        return (
          <button onClick={(e: SyntheticEvent) => setDay(index, e)} key={"day" + (index + 1)} id={"day" + (index + 1)} className="archiveDays">
            <div>Day {index + 1}</div>
          </button>
        )
      })}
    </div>
  )
}

export default Archive;