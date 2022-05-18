import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://cdn.pixabay.com/photo/2013/05/11/20/44/spring-flowers-110671_1280.jpg" />
      <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://cdn.pixabay.com/photo/2016/11/19/18/57/godafoss-1840758_1280.jpg" />
      <Post img="http://3.bp.blogspot.com/-zUKesNf_w9Q/UrrgF4ADRvI/AAAAAAAAFZY/zfjLUe0KE3g/s640/messi_heads_home_goal_forbarcelona.jpeg" />
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeI0s16YQL05WVA8M9WxO5WeK3xkPtV89l_w&usqp=CAU" />
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNLfD3zEgXGVCoiyuS7Vi91RqmmoqUTJJVw&usqp=CAU" />
    </div>
  );
}
