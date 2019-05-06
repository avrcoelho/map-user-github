import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    // reactotronRedux: é um plugin que está sendo adicionado ao reactotron
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  // colocando o tron dentro do console, vai ter acesso global ao tron
  console.tron = tron;

  // por padrão ele não limpa o hisótrico da aplicação
  // por isso ao reiniciar a aplicação é limpado o histórico
  tron.clear();
}
