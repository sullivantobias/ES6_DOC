function punch() {
  this.health = 20;

  this.punches = () => {
    this.deadlyPunch = (() => {
      /** This refer to the this.health setted above. */
      console.log(this.health - this.health);
    })();
  };
}

const testingPunch = new punch();

testingPunch.punches(); // return 0
