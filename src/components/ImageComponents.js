import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
//styles
import styles from "../styles/styles";
const ImageComponents = ({ borderRadius, image, width, height }) => {
    return (
        <Image style={{ width: width, height: height, borderRadius: borderRadius }} source={{ uri: image }} />
    )
}
export default ImageComponents;