
// DECLARING GLOBAL VARIBLES, OBJECTS AND ARRAYS 

   
$(document).ready(function() {
      var wins = 0;
      var losses = 0;
      var crystalSum = 0;
      var targetnum = Math.floor(Math.random() * 100+19);
      $("#scoreTarget").text(targetnum);
      $("#gemScore").text(crystalSum);             
      var crystal1num = Math.floor(Math.random() * 11+1);
      var crystal2num = Math.floor(Math.random() * 11+1);
      var crystal3num = Math.floor(Math.random() * 11+1);
      var crystal4num = Math.floor(Math.random() * 11+1);
            
            console.log("targetnum = " + targetnum);
            console.log("crystal1num = " + crystal1num);
            console.log("crystal2num = " + crystal2num);
            console.log("crystal3num = " + crystal3num);
            console.log("crystal4num = " + crystal4num); 

                   
         $("#button1").on("click", function() {
         crystalSum = crystalSum + crystal1num;
         $("#gemScore").text(crystalSum);
         checkScore();
        // console.log("crystal1 clicked: " + crystal1num);
         console.log("crystalSum: " + crystalSum);
      });

      $("#button2").on("click", function() {
         crystalSum = crystalSum + crystal2num;
         $("#gemScore").text(crystalSum);
         checkScore();
        // console.log("crystal2 clicked: " + crystal2num);
         console.log("crystalSum: " + crystalSum);
      });
 
      $("#button3").on("click", function() {
         crystalSum = crystalSum + crystal3num;
         $("#gemScore").text(crystalSum);
         checkScore();
        // console.log("crystal3 clicked: " + crystal3num);
         console.log("crystalSum: " + crystalSum);
      });
  
      $("#button4").on("click", function() {
         crystalSum = crystalSum + crystal4num;
         $("#gemScore").text(crystalSum);
         checkScore();
        // console.log("crystal4 clicked: " + crystal4num);
         console.log("crystalSum: " + crystalSum);
  });

      function checkScore() {
            if (crystalSum === targetnum) {
               playAudio()
               console.log("You Win");
               wins++;
               fncReset();
            }
            else if (crystalSum > targetnum) {
               playAudio_1()
               console.log("You Lose");
               losses++;
               fncReset();
            }
      }

      function fncReset() {
            crystalSum = 0;
            targetnum = Math.floor(Math.random() * 100+19);
            $("#scoreTarget").text(targetnum);
            $("#gemScore").text(crystalSum);
            $("#wins").text(wins);
            $("#losses").text(losses);             
            crystal1num = Math.floor(Math.random() * 11+1);
            crystal2num = Math.floor(Math.random() * 11+1);
            crystal3num = Math.floor(Math.random() * 11+1);
            crystal4num = Math.floor(Math.random() * 11+1);
            console.log("RESET");
            console.log("targetnum = " + targetnum);
            console.log("crystal1num = " + crystal1num);
            console.log("crystal2num = " + crystal2num);
            console.log("crystal3num = " + crystal3num);
            console.log("crystal4num = " + crystal4num);
      } 

      function playAudio() { 
         var x = document.getElementById("myAudio"); 
         x.play(); 
       } 

       function playAudio_1() { 
         var x = document.getElementById("myAudio_1"); 
         x.play(); 
       } 
  
      });