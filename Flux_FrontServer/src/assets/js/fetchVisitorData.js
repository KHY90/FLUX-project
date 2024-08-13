import axios from 'axios';

export const fetchVisitorData = async (selectedRange, visitorCount, visitorCountMonth, updateChart) => {
    try {
        let response;
        if (selectedRange.value === 'daily') {
            response = await axios.get('http://localhost:8080/api/v1/visitor/daily-all');
            if (Array.isArray(response.data)) {
                visitorCount.value = Array(31).fill(0);
                response.data.forEach(visitor => {
                    const day = new Date(visitor.visitDate).getDate();
                    visitorCount.value[day - 1] = visitor.visitCount;
                });
            } else {
                console.error('Expected an array but got:', typeof response.data);
            }
        } else if (selectedRange.value === 'monthly') {
            response = await axios.get('http://localhost:8080/api/v1/visitor/monthly');
            if (Array.isArray(response.data)) {
                visitorCountMonth.value = response.data;
            } else {
                console.error('Expected an array but got:', typeof response.data);
            }
        }
        updateChart();
    } catch (error) {
        console.error('Failed to fetch visitor data:', error);
    }
};
