/** Here, we will use promise in ES6, because it's something that we need to learn **/

/** Declare the main function **/
const testNumber = a => {
  /** Here we are calling the "Promise Function"
   ** it takes two parameters, 'resolve' is when all conditions are good, we can compare it to a 'try'
   ** And 'reject' is when there is something wrong, we can compare it to catch
   **/
  return new Promise((resolve, reject) => {
    if (a === 10) {
      /** Calling resolve **/
      resolve("This number is 10 so it's good");
    } else {
      /** Calling Reject **/
      reject(() => {
        if (a < 10) {
          const numberToAdd = 10 - a;
          console.log(
            "It's not the number 10, you have to add : " + numberToAdd
          );
        } else {
          const numberToMinus = a - 10;
          console.log(
            "It's not the number 10, you have to minus : " + numberToMinus
          );
        }
      });
    }
  });
};

/**
 * Calling Function testNumber
 */
testNumber(10).then(result => console.log(result), failed => failed());
testNumber(5).then(result => console.log(result), failed => failed());
testNumber(15).then(result => console.log(result), failed => failed());

/** Another Examples **/

const test = x => {
  return new Promise((resolve, reject) => {
    if (x === 10) {
      resolve(console.log("Good"));
    } else {
      reject(console.log("Fail"));
    }
  })
    .then(function testReturned() {
      const final = `This is the final x : ${x}`;
      console.log(final);
    })
    .then(() => {
      const destroyX = x - x;
      console.log("X destroyed : " + destroyX);
    });
};

/** I use the setTimeout here just to split the first example to the second one in the console
 ** There's is no other reasons
 **/
setTimeout(() => console.log("SECOND EXAMPLE") + test(10), 1000);

/**
 * This one will fail and will not call function then()
 */
setTimeout(() => console.log("SECOND EXAMPLE") + test(50), 1500);
