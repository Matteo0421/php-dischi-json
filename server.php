<?php
$json_string = file_get_contents('dischi.json');

$dischi = json_decode($json_string);







header('Content-Type: application/json');

echo json_encode($dischi, JSON_PRETTY_PRINT);