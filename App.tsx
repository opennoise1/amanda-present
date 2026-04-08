import { useState, useEffect } from 'react';
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
    5: [83688, ["Beyoncé", "Beyonce Knowles"]],
    6: [22847481, ["Seminole Hard Rock Hotel & Casino Hollywood", "The Guitar Hotel", "Guitar Hotel", "Seminole Hard Rock Hotel"]],
    7: [649382, ["Pareidolia"]],
    8: [47150958, ["Imperator Furiosa", "Furiosa"]],
    9: [4848143, ["New York Yankees", "NY Yankees", "Yankees"]],
    10: [13075446, ["HEALTH"]],
}

const QuestionPagesDayTwo: { [key: number] : [number, string[]] } = {
    1: [398837, ["Darren Hayes", "Hayes"]],
    2: [148858, ["Kakigori"]],
    3: [72908535, ["Rick Glassman", "Glassnman"]],
    4: [82754308, ["Rachel Kaly", "Kaly"]],
    5: [55624408, ["Always Ascending"]],
    6: [52371022, ["Weyes Blood"]],
    7: [42250917, ["Tauba Auerbach", "Auerbach"]],
    8: [20448, ["Museum of Jurassic Technology", "The Museum of Jurassic Technology"]],
    9: [1281638, ["Ways of Seeing"]],
    10: [180432, ["Hollywood Forever Cemetery", "Hollywood Forever"]],
}

const QuestionPagesDayThree: { [key: number] : [number, string[]] } = {
    1: [17486994, ["The Mole", "Mole"]],
    2: [66445438, ["Brad Mondo", "Mondo"]],
    3: [4911224, ["CityPlace", "The Square", "Rosemary Square"]],
    4: [2139688, ["Dobermann", "Doberman Pinscher"]],
    5: [1120742, ["Artichoke"]],
    6: [5865828, ["Pieces of the People We Love", "POTPWL"]],
    7: [48549205, ["The Great Pottery Throw Down", "Great Pottery Throw Down"]],
    8: [347781, ["Parsons School of Design", "The Parsons School of Design", "Parsons"]],
    9: [621798, ["Jah Wobble"]],
    10: [699466, ["Habbo", "Habbo Hotel"]]
}

const getTodaysQuestions = () => {
    const today: Date = new Date();
    const month: string = (today.getMonth() + 1).toString(); // Account for index
    const day: string = today.getDate().toString();
    const monthDay = month + day;

    switch(monthDay) {
        case "48": return QuestionPages;
        case "49": return QuestionPagesDayTwo;
        case "410": return QuestionPagesDayThree;
        default: return QuestionPages;
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