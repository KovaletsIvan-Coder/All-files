import {useState } from 'react';
import Bascet from '../../Component/Basket/Basket';
import PostList from '../../Component/PostList/PostList';
import PostFilter from '../../Component/PostFilter/PostFilter';
import { usePost } from '../../hook/usePost';

function MainPage() {
  const [posts] = useState([
  {name:'TREK Top Fuel 9.7', id:1, src:'./imeges/TREK Top Fuel 9.7.jpg', alt:'TREK Top Fuel 9.7',price:3000},
  {name:'Sender CFR 29', id:2, src:'./imeges/Sender CFR 29.png', alt:'Sender CFR 29',price:3100},
  {name:'Giant Trance X 29', id:3, src:'./imeges/Giant Trance X 29 3.jpg', alt:'Giant Trance X 29',price:2500},
  {name:'Specialized Demo Race 29', id:4, src:'./imeges/Specialized Demo Race 29.jpg', alt:'Specialized Demo Race 29',price:2800},
  {name:'GT Force Carbon Pro', id:5, src:'./imeges/GT Force Carbon Pro.jpg', alt:'GT Force Carbon Pro',price:2599},
  {name:'YT Jeffsy Core 3', id:6, src:'./imeges/YT Jeffsy Core 3 Review.png', alt:'YT Jeffsy Core 3',price:2900},
  ])
  const [itemInBasket, setItemInBasket] = useState(0)
  const [filter, setFilter] = useState({sort:'', search:''})
  const serchedAndSortedPosts = usePost(posts, filter.sort, filter.search)


  const addNumber = (NeWNumber)=>{
    setItemInBasket(itemInBasket + NeWNumber)
  }

    
  return (
    <div className="App">
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      <Bascet itemInBasket={itemInBasket}></Bascet>
      <PostList posts={serchedAndSortedPosts} itemInBasket={itemInBasket} add={addNumber}></PostList>
    </div>
  );
}

export default MainPage;
