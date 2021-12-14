function checkRows() {
    for (let i = 0; i < toVerify.length; i++) {
        if (!checkArray(toVerify[i])) {
            displayError("Line", toVerify[i], i);
        }
    }
}

function checkColumn() {
    for (let col = 0; col < 9; col++) {
        let column = Array();
        for (let row = 0; row < 9; row++) {
            column.push(toVerify[row][col]);
        }
        if (!checkArray(column)) {
            displayError("Column", column, col);
        }
    }
}

function checkRegion() {
    for (let region = 0; region < 9; region++) {
        let arrayToCheck = Array();
        switch (region) {
            case 0:
                for (let col = 0; col < 3; col++) {
                    for (let row = 0; row < 3; row++) {
                        arrayToCheck.push(toVerify[row][col]);
                    }
                }
                if (!checkArray(arrayToCheck)) {
                    displayError("Region", arrayToCheck, 0);
                }
                break;
            case 1:
                for (let col = 3; col < 6; col++) {
                    for (let row = 0; row < 3; row++) {
                        arrayToCheck.push(toVerify[row][col]);
                    }
                }
                if (!checkArray(arrayToCheck)) {
                    displayError("Region", arrayToCheck, 1);
                }
                break;
            case 2:
                for (let col = 6; col < 9; col++) {
                    for (let row = 0; row < 3; row++) {
                        arrayToCheck.push(toVerify[row][col]);
                    }
                }
                if (!checkArray(arrayToCheck)) {
                    displayError("Region", arrayToCheck, 2);
                }
                break;
            case 3:
                for (let col = 0; col < 3; col++) {
                    for (let row = 3; row < 6; row++) {
                        arrayToCheck.push(toVerify[row][col]);
                    }
                }
                if (!checkArray(arrayToCheck)) {
                    displayError("Region", arrayToCheck, 3);
                }
                break;
            case 4:
                for (let col = 3; col < 6; col++) {
                    for (let row = 3; row < 6; row++) {
                        arrayToCheck.push(toVerify[row][col]);
                    }
                }
                if (!checkArray(arrayToCheck)) {
                    displayError("Region", arrayToCheck, 4);
                }
                break;
            case 5:
                for (let col = 6; col < 9; col++) {
                    for (let row = 3; row < 6; row++) {
                        arrayToCheck.push(toVerify[row][col]);
                    }
                }
                if (!checkArray(arrayToCheck)) {
                    displayError("Region", arrayToCheck, 5);
                }
                break;
            case 6:
                for (let col = 0; col < 3; col++) {
                    for (let row = 6; row < 9; row++) {
                        arrayToCheck.push(toVerify[row][col]);
                    }
                }
                if (!checkArray(arrayToCheck)) {
                    displayError("Region", arrayToCheck, 6);
                }
                break;
            case 7:
                for (let col = 3; col < 6; col++) {
                    for (let row = 6; row < 9; row++) {
                        arrayToCheck.push(toVerify[row][col]);
                    }
                }
                if (!checkArray(arrayToCheck)) {
                    displayError("Region", arrayToCheck, 7);
                }
                break;
            case 8:
                for (let col = 6; col < 9; col++) {
                    for (let row = 6; row < 9; row++) {
                        arrayToCheck.push(toVerify[row][col]);
                    }
                }
                if (!checkArray(arrayToCheck)) {
                    displayError("Region", arrayToCheck, 8);
                }
                break;
            default:
                break;
        }
    }
}

function displayError(type, array, num) {
    let errorTable = document.getElementById("error");
    if (!errorTable) {
        errorTable = createErrorTable();
    }
    let row = document.createElement("tr");
    let msg = document.createElement("td");
    msg.appendChild(document.createTextNode(type + " " + (num + 1) + " incorrect"));
    msg.id = "errorCell";
    row.appendChild(msg);
    for (let i = 0; i < array.length; i++) {
        let cell = document.createElement("td");
        cell.id = "errorCell";
        cell.appendChild(document.createTextNode(array[i]));
        row.appendChild(cell);
    }
    errorTable.appendChild(row);
}

function createErrorTable() {
    let errorTable = document.createElement("table");
    errorTable.appendChild(document.createElement("tbody"));
    errorTable.id = "error";
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(errorTable);
    return errorTable;
}
