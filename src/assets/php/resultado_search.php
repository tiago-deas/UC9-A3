<?php

if ($_POST['search_pesquisa'] === '1') {
  $linkpesquisa = "https://www.google.com/search?q=".$_POST['search']."";
  header("Location: '.$linkpesquisa.'");
}
?>