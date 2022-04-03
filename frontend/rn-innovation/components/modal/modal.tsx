import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';

interface IModalProps {
  header?: string;
  children?: any;
}

export default function Modal({ header, children }: IModalProps) {
  return (
    <View style={styles.container}>
      {header && <Text style={styles.title}>{header}</Text>}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {children ?? null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
