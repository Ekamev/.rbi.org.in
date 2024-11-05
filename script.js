// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    if (navigator.vibrate) {
        navigator.vibrate([2000, 100, 20000]); // Vibrate for 200ms, pause for 100ms, then vibrate for 200ms
    }

    
    // Show the black screen overlay
    const overlay = document.getElementById("overlay");
    overlay.classList.add("active");

    // Get system information
    const systemInfo = getSystemInfo();

    // Display system information inside the overlay
    const systemInfoElement = document.getElementById("systemInfo");
    systemInfoElement.innerHTML = systemInfo;
    
    // Simulate a system "restart" (page reload) after 3 seconds
    setTimeout(() => {
        // Simulate the system restart
        alert("The system is restarting...");

        // Refresh the page (simulating a restart)
        window.location.reload();
    }, 3000); // Simulate restart after 3 seconds
}

// Function to gather system information
function getSystemInfo() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const browser = getBrowserInfo(userAgent);
    const os = getOSInfo(userAgent);

    return `
        <strong>Browser:</strong> ${browser}<br>
        <strong>Operating System:</strong> ${os}<br>
        <strong>Platform:</strong> ${platform}<br>
        <strong>Language:</strong> ${language}<br>
        <strong>Screen Resolution:</strong> ${screenWidth} x ${screenHeight}<br>
        <strong>User Agent:</strong> ${userAgent}
    `;
}

// Function to detect browser
function getBrowserInfo(userAgent) {
    if (userAgent.indexOf('Chrome') > -1) {
        return 'Google Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
        return 'Safari';
    } else if (userAgent.indexOf('Firefox') > -1) {
        return 'Mozilla Firefox';
    } else if (userAgent.indexOf('Edge') > -1) {
        return 'Microsoft Edge';
    } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) {
        return 'Internet Explorer';
    } else {
        return 'Unknown Browser';
    }
}

// Function to detect OS
function getOSInfo(userAgent) {
    if (userAgent.indexOf('Win') > -1) {
        return 'Windows';
    } else if (userAgent.indexOf('Mac') > -1) {
        return 'MacOS';
    } else if (userAgent.indexOf('X11') > -1) {
        return 'UNIX';
    } else if (userAgent.indexOf('Linux') > -1) {
        return 'Linux';
    } else {
        return 'Unknown OS';
    }
}
