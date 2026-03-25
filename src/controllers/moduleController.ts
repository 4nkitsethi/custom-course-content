// moduleController.ts

// Business logic for module operations

const modules = []; // This will hold our modules in memory

// Create a new module
export function createModule(moduleData) {
    modules.push(moduleData);
    return moduleData;
}

// Get all modules
export function getModules() {
    return modules;
}

// Update a module
export function updateModule(moduleId, updatedData) {
    const moduleIndex = modules.findIndex(module => module.id === moduleId);
    if (moduleIndex === -1) return null;
    modules[moduleIndex] = { ...modules[moduleIndex], ...updatedData };
    return modules[moduleIndex];
}

// Delete a module
export function deleteModule(moduleId) {
    const moduleIndex = modules.findIndex(module => module.id === moduleId);
    if (moduleIndex === -1) return null;
    return modules.splice(moduleIndex, 1);
}