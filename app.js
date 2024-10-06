// 1. Create a signup form and display form data in your web
// page on submission.

// function btn(){
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var number = document.getElementById("number").value;
//     var display = document.getElementById("displayData");
//     display.innerHTML = `
//     <p><strong>Name:</strong>${name}</p>
//      <p><strong>Email:</strong>${email}</p>
//     <p><strong>Number:</strong>${number}</p>
// `
// }



// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// function readMore(){
//     var para = document.getElementById("para");
//     var more = `Eum, at! Reprehenderit, magni? Quos et enim nemo deserunt officiis excepturi
//         qui temporibus voluptatum reprehenderit, vel provident molestias quibusdam, eaque, reiciendis esse nihil dolores
//         est at exercitationem recusandae accusantium? Fugit maxime repellat veritatis, velit quidem animi! Ipsum sint
//         fugit nobis distinctio est impedit, nam et velit, reiciendis minus quibusdam dolorem voluptas. Eius accusantium
//         perferendis rem ipsa quibusdam. Odit adipisci soluta exercitationem laudantium aliquam architecto quidem
//         quibusdam error necessitatibus!`;
//         para.innerHTML += more;
// }

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

// function record(){
//     var stdName = document.getElementById("name");
//     var stdClass = document.getElementById("class");
//     var row = document.createElement("tr");
//     var tdStd = document.createElement("td");
//     var tdClass = document.createElement("td");
//     var editBtn = document.createElement("td");
//     var deleteBtn = document.createElement("td");
//     var textName = document.createTextNode("stdName").value;
//     var textClass = document.createTextNode("stdClass").value;
//     var edit = document.createElement("button");
//     var text = document.createTextNode("edit");
//     edit.setAttribute('onclick',editRecord(this))
//     edit.appendChild(text);
//     var delBtn = document.createElement("button")
//     var delText = document.createElement("delete");
//     delBtn.setAttribute('onclick',deleteRecord(this))
//     deleteBtn.appendChild(delText);


//     tdStd.appendChild(textName);
//     tdClass.appendChild(textClass);
//     editBtn.appendChild(edit);
//     deleteBtn.appendChild(delBtn);
//     row.appendChild(tdStd);
//     row.appendChild(tdClass);
//     row.appendChild(editBtn);
//     row.appendChild(delBtn)
// table.appendChild(row);

// stdName.value = '';
// stdClass.value = '';
// }

// function editRecord(e){
//     var val = e.parentNode.parentNode.firstChild.innerText
//     var update = prompt("Edit here",val)
//     var valClass = e.parentNode.parentNode.firstChild.nextSibling.innerText
//     var newClass = prompt("edit class",valClass);
//     e.parentNode.parentNode.firstChild.innerText = update;
//     e.parentNode.parentNode.firstChild.nextSibling.innerText = newClass;
// }

// function deleteRecord(e){
//     e.parentNode.parentNode.remove();
// }