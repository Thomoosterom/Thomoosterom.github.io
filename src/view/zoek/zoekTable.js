function zoekFunctie(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputField");
    filter = input.value.toUppercase();
    table = document.getElementById("mainTable");
    tr = table.getElementsByTagName("tr");
    for(i = 0; i< tr.length; i++){
        tr+ tr[i].getElementsByTagName("td")[0];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUppercase.indexOf(filter)> -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}