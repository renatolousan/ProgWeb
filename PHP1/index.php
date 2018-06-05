<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
<h1>Formulário de Contato</h1>
    <p>Por favor, preencha o formulário e clique no botão "Enviar Mensagem". Agradecemos por seu contato</p>
    <fieldset>
    <legend>Dados básicos:</legend>
        <form action="welcome.php" method="post">
            Name
            <input type="text" name="name">
            <br> E-mail
            <input type="text" name="email" placeholder="seunome@dominio.com.br">
            <br> Website
            <input type="text" name="website" value="http://">
            <br>
        </fieldset>
            <fieldset>
                <legend>Digite sua Mensagem</legend>
                <textarea name="mensagem" rows="4" cols="50">Este é o valor padrão!</textarea>
            </fieldset>
            <input type="submit" value="Enviar Mensagem">
        </form>
</body>

</html>