import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry';
// import styles from "../styles/ToggledSlider";
class SliderEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            gestureName: 'none',
        };
    }

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image() {
        const { data: { illustration }, parallax, parallaxProps } = this.props;

        return parallax ? (
            <ParallaxImage
                source={{ uri: illustration }}
                containerStyle={[styles.imageContainer, this.state.active && styles.toggleImageContainer]}
                style={[styles.image, { position: 'relative' }]}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={'rgba(0, 0, 0, 0.25)'}
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
        let { data: { title, subtitle, date } } = this.props;
        // date = moment(date).format('LLLL');
        // const countDown = moment(date).startOf('hour').fromNow();
        const uppercaseTitle = title ? (
            <Text
                style={styles.title}
                numberOfLines={2}
            >
                {title.toUpperCase()}
            </Text>
        ) : false;

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.slideInnerContainer, this.state.active && styles.toggleSlideInnerContainer]}
                On
                onPress={() => {
                    this.setState({
                        active: !this.state.active,
                    })
                }}
            >
                <View style={[styles.imageContainer, this.state.active && styles.toggleImageContainer,]}>
                    {this.image}
                    <View style={styles.radiusMask} />
                </View>
                <View style={[styles.textContainer, this.state.active && styles.toggleTextContainer]}>
                    {uppercaseTitle}
                    <Text
                        style={[styles.subtitle]}
                        numberOfLines={2}
                    >
                        {subtitle}
                    </Text>
                    <Text
                        style={[styles.subtitle]}
                        numberOfLines={3}
                    >
                        {/* {countDown} */}
                    </Text>
                    <Text
                        style={[styles.subtitle]}
                        numberOfLines={4}

                    >
                        {/* {date} */}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default SliderEntry