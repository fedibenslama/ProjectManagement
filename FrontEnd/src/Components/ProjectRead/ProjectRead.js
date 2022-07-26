import React from "react";

const ProjectRead = ({name,Type, UsedSolutions,AssociatedServers,AssociatedClient,Status,id, onProjectEditClick,onProjectDeleteClick ,ProjectInfo}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{Type}</td>
            <td>{UsedSolutions}</td>
            <td>{AssociatedServers}</td>
            <td>{AssociatedClient}</td>
            <td>{Status}</td>
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
                        onClick={() => onProjectDeleteClick(id)}
                    />
                </div>

            </td>
        </tr >


    )
}

export default ProjectRead