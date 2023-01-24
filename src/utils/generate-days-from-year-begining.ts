import dayjs from "dayjs";

export function generateDaysFromYearBegining() {
    const fristDayOfTheyear = dayjs().startOf('year');
    const today = new Date();

    const days = [];
    let compareDay = fristDayOfTheyear;

    while (compareDay.isBefore(today)) {
        days.push(compareDay.toDate());
        compareDay = compareDay.add(1, 'day')
    }

    return days;
}