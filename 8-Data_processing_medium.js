/**
 * --------------------------
 * LE DATA PROCESSING - MEDIUM
 * ---------------------------
 * 
 * Quand on recois de la data, elle n'est jamais au format qui nous arrange. 
 * Il faut donc tres souvent la restructurer pour qu'elle soit le plus pratique a traiter pour nous.
 * Imaginons que l'on recoive une donnée qui est dans la variable "input"
 * Nous voulons la structurer comme la donnée dans la variable "output" (Elle sera bien plus pratique a traiter dans ce format)
 * 
 */

let input = {
    internal_id : {
        1 : 356,
        3: 456, 
        5: 827
    },
    names : {
        356 : "jean",
        827 : "mathilde",
        456 : "etienne"
    },
    ages : {
        456 : 38,
        356 : 35,
        827 : 22
    }
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

