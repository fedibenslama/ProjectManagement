import React from "react";
import ProjectRead from "../ProjectRead/ProjectRead";
import './ProjectTable.css'

const ProjectTable = ({ ProjectsInfo }) => {
    return (
        <div className="center shadow-5 br3 ba">
            <form>
                <table className="TableForm">
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Used Solutions</th>
                            <th>Associated Servers</th>
                            <th>Associated Client</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ProjectsInfo.map((ProjectInfo) => (
                            <ProjectRead ProjectInfo={ProjectInfo} />
                        ))}

                    </tbody>
                </table>
            </form>

        </div>
    )

}
export default ProjectTable