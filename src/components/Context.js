import React from 'react'

const AuthContext = React.createContext({
    isAuthenticated: false,
    login: () => {}
})

export default AuthContext

/*

    using context API:
    React.createContext() with optionaly value
    use context:
    wrap jsx with Context.Provider and set value
    wrap code with Context.Consumer: (context) => {}

    function as a child


*/