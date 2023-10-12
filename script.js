console.log("Hello World");

let listeMots = ["Cachalot", "Pétunia", "Serviette"];
let listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];
let listePropositions = listeMots || listePhrases
let score = 0

function afficherResultat (score, listePropositions) {
    console.log("Votre score est de " + score + " sur " + listePropositions)}

function choisirPhrasesouMots () {
    let choix= prompt("Veuillez choisir la liste: mots ou phrases")
while (choix !== "mots" && choix !== "phrases") {
    choix= prompt("Veuillez choisir la liste: mots ou phrases")}
    return choix
}

function lancerBoucleDeJeu (listePropositions){
    for (let i = 0; i < listePropositions.length; i ++){
        let motUtilisateur = prompt("Ecrire ici: " + listePropositions[i]);
        if (motUtilisateur === listePropositions[i]) {
            console.log("Bravo !")
            score += 1 }
         } 
         return score }

    function lancerJeu() {
        let choix = choisirPhrasesouMots()
        let score = 0;
        let listePropositions = 0

        if (choix === "mots"){
            lancerBoucleDeJeu(listeMots)
            listePropositions = listeMots.length
        } else {
            lancerBoucleDeJeu(listePhrases)
            listePropositions = listePhrases.lenght
        }
        afficherResultat(score, listePropositions)
    }
    

    lancerJeu()