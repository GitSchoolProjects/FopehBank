<!-- Code -->

<div class="ui modal" id="formulaireReponse">
    <!-- L'entête -->
    <div class="header">
        <i class="calendar check outline icon"></i>
        Répondre à cette question ?
    </div>
    <!-- Le contenu -->
    <div class="scrolling content">
        <div class="ui transparent form">
            <div class="required field">
                <label>Votre réponse ...</label>
                <textarea id="texteReponse"></textarea>
            </div>
        </div>
    </div>
    <!-- Lest bouttons -->
    <div class="actions">
        <div class="ui vertical animated red button" id="fermerFormulaireReponse">
            <div class="visible content">Fermer</div>
            <div class="hidden content">
                <i class="close icon"></i>
            </div>
        </div>
        <div class="ui animated blue button" id="effacerFormulaireReponse">
            <div class="visible content">Effacer</div>
            <div class="hidden content">
                <i class="eraser icon"></i>
            </div>
        </div>
        <div class="ui vertical animated green button" id="soumettreFormulaireReponse">
            <div class="visible content">Valider cette Reponse</div>
            <div class="hidden content">
                <i class="thumbs up outline icon"></i>
            </div>
        </div>
    </div>
</div>