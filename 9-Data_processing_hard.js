/**
 * --------------------------
 * LE DATA PROCESSING - HARD
 * ---------------------------
 * 
 * Quand on recois de la data, elle n'est jamais au format qui nous arrange. 
 * Il faut donc tres souvent la restructurer pour qu'elle soit le plus pratique a traiter pour nous.
 * Dans cette exemple, vous récuperez des données d'un serveur central mc Donald, 
 * vous avez besoin de restructurer la donner afin quelle soit plus facilement affichable sur les dispositifs de vente.
 * 
 * En inputs vous avez : 
 *  menus : Contient la composition des menus McDo
 *  items : Contient tout les produits McDo
 *  drinks_dispo : Contient la disponibilité des boissons du restaurant
 *  burger_dispo : Contient la disponibilité des burgers du restaurant
 * 
 */

let menus = {
    20: {
        name: "Menu McChiken",
        burger: [255],
        drink: [805, 887, 132]
    },
    33: {
        name: "Menu Wrap",
        burger: [132, 887],
        drink: [887, 132, 805]
    }
}
let items = [
    {
        id: 225,
        name: "Burger McChicken",
        step: 'burger'
    },
    {
        id: 805,
        name: "Coca-Cola",
        step: 'drink'
    },
    {
        id: 887,
        name: "Ice-tea",
        step: 'drink'
    },
    {
        id: 132,
        name: "Pepsi",
        step: 'drink'
    },
    {
        id: 887,
        name: "grand wrap poulet",
        step: 'burger'
    },
    {
        id: 132,
        name: "grand wrap boeuf",
        step: 'burger'
    }
]
let drinks_dispo = {
    805: false,
    887: false,
    132: true
}
let burger_dispo = {
    225: true,
    887: false,
    132: false
}

// let output = [
//     {
//         id: 20,
//         name: "Menu McChiken",
//         price: 9.5,
//         dispo: true, // Le menu est disponible si au moins un element dans chaque étape est dispo
//         steps: {
//             burgers: [
//                 {
//                     id: 225,
//                     name: "Burger McChicken",
//                     dispo : true
//                 }
//             ],
//             drinks: [
//                 {
//                     id: 805,
//                     name: "Coca-Cola 33Cl",
//                     dispo : false
//                 },
//                 {
//                     id: 132,
//                     name: "Pepsi",
//                     dispo : true
//                 },
//                 {
//                     id: 887,
//                     name: "Ice-tea",
//                     dispo : false
//                 }
//             ]
//         }
//     }
// ]


// Créer une fonction qui prend "menus", "items", "drinks_dispo" et "burger_dispo" en paramètre et qui retourne la data structurée comme "output"

