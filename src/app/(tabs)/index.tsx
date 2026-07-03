import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const BannerImage = require("../../../assets/images/bannerInicial.png");
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={BannerImage}
          style={styles.image}
          contentFit="cover"
        />
        <Text style={styles.title}>Tombamento de Patrimônios Históricos</Text>
        <Text style={styles.textHero}>
          O tombamento é um instrumento legal de intervenção do Estado na propriedade que protege bens materiais (móveis ou imóveis) de valor histórico, artístico, cultural ou paisagístico, impedindo sua destruição. Ele não transfere a propriedade ao governo, mas garante sua preservação para as futuras gerações
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.subTitle, { color: '#D4AF37' }]}>
          E no Brasil?
        </Text>
        <Text style={[styles.text, styles.textWhite]}>
          Em território brasileiro, o processo de tombamento é coordenado pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN). Esta autarquia federal opera sob a tutela do Ministério do Turismo, dedicando-se à identificação, documentação e preservação de bens culturais de significativa importância para a nação.
        </Text>
        <Text style={[styles.text, styles.textWhite]}>
          O IPHAN trabalha em colaboração com órgãos estaduais e municipais de proteção ao patrimônio, assegurando uma abordagem mais integrada e abrangente na conservação das riquezas culturais brasileiras.
        </Text>
      </View>
      <View style={styles.content2}>
        <Text style={styles.subTitle}>
          E o que significa ser um patrimônio tombado em termos práticos?
        </Text>
        <Text style={styles.text}>
          Na prática, quando um bem é tombado, ele recebe uma série de proteções legais e regulamentações que objetivam prevenir sua destruição, danificação ou utilização inapropriada.
        </Text>
        <Text style={styles.text}>
          Tais medidas garantem que o patrimônio mantenha sua integridade e que continue a servir como uma fonte de educação, inspiração e recordação para as futuras gerações. Além disso, o tombamento pode frequentemente atrair investimentos para a conservação e revitalização do bem, bem como fomentar o turismo e a pesquisa acadêmica, contribuindo assim para a perpetuação e enriquecimento da memória e identidade cultural de uma comunidade ou nação.
        </Text>
      </View>
      <View style={styles.content2}>
        <Text style={styles.subTitle}>Patrimônios Mundiais</Text>
        <Text style={styles.text}>Patrimônios culturais são bens que carregam um significativo valor histórico, artístico ou científico, atuando como testemunhas vivas de épocas, eventos ou civilizações passadas. Eles podem ser manifestações imateriais, como tradições orais e festas populares, ou bens materiais, como monumentos e sítios arqueológicos.</Text>
        <Text style={styles.text}>Um exemplo emblemático de patrimônio cultural é o Coliseu em Roma, Itália. Este antigo anfiteatro romano não apenas marca a história grandiosa do Império Romano, mas também serve como um símbolo duradouro de inovações arquitetônicas e engenharias daquela época.</Text>
      </View>
      <View style={styles.content2}>
        <Text style={styles.subTitle}>Patrimônios Culturais</Text>
        <Text style={styles.text}>Os patrimônios mundiais são locais de excepcional importância para a humanidade como um todo, sendo reconhecidos e listados pela UNESCO por seu valor universal único. Esses locais podem ser tanto culturais quanto naturais, e seu reconhecimento visa fomentar a preservação e a conscientização sobre sua relevância global.</Text>
        <Text style={styles.text}>Como exemplo de um patrimônio mundial natural, temos a Grande Barreira de Coral na Austrália, um ecossistema vibrante e singular que abriga uma biodiversidade única e serve como um testemunho vívido da complexidade e beleza da vida marinha.</Text>
        <Text style={styles.text}>Já um exemplo de patrimônio mundial cultural seria a Pirâmide de Gizé, no Egito, um monumento que atesta a engenhosidade e o esplendor da civilização antiga egípcia.</Text>
      </View>
      <View style={styles.content2}>
        <Text style={styles.subTitle}>Patrimônios Naturais</Text>
        <Text style={styles.text}>Os patrimônios naturais, por sua vez, são áreas que possuem uma relevância ecológica significativa, sendo destacados pela sua beleza natural, processos ecológicos únicos ou por abrigarem habitats de espécies raras e ameaçadas. Eles são vitais não apenas pela sua biodiversidade, mas também pelos serviços ecossistêmicos que fornecem, como regulação climática e recursos hídricos.</Text>
        <Text style={styles.text}>Um exemplo clássico de patrimônio natural é o Parque Nacional de Yellowstone nos Estados Unidos. Este parque é um santuário de biodiversidade, com geysers majestosos, fauna diversificada e ecossistemas intactos, oferecendo uma janela para a riqueza e complexidade da natureza intocada.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    position: "absolute",
    top: "20%",
    width: "100%",
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textShadowColor: "#000000c4",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#D4AF37",
    textAlign: "center",
  },
  content: {
    padding: 15,
    backgroundColor: "#333333",
  },
  content2: {
    padding: 15,
  },
  textHero: {
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: "justify",
  },
  textWhite: {
    color: "white",
  },
});
