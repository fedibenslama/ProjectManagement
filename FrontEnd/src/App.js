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
      },
      EditProjectId: null,
      EditProjectData: {
        Name: '',
        Type: '',
        UsedSolutions: '',
        AssociatedServers: '',
        AssociatedClient: '',
        Status: '',
      },
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
    const NewProjects = [...this.state.ProjectsInfo, newProject];
    this.setState({ ProjectsInfo: NewProjects })

  }
  onProjectEditClick = (event, ProjectInfo) => {
    event.preventDefault();
    this.setState({ EditProjectId: ProjectInfo.id })
    const ProjectValue = {
      Name: ProjectInfo.Name,
      Type: ProjectInfo.Type,
      UsedSolutions: ProjectInfo.UsedSolutions,
      AssociatedServers: ProjectInfo.AssociatedServers,
      AssociatedClient: ProjectInfo.AssociatedClient,
      Status: ProjectInfo.Status,
    }
    this.setState({ EditProjectData: ProjectValue })
  }
  onProjectEditChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const NewProjectData = { ...this.state.EditProjectData };
    NewProjectData[fieldName] = fieldValue;
    this.setState({ EditProjectData: NewProjectData })
  }
  onProjectEditSubmit = (event) => {
    event.preventDefault();
    const editedProject = {
      id: this.state.EditProjectId,
      Name: this.state.EditProjectData.Name,
      Type: this.state.EditProjectData.Type,
      UsedSolutions: this.state.EditProjectData.UsedSolutions,
      AssociatedServers: this.state.EditProjectData.AssociatedServers,
      AssociatedClient: this.state.EditProjectData.AssociatedClient,
      Status: this.state.EditProjectData.Status,
    }
    const NewProjects = [...this.state.ProjectsInfo]
    const index = this.state.ProjectsInfo.findIndex((ProjectInfo) => ProjectInfo.id === this.state.EditProjectId);
    NewProjects[index] = editedProject;
    this.setState({ ProjectsInfo: NewProjects })
    this.setState({ EditProjectId: null })
  }
  onProjectCancelClick = () => {
    this.setState({ EditProjectId: null })
  }
  onProjectDeleteClick = (projectId) => {
    const NewProjects = [ ...this.state.ProjectsInfo ]
    const index = this.state.ProjectsInfo.findIndex((ProjectInfo) => ProjectInfo.id === projectId);
    NewProjects.splice(index, 1);
    this.setState({ ProjectsInfo: NewProjects })
  }



  render() {
    return (
      <div>
        <ProjectTable ProjectsInfo={this.state.ProjectsInfo} EditProjectId={this.state.EditProjectId}
          onProjectEditClick={this.onProjectEditClick} EditProjectData={this.state.EditProjectData}
          onProjectEditChange={this.onProjectEditChange} onProjectEditSubmit={this.onProjectEditSubmit}
          onProjectCancelClick={this.onProjectCancelClick} onProjectDeleteClick={this.onProjectDeleteClick}/>
        <ProjectAdd onProjectAddChange={this.onProjectAddChange} onProjectAddSubmit={this.onProjectAddSubmit} />
      </div>
    );
  }

}

export default App;
