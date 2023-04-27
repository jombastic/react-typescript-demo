import React, { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UseContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

const UserContextProvider = ({ children }: UseContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider