function Header(props) {
    return <div
        className={"flex relative items-center justify-between w-full p-2 sm:p-3 md:p-4 px-4 sm:px-10 md:px-20 border-b border-gray-200 shadow-md"}>
        <button onClick={() => props.hasFinished ? props.setHasFinished(!props.hasFinished): () => {}}
              className={"material-symbols-outlined text-base sm:text-lg " + (props.hasFinished ? "cursor-pointer": "invisible")}>arrow_back</button>
        <span className={"font-medium text-sm sm:text-base md:text-lg text-gray-800"}>Sentence Construction</span>
        <span className={"material-symbols-outlined text-base sm:text-lg"}>more_vert</span>
    </div>
}

export default Header;