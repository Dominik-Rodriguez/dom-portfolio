import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import './PageContainer.scss';

const PageContainer = () => {
	
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setLoading(true);
		setTimeout(() => setLoading(false), 1500);
    }, [location]);
    return (
        <div className="page-container">
            { loading ? (
                <Loader />
            ) : (
                <>
                    <div className="page-header">
                        <Header />
                    </div>
                    <div className="page-content">
                        <Outlet />
                    </div>
                </>
            )}
        </div>
    )
};

export default PageContainer;
