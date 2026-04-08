import AnswerInput from "./AnswerInput";
import levenshtein from 'damerau-levenshtein';

const Button = ({question, setQuestion, answered, setAnswered, title, setAnswerCorrect, setNumberCorrect, numberCorrect, currInput, setCurrInput, setSkipped, results, setResults, questionSkips, setQuestionSkips}: any) => {
  
  const props: any = { question, setQuestion, currInput, setCurrInput, results, setResults,
     questionSkips, setQuestionSkips };

  const nextQuestion = () => {
    setQuestion(question + 1);
  }

  const checkAnswer = () => {
    const newResults = results;
    let correct: boolean = false;

    for (let i = 0; i < title.length; i++) {
      const currLev = levenshtein(currInput.toLowerCase(), title[i].toLowerCase());
      if (currLev.steps <= 3) { correct = true; break; }
    }

    if (correct) {
      setAnswerCorrect(true);
      newResults.push(true);
      setResults(newResults);
      setNumberCorrect(numberCorrect + 1);
      return;
    }

    newResults.push(false);
    setResults(newResults);
    setAnswerCorrect(false);
  }

  const toggleAnswered = (bool: boolean) => {
    if (answered) {
      setAnswered(false)
    } else {
      setSkipped(bool);
      const newSkips = questionSkips;
      newSkips.push(bool);
      setQuestionSkips(newSkips);
      setAnswered(true);
    }
  }

  const nextQuestionAndToggleAnswered = () => {
    nextQuestion();
    toggleAnswered(false);
  }

  const checkAnswerAndToggleAnswered = () => {
    checkAnswer();
    toggleAnswered(false);
  }

  const skipQuestion = () => {
    toggleAnswered(true);
    setAnswerCorrect(false);

    const newResults = results;
    newResults.push(false);
    setResults(newResults);
  }

  if (question <= 0) {
    return (
    <>
      <button onClick={nextQuestion} className='fontSans navButton'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" 
        viewBox="0 0 24 24" aria-hidden="true" className="inline">
          <path fill="currentColor" fillRule="evenodd" d="M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75" clipRule="evenodd">
          </path>
        <path fill="currentColor" d="M5.25 12c0 1.178.302 2.286.833 3.25H2a.75.75 0 0 0 0 1.5h9.25v-4.94l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v4.94H22a.75.75 0 0 0 0-1.5h-4.083A6.75 6.75 0 1 0 5.25 12">
        </path>
        </svg>
        Play today
      </button>
    </>
    )
  } else if (question > 0 && question < 10) {
    if (!answered) {
      return (
        <div id="questionInterface">
          <button id="skipButton" className="submitButton" onClick={skipQuestion}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
              <path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8.97-3.53a.75.75 0 1 0-1.06 1.06L14.44 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06zm-5.06 0a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L10.44 12 7.97 9.53a.75.75 0 0 1 0-1.06" clipRule="evenodd">
              </path>
            </svg>
          </button>
          <AnswerInput {...props} />
          <button id="submitButton" className="submitButton" onClick={checkAnswerAndToggleAnswered}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
              <path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clipRule="evenodd">
              </path>
            </svg>
          </button>
        </div>
      )
    } else {
        return (
          <>
            <button id="nextButton" onClick={nextQuestionAndToggleAnswered} className='fontSans navButton'>
              <svg id="nextIcon" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" 
              viewBox="0 0 24 24" aria-hidden="true" className="inline">
                <path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m.47-13.53a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 0-1.06" clipRule="evenodd">
                </path>
              </svg>
              Next
            </button>
          </>
      )
    }
  } else {
    if (!answered) {
      return (
        <div id="questionInterface">
          <button id="skipButton" className="submitButton" onClick={skipQuestion}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
              <path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8.97-3.53a.75.75 0 1 0-1.06 1.06L14.44 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06zm-5.06 0a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L10.44 12 7.97 9.53a.75.75 0 0 1 0-1.06" clipRule="evenodd">
              </path>
            </svg>
          </button>
          <AnswerInput {...props} />
          <button id="submitButton" className="submitButton" onClick={checkAnswerAndToggleAnswered}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
              <path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clipRule="evenodd">
              </path>
            </svg>
          </button>
        </div>
      )
    } else {
      return (
        <>
          <button id="resultsButton" onClick={nextQuestionAndToggleAnswered} className='fontSans navButton'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-14 w-14 sm:h-20 sm:w-20">
              <path fill="currentColor" fillRule="evenodd" d="M8.048 2.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 0 1 1.166-.944l.708.875 3.697-3.451a.75.75 0 0 1 1.06.036M11.25 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M8.048 9.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875 3.697-3.451a.75.75 0 0 1 1.06.036M11.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75m-3.202 4.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875 3.697-3.451a.75.75 0 0 1 1.06.036M11.25 19a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75" clipRule="evenodd">
              </path>
            </svg>
            Results
          </button>
        </>
      )
    }
  }
}

export default Button;