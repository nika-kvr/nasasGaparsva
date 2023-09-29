var header = document.getElementById("header");
var footer = document.getElementById("footer");

fetch('sample.txt').then(function(response){
    return response.text();
}).then(function(data){
    // arrays gayofa mavnebeli sapcebisgan kolegebo
    var splitData = JSON.stringify(data).split(" ");
    // rrays gasuftabeva mavnebeli sapcebisgan kolegebo bleaaaaaaan
    var filtered = splitData.filter(function (el) {
        return el != "";
      });

    //ak movacilet -> "
    filtered[0] = "Year";
    filtered.slice(0, 15).forEach((element)=>{
        header.innerHTML += element+" ";
    })
    var count = 0
    filtered.slice(15).forEach((element)=>{
        if(count < 14){
            footer.innerHTML += element+" ";
            count += 1;
        }else{
            footer.innerHTML += "<br>";
            count = 0;
        }

    })
})