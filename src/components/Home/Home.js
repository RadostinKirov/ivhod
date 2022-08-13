import './Home.css';

const Home = () => {


    return (
<div className="home-page">
          
          <section className="table">
            <table>
              <tr>
                <th>Ап</th>
                <th>Семейство</th>
                <th>брой живущи</th>
                <th>такса</th>
                <th>Януари</th>
              </tr>
              <tr>
                <td>89</td>
                <td>Иванови</td>
                <td>3</td>
                <td>24</td>
                <td>платено</td>
              </tr>
              <tr>
                <td>89</td>
                <td>Иванови</td>
                <td>3</td>
                <td>24</td>
                <td>платено</td>
              </tr>
              <tr>
                <td>89</td>
                <td>Иванови</td>
                <td>3</td>
                <td>24</td>
                <td>платено</td>
              </tr>
              <tr>
                <td>89</td>
                <td>Иванови</td>
                <td>3</td>
                <td>24</td>
                <td>платено</td>
              </tr>

            </table>
          </section>
        

        <aside>

          <section className="prihodi">
            <h2>Приходи</h2>
            <p>100лв</p>
          </section>

          <section className="razhodi">
            <h2>Разходи</h2>
            <p>100лв</p>
          </section>

          <section className="nalichnost">
            <h2>Текуща наличност</h2>
            <p>100лв</p>
          </section>
        </aside>

      </div>
    )
}

export default Home;