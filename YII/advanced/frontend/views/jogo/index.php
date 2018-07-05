<?php
/* @var $this yii\web\View */
$this->registerJsFile('js/skifree.js', [
    'position' => $this::POS_END
    ]);

$this->registerCssFile('/css/styles.css');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Skifree do Renato</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>

<body>
    <div id="montanha">
        <div id="skier">
        </div>
    </div>
        <div id="distancia"></div>
        <div id="vidas"></div>

    <script src="js/skifree.js"></script>
</body>

</html>