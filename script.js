console.log("Hello World");

let listeMots = ["Cachalot", "Pétunia", "Serviette"];
let listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];
listePropositions = listeMots + listePhrases
totalMots = listeMots.lenght || listePhrases.length
let score = 0

function choisirPhrasesouMots () {
    let choix= prompt("Veuillez choisir la liste: mots ou phrases")
while (choix !== "mots" && choix !== "phrases") {
    choix= prompt("Veuillez choisir la liste: mots ou phrases")}
}

function lancerBoucleDeJeu (listePropositions){
    for (let i = 0; i < listePropositions.length; i ++){
        let motUtilisateur = prompt("Ecrire ici: " + listeMots[i]);
        if (motUtilisateur === listeMots[i]) {
            console.log("Bravo !")
            score += 1 }
         } 
         return score }

    function lancerJeu() {
        choix=choisirPhrasesouMots
        let score = 0;
        let listePropositions = 0

    function afficherResultat (score, totalMots) {
    console.log("Votre score est de " + score + " sur " + totalMots)}

        if (choix === "mots"){
            lancerBoucleDeJeu(listeMots)
            listePropositions = listeMots.length
        } else {
            lancerBoucleDeJeu(listePhrases)
            listePropositions = listePhrases.lenght
        }
        afficherResultat(score, totalMots)
    }
    

    lancerJeu()