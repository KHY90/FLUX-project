import axios from 'axios';

export const fetchTodayVisitorCount = async (todayVisitorCount) => {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/visitor/daily');
        todayVisitorCount.value = response.data;
    } catch (error) {
        console.error('Failed to fetch today visitor count:', error);
    }
};
