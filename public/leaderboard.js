document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/leaderboard', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    const leaderboardList = document.getElementById('leaderboard-list');

    if (data.status === 'ok') {
        data.users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.username}: ${user.knowledgePoints} points`;
            leaderboardList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'Failed to load leaderboard.';
        leaderboardList.appendChild(listItem);
    }
});
