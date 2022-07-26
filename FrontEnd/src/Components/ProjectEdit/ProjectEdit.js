import React from "react";

const ProjectEdit = ({ onProjectEditSubmit,onProjectEditChange, EditProjectData,onProjectCancelClick }) => {
    return (
        <tr>
            <td>
                <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="Name"
                    id="Name"
                    onChange={onProjectEditChange}
                    value={EditProjectData.Name}
                ></input>
            </td>
            <td>
                <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="Type"
                    id="Type"
                    onChange={onProjectEditChange}
                    value={EditProjectData.Type}

                ></input>
            </td>
            <td>
                <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="UsedSolutions"
                    id="UsedSolutions"
                    onChange={onProjectEditChange}
                    value={EditProjectData.UsedSolutions}

                ></input>
            </td>
            <td>
                <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="AssociatedServers"
                    id="AssociatedServers"
                    onChange={onProjectEditChange}
                    value={EditProjectData.AssociatedServers}

                ></input>
            </td>
            <td>
                <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="AssociatedClient"
                    id="AssociatedClient"
                    onChange={onProjectEditChange}
                    value={EditProjectData.AssociatedClient}

                ></input>
            </td>
            <td>
                <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="Status"
                    id="Status"
                    onChange={onProjectEditChange}
                    value={EditProjectData.Status}

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


        </tr>
    )
}

export default ProjectEdit