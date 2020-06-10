import React,{Fragment} from 'react'
import './Main.css'
import Header from './Header'

export default props =>
    <Fragment>
        <Header></Header>
        <main className="content">
            Conteudo
        </main>
    </Fragment>