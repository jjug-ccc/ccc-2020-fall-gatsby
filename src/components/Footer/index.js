import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content'>
          <div className='columns'>
            <div className='column is-three-fifths'>
              <h3>個人情報の取扱について</h3>
              <p> お申込戴きました情報は個人を特定できる状態で、本団体以外の第三者に開示することはございません。<br />
                (法律により開示が要求された場合、または他のお客様、あるいはイベントに関係する団体・個人の権利などを守る場合に必要という判断が合理的にされる場合を除きます)
              </p>
            </div>
            <div className='column is-one-quarter'>
              <h3>About Us</h3>
              <p><a href="https://www.java-users.jp/page/about/" target="_blank" rel="noopener noreferrer" >JJUGについて</a></p>
              <p><a href="https://www.java-users.jp/page/membership/"  target="_blank" rel="noopener noreferrer" >入会案内</a></p>
              <p><a href="https://www.java-users.jp/staff/" target="_blank" rel="noopener noreferrer" >幹事会メンバー</a></p>
            </div>
            <div className='column is-one-quarter'>
              <h3>Follow</h3>
              <p><a href="https://www.facebook.com/japanjug/" target="_blank" rel="noopener noreferrer" >Facebook</a></p>
              <p><a href="https://twitter.com/jjug"  target="_blank" rel="noopener noreferrer" >Twitter</a></p>
            </div>
          </div>
        </div>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer
