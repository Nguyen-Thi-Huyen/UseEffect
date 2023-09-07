import { useState, useEffect} from "react";
/**
 * Các trường hợp sử dụng của useEffect
 * 1. useEffect(callback)
 *  - gọi callback mỗi khi component re-render
 * - gọi callback mỗi khi component thêm element vào DOM 
 * 2. useEffect(callback,[])
 * 3. useEffect(callback,deps)
 *  - callback sẽ được gọi lại mỗi khi dependency thay đổi
 */
//Lưu ý------------------------------ 
//1. Khi sử dụng cả 3 trường hợp trên , callback luôn được gọi sau khi Components mounted
//2. Cleanup function luôn được gọi trước khi Components unmounted
//3. Cleanup function luôn được gọi trước khi callback được gọi(trừ lần component được mounted)

function Content() {
  /*const tabs = ['posts', 'comments', 'albums','photos', 'todos','users'];
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([]); // nhớ ; khi kết thúc câu
  const [type, setType] = useState('posts')
  const [showGoToTop,setShowGoToTop] = useState(false)
  console.log(showGoToTop , 'showGoToTop'); 
  // console.log(type)
    useEffect(() => {
      console.log('Title changed');
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(posts =>   {
          setPosts(posts)
        })
    },[type])
    
    useEffect(() =>{
      const handleScoll = () =>{ 
        setShowGoToTop(window.scrollY >= 200 ) 
      }

      window.addEventListener('scroll', handleScoll);

      //cleanup fucntion : luôn được gọi trước khi Components unmounted
      // return () => {
      //   window.removeEventListener('scroll', handleScoll);
      // }

    }, [])
  
  
    return(
      <div style={{padding : 50}}>
        {
          tabs.map(tab => (
            <button
              style={type === tab ? {
                color : '#fff',
                backgroundColor : '#333'
              } : {}}
              key={tab}
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          ))
        }
        <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
        <ul>
          {
            posts?.map(post => (  // nhớ chấm hỏi tại vì khi post render lầm dầu tiên nó sẽ không có data cho mình
              <li key={post.id}>{post.title || post.name}</li>
            ))
          }
        </ul>
          {showGoToTop && (
            
          <button
          style={{
            position: 'fixed',
            right : 20,
            bottom: 20
          }}
          >Go to top</button>
          )}
      </div>
    )*/

  //LISTEN DOM EVENT
    //sử dụng event resize
   /* const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);

      //cleanup fuction
    }, [])
    return (
      <div>
        <h1>
          {width}
        </h1>
      </div>
    )*/

    //EFFECT WITH TIME FUCNTION, có sử dụng cleanup fucntion
    /*const [countDown, setCountDown] = useState(180);
    useEffect(() => {
      const timeId = setInterval(() => {
        setCountDown(prevState => prevState - 1);
        console.log('setCountDown')
      },1000)

      //sử dụng cleanup fuction để clear timeout vừa cài đặt để tránh rò rỉ bộ nhớ
      //khi không sử dụng cleanup fuction thì hàm setCountDown sẽ vẫn được thực 
      //hiện dù đã unmounted
      return (() => clearInterval(timeId))
    },[])
    return (
      <div>
        <h1>{countDown}</h1>
      </div>
    )*/
   


      //USEEFFECT WITH PREVIEW AVATAR: có sử dụng cleanup fuction ở trường hợp
      // Cleanup function luôn được gọi trước khi callback được gọi(trừ lần đầu component được mounted)
     /* const [avatar,setAvatar] = useState()
      useEffect(() =>{
        return ( () =>
          avatar && URL.revokeObjectURL(avatar.preview)
        )
      },[avatar])
      const handlePreviewAvatar = (e) =>{
        
        const file = e.target.files[0]
       
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
      }
      return (
        <div>
         <input
         type="file"
         onChange={handlePreviewAvatar}
         />
         {avatar && (
          <img src={avatar.preview} alt="" width= "80%" />
         )} 
        </div>
      )*/


      // USEEFFECT WITH CHAT APP
      const lessons = [
        {
          id: 1,
          name : 'Nội dung comment tại id = 1'
        },
        {
          id: 2,
          name : 'Nội dung comment tại id = 2'
        },
        {
          id: 3,
          name : 'Nội dung comment tại id = 3'
        }
      ]
      const [lessonId,setlessonId] = useState(1);

      useEffect(() => {

        const handleComment = ({detail}) =>{
          console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`,handleComment)
        return(()=>{
          window.removeEventListener(`lesson-${lessonId}`,handleComment)
        })
      },[lessonId])


      return (
        <div>
          <ul>
            {lessons.map(lesson => (
              <li
              key={lesson.id}
              style={{
                color: lessonId === lesson.id ?
                 'red' :'#333'
              }}
              onClick={() => setlessonId(lesson.id)}
              >
                {lesson.name}
              </li>
            ))}

            
          </ul>
        </div>
      )
  }
  export default Content;