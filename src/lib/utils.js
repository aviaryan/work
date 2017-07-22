export default {
	/*
   * searchProjects filters the projects
   */
	filterProjects: (projects, query) => {
		let p = [];
		let qrArr = query.split(' ');
		let fail = false;
		for (let i of projects) {
			// match against all space separated queries
			fail = false;
			for (let q of qrArr) {
				// take single query
				let check = (i['name'].search(q) > -1) || (JSON.stringify(i['tags']).search(q) > -1);
				if (!check) {
					fail = true;
					break;
				}
			}
			// if matched
			if (!fail) {
				p.push(i);
			}
		}
		return p;
	}
}
