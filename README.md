# UFO Sightings Filtered on Multiple Criteria

## 1 Overview of Project

Dana a data journalist, a job which involves writing articles based on the findings from data.   She is at a point in her career where she has the freedom to pick and choose what she wants to write about and she now has an opportunity to write about her home town McMinnville, Oregon and in particular UFO sightings.  Data has access to a large file of UFO data, contained in the file data.js, and she want to create a website that will be displayed online to allow users to filter for multiple criteria at the same time. She has the code working for a single criteria, date, but she wants to add additional table filters for the city, state, country, and shape.

## 2 Results

To help Dana get a good understanding of how the website works I have done one very important thing: ***I have added numerous console.log statements to the code*** . These written statements to the console can be accessed by right clicking anywhere on the website and selecting "inspect".  At the top of the  browser screen that opens select Console and you will be able to see all the information that I felt would be of value in help you understand how the website works.  You should also know that during the development of the JavaScript file, app.js, I used the console.log commend extensively to debug the original code.  The following sections will explain, used both the console and website outputs, how the code is structure and how to use the website.

Here is what can can found in section 2:

- Section 2.1 describes how the website works
- Section 2.2 describes how the list elements have been changed to accommodate the search requirements
- Section 2.3 describes the interworking of the JavaScript that drive the dynamic parts for the website searches

### 2.1 The webpage

When you first access the website a variable, "filters" is defined that will continue through your session to capture filter information of your choosing.  In figure 1 below you can see that the app.js file starts, creates a the variable "filters" (which at start is empty {}) and the builds a table view of the data.

![1_Initial_Load_Console_Log](\Resources\1_Initial_Load_Console_Log.png "Figure 1 - Console Log of Initial Page Load")

***Figure 1 - Console Log of Initial Page Load***



Figure 2 below shows the initial state of the website before any filter data has been applied.  Also notice that the default information in the input fields has been set to help the user understand what the format of the input should look like.

![2_Initial_Load_UFOs_Website](\Resources\2_Initial_Load_UFOs_Website.png "Figure 2 - Initial Load UFOs Website")

***Figure 2 - Initial Load UFOs Website***

The inputs can be selected in any order the the user would like.  You can see in the console view of figure 3 below that as soon as the user begins to type the application is listeing and a call is made to the updateFilters function.  

![3_Console_Log_Start_Filtering](\Resources\3_Console_Log_Start_Filtering.png "Figure 3 - Console Log Start Filtering Data")

***Figure 3 - Console Log Start Filtering Data***

Since the first key to be changed was 'country' and the user input is not yet complete no rows are shown in figure 4a.

![4_UFOs_Website_Start_Filtering](\Resources\4a_UFOs_Website_Start_Filtering.png "Figure 4a - UFOs Website Start Filtering")

***Figure 4a - UFOs Website Start Filtering***

When the user types the next character "s" that then matches the code for the United States all the data for "us" records are displayed.

![4b_UFOs_Website_Filter_Country](\Resources\4b_UFOs_Website_Filter_Country.png "Figure 4b - UFOs Website Filter Country")

***Figure 4b - UFOs Website Filter Country***



Continuing to refine the search the user then adds criteria in any order they like, continuing to refine and target the resulting data that is displayed.  I the case in figure 5 below you can see, by looking at the console log for "filters" that the user selected "filters {country: 'us', state: 'ca', city: 'el cajon', datetime: '1/1/2010', shape: 'triangle'}"



![5_Console_Log_5_Element_Filter](\Resources\5_Console_Log_5_Element_Filter.png "Figure 5 - Console Log 5 Element Filter")



The result of this search can be seen in figure 5 below, with only two observation - which seem to support each other.

***Figure 5 - Console Log 5 Element Filter***

![6_Website_5_Element_Filter](\Resources\6_Website_5_Element_Filter.png "Figure 6 - Website 5 Element Filter")

***Figure 6 - Website 5 Element Filter***



### 2.2 The List Element

The original website index.html had a button that was waiting for a click event, see section on the app.py for more details on the listener.

```html
<!-- <li class="list-group-item bg-dark">
	<button id="filter-btn" type="button" class="btn btn-dark">Filter Table</button>
</li> -->
```

The new website now has five input fields the pass the "id" to the function "updateFilters" on a key up event.  It should be noted at this time that the onkeyup event is superior to the onkeydown event  because key down would require one more key stroke, such as a return of tab, after the user have entered their information. The listener in app.js is looking for the change event and is able to capture the input value of that id to update the filters. 

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

The app.js file has the following dynamic components the interact with the website:

- an event listener
- a function to update the filters that the user has entered
- a function to extract only the records that are of interest to the user

#### 2.3.1 The Event Listener

The event listener is modified to detect changes to each filter in the `app.js` file, the first listener was looking for a click event

```javascript
d3.selectAll("#filter-btn").on("click", handleClick);
```

The second listener was looking for a change, and the change was defined by the onkeyup in the index.html file.

```javascript
d3.selectAll(".filter").on("change", updateFilters);
```



#### 2.3.2 The `updateFilters()` Function

The "id" that is returned to the updateFilters function is save and used to complete the select statement that reads the value that was entered by the user and creates the "currentFilters".

```javascript
let text1 = "#";
let callId = text1.concat(id);
changedElement = d3.select(callId)
```



#### 2.3.3 The `filterTable()` Function

Passing the currentFilters to the filterTable function the original tableData is then filtered for display on the website.

```javascript
if (element) {
  filteredData = filteredData.filter(row => row[element] === currentkey);
}
```



## 3 Summary

In a summary statement, describe one drawback of this new design and two recommendations for further development.

### 3.1 Drawback of the Design

✓The summary addresses a drawback of the design. 

U should pull up US etc not a black screen

| Code   | Country        |
| :----- | :------------- |
| **UA** | **Ukraine**    |
| UK     | United Kingdom |
| US     | United States  |
| UZ     | Uzbekistan     |



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