let s = new Date('August 31, 2020 00:00:00').getTime(),
    z = setInterval(function() {

      let n = new Date().getTime();

  // If the count down is over, write some text 
        if (s < n) {
        clearInterval(z); 
        document.getElementById("showbytime").style.display=''; } 
    });