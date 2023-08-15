<?php

    include 'conexion_be.php';
    $titulo = $_POST['title'];
    $descripcion = $_POST['description'];

    // Insertar la oferta en la base de datos
    $query = "INSERT INTO ofertas(titulo, descripcion) VALUES ('$titulo', '$descripcion')";

    // Redireccionar a la página de ofertas
?>
