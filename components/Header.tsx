const Header = ({ setArchive, archive }: any) => {

    const toggleArchive = (): void => {
        archive ? setArchive(false) : setArchive(true);
    }

    return (
        <div id='header'>
            <div id="titles">
                <div id='title'><span id="amandaTitle" className="fontSans">IRIS</span><span id="fishingTitle">fishing</span></div>
                <div id='subtitle' className="fontSans">THE IRIS-THEMED WIKIPEDIA <br /> BIRTHDAY GUESSING GAME</div>
            </div>
            <button id="archiveButton" onClick={toggleArchive}>
                <svg xmlns="http://www.w3.org/2000/svg" id="calendar" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="inline svelte-13pf89s">
                    <path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"></path>
                    <path fill="currentColor" fillRule="evenodd" d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14zm15 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clipRule="evenodd"></path>
                </svg>
                <div id="archiveButtonText">Archive</div>
            </button>
        </div>
    )
}

export default Header;