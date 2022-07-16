import React from "react";

const ProjectRead = ({ ProjectInfo, onProjectEditClick,onProjectDeleteClick }) => {
    return (
        <tr>
            <td>{ProjectInfo.Name}</td>
            <td>{ProjectInfo.Type}</td>
            <td>{ProjectInfo.UsedSolutions}</td>
            <td>{ProjectInfo.AssociatedServers}</td>
            <td>{ProjectInfo.AssociatedClient}</td>
            <td>{ProjectInfo.Status}</td>
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
        </tr >


    )
}

export default ProjectRead