import Button from "../component/Button";
import Display from "../component/Display"
import quizData from "../data/quiz"

export default function QuizPage() {

    const quizIndex = 0;
    return (
        <>
            <Display>
                {`Q1. ${quizData[quizIndex].question}`}
            </Display>
                {
                    quizData[quizIndex].options.map((item, index) => {
                        return <Button key={`item-${index}`}>{item}</Button>
                    })
                }
        </>
    )
}
