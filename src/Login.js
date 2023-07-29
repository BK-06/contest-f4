import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Login() {
  const suname=useSelector(state=>state.uname);
  const spassword=useSelector(state=>state.password);
  const navigate = useNavigate();

  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const useDidMountEffect = (func, deps) => {
  //     const didMount = useRef(false);
  //     useEffect(() => {
  //       if (didMount.current) {
  //         func();
  //       } else {
  //         didMount.current = true;
  //       }
  //     }, deps);
  // };
  const postData = async () => {
    if (!suname || !spassword) {
      return;
    }
    // hbingley1
    // CQutx25i8r
    let status = false;
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: suname,
        password: spassword,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          status = true;
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (!status) {
          alert(data.message);
          throw data;
        }
        dispatch({
          type: 'user',
          payload: data
        });
      })
      .then(() => {
        navigate('/profile')
      }).catch((e) => {
        console.log('Error while logging in ', e);
      });
  };
  useEffect(() => {
    postData();
  }, [suname, spassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const personData = {
      uname,
      password,
    };
    console.log(personData);
    dispatch({ type: "submit", payload: personData });
    setUname("");
    setPassword("");
  };

  const handleUname = (e) => {
    setUname(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <p>Welcome back👋</p>
      <h3>Sign in to your account</h3>
      <form onSubmit={handleSubmit}>
        <label>Your UserName</label>
        <br />
        <input type="text" value={uname} onChange={handleUname} autoComplete="on" />
        <br />
        <label>Password</label>
        <br />
        <input type="password" value={password} onChange={handlePassword} />
        <br />
        <button>CONTINUE</button>
        <br />
        <button>Forgot your password</button>
      </form>
      <p>Don't have an account?</p>
      <button>Sign up</button>
    </div>
  );
}
