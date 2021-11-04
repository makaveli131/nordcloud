const httpFunction = require('./index');
const context = require('./testing/defaultContext');

test('Http trigger should return correct response', async () => {
  const request = {
    body: {
      points: [
        [0, 0],
        [100, 100],
        [15, 10],
        [18, 18],
      ],
      stations: [
        [[0, 0], 10],
        [[20, 20], 5],
        [[10, 0], 12],
      ],
    },
  };

  await httpFunction(context, request);

  expect(context.res.body[0].response).toEqual(
    'Best link station for point (0,0) is (0,0) with power: 100.00'
  );
  expect(context.res.body[1].response).toEqual(
    'No link station within reach for point (100,100)'
  );
  expect(context.res.body[2].power).toEqual(37.01408520560921);
  expect(context.res.body[3].station).toEqual({
    x: 10,
    y: 0,
  });
});
