import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, StatusBar  } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
       <StatusBar hidden={true} />
      <WebView
        source={{ uri: 'https://play.ben88.win' }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  webview: {
    flex: 1,
  },
});

export default App;
