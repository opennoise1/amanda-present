const FinalResults = ({numberCorrect, questionSkips, results, todaysQuestions}: any) => {

    const generateResults: any = () => {
        let resultsIcon; 
        let resultTitle;

        return Object.keys(todaysQuestions).map((titleText: string, i: number) => {
            const questionIndex = i + 1;
            if (results[i]) {
                // Correct
                resultsIcon = <svg xmlns="http://www.w3.org/2000/svg" id="correctIcon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="finalIcon correctColor inline" width="1em" height="1em"><path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clipRule="evenodd"></path></svg>
                resultTitle = <span key={"result title " + i} id={"result title " + i} className="finalIcon correctFinal">{todaysQuestions[questionIndex][1][0]}</span>
            } else {
                if (questionSkips[i]) {
                    // Skip
                    resultsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="finalIcon wrongColor h-full w-full"><path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8.97-3.53a.75.75 0 1 0-1.06 1.06L14.44 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06zm-5.06 0a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L10.44 12 7.97 9.53a.75.75 0 0 1 0-1.06" clipRule="evenodd"></path></svg>
                } else {
                    // Wrong
                    resultsIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="finalIcon wrongColor inline" width="1em" height="1em"><path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clipRule="evenodd"></path></svg>
                }

                resultTitle = <span key={"result title " + i} id={"result title " + i} className="wrongFinal">{todaysQuestions[questionIndex][1][0]}</span>
            }
            
            return (
                <div key={"icon " + i} id={"icon " + i} className="finalResults">
                    {resultsIcon}
                    {resultTitle}
                </div>
            );
        })
    };

    return (
        <div id="finalScoreAndResults">
            <div id="finalScore">Final score: {numberCorrect}</div>
            <div id="allFinalResults">{generateResults()}</div>
        </div>
    )
}

export default FinalResults;