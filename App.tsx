import { useState } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Result from './components/Result';
import MainContent from './components/MainContent'
import Button from './components/Button'

const App: any = () => {
    const [question, setQuestion] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);
    const [answered, setAnswered] = useState<boolean>(false);

    const questionProps: any = { question, setQuestion, correct, setCorrect, answered, setAnswered };

    return (
        <>
            <Header />
            <MainContent {...questionProps} />
            <Button {...questionProps}/>
        </>
    )
}

export { App };