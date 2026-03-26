import Instructions from "./Instructions";
import Result from "./Result";
import FinalResults from "./FinalResults";
import { Question } from "./Question";
import { useEffect, useState } from "react"

const MainContent = ({question, setQuestion, answered, setAnswered, numberCorrect, setNumberCorrect, answerCorrect, setAnswerCorrect}: any) => {
  const [currInput, setCurrInput] = useState<string>("");
  const [title, setTitle] = useState<string | null>('');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
      if (currInput == title) {
          setAnswerCorrect(true);
          setNumberCorrect(numberCorrect + 1);
      } else {
          setAnswerCorrect(false);
      }
  }, [answered]);

  const props: any = {question, setQuestion, 
    answered, setAnswered, 
    numberCorrect, setNumberCorrect, 
    currInput, setCurrInput, 
    answerCorrect, setAnswerCorrect,
    title, setTitle,
    categories, setCategories};

  if (question <= 0) {
    return <Instructions />;
  } else if (question >= 1 || question <= 10) {
      return answered ? <Result {...props}/> : <Question {...props}/>
  } else {
    return <FinalResults {...props}/>
  }
}

export default MainContent;