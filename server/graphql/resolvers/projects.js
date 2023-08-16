const Project = require("../../models/Project.model");

module.exports = {
  Query: {
    async getProjects() {
      try {
        const Projects = await Project.find();
        return Projects;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getProject(_, { projectId }) {
      try {
        const project = await Project.findById(projectId);
        if (project) {
          return project;
        } else {
          throw new Error("Project not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
