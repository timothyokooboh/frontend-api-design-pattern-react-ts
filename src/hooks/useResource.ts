import { useState } from "react"
import http from '../http-client'
import APIEndpoint from '../api-types'

const useResource = () => {
    const [loading, setLoading] = useState(false)

    const APICaller = (endpoint: APIEndpoint) => {
        setLoading(true)

        return  http(endpoint)
                .then(res => res)
                .catch(err => err)
                .finally(() => {
                    setLoading(false)
                })
    }

    return {
        loading,
        APICaller
    }
}

export default useResource;