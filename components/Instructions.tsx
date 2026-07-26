const Instructions = () => {
  return (
    <div id='instructContainer'>
      <ul id='instructions'>
        <li className="instructionItem instructionHighlight" >Guess the Iris-related Wikipedia article from its categories.</li>  
        <li className="instructionItem">Today, there are <span className='instructionHighlight'>10 notable, diverse, and interesting people, places, and things</span> to guess.</li>
        <li className="instructionItem"><span className='instructionHighlight'>It's a fairly easy test of general Iris knowledge,</span> and a source of Wikipedia self-discoveries!</li>
        <li className="instructionItem"><span className='instructionHighlight'>Guess the article title.</span> Don't worry about capitalization, accents, or anything in brackets.</li>
        <li className="instructionItem instructionHighlight">And no, you can't see your stats.</li>
      </ul>
    </div>
  )
}

export default Instructions;