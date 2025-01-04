export const config = {
  db: {
    type: process.env['DB_TYPE'],
    entities: ['dist/**/*.entity.{ts,js}'],
  },
  bcrypt: {
    salt: Number(process.env['BCRYPT_SALT']) || 10,
  },
  api: {
    port: process.env['PORT'],
  },
  jwt: {
    accessTokenExpire: process.env['ACCESS_TOKEN_EXPIRE'] || '1d',
    refreshTokenExpire: process.env['REFRESH_TOKEN_EXPIRE'] || '30d',
  },
  slack: {
    webhookUrl: process.env['SLACK_WEBHOOK_URL'] || '',
  },
};
