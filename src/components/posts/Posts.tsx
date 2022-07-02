import { type } from '@testing-library/user-event/dist/type'
import useFetch from 'hook/useFetch'
import React from 'react'


const url = `http://jsonplaceholder.typicode.com/posts`

type Post ={
    userId: number
    id: number
    title: string
    body: string
}

export default function Posts() {
    const { data, error } = useFetch<Post[]>(url)

    console.log(data)

    if (error) return <p>There is an error.</p>
    if (!data) return <p>Loading...</p>
    return (
        <>
            <div className="container mt-4 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((post) => (
                        <div className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                            <div className="m-3">
                                <h2 className="text-lg mb-2">{post.title}
                                    <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">{post.id}</span></h2>
                                <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">{post.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}




