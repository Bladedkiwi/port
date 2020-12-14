//Looked into node.js and using the fs module and path module that are natively built into it.
//This solved the problem of getting all image file name paths, without the need of typing them out myself
const fs = require("fs");
const path = require("path");
try {
	const arrayOfFiles = fs.readdirSync("./");
	const allFiles = function (dirPath, arrayOfFiles) {
		files = fs.readdirSync(dirPath);

		arrayOfFiles = arrayOfFiles;

		files.forEach(function (file) {
			if (fs.statSync(dirPath + "/" + file).isDirectory()) {
				arrayOfFiles = allFiles(dirPath + "/" + file, arrayOfFiles);
			} else {
				arrayOfFiles.push(path.join(`${dirPath}/${file}`));
				arrayOfFiles = arrayOfFiles.filter((item) => {
					return path.extname(item) === ".webp";
				});
			}
		});
		return arrayOfFiles;
	};
	const result = allFiles("./", arrayOfFiles);
	fs.writeFile("./test.json", JSON.stringify(result), (err) => {
		if (err) {
			console.error(err);
			return;
		}
	});
} catch (e) {
	console.log(e);
}

/* Realized that completing this action through a server was causing issues with readdirSync. Started thinking about the action of calling node 'filename' and how it's running a script and not displaying anything. So, I tested it one more time, after all the learning 'fails' below. Even though, I could have written the exact same json file myself, and probably taken around the same amount of time. I knew researching into using node.js's 'fs' would work. One of my 'fails' showed all the files I wanted in the console, but it had repeated the function multiple times with progressive arrays. Essentially meaning, I was grabbing my desired array at the wrong time. I couldn't figure it out as to why it wasn't working, so I kept looking at different solutions. I'm fairly positive I could go further into cleaning up the json file for usage, but for the time being it will work. 

Researched things from: 
https://nodejs.dev/learn/writing-files-with-nodejs
https://coderrocketfuel.com/article/recursively-list-all-the-files-in-a-directory-using-node-js
https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
https://stackoverflow.com/questions/17614123/node-js-how-to-write-an-array-to-file
https://stackoverflow.com/questions/44199883/how-do-i-get-a-list-of-files-with-specific-file-extension-using-node-js

*/

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//     const fileList = [];
// function walk(currentDirPath, callback) {
//     var fs = require('fs'),
//         path = require('path');
//     fs.readdir(currentDirPath, function (err, files) {
//         if (err) {
//             throw new Error(err);
//         }
//         files.forEach(function (name) {
//             var filePath = path.join(currentDirPath, name);
//             var stat = fs.statSync(filePath);
//             if (stat.isFile()) {
//                 callback(filePath, stat);
//             } else if (stat.isDirectory()) {
//                 walk(filePath, callback);
//             }
//         });
//     });
//     console.log(fileList);
//     }
//     walk('./', function (filePath, stat) {
//         fileList.push(filePath)
//     });
// async function walk(dir) {
//     const files = fs.readdir(dir).map(async file => {
//         const filePath = path.join(dir, file);
//         const stats = fs.stat(filePath);
//         if (stats.isDirectory()) return walk(filePath);
//         else if(stats.isFile()) return filePath;
//     });

//     return files.reduce((all, folderContents) => all.concat(folderContents), []);
// }
// async function main() {
//     let dir = './';
//     console.log(await walk(dir));
// }
// main();
// const fileList = [];
// function search(currDir, call) {
//     fs.readdir(currDir, function (err, files) {
//         if (err) {
//             throw new Error(err);
//         }
//         files.forEach(function (name) {
//             let filePath = path.join(currDir, name);
//             let stat = fs.statSync(filePath);
//             if (stat.isFile()) {
//                 fileList.push(filePath);
//                 call(filePath, stat);
//             } else if (stat.isDirectory()) {
//                 search(filePath, call);
//             }
//         });
//     });
// }
// search('./', function (filePath, stat) {
//     fileList.map(fileName => {
//         return fileName;
//     });
//     console.log(fileList);
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });
