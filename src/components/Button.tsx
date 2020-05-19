import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../Theme';

interface IProps {
  children: string;
}

const Button = ({children}: IProps) => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.white,
    paddingVertical: theme.spacing.unit * 2,
    paddingHorizontal: theme.spacing.unit * 3,
    borderRadius: 5,
    elevation: 2,
    shadowColor: theme.colors.dark,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    margin: theme.spacing.unit,
  },
  buttonText: {
    color: theme.colors.dark,
    fontWeight: 'bold',
    fontSize: theme.sizes.regular,
    fontFamily: theme.fonts.bold,
  },
});

export default Button;
