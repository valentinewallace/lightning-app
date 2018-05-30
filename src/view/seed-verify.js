import React from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Background from '../component/background';
import MainContent from '../component/main-content';
import { NamedField } from '../component/field';
import { Header, Title } from '../component/header';
import { H1Text, Text } from '../component/text';
import { GlasButton } from '../component/button';
import { InputField } from '../component/field';
import Card from '../component/card';
import Icon from '../component/icon';
import { FormStretcher, FormText } from '../component/form';
import {
    BalanceLabel,
    BalanceLabelNumeral,
    BalanceLabelUnit,
} from '../component/label';
import { color, font } from '../component/style';

const styles = StyleSheet.create({
    content: {
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    title: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 58,
      fontSize: 53,
    },
    card: {
      maxHeight: 500,
      width: 680,
      paddingTop: 38,
    },
    description: {
      color: color.greyText,
      fontSize: font.sizeM,
    },
    leaderTxt: {
      color: color.greyText,
      fontSize: 30,
      width: 50,
      alignSelf: 'flex-start',
    },
    entry: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginRight: 1,
    },
    input: {
      flex: 8,
    },
});

const SeedVerifyView = ({ store, nav, payment }) => (
  <Background image="purple-gradient-bg" style={styles.content}>
    <View style={styles.titleWrapper}>
      <H1Text style={styles.title}>Let's double check</H1Text>
    </View>
    <Card style={styles.card}>
      <Text style={styles.description}>
        Type the 4th, 15th, and 24th words of your seed.
      </Text>
      <SeedEntry leaderText="4." />
      <SeedEntry leaderText="15." />
      <SeedEntry leaderText="24." />
    </Card>
    <GlasButton>Next</GlasButton>
  </Background>
);

const SeedEntry = ({ leaderText }) => (
  <FormStretcher style={styles.entry}>
    <Text style={styles.leaderTxt}>{leaderText}</Text>
    <InputField
      style={styles.input}
      onChangeText={() => {}}
    />
  </FormStretcher>
);

SeedEntry.propTypes = {
  leaderText: PropTypes.string,
};

export default SeedVerifyView;
