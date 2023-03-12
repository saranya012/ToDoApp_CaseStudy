var username = document.getElementById('username');
var password = document.getElementById('password');


function validateuserName(){
    if (username.value.trim()==''){
        emailerror.innerHTML = '<p style= "color:red">Username required</p>';
        return false
    }
    else if(username.value == 'admin'){
        emailerror.innerHTML = '<p style= "color:green">Enter Password</p>';
    
        return true
    }
    else if(username.value.length>1){
        emailerror.innerHTML = '<p style= "color:red">Enter valid username</p>';
        return false
    }
    
}


function validatepass(){
    if (password.value.trim()==''){
        passerror.innerHTML = '<p style= "color:red">Password required</p>';
        return false
    }
    else if(password.value == 12345){
        passerror.innerHTML = '<p style= "color:green"></p>';
        return true
    }
    else if(username.value.length>1){
        passerror.innerHTML = '<p style= "color:red">Enter valid username</p>';
        return false
    }
    
}

function validateform(){
    if(!validateuserName() || !validatepass()) {
        return false
    }
    else{
        return true
    }
}



// Ajax 
var xhr = new XMLHttpRequest();
xhr.open("get","https://jsonplaceholder.typicode.com/todos");

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4&& xhr.status == 200){
        var html_content = '';
        var result_data = JSON.parse(xhr.responseText);

        for(i = 0;i<result_data.length;++i){
            var current_record = result_data[i];
            
            if(current_record.completed==true){
                html_content = html_content+"<tr><td><p class='text-white-50'>"+current_record.id+"</p></td><td><p class='text-white-50'>"+current_record.title+"</p></td> <td><input class='form-check-input' type='checkbox' value='' id='flexCheckChecked' checked disabled></td>";
            
            }
            else{
                html_content = html_content+"<tr><td>"+current_record.id+"</td><td>"+current_record.title+"</td> <td><input onchange=checkcounter() name=check class='form-check-input' type='checkbox' value='' id='flexCheckChecked'  ></td>";
            }           
        }
        document.getElementById("result_area").innerHTML= html_content;
    }

}
xhr.send();



// PROMISE
function checkcounter(){
    var promise = new Promise(function(resolve,reject){
        var clickCheck = document.getElementsByName("check");
        var count =0;
        for (var i=0; i<clickCheck.length; i++){
            if (clickCheck[i].checked == true){
                count++;
            }
            
        }
        if(count==5){
            resolve();
        }
        else{
            reject();
        }
    })
    promise
    .then(function(){
        alert("You have completed 5 tasks successfully..!!");
    })

    
}
