export default {
	/*
   * searchProjects filters the projects
   */
	filterProjects: (projects, query) => {
		let p = [];
		for (let i of projects) {
			if (i['name'].search(query) > -1) {
				p.push(i)
			}
		}
		return p;
	}
}
