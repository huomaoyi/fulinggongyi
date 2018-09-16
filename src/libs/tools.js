function getTimeDistance(time1, time2) {
    let date1 = new Date(time1);
    let date2 = new Date(time2);

    let s1 = date1.getTime(),s2 = date2.getTime();
    let total = (s2 - s1)/1000;

    let day = parseInt(total / (24 * 60 * 60));
    let afterDay = total - day * 24 * 60 * 60;
    let hour = parseInt(afterDay/(60 * 60));
    let afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60;
    let min = parseInt(afterHour/60);
    let afterMin = (total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);

    let dayinfo = [];
    [day, hour, min, afterMin].forEach(data => dayinfo.push(fixNumberLong(data)));

    return dayinfo.join(':');
}

function fixNumberLong(number) {
    numberstr = number.toString();
    return numberstr.length < 2 ? "0" + numberstr : numberstr;
}

module.exports.getTimeDistance = getTimeDistance;