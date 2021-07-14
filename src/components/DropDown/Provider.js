import React, { useCallback, useState, useEffect } from 'react';

export const Context = React.createContext();

export function DropDownProvider({ children }) {
    const [options, setOptions] = useState([1, 2, 3]);
    const [targetId, setTargetId] = useState(null);
    const [cachedId, setCachedId] = useState(null);

    const registerOption = useCallback(({
        id,
        optionDimensions,
        optionCenterX,
        WrappedContent,
        BackgroundHeight,

    }) => {
        setOptions((items) => [
            ...items, {
                id,
                optionDimensions,
                optionCenterX,
                WrappedContent,
                BackgroundHeight,
            },
        ]);
    }, [setOptions]
    );

    const updateOptionProps = useCallback((optionId, props) => {
        setOptions(items => 
            items.map(item => {
                if (item.id === optionId) {
                    item = { ...item, ...props}
                }
                
                return item;
            })
        )
    }, [setOptions])

    const getOptionById = useCallback(
        (id) => options.find((item) => item.id === id), 
        [options]);

        const deleteOptionById = useCallback((id) => {
            setOptions((items) => items.filter((item) => item.id !== id));
        }, [setOptions]
        );

        useEffect(() => {
            if(targetId !== null) setCachedId(targetId);
        } , [targetId]);



    return (
        <Context.Provider
            value={{
                registerOption,
                updateOptionProps,
                getOptionById,
                deleteOptionById,
                options,
                targetId,
                setTargetId,
                setTargetId,
                cachedId,
                setCachedId
            }}>
            {children}
        </Context.Provider> 
    )
}