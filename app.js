function inputText(value) {
    let value1 = +value;
    if (value1 > 0 && typeof value1 == typeof 1) {
        model(value);
    }
    else {
        alert("กรุณากรอกค่าเป็นตัวเลข")
    }
}

function model(value) {
    var value1 = +value;
    let i = 1;
    do {
        document.getElementById("model_one").innerHTML += "<div class=\"m-3\"> <input id=\"" + i + i + "\" class=\"input input-bordered w-full max-w-xs\"/>" + " " + "<input id=\"" + i + "\" class=\"input input-bordered w-full max-w-xs\"/> </div>"

        i++
    } while (i <= value1);
}

function sumModelInput() {
    let arr = [0]
    let arr1 = [0]
    let sum = 0;
    let i = 1;
    let fee = 0;
    let sum1 = document.getElementById("sum1");
    do {
        let grade = document.getElementById("" + i + "")?.value;
        let subject = document.getElementById("" + i + i + "")?.value || null;
        if (grade == '' || grade == 0) {
            arr.push(grade);
            arr1.push(subject);
            sum = sum + +grade;
            document.getElementById("no").innerHTML += "ลำดับที่ : " + i + "<br>"
            document.getElementById("subject").innerHTML += " ชื่อวิชา " + subject + "<br>"
            document.getElementById("grade").innerHTML += " เกรด : 0 " + "<br>"
        }
        else if (grade != null) {
            arr.push(grade);
            arr1.push(subject);
            sum = sum + +grade;
            document.getElementById("no").innerHTML += "ลำดับที่ : " + i + "<br>"
            document.getElementById("subject").innerHTML += " ชื่อวิชา " + subject + "<br>"
            document.getElementById("grade").innerHTML += " เกรด : " + grade + "<br>"
            fee++
        }
        else {
            console.log("error");
        }
        i++
    } while (i <= arr.length);              //arr.length
    sum = sum / (fee)                       //คำนวนแบบไม่เอาเกรด0มาคำนวน
    sum1.innerHTML += "เกรดเฉลี่ย : " + sum;
}