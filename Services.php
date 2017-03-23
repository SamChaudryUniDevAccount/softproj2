<?php

if(isset($_POST['name'])){

   // $name = $_POST['name'];
    //echo strrev($name);



    for ($i = 0; $i < count($_POST['name']); $i++) {

        echo $_POST['name'][$i];


    }


}

// KEY  = $_POST['name']
// Value = maS
