// Задание 1


const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

let isLoading = false;

const createNewPost = async() => {
  try {
      isLoading = true;
      const response = await fetch(POSTS_URL, {
      method: "POST"
  })
    const result = await response.json();
    console.log(result);
  } catch(error) {
    console.error(error);
  } finally {
    isLoading = false;
  }
 
}
createNewPost();

// Задание 2

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds = async(ids) => {
  try {
      const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
      const response = await Promise.all(requests)
      const dataResults = response.map((data) => data.json());
      const allTask = await Promise.all(dataResults);
      console.log(allTask);
      } catch (error) {
      console.log(error);
    } 
      
   }  

    

getTodosByIds([43, 21, 55, 100, 10]);