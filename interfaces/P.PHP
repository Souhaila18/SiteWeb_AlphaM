<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];
  
    // Code pour traiter les données du formulaire ici
    // Par exemple, envoyer un email à l'administrateur du site avec les données du formulaire
  
    header("Location: confirmation.php");
    exit();
  }
  ?>
