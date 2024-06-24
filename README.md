### README

# Web Development Session Setup

This README provides instructions on how to set up and use the session data for HTML and React projects. Follow the steps below to get your development environment ready.

## Prerequisites

Make sure you have the following software installed on your system:
- [Node.js](https://nodejs.org/) (for React projects)
- [Git](https://git-scm.com/) (optional, for version control)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended text editor)

## HTML Project

### Setting Up the HTML Project

1. **Download the HTML Project Files**
   - Download the HTML project files provided by your instructor.
   - Extract the files to a directory of your choice.

2. **Open the Project in Visual Studio Code**
   - Open Visual Studio Code (VS Code).
   - Use the `File > Open Folder` option to open the project directory.

3. **Install Live Server Extension**
   - Install the Live Server extension by Ritwick Dey. You can find it on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or directly search for "Live Server" in the Extensions view (`Ctrl+Shift+X`).
     - **Name:** Live Server
     - **Id:** ritwickdey.LiveServer
     - **Description:** Launch a development local Server with live reload feature for static & dynamic pages
     - **Version:** 5.7.9
     - **Publisher:** Ritwick Dey

4. **Open the HTML File with Live Server**
   - Open the main HTML file (usually `index.html`) in VS Code.
   - Right-click on the HTML file and select `Open with Live Server` from the context menu.
   - Your default web browser should open, displaying the HTML page. Any changes you make to the HTML file will automatically reload in the browser.

## React Project

### Setting Up the React Project Using Vite

1. **Download the React Project Files**
   - Download the React project files provided by your instructor.
   - Extract the files to a directory of your choice.

2. **Navigate to the Project Directory**
   - Open a terminal or command prompt.
   - Use the `cd` command to navigate to the project directory. For example:
     ```sh
     cd path/to/your/react-project
     ```

3. **Install Dependencies**
   - Run the following command to install the necessary dependencies:
     ```sh
     npm install
     ```

4. **Start the Development Server**
   - After the dependencies are installed, start the development server by running:
     ```sh
     npm run dev
     ```
   - You should see output indicating that the server is running and a local URL where you can view your project, typically `http://localhost:5173`.

5. **Open the Project in Your Browser**
   - Open your web browser and navigate to the URL provided by the development server (e.g., `http://localhost:5173`).

### Setting Up a Standard React Project (without Vite)

1. **Download the React Project Files**
   - Download the React project files provided by your instructor.
   - Extract the files to a directory of your choice.

2. **Navigate to the Project Directory**
   - Open a terminal or command prompt.
   - Use the `cd` command to navigate to the project directory. For example:
     ```sh
     cd path/to/your/react-project
     ```

3. **Install Dependencies**
   - Run the following command to install the necessary dependencies:
     ```sh
     npm install
     ```

4. **Start the Development Server**
   - Start the development server by running:
     ```sh
     npm start
     ```
   - This will automatically open your new React app in your default web browser, typically at `http://localhost:3000`.

## Additional Resources

- **MDN Web Docs:** Comprehensive documentation and tutorials for HTML, CSS, and JavaScript. [Visit MDN](https://developer.mozilla.org/)
- **React Documentation:** Official documentation for React. [Visit React Docs](https://reactjs.org/docs/getting-started.html)
- **Vite Documentation:** Official documentation for Vite. [Visit Vite Docs](https://vitejs.dev/guide/)

## Troubleshooting

If you encounter any issues while setting up your projects, here are some common solutions:

- **Node.js Not Installed:** Make sure Node.js is installed and added to your system PATH.
- **Permission Issues:** Run your terminal or command prompt as an administrator.
- **Dependencies Not Installing:** Delete the `node_modules` folder and `package-lock.json` file, then run `npm install` again.

If you need further assistance, feel free to reach out to your instructor.
