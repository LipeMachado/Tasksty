import React from 'react';

interface GlobalStyleProviderProps {
    children: React.ReactNode
}

export function GlobalStyleProvider({ children }: GlobalStyleProviderProps) {
    return (
        <>
            <div
                className='p-[2.5rem] flex gap-[2.5rem] h-full'
            >
                {children}
            </div>
        </>
    )
}