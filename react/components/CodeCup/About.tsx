import React, { FunctionComponent } from 'react'

import TrophyIcon from '../../images/icone_trofeu@2x.png'
import Logo from '../../images/logo_codecup_02@2x.png'

const About: FunctionComponent = () => (
  <section className="bg-white flex w-100 pv9">
    <div
      className="flex justify-center"
      style={{ writingMode: 'vertical-lr', transform: 'rotate(-180deg)' }}
    >
      <p className="ph5">V T E X :: C O D E C U P</p>
    </div>
    <div className="flex ml8 justify-around flex-grow-1">
      <div className="w-40 pt6">
        <h1 className="t-heading-1" style={{ fontSize: '5rem' }}>
          o que é?
        </h1>
        <p className="lh-copy mv7">
          É a maratona de programação da VTEX para todos os aficionados por
          códigos e desafios. Nessa maratona competidores de todo o Brasil podem
          participar e testar suas habilidades.
        </p>
        <p className="lh-copy mv7">
          A competição possui duas fases: a primeira online, onde os
          competidores realizam uma série de contests e batalham pelas 10
          primeiras posições no ranking geral para garantir sua vaga na final
          presencial que acontecerá na sede da VTEX no Rio de Janeiro e um
          prêmio final de R$15.000 + o título de vencedor, muitas fotos,
          aplausos e reconhecimentos.
        </p>
        <img src={Logo} className="w-40 mv7" />
      </div>
      <div className="bg-emphasis w-40 br3 pv7 ph3 flex flex-column items-center justify-around">
        <p className="t-heading-1 c-on-muted-1 w-75 center">
          prêmio final de R$15.000 + o título.
        </p>
        <img src={TrophyIcon} className="w-40 center mv6" />
        <button className="br-pill mt6 mb3 bg-base c-on-base ph9 b--none">
          <p className="t-heading-4">quero participar</p>
        </button>
      </div>
    </div>
  </section>
)

export default About
