import AnswerInput from "./AnswerInput";

const Question = ({ question, categories, isLoading, title }: any ) => {
    
    if (isLoading) {
        return <p>Loading categories...</p>
    } else {
        return (
            <div id="questionDiv">
                <div id="questionDirection" className="fontSans">GUESS THE ARTICLE FROM ITS CATEGORIES</div>
                <ul id="catContainer">
                    {categories[question].map((category: string, index: number) => { 
                        // If one of the categories contains a good chunk of the answer, don't display it.
                        if (category.includes(title[0].slice(0, 3))) { return; } 
                        return <span><li key={'cat' + index} className='categories' id={'cat' + index}>{category}<span className="catSeparator"> ✦ </span></li></span>
                    })}
                </ul>
            </div>
        )
    }
}

export default Question;