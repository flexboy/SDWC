import { realtime } from './caiyun';
import { get as get3s } from './weather3s';

const Level = {
  Success: 'success',
  Primary: 'primary',
  Warning: 'warning',
  Danger: 'danger',
  Error: 'error'
};

/**
 * @param {import('./api-types').Weather3sResult} data
 */
function realtimeLevel(data) {
  const { wind_speed, rainfall_count } = data[0];
  if (wind_speed >= 400 || rainfall_count >= 15) {
    return Level.Error;
  } else if (wind_speed < 400 || rainfall_count < 15) {
    return Level.Danger;
  } else if (wind_speed < 300 || rainfall_count < 10) {
    return Level.Warning;
  } else if (wind_speed < 200 || rainfall_count < 5) {
    return Level.Primary;
  } else if (wind_speed < 50 || rainfall_count === 0) {
    return Level.Success;
  }
}

/**
 * @param {import('./api-types').CaiYunRealtime} data
 */
function forecastLevel(data) {
  const {
    wind: { speed: wind_speed },
    precipitation: {
      local: { intensity: precipitation_intensity },
      nearest: { distance: precipitation_distance }
    }
  } = data.result;
  if (wind_speed >= 400 || precipitation_intensity >= 0.4 || precipitation_distance <= 1) {
    return Level.Error;
  } else if (wind_speed < 400 || precipitation_intensity < 0.4 || precipitation_distance > 1) {
    return Level.Danger;
  } else if (wind_speed < 300 || precipitation_intensity < 0.3 || precipitation_distance > 2) {
    return Level.Warning;
  } else if (wind_speed < 200 || precipitation_intensity < 0.1 || precipitation_distance > 3) {
    return Level.Primary;
  } else if (wind_speed < 50 || precipitation_intensity === 0 || precipitation_distance > 5) {
    return Level.Success;
  }
}

/**
 * @typedef {{lng: number; lat: number; id: string}} PlanRunnableOptions
 * @param {PlanRunnableOptions} _
 */
export async function planRunnable({ lng, lat, id }) {
  const [res3s, resCaiyun] = await Promise.all([
    get3s(id),
    realtime(lng, lat)
  ]);
  return {
    realtime: realtimeLevel(res3s),
    forecast: forecastLevel(resCaiyun)
  };
}