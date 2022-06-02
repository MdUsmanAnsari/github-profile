const Card = ({user}) =>{

    const addZeroIfOneDigit =(number) =>{
        return number > 9 ? number : '0'+number;
    }
    
    
    const convertDate = ( str ) =>{
        const date = new Date(str)
        return `${date.getFullYear()}/${addZeroIfOneDigit(date.getMonth())}/${addZeroIfOneDigit(date.getDate())}`
    } 
    

    return (
        <div className="px-4 py-12 bg-gray-100 rounded-md max-w-lg text-center shadow-lg shadow-blue-300/20 ">
        <img className='w-24 rounded-full mb-2 inline' src={user.pic} alt="" />
        <h1 className='text-2xl mt-2 text-blue-800 font-semibold'>{user.name}</h1>
        <p className='text-gray-500'>@{user.username}</p>
       <div className='flex justify-between text-center mt-8'>
             <p className="border-r-2 border-gray-400 px-5">
                <span  className='block  text-gray-800 text-lg font-bold'>{user.publicRepos}</span>
                <span  className='block  text-gray-500 text-base font-medium'>Public Repos</span>
            </p>
            <p className="border-r-2 border-gray-400 px-5">
                <span className='block text-gray-800 text-lg font-bold'>{user.publicGits}</span>
                <span className='block text-gray-500 text-base font-medium'>Public Gits</span>
            </p>
            <p className="px-5">
                <span className='block text-gray-800 text-lg font-bold'>{convertDate(user.profileCreatedTime)}</span>
                <span className='block text-gray-500 text-base font-medium'>Created Date</span>
            </p>
       </div>
    </div>
    )
}

export default Card;