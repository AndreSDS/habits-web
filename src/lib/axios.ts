import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3333"
})

async function getHabitsSummary() {
    try {
        const response = await api.get('/summary');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function createHabit(data: { title: string, weekDays: number[] }) {
    try {
        await api.post('/habits', {
            title: data.title,
            weekDays: data.weekDays
        });
    } catch (error) {
        console.error(error);
    }
}

export {
    api,
    getHabitsSummary,
    createHabit
}