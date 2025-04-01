import GitHubIcon from '@mui/icons-material/GitHub'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <p>
        Copyright © 2024 OnlineStore
        <span>
          <button
            onClick={() => window.open('https://github.com/IgorRomanchuk')}
          >
            <GitHubIcon />
          </button>
        </span>
      </p>
    </footer>
  )
}
