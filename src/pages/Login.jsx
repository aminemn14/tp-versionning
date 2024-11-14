function Login() {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary">
        <div className="mx-auto max-w-lg px-6 lg:px-8 py-20">
          <div className="rounded-2xl bg-white shadow-xl">
            <form action="" className="lg:p-11 p-7 mx-auto">
              <div className="mb-11">
                <h1 className="text-gray-900 text-center text-3xl font-bold leading-10 mb-2">
                  Bienvenue !
                </h1>
                <p className="text-gray-500 text-center text-base font-medium leading-6">
                  Connectez-vous pour continuer
                </p>
              </div>
              <input
                type="text"
                className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
                placeholder="Nom"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
                placeholder="Mot de passe"
              />
              <button className="w-full mt-6 h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-secondary transition-all duration-300 bg-accent shadow-sm mb-11">
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
