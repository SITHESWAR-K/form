function sumit(event){
    event.preventDefault()
    var Name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var gender = document.getElementById("gender")
    var course = document.getElementById("COURSE").value
    var email = document.getElementById("email").value
    gender.checked ? gender = "MALE" : gender = "FEMALE"
    var rows = document.getElementById("rows")
    var row = document.createElement("tr")
    row.innerHTML="<td>"+Name+"</td>"+
    "<td>"+age+"</td>"+"<td>"+gender+"</td>"+"<td>"+course+"</td>"+"<td>"+email+"</td>"+"<button onclick = 'del(event)'>DELETE</button>"
    rows.append(row)
    document.getElementById("name").value = ""
    document.getElementById("age").value = ""
    document.getElementsByName("gender").forEach(radio => radio.checked = false)
    document.getElementById("COURSE").value = "PYTHON"
    document.getElementById("email").value = ""
}
function del(event){
    event.target.parentElement.remove()
}
