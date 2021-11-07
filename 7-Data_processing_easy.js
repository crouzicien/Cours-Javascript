/**
 * --------------------------
 * LE DATA PROCESSING - EASY
 * ---------------------------
 * 
 * Quand on recois de la data, elle n'est jamais au format qui nous arrange. 
 * Il faut donc tres souvent la restructurer pour qu'elle soit le plus pratique a traiter pour nous.
 * Imaginons que l'on recoive une donnée qui est dans la variable "input"
 * Nous voulons la structurer comme la donnée dans la variable "output" (Elle sera bien plus pratique a traiter dans ce format)
 * 
 */

let input = {
    users: ["1-jean", "3-mathilde", "5-Etienne"],
    ages: [35, 38, 22]
}

// let output = [
//     {
//         id: 1,
//         name: "jean",
//         age: 35
//     },
//      etc ...
// ]


// Créer une fonction qui prend "input" en paramètre et qui retourne la data structurée comme "output"
function maFonction(input) {
    let output = []

    for (let i = 0; i < input.users.length; i++) {
        const user = input.users[i];
        const age = input.ages[i];

        let id = user.split('-')[0]
        let name = user.split('-')[1]

        let element = {
            id: id,
            name: name,
            age: age
        }
        output.push(element)
    }

    return output
}

let result = maFonction(input)
console.log(result)