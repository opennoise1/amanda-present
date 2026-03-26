import { Question } from "./Question"
import Result from "./Result"
import FinalResults from "./FinalResults"
import Instructions from "./Instructions"
import { useState } from "react"

const MainContent = ({question, setQuestion, answered, setAnswered, numberCorrect, setNumberCorrect, answerCorrect, setAnswerCorrect}: any) => {
  const [currInput, setCurrInput] = useState<string>("");

  const props: any = {question, setQuestion, answered, setAnswered, numberCorrect, setNumberCorrect, currInput, setCurrInput, answerCorrect, setAnswerCorrect};

  if (question <= 0) {
    return <Instructions />;
  } else if (question >= 1 || question <= 10) {
      return answered ? <Result {...props}/> : <Question {...props}/>
  } else {
    return <FinalResults {...props}/>
  }
}

export default MainContent;