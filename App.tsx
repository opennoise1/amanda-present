import { useState, useEffect, use } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent'
import Button from './components/Button'
import wtf from 'wtf_wikipedia';

const QuestionPages: { [key: number] : [number, string[]] } = {
    // Question number: [Wikipedia Page ID, [Title Options]]
    1: [1485962, ["The Mask", "Mask",]],
    2: [537416, ["Ace Ventura: When Nature Calls", "Ace Ventura 2", "Ace Ventura 2: When Nature Calls", "Ace Ventura When Nature Calls"]],
    3: [1042287, ["Campari"]],
    4: [27929, ["Scrabble"]],
    5: [83688, ["Beyoncé", "Beyonce"]],
    6: [22847481, ["Seminole Hard Rock Hotel & Casino Hollywood", "The Guitar Hotel", "Guitar Hotel", "Seminole Hard Rock Hotel"]],
    7: [649382, ["Pareidolia", "Paradolia", "Paredolia", "Paridoliea"]],
    8: [47150958, ["Imperator Furiosa", "Furiosa"]],
    9: [4848143, ["New York Yankees", "NY Yankees", "N.Y. Yankees", "Yankees"]],
    10: [72908535, ["Rick Glassman"]],
    // 11: [398837, ["Darren Hayes", "Daren Hayes"]],
    // 12: [148858, ["Kakigori"]],
}

const App: any = () => {
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

    useEffect(() => {
        if (question > 0 && question <= 10) { 
            setTitle(QuestionPages[question][1]); 
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
                for (let i = 1; i <= Object.keys(QuestionPages).length; i++) {
                    const page: wtf.Document | null = await wtf.fetch(QuestionPages[i][0]);
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
    }, []);

    const questionProps: any = { question, setQuestion, numberCorrect, setNumberCorrect, 
        answerCorrect, setAnswerCorrect, answered, setAnswered, currInput, setCurrInput, 
        title, setTitle, categories, setCategories, isLoading, images, skipped, setSkipped, 
        intros, url, results, setResults, questionSkips, setQuestionSkips };

    return (
        <div id='everything'>
            <div className='columns'></div>
            <div id="app">
                <Header />
                <MainContent {...questionProps} />
                {question <= 10 ? <Button {...questionProps}/> : <></>}
            </div>
            <div className='columns'></div>
        </div>
    )
}

export { App, QuestionPages };