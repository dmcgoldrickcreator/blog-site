
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {useAuthState} from "react-firebase-hooks/auth"
import {useState, useEffect} from "react"
import Nav from "./Nav"
import Article from "./Article"
import {fetchArticles, createArticle} from "./ArticleService"
import ArticleEntry from "./ArticleEntry"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE3dOr3ON6OvtI2lNZR0SUm3eKuAlC_lg",
  authDomain: "blog-list-27ac6.firebaseapp.com",
  projectId: "blog-list-27ac6",
  storageBucket: "blog-list-27ac6.appspot.com",
  messagingSenderId: "862421192153",
  appId: "1:862421192153:web:4a5235e0e513e8e4fe5dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


function App() {
  const [user] = useAuthState(auth);
  const [articles, setArticles] = useState([]);
  const [articleId, setArticleId] = useState(null);
  const [writing, setWriting] = useState(null);


  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);


  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticleId(articleId);
      setArticles([article, ...articles]);
      setWriting(false);
    });
  }


  function SignIn(){
    function signInWithGoogle(){
      signInWithPopup(auth, new GoogleAuthProvider())
    }
    return <button onClick = {signInWithGoogle}>Sign in with Google.</button>
  }
  function BlogSite(){
    return (<div> Hello, {auth.currentUser.displayName} &nbsp;
      <button onClick={() => signOut(auth)}>Sign Out</button>
    <header>
    Blog <button onClick={() => setWriting(true)}>New Article</button>
     </header>

    <Nav articles={articles} setArticleId={setArticleId} />
    
  {writing ? (
    <ArticleEntry addArticle={addArticle} />
  ) : (
    <Article articleId={articleId} />
  )}
  </div>)
  
  }
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <section> 
        {user ? <BlogSite/> : <SignIn/> }
        </section>
      </div>
    );
  }

export default App;
