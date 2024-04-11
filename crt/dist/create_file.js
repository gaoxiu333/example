#!/usr/bin/env node
import fs from 'fs/promises';
// Define the project structure: directories and their respective files
const projectStructure = {
    'src': ['index.js'],
    'public': ['index.html', 'styles.css'],
};
// Iterate over the structure, creating directories and files
Object.entries(projectStructure).forEach(([dir, files]) => {
    fs.mkdir(dir, { recursive: true }); // Create directories
    files.forEach(file => fs.writeFile(`${dir}/${file}`, '')); // Create files
});
console.log("Project structure created successfully!");
//# sourceMappingURL=create_file.js.map