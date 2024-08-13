// src/assets/js/fetchUserCount.js

import axios from 'axios';

export async function fetchUserCount(userCountRef) {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/user/count');
        userCountRef.value = response.data;
    } catch (error) {
        console.error('Error fetching user count:', error);
    }
}
