export default function(days) {
    let myDate = new Date(); //获取今天日期
    myDate.setDate(myDate.getDate() - days);
    let dateArray = [];
    let dateTemp;
    let flag = 1;
    for (var i = 0; i < days; i++) {
        let month = 0;
        if (myDate.getMonth() + 1 < 10) {
            month = '0' + (myDate.getMonth() + 1);
        } else {
            month = myDate.getMonth() + 1;
        }
        let day = 0;
        if (myDate.getDate() < 10) {
            day = '0' + myDate.getDate();
        } else {
            day = myDate.getDate();
        }
        dateTemp = month + '-' + day;
        dateArray.push(dateTemp);
        myDate.setDate(myDate.getDate() + flag);
    }
    return dateArray
}