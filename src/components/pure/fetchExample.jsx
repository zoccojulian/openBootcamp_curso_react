import React, { useEffect , useState} from 'react';
import { getAllUsers , getAllPagedUsers, getUserDetails, login} from '../../services/fetchService.js';

export default function FetchExample() {

    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState(2);
    const [totalUsers, setTotalUsers] = useState(12);
    const [userPerPage, setuserPerPage] = useState(6);
    const [selectedUser, setSelectedUser] = useState( null );

    useEffect(() => {
        
       obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then( ( response ) => {
                console.log('All Users', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUsers(response.total);
                setuserPerPage(response.per_page);
            })
            .catch ( ( error) => {
                alert( `Error while retriving the users: ${error}`);
            })
            .finally( ( ) => {
                console.log ( 'Ened obtaining users:')
                console.table(users)
            })
    }

    const obtainPagedUsers = ( page ) => {
        getAllPagedUsers(page)
            .then( ( response ) => {
                console.log('All Paged Users', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUsers(response.total);
                setuserPerPage(response.per_page);
            })
            .catch ( ( error) => {
                alert( `Error while retriving the users: ${error}`);
            })
            .finally( ( ) => {
                console.log ( 'Ened obtaining users:')
                console.table(users)
            })
    }

    const obtainUsersDetails = (id) => {
        getUserDetails(id)
        .then( ( response ) => {
            console.log('All Paged Users', response.data);
            setSelectedUser(response.data);
            
        })
        .catch ( ( error) => {
            alert( `Error while retriving the users: ${error}`);
        })
        .finally( ( ) => {
            console.log ( 'Ened obtaining users:')
            console.table(selectedUser);
        })
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then( ( response ) => {
                console.log('TOKEN', response.token);
                sessionStorage.setItem('token', response.token)
                
            })
            .catch ( ( error) => {
                alert( `Error while retriving the users: ${error}`);
            })
            .finally( ( ) => {
                console.log ( 'ended login user. Navigate to home...:')
            })
    }

    return (
        <div>
            <button onClick={ authUser} >Auth User</button>
            <h2>Users: </h2>
            {users.map( ( user, index) => 
                (
                    <p key={index} onClick= { () => obtainUsersDetails(user.id) } >
                        {user.first_name} { user.last_name}
                    </p>
                )
            )}
            <p>Showing { userPerPage } users of { totalUsers } in total.</p>
            <button onClick={ () => obtainPagedUsers(1)}> 1</button>
            <button onClick={ () => obtainPagedUsers(2)}> 2</button>
            <div>
                
                { selectedUser != null ? (
                    <div>
                        <h3>
                            User Details
                        </h3>
                        <p>Name: { selectedUser.first_name }</p>
                        <p>Last Name: { selectedUser.last_name }</p>
                        <p>Email: { selectedUser.email }</p>
                        <img alt='avatar' src={ selectedUser.avatar } style={ { height:'150px', width:'150px'} } />
                    </div>
                ) :
                (<h6>Please click on a User to see its details</h6>)
                }
            </div>
        </div>
    )
}
