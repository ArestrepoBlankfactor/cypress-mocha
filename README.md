# CYPRESS AUTOMATION BASIC PROJECT

This is an example of the Automation just using Cypress and mocha
also contains an example of how to implement a Page object model pattern

### Tools used to create this project:

-   Cypress
-   Javascript
-   mocha

## Description of the Packages in this project

This project is divided in these packages: Fixtures, constants, integration, plugins, pages and suppport.

### Constants: 
 this file contains all those messages, titles, path urls, etc. necessary constants


### Fixtures:

This folder helps keep data files such as data.json, which can be used to mock data for responses to routes.


### Integration:

This is an important folder. Because it contains all feature files (with .feature extension), this is where the tests are written using the Gherkin language. And all tests should sit inside it, because, by default, Cypress will only looks for test files here.

##### Pages:

Contains the .js files where the mapping of the web pages elements takes place. Such mappings are done by CSS selectors, like xpath, id, class, etc.

### Plugins:

Helps modify or extend the internal behavior of Cypress. Users can extend this framework or customize it beyond what Cypress offers by default.

### Support:

The support folder contains common files (reusable code, global variables, etc.), that needs to be accessed globally inside the framework. In this folder, two more folders can be found, page_objets and step_definitions.




### Other files:

-   support.commands: In this file, the LSG URLs for each necessary web portal can be found.
-   support.index: This file contains global configurations to modify Cypress. It's been used to add the xpath configuration because sometime is necessary to map objects with their xpath.
-   Gitignore: In this file are excluded all files that are unnecessary or not recommended to upload on the project's remote repository.
-   Cypress.json: In this file is the cypress configuration, for example viewport or projectId. This configuration is necessary to execute Cypress in the dashboard.
-   Package.json: This is a configuration file, containing data like the project's name, scripts that can be used and versions of components like mochawesome, xpath, cypress, etc.
-   reports.js: contain all configuration to modify the report file
## How to use this project?

### How to install Cypress in the Local Machine?

-   Open the project with the Visual Studio Code IDE
-   Open the terminal
-   To locally install Cypress in the project, type the command  **npm install cypress**
-   To locally install the node modules and dependencies, type the command **npm install**
-   Wait for Cypress to be installed
-   Cypress is installed and ready to be used



### How to execute features with Cypress in the Local Machine?

-   Open the project with the Visual Studio Code IDE
-   Open the terminal
-   To run the project locally using Cypress, type the command  **npm run open**
-   On the emergent Cypress window, select the feature to execute
-   And enjoy it!

### How to execute on the Cypress Dashboard?

For this is necesary the key of the project on the dashboard

-   Open the project with Visual Studio Code IDE
-   Open the terminal
-   Type the command  **cypress run --record --key xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx**. By default it is executed using the Electron browser, but if the instruction  **--browser chrome**  (or any other supported browser) is added to the command after the "key" instruction, it will run in such browser
 **or just npm run test**
-   And enjoy it!