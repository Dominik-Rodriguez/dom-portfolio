import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import WordSphere from '../WordSphere/WordSphere';
import './PageContainer.scss';

const PageContainer = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <Header />
            </div>
            <div className="page-content">
                <Outlet />
            </div>
        </div>
    )
};

export default PageContainer;
