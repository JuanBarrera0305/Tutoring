let notificationCount = 0;

function sendNotification() {
  const title = document.getElementById('titleInput').value.trim();
  const message = document.getElementById('messageInput').value.trim();

  if (!message || !title) {
    alert("Please enter both title and message.");
    return;
  }

  if (Notification.permission === "granted") {
    triggerNotification(title, message);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        triggerNotification(title, message);
      } else {
        alert("Notification permission denied.");
      }
    });
  } else {
    alert("Notifications are blocked. Please enable them in your browser settings.");
  }
}

function triggerNotification(title, message) {
  setTimeout(() => {
    new Notification(title, {
      body: message,
      icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
    });

    notificationCount++;
    document.getElementById('counter').textContent = notificationCount;
  }, 5000);
}
