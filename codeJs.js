function getInfoFromSearch(){
    var getInfo = document.getElementsByClassName("input-search")[0].value;
    console.log(getInfo)
    alert(`Hiện tại chúng tôi chưa thể tìm được + ${getInfo}`) 
}
function animationForFoot(){
    document.getElementById("foot-1").style.color("red");
}
function checkCode(){
    var text = document.getElementById("input-code").value;
    if(text==""){
        var getAlert = document.getElementById("alert-code").innerHTML="Vui lòng nhập mã để kiểm tra!"
    }
}

/*---------------------REGISTER----------------------*/
function checkUsername(){
    let username = document.getElementById("input-username");
    const re_username = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
    return re_username.test(username.value);
}
function checkPassword(){
    let password = document.getElementById("input-password");
    const re_pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return (re_pass.test(password.value));
}
function checkPhone(){
    let phone = document.getElementById("input-phone");
    const re_phone = /(032|033|034|035|036|037|038|039|070|076|077|078|079|081|082|083|084|085|056|058|059)+([0-9]{7})\b/
    return re_phone.test(phone.value);
}
function checkValidation()
{
    if(checkUsername())
    {
        if(checkPassword())
        {
            if(checkPhone())
            {
                alert(` Your information:
                    username: ${document.getElementById("input-username").value}
                    password: ${document.getElementById("input-password").value}
                    telephone: ${document.getElementById("input-phone").value}
                `)
            }
            alert("Vui lòng xác thực lại số điện thoại...")
            document.getElementById("input-phone").value="";
        }
        else{
            alert("Vui lòng xác thực lại mật khẩu");
            document.getElementById("input-password").value="";
            document.getElementById("input-phone").value="";
        }
    }
    else{
        alert("Vui lòng xác thực lại email...");
        document.getElementById("input-username").value="";
        document.getElementById("input-password").value="";
        document.getElementById("input-phone").value="";
    }
}
/*------------------LOGIN---------------------*/
function checkValidLogin()
{
    var username = document.getElementById("input-username");
    var password = document.getElementById("input-password");
    console.log("123");
    console.log(password.value);
    if(username.value=="k@gmail.com")
    {
        if(password.value=="123")
        {
            location.replace('https://unica.vn/')
        }
        else{
            alert("Sai thông tin đăng nhập. Vui lòng thử lại...")
        }
    }
    else{
        alert("Sai thông tin đăng nhập. Vui lòng thử lại...");
        username.value="";
        password.value="";
    }
}
// change color footer
