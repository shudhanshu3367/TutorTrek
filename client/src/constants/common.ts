
 export const client_id = '626927107662-n6cdvrf87lfrpa8kbhtt285mac9klfmg.apps.googleusercontent.com'
 export const redirect_uri = 'http://localhost:3000'
 export const STRIPE_PUBLISHABLE_KEY='pk_test_51NRzOqSFuPFI6PEIm2JqtP4KzHSXPAzJUGsRziDz2lzr71fjzyebwf6V59coC03n6ZWHtxk51GWUE4x8OnjEzNYG00mLqdPeaG'
 const CONSTANTS_COMMON = {
    API_BASE_URL: 'http://localhost:4000',
    GOOGLE_URL_FOR_LOGIN:`https://accounts.google.com/o/oauth2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=openid%20email%20profile`

 }

 export default CONSTANTS_COMMON