import React from 'react'

export default function Result({ correctNum, maxQuizLen }) {

    return (
        <div>
            <h1 className="text-black">あなたの正解数は: {correctNum} / {maxQuizLen} です</h1>
        </div>
    )
}
