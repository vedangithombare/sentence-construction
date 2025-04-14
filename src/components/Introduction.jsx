function Introduction(props) {
    return <div className={"w-full flex items-center justify-center flex-col m-auto gap-4 sm:gap-6 p-4"}>
        <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl text-gray-600">edit_note</span>
        <div className={"flex flex-col gap-2 sm:gap-4 items-center justify-center max-w-md px-2"}>
            <span className={"text-xl sm:text-2xl font-semibold"}>Sentence Construction</span>
            <p className={"text-center text-gray-600 text-xs sm:text-sm"}>Select the correct words to complete the sentence by arranging the provided options in the right order.</p>
        </div>
        <div className={"flex w-full flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mt-4 sm:mt-6 max-w-xl"}>

            <div className={"flex flex-col flex-1 items-center justify-center gap-1 sm:gap-2 w-full"}>
                <span className={"font-medium text-sm sm:text-base"}>Time Per Question</span>
                <span className={"text-gray-600 text-xs sm:text-sm"}>{props.maxTime} sec</span>
            </div>
            <div className={"w-full sm:w-[1px] h-[1px] sm:h-full bg-gray-200"}></div>

            <div className={"flex flex-col flex-1 items-center justify-center gap-1 sm:gap-2 w-full"}>
                <span className={"font-medium text-sm sm:text-base"}>Total Questions</span>
                <span className={"text-gray-600 text-xs sm:text-sm"}>{props.data?.data?.questions?.length || 0}</span>
            </div>
            <div className={"w-full sm:w-[1px] h-[1px] sm:h-full bg-gray-200"}></div>

            <div className={"flex flex-col flex-1 items-center justify-center gap-1 sm:gap-2 w-full"}>
                <span className={"font-medium text-sm sm:text-base"}>Coins</span>
                <span className={"flex items-center gap-1 text-gray-700 text-xs sm:text-sm"}>
                    <span className={"material-symbols-outlined text-[#F19E39] text-xs sm:text-sm"}>paid</span>{props.data?.activity?.coins || 0}
                </span>
            </div>

        </div>
        <div className={"flex items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-6"}>
            <button onClick={() => {}} className={"cursor-pointer p-1.5 sm:p-2 px-6 sm:px-12 border text-[#453fe1] text-xs sm:text-sm border-[#453fe1] rounded-md"}>Back</button>
            <button onClick={props.setHasStarted} className={"cursor-pointer p-1.5 sm:p-2 px-6 sm:px-12 text-white border border-[#453fe1] text-xs sm:text-sm bg-[#453fe1] rounded-md"}>Start</button>
        </div>
    </div>;
}

export default Introduction;