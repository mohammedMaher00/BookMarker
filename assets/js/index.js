var siteNameInput=document.getElementById("siteName");
var siteURLInput=document.getElementById("siteURL");
var allSites=[];
var checkUrl= document.getElementById("checkUrl");
var checkName= document.getElementById("checkName");
var checkName2=document.getElementById("checkName2");





if(localStorage.getItem("sites") != null){
    allSites=JSON.parse(localStorage.getItem("sites"))
    displaySite(allSites)
}





// function addSites(){

// if(validateUrl()==true){
//     site={
//         siteName:siteNameInput.value,
//         siteUrl: siteURLInput.value,
//     }


// if(validateUserName()   ==true){
//     checkName.classList.replace("d-none","d-block")
// }else {


//     if(/.{3,}/.test(siteNameInput.value)){

//         checkName.classList.replace("d-block","d-none")
//         checkName2.classList.replace("d-block","d-none")
//         checkUrl.classList.replace("d-block","d-none")
//         allSites.push(site)
//         displaySite(allSites)
//         localStorage.setItem("sites", JSON.stringify(allSites))
//         clearForm()

//     }else{
//         checkName2.classList.replace("d-none","d-block")
//     }


    
   

// }
  
// }else{
    
//     checkUrl.classList.replace("d-none","d-block")
// }


    
    

// }





function addSites(){
    site={
        siteName:siteNameInput.value,
        siteUrl: siteURLInput.value,
    }

    if(validateUserName()===true){
        checkName.classList.replace("d-none","d-block")
        siteNameInput.classList.add("is-invalid")
    }else {
    
        siteNameInput.classList.remove("is-invalid" )
        siteURLInput.classList.remove("is-invalid")
        if(/\w{3,}/.test(siteNameInput.value)){
            checkName2.classList.replace("d-block","d-none")
            checkName.classList.replace("d-block","d-none")

            if(validateUrl()==true){
                
              
                checkUrl.classList.replace("d-block","d-none")
                allSites.push(site)
                displaySite(allSites)
                localStorage.setItem("sites", JSON.stringify(allSites))
                clearForm()

            }else{
                checkUrl.classList.replace("d-none","d-block")
    
                siteURLInput.classList.add("is-invalid")
              

            }
    
        }else{
            checkName2.classList.replace("d-none","d-block")
            siteNameInput.classList.add("is-invalid")
        }
    
    }



}








function displaySite(arr){
    var cartona='';
    for(i=0;i<arr.length;i++){
        cartona+=` <tr>
        <td>${i+1}</td>
        <td>${arr[i].siteName}</td>
        <td> <button class="btn btn-success"> <i class="fa-solid fa-eye"></i> <a  href="${allSites[i].siteUrl}" target="_blank"> Visit</a></button> </td>
        <td> <button onclick="deleteSite(${i})" class="btn btn-primary"> <i class="fa-solid fa-trash"></i> Delete</button> </td>
        
    </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartona;
}

function clearForm(){
    siteNameInput.value='';
    siteURLInput.value='';
}


function deleteSite(siteIndex){
    allSites.splice(siteIndex,1);
    localStorage.setItem("sites", JSON.stringify(allSites))

displaySite(allSites)
}



function validateUrl(){
    var regx=/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    return regx.test(siteURLInput.value);
}

function validateUserName(){
    for(i=0;i<allSites.length;i++){
        if(allSites[i].siteName==siteNameInput.value){
            return true;
            
        }
        
          
    }
    return false;
}




