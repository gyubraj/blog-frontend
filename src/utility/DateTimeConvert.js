
export const dateTimeConvert = (inputData, inputType) => {

    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function dateFormat(d) {
        let t = new Date(d);
        return t.getDate() + '-' + monthNames[t.getMonth()] + '-' + t.getFullYear();
    }
    let inputdata = inputData;
    inputdata = inputdata.split(/[T.Z]/);
    switch (inputType) {
        case 'time':
            return inputdata[1];
        case 'date':
            return dateFormat(inputdata[0]);
        default:
            return null;

    }
}