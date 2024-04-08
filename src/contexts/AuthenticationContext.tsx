'use client';
import { createContext, useState } from 'react';
type AuthType = {
  login: boolean;
};

export const AuthContext = createContext<AuthType>({
  login: false,
});
export default function AuthProvider({ children }: { children: any }) {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}
