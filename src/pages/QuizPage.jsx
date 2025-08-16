import { useState } from "react";
import Button from "../component/Button";
import Display from "../component/Display"
import quizData from "../data/quiz"

export default function QuizPage() {

    const [quizIndex, setQuizIndex] = useState(0);
    const [answerLogs, setAnswerLogs] = useState([]);
    const navigation = useNavigate();

    const handleClick = (clickIndex) => {
        if(clickIndex === quizData[quizIndex].answerIndex){
            setAnswerLogs((prev) => [...prev, true]);
        } else {
            setAnswerLogs((prev) => [...prev, false]);
        }
        setQuizIndex((prev) => prev + 1);
    };

    return (
        <>
            <Display>
                {`Q1. ${quizData[quizIndex].question}`}
            </Display>
            {
                quizData[quizIndex].options.map((item, index) => {
                    return ( <Button key={`item-${index}`} onClick={() => handleClick(index)}>
                        {item}
                    </Button>
                    )
                })
            }
        </>
    )
}
