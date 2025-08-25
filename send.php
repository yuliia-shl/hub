<?php
$data = [
  "title" => 'Лендінг smart-hubmvk.com', // назва заявки
  "source_id" => 21, // ідентифікатор джерела
  "manager_comment" => $_POST['manager_comment'], // коментар до заявки
  "manager_id" => 21, //ідентифікатор відповідального менеджера
  "pipeline_id" => 11, // ідентифікатор воронки (за відсутності параметра буде використана перша воронка у списку)
  "contact" => [
    "full_name" => $_POST['name'], // ПІБ покупця
    "email" => $_POST['email'], // email покупця
    "phone" => $_POST['phone'] // номер телефону покупця
  ],

  "custom_fields" => [
    [
      "uuid" => "LD_1007", // зовнішній ідентифікатор поля,
      "value" => $_POST['question'] // значення поля. Для полів з типом select (список/мультисписок) передавати масив рядків
    ],
    [
      "uuid" => "LD_1006", // зовнішній ідентифікатор поля,
      "value" => $_POST['role'] // значення поля. Для полів з типом select (список/мультисписок) передавати масив рядків
    ]
  ]
];

//  "упаковуємо дані"
$data_string = json_encode($data);

// Ваш унікальний API ключ KeyCRM
$token = getenv('VITE_API_KEY');



// відправляємо на сервер
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://openapi.keycrm.app/v1/pipelines/cards");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt(
  $ch,
  CURLOPT_HTTPHEADER,
  array(
    "Content-type: application/json",
    "Accept: application/json",
    "Cache-Control: no-cache",
    "Pragma: no-cache",
    'Authorization:  Bearer ' . $token
  )
);

// 111
if (!$token) {
  file_put_contents('log.txt', "ERROR: API token not found\n", FILE_APPEND);
}

// $result = curl_exec($ch);
// curl_close($ch);

$result = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
  $error_msg = curl_error($ch);
  file_put_contents('log.txt', "CURL ERROR: $error_msg");
} else {
  file_put_contents('log.txt', "HTTP CODE: $httpCode\nRESULT: $result");
}

curl_close($ch);
