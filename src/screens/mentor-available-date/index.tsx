import React, {useEffect, useState} from 'react';
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
import {commonStyles} from '@styles/commonStyles';
import {useMentorContext} from '@context';
import HeadingTitle from '@components/HeadingTitle';

const MentorAvailableDate = ({navigation}) => {
  const [inititalDate, setInitialDate] = useState(
    moment(new Date(), 'YYYY-MM-DD').local(),
  );
  const {selectedMentorData} = useMentorContext();
  const markedDate = moment(selectedMentorData.timingStart).format(
    'YYYY-MM-DD',
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
            textSectionTitleColor: Colors.cardTitle,
            textDayHeaderFontFamily: Fonts.family.DM_SANS_REGULAR,
            textDayHeaderFontWeight: Fonts.weight.bold,
            textDayHeaderFontSize: Fonts.size.base,
          }}
          disabledByDefault={true}
          disableAllTouchEventsForDisabledDays={true}
          initialDate={inititalDate.toString()}
          // minDate={inititalDate.toString()}
          firstDay={1}
          onDayPress={day => {
            navigation.navigate('MentorSlotList');
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
            [markedDate]: {
              disabled: false,
              customStyles: {
                container: styles.availableDateContainer,
                text: styles.availableDateText,
              },
            },
          }}
        />
        <View style={styles.pointer}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavBar
        hasBackArrow={true}
        hasRightIcon={true}
        rightIconName={ICONS.IC_OPTIONS}
        title={'Mentoring'}
      />
      <DetailHeader
        title={selectedMentorData?.mentor?.name}
        description={selectedMentorData?.mentor?.experience}
      />
      <HeadingTitle title="Available Dates" />
      <CalendarComp />
      <View style={commonStyles.flex1}></View>
    </View>
  );
};

export default MentorAvailableDate;
