import { Link } from "react-router-dom";
import { ROUTES } from "../const";


export default function HomePage() {


    return (
        <>
            <div>
                <h1 className="m-2">Quiz App</h1>
                <Link to={ROUTES.QUIZ} className="text-2xl border-2 border-black rounded-md p-[1%]">Start</Link>
            </div>
        </>
    )
}

