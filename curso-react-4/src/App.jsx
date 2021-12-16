import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Fulano',
    skills: ['React', 'Webpack', 'CSS']
  },
  {
    id: 2,
    name: 'Beltrano',
    skills: ['Angular', 'Webpack', 'SCSS']
  },
  {
    id: 3,
    name: 'Cicrano',
    skills: ['PHP', 'Laravel', 'Apache']
  }
]

const App = () => {
  const renderCustomer = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px'}} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomer)}
        </ul>
      </div>
    </div>
  );
};

export default App;
