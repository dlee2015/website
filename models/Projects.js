const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	Title: String,
	Short: String,
	Url: String,
	About: String,
	Difficulties: String,
	Technologies: String,
	Completed: Boolean,
	github: String
});

module.exports = Projects = mongoose.model('Projects', ProjectSchema);
