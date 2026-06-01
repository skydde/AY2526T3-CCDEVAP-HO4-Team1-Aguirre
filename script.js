
const ctxClaims = document.getElementById('claimsChart').getContext('2d');
new Chart(ctxClaims, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], 
        datasets: [{
            label: 'Claims Dataset',
            data: [65, 101, 80, 0, 56, 95, 67, 21, 143, 122, 99, 2], 
            borderColor: '#ef4444',           
            backgroundColor: 'rgba(239, 68, 68, 0.5)', 
            
            pointStyle: 'rectRounded',          
            pointRadius: 10,
            pointHoverRadius: 15
        }]
    },
    options: {
        responsive: true,
    }
});

const ctxRatings = document.getElementById('ratingsChart').getContext('2d');
new Chart(ctxRatings, {
    type: 'pie',
    data: {
        labels: ['1-Star', '2-Star', '3-Star', '4-Star', '5-Star'], 
        datasets: [{
            label: 'Ratings Source',
            data: [15, 22, 67, 18, 76], 
            backgroundColor: [
                '#f11212', 
                '#e1680b ', 
                '#e6ba28', 
                '#80c814', 
                '#11b305' 
            ]
        }]
    },
    options: {
        responsive: true,
    }
});

const ctxUsers = document.getElementById('userStatusChart').getContext('2d');
new Chart(ctxUsers, {
    type: 'doughnut',
    data: {
        labels: ['Active', 'Suspended', 'Banned'], 
        datasets: [{
            label: 'User Status',
            data: [143, 67, 12], 
            backgroundColor: [
                '#11b305', 
                '#e1680b', 
                '#f11212'  
            ]
        }]
    },
    options: {
        responsive: true,
    }
});