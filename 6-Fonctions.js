/**
 * --------------------------
 * LES FONCTIONS
 * ---------------------------
    3 syntaxes differentes pour ecrire un fonction :

    function maFonction (params) {
        -- Mon code ici --

        return "ce qu'on veux"        
    }

    let maFonction = function (params) {
        -- Mon code ici --

        return "ce qu'on veux"
    }

    let maFonction = (params) => {
        -- Mon code ici --

        return "ce qu'on veux"
    }
 
    On peux envoyer des paramètres a une fonction. Un paramètre doit etre une variable.
    La fonction peux renvoyer une valeur grace au return
    On utilise une fonction comme ceci : 
            let retour = maFonction(params)
    
    retour contiendra ce qui est retourné par return

 */



// ----------------EXERCICE----------------------
let nom = "Charles"
let age = 15


// Créer une fonction qui ajoute 5 ans à charles sans utiliser les params ni le return (laisser vide)
function maFonction() {
    age = age + 5
}

maFonction()

console.log(age)

// Creer une fonction qui prend en paramètre un age et qui retourne cet age + 5 ans
function add5(age) {
    return age + 5
}

let new_age = add5(age)

console.log(new_age)

// Ajouter 10 fois 5ans à charles grace à cette fonction 
for (let i = 0; i < 10; i++) {
    age = add5(age)
}

console.log(age)