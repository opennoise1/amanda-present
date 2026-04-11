const Header = ({ setArchive, archive }: any) => {

    const toggleArchive = (): void => {
        archive ? setArchive(false) : setArchive(true);
    }

    return (
        <div id='header'>
            <div id="titles">
                <div id='title'><span id="amandaTitle" className="fontSans">AMANDA</span><span id="fishingTitle">fishing</span></div>
                <div id='subtitle' className="fontSans">THE AMANDA-THEMED WIKIPEDIA <br /> BIRTHDAY GUESSING GAME</div>
            </div>
            <button onClick={toggleArchive}>Archive</button>
        </div>
    )
}

export default Header;