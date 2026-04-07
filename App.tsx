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
}

const QuestionPagesDayTwo: { [key: number] : [number, string[]] } = {
    1: [398837, ["Darren Hayes", "Daren Hayes", "Darren Heyes", "Daren Heyes"]],
    2: [148858, ["Kakigori"]],
    3: [13075446, ["HEALTH"]],
    4: [82754308, ["Rachel Kaly"]],
    5: [55624408, ["Always Ascending"]],
    6: [52371022, ["Weyes Blood"]],
    7: [42250917, ["Tauba Auerbach", "Auerbach"]],
    8: [20448, ["Museum of Jurassic Technology", "The Museum of Jurassic Technology"]],
    9: [621798, ["Jah Wobble"]],
    10: [180432, ["Hollywood Forever Cemetery", "Hollywood Forever", "Hollywood Forever Cemetary"]],
}

const QuestionPagesDayThree: { [key: number] : [number, string[]] } = {
    1: [17486994, ["The Mole", "Mole"]],
}

const App: any = () => {
    const [todaysQuestions, setTodaysQuestions] = useState<any>({});
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

    const determineDate = () => {
        const today: Date = new Date();
        const day: string = today.getDate().toString();
        const month: string = today.getMonth.toString() + 1; // Account for index
        const dayMonth = day + month;

        switch(dayMonth) {
            case "48": setTodaysQuestions(QuestionPages); break;
            case "49": setTodaysQuestions(QuestionPagesDayTwo); break;
            case "410": setTodaysQuestions(QuestionPagesDayThree); break;
            default: setTodaysQuestions(QuestionPages); break;
        }
    }

    useEffect(() => {
        if (question > 0 && question <= 10) { 
            setTitle(todaysQuestions[question][1]); 
        }
    }, [question])

    useEffect(() => {
        determineDate();

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
        intros, url, results, setResults, questionSkips, setQuestionSkips, todaysQuestions };

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

export default App;