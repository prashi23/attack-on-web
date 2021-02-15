const fs = require('fs');
path = require('path');

function crawl(dir){
    const files = fs.readdirSync(dir);
    files.forEach(file=> {
        //console.log(file);
        const next = path.join(dir,file)
        if(fs.lstatSync(next).isDirectory()==true) {
            crawl(next);
        }
        else{
            console.log('\t', next);
        }
    })
}

crawl(__dirname);