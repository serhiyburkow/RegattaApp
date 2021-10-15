import React, { useState, useEffect } from 'react';
import {TouchableOpacity} from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';
import {StyledImagePickerWrapper, Avatar} from "./ImagePicker.styled";
import defaultPicture from '@assets/profile-default.png';

interface ImagePickerProps {
    imageHandler: (image: string) => void,
    value: string
}

const ImagePicker = (props: ImagePickerProps) => {

    const {
        imageHandler = () => null,
        value: defaultValue = defaultPicture
    } = props;

    const [image, setImage] = useState<string>('');
    useEffect(() => {
        (async () => {
            const { status } = await ExpoImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ExpoImagePicker.launchImageLibraryAsync({
            mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            const { uri: image } = result;
            setImage(image);
            imageHandler(image);
        }
    };

    return (
        <StyledImagePickerWrapper>
            <TouchableOpacity onPress={pickImage}>
                <Avatar source={ image ? { uri: image } : defaultValue } />
            </TouchableOpacity>
        </StyledImagePickerWrapper>
    );
}

export default ImagePicker;
