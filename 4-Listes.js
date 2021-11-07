/**
 * --------------------------
 * LES LISTES
 * ---------------------------
 
    type Array : []
    
    let liste = ["Du fromage", 87, true]
    
 */



// ----------------EXERCICE----------------------
let liste = ["Fromage", "Oeufs", "Lait", "Oeufs"]
let ingredient = "Fromage"


// Afficher le 1er element de la liste dans la console
console.log(liste[0])

// Afficher tout les elements de la liste à l'aide d'une boucle
for (let i = 0; i < liste.length; i++) {
   const element = liste[i];
   console.log(element)
}

// Ajouter "Café" a la liste
liste.push("Café")
console.log(liste)

// Afficher chaque lettre de l'ingredient
for (let i = 0; i < ingredient.length; i++) {
   const lettre = ingredient[i];
   console.log(lettre)
}

// Determiner si l'ingredient contient la lettre "M"
for (let i = 0; i < ingredient.length; i++) {
   const lettre = ingredient[i];
   if (lettre == "m") {
      console.log("Il contient la lettre m")
   }
}

// Afficher si l'ingredient est présent dans la liste, si oui, a quelle position ?
for (let i = 0; i < liste.length; i++) {
   const element = liste[i];
   if (element == ingredient) {
      console.log(`C'est l'ingredient, il est a la position ${i}`)
   }
}

// Determiner quel element de la liste est en double
let elements_deja_vus = []
for (let i = 0; i < liste.length; i++) {
   const element = liste[i];

   if (elements_deja_vus.includes(element)) {
      console.log(`L'élement ${element} est en double`)
   } else {
      elements_deja_vus.push(element)
   }
}

// Supprimer le doublon
console.log(elements_deja_vus)

// Afficher les ingredients qui contiennent la lettre "E"
for (let i = 0; i < liste.length; i++) {
   const element = liste[i];

   let contient_e = false
   for (let l = 0; l < element.length; l++) {
      const lettre = element[l];
      if (lettre == "e") {
         contient_e = true
      }
   }

   if (contient_e) console.log(`${element} contient un e`)

}