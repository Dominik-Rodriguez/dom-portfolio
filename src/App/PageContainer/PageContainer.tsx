import { Outlet } from "react-router-dom";
import WordSphere from '../WordSphere/WordSphere';
import './PageContainer.css';

const PageContainer = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                This will eventually be a menu.
            </div>
            <WordSphere />
            <div className="page-content">
                <Outlet />
            </div>
        </div>
    )
};

export default PageContainer;
