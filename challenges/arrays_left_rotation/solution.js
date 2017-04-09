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
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]); // numbers
  var k = parseInt(n_temp[1]); // shift
  a = readLine().split(' ');
  a = a.map(Number); // array
  ///
  var output = [];
  for (var i = 0; i < n; i++) {
    if (i <= (k-1)) {
      output[n-k+i] = a[i];
    } else {
      output[i-k] = a[i];
    }
  }
  console.log(output.join(" "));
}
