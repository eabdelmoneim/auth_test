import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from "@thirdweb-dev/react";

import "./styles/Home.css";

export default function Home() {
  const address = useAddress();
  const connect = useMetamask();

  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>

        <div>
          <>
            {!address ? (
              <button onClick={connect}>Connect</button>
            ) : user ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <button onClick={() => login()} disabled={!address}>
                Login
              </button>
            )}
            <p>User: </p>
            <pre>{JSON.stringify(user)}</pre>
          </>
        </div>
      </main>
    </div>
  );
}
