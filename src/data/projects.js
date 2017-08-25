/*
 * Projects listing
 */

let projects = [
	{
		id: 'clipjump',
		name: 'Clipjump',
		desc: [
			'Clipjump is a full fledged clipboard manager for Windows. It relies on the power of keyboard shortcuts and combinations.',
			'It supports extension via plugins, has configurable hotkeys and enables users to write scripts via a feature known as Clipjump Custom.'
		],
		date: '2013-16',
		github: 'https://github.com/aviaryan/Clipjump',
		weight: 2,
		websites: ['http://clipjump.sourceforge.net'],
		tags: ['autohotkey', 'clipboard']
	},
	{
		id: 'shach',
		name: 'Shach',
		desc: ['Shach is a compiler written in Yacc/Lex that converts a common language to Bash and Batch.'],
		github: 'https://github.com/aviaryan/shach/blob/master/REPORT.md',
		date: '2017',
		tags: ['compiler', 'cpp']
	},
	{
		id: 'su4ahk',
		name: 'Sublime 4 AutoHotkey',
		desc: [
			'A Sublime Text addon to do AutoHotkey coding in the editor. Provides much more than a Sublime Text package.'],
		github: 'https://github.com/aviaryan/Sublime4Autohotkey',
		date: '2013-14',
		tags: ['autohotkey', 'sublime-text']
	},
	{
		id: 'hinix',
		name: 'Hinix',
		desc: [
			'Android game based on the popular classic Boggle. Distributed on Play Store with 4.5+ rating.',
			'Champion Hackathon project.'],
		date: '2016',
		github: 'https://github.com/aviaryan/Hinix',
		tags: ['android', 'java', 'game'],
		weight: 1,
		websites: ['https://play.google.com/store/apps/details?id=in.aviaryan.hinix']
	},
	{
		id: 'cfbuddy',
		name: 'CF Buddy',
		date: '2017',
		desc: ['App that uses CodeForces API to show programming problems, user profiles, blog posts and contests.'],
		tags: ['android', 'java', 'codeforces'],
		github: 'https://github.com/aviaryan/CFBuddy'
	},
	{
		id: 'anyaudio',
		name: 'AnyAudio',
		desc: ['AnyAudio is an audio-streaming service that uses YouTube as the source. Written in Flask.'],
		date: '2016-present',
		tags: ['flask', 'backend', 'python'],
		github: 'https://github.com/anyaudio',
		githubRepo: 'https://github.com/anyaudio/anyaudio-server',
		websites: ['http://anyaudio.in']
	},
	{
		id: 'pop-patna',
		name: 'Popular Places in Patna',
		desc: ['A modern web-app showing popular places to visit in Patna using Google Maps and Foursquare data.'],
		date: '2017',
		tags: ['webpack', 'webapp', 'javascript'],
		github: 'https://github.com/aviaryan/pop-places-patna',
		websites: ['http://aviaryan.in/pop-places-patna/']
	},
	{
		id: 'typ3r',
		name: 'tYp3r',
		desc: ['dA aNn0Y1Ng t3Xt g3NeRa7or (The annoying text generator :-P)'],
		date: '2017',
		tags: ['webapp'],
		github: 'https://github.com/aviaryan/tYp3r',
		websites: ['http://typ3r.aavi.me']
	},
	{
		id: 'typ3rjs',
		name: 'typ3r.js',
		date: '2017',
		desc: ['JavaScript library to convert sane human readable text to a not s0 hUMaN Re@dAbLE t3xT. No external dependencies.'],
		tags: ['javascript', 'npm'],
		github: 'https://github.com/aviaryan/typ3r.js'
	},
	{
		id: 'bigeval',
		name: 'BigEval.js',
		date: '2015-16',
		weight: 1,
		desc: ['JavaScript library to evaluate mathematical expressions from strings. Supports all advanced mathematics expressions.'],
		tags: ['javascript', 'npm'],
		github: 'https://github.com/aviaryan/BigEval.js'
	},
	{
		id: 'algos',
		name: 'Algos',
		date: '2017-present',
		desc: ['Implementation of popular algorithms and data structures in popular languages. Lead maintainer of the project.'],
		tags: ['algorithm', 'data-structures'],
		weight: -1,
		github: 'https://github.com/iiitv/algos'
	},
	{
		id: 'resume',
		name: 'Resume',
		date: '2016',
		desc: ['Pseudo dynamic resume template created in Jekyll. Change YAML files to update resume.'],
		tags: ['jekyll', 'website'],
		github: 'https://github.com/aviaryan/resume',
		websites: ['http://aviaryan.in/resume/']
	},
	{
		id: 'ahkst',
		name: 'AHK package Sublime',
		date: '2014',
		desc: ['AutoHotkey package for Sublime Text. Now discontinued in favor of the community package.'],
		tags: ['autohotkey', 'sublime-text'],
		github: 'https://github.com/aviaryan/AutoHotkey'
	},
	{
		id: 'stealFunc',
		name: 'Steal Func',
		date: '2014',
		desc: ['Library to extract the minimum code needed from an external library OR say it strips out unused code.'],
		tags: ['autohotkey', 'regex', 'scripting'],
		weight: 2,
		github: 'https://github.com/aviaryan/autohotkey-scripts/blob/master/Tools/stealFuncfromLib.ahk'
	},
	{
		id: 'nologin',
		name: 'Awesome No Login Web Apps',
		date: '2016-17',
		desc: ['Curated list of awesome web apps that work without requesting you to create an account.'],
		tags: ['awesome-list'],
		github: 'https://github.com/aviaryan/awesome-no-login-web-apps'
	},
	{
		id: 'kissdown',
		name: 'KissAnime Batch Downloader',
		date: '2017',
		desc: ['Scripts that fetch download links of any series on KissAnime, KissAsian or KissCartoon and gives them to you in the form of a list.'],
		tags: ['javascript', 'hacking'],
		github: 'https://github.com/aviaryan/Kissanime-Batch-Downloader'
	},
	{
		id: 'udportfolio',
		name: 'Simple Portfolio',
		date: '2017',
		desc: ['A simple, lightweight, responsive portfolio design.'],
		tags: ['website'],
		github: 'https://github.com/aviaryan/ud-portfolio',
		websites: ['http://aviaryan.in/ud-portfolio/']
	},
	{
		id: 'last2imgur',
		name: 'Last 2 Imgur',
		date: '2017',
		desc: ['Alfred workflow to upload the last screenshot taken to Imgur + (delete and minify image)'],
		tags: ['alfred', 'scripting'],
		github: 'https://github.com/aviaryan/alfred-last2imgur'
	},
	{
		id: 'abc',
		name: 'ABC',
		date: '2017-present',
		desc: ['Commandline-line app in Go to interact with appbase.io and import data from various databases to ElasticSearch.',
			'Source databases like Postgres, Mongo, MySQL, MSSQL etc are supported.'],
		tags: ['golang', 'cli'],
		weight: 2,
		github: 'https://github.com/appbaseio/abc'
	},
	{
		id: 'catalog',
		name: 'Anime Catalog',
		date: '2017',
		desc: ['Full stack app that allows users to login and list down favorite anime series.'],
		tags: ['webapp', 'backend', 'flask', 'python'],
		github: 'https://github.com/aviaryan/ud-catalog'
	},
	{
		id: 'website',
		name: 'My Blog/Website',
		date: '2013-16',
		desc: ['Blog + website written in Jekyll.'],
		tags: ['website', 'blog', 'jekyll'],
		github: 'https://github.com/aviaryan/aviaryan.github.com',
		websites: ['http://aviaryan.github.io']
	},
	{
		id: 'dls',
		name: 'DLS',
		date: '2016',
		desc: [
			'Direct Link Service. A pastebin for text and uploading files where you can choose a custom link.',
			'Also file and text will be accessible/downloadable from easy to remember direct links.'],
		tags: ['flask', 'backend', 'python'],
		github: 'https://github.com/aviaryan/dls',
		websites: ['http://dls.aviaryan.in/']
	},
	{
		id: 'orga-server',
		name: 'Open Event Server',
		date: '2016-17',
		desc: ['API server to enable organizers to manage events from concerts to conferences and meet-ups. Part of the open event ecosystem.',
			'Deployable on Digital Ocean, Google Cloud, EC 2 and Heroku.'],
		tags: ['flask', 'backend', 'python'],
		github: 'https://github.com/fossasia/open-event-orga-server',
		weight: 1,
		websites: ['https://open-event-dev.herokuapp.com', 'https://eventyay.com']
	},
	{
		id: 'competitive',
		name: 'Competitive Codes',
		date: '2015-present',
		desc: ['This project contains all the codes I made in my journey of competitive programming.',
			"I prefer to write in CPP. Have lost interest in competitive programming recently, more aligned towards development."],
		tags: ['algorithm', 'data-structures', 'cpp'],
		github: 'https://github.com/aviaryan/competitive'
	},
	{
		id: 'sub-notebook',
		name: 'Sublime Notebook',
		date: '2017',
		desc: ['Sublime Notebook is an attempt to use Sublime Text as a complete note taking application.'],
		tags: ['sublime-text', 'python'],
		github: 'https://github.com/aviaryan/SublimeNotebook',
		websites: ['https://medium.com/aviaryan/sublime-notebook-an-attempt-to-use-sublime-text-as-my-note-taking-application-b8d846c47905#.hy8alq2ip']
	},
	{
		id: 'lcpscancode',
		name: 'CC Licenses Parser for Scancode',
		date: '2017',
		desc: ['This script scans Creative Commons License pages and generate scancode data files.'],
		tags: ['scripting', 'python', 'regex'],
		weight: -2,
		github: 'https://github.com/aviaryan/cc-licenses-parser-scancode'
	},
	{
		id: 'lc3-sublime',
		name: 'LC3 Sublime',
		date: '2015',
		desc: ['A Package to provide syntax highlighting for LC3 .asm files in Sublime Text.',
			'"Goto Symbol" feature in Sublime Text corresponds to labels in the assembly code.'],
		tags: ['sublime-text', 'regex'],
		github: 'https://github.com/aviaryan/lc3-sublime'
	},
	{
		id: 'close-folder',
		name: 'Close Folder',
		date: '2015',
		desc: ['A simple Sublime Text plugin to close all open files of current directory or all open files inside some directory.',
			'Supports Sublime Text 2 and 3. Available on Package Control as CloseFolder'],
		tags: ['sublime-text'],
		github: 'https://github.com/aviaryan/CloseFolder'
	},
	{
		id: 'quotesOnTheGo',
		name: 'Quotes On The Go',
		date: '2017',
		desc: ['Command line application that shows you a random quote using forismatic.com API.'],
		tags: ['golang', 'cli'],
		weight: -2,
		github: 'https://github.com/aviaryan/quotesOnTheGo'
	},
	{
		id: 'csbed',
		name: 'Counter Strike Bot Editor',
		date: '2013',
		desc: ['Counter Strike 1.6/CZ complete bot profiles editor with a GUI. Last updated on Jan 2013.'],
		tags: ['autohotkey', 'gui'],
		github: 'https://github.com/aviaryan/Counter-Strike-Bot-Editor'
	},
	{
		id: 'series-renamer',
		name: 'Series Renamer',
		date: '2015',
		desc: ['Python script that connects to thetvdb.com and renames your TV series in any fashion you want.'],
		tags: ['python', 'cli', 'regex', 'pip'],
		github: 'https://github.com/aviaryan/series-renamer',
		weight: 1,
		websites: ['http://aviaryan.github.io/series-renamer/']
	},
	{
		id: 'gmd',
		name: 'Github Markdown Preview',
		date: '2016',
		desc: ['A simple webapp to preview markdown text (GFM) using Github API. Also allows you to print markdown document.'],
		tags: ['webapp'],
		github: 'https://github.com/aviaryan/javascripts/tree/gh-pages/github.md',
		websites: ['http://gmd.aavi.me/']
	},
	{
		id: 'gig',
		name: 'Gradient Image generator',
		date: '2015',
		desc: ['A tool to convert CSS gradients to image files. Height and width of the image can be set by the user.'],
		tags: ['webapp'],
		github: 'https://github.com/aviaryan/javascripts#gradient-image-generator-gig',
		websites: ['http://gig.aavi.me/']
	},
	{
		id: 'puzzle8',
		name: 'Puzzle-8',
		date: '2016',
		desc: ['8-Puzzle game in Android. Includes automatic puzzle solver.'],
		tags: ['android', 'java', 'game'],
		github: 'https://github.com/aviaryan/CSwA_puzzle8'
	},
	{
		id: 'nkm-server',
		name: 'NowKnowMore server',
		date: '2016',
		desc: [
			'Now Know More is a news aggregation service that allows you to follow any topic of your interest and get latest news on the same.',
			'The topic can by anything from "Good Recipes" to "Stock Market" to "Fitness Tips".',
			'The whole thing was built in 8 hrs with swagger API documentation and integrated unit testing.'],
		tags: ['backend', 'flask', 'python'],
		github: 'https://github.com/aviaryan/nkm-server'
	},
	{
		id: 'dockerfiles',
		name: 'Dockerfiles',
		date: '2016',
		desc: ['Free, useful Docker images built by me.'],
		tags: ['docker'],
		github: 'https://github.com/aviaryan/Dockerfiles'
	},
	{
		id: 'emojiui',
		name: 'EmojiUI',
		date: '2016',
		desc: ['Offline and cross-platform emoji finding tool using Electron.'],
		tags: ['npm', 'javascript', 'electron'],
		github: 'https://github.com/aviaryan/emojiui'
	},
	{
		id: 'lxiym-pdf',
		name: 'Learn X in Y minutes - PDF',
		date: '2015-16',
		desc: ['Small code-oriented PDFs to master any programming language.'],
		tags: ['python', 'scripting'],
		github: 'https://github.com/aviaryan/learnxinyminutes-pdf'
	},
	{
		id: 'ots-2016-cal',
		name: 'OTS 2016 Google Calendar',
		date: '2016',
		desc: ['A quick and dirty little thing that takes OTS 2016 schedule (json) and creates Google Calendars (and iCalendars .ics) out of it.'],
		tags: ['golang', 'scripting', 'ci'],
		github: 'https://github.com/aviaryan/opentechsummit-2016-calendar'
	},
	{
		id: 'ahk-ci',
		name: 'AutoHotkey CI',
		date: '2016',
		desc: ['Example project to demonstrate how to use AppVeyor to set up continuous testing for an AutoHotkey project.'],
		tags: ['autohotkey', 'scripting', 'ci'],
		github: 'https://github.com/aviaryan/Ahk-CI-Example',
		websites: ['https://autohotkey.com/boards/viewtopic.php?f=6&t=16168']
	},
	{
		id: 'collegare-server',
		name: 'Collegare Server',
		date: '2015',
		desc: ['Unofficial college\'s social networking platform. I worked on the backend.'],
		tags: ['php', 'backend'],
		github: 'https://github.com/aviaryan/collegare-server'
	},
	{
		id: 'pythons',
		name: 'Pythons',
		date: '2016',
		desc: ['Little python scripts I made to make my life easier. Scripts like Twitter follow bot, emoji searching tool, encrypt/decrypt tool and so on.'],
		tags: ['python', 'scripting'],
		github: 'https://github.com/aviaryan/pythons'
	},
	{
		id: 'ahks',
		name: 'AutoHotkey scripts',
		date: '2013-16',
		desc: ['A collection of Autohotkey scripts and libraries authored by me'],
		tags: ['autohotkey', 'scripting'],
		weight: 1,
		github: 'https://github.com/aviaryan/autohotkey-scripts'
	},
	{
		id: 'gcide',
		name: 'GCIDE JSON',
		date: '2015-16',
		desc: ['GCIDE dictionary in json format. Also includes a command-line dictionary application.'],
		tags: ['python', 'scripting', 'scraping'],
		github: 'https://github.com/aviaryan/gcide-dictionary-json'
	},
	{
		id: 'bootstrap-chm',
		name: 'Bootstrap CHM',
		date: '2015-16',
		desc: ['Bootstrap documentation in chm, complete with Index and TOC. Especially suited for Windows based developers.'],
		tags: ['python', 'scripting', 'scraping'],
		github: 'https://github.com/aviaryan/bootstrap-chm'
	},
	{
		id: 'algorithms-course',
		name: 'Algorithms 101',
		date: '2015-16',
		desc: ['Algorithm implementations from my 4th semester Algorithms 101 course.'],
		tags: ['cpp', 'algorithm', 'data-structures'],
		github: 'https://github.com/aviaryan/algorithms-course'
	},
	{
		id: 'brain-games',
		name: 'Brain Games',
		date: '2015',
		desc: [
			'Games to boost one\'s brain, written in Python using Pyglet. Includes 6 different exciting games.',
			'Pre-compiled binaries available for Windows.'
		],
		weight: 2,
		tags: ['python', 'game', 'gui'],
		github: 'https://github.com/aviaryan/BrainGames'
	},
	{
		id: 'ahk-best',
		name: 'Ahk Best Practises',
		date: '2016',
		desc: [
			'Good practices in AutoHotkey coding that will help avoid bugs and make your code more readable'
		],
		tags: ['autohotkey'],
		github: 'https://github.com/aviaryan/Ahk-Best-Practices'
	},
	{
		id: 'pop-movies',
		name: 'Popular Movies',
		date: '2016',
		desc: ['An app to showcase trending and popular movies.'],
		tags: ['android', 'java'],
		github: 'https://github.com/aviaryan/PopularMovies'
	},
	{
		id: 'ini-translator',
		name: 'INI Translator',
		date: '2013',
		desc: [
			'A program to translate ini-formatted files (key=value) in one go. Supports all popular formats.',
			'Uses scraping for Google Translate to achieve the results.'
		],
		tags: ['autohotkey', 'scripting', 'scraping'],
		github: 'https://github.com/aviaryan/initranslator'
	},
	{
		id: 'shape-recog',
		name: 'Shape Recognition',
		date: '2015',
		desc: [
			'Shape Recog is a figure analyzer and synthesizer. It corrects the figure you have drawn to fit a known geometrical representation.',
			'The developed version only checks if it\'s square, rectangle, triangle, circle, line or INVALID.'
		],
		tags: ['autohotkey', 'maths', 'gui'],
		github: 'https://github.com/aviaryan/shape-recog'
	},
	{
		id: 'highlighter-ahk',
		name: 'AutoHotkey Syntax Highlighter',
		date: '2014',
		desc: ['AutoHotkey Syntax Highlighter Brush with Zenburn and GitHub themes'],
		tags: ['javascript', 'regex'],
		github: 'https://github.com/aviaryan/highlighter-ahk-zenburn'
	},
	{
		id: 'light-ahk',
		name: 'Light AHK',
		date: '2014',
		desc: ['Really lightweight syntax highlighting for AutoHotkey. Only 6.4kb non-gzipped overhead.',
			'This includes syntax highlighting library + css styles.'],
		tags: ['javascript', 'regex'],
		github: 'https://github.com/aviaryan/lightAHK'
	},
	{
		id: 'ini-hl',
		name: 'INI Highlighter',
		date: '2013-14',
		desc: ['Syntax Highlighter Brush for INI format'],
		tags: ['javascript', 'regex'],
		github: 'https://github.com/aviaryan/lightAHK'
	},
	{
		id: 'wtfeed',
		name: 'What the Feed',
		date: '2016',
		desc: [
			'What The Feed is a social media aggregration platform that helps you follow related social media accounts at once.',
			'Suppose you are interested in some topic, say "Indian Finance", WTF will automatically find the leading social ' +
				' media accounts for that topic, follow their posts and provide you with an aggregrated feed.',
			'Twitter, Instagram and Tumblr are supported at the moment.'
		],
		tags: ['python', 'backend', 'django'],
		github: 'https://github.com/iiitv/hackathon-fullstack-server'
	}
];


/*
 * Sort and return
 */
function compareDates(a, b) {
	// current year
	const year = new Date().getFullYear();
	// base year - when I started development
	const baseYear = 2013 - 1;

	// date value generator
	const fd = (date) => {
		if (date.indexOf('present') > -1)
			return year - baseYear + 1; // largest, so +1
		else {
			for (let yr = year; yr > baseYear; yr--) {
				if (date.indexOf(yr.toString().substring(3)) > -1) {
					return yr - baseYear;
				}
			}
		}
	};

	let wta = fd(a.date) + (a.weight || 0);
	let wtb = fd(b.date) + (b.weight || 0);

	if (wta < wtb) {
		return 1;
	} else if (wta > wtb) {
		return -1;
	} else {
		// a comes before b in original array
		// let comp = (a.weight || 5) <= (b.weight || 5);
		return -1; // (comp) ? 1 : -1;
	}
}

projects.sort(compareDates);

export default projects;
