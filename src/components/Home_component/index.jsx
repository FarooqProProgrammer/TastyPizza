import React from 'react'
import HomePng from "../../img/home.png"



export default function Home_content() {
  return (
    <section class="home" id="home">
    <div class="home__container bd-container bd-grid">
        <div class="home__data">
            <h1 class="home__title">Tasty food</h1>
            <h2 class="home__subtitle">Try the best food of <br/> the week.</h2>
            <a href="#" class="button">View Menu</a>
        </div>

        <img src={HomePng} alt="" class="home__img"/>
    </div>
</section>
  )
}
