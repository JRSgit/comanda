import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'


const Login = () => {

  const handleLogin = () => {
    router.replace("home")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Realize o login para entrar</Text>

      <View style={styles.containerForm}>
        <View>
          <Text style={styles.labelForm}>Usuario</Text>
          <TextInput style={styles.inputForm}
           placeholder='Entre com seu usuario' placeholderTextColor="white" />
        </View>
        <View>
          <Text style={styles.labelForm}>Senha</Text>
          <TextInput style={styles.inputForm}
           placeholder='Entre com sua senha' placeholderTextColor="white" />
        </View>

      </View>
        <Pressable onPress={handleLogin} style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </Pressable>
      <StatusBar style='auto'/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { 
    fontSize: 26,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "normal"
  },
  containerForm: {
    width: 320,
    height: 150,
    gap: 12,
    marginTop: 15
  },
  labelForm: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray"
  },
  inputForm: {
    height: 40,
    width: 320,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#334155',
    borderRadius: 6,
    color: "#fff",
    fontSize: 16,
    fontWeight: "semibold",

  },
  button: {
    width: 220,
    height: 42,
    paddingHorizontal: 61,
    paddingVertical: 4,
    backgroundColor: "#4ADE80",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginTop:5
  
  },
  textButton: {
    color: "#000",
    textAlign:"center",
    fontSize: 18,
    fontWeight:"bold",
    
  }
})