import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__box">
          <span className="profile__form-title">Имя</span>
          <input className="profile__input" id="profile-name" name="name" type="text" placeholder=""></input>
        </div>
        <div className="profile__divider"></div>
        <div className="profile__box">
          <span className="profile__form-title">E-mail</span>
          <input className="profile__input" id="profile-email" name="email" type="text" placeholder=""></input>
        </div>
      </form>
      <button className="profile__eddit">Редактировать</button>
      <button className="profile__exit">Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;