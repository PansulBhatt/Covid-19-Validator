
![Chatbot demo](readme_images/covid-bot-demo.gif)

## Running locally

1. Install the dependencies:

    ```
    npm install
    ```

1. Run the application:

    ```
    npm start
    ```

1. View the application in a browser at `localhost:3000`.
2. View the streaming application at port 3002.  
3. From a configurations standpoint, we have enabled ES6 support and added nodemon for development purposes.

## Deploy to IBM Cloud as a Cloud Foundry application

1. Log in to IBM Cloud with the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli/index.html#overview):

    ```
    ibmcloud login
    ```

1. Target a Cloud Foundry organization and space:

    ```
    ibmcloud target --cf
    ```

1. Edit the *manifest.yml* file. Change the **name** field to something unique.  
  For example, `- name: covid-assistant-simple-yourname`.

1. Deploy the application

    ```
    ibmcloud app push
    ```

