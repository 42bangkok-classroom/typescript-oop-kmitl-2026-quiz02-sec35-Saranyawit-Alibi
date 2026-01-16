import axios from 'axios'


export function getEdgePosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error(error); 
      });
 
}
