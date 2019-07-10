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

/**************************************/
/* PARTIE CONCERNANT LE DOSSIER FORUM */
/**************************************/

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

    afficherMasquerListeReponse("show");
});

// Sous-partie: ListeReponse.php
// Fonction de presentation de la liste des réponses
function afficherMasquerListeReponse(etat){
    switch(etat){
        case "hide":
            console.log("[+] Liste des réponses fermée !");
        break;
        case "show":
            console.log("[+] Liste des réponses ouverte !");
        break;
    }
    $("#modalListeReponse").modal(etat);
}

// Affichage de la liste des réponses
var idBouttonAffichageModalListeCommentaire = "lancerModalListeReponse";
$("#"+idBouttonAffichageModalListeCommentaire).click(function(){
    afficherMasquerListeReponse("show");
});

// Fermeture de la liste des commentaires
$("#fermerModalListeReponse").click(function(){
    afficherMasquerListeReponse("hide");

    afficherMasquerResumeQuestion("show");
});

// Affichage de la liste des commentaires
$("#voirListeCommentaire").click(function(){
    afficherMasquerListeCommentaire("show");
});

// Affichage du formulaire de commentaire
$("#commenterReponse").click(function(){

});

// Sous-partie: ResumeQuestion.php
// Fonction de presentation du résumé de la question
function afficherMasquerResumeQuestion(etat){
    switch(etat){
        case "hide":
            console.log("[+] Le résumé de la question est fermé !");
        break;
        case "show":
            console.log("[+] Le résumé de la question est ouvert !");
        break;
    }
    $("#modalResumeQuestion").modal(etat);
}

// Affichage du résumé de la question
var idBouttonAffichageModalResumeQuestion = "lancerModalResumeQuestion";
$("#"+idBouttonAffichageModalResumeQuestion).click(function(){
    afficherMasquerResumeQuestion("show");
});

// Fermeture du résumé de la question
$("#fermerModalResumeQuestion").click(function(){
    afficherMasquerResumeQuestion("hide");
});

// Afficher la liste des réponses
$("#listeReponseModalResumeQuestion").click(function(){
    afficherMasquerListeReponse("show");
});

// Afficher le formulaire de réponse à la question
$("#repondreModalResumeQuestion").click(function(){

});

// Sous-partie: Commentaire.php
// Fonction de presentation du fromulaire de commentaire
function afficherMasquerFormulaireCommentaire(etat){
    switch(etat){
        case "hide":
            console.log("[+] Le formulaire de commentaire est fermé !");
        break;
        case "show":
            console.log("[+] Le formulaire de commentaire est ouvert !");
        break;
    }
    $("#formulaireCommentaire").modal(etat);
}

// Affichage du formulaire de commentaire
var idBouttonAffichageModalResumeQuestion = "lancerFormulaireCommentaire";
$("#"+idBouttonAffichageModalResumeQuestion).click(function(){
    afficherMasquerFormulaireCommentaire("show");
});

// Fermeture du formulaire de commentaire
$("#fermerFormulaireCommentaire").click(function(){
    afficherMasquerFormulaireCommentaire("hide");
});

// Effcement du commentaire
$("#effacerFormulaireCommentaire").click(function(){
    $("#texteDuCommentaire").val("");
});
