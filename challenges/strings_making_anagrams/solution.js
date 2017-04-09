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
  var a = readLine();
  var b = readLine();
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      var index = b.indexOf(a[i]);
      b = (b.slice(0,index) + b.slice((index + 1), b.length));
    } else {
      count++;
    }
  }
  for (var j = 0; j < b.length; j++) {
    count++;
  }
  console.log(count);
}
