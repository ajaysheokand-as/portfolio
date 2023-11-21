const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
  });

  //   mainWindow.loadFile(path.join(__dirname, "build", "index.html")); // Load the built React app's index.html
  //   mainWindow.loadFile(path.join(__dirname, "public", "index.html"));
  mainWindow.loadURL("http://localhost:3000");
  // Handle window close event
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
