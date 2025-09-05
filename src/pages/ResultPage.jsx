import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";
import Result from "../component/Result";
import Loading from "../component/Loading";
import { useEffect, useState } from "react";

export default function ResultPage() {

    //useNavigateからの受取(useLocation)
    //location変数に入れた後は元の変数名で使える
    const location = useLocation();
    const { maxQuizLen, correctNum } = location.state || {};

    const [isLoading, setLoading] = useState(true);

    const ResultDisplay = () => (
        <>
            <Result maxQuizLen={maxQuizLen} correctNum={correctNum} />
            <Link to={ROUTES.HOME} className="text-2xl border-2 border-black rounded-md p-[0.5%] mt-2">もう１回</Link>
        </>
    )


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {isLoading ? <Loading /> : <ResultDisplay />}
            
        </>
    )
}