// Nama variabel yang disimpan pada file ini :
//userId: data[0].id_user,
//userPass: data[0].password,
//userName: data[0].nama,
//userEmail: data[0].email,
//userTelp: data[0].telp

//Data diambil pada saat user login untuk disimpan agar bisa digunakan pada page lain

import { createContext, useContext, useState, useEffect } from 'react';

const UserInputContext = createContext();

export const useUserInput = () => useContext(UserInputContext);

export const UserInputProvider = ({ children }) => {
  const [userInput, setUserInput] = useState(() => {
    // Try to retrieve user input data from localStorage on initial load
    const storedUserInput = localStorage.getItem('userInput');
    return storedUserInput ? JSON.parse(storedUserInput) : {};
  });

  useEffect(() => {
    // Save user input data to localStorage whenever it changes
    localStorage.setItem('userInput', JSON.stringify(userInput));
  }, [userInput]);

  const updateUserInput = (newUserInput) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      ...newUserInput,
    }));
  };

  const clearUserInput = () => {
    // Clear user input data from localStorage
    localStorage.removeItem('userInput');
    // Clear the state
    setUserInput({});
  };

  return (
    <UserInputContext.Provider value={{ userInput, updateUserInput, clearUserInput }}>
      {children}
    </UserInputContext.Provider>
  );
};
