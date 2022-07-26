import React from "react";
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
                        {ProjectsInfo.map((ProjectInfo, i) => (
                            <Fragment>
                                {EditProjectId === ProjectInfo.id
                                    ? (<tr>
                                        <td>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="text"
                                                name="Name"
                                                id="Name"
                                                onChange={onProjectEditChange}
                                                value={EditProjectData.name}
                                            ></input>
                                        </td>
                                        <td>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="text"
                                                name="Type"
                                                id="Type"
                                                onChange={onProjectEditChange}
                                                value={EditProjectData.type}

                                            ></input>
                                        </td>
                                        <td>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="text"
                                                name="UsedSolutions"
                                                id="UsedSolutions"
                                                onChange={onProjectEditChange}
                                                value={EditProjectData.usedsolutions}

                                            ></input>
                                        </td>
                                        <td>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="text"
                                                name="AssociatedServers"
                                                id="AssociatedServers"
                                                onChange={onProjectEditChange}
                                                value={EditProjectData.associatedservers}

                                            ></input>
                                        </td>
                                        <td>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="text"
                                                name="AssociatedClient"
                                                id="AssociatedClient"
                                                onChange={onProjectEditChange}
                                                value={EditProjectData.associatedclient}

                                            ></input>
                                        </td>
                                        <td>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="text"
                                                name="Status"
                                                id="Status"
                                                onChange={onProjectEditChange}
                                                value={EditProjectData.status}

                                            ></input>
                                        </td>
                                        <td>
                                            {/* <button type="submit">Save</button> */}
                                            <div className="">
                                                <input
                                                    className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
                                                    type="submit"
                                                    value="Save"
                                                    onClick={onProjectEditSubmit}
                                                />
                                            </div>
                                            <div className="">
                                                <input
                                                    className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
                                                    type="submit"
                                                    value="Cancel"
                                                    onClick={onProjectCancelClick}
                                                />
                                            </div>
                                        </td>


                                    </tr>)

                                    : <tr>
                                        <td>{ProjectInfo.name}</td>
                                        <td>{ProjectInfo.type}</td>
                                        <td>{ProjectInfo.usedsolutions}</td>
                                        <td>{ProjectInfo.associatedservers}</td>
                                        <td>{ProjectInfo.associatedclient}</td>
                                        <td>{ProjectInfo.status}</td>
                                        <td>
                                            {/* <button type="button" onClick={(event)=> onProjectEditClick(event,ProjectInfo)}>Edit</button> */}
                                            <div className="">
                                                <input
                                                    className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
                                                    type="submit"
                                                    value="Edit"
                                                    onClick={(event) => onProjectEditClick(event, ProjectInfo)}
                                                />
                                            </div>
                                            <div className="">
                                                <input
                                                    className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
                                                    type="submit"
                                                    value="Delete"
                                                    onClick={() => onProjectDeleteClick(ProjectInfo.id)}
                                                />
                                            </div>

                                        </td>
                                    </tr >}
                            </Fragment>
                        ))}

                    </tbody>
                </table>
            </form>

        </div>
    )

}
export default ProjectTable