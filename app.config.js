import 'dotenv/config'
export default {
  "expo": {
    
    "name": "boclapp",
    "scheme": "boclapp",
    "slug": "boclapp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/Boclapp.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
   "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/Boclapp.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.example.boclapp"
    },

    "web": {
      "favicon": "./assets/Boclapp.png"
    },
    "extra": {
      "eas": {
        "projectId": "eed14f6b-cf61-4a4f-a017-3fa9b6d2898e"
      },
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
      googleApiKey: process.env.GOOGLE_API_KEY,

      
    }
  }
}
