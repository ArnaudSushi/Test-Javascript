var toVerify = [Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9)];

function fillArrayToVerify(modelArray) {
    for (let i = 0; i < 9; i++) {
        toVerify[i] = modelArray[i].split(" ");
    }
}

function displayArray() {
    //Variable to represent the HTML body
    var htmlBody = document.getElementsByTagName("body")[0];
    //Creation of a <p> with a little presentation
    htmlBody.appendChild(document.createElement("p").appendChild(document.createTextNode("Table to check :")));

    //Creation of the objects table and tbody
    var table = document.createElement("table");
    table.appendChild(document.createElement("tbody"));

    //Creation of the rows and cells of the table
    toVerify.forEach(line => {

        //Creation of 1 row per array row
        let row = document.createElement("tr");
        line.forEach(cell => {

            //Creation of 1 cell per array cell
            let num = document.createElement("td");
            num.id = "normal";
            num.appendChild(document.createTextNode(cell));
            row.appendChild(num);
        });

        //insertion of the row in the table
        table.appendChild(row);
    });

    //Insertion of the table in the body
    htmlBody.appendChild(table);
}

fillArrayToVerify(array_number);