export const wall = () => {
  const section = document.createElement('section');
  section.classList.add('wall-section');
  section.innerHTML = `
  <header>
    <article class="hamburguer">
      <img src="images/hamburguer.png" alt="hamburguer"/>
    </article>
    <article class="logo-container">
        <article class="wall-logo">
        <img src="images/logo.png" alt="logo" width:"83px" height:"77px"/>
        </article>
        <article class="logo-span">
        <span class="peta">Peta</span><span class="gram">gram</span>
        </article>
    </article>
    <article class="profilePic">
        <img src="images/profile-img.png" alt="profile picture"/>
    </article>
  </header>
  <main class="container-wall">
    <section class="post-input"> 
        <article class="your-post">
            <form>
                <label for="your-postinput">¡Hola de nuevo, usuarix!</label><br>
                <input type="text" id="your-postinput" class="your-postInput" name="your-postinput" value="" placeholder="Escribe algo sobre tus mascotas..."><br>
                <button class="btnyour-post"> <img src="images/pawn.png" alt="pawn"/>Publicar</button>
            </form>
        </article>
    </section>
    <section class="posts-section">
        <article class="post">
            <div class="post-header">
                <img class="user-image" src="images/user1.png" alt="profile picture"/>
                <p>Fulanitx escribió:  </p>
            </div>
            <div class="post-content">
                <p> ¡Hola a todxs! Dale like si a tu mascota le gusta el pollito. </p>
            </div>
            <div class="post-bottom">
                <div class="reactions">
                    <img src="images/dog.png" alt="dog reaction"/>
                    <p>10</p>
                    <img src="images/cat.png" alt="cat reaction"/>
                    <p>18</p>
                </div>
                <button class="btnComment" type="button"> <img src="images/post-pawn.png"> Comentar </button>
            </div>
        </article>
        <article class="post">
            <div class="post-header">
                <img class="user-image" src="images/user2.png" alt="profile picture"/>
                <p>Fulanitx escribió:  </p>
            </div>
            <div class="post-content">
                <p> Les recomiendo estos lugares pet-friendly: Patazonia, TacoFriends y Cinemalitos. </p>
            </div>
            <div class="post-bottom">
                <div class="reactions">
                    <img src="images/dog.png" alt="dog reaction"/>
                    <p>2</p>
                    <img src="images/cat.png" alt="cat reaction"/>
                    <p>20</p>
                </div>
                <button class="btnComment" type="button"> <img src="images/post-pawn.png"> Comentar </button>
            </div> 
            
        </article>
        
    </section>
    
  </main>`;
  return section;
};