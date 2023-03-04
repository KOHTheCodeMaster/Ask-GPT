# Notes:

------------------------------

# 2nd Commit - Added empty module, components, service

------------------------------

# Init Commit - Create Project `Ask-GPT` from scratch.

## Routing Y/N When Creating New Angular Project: `ng new Ask-GPT`

1. When creating a new Angular project using the Angular CLI, the CLI will ask if you want to add Angular routing to the project.
2. If you choose "y" for "yes", the CLI will generate some additional files and configuration to enable routing in your Angular application.
3. If you choose "N" for "no", the CLI will not generate the routing files and configuration.
4. Routing allows you to navigate between different pages and views in your application.

## Error when Running npm or ng commands on terminal:

1. Following Error could popup if using Powershell terminal -
   `ng : File C:\Users\USER\AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this system.
   For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.`
2. This error message indicates that PowerShell script execution is currently disabled on your system, which is preventing you from running the ng command.
3. To resolve this issue, you can change the PowerShell execution policy to allow running scripts.
   You can do this by opening PowerShell as an administrator and running the following command: `Set-ExecutionPolicy RemoteSigned`
4. This will set the execution policy to allow running locally created scripts, which should enable you to run the ng command.

------------------------------
