import React from "react";
import ProjectRead from "../ProjectRead/ProjectRead";
import './ProjectTable.css'
import { Fragment } from "react";
import ProjectEdit from "../ProjectEdit/ProjectEdit";


const ProjectTable = ({ ProjectsInfo, EditProjectId, onProjectEditClick, onProjectEditChange, EditProjectData, onProjectEditSubmit, onProjectCancelClick, onProjectDeleteClick }) => {
    return (
        <div className="center shadow-5 br3 ba">
            <form onSubmit={onProjectEditSubmit}>
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
                            <Fragment>
                                {EditProjectId === ProjectInfo.id
                                    ? (<ProjectEdit EditProjectData={EditProjectData} onProjectEditChange={onProjectEditChange}
                                        onProjectCancelClick={onProjectCancelClick} />)
                                    : (<ProjectRead ProjectInfo={ProjectInfo} onProjectEditClick={onProjectEditClick}
                                        onProjectDeleteClick={onProjectDeleteClick} />)}
                            </Fragment>
                        ))}

                    </tbody>
                </table>
            </form>

        </div>
    )

}
export default ProjectTable