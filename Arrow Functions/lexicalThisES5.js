function punch() {
  var that = this; // Bad Solution in ES5
  this.health = 20;

  this.punches = function() {
    this.deadlyPunch = (function() {
      console.log(that.health - that.health);
    })();
  };
}

var testingPunch = new punch();

testingPunch.punches(); // return 0
