function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Yes, there is a difference
// The addToRollingBuffer1 function uses the push() method,
// which mutates the argument passed into the `buffer` parameter
// The addToRollingBuffer2 function uses the concat() method,
// which returns a new array, so the initial array is not mutated
