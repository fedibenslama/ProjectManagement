const express = require("express");
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

const database = {
    projects: [
        {
            "id": 1,
            "Name": "Project1",
            "Type": "Web Developement",
            "UsedSolutions": "React,JavaScript,NodeJS,MySQL",
            "AssociatedServers": "Development Server",
            "AssociatedClient": "Client1",
            "Status": "Under Development"
        },
        {
            "id": 2,
            "Name": "Project2",
            "Type": "Mobile Application",
            "UsedSolutions": "Flutter,React",
            "AssociatedServers": "Development Server",
            "AssociatedClient": "Client2",
            "Status": "Under Development"
        },
        {
            "id": 3,
            "Name": "Project3",
            "Type": "Data Science",
            "UsedSolutions": "Machine Learning,Deep Learning,Python",
            "AssociatedServers": "Production Server",
            "AssociatedClient": "Client3",
            "Status": "Testing"
        },
        {
            "id": 4,
            "Name": "Project4",
            "Type": "Software Development",
            "UsedSolutions": "Java,Python",
            "AssociatedServers": "Test Server",
            "AssociatedClient": "Client4",
            "Status": "Validated"
        },
        {
            "id": 5,
            "Name": "Project5",
            "Type": "Cloud Computing",
            "UsedSolutions": "Machine Learning,AWS",
            "AssociatedServers": "Development Server",
            "AssociatedClient": "Client5",
            "Status": "Testing"
        }
    ]
}


app.get('/', (req, res) => {
    res.send(database.projects)
})

app.post('/addProject', (req, res) => {
    const {Name,Type,UsedSolutions,AssociatedServers,AssociatedClient,Status} = req.body; //to avoid repeating req.body
    database.projects.push({
        "id": 5,
        Name: Name,
        Type: Type,
        UsedSolutions: UsedSolutions,
        AssociatedServers: AssociatedServers,
        AssociatedClient: AssociatedClient,
        Status: Status,
    })
    res.json(database.projects[database.projects.length-1]);
})


app.listen(3001, () => {
    console.log('App Is Running On Port 3001')
})

/*
/ --> res = this is working
/add --> POST = project
/edit -->Put = Project
/view/:projectID --> Get = Project
/delete --> Put Project */