import React from "react";

const button1 = <button>Histórico dos clientes</button>
const button2 = <button>Cadastrar cliente</button>
const hasCustomer = false

const App = () => {
  const renderShowHistory = () => (
    <div>
      Clique para vizualizar o histórico
      <br />
      {button1}
    </div>
  )

  const renderAddCustomer = (
    <div>
      Clique para cadastrar o cliente
      <br />
      {button2}
    </div>
  )

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      { hasCustomer ? renderShowHistory() : renderAddCustomer }
    </div>
  );
};

export default App;
