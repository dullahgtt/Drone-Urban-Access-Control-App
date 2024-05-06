const mapScript = {
    exploreModel: () => {
        const promptForZoneData = () => {
            const coordinateA = prompt('Enter coordinate A (format: x,y):');
            const coordinateB = prompt('Enter coordinate B (format: x,y):');
            if (coordinateA && coordinateB) {
                const zone = { coordinateA, coordinateB };
                return zone;
            } else {
                console.log('Invalid input. Please enter coordinates in the format x,y.');
                return null;
            }
        };

        const displayZoneOnMap = (zone) => {
            const map = L.map('map').setView([0, 0], 2);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                maxZoom: 18,
            }).addTo(map);

            const bounds = [
                [parseInt(zone.coordinateA.split(',')[1]), parseInt(zone.coordinateA.split(',')[0])],
                [parseInt(zone.coordinateB.split(',')[1]), parseInt(zone.coordinateB.split(',')[0])],
            ];

            L.rectangle(bounds, { color: 'red', weight: 1 }).addTo(map);
            map.fitBounds(bounds);

            const backButton = document.createElement('button');
            backButton.innerText = 'Back to Homepage';
            backButton.addEventListener('click', () => {
                window.location.href = '/HomePage.js';
            });
            document.body.appendChild(backButton);
        };

        const exploreZone = () => {
            const zone = promptForZoneData();
            if (zone) {
                displayZoneOnMap(zone);
            } else {
                console.log('Zone data not provided.');
            }
        };

        exploreZone();
    },
};

export default mapScript;
