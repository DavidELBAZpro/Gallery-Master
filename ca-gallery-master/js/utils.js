'use strict'

function getFormattedTime(time) {
    var newDate = new Date(time)
    
    var year = newDate.getFullYear()
    var month = newDate.getMonth() + 1
    var date = newDate.getDate()

    var monthToDisplay = (month < 10) ? '0' + month : month
    var dateToDisplay = (date < 10) ? '0' + date : date

    return year + '-'
        + monthToDisplay + '-'
        + dateToDisplay 
}