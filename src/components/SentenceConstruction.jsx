import {useEffect, useState} from "react";
import {MAX_TIMEOUT} from "../App.jsx";


function SentenceConstruction(props) {
    const questions = props.questions;
    const [timer, setTimer] = useState(MAX_TIMEOUT);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [selections, setSelections] = useState([]);
    const maxLength = Math.max(...questions[currentQuestionIndex].options.map(op => op.length));

    const handleSelect = (value) => {
        if (questions.length && currentQuestionIndex !== null) {
            const nullEl = selections.findIndex(x => x === null);
            if (nullEl === -1) {
                setSelections([...selections, questions[currentQuestionIndex].options[value]]);
            } else {
                setSelections(selections.map(
                    (x, index) =>
                        nullEl === index ? questions[currentQuestionIndex].options[value] : x)
                );
            }
        }
    }
    const handleRemove = (value) => {
        setSelections(selections.map((x, index) => index === value ? null : x));
    }

    const handleNext = () => {
        setTimer(MAX_TIMEOUT);
        const a = {...answers, [questions[currentQuestionIndex].questionId]: selections};
        setAnswers(a);
        if (currentQuestionIndex === (questions.length - 1)) {
            props.setSubmissions(a);
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelections([]);
    }

    useEffect(() => {
        if (currentQuestionIndex !== null && questions !== null) {
            const interval = setInterval(() => {
                setTimer(timer - 1);
                if (timer <= 0) {
                    handleNext()
                }
            }, 1000)
            return () => {
                clearInterval(interval);
            }
        }
    }, [questions, timer, currentQuestionIndex]);

    return <div className={"w-full h-full bg-gray-100 flex items-center justify-center p-2 md:p-4"}>
        <div className={"bg-white flex flex-col items-center rounded-xl shadow-md w-full max-w-4xl md:aspect-video"}>
            <div className={"flex items-center justify-between w-full p-4 md:p-8 md:py-6"}>
                <span
                    className={"font-medium tracking-wider text-gray-800 text-sm md:text-lg"}>0:{timer.toLocaleString("en", {minimumIntegerDigits: 2})}</span>
                <button className={"border rounded-md border-gray-200 p-1 md:p-1.5 px-2 md:px-4 text-xs md:text-sm"}>Quit</button>
            </div>
            <div className={"flex items-center justify-between w-full gap-1 md:gap-2 px-4 md:px-8 pb-5 md:pb-10"}>
                {
                    questions.map((_, index) => <div key={`${_.questionIndex}-dash-${index}`}
                                                     className={"h-[3px] md:h-[4px] w-full flex-1 rounded-md " + (index <= currentQuestionIndex ? "bg-orange-400" : "bg-gray-400")}></div>)
                }
            </div>
            <div className={"flex flex-col items-center justify-center"}>
                <span className={"text-xs md:text-md font-medium text-gray-600"}>Select the missing words in correct order</span>
            </div>
            <div className={"flex flex-col w-full flex-1 px-4 md:px-8 pt-5 md:pt-10 text-sm md:text-xl gap-4 md:gap-8 text-gray-800 leading-relaxed md:leading-13"}>
                <p className={"text-justify h-min select-none"}>
                    {
                        questions[currentQuestionIndex] &&
                        questions[currentQuestionIndex].question.split(/\s_+\s/)
                            .map((word, index, arr) => {
                                if (index === arr.length - 1) return word;
                                return <>
                                    {" " + word + " "}
                                    <span key={`${questions[currentQuestionIndex]}-blank-${index}`}
                                          onClick={() => selections[index] ? handleRemove(index) : () => {
                                          }}
                                          className={"inline-flex justify-center items-center relative mx-2 md:mx-4 font-mono " + (selections[index] ? "cursor-pointer" : "")}>
                                        {
                                            selections[index] && <span
                                                className={"block rounded-md border text-xs md:text-sm p-0.5 md:p-1 px-1 md:px-2 bottom-4 md:bottom-5 absolute font-[poppins]"}>{selections[index]}</span>
                                        }
                                        {
                                            "_".repeat(maxLength + 5)
                                        }
                                    </span>
                                </>
                            })
                    }
                </p>
                <div className={"flex flex-wrap items-center justify-start gap-2 md:gap-4 w-full"}>
                    {
                        questions[currentQuestionIndex].options.map((option, index) =>
                            !selections.includes(option) &&
                            <button key={`${questions[currentQuestionIndex].questionId}-${index}`}
                                    className={"cursor-pointer px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm border rounded-md border-gray-600"}
                                    onClick={() => handleSelect(index)}>
                                {option}
                            </button>
                        )
                    }
                </div>

            </div>
            <div className={"flex items-center justify-end w-full p-4 md:p-8 md:py-6"}>
                <button onClick={handleNext} className={"p-2 md:p-3 px-3 md:px-4 rounded-md bg-[#453fe1]"}>
                    <span className="material-symbols-outlined text-white text-sm md:text-md">arrow_forward</span>
                </button>
            </div>
        </div>
    </div>
}

export default SentenceConstruction;