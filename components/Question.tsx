import AnswerInput from "./AnswerInput";

const Question = ({ question, setQuestion, currInput, setCurrInput, categories, isLoading }: any ) => {
    
    const props: any = { question, setQuestion, currInput, setCurrInput };

    if (isLoading) {
        return <p>Loading categories...</p>
    } else {
        return (
            <>
                <ul>
                    {categories[question].map((category: string, index: number) => { 
                        return <span><li key={'cat' + index} id={'cat' + index}>{category + " ✦ "}</li></span>
                    })}
                </ul>
                <AnswerInput {...props} />
            </>
        )
    }
}

export default Question;