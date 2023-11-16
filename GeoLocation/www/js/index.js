function getLocation() {
    navigator.geolocation.getCurrentPosition(
        onSuccess,
        onError,
        {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        }
    );
}

function onSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationText = `Latitude: ${latitude}, Longitude: ${longitude}`;
    document.getElementById("location").textContent = locationText;
    console.log('success');
}

function onError(error) {
    alert(`Error getting location: ${error.message}`);
}
