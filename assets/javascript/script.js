


var GameObj = {
    
    //RandomTopic Obj
    topic: null,


    selTopic: function() {
        
        if (!this.topic) //If no topic is picked
        var CaseTopic = Math.floor((Math.random() * 3) + 1)
        
        switch (CaseTopic){

            case (1): //Canadian Cities
            alert("Num1");
            break;
                
            case (2): //Auto Makers
            alert("Num2");
            break;
        
            case (3): //Schools
            alert("Num3");
            break;
        
        };
    }
}
    

 
$("#randTopicBtn").on("click", function() {
    GameObj.selTopic();
    });






