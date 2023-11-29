'use client'

import React, { createContext, useState, useContext } from 'react'

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()

export const GlobalProvider = ({ children }) => {
    return (
        <GlobalContext.Provider>
        </GlobalContext.Provider>
    )
}
