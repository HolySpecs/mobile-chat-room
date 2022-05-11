import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAykHPNfsp_SzwuqnqjTvG1jj_zBJdQ1t0",
  authDomain: "chat-room-demo-e4140.firebaseapp.com",
  projectId: "chat-room-demo-e4140",
  storageBucket: "chat-room-demo-e4140.appspot.com",
  messagingSenderId: "244850361419",
  appId: "1:244850361419:web:ed6d367d8d642a6f4cb9ce",
  measurementId: "G-ZCM6T2MCMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
