# Filter UFO Sightings on Multiple Criteria

## 1 Overview of Project

**Overview of Project:** Explain the purpose of this analysis.

**8 to >7.0 pts**

Demonstrating Proficiency

The written analysis has ALL of the following: 

✓There is a title, and there are multiple paragraphs. 

✓Each paragraph has a heading. 

✓There are subheadings. 

✓Images are correct and displayed where appropriate.

### Deliverable 2 Instructions

For your written analysis, be sure to use complete and coherent sentences. Your written analysis should contain three sections, which cover the following:

1. 
2. 
3. 

### Deliverable 2 Requirements

#### Structure, Organization, and Formatting (8 points)

The written analysis has the following structure, organization, and formatting:

- There is a title, and there are multiple paragraphs. **(2 pt)**
- Each paragraph has a heading. **(2 pt)**
- There are subheadings to break up text. **(2 pt)**
- Images are formatted and displayed where appropriate. **(2 pt)**



## 2 Results

### 2.1 The webpage

The webpage filters the table correctly based on user input. **(20 pt)**

✓The webpage filters the table based on user input.

![1_Initial_Load_Console_Log](\Resources\1_Initial_Load_Console_Log.png "Figure 1 - Console Log of Initial Page Load")

***Figure 1 - Console Log of Initial Page Load***



![2_Initial_Load_UFOs_Website](\Resources\2_Initial_Load_UFOs_Website.png "Figure 2 - Initial Load UFOs Website")

***Figure 2 - Initial Load UFOs Website***



![3_Console_Log_Start_Filtering](\Resources\3_Console_Log_Start_Filtering.png "Figure 3 - Console Log Start Filtering Data")

***Figure 3 - Console Log Start Filtering Data***



![4_UFOs_Website_Start_Filtering](\Resources\4_UFOs_Website_Start_Filtering.png "Figure 4 - UFOs Website Start Filtering")

***Figure 4 - UFOs Website Start Filtering***

![5_Console_Log_5_Element_Filter](\Resources\5_Console_Log_5_Element_Filter.png "Figure 5 - Console Log 5 Element Filter")

***Figure 5 - Console Log 5 Element Filter***

![6_Website_5_Element_Filter](\Resources\6_Website_5_Element_Filter.png "Figure 6 - Website 5 Element Filter")

***Figure 6 - Website 5 Element Filter***



**Results:** Describe to Dana how someone might use the new webpage by walking her through the process of using the search criteria. Use images of your webpage during the filtering process to support your explanation.

## Deliverable 1: Filter UFO sightings on multiple criteria (80 points)

### Deliverable 1 Instructions

Using JavaScript and HTML, you’ll modify the code in your `index.html` file to create more table filters. In addition to the date filter you created in this module, you’ll add filters for the city, state, country, and shape, as shown in the following image:

Follow the instructions below and the numbered comments in the starter code to complete Deliverable 1.

1. Download the `ufo_starterCode.js`, rename it `app.js`, and place it in the js folder of your UFOs GitHub repository. The starter code includes the code used to populate the table from this module.

**NOTE**

Before you rename the `ufo_starterCode.js` file, we suggest that you rename the `app.js` you created in this module as `app_1.js` or something similar to avoid using the wrong file for the Challenge.

1. In the `index.html` file, remove the list (`<li></li>`) element that creates the button.

2. Create four more list elements: city, state, country, and shape. These will be similar to the "Enter Date" list element. Each element should have the same "id" as the object properties in the `data.js` file.

3. In Step 1 of the `app.js` file, create an empty `filters` variable to keep track of all the elements that change when a search is entered. This variable will be used in Step 5 to store the property “id” and the value that was entered from user input.

4. Next, you will need to write code for two functions whose names we’ve provided in the starter code,

    

   ```
   
   ```

    

   and

    

   ```
   filterTable()
   ```

   .

   - The `updateFilters()` function will replace your `handleClick()` function and update the `filters` variable you created in Step 1.
   - ***<u>The `filterTable()` function will filter the table data by the value that is entered for the "id" that has changed.</u>***

