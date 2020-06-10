import React, {Component} from 'react'
import Main from '../template/Main'
import axios from "axios"

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'CRUD completo, sendo capaz de cadastrar, listar, alterar e excluir usuários'
}

const initialState = {
    user:{
        name:"",
        email:""
    },
    list:[]
}

const baseUrl = 'http://localhost:3001/users'

export default class UserCrud extends Component{

    state = {...initialState}

    clear(){
        this.setState({user:initialState.user})
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url,user)
        .then(resp=>{
            const list = this.getUpdatedList(resp.data)
            this.setState({user:initialState.user,list})
        })
    }

    getUpdatedList(user){
        const  list = this.state.list.filter(u=> u.id !== user.id)
        list.unshift(user)

        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value

        this.setState({user})
    }

    renderForm(){
        return (
            <div className="form mt-3">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            value={this.state.user.name}
                            onChange={e=>this.updateField(e)}
                            placeholder="Digite seu nome"  
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="email"
                            value={this.state.user.email}
                            onChange={e=>this.updateField(e)}
                            placeholder="Digite o seu e-mail"  
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e=>this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={e=>this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <Main {...headerProps}>
                Cadastro de usuários
                {this.renderForm()}
            </Main>
        )
    }
}