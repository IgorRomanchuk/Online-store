import GitHubIcon from '@mui/icons-material/GitHub'

import s from './footer.module.css'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p>
        Copyright © 2024 OnlineStore
        <span>
          <button
            onClick={() => window.open('https://github.com/IgorRomanchyk')}
          >
            <GitHubIcon />
          </button>
        </span>
      </p>
    </footer>
  )
}

export default Footer
