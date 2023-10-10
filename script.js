console.log("Hello World");

let listeMots = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;
let motUtilisateur = prompt("Ecrire ici:" + listeMots[0])
    if (motUtilisateur == listeMots[0]) {
        console.log("Bravo !")
        score += 1
        console.log(score)
    } else {
        console.log("Mince, vous vous êtes trompé !")
        console.log(score)
    }

let motUtilisateur2 = prompt("Ecrire ici:" + listeMots[1])
    if (motUtilisateur == listeMots[1]) {
    console.log("Bravo !")
    score += 1
    console.log(score)
    } else {
    console.log("Mince, vous vous êtes trompé !")
    console.log(score)
    }

let motUtilisateur3 = prompt("Ecrire ici:" + listeMots[2])
    if (motUtilisateur == listeMots[2]) {
    console.log("Bravo !")
    score += 1
    console.log(score)
    } else {
    console.log("Mince, vous vous êtes trompé !")
    console.log(score)
    }