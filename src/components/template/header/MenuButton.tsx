
import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuButton(props: any) {
    return (
        <Link to={props.path} className="transition hover:scale-105 duration-75 hover:font-semibold text-md md:text-lg font-medium self-center w-fit hover:text-buttonHover">
            {props.name}
        </Link>
    )
}
