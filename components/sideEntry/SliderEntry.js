import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry';
import * as api from '../../api/api'

class SliderEntry extends Component {

    state = {
        active: false,
        gestureName: 'none',
        transport: []
    };

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
        let { data: { title, subtitle, date, countDown } } = this.props;
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

                        {moment(date).endOf().fromNow()}
                    </Text>
                    <Text
                        style={[styles.subtitle]}
                        numberOfLines={4}
                    >
                        {moment(date).format("MMMM Do YYYY") + ' ' + date.slice(11, 16)}
                    </Text>

                    <Text style={[styles.subtitle]}
                        numberOfLines={5}>
                    </Text>
                    {this.state.active && <View style={[styles.subtitle]}>
                        {this.state.transport.map((route, i) => {
                            return <View key={i}>
                                <Text style={{
                                    color: 'black',
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    paddingBottom: 5,
                                    marginTop: 10,
                                    letterSpacing: 0.5
                                }}> {(route.departure_stop) ? 'Outgoing Transport' : 'Return Transport'}</Text>
                                <Text style={styling.text}>
                                    {`Your train is scheduled to leave ${route.departure_stop || route.r_departure_stop} at ${route.departure_time || route.r_departure_time}. It will arrive to ${route.arrival_stop || route.r_arrival_stop} at ${route.arrival_time || route.r_arrival_time}. The duration of your journey is approx ${route.duration || route.r_duration}. `}
                                </Text>
                            </View>
                        })}
                        <Text style={[styles.subtitle]}> {'Enjoy your Journey'}</Text>

                    </View>}
                </View>

            </TouchableOpacity>
        );
    }
    componentDidMount = () => {
        let { data: { id } } = this.props;
        api.getArrangedEventsTransport(id).then(transport => {
            this.setState({ transport: transport })
        })
    }
}
const styling = StyleSheet.create({
    text: {
        marginTop: 3,
        color: 'black',
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'left',
        marginBottom: 4,

    },
});




export default SliderEntry