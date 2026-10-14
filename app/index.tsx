
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');

  function acessar() {
    setErro('');

    if (!login.trim() || !senha.trim()) {
      setErro('Preencha o login e a senha.');
      if (Platform.OS !== 'web') {
        Alert.alert('Atenção', 'Preencha todos os campos.');
      }
      return;
    }

    if (login.trim() === 'aluno' && senha === '123456') {
      router.replace({
        pathname: '/dashboard',
        params: { usuario: login.trim() },
      });
    } else {
      setErro('Login ou senha incorretos.');
      if (Platform.OS !== 'web') {
        Alert.alert('Erro', 'Login ou senha incorretos.');
      }
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Ionicons
                name="school-outline"
                size={35}
                color="#93C5FD"
              />
            </View>

            <Text style={styles.titulo}>
              Acadêmico
            </Text>

            <Text style={styles.subtitulo}>
              Sua jornada começa aqui.
            </Text>
          </View>

          <View style={styles.formulario}>
            <Text style={styles.label}>
              Usuário
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="person-outline"
                size={20}
                color="#94A3B8"
              />

              <TextInput
                style={styles.input}
                placeholder="Digite seu login"
                placeholderTextColor="#94A3B8"
                value={login}
                onChangeText={setLogin}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
              />
            </View>

            <Text style={styles.label}>
              Senha
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="#94A3B8"
              />

              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#94A3B8"
                secureTextEntry={!mostrarSenha}
                value={senha}
                onChangeText={setSenha}
                onSubmitEditing={acessar}
                returnKeyType="done"
              />

              <Pressable
                onPress={() => setMostrarSenha(!mostrarSenha)}
                accessibilityLabel={
                  mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'
                }
              >
                <Ionicons
                  name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
                  size={21}
                  color="#94A3B8"
                />
              </Pressable>
            </View>

            {erro ? (
              <View style={styles.erroContainer}>
                <Ionicons
                  name="alert-circle-outline"
                  size={17}
                  color="#FCA5A5"
                />
                <Text style={styles.erroTexto}>
                  {erro}
                </Text>
              </View>
            ) : null}

            <Pressable
              style={({ pressed }) => [
                styles.botao,
                pressed && styles.botaoPressionado,
              ]}
              onPress={acessar}
            >
              <Text style={styles.botaoTexto}>
                Entrar
              </Text>

              <Ionicons
                name="arrow-forward"
                size={19}
                color="#FFFFFF"
              />
            </Pressable>
          </View>

          <Text style={styles.rodape}>
            ACADÊMICO APP · 2026
          </Text>
        </View>

        <Text style={styles.creditos}>
          Desenvolvido com React Native e Expo
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1830',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingVertical: 40,
  },
  card: {
    width: '100%',
    maxWidth: 440,
    backgroundColor: '#16243E',
    borderRadius: 24,
    padding: 30,
    borderWidth: 1,
    borderColor: '#263957',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 35,
  },
  logo: {
    width: 72,
    height: 72,
    backgroundColor: '#243B63',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -1,
  },
  subtitulo: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 8,
  },
  formulario: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#CBD5E1',
    marginBottom: 9,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1D2B46',
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#344563',
    marginBottom: 22,
    minHeight: 54,
  },
  input: {
    flex: 1,
    minWidth: 0,
    color: '#FFFFFF',
    fontSize: 15,
    paddingVertical: 14,
    paddingHorizontal: 12,
    outlineStyle: 'none',
  } as any,
  erroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginBottom: 15,
  },
  erroTexto: {
    color: '#FCA5A5',
    fontSize: 13,
  },
  botao: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    minHeight: 54,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginTop: 5,
  },
  botaoPressionado: {
    opacity: 0.8,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rodape: {
    textAlign: 'center',
    color: '#64748B',
    fontSize: 11,
    letterSpacing: 2,
    marginTop: 35,
  },
  creditos: {
    color: '#64748B',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 25,
  },
});
