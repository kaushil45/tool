// Port scan form submission
document.getElementById("port-scan-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var ip_address = document.getElementById("ip_address").value;
    var ports = document.getElementById("ports").value;

    fetch("/port_scan", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `ip_address=${ip_address}&ports=${ports}`
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("port-scan-output").innerHTML = data.output;
    })
    .catch(error => console.error("Error:", error));
});

// Ping test form submission
document.getElementById("ping-test-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var ip_address = document.getElementById("ip_address").value;

    fetch("/ping_test", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `ip_address=${ip_address}`
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("ping-test-output").innerHTML = data.output;
    })
    .catch(error => console.error("Error:", error));
});

// MTR report form submission
document.getElementById("mtr-report-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var ip_address = document.getElementById("ip_address").value;

    fetch("/mtr_report", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `ip_address=${ip_address}`
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("mtr-report-output").innerHTML = data.output;
    })
    .catch(error => console.error("Error:", error));
});

// IP abuse check form submission
document.getElementById("ip-abuse-check-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var ip_address = document.getElementById("ip_address").value;

    fetch("/ip_abuse_check", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `ip_address=${ip_address}`
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("ip-abuse-check-output").innerHTML = JSON.stringify(data.data, null, 4);
    })
    .catch(error => console.error("Error:", error));
});
