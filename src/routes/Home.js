import Article from '../components/Article';

function Home() {
  return (
    <ul className="grid max-w-4xl mx-auto md:grid-cols-2">    
        <Article />
        <Article />
        <Article />
        <Article />  
    </ul>
  );
}

export default Home;
