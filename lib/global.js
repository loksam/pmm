
const exec = require('child_process').exec;

module.exports = function(manager, package) {
    var home = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"]
    var pmm_path = home + '/.pmm/bin/';
    var manager_path = {
        'npm' : home + '/.nodebrew/current/bin/',
        'yarn' : home + '/.config/yarn/global/node_modules/.bin/'
    }
    console.log(home);

    exec('rm  ' + pmm_path + package);
    exec('sudo ln -s ' + manager_path[manager] + package + ' ' + pmm_path + package, (err, stdout, stderr) => {
        if (!err) { 
            console.log(stdout);
        }
    });
};
