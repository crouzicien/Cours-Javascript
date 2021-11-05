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

