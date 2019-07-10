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
// Fonction de présentation de la charte
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
// Fonction de présentation de la liste des commentaires
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
// Fonction de présentation de la liste des réponses
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
// Fonction de présentation du résumé de la question
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
// Fonction de présentation du formulaire de commentaire
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
var idBouttonAffichageFormulaireCommentaire = "lancerFormulaireCommentaire";
$("#"+idBouttonAffichageFormulaireCommentaire).click(function(){
    afficherMasquerFormulaireCommentaire("show");
});

// Fermeture du formulaire de commentaire
$("#fermerFormulaireCommentaire").click(function(){
    afficherMasquerFormulaireCommentaire("hide");
});

// Validation du commentaire
$("#soumettreFormulaireCommentaire").click(function(){
    afficherMasquerFormulaireCommentaire("hide");
});

// Effacement du commentaire
$("#effacerFormulaireCommentaire").click(function(){
    $("#texteDuCommentaire").val("");
});

// Sous-partie: Question.php
// Fonction de présentation du formulaire de la question
function afficherMasquerFormulaireQuestion(etat){
    switch(etat){
        case "hide":
            console.log("[+] Le formulaire de question est fermé !");
        break;
        case "show":
            console.log("[+] Le formulaire de question est ouvert !");
        break;
    }
    $("#formulaireQuestion").modal(etat);
}

// Affichage du formulaire de question
var idBouttonAffichageFormulaireQuestion = "lancerFormulaireQuestion";
$("#"+idBouttonAffichageFormulaireQuestion).click(function(){
    afficherMasquerFormulaireQuestion("show");
});

// Fermeture du formulaire de question
$("#fermerFormulaireQuestion").click(function(){
    afficherMasquerFormulaireQuestion("hide");
});

// Validation de la question
$("#soumettreFormulaireQuestion").click(function(){
    afficherMasquerFormulaireQuestion("hide");
});

// Effacement de la question
$("#effacerFormulaireQuestion").click(function(){
    $("#texteQuestion").val("");
    $("#texteTitreQuestion").val("");
});

// Sous-partie: Reponse.php
// Fonction de présentation du formulaire de la réponse
function afficherMasquerFormulaireReponse(etat){
    switch(etat){
        case "hide":
            console.log("[+] Le formulaire de réponse est fermé !");
        break;
        case "show":
            console.log("[+] Le formulaire de réponse est ouvert !");
        break;
    }
    $("#formulaireReponse").modal(etat);
}

// Affichage du formulaire de réponse
var idBouttonAffichageFormulaireReponse = "lancerFormulaireReponse";
$("#"+idBouttonAffichageFormulaireReponse).click(function(){
    afficherMasquerFormulaireReponse("show");
});

// Fermeture du formulaire de réponse
$("#fermerFormulaireReponse").click(function(){
    afficherMasquerFormulaireReponse("hide");
});

// Validation de la réponse
$("#soumettreFormulaireReponse").click(function(){
    afficherMasquerFormulaireReponse("hide");
});

// Effacement de la réponse
$("#effacerFormulaireReponse").click(function(){
    $("#texteReponse").val("");
});

// Sous-partie: Recommandation.php
// Fonction de présentation du fromulaire de recommmandation
function afficherMasquerFormulaireRecommandation(etat){
    switch(etat){
        case "hide":
            console.log("[+] Le formulaire de recommandation est fermé !");
        break;
        case "show":
            console.log("[+] Le formulaire de recommandation est ouvert !");
        break;
    }
    $("#formulaireRecommandation").modal(etat);
}

// Affichage du formulaire de recommandation
var idBouttonAffichageModalResumeQuestion = "lancerFormulaireRecommandation";
$("#"+idBouttonAffichageModalResumeQuestion).click(function(){
    afficherMasquerFormulaireRecommandation("show");
});

// Fermeture du formulaire de recommandation
$("#fermerFormulaireRecommandation").click(function(){
    afficherMasquerFormulaireRecommandation("hide");
});

// Validation du formulaire de recommandation
$("#soumettreFormulaireRecommandation").click(function(){
    afficherMasquerFormulaireRecommandation("hide");
});

// Effacement du formulaire de recommandation
$("#effacerFormulaireRecommandation").click(function(){
    $("#texteDeRecommandation").val("");
});
