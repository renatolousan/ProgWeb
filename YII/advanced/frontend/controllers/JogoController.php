<?php

namespace frontend\controllers;

class JogoController extends \yii\web\Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionSave ($pontuacao) {
        if (!Yii::$app->user->isGuest) { // Checando se o usuário está logado
           $jogada = new Jogada;
           $jogada->id_user = Yii::$app->user->id;
           $jogada->pontuacao = $pontuacao;
           if ($jogada->save()) {
              return 1;
           } else {
              return 0;
     } }
     }

}
