document.addEventListener('DOMContentLoaded', () => {
  const folderInput = document.getElementById('folder');

  // Browse folder
  document.getElementById('browseBtn').addEventListener('click', async () => {
    const folder = await window.api.selectFolder();
    if (folder) folderInput.value = folder;
  });

  // Run command helper
  async function runCommand(cmd) {
    if (!folderInput.value.trim()) return alert("Please select a folder first!");
    await window.api.runCommand(folderInput.value.trim(), cmd);
  }

  // Buttons for npm commands
  document.getElementById('devBtn').onclick = () => runCommand('npm run dev');
  document.getElementById('buildBtn').onclick = () => runCommand('npm run build');
  document.getElementById('lintBtn').onclick = () => runCommand('npm run lint');

  document.getElementById('installBtn').onclick = async () => {
    const pkg = prompt('Enter npm package name:');
    if (pkg) runCommand(`npm install ${pkg}`);
  };

  document.getElementById('stopBtn').onclick = async () => {
    await window.api.stopCommand();
  };
});
