// Working with File System Module

const fs = require('fs');
//create a file with some sample text
fs.writeFile('example.txt',"this is an example",(err)=>{
    if(err) 
        console.log(err);
    else {
        console.log('File successfully created');
        // readfile requires encoding type as second argument
        fs.readFile('example.txt','utf8',(err,file)=>{
            if(err)
                console.log(err);
            else
                console.log(file);
        })
        // rename the file
        fs.rename('example.txt','example2.txt',(err)=>{
            if(err)
                console.log(err);
            else   
                console.log('successfully renamed the file');
            })
        //append text to the file
        fs.appendFile('example2.txt','Some data being appended',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('Successfully appended data to file');
                
        })
        fs.readFile('example2.txt','utf8',(err,file)=>{
            if(err)
                console.log(err);
            else
                console.log(file);
        })
    } 
})

//uncomment this block to delete the file.
/*
fs.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Successfully deleted file');
})
>
*/

/*
[sample Output]
File successfully created
this is an example
successfully renamed the file
Successfully appended data to file
this is an exampleSome data being appended
*/