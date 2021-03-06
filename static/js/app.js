console.log("=================== Script Start =========================================");
// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(currentData) {

  console.log("=================== function buildTable Start ============================");
  
  // First, clear out any existing data

  tbody.html("");

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

  console.log("=================== function buildTable End ==============================");
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
  console.log("=================== function updateFilter Start ==========================");

  console.log(`id`,id)
  var changedElement = {}

  let text1 = "#";
  let callId = text1.concat(id);
    
  console.log(`callId`,callId)
    
    // 4a. Save the element that was changed as a variable.

    changedElement = d3.select(callId)

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

  console.log("=================== function filterTable Start ==========================");

    console.log(`currentFilters`,currentFilters)

    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values

  changedKey = Object.keys(currentFilters)

  console.log(`changedKey`,changedKey)

  changedKey.forEach(element => console.log(element));

  changedKey.forEach(element => {

  console.log("+++++++++++++++++ Enter Loop To Filter Data +++++++++++++") 

  console.log(element)

        // Grab the key value from the filter
        let currentkey = currentFilters[element];

        console.log(`currentkey`,currentkey)

        // let filteredData = tableData;
      
        // Check to see if a what was entered and filter the
        // data using that key.
        // Apply `filter` to the table data to only keep the
        // rows where the `currentkey` value matches the filter value

        if (element) {
          filteredData = filteredData.filter(row => row[element] === currentkey);
        }
        });
      
        // Rebuild the table using the filtered data
        // @NOTE: If no data was entered, then filteredData will
        // just be the original tableData.
        

  console.log("+++++++++++++++++ Exit Loop To Filter Data ++++++++++++++")      

    
    // // 10. Finally, rebuild the table using the filtered data
    // filteredData = filteredData.filter((row) => row[key] === value);
    // }

    buildTable(filteredData);
  
  console.log("=================== function filterTable End =============================");
}
console.log("=================== Script End ===========================================");