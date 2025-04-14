function Header(props) {
    return <div
        className={"flex relative items-center justify-between w-full p-4 px-20 border-b border-gray-200 shadow-md"}>
        <button onClick={() => props.hasFinished ? props.setHasFinished(!props.hasFinished): () => {}}
              className={"material-symbols-outlined text-lg " + (props.hasFinished ? "cursor-pointer": "invisible")}>arrow_back</button>
        <span className={"font-medium text-gray-800"}>Sentence Construction</span>
        <span className={"material-symbols-outlined text-lg"}>more_vert</span>
    </div>
}

export default Header;