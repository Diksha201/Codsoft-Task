function clik(val){
     document.getElementById("input").value=document.getElementById("input").value+val;
}

function clrdisp(){
  document.getElementById("input").value=""
}

function eql(){
  var text=document.getElementById("input").value;
  var result=eval(text);
  document.getElementById("input").value=result
}