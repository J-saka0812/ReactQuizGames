import { useEffect, useState } from "react";
import Button from "../component/Button";
import Display from "../component/Display"
import quizData from "../data/quiz"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../const";

export default function QuizPage() {

    //setQuizLen→現在の値にsetQuizIndex((prev) => prev + 1);の様に、任意の値を挿入できる
    //useStateで初期値の決定は条件付きで遷移させたい時に使う
    //quizIndexで現在の値を参照
    const [quizIndex, setQuizIndex] = useState(0);
    const [answerLogs, setAnswerLogs] = useState([]);
    //useNavigate
    const navigation = useNavigate();
    const MAX_QUIZ_LEN = quizData.length;

    const handleClick = (clickIndex) => {
        if (clickIndex === quizData[quizIndex].answerIndex) {
            //配列への要素の追加
            //prevは現在の配列要素
            setAnswerLogs((prev) => [...prev, true]);
        } else {
            setAnswerLogs((prev) => [...prev, false]);
        }
        setQuizIndex((prev) => prev + 1);
    };

    useEffect(() => {
        if (answerLogs.length === MAX_QUIZ_LEN) {
            //correctNum→回答の中からtrue(正解)数
            //answerLogsは配列なのでlengthで判定
            //filterは配列要素にフィルターをかける標準メソッドで配列にしか使えない
            const correctNum = answerLogs.filter((answer) => {
                return answer === true
            }).length;
            
            //navigate変数(遷移先path, {条件})で遷移したときの条件を指定して遷移させることができる
            //state: {}で遷移先に引き継ぎたい要素を指定して遷移させることができる
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
            {quizData[quizIndex] && quizData[quizIndex].options.map((item, clickindex) => {
                return (
                    <Button key={`item-${clickindex}`} onClick={() => handleClick(clickindex)}>
                        {item}
                    </Button>
                )
            })
            }
        </>
    )
}