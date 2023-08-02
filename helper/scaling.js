import { Dimensions,PixelRatio } from "react-native";
const { width, height} = Dimensions.get("window");

const guidelineBaseWidth = 384;
const guidelineBaseHeight = 786.666666;
const screenSize = Math.sqrt(width * height) / 100;



const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>size + (scale(size) - size) * factor;

const fontSize = PixelRatio.getFontScale();
const fontScale = size => size / fontSize;


export { scale, verticalScale, moderateScale,fontScale, screenSize };