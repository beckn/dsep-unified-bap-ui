import React, {useState} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import DetailHeader from '@components/DetailHeader';
import {Colors} from '@styles/colors';
import NavBar from '@components/Navbar';
import {Calendar} from 'react-native-calendars';
import {Text} from '@components/Text';
import moment from 'moment';
import {ICONS, SVGIcon} from '@components/SvgIcon';
import {Fonts} from '@styles/fonts';
import Tabs from '@components/Tabs';
import { commonStyles } from '@styles/commonStyles';

const MentorAvailableDate = ({navigation}) => {
  const [inititalDate, setInitialDate] = useState(
    moment(new Date(), 'YYYY-MM-DD').local(),
  );

  const Arrow = direction => {
    return direction.direction == 'right' ? (
      <View style={styles.arrowContainer}>
        <SVGIcon name={ICONS.IC_RIGHT_ARROW} />
      </View>
    ) : (
      <View style={styles.arrowContainer}>
        <SVGIcon name={ICONS.IC_LEFT_ARROW} />
      </View>
    );
  };

  const CalendarComp = () => {
    return (
      <View style={styles.calendarContainer}>
        <Calendar
          theme={{
            calendarBackground: Colors.background,
            dayTextColor: Colors.descText,
            todayTextColor: Colors.descText,
            textDisabledColor: Colors.descText,
            textDayFontFamily: Fonts.family.DM_SANS_REGULAR,
            textDayFontWeight: Fonts.weight.w4,
            textDayFontSize: Fonts.size.base,
            textSectionTitleColor: Colors.cardTitle,
            textDayHeaderFontFamily: Fonts.family.DM_SANS_REGULAR,
            textDayHeaderFontWeight: Fonts.weight.bold,
            textDayHeaderFontSize: Fonts.size.base
          }}
          disabledByDefault={true}
          disableAllTouchEventsForDisabledDays={true}
          initialDate={inititalDate.toString()}
          minDate={inititalDate.toString()}
          firstDay={1}
          onDayPress={day => {
            navigation.navigate("MentorSlotList")
          }}
          renderHeader={date => {
            const dateStr = date.toISOString();
            const endIndex = dateStr.indexOf('T');
            const month = moment(dateStr.slice(0, endIndex)).format('MMMM');
            const year = moment(dateStr.slice(0, endIndex)).format('YYYY');

            return (
              <View style={commonStyles.alignCenter}>
                <Text
                  fontFamily={Fonts.family.DM_SANS_REGULAR}
                  style={styles.monthText}>
                  {month}
                </Text>
                <Text
                  fontFamily={Fonts.family.DM_SANS_REGULAR}
                  style={styles.yearText}>
                  {year}
                </Text>
              </View>
            );
          }}
          renderArrow={direction => <Arrow direction={direction} />}
          markingType={'custom'}
          markedDates={{
            '2023-02-02': {
              disabled: false,
              customStyles: {
                container: styles.availableDateContainer,
                text: styles.availableDateText,
              },
            },
            '2023-02-09': {
              disabled: false,
              customStyles: {
                container: styles.availableDateContainer,
                text: styles.availableDateText,
              },
            },
            '2023-02-16': {
              disabled: false,
              customStyles: {
                container: styles.availableDateContainer,
                text: styles.availableDateText,
              },
            },
            '2023-02-23': {
              disabled: false,
              customStyles: {
                container: styles.availableDateContainer,
                text: styles.availableDateText,
              },
            },
          }}
        />
        <View style ={styles.pointer}>

        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavBar hasBackArrow={true} hasRightIcon={true} title={'Mentoring'} />
      <DetailHeader
        title="Mentor name"
        description="Frontend Architect | Founder - ABC company"
      />
      <Tabs
        tabData={[
          {label: 'Tutoring', comp: <CalendarComp />},
          {label: 'Rating', comp: <View />, rating : '4.9'},
        ]}
      />
      <View style={commonStyles.flex1}></View>
    </View>
  );
};

export default MentorAvailableDate;
