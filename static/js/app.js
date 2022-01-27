console.log("=================== Script Start ===========================================");
// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

console.log(`var tbody`,{tbody});

function buildTable(currentData) {
  console.log("=================== function buildTable Start ============================");
  // First, clear out any existing data

  tbody.html("");
  console.log(`tbody.html`,tbody.html)
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
    currentData.forEach(function(dataRow){

    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach(function(val) {
      let cell = row.append("td");
      cell.text(val);
    });
  });

  console.log("=================== function buildTable End ===============================");
}

// 1. Create a variable to keep track of all the filters as an object.
var filters ={};
console.log(`var filters`,filters);

// 2. Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);


// 3. Use this function to update the filters. 
function updateFilters(id){
  console.log("=================== function updateFilter Start ============================");

  console.log(`id`,id) // this is perfect
  var changedElement = {}
  let text1 = "#";
  let text2 = "";
  let callId = text1.concat(id);
  callId = callId.concat(text2);
  
  console.log(`callId`,callId)
    
    // 4a. Save the element that was changed as a variable.
    //let date = d3.select("#datetime").property("value");
    // changedElement = d3.select(callId);
  // if(callId==="state"){
  //   changedElement = d3.select(callId);
  // }
  // if(callId==="datetime"){
  //   changedElement = d3.select("datetime");
  // }
    changedElement = d3.select(callId) //This is just selecting id = datetime!!!

    console.log(`var changedElement`,changedElement)

   
    // 4b. Save the value that was changed as a variable.
    var elementValue = changedElement.property("value");

  
    console.log(`var elementValue`,elementValue)


    // 4c. Save the id of the filter that was changed as a variable.
    // var filterId = changedElement.property("id");
    var filterId = id;
    console.log(`var filterId`,filterId)

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
  
    if(elementValue){
      filters[filterId] = elementValue;
    }
    else{
      delete filters[filterId];
    }

    console.log(`filters`,filters)
  
    // 6. Call function to apply all filters and rebuild the table
    console.log("=================== function updateFilter End ===========================");
    filterTable(filters);
  
}
  
// 7. Use this function to filter the table when data is entered.
function filterTable(currentFilters){

  console.log("=================== function filterTable Start ============================");

    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values

  console.log(`currentFilters`,currentFilters)
  changedKey = Object.keys(currentFilters)
  console.log(`changedKey`,changedKey)
  console.log("+++++++++++++++++ New Loop Test Start ++++++++++++++")   
        // Grab the datetime value from the filter
        let date = currentFilters[changedKey];

      console.log(`date`,date)
        // let filteredData = tableData;
      
         // Check to see if a date was entered and filter the
        // data using that date.
        if (date) {
          // Apply `filter` to the table data to only keep the
          // rows where the `datetime` value matches the filter value
          filteredData = filteredData.filter(row => row[changedKey] === date);
        }
      
         // Rebuild the table using the filtered data
        // @NOTE: If no date was entered, then filteredData will
        // just be the original tableData.
        buildTable(filteredData);

  console.log("+++++++++++++++++ New Loop Test Start ++++++++++++++")      

    
    // // 10. Finally, rebuild the table using the filtered data
    // filteredData = filteredData.filter((row) => row[key] === value);
    // }

    // buildTable(filteredData);
  
  console.log("=================== function filterTable End ==============================");
}
