import React from "react";
import 'tachyons';

const ProjectAdd = ({onProjectAddChange,onProjectAddSubmit}) => {
    return (
        <div >
            <legend className="f1 fw6 ph0 mh0">Add a Project</legend>
            <form className="pa4 black-80">
                <div className="measure">
                    <label
                        htmlFor="name"
                        className="db fw6 lh-copy f6"
                    >
                        Name

                    </label>
                    <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="Name"
                        id="Name"
                        onChange={onProjectAddChange}
                    />
                    <label
                        htmlFor="Type"
                        className="db fw6 lh-copy f6"
                    >
                        Type

                    </label>
                    <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="Type"
                        id="Type"
                        onChange={onProjectAddChange}
                    />
                    <label
                        htmlFor="UsedSolutions"
                        className="db fw6 lh-copy f6"
                    >
                        Used Solutions

                    </label>
                    <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="UsedSolutions"
                        id="UsedSolutions"
                        onChange={onProjectAddChange}
                    />
                    <label
                        htmlFor="AssociatedServers"
                        className="db fw6 lh-copy f6"
                    >
                        Associated Servers

                    </label>
                    <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="AssociatedServers"
                        id="AssociatedServers"
                        onChange={onProjectAddChange}
                    />
                    <label
                        htmlFor="AssociatedClient"
                        className="db fw6 lh-copy f6"
                    >
                        Associated Client

                    </label>
                    <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="AssociatedClient"
                        id="AssociatedClient"
                        onChange={onProjectAddChange}
                    />
                    <label
                        htmlFor="Status"
                        className="db fw6 lh-copy f6"
                    >
                        Status

                    </label>
                    <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="Status"
                        id="Status"
                        onChange={onProjectAddChange}
                    />
                    <div className="">
                        <input
                            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Add"
                            onClick={onProjectAddSubmit}
                            />
                    </div>

                </div>

            </form>
        </div>
    )
}

export default ProjectAdd