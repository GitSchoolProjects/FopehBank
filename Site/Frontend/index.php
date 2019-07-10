<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./Outils/Semantic/semantic.min.css">
    <title>Test</title>
</head>
<body>

    <!-- Inclusions des différentes pages utiles -->
    <?php
        require_once "Accueil/Charte.php";
        require_once "Forum/ListeCommentaire.php";
    ?>
    <!-- Boutton de test pour le lancement des interfaces -->
    <button class="ui blue button" id="lancerModalListeCommentaire">Cliquez ici</button>


    <script src="./Annexe/Js/jquery.js"></script>
    <script src="./Outils/Semantic/semantic.min.js"></script>
    <script src="./Annexe/Js/index.js"></script>
</body>
</html>