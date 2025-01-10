window.onload = function() {
    const repo = "t7ru/t7ru.github.io";
    const apiUrl = `https://api.github.com/repos/${repo}/commits/main`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const lastUpdated = new Date(data.commit.committer.date);
            const formattedDate = lastUpdated.toLocaleDateString("en-UK", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            });
            document.getElementById('lastupdated').innerText = `Last updated on ${formattedDate} (local time.)`;
        })
        .catch(error => console.error('Error fetching commit data:', error));
};