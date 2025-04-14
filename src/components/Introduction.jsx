function Introduction(props) {
    return <div className={"w-full flex items-center justify-center flex-col m-auto gap-6"}>
        <span className="material-symbols-outlined text-6xl text-gray-600">edit_note</span>
        <div className={"flex flex-col gap-4 items-center justify-center max-w-md"}>
            <span className={"text-2xl font-semibold"}>Sentence Construction</span>
            <p className={"text-center text-gray-600 text-sm"}>Select the correct words to complete the sentence by arranging the provided options in the right order.</p>
        </div>
        <div className={"flex w-full gap-6 items-center justify-center mt-6 max-w-xl"}>

            <div className={"flex flex-col flex-1 items-center justify-center gap-2"}>
                <span className={"font-medium"}>Time Per Question</span>
                <span className={"text-gray-600 text-sm"}>{props.maxTime} sec</span>
            </div>
            <div className={"w-[1px] bg-gray-200 h-full"}></div>

            <div className={"flex flex-col flex-1 items-center justify-center gap-2"}>
                <span className={"font-medium"}>Total Questions</span>
                <span className={"text-gray-600 text-sm"}>{props.data?.data?.questions?.length || 0}</span>
            </div>
            <div className={"w-[1px] bg-gray-200 h-full"}></div>

            <div className={"flex flex-col flex-1 items-center justify-center gap-2"}>
                <span className={"font-medium"}>Coins</span>
                <span className={"flex items-center gap-1 text-gray-700 text-sm"}>
                    <span className={"material-symbols-outlined text-[#F19E39] text-sm"}>paid</span>{props.data?.activity?.coins || 0}
                </span>
            </div>

        </div>
        <div className={"flex items-center justify-between gap-4 mt-6"}>
            <button onClick={() => {}} className={"cursor-pointer p-2 px-12 border text-[#453fe1] text-sm border-[#453fe1] rounded-md"}>Back</button>
            <button onClick={props.setHasStarted} className={"cursor-pointer p-2 px-12 text-white border border-[#453fe1] text-sm bg-[#453fe1] rounded-md"}>Start</button>
        </div>
    </div>;
}

export default Introduction;