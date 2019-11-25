class Pokemon {
  constructor(abilities = []) {
    this.abilities = abilities
  }

  addMoves(array) {
    // check if its empty 
    this.abilities = [...array]
  }
}


let list1 = ['speed boost', 'fly away', 'high jump']
let list2 = ['tsunami', 'power up', 'overcharge', 'battle cry', 'ramp']

let pokemon = new Pokemon()
