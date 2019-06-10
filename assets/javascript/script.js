$(document).ready(function() {

    var GameObj = { //Game Object
        topic: null, //Topic Property of GameObj
        loadedArr : null, //Property of game array to be loaded
        loadedWord :null, //Property of loaded Word of current game
        loadedGuess :[],
        readyState : false,
        firstLetter : true,

        //GameArrays
        canCities : ["Toronto", "Vancouver", "Montreal", "Ottawa", "Calgary", "Edmonton", "Winnipeg", "Victoria", "Quebec-City"],

        autoManu : ["Toyota", "Volkswagen", "Hyundai", "General-Motors", "Ford", "Nissan", "Honda", "Subaru"],

        schools : ["University-of-Toronto", "University-of-Waterloo", "Macmaster-University", "Queens-University"],
        
        letters : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

        startLetter: function(){ //Dynamically Creates Buttons
            this.letters.forEach(function(letter,i) {
                var letterBtn = $("<button>");
                letterBtn.addClass("btn btn-secondary btn-space letter-button");
                letterBtn.attr("data-letter", letter);
                letterBtn.text(letter);
                $("#buttonBox").append(letterBtn);
            });
        },

        randTopic: function(){ //Function used to generate random game topic
            var randNum = Math.floor((Math.random() * 3) + 1) //Gen rand num between 1-3 (topic 1-3)
            if (this.topic === randNum){ //If random topic is the same as previous topic
                this.randTopic(); //Recursive Function Call to prevent duplicate topics
            }
            else{ //If not the same
                this.topic = randNum;
                this.selTopic(); //Calls selTopic to select random topic
            }
        },

        selTopic: function() { //Function Used to select game topic
            switch (this.topic){
                case (1): //Canadian Cities
                $("#topicSelected").text("Canadian Cities"); //Displays Current Topic : Canadian Cities
                this.loadedArr = this.canCities;  //Loads Current Topic array
                break;   

                case (2): //Auto Makers
                $("#topicSelected").text("Auto Manufacturer"); //Displays Current Topic : Auto Manu
                this.loadedArr = this.autoManu; //Loads Current Topic array
                break;

                case (3): //Schools
                $("#topicSelected").text("Schools"); //Displays Current Topic : Schools
                this.loadedArr = this.schools; //Loads Current Topic array
                break;
            };
            //Changes Button Color
            $("#startGameBtn").removeClass("btn-danger"); 
            $("#startGameBtn").addClass("btn-success");
            //Changes Game State
            this.readyState = true;
        },
        
        selWord: function () {
            var randArrSel = Math.floor(Math.random() * this.loadedArr.length)
            this.loadedWord = this.loadedArr[randArrSel].toUpperCase();
            console.log(this.loadedWord);
        },

        startGame: function(){
            this.selWord();
            for (var i = 0; i < this.loadedWord.length; i++){
                if (this.loadedWord[i] === "-"){
                    this.loadedGuess.push ('-');         
                }
                else{
                    this.loadedGuess.push ('☐');
                }
            }
            $("#wordBox").text(this.loadedGuess.join(''));
        },

        

        onClickLetter: function(btnClicked){
            letterClicked = $(btnClicked).attr("data-letter")
            console.log($(btnClicked).attr("data-letter"));
            $(btnClicked).attr("disabled",true);
            $(btnClicked).addClass("btn-danger")
            console.log(this.loadedWord);
            for (var i = 0; i < this.loadedWord.length; i++){
                if (this.loadedWord[i] === letterClicked){
                    console.log("yes");
                    this.loadedGuess[i] = letterClicked;
                    console.log(this.loadedGuess);        
                }
                else{
                    console.log("no");
                }
            }
            $("#wordBox").val('');
            $("#wordBox").text(this.loadedGuess.join(''));
            
        }
        
        
    }
    
    GameObj.startLetter();
    //Random Topic Event
    $(".letter-button").on("click", function() {
        GameObj.onClickLetter(this);
    }); 
    $("#randTopicBtn").on("click", function() {
        GameObj.randTopic();
    });

    //Drop Down Events
    //Topic 1
    $("#topic1DD").on("click", function() {
        GameObj.topic =  1;
        GameObj.selTopic();
    });

    //Topic 2
    $("#topic2DD").on("click", function() {
        GameObj.topic =  2;
        GameObj.selTopic();
    });

    //Topic 3
    $("#topic3DD").on("click", function() {
        GameObj.topic =  3;
        GameObj.selTopic();
    });
    $("#startGameBtn").on("click", function() {
        if (GameObj.readyState){
            GameObj.startGame();
        }   
        else
            alert("No topic selected! Please select topic first!");
    });

});




