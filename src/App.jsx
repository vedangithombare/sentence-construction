import Header from "./components/Header.jsx";
import Introduction from "./components/Introduction.jsx";
import SentenceConstruction from "./components/SentenceConstruction.jsx";
import {useEffect, useState} from "react";
import Results from "./components/Results.jsx";

const MAX_TIMEOUT = 30;

function App() {
    const [hasStarted, setHasStarted] = useState(false);
    const [submissions, setSubmissions] = useState([]);
    const [response, setResponse] = useState({});
    const [hasFinished, setHasFinished] = useState(false);

    const handleSubmissions = (results) => {
        setSubmissions(results);
        setHasFinished(!hasFinished);
        setHasStarted(!hasStarted);
    }

    useEffect(() => {
        fetch("http://localhost:5000/getSentenceConstruction")
            .then(async (res) => {
                const d = await res.json();
                setResponse(d);
            })
            .catch(err => console.log(err));
    }, []);

    console.log(submissions);

    return <>
        {
            hasStarted ?
                <SentenceConstruction questions={response?.data.questions} setSubmissions={handleSubmissions}/> :
                <>
                    <Header hasFinished={hasFinished} setHasFinished={setHasFinished} />
                    {
                        hasFinished ?
                            <Results questions={response?.data.questions} submissions={submissions}/> :
                            <Introduction maxTime={MAX_TIMEOUT} data={response} setHasStarted={setHasStarted}/>
                    }
                </>
        }
    </>
}

export { MAX_TIMEOUT };
export default App;