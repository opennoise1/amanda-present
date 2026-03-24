const AnswerInput = () => {
  return (
    <>
      <input type="search" id="guess" placeholder="Type the article title..." maxLength={48} enterKeyHint="done" autoComplete="off" className="svelte-c6o4d5"></input>
      <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
        <path fill="currentColor" fill-rule="evenodd" 
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd">
        </path>
      </svg>
    </>
  )
}

export default AnswerInput;