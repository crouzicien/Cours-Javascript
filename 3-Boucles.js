/**
 * --------------------------
 * LES BOUCLES
 * ---------------------------
 
   for (let index = 0; index < 10; index++) {
      On fait quelque chose 10 fois 
   }

   
   while (condition) {
     on fait quelque chose en boucle tant que la condition est vrai
   }

  
 */



// ----------------EXERCICE 1----------------------
let nom = "Charles"
let age = 48

// Afficher l'index a chaque tour de boucle
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// Ajouter un ans a charles à chaque tour de boucle
for (let i = 0; i < 10; i++) {
  age = age + 1
}
console.log(age)

// Ajouter l'index en annés a charles a chaque tour de boucle (ex : 6eme tour = +6ans)
for (let i = 0; i < 10; i++) {
  age = age + i
}
console.log(age)

// Afficher autant de fois le nom charles que le nombre de tour : 
//    Charles
//    Charles Charles
//    Charles Charles Charles
//    ...
let affichage = ""
for (let i = 0; i < 10; i++) {
  affichage = affichage + " " + nom
}
console.log(affichage)

// Doubler l'age de charles tant que son age est inferieur à 1000ans
for (let i = 0; i < 10; i++) {
  if (age < 1000) {
    age = age * 2
  }
}
console.log(age)











