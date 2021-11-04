const {
  calculateDistance,
  calculatePower,
  findBestStationForEachPoint,
} = require('./logic');

const stations = [
  [[0, 0], 10],
  [[20, 20], 5],
  [[10, 0], 12],
];
const points = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18],
];

test('Should calculate distance between two coordinate points (stations and points)', () => {
  expect(calculateDistance(stations[0], points[1])).toBe(100.4987562112089);
  expect(calculateDistance(stations[0], points[2])).toBe(15.329709716755891);
  expect(calculateDistance(stations[1], points[3])).toBe(19.6468827043885);
  expect(calculateDistance(stations[1], points[1])).toBe(81.8535277187245);
  expect(calculateDistance(stations[2], points[2])).toBe(5.916079783099616);
  expect(calculateDistance(stations[2], points[3])).toBe(9.055385138137417);
});

test('Should calculate power output for each distance', () => {
  const reach = [10, 5, 12];
  const distance = [100, 15, 19, 81, 5, 9];
  expect(calculatePower(reach[0], distance[0])).toBe(8100);
  expect(calculatePower(reach[0], distance[1])).toBe(25);
  expect(calculatePower(reach[1], distance[2])).toBe(196);
  expect(calculatePower(reach[1], distance[3])).toBe(5776);
  expect(calculatePower(reach[2], distance[4])).toBe(49);
  expect(calculatePower(reach[2], distance[5])).toBe(9);
});

test('Should find best station for each point', () => {
  const result = [
    { point: { x: 0, y: 0 }, power: 100, station: { x: 0, y: 0 } },
    { point: { x: 100, y: 100 }, power: 0, station: {} },
    {
      point: { x: 15, y: 10 },
      power: 37.01408520560921,
      station: { x: 10, y: 0 },
    },
    {
      point: { x: 18, y: 18 },
      power: 8.670756684701997,
      station: { x: 10, y: 0 },
    },
  ];
  expect(findBestStationForEachPoint(stations, points).toString()).toBe(
    result.toString()
  );
});
