import { useEffect, useState } from "react";
import AnswerInput from "./AnswerInput";
import wtf from "wtf_wikipedia";

const QuestionPages: { [key: number] : number } = {
    // Question number: Wikipedia Page ID
    1: 1485962, // The Mask
    2: 537416, // Ace Ventura: When Nature Calls
    3: 1042287, // Campari
    4: 27929, // Scrabble
    5: 83688, // Beyonce
    6: 22847481, // Guitar Hotel
    7: 649382, // Pareidolia
    8: 47150958, // Imperator Furiosa
    9: 4848143, // New York Yankees
    10: 72908535, // Rick Glassman
    11: 398837, // Darren Hayes
    // Specific casino?
    // The Florida Project
    // PinkPantheress
    // Tim Heidecker?
}

const Question = ({ question, setQuestion, currInput, setCurrInput, numberCorrect, setNumberCorrect, answerCorrect, setAnswerCorrect, answered }: any ) => {
    const [title, setTitle] = useState<string | null>('');
    const [categories, setCategories] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (currInput == QuestionPages[question]) {
            setAnswerCorrect(true);
            setNumberCorrect(numberCorrect + 1);
        } else {
            setAnswerCorrect(false);
        }
    }, [answered]);

    useEffect(() => {   
        const fetchWikiPage = async (): Promise<void> => {
            try {
                const page: wtf.Document | null = await wtf.fetch(QuestionPages[question]);
                if (page) { 
                    setTitle(page.title()); 
                    setCategories(page.categories());
                }
            } catch (error: unknown) {
                console.error("Error fetching Wikipedia page");
            }
        }

        fetchWikiPage();
    }, [question]);

    const props: any = { question, setQuestion, currInput, setCurrInput };

    return (
        <>
            <div id='title'>{title}</div>
            <ul>
                {categories.map((category: string, index: number) => { 
                    return <span><li key={'cat' + index} id={'cat' + index}>{category + " ✦ "}</li></span>
                })}
            </ul>
            <AnswerInput {...props} />
        </>
    )
}

export { Question, QuestionPages };