import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      lista: [],
      nome: ""
    }

    this.atualizaEstado = this.atualizaEstado.bind(this);
    this.buscarRepositorios = this.buscarRepositorios.bind(this);
  }

  buscarRepositorios(event) {
    event.preventDefault();

    console.log("valor do this.state.nome: " + this.state.nome);

    fetch('https://api.github.com/users/'+this.state.nome+'/repos?client_id=08ae9869476940271f80&client_secret=4c48c24feca954d2bb7a58e97989a4a4d99cdf94')
      .then(resposta => {
        if(resposta.ok){
          resposta.json()
          .then(data => this.setState({ lista: data }))
          .catch(erro => console.log("Erro: ", erro))
        } else {
          console.log("Erro: NotFound");
        }
      })
  }

  atualizaEstado(event){
    this.setState({ nome : event.target.value });
  }

  render() {
    return (
      <div>

        <form onSubmit={this.buscarRepositorios}>
          <input type="text" placeholder="Digite o nome" value={this.setState.nome} onChange={this.atualizaEstado}/>
          <button type="submit">Listar</button>
        </form>

        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Criado Em</th>
            <th>Tamanho</th>
          </tr>
        </thead>
        <tbody className="container">
          {
            this.state.lista.map(function (repositorie) {
              return (
                <tr key={repositorie.id}>
                  <td>{repositorie.id}</td>
                  <td>{repositorie.name}</td>
                  <td>{repositorie.description}</td>
                  <td>{repositorie.created_at}</td>
                  <td>{repositorie.size}mb</td>
                </tr>
              );
            })
          }
        </tbody>
      </div>
    );
  }
}

export default App;
