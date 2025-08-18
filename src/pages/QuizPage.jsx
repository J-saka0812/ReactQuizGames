import { useEffect, useState } from "react";
import Button from "../component/Button";
import Display from "../component/Display"
import quizData from "../data/quiz"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../const";

export default function QuizPage() {

    const [quizIndex, setQuizIndex] = useState(0);
    const [answerLogs, setAnswerLogs] = useState([]);
    const navigation = useNavigate();
    const MAX_QUIZ_LEN = quizData.length;

    const handleClick = (clickIndex) => {
        if (clickIndex === quizData[quizIndex].answerIndex) {
            setAnswerLogs((prev) => [...prev, true]);
        } else {
            setAnswerLogs((prev) => [...prev, false]);
        }
        setQuizIndex((prev) => prev + 1);
    };

    useEffect(() => {
        if (answerLogs.length === MAX_QUIZ_LEN) {
            const correctNum = answerLogs.filter((answer) => {
                return answer === true
            }).length;
            navigation(ROUTES.RESULT, {
                state: {
                    maxQuizLen: MAX_QUIZ_LEN,
                    correctNum: correctNum
                }
            });
        }
    }, [answerLogs, MAX_QUIZ_LEN, navigation]);

    return (
        <>
            {quizData[quizIndex] && <Display>{`Q1. ${quizData[quizIndex].question}`}</Display>}
            {quizData[quizIndex] && quizData[quizIndex].options.map((item, index) => {
                return (
                    <Button key={`item-${index}`} onClick={() => handleClick(index)}>
                        {item}
                    </Button>
                )
            })
            }
        </>
    )
}
