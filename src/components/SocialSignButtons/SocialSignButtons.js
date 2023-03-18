import React, { useEffect } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  getAuth, 
  signInWithCredential, 
  signInWithPopup } from 'firebase/auth';
import * as GoogleAuthSession from 'expo-auth-session'
import { googleLogInConfig } from '../../data/config/googleConfig'
import { useIdTokenAuthRequest} from 'expo-auth-session/providers/google';



const SocialSignButtons = () => {
  const auth = getAuth();
  const [request, response, promptAsync] = useIdTokenAuthRequest(
    googleLogInConfig,
    {
      clientId: googleLogInConfig.clientId,
      scopes: ['openid', 'profile', 'email'],
      redirectUri: `${GoogleAuthSession.makeRedirectUri()}`,
    }
  );

  useEffect(() => {
    if (response && response.type === 'success') {
      if (response.provider === 'google') {
        const { id_token } = response.params;
        const credential = GoogleAuthProvider.credential(id_token);
        signInWithCredential(auth, credential)
          .then((userCredential) => {
            const user = userCredential.user;
            // do something with the authenticated user
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (response.provider === 'facebook') {
        const credential = FacebookAuthProvider.credentialFromResult(response);
        signInWithCredential(auth, credential)
          .then((userCredential) => {
            const user = userCredential.user;
            // do something with the authenticated user
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [auth, response]);

  const signinWithGoogle = async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const user = result.user;
      // do something with the authenticated user
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
       <CustomButton 
       iconType='ant-design'
       color='red'
       name='google'
        text="Sign In with Google"
        onPress={signinWithGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        type='SOCIAL'
      />
      <CustomButton 
        iconType='entypo'
        color='blue'
        name='facebook-with-circle'
        text="Sign In with Facebook"
        onPress={signInWithFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
        type='SOCIAL'
      />
    
    </>
  )
}

export default SocialSignButtons