const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

// Conditionally include the dev tools installer to load React Dev Tools
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            webSecurity: false
        }
    });

    // and load the index.html of the app.
    win.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    try {
        createWindow();
        win.maximize()

        // Open the DevTools.
        if (isDev) {
            win.webContents.openDevTools({ mode: "detach" });
        }
    } catch (error) {
        console.error(error)
    }
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.