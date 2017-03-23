
$( document ).ready(function() {



});



$("#postData").click(function(){

    var jsonObject = {};

    var inputDataArray = ($(".inputData").serializeArray());

    for (var i = 0; i < inputDataArray.length; i++){

        jsonObject[inputDataArray[i]['name']] = inputDataArray[i]['value'];

    }


    //data is process at the back end

    $.post("Services.php", {name:"Sam"}, function(data,response){

        alert("Server returned is" + data);


    });





});

/*
 var jsonObject = {};

 var inputDataArray = ($(".inputData").serializeArray());

 for (var i = 0; i < inputDataArray.length; i++){

 jsonObject[inputDataArray[i]['name']] = inputDataArray[i]['value'];

 }


 var data = JSON.stringify(jsonObject);

 alert(data);
 console.log(data);

 //{"Name":"Sam Chaudry","Department":"IT","BugID":"123","Priority":"High","Problem":"JSON API not working please check and amend\r\n\r\n  "}


 */