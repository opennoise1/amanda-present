import Instructions from "./Instructions";
import Result from "./Result";
import FinalResults from "./FinalResults";
import Question from "./Question";
import { useEffect } from "react"

const MainContent = ({question, setQuestion, answered, setAnswered, 
  numberCorrect, setNumberCorrect, answerCorrect, setAnswerCorrect,
  title, setTitle, currInput, setCurrInput, categories, setCategories, isLoading}: any) => {

  const props: any = { question, setQuestion, 
    answered, setAnswered, 
    numberCorrect, setNumberCorrect, 
    currInput, setCurrInput, 
    answerCorrect, setAnswerCorrect,
    title, setTitle,
    categories, setCategories,
    isLoading,
  };

  if (question <= 0) {
    return <Instructions />;
  } else if (question >= 1 || question <= 10) {
      return answered ? <Result {...props}/> : <Question {...props}/>
  } else {
    return <FinalResults {...props}/>
  }
}

export default MainContent;