import React from "react";
import './App.css';
import Admin from './componants/Admin';
import User from "./componants/User";

function fileInput(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const data = event.target.result;
      loadFile(data);
    };
    reader.readAsText(file);
  }
}

function loadFile(data) {
  const container = document.querySelector('.table-container');

  const dataRows = data.split('\r\n');
  const finalArray = dataRows.map((row) => row.split(',').map((col) => col.trim()));

  const table = document.createElement('table');

  finalArray.forEach((rowData) => {
    const row = document.createElement('tr');
    rowData.forEach((cellData) => {
      if (cellData !== '') {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
      }
    });

    if (row.children.length > 0) {
      table.appendChild(row);
    }
  });

  container.innerHTML = '';
  container.appendChild(table);

  localStorage.setItem('tableData', JSON.stringify(finalArray));
}

function App() {
  return (
    <div className="App">
      <User />
      <Admin fileInput={fileInput} loadFile={loadFile} />
    </div>
  );
}

export default App;

//expecting open a dilag -- open a file -- inout excel (open a file)-- select a file -- follow the excel format 
//admin panel for someone that uses this website - upload file -- display table 
//2 front end 1 shows website -- 2 normal application 
//no preload data 
//color scheme 
//orginal panel screen for admin - dark mode or light mode(depending on users computer) - system theme -- auto.
//Read css variables for system colors  - users will feel natural - 
//open dialog & save dialog
//CMS system -=- independent
//file - file 
//local staorgae -- save csv as Jason  -- same URL -- no limit -- img url 
//how to communicate with two windows open in browser 
//units -- 
//JSX not Javascript -- Babbel - langauage where you create componant mix of html css and JS

/*
 check data type on table 
 known units -- £ $ - lbs - kg
*/


/* 
two sides
customerc -- self ui with stack item anime 
                               admin 

 (cat)                              
    |a|b|c|D|E|F|G|H|
    |a|b|c|D|E|F|G|H|
    |a|b|c|D|E|F|G|H|

admin
table array
*/

/* POST MESSAGE to communicate from different windows, will make a string will need to create 
an intrupriator on client side  */



/* 
**TO DO**
    - upload file and generate a table -- file reader function 
    - figma and Canva - design both UI -- 3D shelf --
    - 2 UI - one for customer facing where it will display the items -- another for admin UI to upload excel sheet
    - Theme selctor for user system (behind the scene)
    - using local storage share data with both UIs.
*/
