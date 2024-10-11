import React from 'react';
import {Image, SafeAreaView, ScrollView, Text} from 'react-native';
import {WELCOME, WELCOME_CONTENT, NEXT} from '../../const';
import {welcomeLogo} from '../../assets';
import styles from './styles';
import {ButtonSolid} from '../../components/ButtonSolid';

export const Welcome = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainContainer}>
        <Text style={styles.welcomeText}>{WELCOME}</Text>
        <Image style={styles.image} source={welcomeLogo} resizeMode="contain" />
        <Text style={styles.descriptionText}>{WELCOME_CONTENT}</Text>
        <ButtonSolid
          title={NEXT}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
