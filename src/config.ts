const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

function isDev() {
  return development;
}

export const CLIENT_URL = isDev()
  ? 'http://localhost:3003'
  : 'https://domain.com';

export const ADMIN_URL = isDev()
  ? 'http://localhost:3004'
  : 'https://domain.com';

export const SERVER_URL = isDev()
  ? 'http://localhost:5004'
  : 'https://domain.com';

