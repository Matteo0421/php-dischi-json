<?php
$json_string = file_get_contents('dischi.json');

$dischi = json_decode($json_string);

if(isset($_POST['newDiskAuthor'])){
  $new_disk = [
    'poster' => $_POST['newDiskPoster'],
    'author' => $_POST['newDiskAuthor'],
    'title' => $_POST['newDiskTitle'],
    'year' => $_POST['newDiskYear'],
    'genre' => $_POST['newDiskGenre'],

  ];
  $dischi[] = $new_disk;
  file_put_contents('dischi.json', json_encode($dischi));
}


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['indexToDelete'])) {
  $index = $_POST['indexToDelete'];
  if (isset($dischi[$index])) {
    array_splice($dischi, $index, 1);
    file_put_contents('dischi.json', json_encode($dischi));
  }
}

header('Content-Type: application/json');

echo json_encode($dischi, JSON_PRETTY_PRINT);