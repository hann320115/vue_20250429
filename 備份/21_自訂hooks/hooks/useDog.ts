  import axios from 'axios'
  import {reactive,onMounted} from 'vue'

  export default function useDog(){
    let dogList = reactive([])
    async function getDog(){
      try{
        let getDogData = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
        dogList.push(getDogData.data.message)
      }catch(error){
        alert(error)
      }
    }
    onMounted(()=>{
      getDog()
    })
    return {dogList,getDog}
  }