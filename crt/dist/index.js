#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
// Define the project structure: directories and their respective files
const projectStructure = {
    'src': ['index.js'],
    'public': ['index.html', 'styles.css'],
};
// Iterate over the structure, creating directories and files
Object.entries(projectStructure).forEach(([dir, files]) => {
    promises_1.default.mkdir(dir, { recursive: true }); // Create directories
    files.forEach(file => promises_1.default.writeFile(`${dir}/${file}`, '')); // Create files
});
console.log("Project structure created successfully!");
