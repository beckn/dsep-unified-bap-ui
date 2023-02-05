import React from 'react';
import {SafeAreaView, Text, View, FlatList, ScrollView} from 'react-native';
import Button from '@components/AppButton';
import {styles} from '../scholarships/styles';
import Spacer from '@components/Spacer';
import {Navigation} from '@interfaces/commonInterfaces';

function Description({navigation}: {navigation: Navigation}) {
  const onClickApply = () => {
    navigation.navigate('SubmitApplication');
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>{'Job Description'}</Text>
          <Spacer size={15}/>
          <Text>
            {
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.'
            }
          </Text>
        </View>
        <Spacer size={20} />

        <Text style={styles.heading}>{'Requirements:'}</Text>
        <Spacer />
        <View style={styles.row}>
          <View style={styles.dot}></View>
          <Text style={[styles.params, styles.left]}>
            {'Sed ut perspiciatis unde omnis iste natus error sit.'}
          </Text>
        </View>
        <Spacer />
        <View style={styles.row}>
          <View style={styles.dot}></View>
          <Text style={[styles.params, styles.left]}>
            {
              'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur & adipisci velit.'
            }
          </Text>
        </View>
        <Spacer />
        <View style={styles.row}>
          <View style={styles.dot}></View>
          <Text style={[styles.params, styles.left]}>
            {
              'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
            }
          </Text>
        </View>
        <Spacer />
        <Text style={styles.heading}>{'Informations:'}</Text>
        <Spacer />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Position'}</Text>
          <Text>{'Senior Designer'}</Text>
        </View>
        <Spacer />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Qualification'}</Text>
          <Text>{"Bachelor's Degree"}</Text>
        </View>
        <Spacer />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Experience'}</Text>
          <Text>{'3 Years'}</Text>
        </View>
        <Spacer />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Job Type'}</Text>
          <Text>{'Full time'}</Text>
        </View>
        <Spacer />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Specialization'}</Text>
          <Text>{'Design'}</Text>
        </View>
        <Spacer />
        <Spacer size={20} />
        <Text style={styles.heading}>{'Facilities and others:'}</Text>
        <Spacer />
        <View style={styles.row}>
          <View style={styles.dot}></View>
          <Text style={[styles.params, styles.left]}>{'Medical'}</Text>
        </View>
        <Spacer />
        <View style={styles.row}>
          <View style={styles.dot}></View>
          <Text style={[styles.params, styles.left]}>{'Dental'}</Text>
        </View>
        <Spacer />
        <View style={styles.row}>
          <View style={styles.dot}></View>
          <Text style={[styles.params, styles.left]}>
            {'Technical Certification'}
          </Text>
        </View>
        <Spacer />
      </SafeAreaView>
      <View style={styles.bottom}>
        <Button onPress={onClickApply} text={'Apply'} type="dark" />
        <Spacer size={10} />
      </View>
    </ScrollView>
  );
}

export default Description;
