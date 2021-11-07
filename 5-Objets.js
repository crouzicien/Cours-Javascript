/**
 * --------------------------
 * LES OBJETS
 * ---------------------------
 * type Object : {}
 * 
 * let voiture = {
 *      roues : 4,
 *      marque : "Peugeot",
 *      modele : "205 Gti"
 * }
 * 
 */



// ----------------EXERCICE----------------------
let voiture = {
    roues: 4,
    marque: "Peugeot",
    modele: "205 Gti",
    evenements: [
        {
            nom: "Rally Monte-carlo 1995",
            categorie: "Groupe B",
            gagne: true
        },
        {
            nom: "Paris-Dakar 1998",
            categorie: "4X4",
            gagne: false
        },
        {
            nom: "Rally Norvège 1996",
            categorie: "Groupe B",
            gagne: false
        }
    ]
}


// Afficher dans la console "La Peugeot 205 Gti à 4 roues"
console.log(`La ${voiture.marque} ${voiture.modele} à ${voiture.roues} roues`)

// Afficher tout les evenements aux quels elle a participé
console.log(voiture.evenements)

// Ajouter l'évenement "Rally Suède 1997" en categorie "Groupe A" qu'elle à remporté
let new_event = {
    nom: "Rally Suède 1997",
    categorie: "Groupe A",
    gagne: true
}
voiture.evenements.push(new_event)

// Afficher uniquement les evenements qu'elle à gagnés
for (let i = 0; i < voiture.evenements.length; i++) {
    const event = voiture.evenements[i];
    if (event.gagne) {
        console.log(event)
    }
}

// Afficher uniquement les evenements en categorie Groupe B
for (let i = 0; i < voiture.evenements.length; i++) {
    const event = voiture.evenements[i];
    if (event.categorie == "Groupe B") {
        console.log(event)
    }
}

// Afficher uniquement les evenements en categorie Groupe B qu'elle a gagné
for (let i = 0; i < voiture.evenements.length; i++) {
    const event = voiture.evenements[i];
    if (event.categorie == "Groupe B" && event.gagne) {
        console.log(event)
    }
}
