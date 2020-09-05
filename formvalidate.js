function validate2()
            {
            var id=document.getElementById("eid").value;
            var idregex=/^([a-z A-Z 0-9 \. - _]+)@([a-z A-Z 0-9]+).([a-z]+)(.[a-z]{2,10})$/;
            if(idregex.test(id))
            {
                document.getElementById("valid2").style.visibility="visible";
                document.getElementById("valid2").innerHTML="valid EMAIL-ID";
                document.getElementById("invalid2").style.visibility="hidden";

            }
            else{
                document.getElementById("invalid2").style.visibility="visible";
                document.getElementById("valid2").style.visibility="hidden";
            }

        }
        function validate1()
            {
            var username=document.getElementById("uname").value;
            var nameregex=/^([a-z A-Z 0-9]+)$/;
            if(nameregex.test(username))
            {
                document.getElementById("valid1").style.visibility="visible";
                document.getElementById("valid1").innerHTML="valid username";
                document.getElementById("invalid1").style.visibility="hidden";

            }
            else{
                document.getElementById("invalid1").style.visibility="visible";
                document.getElementById("valid1").style.visibility="hidden";
            }

        }

        function validate3()
            {

            var password=document.getElementById("pwd").value;
            var pwdregex=/^([a-z A-Z 0-9 \. - _]{6,12})$/;
            if(pwdregex.test(password))
            {
                document.getElementById("valid3").style.visibility="visible";
                document.getElementById("valid3").innerHTML="valid password";
                document.getElementById("invalid3").style.visibility="hidden";
                

            }
            else{
                document.getElementById("invalid3").style.visibility="visible";
                document.getElementById("valid3").style.visibility="hidden";
                f=0
                
            }

        }
        function validate4()
            {

            var password=document.getElementById("pwd").value;
            
            
            var confirmpwd=document.getElementById("cpwd").value;
            if(password===confirmpwd)
            {
                document.getElementById("valid4").style.visibility="visible";
                document.getElementById("valid4").innerHTML="valid password";
                document.getElementById("invalid4").style.visibility="hidden";

            }
            else{
                document.getElementById("invalid4").style.visibility="visible";
                document.getElementById("valid4").style.visibility="hidden";
        
            }

        }
        function validate5()
            {
            var mobile=document.getElementById("mno").value;
            var pwdregex=/^([6-9][0-9]{9})$/;

            if(pwdregex.test(mobile))
            {
                document.getElementById("valid5").style.visibility="visible";
                document.getElementById("valid5").innerHTML="valid MobileNumber";
                document.getElementById("invalid5").style.visibility="hidden";

            }
            else{
                document.getElementById("invalid5").style.visibility="visible";
                document.getElementById("valid5").style.visibility="hidden";
                
            }

        }
        function finalvalidate()
        {
            var a=document.getElementById("valid1").style.visibility
            var b=document.getElementById("valid2").style.visibility
            var c=document.getElementById("valid3").style.visibility
            var d=document.getElementById("valid4").style.visibility
            var e=document.getElementById("valid5").style.visibility
            var arr=[a,b,d,e]
            var f=0;
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i]!="visible"){
                    alert("Invalid credentials");
                    f=1;
                    return false;
                }
            }
            if(f==0){
                alert("login success");
                return true;
            }
            
        }
