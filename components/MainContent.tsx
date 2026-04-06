import Instructions from "./Instructions";
import Result from "./Result";
import FinalResults from "./FinalResults";
import Question from "./Question";

const MainContent = ({question, setQuestion, answered, setAnswered, 
  numberCorrect, setNumberCorrect, answerCorrect, setAnswerCorrect,
  title, setTitle, currInput, setCurrInput, categories, setCategories, 
  isLoading, skipped, setSkipped, images, intros, url, 
  questionSkips, todaysQuestions, results}: any) => {

  const props: any = { question, setQuestion, 
    answered, setAnswered, 
    numberCorrect, setNumberCorrect, 
    currInput, setCurrInput, 
    answerCorrect, setAnswerCorrect,
    title, setTitle,
    categories, setCategories,
    isLoading, images,
    skipped, setSkipped,
    intros, url, questionSkips,
    todaysQuestions, results
  };

  if (question <= 0) {
    return <div id="mainContent"><Instructions /></div>
  } else if (question >= 1 && question <= 10) {
      return answered ? <div id="mainContent"><Result {...props}/></div> : <div id="mainContent"><Question {...props}/></div>
  } else {
    return <div id="mainContent"><FinalResults {...props}/></div>
  }
}

export default MainContent;