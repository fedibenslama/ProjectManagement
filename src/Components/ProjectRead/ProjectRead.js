import React from "react";

const ProjectRead = ({ ProjectInfo }) => {
    return (
        <tr>
            <td>{ProjectInfo.Name}</td>
            <td>{ProjectInfo.Type}</td>
            <td>{ProjectInfo.UsedSolutions}</td>
            <td>{ProjectInfo.AssociatedServers}</td>
            <td>{ProjectInfo.AssociatedClient}</td>
            <td>{ProjectInfo.Status}</td>
        </tr >

    )
}

export default ProjectRead