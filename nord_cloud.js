/**
 * Objective:
 *  Create a function that finds the most powerful link station for a device at given point [x,y]
 */

// Print out function output from points [x,y]:
const points = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18],
];

// Stations coordinates (x,y) and power (r) => [[x,y], r]
const stations = [
  [[0, 0], 10],
  [[20, 20], 5],
  [[10, 0], 12],
];

/**
 * Find the station with most power for each coordinate point.
 *
 * @param {Array} stations Link stations
 * @param {Array} points Coordinate points
 * @returns {Object} {power, point: {x,y}, station: {x,y}}
 */
const findBestStationForEachPoint = (stations, points) =>
  points.map(point => {
    let power = 0;
    let station = {};
    for (let x = 0; x < stations.length; x++) {
      const reach = stations[x][1];
      const distance = calculateDistance(stations[x], point);
      if (reach > distance) {
        const calculatedPower = calculatePower(reach, distance);
        if (calculatedPower > power) {
          power = calculatedPower;
          station = { x: stations[x][0][0], y: stations[x][0][1] };
        }
      }
    }
    return {
      point: { x: point[0], y: point[1] },
      power,
      station,
    };
  });

/**
 * Calculate link station power output for given distance.
 * Formula: (reach - distance)pow2
 * @param {Integer} reach Link station reach
 * @param {Integer} distance to coordinate point
 * @returns {Integer} Power output
 */
const calculatePower = (reach, distance) => Math.abs((reach - distance) ** 2);

/**
 * Calculate distance between coordinate point and link station.
 * Formula: sqrt((x1 − x2)pow2 + (y1 − y2)pow2)
 * @param {Array} station Individual station coordinates [x,y]
 * @param {Array} point Individual point coordinates [x,y]
 */
const calculateDistance = (station, point) =>
  Math.sqrt(
    Math.abs(point[0] - station[0][0]) ** 2 +
      Math.abs(point[1] - station[0][1] ** 2)
  );

/**
 * Log each coordinate point with (possible) power output.
 *
 * @param {Array} stations Link stations
 * @param {Array} points Coordinate points
 */
const logPowerOutputs = (stations, points) => {
  const powerEntities = findBestStationForEachPoint(stations, points);
  powerEntities.forEach(entity => {
    if (entity.power) {
      console.log(
        `Best link station for point (${entity.point.x},${
          entity.point.y
        }) is (${entity.station.x},${
          entity.station.y
        }) with power: ${entity.power.toFixed(2)}`
      );
    } else {
      console.log(
        `No link station within reach for point (${entity.point.x},${entity.point.y})`
      );
    }
  });
};

logPowerOutputs(stations, points);
