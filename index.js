document.getElementById("highlightBtn").addEventListener("click",highligtOrd)

/** 
function highligtOrd(){
    var tekst = document.getElementById("tekst").innerHTML;  
	for (var i = 0 ;  i < tekst.length; i++) {
        var arr = tekst.split(". ")[i].split(" ")[0] //--> TÆTTEST PÅ AT VIRKE 

		console.log(arr)
		var res = tekst.replace(`${arr}`, "<span style=background-color:yellow>" + `${arr}` + "</span>" );
  		document.getElementById("tekst").innerHTML += res; 	   
  	}		
}*/ 
 
function highligtOrd(){
    var tekst = document.getElementById("tekst");
    tekst.innerHTML = tekst.innerHTML.replace(
      /(\. *)(\S+)/g,
      '$1<span style=background-color:yellow>$2</span>'
    );	  
}
document.getElementById("highlightBtn").addEventListener("click",highligtOrd)


