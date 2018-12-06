import React, { Component } from "react";
import { View, ScrollView, Text, StatusBar } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "./styles/SliderEntry";
import SliderEntry from "./sideEntry/SliderEntry";
import styles, { colors } from "./styles/index";
import * as api from "../api/api";
import locationImages from './static/locationImages';
const SLIDER_1_FIRST_ITEM = 1;


export default class Spin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      slider1Ref: null,
      ENTRIES1: []
    };
  }

  renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  get example1() {
    const { slider1ActiveSlide, slider1Ref } = this.state;

    return (
      <View style={styles.exampleContainer}>
        <Carousel
          ref={c => {
            if (!this.state.slider1Ref) {
              this.setState({ slider1Ref: c });
            }
          }}
          data={this.state.ENTRIES1}
          renderItem={this.renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          enableMomentum={false}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={false}
          onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
          inactiveSlideShift={80}
        />
        <Pagination
          dotsLength={this.state.ENTRIES1.length || 1}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={"rgba(255, 255, 255, 0.92)"}
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={slider1Ref}
          tappableDots={!!slider1Ref}
        />
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={"rgba(0, 0, 0, 0.3)"}
          barStyle={"light-content"}
        />
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollviewContentContainer}
          indicatorStyle={"white"}
          scrollEventThrottle={200}
          directionalLockEnabled={true}
        >
          {this.example1}
        </ScrollView>
      </View>
    );
  }
  componentDidMount = () => {
    this.fetchAllEvents();
  };
  handleToggle = () => {

  }
  fetchAllEvents = () => {
    api.getArrangedEvents().then(events => {
      events = events.map(event => {
        return {
          id: event.id,
          title: event.summary,
          subtitle: event.location,
          date: event.meeting_start,
          endDate: event.meeting_end,
          illustration: this.selectImage(event.location)
        };
      });
      this.setState({
        ENTRIES1: events
      });
    });
  };

  selectImage = (location) => {
    const matchingLocation = Object.keys(locationImages).filter(locate => {
      return location.includes(locate);
    })
    return locationImages[matchingLocation.join('')]
  }
}
