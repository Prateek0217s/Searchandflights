function compareTime(timeString1, timeString2) {
    const dateTime1 = new Date(timeString1);
    const dateTime2 = new Date(timeString2);

    if (Number.isNaN(dateTime1.getTime()) || Number.isNaN(dateTime2.getTime())) {
        return false;
    }

    return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
    compareTime
};
