const signUp = () => {
  const view = `
<section class="signUp-section" id="signUp-section">
 
  <form class="signUp-form">
    <span class="close">&times;</span>  <!-- &times es una entidad de caracteres HTML que representa el símbolo "×" -->
    <label class="form"> Nombre de Usuario </label>
    <input type="text" >
    <label class="form"> Correo Electronico </label> 
    <input type="email" id="userEmail">
    <label class="form"> Contraseña </label>
    <input type="password" id="userPassword">
    <button class="btnRegister" type="submit">Registrarse</button>
    <article class="return-home">
      <p>¿Ya tienes cuenta?</p> <a href="#">Ingresa aqui</a>
    </article>
  </form>
    
</section>`;
  return view;
};

export default signUp;
