
// 
export const searchUser = async (query) => {

    try{
      const request = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await request.json();
      return data;
    } catch(err){
      console.log('There is a problem witch fetch, query: ' + err)
    }
}

export const getUser = async (id) => {
  try{
    const request = await fetch(`https://api.github.com/search/users?q=${id}`);
    const data = await request.json();
    return data;
  } catch(err){
    console.log('There is a problem witch fetch, query: ' + err)
  }
}

export const getUserRepos = async (login) => {
  try{
    const request = await fetch(`https://api.github.com/search/users?q=${login}/repos`);
    const data = await request.json();
    return data;
  } catch(err){
    console.log('There is a problem witch fetch, query: ' + err)
  }
}