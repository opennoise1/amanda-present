import Question from "./Question"
import Result from "./Result"
import FinalResults from "./FinalResults"
import Instructions from "./Instructions"

const MainContent = ({question, setQuestion, answered, setAnswered, correct, setCorrect}: any) => {

  const props: any = {question, setQuestion, answered, setAnswered, correct, setCorrect};

  if (question <= 0) {
    return <Instructions />;
  } else if (question >= 1 || question <= 10) {
      return answered ? <Result {...props}/> : <Question {...props}/>
  } else {
    return <FinalResults {...props}/>
  }
}

export default MainContent;