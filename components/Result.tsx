const Result = ({numberCorrect, answerCorrect, title, currInput}: any) => {
    if (answerCorrect) {
        return (
            <div id="answerTitle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="inline" width="1em" height="1em"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></path></svg>
                {title[0]}
                <div id="yourGuess">You guessed "{currInput}"</div>
                <p className="fontSans">Score: {numberCorrect}</p>
            </div>
        )
    } else {
        return (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="inline" width="1em" height="1em"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></path></svg>
                <div id="answerTitle">{title[0]}</div>
                <div id="yourGuess">You guessed "{currInput}"</div>
                <p className="fontSans">Score: {numberCorrect}</p>
            </>
        )
    }
}

export default Result;