
$(document).ready(function() {

    var GameObj = { //Game Object
        topic: null, //Topic Property of GameObj
        loadedArr: null, // Property of game array to be loaded

        randTopic: function(){ //Function used to generate random game topic
            console.log("---------")
            console.log("Function called")
        
            var randNum = Math.floor((Math.random() * 3) + 1) //Gen rand num between 1-3 (topic 1-3)
            if (this.topic === randNum){ //If random topic is the same as previous topic
                console.log("Recursive");
                this.randTopic(); //Recursive Function Call to prevent duplicate topics
            }
            else{
                console.log("Worked");
                this.topic = randNum;
                this.selTopic(); //Calls selTopic to select random topic
            }
        },

        selTopic: function() { //Function Used to select game topic
            switch (this.topic){
                case (1): //Canadian Cities
                $("#topicSelected").text("Canadian Cities");
                break;   
                case (2): //Auto Makers
                $("#topicSelected").text("Auto Makers");
                break;
                case (3): //Schools
                $("#topicSelected").text("Schools");
                break;
            };
        }
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

});




