const { returnPowerOutputs } = require('./logic');
module.exports = async function (context, req) {
  try {
    const stations = req.body && req.body.stations;
    const points = req.body && req.body.points;

    const data = await returnPowerOutputs(stations, points);

    context.res = {
      body: data,
    };
  } catch (err) {
    context.res = {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 400,
      body: {
        err,
      },
      isRaw: true,
    };
  }
};
