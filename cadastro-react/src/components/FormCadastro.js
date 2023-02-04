import { useState } from 'react';
import styles from './FormCadastro.module.css';
import Swal from 'sweetalert2';

const FormCadastro = () => {
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userEmail, setUserEmail] = useState();

  const isEmpty = (str) => !str.trim().length;

  const registerUser = (e) => {
    const inputField = document.getElementsByTagName('input');
    e.preventDefault();
    console.log({ userName, userPassword, userEmail });
    !(
      isEmpty(inputField[0].value) ||
      isEmpty(inputField[1].value) ||
      isEmpty(inputField[2].value)
    )
      ? Swal.fire({
          title: `Cadastro realizado com sucesso!`,
          icon: 'success',
        }).then(() => (window.location.href = ' index.html'))
      : Swal.fire({
          title: `Por favor preencha todos os campos`,
          icon: 'error',
        });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Cadastre-se Agora</h1>
      <form className={styles.formcontainer} onSubmit={registerUser}>
        <br></br>
        <label className={styles.label}>Nome do Usuário :</label>
        <br></br>
        <input
          type="text"
          placeholder="Digite seu nome"
          required="required"
          className={styles.input}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <br></br>
        <label className={styles.label}>Senha:</label>
        <br></br>
        <input
          type="password"
          placeholder="Digite sua senha"
          className={styles.input}
          required="required"
          onChange={(e) => setUserPassword(e.target.value)}
        ></input>
        <br></br>
        <label className={styles.label}>E-mail:</label>
        <br></br>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className={styles.input}
          required="required"
          onChange={(e) => setUserEmail(e.target.value)}
        ></input>
        <br></br>
        <p className={styles.box}>
          <span>
            <input type="checkbox" required="required"></input> Li e concordo
            com os termos e condições de uso.
          </span>
        </p>
        <input
          type="submit"
          className={styles.button}
          value="Cadastre-se"
        ></input>
      </form>
    </div>
  );
};

export default FormCadastro;
