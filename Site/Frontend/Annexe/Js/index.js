/*
*
* Voici le principal fichier Js du projet
* Pardon respectez le joli truc (chaque dossier)
*
*/

/****************************************/
/* PARTIE CONCERNANT LE DOSSIER ACCUEIL */
/****************************************/

// Sous-partie : Charte.php
// Fonction de presentation de la charte
function afficherMasquerModalDeLaCharte(etat){
    switch(etat){
        case "hide":
            console.log("[+] Charte fermée !");
        break;
        case "show":
            console.log("[+] Charte ouverte !");
        break;
    }
    $("#modalDeLaCharte").modal(etat);
}

// Fonction de fermeture de la charte
function fermetureDeLaCharte(etat){
    switch(etat){
        case "Fermer":
            console.log("[+] Charte fermée !");
        break;
        case "Accepter":
            console.log("[+] Charte acceptée !");
        break;
    }
    afficherMasquerModalDeLaCharte("hide");
};

// Affichage de la charte
var idBouttonAffichageModalDeLaCharte = "lancerModalDeLaCharte";
$("#"+idBouttonAffichageModalDeLaCharte).click(function(){
    afficherMasquerModalDeLaCharte("show");
});

// Fermeture de la charte
$("#fermerModalDeLaCharte").click(function(){
    fermetureDeLaCharte("Fermer");
});

// Acceptation de la charte
$("#accepterCharte").click(function(){
    fermetureDeLaCharte("Accepter");
});

// Sous-partie: ListeCommentaire.php
// Fonction de presentation de la liste des commentaires
function afficherMasquerListeCommentaire(etat){
    switch(etat){
        case "hide":
            console.log("[+] Liste des commentaires fermée !");
        break;
        case "show":
            console.log("[+] Liste des commentaires ouverte !");
        break;
    }
    $("#modalListeCommentaire").modal(etat);
}

// Affichage de la liste des commentaires
var idBouttonAffichageModalListeCommentaire = "lancerModalListeCommentaire";
$("#"+idBouttonAffichageModalListeCommentaire).click(function(){
    afficherMasquerListeCommentaire("show");
});

// Fermeture de la liste des commentaires
$("#fermerModalListeCommentaire").click(function(){
    afficherMasquerListeCommentaire("hide");
});