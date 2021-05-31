import * as fs from 'fs';

fs.readFile('bubbleSort.js', 'utf8', (err, data) => {
    if (err) {
        console.error(err.message);
        return ;
    }
    console.log(data);
});
