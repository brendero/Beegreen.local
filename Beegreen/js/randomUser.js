function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};

ready(function() {

 var App = {
        "init": function() {
            this._unitTesting = false;
            this.URLRANDOMUSERME = 'http://api.randomuser.me/?results=100&callback=json_callback';// Cache the url with random users in variable URLRANDOMUSERME
            this._applicationDbContext = ApplicationDbContext; // Reference to the ApplicationDbContext object
            this._applicationDbContext.init('Beegreen.users'); // Initialize the ApplicationDbContext object via the methode init. Do not forget the connection string as a parametervalue of this function
            this._listUser = document.querySelector('.feed-container');
            this._userCard = document.querySelector('.profile-card');
           
            if(this._applicationDbContext._dbData._activeUser !== null) {
                this.updateActiveUser();
                this.updateUiusersList();
            }
        },
            "unitTests": function() {
            
            var self = this; // Closure

             if(this._applicationDbContext.getLecturers() == null) {

                // Load JSON from corresponding RandomUserMe API with certain URL
                Utils.getJSONPByPromise(this.URLRANDOMUSERME).then(
                    function(data) {
                        var users = data.results, lecturer = null, user = null;
                        for(var i=0;i<users.length;i++) {
                            
                            user = users[i];
                            lecturer = new Lecturer();
                            lecturer.FirstName = user.name.first;
                            lecturer.SurName = user.name.last;
                            lecturer.DayOfBirth = new Date(user.dob);
                            lecturer.Bees = user.Bees;
                            lecturer.UserName = user.login.username;
                            lecturer.PassWord = user.login.password;
                            lecturer.Email = user.email;
                            lecturer.Picture = user.picture.large;
                            
                            var lecturerAdded = self._applicationDbContext.addLecturer(lecturer);
                        }
                    },
                    function(status) {
                    }
                );

            } else {
                // Update a lecturer
                var id = this._applicationDbContext.getLecturers()[0].Id;
                var lecturer = this._applicationDbContext.getLecturerById(id);
                this.updateUiusersList();
                if(lecturer != null) {
                    lecturer.FirstName = 'Olivia';
                    var result = this._applicationDbContext.updateLecturer(lecturer);
                }
            }
        },
            
     "updateUiusersList" : function() {

        var lecturers = this._applicationDbContext.getLecturers(); // Get all tweets
        if(lecturers != null) {
            
              

              
            
          var strHTML = '', lecturer = null;
          for(var i=0; i < 30;i++) {
            
            var randomNumber = Math.floor((Math.random() * 179) + 0);
            var discoverItemLocalStorage = localStorage.getItem('nameAndBees');
            var discoverItem = JSON.parse(discoverItemLocalStorage);  
              
            lecturer = lecturers[i];
            strHTML += '<a class="animated zoomIn">';
            strHTML += '<div class="items-container">';
            strHTML += '<div class="imagecontainer">';
            strHTML += '<img class="square-picture" src="'+ lecturer.Picture +'">';
            strHTML += '</div>';
            strHTML += '<div class="text-content">';
            strHTML += '<h4 class="bitter friend-name">'+ lecturer.FirstName+ " " +lecturer.SurName+'</h4>';
            strHTML += '<span class="raleway">'+ "Went to " + discoverItem[randomNumber].Name +'</span><br>'
            strHTML += '<span class="raleway">'+ "Recieved " + discoverItem[randomNumber].Bees + " Bees"+'</span>'
            strHTML += '</div>';
            strHTML += '</div>';
            strHTML += '</a>';
          }
          this._listUser.innerHTML = strHTML;
        }
     },
     "updateActiveUser": function() {
         var activeUser = this._applicationDbContext.getActiveUser();
         if (activeUser != null) {
             var userHTML ='', user = null;
             var currentTotalBees = JSON.parse(localStorage.getItem("currentTotalBees"));
             var profileInfo = JSON.parse(localStorage.getItem("profileInfo"));
             
             userHTML +='<h2><span class="bitter">'+ activeUser.FirstName+ " " +activeUser.SurName + '</span></h2>';
             userHTML +='<p class="raleway">'+"Bees earned: "+'<span>'+ currentTotalBees +'</span>'+'</p>';
             userHTML +='<p class="raleway">'+"Trees planted: "+'<span>'+ profileInfo.plantedTrees +'</span>'+'</p>';
             userHTML +='<p class="raleway">'+"Ranking: "+'<span>'+ profileInfo.ranking +'</span>'+'</p>';
        this._userCard.innerHTML = userHTML;
         }
     }
    };

App.init();
});