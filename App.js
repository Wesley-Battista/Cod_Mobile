import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A Jornada de Wesley</Text>
      <Text style={styles.story}>
        Era uma vez, em uma pequena cidade, um jovem chamado Wesley Batista da Silva. Ele vivia uma vida comum,
        até que um dia, ao mexer em um antigo baú de família, encontrou um misterioso mapa.
        O mapa indicava um caminho desconhecido, levando a um lugar repleto de desafios e aventuras.

        Animado pela descoberta, Wesley decidiu embarcar nessa jornada inesperada. Com sua coragem e determinação,
        ele enfrentou florestas densas, montanhas íngremes e rios turbulentos. Ao longo do caminho, conheceu seres
        mágicos e encontrou artefatos poderosos que o ajudaram em sua busca.

        No dia 9 de fevereiro, Wesley alcançou o ponto marcado no mapa, onde uma surpresa extraordinária o aguardava.
        Uma antiga cápsula do tempo estava enterrada ali, contendo mensagens e lembranças de seus antepassados.

        Ao retornar para casa, Wesley percebeu que sua jornada não apenas enriqueceu sua vida, mas também deixou
        uma marca duradoura em sua comunidade. Seu espírito aventureiro inspirou outros a explorar o desconhecido
        e a buscar as riquezas escondidas em suas próprias histórias.
      </Text>
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
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  story: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

