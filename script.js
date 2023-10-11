console.log("Hello World");

function afficherResultat (score, totalMots) {
    let message : "Votre score est de " + score + "sur " + totalMots
return message}

function ChoisirPhrasesOuMots {
    let message : "Veuillez choisir la liste: mots ou phrases"
    return message
}

let listeMots = ["Cachalot", "Pétunia", "Serviette"];
let listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];
let score = 0;

let choix= prompt("Veuillez choisir la liste: mots ou phrases")
while (choix !== "mots" && choix !== "phrases") {
    choix= prompt("Veuillez choisir la liste: mots ou phrases")}
    if (choix === "mots"){
        for (let i = 0; i < listeMots.length; i ++){
            let motUtilisateur = prompt("Ecrire ici: " + listeMots[i]);
            if (motUtilisateur === listeMots[i]) {
                console.log("Bravo !")
                score += 1 }
             } console.log("Votre score est de " + score + " sur " + listeMots.length)
    } else {
    for (let i = 0; i < listePhrases.length; i ++){
        let motUtilisateur = prompt("Ecrire ici: " + listePhrases[i]);
        if (motUtilisateur === listePhrases[i]) {
            console.log("Bravo !")
            score += 1 }
             }      console.log("Votre score est de " + score + " sur " + listeMots.length) 
    }