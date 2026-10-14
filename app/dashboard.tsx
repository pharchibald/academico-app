
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  router,
  useLocalSearchParams,
} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard() {
  const { usuario } = useLocalSearchParams<{
    usuario?: string;
  }>();

  function sair() {
    router.replace('/');
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scroll}
    >
      <View style={styles.conteudo}>
        <View style={styles.cabecalho}>
          <View>
            <Text style={styles.etiqueta}>
              PAINEL DO ALUNO
            </Text>

            <Text style={styles.titulo}>
              Dashboard
            </Text>
          </View>

          <View style={styles.avatar}>
            <Ionicons
              name="person-outline"
              size={25}
              color="#2563EB"
            />
          </View>
        </View>

        <View style={styles.boasVindas}>
          <View style={styles.iconeBoasVindas}>
            <Ionicons
              name="hand-left-outline"
              size={26}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.boasVindasTitulo}>
            Olá, {usuario || 'aluno'}!
          </Text>

          <Text style={styles.boasVindasTexto}>
            Bem-vindo ao seu espaço acadêmico.
            Que bom ter você por aqui!
          </Text>

          <View style={styles.status}>
            <View style={styles.statusPonto} />
            <Text style={styles.statusTexto}>
              Acesso realizado com sucesso
            </Text>
          </View>
        </View>

        <Text style={styles.secaoTitulo}>
          Acesso rápido
        </Text>

        <View style={styles.cards}>
          <View style={styles.card}>
            <View style={styles.cardIcone}>
              <Ionicons
                name="book-outline"
                size={25}
                color="#2563EB"
              />
            </View>

            <Text style={styles.cardTitulo}>
              Estudos
            </Text>

            <Text style={styles.cardDescricao}>
              Seu espaço de aprendizado.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardIcone}>
              <Ionicons
                name="calendar-outline"
                size={25}
                color="#2563EB"
              />
            </View>

            <Text style={styles.cardTitulo}>
              Agenda
            </Text>

            <Text style={styles.cardDescricao}>
              Organize suas atividades.
            </Text>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.infoCabecalho}>
            <Ionicons
              name="information-circle-outline"
              size={23}
              color="#2563EB"
            />

            <Text style={styles.infoTitulo}>
              Sobre o aplicativo
            </Text>
          </View>

          <Text style={styles.infoTexto}>
            Aplicação desenvolvida com React Native,
            TypeScript, Expo e Expo Router.
          </Text>

          <Text style={styles.infoTexto}>
            Projeto acadêmico de desenvolvimento mobile.
          </Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.botaoSair,
            pressed && { opacity: 0.7 },
          ]}
          onPress={sair}
        >
          <Ionicons
            name="log-out-outline"
            size={20}
            color="#475569"
          />

          <Text style={styles.botaoSairTexto}>
            Sair da conta
          </Text>
        </Pressable>

        <Text style={styles.rodape}>
          ACADÊMICO APP · 2026
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 40,
  },
  conteudo: {
    width: '100%',
    maxWidth: 850,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  etiqueta: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#64748B',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0F172A',
    marginTop: 7,
  },
  avatar: {
    width: 52,
    height: 52,
    backgroundColor: '#DBEAFE',
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boasVindas: {
    backgroundColor: '#2563EB',
    borderRadius: 22,
    padding: 28,
    marginBottom: 30,
  },
  iconeBoasVindas: {
    marginBottom: 15,
  },
  boasVindasTitulo: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boasVindasTexto: {
    color: '#DBEAFE',
    fontSize: 15,
    lineHeight: 24,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginTop: 24,
    gap: 8,
  },
  statusPonto: {
    width: 8,
    height: 8,
    backgroundColor: '#86EFAC',
    borderRadius: 4,
  },
  statusTexto: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  secaoTitulo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 16,
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginBottom: 25,
  },
  card: {
    flexGrow: 1,
    flexBasis: 145,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    minHeight: 170,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardIcone: {
    backgroundColor: '#EFF6FF',
    width: 48,
    height: 48,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 7,
  },
  cardDescricao: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 20,
  },
  info: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 23,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 24,
  },
  infoCabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  infoTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  infoTexto: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 23,
    marginBottom: 8,
  },
  botaoSair: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    minHeight: 54,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  botaoSairTexto: {
    color: '#475569',
    fontSize: 15,
    fontWeight: '600',
  },
  rodape: {
    color: '#94A3B8',
    fontSize: 11,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 30,
  },
});
