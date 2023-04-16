// ========== POKEMON =========
// import { Component } from "react"
// import PokemonForm from "./PokemonForm/PokemonForm";
// import { ToastContainer } from 'react-toastify';
// import { PokemonInfo } from "./PokemonInfo/PokemonInfo";
// ========== POKEMON =========

import ColorPicker from "./ColorPicker";
import colorPickerOptions from 'components/ColorPicker/colorPickerOptions';
import GlobalStyle from "./GlobalStyle";
import Layout from "./Layout";
import Counter from "./Counter";
import SignupForm from "./SignupForm";
import Clock from "./Clock";

export const App = () => {
  return (
    <Layout>
      <ColorPicker options={colorPickerOptions()}/>
      <Counter />
      <SignupForm />
      <Clock />
      <GlobalStyle />
    </Layout>
  );
};

// ========== POKEMON =========

// export class App extends Component {
//   state ={
//     pokemonName: '',
//   };

//   handleSubmit = pokemonName => {
//     this.setState({
//       pokemonName,
//     })
//   };


//   render() {
//     const { pokemonName } = this.state;
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>

//         <PokemonForm onSubmit={this.handleSubmit} />
//         <PokemonInfo pokemonName={pokemonName} />
//         <ToastContainer />
//       </div>
//     );
//   }
// };
