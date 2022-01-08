import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Error() {

    useEffect(() => {
        document.title = "Dento - Error";
    }, [])

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-xl lg:text-3xl font-medium">404 | Not Found</h1>
                <Link to='/' className="text-sm text-gray-600">Back to home page</Link>
            </div>
        </div>
    )
}
