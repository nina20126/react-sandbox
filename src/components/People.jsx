import { useState, useEffect } from 'react';

function People () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(resData => setUsers(resData.data))
        .catch(err => console.log(err))
    }, [])
    return(
        <>
        <h2>RANDOM PEOPLE FROM REQRES FAKE API</h2>
            <table>
                <tbody>
                    {
                        users.map((user) =>
                        <tr key={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td><img src={user.avatar} /></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}

export default People;
