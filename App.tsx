import React from 'react'
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient  from 'react-native-linear-gradient'

export default function App(){
  return(
    <LinearGradient 
      colors={['#000', '#0066FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/reactLogo.png')}
        resizeMode='contain'
      />

      <Text style={styles.title}>
        Vamos
      </Text>
      <Text style={styles.title}>
        Começar!
      </Text>

      <Text style={styles.text}>
        Clique no botão abaixo para logar no app
      </Text>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={[styles.text, styles.register]}>Sem cadastro? Registre-se!</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },
  image:{
    width: 270,
    height: 270,
    marginTop: 40
  },
  title:{
     fontSize: 55,
     fontWeight: 'bold',
     color: '#fff'
  },
  text:{
    fontSize: 16,
    fontWeight: '400',
    color: '#fff'
  },
  loginButton:{
    marginTop: 50,
    backgroundColor: '#61daf8',
    width: 235,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 30,
    fontWeight: '700',
    color: '#fff'
  },
  registerButton:{

  },
  register:{
    marginTop: 5
  }
})