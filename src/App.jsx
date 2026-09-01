import { useState } from 'react'
import './App.css'

function App() {
  const [reservation, setReservation] = useState(null)

  const handleReservation = (event) => {
    event.preventDefault()

    setReservation({
      service: event.target.service.value,
      barber: event.target.barber.value,
      date: event.target.date.value,
      time: event.target.time.value,
    })
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">

          <a href="#inicio" className="logo">
            BOOK<span>EASY</span>
          </a>

          <div className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#reservar">Reservar</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a href="#reservar" className="nav-button">
            Reservar Cita
          </a>

        </div>
      </nav>

      <main>

        {/* HERO */}

        <section className="hero" id="inicio">
          <div className="container hero-content">

            <div className="hero-text">

              <span className="hero-tag">
                RESERVAS RÁPIDAS Y SENCILLAS
              </span>

              <h1>
                Tu próximo corte
                <span>Comienza aquí</span>
              </h1>

              <p>
                Reserva tu cita de forma rápida y sencilla.
                Elige el servicio, selecciona tu barbero,
                escoge el horario y nosotros nos encargamos del resto.
              </p>

              <div className="hero-buttons">

                <a
                  href="#reservar"
                  className="primary-button"
                >
                  Reservar ahora
                </a>

                <a
                  href="#servicios"
                  className="secondary-button"
                >
                  Ver Servicio
                </a>

              </div>

            </div>

            <div className="hero-image">

              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=80"
                alt="Barbería moderna"
              />

            </div>

          </div>
        </section>


        {/* SERVICIOS */}

        <section className="services" id="servicios">
          <div className="container">

            <div className="section-heading">

              <span>NUESTROS SERVICIOS</span>

              <h2>
                Elige el servicio que necesitas
              </h2>

              <p>
                Servicios de corte profesional para que
                siempre luzcas como quieres.
              </p>

            </div>


            <div className="service-grid">

              <article className="service-card">

                <div className="service-icon">
                  ✂️
                </div>

                <h3>
                  Corte de cabello
                </h3>

                <p>
                  Corte personalizado según tu estilo.
                </p>

                <strong>
                  $25.000
                </strong>

              </article>


              <article className="service-card">

                <div className="service-icon">
                  🧔
                </div>

                <h3>
                  Corte + barba
                </h3>

                <p>
                  Corte de cabello y arreglo completo de barba.
                </p>

                <strong>
                  $40.000
                </strong>

              </article>


              <article className="service-card">

                <div className="service-icon">
                  💈
                </div>

                <h3>
                  Arreglo de barba
                </h3>

                <p>
                  Perfilado y cuidado profesional de barba.
                </p>

                <strong>
                  $20.000
                </strong>

              </article>

            </div>

          </div>
        </section>


        {/* RESERVA */}

        <section className="booking" id="reservar">
          <div className="container">

            <div className="booking-box">

              <div className="section-heading">

                <span>
                  RESERVA TU CITA
                </span>

                <h2>
                  Agenda tu próximo servicio
                </h2>

                <p>
                  Selecciona el servicio, profesional,
                  fecha y horario que prefieras.
                </p>

              </div>


              <form
                className="booking-form"
                onSubmit={handleReservation}
              >

                {/* SERVICIO */}

                <div className="form-group">

                  <label htmlFor="service">
                    Servicio
                  </label>

                  <select
                    id="service"
                    name="service"
                  >
                    <option>
                      Corte de cabello
                    </option>

                    <option>
                      Corte + barba
                    </option>

                    <option>
                      Arreglo de barba
                    </option>
                  </select>

                </div>


                {/* PROFESIONAL */}

                <div className="form-group">

                  <label htmlFor="barber">
                    Profesional
                  </label>

                  <select
                    id="barber"
                    name="barber"
                  >
                    <option>
                      Carlos
                    </option>

                    <option>
                      Andrés
                    </option>

                    <option>
                      Santiago
                    </option>

                    <option>
                      Luis
                    </option>
                  </select>

                </div>


                {/* FECHA */}

                <div className="form-group">

                  <label htmlFor="date">
                    Fecha
                  </label>

                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                  />

                </div>


                {/* HORA */}

                <div className="form-group">

                  <label htmlFor="time">
                    Hora
                  </label>

                  <select
                    id="time"
                    name="time"
                  >
                    <option>
                      9:00 AM
                    </option>

                    <option>
                      10:00 AM
                    </option>

                    <option>
                      11:00 AM
                    </option>

                    <option>
                      12:00 PM
                    </option>

                    <option>
                      1:00 PM
                    </option>

                    <option>
                      2:00 PM
                    </option>

                    <option>
                      3:00 PM
                    </option>

                    <option>
                      4:00 PM
                    </option>

                    <option>
                      5:00 PM
                    </option>

                    <option>
                      6:00 PM
                    </option>

                    <option>
                      7:00 PM
                    </option>

                  </select>

                </div>


                {/* BOTÓN */}

                <button
                  type="submit"
                  className="primary-button booking-button"
                >
                  Confirmar reserva
                </button>

              </form>


              {/* CONFIRMACIÓN */}

              {reservation && (
                <div className="reservation-success">

                  <h3>
                    ✅ ¡Reserva confirmada!
                  </h3>

                  <p>
                    Tu cita de{' '}
                    <strong>
                      {reservation.service}
                    </strong>{' '}
                    con{' '}
                    <strong>
                      {reservation.barber}
                    </strong>{' '}
                    quedó agendada para el{' '}
                    <strong>
                      {reservation.date}
                    </strong>{' '}
                    a las{' '}
                    <strong>
                      {reservation.time}
                    </strong>.
                  </p>

                </div>
              )}

            </div>

          </div>
        </section>

      </main>
    </>
  )
}

export default App