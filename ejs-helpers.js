const { push } = require("./models/budget")

//function that iterates over an object and creates <td></td> for each key value
function createTableData(obj, index) {
        const table = []
        for(let key in obj) {
            //'name' key will display as <a> tag with the href of its own index which will be used in SHOW route
            if (key === 'name'){
                table.push(`<td><a href="/budgets/${index}" >${obj[key]}</td>`) 
            } else if (key === 'date') {
                  table.push(`<td>${obj[key]}</td>`) 
            } else if(key === 'amount') {
                //this logic will also create classes for amound key that will be used to change the backgroundColor based on the amount
                if(obj[key] < 0){
                   table.push(`<td class="red">${obj[key]}</td>`) 
                } else if(obj[key] >= 1000) {
                    table.push(`<td class="green">${obj[key]}</td>`) 
                } else {
                    table.push(`<td class="neutral">${obj[key]}</td>`) 
                }
                
            }
            
        }
    
        return table.join(' ')
     
}

// function that iterates over an object and injects key&value pairs into html tags
function createShowData(obj) {
    const data= []
    for(let key in obj) {
        if (key === 'tags') {
        
            const liItem = obj[key]
            
            data.push(`<th>${key}</th>`)


               for(let i of liItem) {
               data.push(`
               <td>
               <ul>
               <li>${i}</li>
               </ul>
               </td>
               `)}
        
            console.log(obj[key])
        } else {
              data.push( `
              <tr><th>${key}:</th></tr>
              <tr><td>${obj[key]}</td></tr>
              `)
        // console.log(key + " : " + obj[key])
        }
      
    }
    return data.join(' ')
}


//function that calculates the total amount
function calculateTotal(arr) {
    let total = 0
         
         for(let item of arr) {
        total = total + parseInt(item.amount)
       
        }
    // console.log(total)
    return total
}



module.exports = {
    createTableData,
    createShowData,
    calculateTotal
}