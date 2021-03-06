import React from 'react'
import PeoplesRolesList from './PeopleRolesList'

export default function Movie({
    title,
    yearReleased,
    description,
    writers,
    directors,
    cast
}) {
    return (
    <article>
        <h2>{ title } <small>({ yearReleased })</small></h2>
        <p>{ description }</p>
        <h3>Cast</h3>
        <PeoplesRolesList items={ cast } />
        <h3>Writers</h3>
        <PeoplesRolesList items={ writers } />
        <h3>Directors</h3>
        <PeoplesRolesList items={ directors } />
    </article>
    )
}