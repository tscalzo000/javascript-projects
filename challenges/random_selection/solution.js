/*

Describe how you would go about creating a function to select k random items out of an input array of size n. The input array contains only unique items, and the result set should be only unique items.
 k <= n

int[] input = {-6, 2, 1, -10, -4, 8};         <- size n = 6
int k = 3;
possible output: {2, -10, 8}  NOT {2, -10, 2}


#    var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

*/

function random(array, selection) {
  var length = '';
  var output = [];
  var randomnumber = '';
  var a = '';
  for (var i=0; i<selection; i++) {
    length = array.length;
    randomnumber = Math.floor(Math.random() * ((length-1) - 0 + 1) + 0);
    a = array[randomnumber];
    output.push(a);
    array.splice(array.indexOf(a), 1);
  }
  console.log(output);
}

random([-6, 2, 1, -10, -4, 8], 3);
