import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

export default class LegalScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: 'Conditions d\'utilisation',
      headerBackTitle: null,
      headerTintColor: 'goldenrod'
    }
  };

  render() {
    return (
      <ScrollView style={{flex: 1, padding: 15}}>
        <Text textAlign="justify">Les présentes conditions générales d’utilisation (ci-après dénommées « CGU ») ont pour objet de définir les modalités et conditions d’utilisation de la courante application mobile « Doney » (ci-après dénommée l’« Application »).
        En installant l’Application sur votre terminal et/ou en accédant à l’Application, en tant que visiteur et/ou utilisateur, vous acceptez sans condition ni réserve l’intégralité des CGU définies ci-après.
        </Text>
        <Text h4>
          Définitions
        </Text>
        <Text>
          - Application : Désigne la présente application logicielle.
          - Contenu : Désigne sans que cette liste soit limitative, la structure de l’Application, le contenu éditorial, les images, les dénominations sociales, ainsi que tout autre contenu présent au sein de l’Application et/ou tout autre élément composant l’Application.
          - Utilisateur : Désigne une personne physique ou morale ayant téléchargé l’Application.
          - Association : Désigne une Association loi 1901 ayant demandé son inscription sur la palteforme.
        </Text>
        <Text h4>
          Objet de l'application
        </Text>
        <Text>
          L’Application a pour objectif de fournir un ensemble d'informations sur différentes Associations inscrites à la plateforme.
          Plusieurs fonctionnalités sont proposés à l’Utilisateur et notamment :
          - La liste de l’ensemble des Associations inscrites sur la plateforme ;
          - Les informations textuelles et multimédias éditées par l'Association lors de son inscription ;
          - Les fonctionnalités de partage avec les réseaux sociaux ;
          - La mise en favoris d'une Association par le biais d'une liste stockée directement sur l'appareil de l'Utilisateur
          - Le vote d'un Utilisateur pour une Association
          - La réception de notifications à l'initiative de l'Association
          Cette liste est non exhaustive et peut être modifiée à tout moment sans qu'une quelqueconque responsabilité ne puisse être engagée à ce titre par qui que ce soit.
        </Text>
        <Text h4>Propriété Intellectuelle</Text>
        <Text>
          L'ensemble des éléments multimédias édités et publiés par l'Association relève de sa responsabilité exclusive en s'assurant ainsi de disposer de tous les droits nécessaire à leurs utilisations.
          L'Application s'attache simplement à distribuer à ses Utilisateurs les éléments fournis par l'Association.
          En revanche, les éléments graphiques se distinguant du contenus edités par les Associations et utilisés par l'Application relève d'une licence d'utilisation accordé par des tiers parties.
        </Text>
        <Text h4>Licence d'utilisation</Text>
        <Text>
          L'Application concède à l’Utilisateur un droit personnel d’utilisation de l’Application, du Contenu et des Services, non exclusif, révocable, non cessible, non transférable, mondial et gratuit uniquement pour ses besoins propres dans le cadre de l’utilisation de l’Application et des Services, à l’exclusion de toute autre finalité.
          Il est strictement interdit à l’Utilisateur d’accéder et/ou d’utiliser les codes source de l’Application et/ou des composants logiciels de l’Application.
          L’Utilisateur n’acquiert aucun droit de propriété intellectuelle sur l’Application, le Contenu et/ou les Services.
          Toute reproduction entière ou partielle, représentation, adaptation ou exploitation est strictement interdite.
          L'Utilisateur s'engage expressément à ce que l'utilisation de l'Application ne porte en aucun cas atteinte aux droits de l'Application et des Associaions, et notamment à ce que cette utilisation ne constitue pas un acte de contrefaçon, de concurrence déloyale ou parasitaire du Contenu.
        </Text>
        <Text h4>Données Personnelles</Text>
        <Text>L'Application ne collecte ni n'exploite aucune donnée personnelle liée à l'Utilisateur.
          La liste des favoris collecte les informations des Associations favorites de l'Utilisateur localement sans identifier l'Utilisateur.
        </Text>
        <Text h4>Disponibilité de l'Application</Text>
        <Text>
          Les meilleurs efforts pour sécuriser l'accès, la consultation et l'utilisation de l’Application sont fournis.
          L’Application est accessible 24 heures sur 24, 7 jours sur 7 sous réserve des éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement de l’Application.
          L'Application se réserve le droit d'être en maintenance sans avertissement préabable.
        </Text>
        <Text h4>Limitations d'usage</Text>
        <Text>
          L’accès et l’utilisation de l'Application se font aux risques et périls de l'Utilisateur.
          L’Application est fournie « tel quel » sans garantie quelle qu’elle soit.
          En raison de l'utilisation du réseau Internet, l'Application n'est en aucun responsable des aléas de ce réseau.
          l'Application décline toute responsabilité en cas de mauvaise utilisation du terminal et/ou d'incident lié à l'utilisation du terminal lors de son utilisation.
        </Text>
        <Text h4>Evolution des présentes conditions</Text>
        <Text>
          Les CGU applicables sont celles en vigueur à la date de la connexion et de l’utilisation de l’Application par l’Utilisateur.
          Les CGU peuvent faire l'objet de modifications à tout moment sans avertissement préablable. L'Utilisateur est donc invité à les consulter régulièrement.
        </Text>
        <Text h4>Mentions légales</Text>
        <Text></Text>
      </ScrollView>
    );
  }
}
