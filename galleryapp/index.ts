import { app, BrowserWindow } from 'electron'

let win = null

function createWindow() {
  win = new BrowserWindow({width: 1280, height: 720})
  win.setTitle('CSUBU Lecturers')
  win.loadFile('index.html')
  win.on('closed', () => { win = null })
}

app.on('ready', () => {
    createWindow()
})

// สำหรับ macOS 
app.on('window-all-closed', function () {
  // ถ้าหน้าต่างทุกอันปิด
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// ถ้ากด icon ของ app ใหม่
app.on('activate', function () {
  if (win == null) {
    createWindow()
  }
})
