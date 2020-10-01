let CD = new Date('October 2, 2020 00:00:00').getTime(),
    y = setInterval(function() {

      let N = new Date().getTime();

  // If the count down is over, write some text 
        if (CD < N) {
        clearInterval(y); 
        document.getElementById("showbytime").style.display='none'; } 
    });