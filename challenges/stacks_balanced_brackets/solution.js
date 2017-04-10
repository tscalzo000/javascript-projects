process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  var t = parseInt(readLine());
  for(var a0 = 0; a0 < t; a0++){
    var expression = readLine();
    var parens = expression.replace(/[^\[\]{}()]/g, "");
    parens = parens.split("");
    var opens = [];
    for (var i = 0; i < parens.length; i++) {
      if (["[","{","("].includes(parens[i])) {
        opens.push(parens[i]);
      } else {
        var length = opens.length;
        if (["[]","{}","()"].includes( opens[length-1] + parens[i] )) {
          opens.pop();
        } else {
          console.log('NO');
          return;
        }
      }
    }
    if (opens.length > 0) {
      console.log('NO');
    } else {
      console.log('YES');
    }
  }
}
