import { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Reposfilter() {
    const [repositories, setRepositories] = useState([])
    const [reserch, SetResearch] = useState('')
    const [filter, setFiltro] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const response = await Axios.get('https://api.github.com/users/linefmv/repos')
          const data = await response.data
          setRepositories(data)
        }
        fetchData()
        }, [])

    useEffect(() => {
        setFiltro(
            repositories.filter(repositoriesFromGitHub => {
                return repositoriesFromGitHub.name.includes(reserch)
            })
        )
    }, [reserch])

    return (
        <>
            <input placeholder="Find the repository" onChange={e => { SetResearch(e.target.value) }} />
            {filter.map(repositoriesFromGitHub =>
                <div key={repositoriesFromGitHub.id}>
                    <ul>
                        <li>
                            <h2>{repositoriesFromGitHub.name}</h2>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}
