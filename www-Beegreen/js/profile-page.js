/*Adriaan Glibert | Brent De Roeck | 
2MMP-03 |Multimedia Production (proDEV) |
New Media design & Development I (NMDAD I) |
Academic Year 2016-17 , Bachelor of Graphical and Digital Media ,  Artevelde University College Ghent 

javascript bestand om de ranking te laten zien van de activeuser + de activiteiten die hij al gekozen heeft te laten komen op de profile-page
*/

;(function(){
    
     var profilePageContent = localStorage.getItem('addToProfile');
     var arrayOfActivity = JSON.parse(profilePageContent);

     
     for(i = 0; i < arrayOfActivity.length; i++){
         
         var oneActivityItem = '<a href="#"><div class="col-xs-12 col-sm-6 discover-items"><div class="imagecontainer"><img class="square-picture"  src="images/activity-images/' + arrayOfActivity[i].image + '.jpg"></div><div class="text-content height-content"><h4 class="bitter main-title">' + arrayOfActivity[i].productname + '</h4><span  class="raleway">' + 'Went to an ecopoint' + '</span><br><span  class="raleway">' + 'and recieved ' +  arrayOfActivity[i].bees + ' bees' + '</span></div></div></a>';
    
     var activity = document.createElement('li');
     activity.innerHTML = oneActivityItem;    
     activity.id = [i];   
     activity.className += "animated zoomIn";       
     var innerContainer = document.getElementById('inner-container');    
     innerContainer.appendChild(activity);
         
     }
   
    function getAllBees(array) {
        
            var beesCheckedIn = 0;
        
                for (var x = 0; x < array.length; x++) {
                beesCheckedIn += array[x].bees;
                }
        
                localStorage.setItem("currentTotalBees", beesCheckedIn);
        }
        
        getAllBees(arrayOfActivity);
    
    
    function getRanking(currentTotalBees){

        var ranking = "";
        var plantedTrees = 0;
        
        if(currentTotalBees < 100){
            ranking = "Newbee";
            plantedTrees = 0;
        }
        else if(currentTotalBees < 200){
            ranking = "Ecofriend";
            plantedTrees = 1;
        }
        else if(currentTotalBees < 300){
            ranking = "Green Machine";
            plantedTrees = 2;
        } 
        else if(currentTotalBees < 400){
            ranking = "Bee-autiful Bee";
            plantedTrees = 3;
        }
        else if(currentTotalBees < 500){
            ranking = "The Holy Beedha";
            plantedTrees = 4;
        }
        else if(currentTotalBees > 500){
            ranking = "Maximum Ecoman";
            plantedTrees = 5;

        }
        
        var profileInfo = {
          'ranking': ranking,
          'plantedTrees': plantedTrees
              
        };
        
        localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
   
    }
 
    var currentTotalBees = JSON.parse(localStorage.getItem("currentTotalBees"));
    getRanking(currentTotalBees);
     
    
})();