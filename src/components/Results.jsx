function Results(props) {
    let score = 0;

    const isSame = (a, b) => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }

    const res = Object.fromEntries(props.questions.map(question => {
        const isCorrect = isSame(question.correctAnswer, props.submissions[question.questionId]);
        if (isCorrect) score += 1;
        return [question.questionId, isCorrect]
    }));

    return <div className="w-full bg-gray-100 flex flex-col items-center overflow-auto">
        <div className="w-full max-w-2xl flex-1 flex flex-col gap-4 md:gap-8 items-center justify-center mt-12 md:mt-25 mb-10 md:mb-20 px-4 md:px-0">
            <div className="rounded-full border-4 md:border-8 text-2xl md:text-4xl border-green-600 text-green-600 p-4 md:p-8 flex flex-col items-center justify-center aspect-square">
                <span>{(score/props.questions.length).toPrecision(2) * 100}</span>
                <span className="text-xs md:text-sm">Overall score</span>
            </div>
            <p className="text-center text-sm md:text-md leading-6 md:leading-7 px-2">While you correctly formed several sentences, there are
                couple of areas where improvement is needed. Pay close attention to sentence structure and word
                placement to ensure clarity and correctness. Review your responses below for more details.</p>
            <button
                className="cursor-pointer border rounded-md border-violet-600 text-violet-600 font-medium text-xs md:text-sm px-4 sm:px-12 md:px-20 py-2 md:py-3">Go
                to Dashboard
            </button>
            <span className="material-symbols-outlined text-xl md:text-2xl">keyboard_arrow_down</span>
        </div>
        <ul className="w-full max-w-2xl flex flex-col gap-4 md:gap-8 items-center justify-center pb-6 md:pb-10 px-4 md:px-0">
            {
                props.questions.map((question, index) =>
                    <li key={question.questionId} className="w-full flex flex-col items-center justify-center rounded-lg shadow-md overflow-hidden">
                        <div className="bg-white p-3 md:p-4 px-4 md:px-6 pb-0 w-full">
                            <div className="flex items-center justify-between w-full">
                                <span className="bg-gray-200 p-1 rounded-md text-gray-600 text-xs">Prompt</span>
                                <span className="text-xs text-gray-600">{index + 1}/{props.questions.length}</span>
                            </div>
                            <p className="text-xs md:text-sm text-gray-800 py-4 md:py-6">
                                {
                                    question.question.split(/\s_+\s/).map((word, ind, arr) => {
                                        if (ind === arr.length - 1) return word;
                                        return word + " " + question.correctAnswer[ind] + " ";
                                    })
                                }
                            </p>
                        </div>
                        <div className="bg-blue-50 w-full p-2 md:p-3 px-4 md:px-6">
                            <div className="flex items-center justify-between w-full">
                                <span className="text-xs font-medium text-gray-600">Your response <span className={`${res[question.questionId] ? "bg-green-100" : "bg-red-100"} p-1 text-normal rounded-md ${res[question.questionId] ? "text-green-800" : "text-red-800"} text-xs`}>
                                        {res[question.questionId] ? "Correct" : "Incorrect"}
                                    </span>
                                </span>
                            </div>
                            <p className="text-xs md:text-sm text-gray-800 py-2 md:py-3">
                                {
                                    question.question.split(/\s_+\s/).map((word, ind, arr) => {
                                        if (ind === arr.length - 1) return word;
                                        if (props.submissions[question.questionId][ind])
                                            return word + " " + (props.submissions[question.questionId][ind]) + " ";
                                        return <>{word + " "}<span className="font-mono">_____________</span>{" "}</>
                                    })
                                }
                            </p>
                        </div>
                    </li>
                )
            }
        </ul>
    </div>
}

export default Results;