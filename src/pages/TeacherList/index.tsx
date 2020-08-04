import React from 'react';
import PageHeader from '../../components/pageHeader';
import './style.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title='Estes são os proffys disponíveis'>
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://www.procuramed.com/static/images/doctor-mas.006f9.svg" alt="Pandora-Box"/>
                        <div>
                            <strong>Pandora Box</strong>
                            <span>Sexologia</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.

                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preco/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type='button'>
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;