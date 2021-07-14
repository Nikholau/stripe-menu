import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { Context } from './Provider'
import { DropDownSection } from './Section'

export function DropDownRoot() {

    const { options } = useContext(Context);
    return (
        <div className="dropdown-root">
            <div>
                <div className="dropdown-container">
                    {options.map(item =>
                        <DropDownSection key={item.id} option={item} />)}
                </div>
            </div>
        </div>
    );
}
