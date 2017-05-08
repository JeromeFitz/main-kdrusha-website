import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "sans-serif"
    },
    "video-lightbox img": {
        "height": 80 * vh,
        "width": "auto",
        "marginTop": 50,
        "marginRight": "auto",
        "marginBottom": 50,
        "marginLeft": "auto",
        "boxShadow": "0px 0px 5px #bdc3c7"
    },
    "video-lightbox-background": {
        "position": "fixed",
        "zIndex": 999,
        "width": "100%",
        "height": "100%",
        "textAlign": "center",
        "top": 0,
        "left": 0,
        "background": "rgba(0,0,0,0.8)"
    },
    "video-lightbox-content": {
        "position": "fixed",
        "zIndex": 1000,
        "width": "100%",
        "height": "100%",
        "textAlign": "center",
        "top": 0,
        "left": 0,
        "background": "rgba(0,0,0,0.8)",
        "overflow": "visible"
    }
});