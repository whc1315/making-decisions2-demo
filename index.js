console.log (`hello world`)

let backpack = []

backpack.push('sword', 'potion')
backpack.push('food')
backpack.push('shield')

let onBelt = backpack.splice(0,1)
//let onBelt = backpack.shift(); this makes sword a string
//console.log(backpack)
//console.log(onBelt)

let furCoat = 'fur coat'

backpack.push(furCoat)

backpack.pop()

let itemCount = backpack.length

backpack.push("flint", "blanket", "knife", "toothbrush")

let backpack2 = backpack.splice(3,3)

//console.log(backpack2[0])
//console.log(backpack[1])

//console.log('backpack2:', backpack2, 'Belt: ', onBelt, 'item-count:', itemCount)

for (let i = 0; i < backpack.length; i++) {
    console.log(backpack[i])
}

console.log('----------')
for (let i = 0; i <backpack2.length; i++) {
    console.log(backpack2[i])
}