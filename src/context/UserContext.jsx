import React, { useState } from "react"

const userContext = React.createContext({})

export function UserContextProvider({children}){
    const [user, setUser] = useState({})

    return <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>
}

export default userContext