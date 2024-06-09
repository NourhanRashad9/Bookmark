var BookMarkName=document.getElementById("BookMarkName")
var WebsiteURL=document.getElementById("WebsiteURL")
var searchInput=document.getElementById("searchInput")
var btnSubmit=document.getElementById("btn-submit")
var invalidUrl=document.getElementById("invalidUrl")
var Invaliddata=document.getElementById("Invaliddata")
var btnclose=document.getElementById("btnclose")




var dataList=[]
if (localStorage.getItem("dataContainer") !==null){
    dataList=JSON.parse(localStorage.getItem("dataContainer"))
    Display()
}
function addData(){
if(validationName() && validationURL())
    {
        var Data={
            Name:BookMarkName.value,
           URL: WebsiteURL.value
        }
        dataList.push(Data)
        Display()
        localStorage.setItem("dataContainer",JSON.stringify(dataList))
        clear()
        console.log(dataList)
    }
   
}
function Display(){
    var Cartona=""
   for(var i= 0 ; i < dataList.length ; i++)
    {
        Cartona+=` 
        <tr>

        <td >${i+1}</td>
        <td>${dataList[i].Name}</td>
        <td ><a href="${dataList[i].URL}" target="_blank" ><button onclick="Visit()" class="btn btn-sm p-2  " style="background-color: #9eb23b;color: white;" ><i class="fa-solid fa-eye pe-2"></i> Visit</button></a></td>
        <td><button onclick="Delete(${i})" class="btn btn-sm p-2 btn-danger " style="color: white;"> <i class="fa-solid fa-trash" style="color: #ffffff;"></i> Delete </button></td>
        </tr> `

    }
    document.getElementById("Row").innerHTML=Cartona
}
function Delete(indexItem){
    dataList.splice(indexItem , 1)
    localStorage.setItem("dataContainer",JSON.stringify(dataList))
    Display()
    console.log(dataList)

}

function Search()
{
    var term= searchInput.value;
   
    var Cartona="";
    for(var i=0 ; i < dataList.length ; i++)
     {
        if(dataList[i].Name.toLowerCase().includes(term.toLowerCase()))
            {
                Cartona+=` <tr>
                <td >${i+1}</td>
                <td>${dataList[i].Name}</td>
                <td><a href="${dataList[i].URL} target="_blank""><button onclick="Visit()" class="btn btn-sm p-2  " style="background-color: #9eb23b;color: white;"href="}"> <i class="fa-solid fa-eye pe-2"></i> Visit </button></a></td>
                <td><button onclick="Delete(${i})" class="btn btn-sm p-2 btn-danger " style="color: white;"> <i class="fa-solid fa-trash" style="color: #ffffff;"></i> Delete </button></td>
                </tr>
                `
        
            }
       
     }
     document.getElementById("Row").innerHTML=Cartona


}
function clear()
{
    BookMarkName.value=null
    WebsiteURL.value=null
    BookMarkName.classList.remove("is-valid")
    BookMarkName.classList.remove("is-invalid")
    WebsiteURL.classList.remove("is-invalid")
    WebsiteURL.classList.remove("is-valid")
   
}
function validationName()
    {
        var text=BookMarkName.value;
      
        var regex=/^[A-Z]?[a-z]{3,10}$/
        if(regex.test(text)){
            BookMarkName.classList.add("is-valid")
            BookMarkName.classList.remove("is-invalid")
           
            
            return true
            
        }
        else{
            BookMarkName.classList.add("is-invalid")
            
            BookMarkName.classList.remove("is-valid")
            
            return false
        }

    }
    function validationURL()
    {
        var text= WebsiteURL.value
        var regex=/^(https:\/\/www\.?|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,}\/)?$/
    
     

        if(regex.test(text))
            {
                WebsiteURL.classList.add("is-valid")
                WebsiteURL.classList.remove("is-invalid")
              
               
                return true

            }
            else{
                WebsiteURL.classList.add("is-invalid")
                WebsiteURL.classList.remove("is-valid")
              
      
                 
                return false
            }
         
    }
    btnclose.addEventListener('click',function() {
    
        invalidUrl.classList.replace('d-flex','d-none')
    
       
        
    })
     btnSubmit.addEventListener('click',function(){
      
        if(validationName()!=true ||validationURL()!=true )
            {
                
                invalidUrl.classList.add('d-flex')
                invalidUrl.classList.remove('d-none')
    
                
              
            }
            else{
                invalidUrl.classList.remove('d-flex')
                invalidUrl.classList.add('d-none')
                
                addData()
                Display()
                clear()
            }
    
    })
 
