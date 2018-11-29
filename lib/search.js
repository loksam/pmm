const client = require('cheerio-httpcli');

module.exports = function(package) {

    if (!package) {
        console.log('please input package name');
        return false;
    }

    var list = [
        { 
            'name' : 'npm', 
            'url' : 'https://www.npmjs.com/package/' 
        },
        //'choco',
        /*
        {
            'name' : 'brew',
            'url' : 'https://formulae.brew.sh/formula/'
        },
        */
        //'scoop',
        //'composer',
        { 
            'name' : 'pip', 
            'url' : 'https://pypi.org/project/' 
        },
        //'gem'
    ]  

    list.forEach((manager) => {
 
        var url = manager.url + package

        const p = client.fetch(url)
            .then((result) => {
                console.log(package + ' found in ' + manager.name)
            });
    });

}
