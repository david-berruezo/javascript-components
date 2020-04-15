<?php
error_reporting(E_ERROR);
ini_set("display_errors",0);

$inputs = array(
    0 => array(
        "id_category" => "0",
        "id"       => 0,
        "name"     => "checkbox_0", 
        "label"    => "option 1"
    ),
    1 => array(
        "id_category" => "0",
        "id"       => 1,
        "name"     => "checkbox_1",
        "label"    => "option 2"
    ),
    2 => array(
        "id_category" => "0",
        "id"       => 2,
        "name"     => "checkbox_2",
        "label"    => "option 3"
    ),
    3 => array(
        "id_category" => "0",
        "id"       => 3,
        "name"     => "checkbox_3",
        "label"    => "option 4"
    ),
    4 => array(
        "id_category" => "0",
        "id"       => 4,
        "name"     => "checkbox_4",
        "label"    => "option 5"
    ),
    5 => array(
        "id_category" => "1",
        "id"       => 5,
        "name"     => "checkbox_5",
        "label"    => "option 6" 
    ),
    6 => array(
        "id_category" => "1",
        "id"       => 6,
        "name"     => "checkbox_6",
        "label"    => "option 7"
    ),
    7 => array(
        "id_category" => "1",
        "id"       => 7,
        "name"     => "checkbox_7",
        "label"    => "option 8"
    ),
    8 => array(
        "id_category" => "1",
        "id"       => 8,
        "name"     => "checkbox_8",
        "label"    => "option 9"
    ),
    9 => array(
        "id_category" => "1",
        "id"       => 9,
        "name"     => "checkbox_9",
        "label"    => "option 10"
    ),
);

$categories = array(
    0 => array(
        "id"    => 0,
        "name"  => "Category One" 
    ),
    1 => array(
        "id"    => 1,
        "name"  => "Category Two" 
    )
);

$inputs_categories = array();

foreach ($categories as $key_cat => $value_cat){
    foreach ($inputs as $key_doc => $value_doc){
        if ($value_doc["id_category"] == $value_cat["id"]){
            $documento = array(
            "id"           => $value_doc["id"],
            "name"         => $value_doc["name"],
            "id-categoria" => $value_doc["id_category"],
            "label"        => $value_doc["label"],
        );
        if (!is_array($inputs_categories[$value_cat["id"]])){
            $inputs_categories[$value_cat["id"]] = array();
        }
        array_push($inputs_categories[$value_cat["id"]],$documento);   
        }   
    }
}
//print_r($inputs_categories);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desplegables</title>
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="./css/style.css" type="text/css">
</head>
<body class="my_body">
    <div class="container">
        <?php 
        foreach($categories as $categoria){
            $contenido = $categoria["name"].' [+]';
            echo '<label data-id-label-categoria="'.$categoria["id"].'" name="label-categoria[]" class="label-categoria">'.$contenido.'</label>';
            echo '<div data-id-content-categoria="'.$categoria["id"].'" class="content-categoria">';
            foreach ($inputs_categories[$categoria["id"]] as $documento) { 
                echo '<label for="">'.$documento["label"].'</label>';    
                echo '<input name="checkbox_'.$documento["id"].'" id="id_checkbox_'.$documento["id"].'" type="checkbox">';    
                echo '<br>';
            }
            echo '</div>';
            echo '<br>';
        }
        ?>
        <br>
        <button class="button_plegar my_button">Collapse all</button>
        <button class="button_desplegar my_button">Expand all</button>
        <br>
        <button class="button_css my_button">Css Display Block / Flex</button>
    <br>
    </div>
    <!-- container -->
    <script src="./js/jquery-3.4.1.min.js"></script>
    <script src="./js/desplegables_prototype.js"></script>
</body>
</html>