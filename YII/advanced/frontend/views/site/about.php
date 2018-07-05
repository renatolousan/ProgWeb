<?php

/* @var $this yii\web\View */

use yii\helpers\Html;

$this->title = 'About';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-about">
    <h1><?= Html::encode($this->title) ?></h1>

    <p>Isso é um site que disponibiliza o jogo SkiFree com rankings</p>
    <p>Dia e hora atual: <?=$data?> </p>

</div>
