import React from 'react';

import './global.css';
import './App.css';
import './Main.css';
import './Sidebar.css';

//componente App
function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class='input-block'>
            <label htmlFor='github_username'>Usuário do GitHub</label>
            <input name='github_username' id='github_username' required />
          </div>

          <div class='input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input name='techs' id='techs' required />
          </div>

          <div className='input-group'>
            <div class="input-block">
              <label htmlFor='latitude'>Latitude</label>
              <input name='latitude' id='latitude' required />
            </div>
            <div className="input-block">
              <label htmlFor='longitude'>Longitude</label>
              <input name='longitude' id='longitude' required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAowMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABEEAABAwIDBAUHCQYGAwAAAAABAAIDBBEFEiEGMUFREyJhgdEyQnFykZKxBxQVI0NUocHhFjNSg/DxVWKCoqOyJCZT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACMRAAICAQQDAQADAAAAAAAAAAABAhEDBBIhQRMxURQiI2H/2gAMAwEAAhEDEQA/ALOOY33oljw7eqlr7cURHKvpz54IxSobQYbUVpjziFhflBtmtwUjGNlgZIBbM0OtyuqTaqf/ANcrhc6sA9rgFb0jy2lhaTfLG0X56KL/AJUa8bbO6DlommAhEiQcV2cclVkghZZRuYjHZSo3Rg7igYNZIpXRkJjgQkA26QpjpGDe5o9JTTPDewlYTyDrpWhkhTbKJ1REPOd7h8EnzgebFIe4D4lK0FMnypro0FT4kamSobHAR0MnRnM4amymNVMAPqW6kDV/6I3JjcWhzmKFwKe6SV3GNvcT+YQ7pJC+xljAtwZ+qltAkPXAgIWSS3lVbB3tHxQzquIOIdXCwA89o+CTkh7Gy3zhcqX55Tfe/wDlK5HkQeNl+wEqZrSFVS4zBEAWmKx5vuR3BBz7SxMzfXWHDI0D/sh5oLsSxTfQdtZduA1F9xLB/vCt2TMiY0SSNbZo3uWCxfaCHEaU0sTy51wSTJfd2bkNJtcASYmC9gPq49/tKxepgnZutPJxo9FNfBrZ5Nv4Wk/oo3YiMoc2J5BtvIC8zl2pqnXA6Wx/zBvwQcuPVj9+X/U4u/NZvWx6LWkfZ6jLimQgEwtvzfe3wQsmNsaSDVsAt5jb+K8vfilW77Vg9VoUbq6qf5VVJ3aKHrf8NFpF9PTDjkRJJnnLTuygjwQ8mNU9zmjkffdnf4lebOmkd5UsjvS8pl4zq7XtJWb1k36K/LE9Cfj1PG4ubHC3S2rwoDtUwal9O02sOsSsIHMvoGn0KVsUz/Ip5XeqwlS9TkK8GNGtftbc6zxgA6ZYioZNrXOJ/wDIk7o7LOigryLtoam3PonW+CbS0clQ65dkbzOql5spSw4y6+npKfO9sk46dxkOQ2JPbqon7RyO+8u9aTT4oSXDMQnbGKOmlnbG3KXRsvqmfQWNf4dU+4hyy9WCWPsIdjrz9k8+mRQuxd5+wHvLhs7jZ3YdP7B4px2ax0b8PmHe3xU/2/GP+v6iJ2KyH7Fo70w4pNwjYFMdnMa+4S++3xSfs7jX3GT32+KVZfjHeP6iD6Tn/hj9h8Vyl/Z7GPuT/fb4rkqy/GPdj+oD+c1Mr8vSTOcfNboT3BFU2BYzVkGnwivlvuc2neR7bK42J2hhwbGIqqpiMsbWlnVAL234i/wXs2EbTYdisPSUtUDbyo5Glrm+kK4YvIrsmU9vR4ozZjGsNDanEKF9PE4iNpe5t8x7L34Iit2ExbCaN9bibqfoI7AsZIS4kmw4fmvTflCqYpcNw9jMhzV8d8p9KJ+UmSnfspU5G2cZGWsf8y1eGKXoW+/TPK9kdjmbRSVGasfTtiaHDKwOvckcStZF8lWHMN311XJ3taPgj/kcovnLa+xIysYNBzc7wXoc2DzgXZqB2WTh4FxL2OUcr5iebxfJtgjPKgnk9adw+FkRHsTgEGgwuMnnI9zviVsHRTMc5pDrtNjomED7RpPOy6YxxdJHNLydtmcj2dwiIfV4XSN/lBSDC6SP93R07bcom+CvXx0+8NcO+6hfCPNJ71qtvwycZfSpMBZuiaB2NCY5j+LT7Em02KDAsMfVuZ0jrhrGk2uT/ZD7Pv2j2gweHFKGlwwQyueAyWpe1wyuLTuYeSTywi6ZPjlVg2Otd9FVYI+yO9eftj6MaaL1CvwjaeopZaeXDsPyyNLS+OtOnoBYF5tiUzMPxCegmMlNPA/JI8tbK1p05EcxquTUTUqZ06ePRo9jnBlDNe9zLfX0BX/Shefzx4tTB0xe/JHqTpu63InTqu9iMoMfrKeqMFfE4FvlMkFinDU7FUkPJpdzbg7NnmaUhLbJlLUQVcAkgII4i+oXPcOVl2KSatHE4tOmMeWaoaQgblI94Q0h3osSQ0vF0ij9qVKyjy4Aggt0KtMMxGamka4OdG8bnsKrtOSW4FrX7V4sZOL4PWaTRr59oH4hHTQ1LmF0MzZDK07wOY4FXO0GP0eJYa+mp6mOVxcHdUnhfmsDRvcRLc7m6fim4fKRIb8Wro88qr6YPCr46PRdg8Tjw0Tg1Igc8N3vy3sT4rf020NQ4fV1uceuCvBat944e/eooWSud9S035tQ8yX8XGx7ZXadH0PS7RVEZm6VkMo6Wx6Ru4ZQjjtFeM56WlyW3ALwjDDihFm107Yr65ZCQf1Vu+tqo2sidWzxNIsx5dfL7QrUMcle2geTIuz0+ur4ZqOciAMysfcttfcUl4ba5wfWC8krocadcjEJp2HeOkIv3Konqa+Nx6aapB7XlG/YqSBtzds2/wArErfoekDXXBqNfdKD+T/auelpIcMmjrPmrJCYzSFjbBzi52YuFzvOoOixUs7525ZnukbyebhNjmkibaKR8Y5MeQPwWTypytg4XGj13aPGMMcWdDT41PlkBe4VhLXAHVts+88NLdq80lnw6XGMRJobH51IR0zszmjMbC9yNBZB0lTM6pDfnM4zHUtldfTvQ9fTgyPkDZy9xLnPJvmJN7pTla4LxQUWX7G0koyMkljcWmwZKQ25a4C45dY9xI4lAV0s7skGI5nSsbaKUnW3AB3nDsP4KqpJ3wyauvbgVfU1fDPD0NSxsrOTuCjc2qN6S5JMCqqins9jni2m/etZHitJJEHSzQxv4sc4XCooxE1gdEOqB7FU4tjFZh87WU4h6Nzb9eO5vx/Jb4snjXJzZ8fkNbJieH/eoL+uEPJidB97g98LFftLXZsxZTk7v3XD+ilO0tUd8FMf5a1/VEw/MzX/AElQ/e4ffC5Yt+NzSOLjFCCeAakR+mI/zFYlslaC49VpKKgopJTrovPUW/R1jaPdJbeR4ptNTTufeMFpGhvwVgIaemFs2Z3JpUkImqSWsGSPitlD0RZH0DLtE56R7d0bN3eVY09IH26azWgaRN0A9PNPp6eOEdUdbiUS0AekreMF7JbJxewsbDgkqgJSWPJLXNtvXNFy0dqbJbitCQakqXwyGmmkIy6Md2dqMkYXC0lnBCV8XTMD2AFw4c12H1g0hnOm4OPDsKi+mDXY2fDYZNW2B7FW1GFzMF2m4Wkcy39ky3JS4RYKRlKeGWKpBe3QA6jXgrBzhkJLtLK3khZIOuwE8+PtQk+GxvFhu/hPipUNvoqzP1DS+rYQLtcP6KnjYInWJ1R1Rh9mEMEjO0aj8EK6Etble4Fw3EcVlONOzWEr4LSlqC0WJuEFtGxstMyZu9jtfQUFHUvjdlv3I8tNZTuYD5QslfFDM6W8gUhaODrp0jXRvLHnrN0ITQDy9igBLHs9q5Ot2/guSAtwIafR/WPADcmSVEkvVjADfwUUMJdYElxVpTU4YMzrX7F0pN+jK0Q01Fez5bqxa0NblYNEzNwG5PGg0Wiil6JsezTgpGHmCobnSxUoJtvVoCRp10Fkknfu5JrHmxPFNc4nigBW2y2tqgKyO0nStFgdDyui7kHQrpgHtcCOq8aqZcoaEw+uDbRTHTzXHh6VZkBZl/Ukcw6gHQ23qyw6uDbQVDrDzXcvSpjImUe0HuUdypZI/SRwKhLRuKoEO3qCppWzscLWcRo62oUuRv8ARUcjo4/3j2tB4l1viga4M7URGGRzJNJBv7e1Ppas05uTYBLjdVB85axlrtZcuGt7qlmmdIbWsFyS4fBuuUS4hUMnrHzRi2bf2lKya41DQNxFrXQalhkMTw4AEbiCN6hPkGEW5WA5XXI5sMT2h7adpDtQVyvaRuD4YwwaCymLyoAdVK1dRkSNKfcKIFKCmBO1OuogbJc2qdjJtNU0uTc2ibdDYCusdCuHk5eCYSla7VIBlTB0sZLL9I3d4IAHSxv3q0Dsr78DvQlfCGO6Zvkk9bRQ0NMJw7ECwCCc9Xc1x4disXx7je6zd73R1BX9HaGY9Tg48P0TUhOPZYm4WU2ja9uIEvJIc0FnYFrXBVuL4e2uhAByysvkcd3oKnIriOLp8mPSJ80T4ZXRyNyvabEJi5Dc5KkXIAeHvAsHEBcmrkWwNM03UgKhZuUjdy7jlJQdNU5pUXJSN3IGOJSXKbxSosB+bf2LrpnnH0j4JUDFuuDk0pOKVgS3uEhdmYI3NzA6JjV3nhDAAfDJDIWPIt5p7E0o7EPsvWKA4lQUG0Fb0ZEMzjkJs1x4ditSDbQhZwcVc4cSaSO5J0PxTi+hNUVG0lJ5NU0cmv8AyKoVsMWF6Cov/wDMrHrDKqkaQdo5cuXLMs5clXIA/9k=" alt="a" />
              <div className="user-info">
                <strong>LeiteGS</strong>
                <span>Node, PHP e MySQL</span>
              </div>
            </header>
            <p> dasdhadhsahdashd </p>
            <a href="github.com">Acessar perifl no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="data:image/jpeg;base64,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" alt="a" />

              <div class="user-info">
                <strong>LeiteGS</strong>
                <span>Node, PHP e MySQL</span>
              </div>
            </header>
            <p> dasdhadhsahdashd </p>
            <a href="github.com">Acessar perifl no GitHub</a>
          </li>

          <li class="dev-item">
            <header>
              <img src="data:image/jpeg;base64,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" alt="a" />

              <div class="user-info">
                <strong>LeiteGS</strong>
                <span>Node, PHP e MySQL</span>
              </div>
            </header>
            <p> dasdhadhsahdashd </p>
            <a href="github.com">Acessar perifl no GitHub</a>
          </li>
        </ul>
      </main>
    </div >
  );
}

export default App;