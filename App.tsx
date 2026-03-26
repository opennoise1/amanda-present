import { useState } from 'react';
import Header from './components/Header';
import Result from './components/Result';
import MainContent from './components/MainContent'
import Button from './components/Button'

const App: any = () => {
    const [question, setQuestion] = useState<number>(0);
    const [answerCorrect, setAnswerCorrect] = useState<boolean>(false);
    const [numberCorrect, setNumberCorrect] = useState<number>(0);
    const [answered, setAnswered] = useState<boolean>(false);

    const questionProps: any = { question, setQuestion, numberCorrect, setNumberCorrect, answerCorrect, setAnswerCorrect, answered, setAnswered };

    return (
        <>
            <Header />
            <MainContent {...questionProps} />
            <Button {...questionProps}/>
        </>
    )
}

export { App };