5. For Step 2, located before the `buildTable(tableData)` function at the end of the starter code, modify the event listener from this module so that it detects a "change" on each input element and calls the `updateFilters()` function.

6. In Step 3, we’ve provided the function, `updateFilters()`. Inside this function, you’ll write code in Steps 4-5 to update the filters based on user input.

7. In Step 4a, create a variable that saves the element that was changed using `d3.select(this)`.

8. In Step 4b, create a variable that saves the value of the changed element’s property.

9. In Step 4c, create a variable that saves the attribute of the changed element’s id.

10. In Step 5, write an `if-else` statement that checks if a value was changed by the user (variable from Step 4b). If a value was changed, add the element’s id (variable from Step 4c) as the property and the value that was changed to the `filters` variable you created in Step 1. If a value was not entered, then clear the element id from the `filters` variable.

**80 to >72.0 pts**

Demonstrating Proficiency

The index.html file has the following: 













### Deliverable 1 Requirements

You will earn a perfect score for Deliverable 1 by completing all requirements below:

### 2.2 The List Element

The list element that creates the button is removed, and there are five list elements for filtering in the `index.html` file. **(20 pt)**

✓The list element for the button is removed. 

## 

```html
<!-- <li class="list-group-item bg-dark">
	<button id="filter-btn" type="button" class="btn btn-dark">Filter Table</button>
</li> -->
```



✓ALL FIVE list elements for filtering are created.

 

```html
<li class="list-group-item  bg-dark">
	<label for="date">Enter Date</label>
	<input type="text" placeholder="MM/DD/YYYY" id="datetime" onkeyup="updateFilters(id)"/>
	<label for="city">Enter City</label>
	<input type="text" placeholder="city lowercase" id="city" onkeyup="updateFilters(id)"/>
	<label for="state">Enter State</label>
	<input type="text" placeholder="two letter state " id="state" onkeyup="updateFilters(id)"/>
	<label for="country">Enter Country</label>
	<input type="text" placeholder="two letter country" id="country" onkeyup="updateFilters(id)"/>
	<label for="shape">Enter Shape</label>
	<input type="text" placeholder="shape" id="shape" onkeyup="updateFilters(id)"/>
</li>
```



### 2.3 The app.js JavaScript File

The app.js file has the following: 

#### 2.3.1 The Event Listener

The event listener is modified to detect changes to each filter in the `app.js` file. **(10 pt)**

✓The event listener is modified to detect changes to ALL FIVE filters. 

```javascript
d3.selectAll(".filter").on("change", updateFilters);
```



#### 2.3.2 The `updateFilters()` Function

The `updateFilters()` function saves the element, value, and the id of the filter that was changed. **(20 pt)**

✓The updateFilters() function saves the element, value, and the id of the filter that was changed. 



```javascript
let text1 = "#";
let callId = text1.concat(id);
changedElement = d3.select(callId)
```



#### 2.3.3 The `filterTable()` Function

The `filterTable()` function loops through all of the filters and keeps any data that matches the filter values. **(20 pt)**

✓The filterTable() function loops through all of the filters and keeps any data that matches the filter values. 

```javascript
if (element) {
  filteredData = filteredData.filter(row => row[element] === currentkey);
}
```





## 3 Summary

**Summary:** In a summary statement, describe one drawback of this new design and two recommendations for further development.

**12 to >10.0 pts**

Demonstrating Proficiency

The Deliverable Fulfills "Emerging" Required Criteria: AND has the following: 

### 3.1 Drawback of the Design

✓The summary addresses a drawback of the design. 







### 3.2 Recommendations for further Development

✓The summary has TWO recommendations for further development.

- It is not mobile ready
- Add key word search of the Comments section...
- Add AND or OR search capability. Logical in input fields would be great
- Add dropdowns for available choices
- Button to clear all filters
- A statistical search would be very good like
  - what data had the most sightings regardless of location
  - which city/state has the most reports
  - grouping the list by statistics would be good for finding patterns