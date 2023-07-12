import React, { useState } from "react";
import "./Login.css";

function Login() {
  // States
  const [errorMessages, setErrorMessages] = useState<{ name: string, message: string }>({ //hataları ve mesajları içeren nesne
    name: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);//formun gönderilip gönderilmediğini kontrol etmek için nesne
  const [rememberMe, setRememberMe] = useState(false);//remember me seçeneğinin durumunu tutmak için oluşturulan nesne

  //kontrol edilecek database dizisi
  const database = [
    {
      usereMail: "user1",
      password: "pass1"
    },
    {
      usereMail: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    emaill: "invalid email",
    pass: "invalid password"
  };

  //formun gönderilmesi
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //sayfa yenilenmesini engeller
    event.preventDefault();

    var { email, pass } = document.forms[0];//formdan email ve şifre alınır

    // databaseden giriş bilgileri bulunur
    const userData = database.find((user) => user.usereMail === email.value);

    // kullanıcı bilgilerini karşılaştırır
    if (userData) {
      if (userData.password !== pass.value) {
        // şifre geçersizse
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // kullanıcı adı bulunamazsa
      setErrorMessages({ name: "emaill", message: errors.emaill });
    }
  };

  // hata mesajı
  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // login formu JSX
  const renderForm = (
    <div className="form"> 
    {/* form gönderildiğinde çalışır */}

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="emaill" placeholder="Enter email" required />
          {renderErrorMessage("emaill")} {/* email hatalıysa */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" placeholder="Enter password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
        </div>
        <div className="button-container">
          <input type="submit"  />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? (
          <div>Admin is successfully logged in</div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;

