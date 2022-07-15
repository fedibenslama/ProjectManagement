import './App.css';
import React, { Component } from 'react';
import ProjectData from './project-mockdata.json'
import ProjectTable from './Components/ProjectTable/ProjectTable';
import ProjectAdd from './Components/ProjectAdd/ProjectAdd';
import { nanoid } from 'nanoid';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ProjectsInfo: ProjectData,
      AddProjectData: {
        Name: '',
        Type: '',
        UsedSolutions: '',
        AssociatedServers: '',
        AssociatedClient: '',
        Status: '',
      }
    }
  }
  onProjectAddChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const NewProjectData = { ...this.state.AddProjectData }

    NewProjectData[fieldName] = fieldValue;
    this.setState({ AddProjectData: NewProjectData })

  }
  onProjectAddSubmit = (event) => {
    event.preventDefault();

    const newProject = {
      id: nanoid(),
      Name: this.state.AddProjectData.Name,
      Type: this.state.AddProjectData.Type,
      UsedSolutions: this.state.AddProjectData.UsedSolutions,
      AssociatedServers: this.state.AddProjectData.AssociatedServers,
      AssociatedClient: this.state.AddProjectData.AssociatedClient,
      Status: this.state.AddProjectData.Status,

    };
    const NewProjects =[...this.state.ProjectsInfo,newProject];
    this.setState({ProjectsInfo:NewProjects})

  }
  render() {
    return (
      <div>
        <ProjectTable ProjectsInfo={this.state.ProjectsInfo} />
        <ProjectAdd onProjectAddChange={this.onProjectAddChange} onProjectAddSubmit={this.onProjectAddSubmit} />
      </div>
    );
  }

}

export default App;
