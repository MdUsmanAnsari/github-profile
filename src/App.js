import axios from 'axios';
import {useState} from 'react';
import Card from './components/Card';



const  App = () => {

  const [userName, setUsername] = useState('')
  const [user, setUser] = useState(null);
  const [status,setStatus] = useState('')

  const userNameHandler = (e) =>{
          setUsername(e.target.value)
  }


  const onFormSubmit = (e) =>{
      e.preventDefault();

      setStatus('pending')

      axios.get(`https://api.github.com/users/${userName}`)
      .then(({data}) =>{
          const userData = {
              pic : data.avatar_url,
              name:data.name,
               username:data.login,
               publicRepos:data.public_repos,
               publicGits:data.public_gists,
               profileCreatedTime : data.created_at

          }
          setUsername('')
          setStatus('success')
          setUser(userData)
      }).catch(err =>{
        setStatus('error')
      })

  }


  return (
    <div className="flex min-h-screen justify-center bg-blue-100">
        <div className="px-10 py-20">
            <form className='max-w-lg flex justify-center gap-4 mb-10' onSubmit={onFormSubmit}>
              <input className="w-full rounded px-4 py-2 border-2 border-blue-400  outline-1 outline-blue-600" required name="username" onChange={userNameHandler} value={userName} placeholder="@username"/>
              <button className='bg-blue-600 text-gray-100 px-4 py-2 rounded-md'>Search</button>
            </form>

            {status === 'pending' && <p className='text-green-700 text-center text-lg'>Fetching...</p>}

            {status === 'error' &&   <p className='text-rose-700 text-center text-lg'>Sorry!! Invalid Username!!...</p>}
           
            {status === 'success' && <Card user={user} />}

         
        </div>
        
    </div>
  );
}

export default App;
