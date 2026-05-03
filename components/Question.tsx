const Question = ({ question, numberCorrect, categories, isLoading }: any ) => {

    const filterCategories = () => {
        switch (question) {
            case 1: return ["The Mask (franchise)", "Darren Hayes", "The Mole (American TV series)", "Yukio Mishima"];
            case 2: return ["Ace Ventura", "Foals (band)"];
            case 3: return ["Campari brands", "Bloomberg L.P.", "NewJeans"];
            case 4: return ["Scrabble", "Ariana Grande"];
            case 5: return ["Beyoncé", "Knowles–Carter family", "Lumines", "Video games scored by Jake Kaufman"];
            case 6: return ["Hard Rock Cafe", "Weyes Blood", "Arrested Development"];
            case 7: return ["Pareidolia", "Tim & Eric", "Black Death"];
            case 8: return ["Parsons School of Design", "The New School", "Hachikō"];
            case 9: return ["New York Yankees", "Yankee Global Enterprises"];
            case 10: return [];
        }
    }

    const badCategories: any = filterCategories();
    
    if (isLoading) {
        return <p>Loading categories...</p>
    } else {
        return (
            <div id="questionDiv">
                <div id="questionDirection" className="fontSans">GUESS THE ARTICLE FROM ITS CATEGORIES</div>
                <ul id="catContainer">
                    {categories[question].map((category: string, index: number) => { 
                            // If one of the categories contains a good chunk of the answer, don't display it.
                            for (let i = 0; i < badCategories.length; i++) {
                                if (category == badCategories[i]) { return; }
                            }
                            
                            if (index >= categories[question].length - 1) { return <span><li key={'cat' + index} className='categories' id={'cat' + index}>{category}</li></span> }
                            return <span><li key={'cat' + index} className='categories' id={'cat' + index}>{category}<span className="catSeparator"> ✦ </span></li></span>
                        })
                    }
                </ul>
                <div id="scoreboard">
                    <div id="questionNumber" className="fontSans">Q{question} · 10</div>
                    <div id="score" className="fontSans">Score · {numberCorrect}</div>
                </div>
            </div>
        )
    }
}

export default Question;