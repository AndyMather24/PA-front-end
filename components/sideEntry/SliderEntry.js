import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry';
// import styles from "../styles/ToggledSlider";
class SliderEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image() {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
                source={{ uri: illustration }}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}, this.state.active && styles.toggleImageContainer]}
                style={[styles.image, { position: 'relative' }]}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
                <Image
                    source={{ uri: illustration }}
                    style={styles.image}
                />
            );
    }

    render() {
        const { data: { title, subtitle }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
                style={[styles.title, even ? styles.titleEven : {}]}
                numberOfLines={2}
            >
                {title.toUpperCase()}
            </Text>
        ) : false;

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.slideInnerContainer, this.state.active && styles.toggleSlideInnerContainer]}
                onPress={() => {
                    console.log("clicked")
                    this.setState({
                        active: !this.state.active
                    })
                }}
            >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}, this.state.active && styles.toggleImageContainer]}>
                    {this.image}
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}, this.state.active && styles.textContainer]}>
                    {uppercaseTitle}
                    <Text
                        style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                        numberOfLines={2}
                    >
                        {subtitle}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default SliderEntry