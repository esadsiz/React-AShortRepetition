//?========================================================
//?                  USEEFFECT HOOK
//?========================================================
//! UseEffect Hook'u componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useEffect } from "react";

// useEffect fonksiyonunu çağırdığımızda React'e
// “DOM ile ilgili işlemleri tamamladıktan sonra bu fonksiyonu çalıştır.” demiş oluyoruz.
// Effect'ler component içerisinde oluşturulur.
// Bu sayede component'in state'ine ve props özelliklerine erişim sağlayabilirler.

// ##################################################

useEffect(() => {
  //* ilk renderdan sonra bir kez calisir.
}, []); // köseli parantez bos olsa da silinmemeli. silinirse her renderdan sonra bir daha bir daha calisir. hem did mount hem didupdate gibi davranir.

// ##################################################

useEffect(() => {
  //* ilk renderdan sonra bir kez calisir.
}, [state1, state2]); //* ayrica icerisine yazili statelerde her güncelleme oldugunda calisir.

// ##################################################

useEffect(() => {
  //* ilk renderdan sonra bir kez calisir.
  return () => {
    //* component ortadan (DOM tree'den) kaldirildiginda, (örnegin bir butonla), burasi calisir.
  };
}, []);

// ##################################################

useEffect(() => {
  //* ilk renderdan sonra bir kez calisir.
  return () => {
    //* component ortadan (DOM tree'den) kaldirildiginda, (örnegin bir butonla), burasi calisir.
  };
}, [var1, var2]); //* ayrica icerisine yazili statelerde her güncelleme oldugunda calisir.

// ##################################################

// useEffect Hook'unda didmount ve didupdate'i ayri kullanmanin yolu.
useEffect(() => {
  // your code on didMount;
  setDidMount(true);
}, []);

useEffect(() => {
  if (!didMount) return;
  // your code on didUpdate;
});

// ##################################################

import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  // adresten veriyi yakaladiysan, yakaladigin seyi (res) json'a cevir.
  // yakaladigin seyi json'a cevirdiysen, cevirdigin seyi (data), setUsers ile users'in icine at.
  //! biliyoruz ki state degistigi zaman render islemi tekrarlanir.
  //! burada en basta render edildi, api cagrildi, state degisti, state degisince tekrar render edildi,
  //! tekrar api cagrildi, state tekrar degisti vs vs. böylece sonsuz döngüye girdi.
  //! bizim bu noktada useEffect kullanarak bunu önlememiz gerekiyor.
  //! bu yüzden asagida, fetch fonksiyonunu useEffect icine yerlestirdik.

  useEffect(() => {
    //?componentDidMount
    getUsers();
  }, []);

  console.log(users);
  return (
    <div>
      <h1>USER LIST</h1>
      <div className="row">
        {users.map((user) => {
          return (
            <div className="col" key={id}>
              <img src={`https://i.pravatar.cc/300?img=${user.id}`} alt="" />
              <h6>{user.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
