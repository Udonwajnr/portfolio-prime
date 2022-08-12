import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Resume from '../components/Resume'
import Work from '../components/Work'
import Menu from '../components/Menu'
import MediaQuery from 'react-responsive'
import { useSelector} from 'react-redux/'
import request from 'graphql-request';
import { useEffect,useState } from 'react'
import { Triangle } from 'react-loader-spinner'
import '../Assets/css/Home.css'
import '../Assets/css/DarkMood.css'


const Home = () => {

  const [data,setData] = useState([])
  const [loading,setLoading]  = useState(true)
  const [filtered, setFiltered] = useState([])
  const [tags,setTags] = useState()
  const card = async ()=>{
    const {works} = await request("https://api-ca-central-1.hygraph.com/v2/cl6ngfq5c1lzs01t3hxdia0k6/master",
    `
    {
      works{
        id
        tags {
          id
          title
        }
        title
        image {
          id
          url
        }
        gitRepo
        preview
        description
      }
    }
    `
    )
    setData(works)
    setFiltered(works)
  }
  const dark  = useSelector(state=>state.darkMood.value)

  useEffect(()=>{
      setTimeout(()=>{
      setLoading(false)
    },4800)
  },[])
  
  useEffect(()=>{
    card()
  },[])

    return (
      <div
        className={dark?'home darkmood':'home'}
        >
        {loading?
          <div className='loader'>
            <Triangle color='black' height = "200"
    width = "200"/>
          </div>
          :
          <>
            <Navbar/>
            <Hero/>
            <Work data={data} filtered={filtered} setFiltered={setFiltered} tags={tags} setTags={setTags}/>
            <Resume/>
            <Contact/>
            <Footer/>
            <MediaQuery maxWidth={960}>
                <Menu /> 
              </MediaQuery>
        </>}
      </div>
  )
}

export default Home