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
// Determiner si Charles est a la retraite (true, false)
// Determiner la tranche de Charles (1, 2, 3) -- Il existe 3 tranche d'age : 1 - 18 | 18 - 50 | 50 et plus

// ------------------------------------Charles postule à plusieus emplois------------------------------------

// 1ere annonce | Accepte tout age jusqu'à la retraite - Besoin du permis - Accepte min 2 ans d'experience
// 2eme annonce | Accepte majeur sous 30ans - Pas besoin du permis - Accepte min 5 ans d'experience
// 3eme annonce | Accepte la tranche 2 - Besoin du permis - Toute experience accepté
// 3eme annonce | Accepte la tranche 3 mais pas retraité - Pas besoin du permis - Toute experience accepté

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





