import { useEffect } from "react";
import AnswerInput from "./AnswerInput";
import wtf from "wtf_wikipedia";

const QuestionPages: { [key: number] : [number, string] } = {
    // Question number: [Wikipedia Page ID, [Title Options]]
    1: [1485962, "The Mask"],
    2: [537416, "Ace Ventura: When Nature Calls"],
    3: [1042287, "Campari"],
    4: [27929, "Scrabble"],
    5: [83688, "Beyonce"],
    6: [22847481, "Seminole Hard Rock Hotel & Casino Hollywood"],
    7: [649382, "Pareidolia"],
    8: [47150958, "Imperator Furiosa"],
    9: [4848143, "New York Yankees"],
    10: [72908535, "Rick Glassman"],
    11: [398837, "Darren Hayes"],
}

const Question = ({ question, setQuestion, currInput, setCurrInput, numberCorrect, setNumberCorrect, setAnswerCorrect, answered, setTitle, categories, setCategories }: any ) => {
    
    useEffect(() => {
        setTitle(QuestionPages[question][1]);
    }, [question])

    useEffect(() => {   
        const fetchWikiPage = async (): Promise<void> => {
            try {
                const page: wtf.Document | null = await wtf.fetch(QuestionPages[question][0]);
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