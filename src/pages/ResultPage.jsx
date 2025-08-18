import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";

export default function ResultPage() {

    const location = useLocation();

    const { maxQuizLen, correctNum } = location.state || {};


    return (
        <>
            
            <Link to={ROUTES.HOME} className="text-2xl border-2 border-black rounded-md p-[1%]">もう１回</Link>
        </>
    )
}

