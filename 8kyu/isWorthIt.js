//❓DESCRIPTION
// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.
//
// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!
//
// Add the method
//
// isWorthIt
// to decide if the ship is worthy to loot. For example:
//
// titanic.isWorthIt() // return false


//🌀TESTS
// const assert = require('chai').assert;
//
// describe('Captain, we see some ships!', () => {
//   it("Empty ship (draft: 0, crew: 0)", () => {
//     let emptyShip = new Ship(0,0);
//     assert.isFalse(emptyShip.isWorthIt());
//   });
//   it("A worth ship (draft: 100, crew: 20)", () => {
//     let aWorthyShip = new Ship(100,20);
//     assert.isTrue(aWorthyShip.isWorthIt());
//   });
// });

//✅SOLUTION

class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }

  isWorthIt() {
    const CREW_INDEX = 1.5;
    const MIN_VALUE = 20;
    const crewDraftIndex = this.crew * CREW_INDEX;
    const netDraft = this.draft - crewDraftIndex;
    return netDraft > MIN_VALUE;

  }
}

const aWorthyShip = new Ship(100, 20);
console.log(aWorthyShip.isWorthIt());
