
const exec = require('child_process').exec;

module.exports = function() {
    var home = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"]
    var list = [
        'npm',
        'choco',
        'brew',
        'scoop',
        'composer',
        'pip',
        'gem'
    ]  

    console.log('installed');
    console.log('----------------------------');

    list.forEach((manager) => {
        exec('which ' + manager, (err, stdout, stderr) => {
            if (!err) { 
                console.log(manager)
                console.log(stdout);
            }
        });
    });
};
