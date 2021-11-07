/**
 * --------------------------
 * LES CONDITIONS
 * ---------------------------
 
    if ( conditions ) {
         je fait quelque chose
    }
    else if ( conditions ) {
         je fait autre chose
    }
    else {
         sinon je fait encore autre chose
    }

    opérateur de condition : 
          age == 48   true
          age >= 48   true
          age > 48    false
          age != 48   false
     

     multiple condition : 
          condition1 && condition2    - si condition1 et condition2 sont vraies
          condition1 || condition2    - si condition1 ou condition2 est vraie

 */



// ----------------EXERCICE----------------------

let nom = "Charles"
let age = 33        // il a 33 ans
let permis = true   // il a son permis
let experience = 5  // il a 5ans d'experience

let estMajeur       // Est il majeur ?
let aLaRetraite     // Est il a la retraite ?
let tranche         // Dans quel tranche est il ?

let boulot1
let boulot2
let boulot3
let boulot4

// ------------------------------------Remplir les variables vides------------------------------------

// Determiner si Charles est majeur (true, false)
if (age < 18) {
     estMajeur = false
} else {
     estMajeur = true
}

// Determiner si Charles est a la retraite (true, false)
if (age >= 62) {
     aLaRetraite = true
} else {
     aLaRetraite = false
}

// Determiner la tranche de Charles (1, 2, 3) -- Il existe 3 tranche d'age : 1 - 18 | 18 - 50 | 50 et plus
if (age <= 18) {
     tranche = 1
} else if (age > 18 && age <= 50) {
     tranche = 2
} else {
     tranche = 3
}

// ------------------------------------Charles postule à plusieus emplois------------------------------------

// 1ere annonce | Accepte tout age jusqu'à la retraite - Besoin du permis - Accepte min 2 ans d'experience
if (!aLaRetraite && permis && experience >= 2) {
     boulot1 = true
} else {
     boulot1 = false
}

// 2eme annonce | Accepte majeur sous 30ans - Pas besoin du permis - Accepte min 5 ans d'experience
if (!estMajeur && age < 30 && experience >= 5) {
     boulot2 = true
} else {
     boulot2 = false
}

// 3eme annonce | Accepte la tranche 2 - Besoin du permis - Toute experience accepté
if (tranche == 2 && permis) {
     boulot3 = true
} else {
     boulot3 = false
}

// 4eme annonce | Accepte la tranche 3 mais pas retraité - Pas besoin du permis - Toute experience accepté
if (tranche == 3 && !aLaRetraite) {
     boulot4 = true
} else {
     boulot4 = false
}
// ------------------------------------Affichage------------------------------------

/**
 * Afficher les infos comme présentés dans l'exemple :
 * 
     Charles :
          Il a 60ans
          Il a le permis
          Il a 4ans d'experience
          Il est majeur
          Il est a la retraite
          Il est dans la tranche n°3
     Emplois :
          Il postule au boulot 2
          Il postule au boulot 4
 */

console.log(`${nom} :`)

if (permis) {
     console.log("  Il a le permis")
} else {
     console.log("  Il n'a pas le permis")
}

console.log(`  Il a ${experience}ans d'experience`)

if (estMajeur) {
     console.log("  Il est majeur")
} else {
     console.log("  Il n'est pas majeur")
}

if (aLaRetraite) {
     console.log("  Il est a la retraite")
} else {
     console.log("  Il n'est pas a la retraite")
}

console.log(`  Il est dans la tranche n° ${tranche}`)

console.log(`Emplois :`)
if (boulot1) {
     console.log("  Il postule au boulot 1")
}
if (boulot2) {
     console.log("  Il postule au boulot 2")
}
if (boulot3) {
     console.log("  Il postule au boulot 3")
}
if (boulot4) {
     console.log("  Il postule au boulot 4")
}


