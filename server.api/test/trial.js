let path = require('path');
console.log('*************')

let exec = require('child_process');

let parseString = require('xml2js').parseString;

exec.exec('airport -I -x', function(err, data){
  if(err){
    return
  }else{
    parseString(data, function (err, result) {
      console.log(JSON.stringify(result));
    });
  }
});
