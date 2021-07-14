import React, { useContext } from 'react'
import { motion } from 'framer-motion';

import { Context } from './Provider';


export function DropDownSection({ option }) {
    const { updateOptionProps } = useContext(Context)

    return (
        <div>
            <option.WrappedContent />
        </div>
    );
}