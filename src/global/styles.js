import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    
  });
}
export const colors = {
    mainColor: '#004346',
    white: '#F5F5F5',
    paleRose: '#F2DED9',
    goldenrod: '#DEA02C',
    charcoal: '#333333',
}
export const fonts = {
    poppinsRegular: 'Poppins-Regular'
}
export const parameter = {
    headerHeight : 50, 
}