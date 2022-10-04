let person_name_input = document.querySelector('#person_name_input');
let add_person_bt = document.querySelector('#add_person_bt');
let person_names_ul = document.querySelector('#person_names_ul');

add_person_bt.onclick = function () {
    let person_name = person_name_input.value;

    let li = document.createElement('li');
    li.innerText = person_name;
    person_names_ul.appendChild(li);
}
function sortNamesAsc() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById('person_names_ul');
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByClassName("person_name_input")[0];
            y = rows[i + 1].getElementsByClassName("person_name_input")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    $('.ascNames').click(function () {
        sortNamesAsc();
    });
}