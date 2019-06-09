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
            this.loadedWord = this.loadedArr[randArrSel];
            console.log(this.loadedWord);
        },

        wordSetup: function(){
            
            for (var i = 0; i < this.loadedWord.length; i++){
                if (this.loadedWord[i] === "-"){
                    this.loadedGuess.push ('-');         
                }
                else{
                    this.loadedGuess.push ('☐');
                }
            }
            $("#wordBox").text(this.loadedCharArr.join(''));
        },   
    }
        

    //Random Topic Event
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
            GameObj.selWord();
            GameObj.wordSetup();
        }   
        else
            alert("No topic selected! Please select topic first!");

    });
});




