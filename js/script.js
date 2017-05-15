// Vue.js app

var app = new Vue({
	el: '#app',
	data: {
		projects: projects,
		searchInput: ''
	},
	watch: {
		searchInput: function(val, oldVal){
			searchProjects(val)
		}
	}
})

/*
 * searchProject
 * :query: The string to search for
 */
function searchProjects(query){
	p = []
	for (let i of projects){
		if (i['name'].search(query) > -1){
			p.push(i)
		}
	}
	app.projects = p
}
