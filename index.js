import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

const alchemicaMinted = async () => {
  const result = await client.query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  });
};

const alchemicaSpentOnUpgrades = async() => {

}

const alchemicaSpentOnTiles = async () => {

}

const alchemicaSpentOnInstallations = async () => {

}

const tilesMinted = async () => {

}

const installationsMinted = async () => {

}

const upgradesInitiated = async () => {

}

/**
 * 
 * @param {number} interval # in days 
 */
const numberOfChannels = async (interval) => {

}

const gltrSpentOnUpgrades = async () => {

}

/**
 * 
 * @param {number} interval # in days
 */
const activeWallets = async (interval) => {

}

const numberOfPlayersBanned = async () => {

}

const amountOfAlchemicaSoldByBannedPlayers = async () => {
  
}

const numberOfPlayersUnbanned = async () => {

}