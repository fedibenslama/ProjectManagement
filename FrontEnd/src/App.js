import './App.css';
import React, { Component } from 'react';
import ProjectTable from './Components/ProjectTable/ProjectTable';
import ProjectAdd from './Components/ProjectAdd/ProjectAdd';
import { nanoid } from 'nanoid';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ProjectsInfo: [{
        Name: '',
        Type: '',
        UsedSolutions: '',
        AssociatedServers: '',
        AssociatedClient: '',
        Status: '',
      }],
      AddProjectData: {
        Name: '',
        Type: '',
        UsedSolutions: '',
        AssociatedServers: '',
        AssociatedClient: '',
        Status: '',
      },
      EditProjectId: null,
      EditProjectData: [{
        Name: '',
        Type: '',
        UsedSolutions: '',
        AssociatedServers: '',
        AssociatedClient: '',
        Status: '',
      }],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/projects')
      .then(response => {
        return response.json();
      })
      .then(projects => {
        this.setState({ ProjectsInfo: projects })
      })
      


  }

  // componentDidUpdate(prevProps,prevState) {
  //   if (prevState.ProjectsInfo !== this.state.ProjectsInfo) {
  //     fetch('http://localhost:3001/projects')
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(projects => {
  //         this.setState({ ProjectsInfo: projects })
  //       })
  //   }
  // }

  //----------------------Project ADD---------------------------------
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

    fetch('http://localhost:3001/addProject', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Name: this.state.AddProjectData.Name,
        Type: this.state.AddProjectData.Type,
        UsedSolutions: this.state.AddProjectData.UsedSolutions,
        AssociatedServers: this.state.AddProjectData.AssociatedServers,
        AssociatedClient: this.state.AddProjectData.AssociatedClient,
        Status: this.state.AddProjectData.Status,

      })
    })
      .then(response => response.json())
    // .then(Project => {
    //   if (Project) {
    //     // this.props.loadProject(Project)
    //     console.log(response)
    //   }
    // })

  }
  //----------------------Project Edit---------------------------------
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

    fetch('http://localhost:3001/EditProject', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.state.EditProjectId,
        Name: this.state.EditProjectData.Name,
        Type: this.state.EditProjectData.Type,
        UsedSolutions: this.state.EditProjectData.UsedSolutions,
        AssociatedServers: this.state.EditProjectData.AssociatedServers,
        AssociatedClient: this.state.EditProjectData.AssociatedClient,
        Status: this.state.EditProjectData.Status,

      })
    })
      .then(response => response.json())
      
  }

  //----------------------Project Cancel---------------------------------

  onProjectCancelClick = () => {
    this.setState({ EditProjectId: null })
  }
  //--------------------Project Delete ------------------------
  onProjectDeleteClick = (projectId) => {
    const NewProjects = [...this.state.ProjectsInfo]
    const index = this.state.ProjectsInfo.findIndex((ProjectInfo) => ProjectInfo.id === projectId);
    NewProjects.splice(index, 1);
    this.setState({ ProjectsInfo: NewProjects })

    fetch('http://localhost:3001/DeleteProject', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: projectId

      })
    })
      .then(response => response.json())
  }



  render() {
    return (
      <div>
        <ProjectTable ProjectsInfo={this.state.ProjectsInfo} EditProjectId={this.state.EditProjectId}
          onProjectEditClick={this.onProjectEditClick} EditProjectData={this.state.EditProjectData}
          onProjectEditChange={this.onProjectEditChange} onProjectEditSubmit={this.onProjectEditSubmit}
          onProjectCancelClick={this.onProjectCancelClick} onProjectDeleteClick={this.onProjectDeleteClick}
        />
        <ProjectAdd onProjectAddChange={this.onProjectAddChange} onProjectAddSubmit={this.onProjectAddSubmit} />
      </div>
    );
  }

}

export default App;