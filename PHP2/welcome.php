<?php
$username = "root";
$password = "root";
$nome = $_POST["name"];
$email = $_POST["email"];
$website = $_POST["website"];
$mensagem = $_POST["mensagem"];

try {
  $conn = new PDO('mysql:host=localhost;dbname=usuario', $username, $password);

  $stmt = $conn->prepare('INSERT INTO dados (nome,email,website,mensagem) VALUES (:nome,:email,:website,:mensagem)');

  $stmt->bindValue(':nome', $nome);
  $stmt->bindValue(':email', $email);
  $stmt->bindValue(':website', $website);
  $stmt->bindValue(':mensagem', $mensagem);

  $stmt->execute();
  
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
} ?>

<html>
<body>

Bem vindo, <?php echo $_POST["name"]; ?>!<br>
Seu email: <?php echo $_POST["email"]; ?><br>
Seu website: <?php echo $_POST["website"]; ?><br><br>
Sua mensagem: <?php echo $_POST["mensagem"]; ?>

</body>
</html>