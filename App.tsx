import { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent'
import Button from './components/Button'
import allQuestions from './utils/Questions';
import wtf from 'wtf_wikipedia';

const getTodaysQuestions = () => {
    const today: Date = new Date();
    const month: string = (today.getMonth() + 1).toString(); // Account for index
    const day: string = today.getDate().toString();
    const monthDay = month + day;

    switch(monthDay) {
        case "48": return allQuestions[0];
        case "49": return allQuestions[1];
        case "410": return allQuestions[2];
        case "411": return allQuestions[3];
        case "54": return allQuestions[4];
        case "725": return allQuestions[5];
        case "726": return allQuestions[5]; // In case Iris doesn't look at it until the day after her birthday
        default: return allQuestions[5];
    }
}

const App: any = () => {
    const [todaysQuestions, setTodaysQuestions] = useState<any>(getTodaysQuestions());
    const [question, setQuestion] = useState<number>(0);
    const [answerCorrect, setAnswerCorrect] = useState<boolean>(false);
    const [numberCorrect, setNumberCorrect] = useState<number>(0);
    const [answered, setAnswered] = useState<boolean>(false);
    const [currInput, setCurrInput] = useState<string>("");
    const [title, setTitle] = useState<string[]>([""]);
    const [categories, setCategories] = useState<string[][]>([[""]]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [skipped, setSkipped] = useState<boolean>(false);
    const [images, setImages] = useState<string[]>([""]);
    const [intros, setIntros] = useState<string[]>([""]);
    const [url, setUrl] = useState<string[]>([""]);
    const [results, setResults] = useState<boolean[]>([]);
    const [questionSkips, setQuestionSkips] = useState<boolean[]>([]);
    const [archive, setArchive] = useState<boolean>(false);

    useEffect(() => {
        if (question > 0 && question <= 10) { 
            setTitle(todaysQuestions[question][1]); 
        }
    }, [question])

    useEffect(() => {
        const fetchWikiPage = async (): Promise<void> => {
            try {
                setIsLoading(true);
                const allCats: string[][] = [[""]];
                const allImageURLs: string[] = [""];
                const allIntros: string[] = [""];
                const allURLs: any = [""];
                for (let i = 1; i <= Object.keys(todaysQuestions).length; i++) {
                    const page: any = await wtf.fetch(todaysQuestions[i][0]);
                    if (page) { 
                        allCats.push(page.categories());
                        allImageURLs.push(page.images()?.[0]?.thumbnail());
                        allIntros.push(page.paragraphs()[0].text());
                        allURLs.push(page.url());
                    }
                }
                setCategories(allCats);
                setImages(allImageURLs);
                setIntros(allIntros);
                setUrl(allURLs);
                setIsLoading(false);
            } catch (error: unknown) {
                console.error("Error fetching Wikipedia page");
            }
        }

        fetchWikiPage();
    }, [todaysQuestions]);

    const questionProps: any = { question, setQuestion, numberCorrect, setNumberCorrect, 
        answerCorrect, setAnswerCorrect, answered, setAnswered, currInput, setCurrInput, 
        title, setTitle, categories, setCategories, isLoading, images, skipped, setSkipped, 
        intros, url, results, setResults, questionSkips, setQuestionSkips, todaysQuestions, 
        setTodaysQuestions, archive, setArchive };

    return (
        <div id='everything'>
            <div className='columns'></div>
            <div id="app">
                <Header {...questionProps} />
                <MainContent {...questionProps} />
                {(question <= 10 && !archive) ? <Button {...questionProps}/> : <></>}
            </div>
            <div className='columns'></div>
        </div>
    )
}

export default App;