window.onload = function () {
  const repo = "t7ru/t7ru.github.io";
  const apiUrl = `https://api.github.com/repos/${repo}/commits/main`; // github api url to fetch commit data

  fetch(apiUrl)
    .then((response) => response.json()) // parse the response as json
    .then((data) => {
      const lastUpdated = new Date(data.commit.committer.date); // get the commit date
      const formattedDate = lastUpdated.toLocaleDateString("en-UK", { // format the date
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      document.getElementById("lastupdated").innerText = `Last updated on ${formattedDate} (local time.)`; // display formatted date
    })
    .catch((error) => console.error("Error fetching commit data:", error)); // print errors
};
