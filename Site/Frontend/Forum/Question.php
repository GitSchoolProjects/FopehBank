<!-- Code -->

<div class="ui modal" id="formulaireQuestion">
    <!-- L'entête -->
    <div class="header">
        <i class="question icon"></i>
        Poser une question ?
    </div>
    <!-- Le contenu -->
    <div class="scrolling content">
        <div class="ui transparent form">
            <div class="required field">
                <label>Le titre</label>
                <div class="ui input focus">
                    <input type="text" placeholder="Titre..." id="texteTitreQuestion">
                </div>
            </div>
            <div class="required field">
                <label>Votre question ...</label>
                <textarea id="texteQuestion"></textarea>
            </div>
        </div>
    </div>
    <!-- Lest bouttons -->
    <div class="actions">
        <div class="ui vertical animated red button" id="fermerFormulaireQuestion">
            <div class="visible content">Fermer</div>
            <div class="hidden content">
                <i class="close icon"></i>
            </div>
        </div>
        <div class="ui animated blue button" id="effacerFormulaireQuestion">
            <div class="visible content">Effacer</div>
            <div class="hidden content">
                <i class="eraser icon"></i>
            </div>
        </div>
        <div class="ui vertical animated green button" id="soumettreFormulaireQuestion">
            <div class="visible content">Valider cette Question</div>
            <div class="hidden content">
                <i class="thumbs up outline icon"></i>
            </div>
        </div>
    </div>
</div>