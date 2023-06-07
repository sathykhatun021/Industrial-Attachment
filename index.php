<?php 
    include("connection.php");
    include("login.php");
    ?>
    
<html>
    <head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css">
    </head>

    <style>
        body {
            background-image: url('icon/img3.avif');
            background-size: cover;
            background-position: center;
            height: 50vh;
            background-repeat: no-repeat;
        }
    
        #form{
            background-color: #25b99a;
            width:25%;
            border-radius: 4px;
            margin:120px auto;
            padding:50px;
            box-shadow: 10px 10px 5px rgb(82, 11, 77);
        }

        #btn1{
            color:rgb(255, 255, 255);
            background-color: #ce4404;
            padding:10px;
            font-size: large;
            border-radius: 10px;
        }
        #btn1:hover{
        color: white;
        background: green;
        }

    </style>

    <body>
        
        <div id="form">
            <h1>Login Form</h1>
            <form name="form" action="login.php" onsubmit="return isvalid()" method="POST">
                <label>Username: </label>
                <input type="text" id="user" name="user"></br></br>
                <label>Password: </label>
                <input type="password" id="pass" name="pass"></br></br>
                <input type="submit" id="btn1" value="Login" name = "submit"/>
            </form>
        </div>
        <script>
            function isvalid(){
                var user = document.form.user.value;
                var pass = document.form.pass.value;
                if(user.length=="" && pass.length==""){
                    alert(" Username and password field is empty!!!");
                    return false;
                }
                else if(user.length==""){
                    alert(" Username field is empty!!!");
                    return false;
                }
                else if(pass.length==""){
                    alert(" Password field is empty!!!");
                    return false;
                }
                
            }
        </script>
    </body>
</html>