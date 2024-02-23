import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {

  btn = () => {
    alert("Logado com Sucesso");
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/fundo.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
          <Image source={require('./assets/login.jpg')} style={styles.logo} />
          <Text style={styles.titulo}>Login</Text>
        </View>

        <TextInput style={styles.inputname} placeholder='Insira seu E-mail' />
        <TextInput style={styles.inputname} placeholder='Insira sua Senha' secureTextEntry={true} />
        <Button
          onPress={btn}
          style={styles.button}
          title='Login'
        />

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputname: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10, // Adicionando bordas arredondadas
    paddingHorizontal: 10, // Espaçamento interno horizontal
  },
  button: {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 20,
  },
  titulo: {
    fontSize: 50,
    marginBottom: 10, // Reduzindo a margem inferior para remover a linha
    fontFamily: 'Arial', // Alterando a fonte
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 70, // Ajustando a largura da imagem
    height: 70, // Ajustando a altura da imagem
    marginRight: 10, // Adicionando uma margem à direita para separar a imagem do texto
    marginLeft: -10, // Movendo 10 pixels para a esquerda
  },
});
