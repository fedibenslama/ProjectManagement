import React from "react";

const Navigation = ({ onRouteChange, IsAddProjectTableRoute }) => {
    if (IsAddProjectTableRoute) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p
                    onClick={() => onRouteChange('AddProjectTableRoute')}
                    className="f3 link dim black underline pa3 pointer">Exit</p>
            </nav>
        )
    }
    else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p
                    onClick={() => onRouteChange('AddProjectTableRoute')}
                    className="f3 link dim black underline pa3 pointer">Add Project</p>

                <p
                    onClick={() => onRouteChange('ProjectTableRoute')}
                    className="f3 link dim black underline pa3 pointer">View Projects</p>
            </nav>
        )
    }

}
export default Navigation