module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '254e18bcda57d479a80a002fe1fd6a41'),
  },
});
