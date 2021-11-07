/**
 * -------------------
 * LES VARIABLES
 * -------------------
    
    C'est une boite qui peux contenir : 
      type String : "Texte"
      type Number : Nombre
      type Boolean : True | False
      type Array : []
      type Object : {}
    
    
    Affichage dans la console : console.log( " ce que j'ai à afficher " )
 */



// ----------------EXERCICE----------------------
let nom = "Charles"
let age = 48

// Diviser l'age de Charles par 2 et l'afficher dans la console
console.log(age / 2)

// Créer une variable qui contient directement la phrase 'Charles a 48 ans' et console cette variable uniquement
let phrase = `Charles à ${age} ans`
console.log(phrase)

// Determiner combien d'années reste à Charles avant sa retraite (62ans)
let age_restant = 62 - age
console.log(`Il lui reste ${age_restant} années avant la retraite`)

// Determiner en pourcentage à combien il est de la retraite (ex : 31ans == 50% de la retraite)
let percent = age * 100 / 62
percent = Math.round(percent) // Arrondi le resultat
console.log(`Il est à ${percent}% de la retraite`)
