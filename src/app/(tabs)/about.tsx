import { Link } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function About() {
  const Ex01 = require("../../../assets/images/Ex01.png");
  const Ex02 = require("../../../assets/images/Ex02.png");
  const Ex03 = require("../../../assets/images/Ex03.png");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Patrimônios Tombados no Brasil</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>1. Centro Histórico de Ouro Preto (MG)</Text>
        <Image source={Ex01} style={styles.image}/>
        <Text style={styles.text}>Situado em Minas Gerais, este patrimônio mundial e cultural é um testemunho da época do ciclo do ouro. Suas ruas sinuosas e arquitetura barroca oferecem uma viagem no tempo ao Brasil colonial.</Text>
        <Text style={styles.text}><Text style={styles.bold}>Importância:</Text> Funciona como um testemunho vivo do ciclo do ouro no Brasil colonial.</Text>
        <Text style={styles.text}><Text style={styles.bold}>O que o tombamento protege:</Text> Garante a preservação de suas características únicas, como as ruas, a arquitetura barroca e as igrejas, assegurando que essa "viagem no tempo" continue disponível para as futuras gerações.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>2. Floresta Amazônica (Vários estados)</Text>
        <Image source={Ex02} style={styles.image}/>
        <Text style={styles.text}>Um dos maiores patrimônios naturais do mundo, sua rica biodiversidade e ecossistemas complexos são um campo fértil para pesquisas, além de serem fonte de inspiração e respeito pela natureza.</Text>
        <Text style={styles.text}><Text style={styles.bold}>Importância:</Text> É um dos ecossistemas mais vitais para o equilíbrio climático global e um repositório de biodiversidade inigualável.</Text>
        <Text style={styles.text}><Text style={styles.bold}>O que o tombamento protege:</Text> Ajuda a garantir serviços ecossistêmicos essenciais como a regulação climática e o fornecimento de recursos hídricos, mantendo a área protegida para pesquisas e preservação ambiental.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>3. Teatro Amazonas (AM)</Text>
        <Image source={Ex03} style={styles.image}/>
        <Text style={styles.text}>Este teatro, situado no coração de Manaus, é um testemunho do auge da era da borracha no Brasil. Com sua arquitetura neoclássica e interior luxuoso, é um marco da cultura e da história brasileira.</Text>
        <Text style={styles.text}><Text style={styles.bold}>Importância:</Text> Situado no coração de Manaus, o monumento funciona como um testemunho vivo do auge da era da borracha no Brasil.</Text>
        <Text style={styles.text}><Text style={styles.bold}>O que o tombamento protege:</Text> Resguarda a integridade de sua marcante arquitetura e interior luxuoso, garantindo que a estrutura não seja destruída ou descaracterizada, e fomentando o turismo e a pesquisa na região.</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subTitle}>Notícias</Text>
        <View style={styles.buttons}>
          <Link href="https://tirolesa.bondinho.com.br/blog/patrimonios-tombados/" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>10 patrimônios brasileiros que são tombados</Text>
            </Pressable>
          </Link>

          <Link href="https://www1.folha.uol.com.br/cotidiano/2026/05/massacre-de-soldados-negros-em-1844-gera-tombamento-inedito-de-patrimonio-historico-no-rs.shtml" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Massacre de soldados negros leva a tombamento</Text>
            </Pressable>
          </Link>

          <Link href="https://www.goiana.pe.gov.br/portal/noticias/0/3/4760/iphan-aprova-tombamento-federal-da-igreja-de-sao-lourenco-e-amplia-patrimonio-historico-de-goiana" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>IPHAN aprova tombamento federal de igreja</Text>
            </Pressable>
          </Link>

          <Link href="https://www.agenciaminas.mg.gov.br/noticia/minas-gerais-lidera-a-preservacao-do-patrimonio-cultural-no-brasil-125434" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Minas Gerais é referência em tombamento</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    marginBottom: 15,
  },
  header: {
    padding: 15,
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
    color: '#D4AF37',
    textAlign: 'center'
  },
  content: {
    padding: 15,
    backgroundColor: '#25292e',
    color: 'white',
  },
  section: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    padding: 15,
    backgroundColor: '#ffd33d',
    borderRadius: 8,
    width: '48%', // Two buttons per row
    marginBottom: 15,
  },
  buttonText: {
    color: '#25292e',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});
