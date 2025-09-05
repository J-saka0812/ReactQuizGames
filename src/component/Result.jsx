import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function Result({ correctNum, maxQuizLen }) {
    const { width, height } = useWindowSize();
    return (
        <>
            <div className="flex items-center text-center justify-center">
                <h1 className="text-black font-bold text-4xl">あなたの正解数は: {correctNum} / {maxQuizLen} です</h1>
            </div>
            <Confetti
                width={width}
                height={height}
            />
        </>
    )
}
