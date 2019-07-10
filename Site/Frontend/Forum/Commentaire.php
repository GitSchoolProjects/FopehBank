<!-- Code -->

<div class="ui modal" id="formulaireCommentaire">
    <!-- L'entête -->
    <div class="header">
        <i class="file alternate outline icon"></i>
        Commenter cette réponse ?
    </div>
    <!-- Le contenu -->
    <div class="scrolling content">
        <div class="ui transparent form">
            <div class="required field">
                <label>Votre commentaire ...</label>
                <textarea id="texteDuCommentaire"></textarea>
            </div>
        </div>
    </div>
    <!-- Lest bouttons -->
    <div class="actions">
        <div class="ui vertical animated red button" id="fermerFormulaireCommentaire">
            <div class="visible content">Fermer</div>
            <div class="hidden content">
                <i class="close icon"></i>
            </div>
        </div>
        <div class="ui animated blue button" id="effacerFormulaireCommentaire">
            <div class="visible content">Effacer</div>
            <div class="hidden content">
                <i class="eraser icon"></i>
            </div>
        </div>
        <div class="ui vertical animated green button" id="soumettreFormulaireCommentaire">
            <div class="visible content">Valider ce commentaire</div>
            <div class="hidden content">
                <i class="thumbs up outline icon"></i>
            </div>
        </div>
    </div>
</div>