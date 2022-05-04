import style from "./styles.module.scss"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Fetch() {
  const apis = ["posts", "photos", "users", "comments"]
  const [posts, setPost] = useState([])
  const [type, setType] = useState("users")
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    // axios.get(`https://jsonplaceholder.typicode.com/${type}`).then((data) => {
    //   setPost(data.data);
    //   setLoading(false);
    // });
    ;(async () => {
      const data = await axios.get(`https://jsonplaceholder.typicode.com/${type}`)
      setPost(data.data)
      setLoading(false)
    })()

    return () => {
      setLoading(true)
    }
  }, [type])

  return (
    <div className={style.App}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {apis.map((api) => (
        <button
          style={api === type ? { color: "white", background: "#333" } : {}}
          key={api}
          onClick={() => {
            return setType(api)
          }}
        >
          {api}
        </button>
      ))}
      {isLoading ? (
        <h5>Loading...</h5>
      ) : (
        <>
          {posts.map((post, index) => (
            <li key={index}>{post.title || post.name}</li>
          ))}
        </>
      )}
    </div>
  )
}
