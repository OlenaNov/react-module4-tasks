
import ColorPicker from "./ColorPicker";
import colorPickerOptions from 'components/ColorPicker/colorPickerOptions';
import GlobalStyle from "./GlobalStyle";
import Layout from "./Layout";
import Counter from "./Counter";
import SignupForm from "./SignupForm";
import Clock from "./Clock";
import PokemonView from "./PokemonView";
import CounterWithUseReducer from "./CounterWithUseReducer/CounterWithUseReducer";
import Friends from "./Friends/Friends";

export const App = () => {
  return (
    <Layout>
      <ColorPicker options={colorPickerOptions()}/>
      <Counter />
      <SignupForm />
      <Clock />
      <PokemonView />
      <CounterWithUseReducer />
      <Friends />
      <GlobalStyle />
    </Layout>
  );
};

