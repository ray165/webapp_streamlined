## Streamlined

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This browser based web application to streamline team projects in the work context and improve communication of progress.

Team 31
Raymond, Miguel, Victor
	
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
* ...
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url
├── main.html                # home page
├── create.html              # page that hosts the creation links to projects
├── firstCreation.html       # page on which projects are created then added to the database
├── members.html             # list of members, pulled from database
├── profile.html             # user profile (not used)
├── projectDetails.html      # shows more info on a project
├── projectEdit.html         # page on which projects are modified in the database
├── projects.html            # list of all projects, pulled from database
├── taskEdit.html            # modifies tasks in the database linked to a specific project
└── README.md

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
    /createBtn.png           # Plus button: bottom nav
    /defaultpfp.png          # Grey blank user: profile.html
    /homeBtn.png             # House button: bottom nav
    /man relaxed.png         # Backsplash: main.html
    /membersBtn.png          # People button: bottom nav
    /projectsBtn.png         # Clipboard button: bottom nav

├── scripts                  # Folder for scripts
    /editTask.js             # taskEdit.html
    /firebase_api.js         # how our app communicates with the database
    /firstCreation.js        # firstCreation.html
    /members.js              # members.html
    /projectDetails.js       # projectDetails.html 
    /projectEdit.js          # projectEdit.html
    /projectList.js          # projects.html  

├── styles                   # Folder for styles
    /create.css              # create.html
    /login.css               # index.html
    /main.css                # main.html
    /profile.css             # profile.html
    /projectEdit.css         # projectEdit.html 
    /skeleton.css            # css template used by most pages

```